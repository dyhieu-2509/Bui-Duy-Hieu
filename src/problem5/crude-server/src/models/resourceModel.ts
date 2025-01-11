import mongoose, { Schema, Document } from "mongoose";

export interface IResource extends Document {
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const resourceSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true }
);

export const ResourceModel = mongoose.model<IResource>("Resource", resourceSchema);
