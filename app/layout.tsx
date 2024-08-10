import './globals.css'

import { FormProvider } from '@/context'
import { Karla } from 'next/font/google'
import { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import clsx from 'clsx'

const karla = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Contact Form',
	description: `A simple contact form built with Next.js and zod for validation, 
		allowing users to submit their information and send it to a MongoDB backend for processing.`
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang='en'>
			<body className={clsx(karla.className, 'bg-green-200 flex items-center justify-center min-h-screen py-8')}>
				<FormProvider>{children}</FormProvider>
			</body>
		</html>
	)
}
