import { FieldError, Path } from 'react-hook-form'

import { FormValues } from '@/validations'
import { HtmlHTMLAttributes } from 'react'
import clsx from 'clsx'
import { useFormContext } from '@/context'

interface Props extends HtmlHTMLAttributes<HTMLInputElement> {
	name: Path<FormValues>
}

function Checkbox({
	className,
    name,
	children,
	...props
}: Props) {
    
	const { register, loading } = useFormContext()

    
	return (
		<label className={clsx('custom-checkbox', className)}>
			<input {...register(name)} type='checkbox' {...props} disabled={loading} />
			<div className='custom-checkbox__checkbox' />
		</label>
	)
}

export default Checkbox
