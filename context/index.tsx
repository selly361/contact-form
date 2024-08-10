'use client'

import { FormValues, resolver } from '@/validations'
import { PropsWithChildren, createContext, useContext, useState } from 'react'

import { FormContextType } from './context.types'
import { addContactForm } from '@/actions'
import { useForm } from 'react-hook-form'

const FormContext = createContext<FormContextType | undefined>(undefined)

export const FormProvider = ({ children }: PropsWithChildren) => {
	const [loading, setLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

	const formMethods = useForm<FormValues>({
		mode: 'all',
		resolver
	})

	const handleFormSubmit = formMethods.handleSubmit(async (data: FormValues) => {
		try {
			setLoading(true)

			const result = await addContactForm(data)

			console.log('Form submitted successfully:', result)
			formMethods.reset() 
		} catch (error) {
			console.error('Form submission error:', error)
		} finally {
			setLoading(false)
            setFormSubmitted(true)
		}
	})

	return (
		<FormContext.Provider
			value={{
				...formMethods,
				loading,
				handleFormSubmit
			}}
		>
			{children}
		</FormContext.Provider>
	)
}

export const useFormContext = () => useContext(FormContext) as FormContextType
