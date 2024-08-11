'use client'

import { AnimatePresence, motion } from 'framer-motion'

import React from 'react'
import { SuccessCheckIcon } from '@/icons'
import { useFormContext } from '@/context'

function SuccessMessage() {
	const { formSubmitted } = useFormContext()

	return (
		<AnimatePresence>
			{formSubmitted && (
				<motion.div
					initial={{ top: '-100px', opacity: 0 }} // Start off-screen
					animate={{ top: '64px', opacity: 1 }} // Move to visible position
					exit={{ top: '-100px', opacity: 0 }} // Exit off-screen
					transition={{
						type: 'spring',
						mass: 1,
						damping: 25,
						stiffness: 180
					}}
					className='fixed left-0 right-0 mx-auto w-success-message text-white bg-grey-900 rounded-xl p-6 z-30 -top-16'
				>
					<div className='flex items-center gap-2 mb-2'>
						<SuccessCheckIcon />
						<p className='font-bold'>Message Sent!</p>
					</div>
					<p className='text-base'>
						Thanks for completing the form. We’ll be in touch soon!
					</p>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default SuccessMessage
