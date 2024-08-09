import { Schema, model, models } from "mongoose"

const ContactFormSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		maxlength: 46
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		maxlength: 46
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		maxlength: 62
	},
	queryType: {
		type: String,
		required: true,
		enum: ['general enquiry', 'support request'],
		trim: true,
		lowercase: true
	},
	message: {
		type: String,
		required: true,
		trim: true,
		maxlength: 2000
	},
	consent: {
		type: Boolean,
		required: true
	}
})

export default models?.ContactForm || model('ContactForm', ContactFormSchema)
