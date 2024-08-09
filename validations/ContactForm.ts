import { z } from 'zod'

export const ContactFormValidation = z.object({
	firstName: z
		.string()
		.trim()
		.toLowerCase()
		.min(1, 'First name is required')
		.max(46, 'First name must be less than 46 characters'),
	lastName: z
		.string()
		.trim()
		.toLowerCase()
		.min(1, 'Last name is required')
		.max(46, 'Last name must be less than 46 characters'),
	email: z
		.string()
		.trim()
		.toLowerCase()
		.email('Please enter a valid email address')
		.max(62, 'Email must be less than 62 characters'),
	queryType: z.enum(['general enquiry', 'support request'], {
		errorMap: () => ({ message: 'Please select a valid query type' })
	}),
	message: z
		.string()
		.trim()
		.min(1, 'Message is required')
		.max(2000, 'Message must be less than 2000 characters'),
	consent: z.boolean().refine((value) => value === true, {
		message: 'To submit this form, please consent to being contacted'
	})
})

export type FormValues = z.infer<typeof ContactFormValidation>