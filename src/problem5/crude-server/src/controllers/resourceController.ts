import { Request, Response } from "express";
import * as resourceService from "../services/resourceService";
import { ResourceModel } from "../models/resourceModel";

export const createResource = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description } = req.body;

        if (!name || !description) {
            res.status(400).json({ message: "Name and description are required" });
            return;
        }

        const existingResource = await ResourceModel.findOne({ name });
        if (existingResource) {
            res.status(400).json({ message: `Resource with name '${name}' already exists` });
            return;
        }

        const resource = await resourceService.create({ name, description });
        res.status(201).json(resource);
    } catch (error) {
        res.status(500).json({ message: "Error creating resource", error });
    }
};

export const listResources = async (req: Request, res: Response): Promise<void> => {
    try {
        const sortOrder = req.query.createAt === 'DESC' ? 'DESC' : 'ASC';
        const resources = await resourceService.list(sortOrder);
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: "Error listing resources", error });
    }
};

export const getResource = async (req: Request, res: Response): Promise<void> => {
    try {
        const resource = await resourceService.get(req.params.id);
        if (!resource) {
            res.status(404).json({ message: "Resource not found" });
        } else {
            res.status(200).json(resource);
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving resource", error });
    }
};

export const updateResource = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        const existingResource = await ResourceModel.findById(id);
        if (!existingResource) {
            res.status(404).json({ message: "Resource not found" });
            return;
        }

        if (name && name !== existingResource.name) {
            const nameConflict = await ResourceModel.findOne({ name });
            if (nameConflict) {
                res.status(400).json({ message: `Resource with name '${name}' already exists` });
                return;
            }
        }

        const updatedFields: Partial<{ name: string; description: string }> = {};
        if (name) updatedFields.name = name;
        if (description) updatedFields.description = description;

        const updatedResource = await resourceService.update(id, updatedFields);

        res.status(200).json(updatedResource);
    } catch (error) {
        res.status(500).json({ message: "Error updating resource", error });
    }
};

export const deleteResource = async (req: Request, res: Response): Promise<void> => {
    try {
        const isDeleted = await resourceService.remove(req.params.id);
        if (!isDeleted) {
            res.status(404).json({ message: "Resource not found" });
        } else {
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting resource", error });
    }
};
