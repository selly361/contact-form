import { FormValues } from '@/validations'
import clsx from 'clsx'
import { useFormContext } from '@/context'

interface RadioProps {
	value: FormValues['queryType']
	label: string
}

const Radio = ({ value, label }: RadioProps) => {
	const { watch, register } = useFormContext()

	const query = watch('queryType')

	return (
		<label
			className={clsx(
				'radio-label',
				value === query ? 'radio-label--active' : ''
			)}
		>
			<input
				type='radio'
				value={value}
				className='radio-input'
				{...register('queryType')}
			/>
			<div className='radio-custom' />
			<p className='radio-text'>{label}</p>
		</label>
	)
}

export default Radio