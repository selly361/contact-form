import { FieldError, Path } from 'react-hook-form'

import { FormValues } from '@/validations'
import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import { useFormContext } from '@/context'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: Path<FormValues>
	error?: FieldError | undefined
}

const Input = ({ name, className, error, ...props }: InputProps) => {
	const { register } = useFormContext()

	return (
		<input
			className={clsx('field', className, error && 'error')}
			{...register(name)}
			{...props}
		/>
	)
}

export default Input
