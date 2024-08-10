import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				grey: {
					500: '#86A2A5',
					900: '#2A4144'
				},
				green: {
					200: '#E0F1E8',
					600: '#0C7D69'
				},
				red: '#D73C3C'
			},
			fontSize: {
				'heading': [
					'32px',
					{
						lineHeight: '100%',
						letterSpacing: '-1px',
						fontWeight: '700'
					}
				],
				'body-m': [
					'18px',
					{
						lineHeight: '150%',
						letterSpacing: '0px',
						fontWeight: '400'
					}
				]
			},
			width: {
				'form': '736px',
				'field': '320px'
			},
			height: {
				'field': '51px',
				'textarea': '105px'
			},
			backgroundImage: {
				'checkbox': "url('/icon-checkbox-check.svg')"
			}
		}
	},
	plugins: []
}

export default config
