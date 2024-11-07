//Specifies document contents for tasks
import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
    date: {
        type: String,
        required: true
    },
    status:{
        type: String,
        default: "Incomplete",
    },
})

export default mongoose.models.Task || mongoose.model('Task', taskSchema)
