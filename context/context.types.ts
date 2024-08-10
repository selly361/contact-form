import { BaseSyntheticEvent } from 'react'
import { FormValues } from '@/validations'
import { UseFormReturn } from 'react-hook-form'

export interface FormContextType extends UseFormReturn<FormValues> {
	loading: boolean
	handleFormSubmit: (e?: BaseSyntheticEvent) => Promise<void>
}