import mongoose, { Schema, Document } from 'mongoose';
export interface RecipeInterface extends Document {
  name: string;
}

const RecipeSchema: Schema = new Schema({
  name: { type: String, required: true }
});

export default mongoose.model<RecipeInterface>('Recipe', RecipeSchema);