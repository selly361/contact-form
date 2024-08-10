import { FieldError, Path } from 'react-hook-form'

import { FormValues } from '@/validations'
import { LabelHTMLAttributes } from 'react'
import clsx from 'clsx'
import { useFormContext } from '@/context'

interface Props extends LabelHTMLAttributes<HTMLTextAreaElement> {
	name: Path<FormValues>
	error?: FieldError | undefined
}

const Textarea = ({ name, children, className, error, ...props }: Props) => {
	const { register } = useFormContext()

	return (
		<textarea
			className={clsx('textarea', className, error && 'error')}
			{...register(name)}
			{...props}
		>
			{children}
		</textarea>
	)
}

export default Textarea
