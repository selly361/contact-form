import { PropsWithChildren } from 'react'

function Label({ children }: PropsWithChildren) {
	return (
		<label>
			{children} <span className='text-green-600'>*</span>
		</label>
	)
}

export default Label
