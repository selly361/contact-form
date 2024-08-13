'use client'

import { FormValues, resolver } from '@/validations'
import { PropsWithChildren, createContext, useContext, useState } from 'react'

import { FormContextType } from './context.types'
import { SuccessMessage } from '@/components'
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

	const handleFormSubmit = formMethods.handleSubmit(
		async (data: FormValues) => {
			setLoading(true)

			await addContactForm(data)

			formMethods.reset()

			setTimeout(() => {
				setFormSubmitted(true)
				setLoading(false)

				setTimeout(() => {
					setFormSubmitted(false)
				}, 2000)
			}, 1000)
		}
	)

	return (
		<FormContext.Provider
			value={{
				...formMethods,
				loading,
				handleFormSubmit
			}}
		>
			<SuccessMessage />
			{children}
		</FormContext.Provider>
	)
}

export const useFormContext = () => useContext(FormContext) as FormContextType
