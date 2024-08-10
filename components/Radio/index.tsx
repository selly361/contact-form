import { FormValues } from '@/validations'
import clsx from 'clsx'
import { useFormContext } from '@/context'

interface RadioProps {
	value: FormValues['queryType']
	label: string
}

const Radio = ({ value, label }: RadioProps) => {
	const { setValue, watch, getValues } = useFormContext()

	const query = watch('queryType')

	console.log(getValues())

	return (
		<label
			htmlFor={`${value}`}
			onClick={() => setValue('queryType', value)}
			className={clsx(
				'radio-label',
				value === query ? 'radio-label--active' : ''
			)}
		>
			<input
				name='queryType'
				type='radio'
				id={`${value}`}
				className='radio-input'
				value={query}
			/>
			<div className='radio-custom' />
			<p className='radio-text'>{label}</p>
		</label>
	)
}

export default Radio
