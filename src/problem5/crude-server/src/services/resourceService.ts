import { ResourceModel, IResource } from "../models/resourceModel";

export const create = async (
    data: Partial<IResource>
): Promise<IResource> => {
    const resource = new ResourceModel(data);
    return await resource.save();
};

export const list = async (
    sortOrder: 'ASC' | 'DESC' = 'ASC'
): Promise<IResource[]> => {
    const sortValue = sortOrder === 'ASC' ? 1 : -1;
    return await ResourceModel.find().sort({ createdAt: sortValue });
};

export const get = async (
    id: string
): Promise<IResource | null> => {
    return await ResourceModel.findById(id);
};

export const update = async (
    id: string,
    data: Partial<IResource>
): Promise<IResource | null> => {
    return await ResourceModel.findByIdAndUpdate(id, data, { new: true });
};


export const remove = async (
    id: string
): Promise<boolean> => {
    const result = await ResourceModel.findByIdAndDelete(id);
    return result !== null;
};
