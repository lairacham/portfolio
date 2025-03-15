import mongoose from 'mongoose'

export interface ITechnology extends mongoose.Document {
  name: string
  proficiency?: number
}

const TechnologySchema = new mongoose.Schema<ITechnology>({
  // The name of the technology
  name: {
    type: String,
    required: [
      true,
      'Please provide a name for this language, framework, or technology.',
    ],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  // Proficiency, if applicable
  proficiency: {
    type: Number,
    required: false,
  },
})

export default mongoose.models.Technology ||
  mongoose.model<ITechnology>('Technology', TechnologySchema)
