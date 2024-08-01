/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				rudder: {
					css: {
						'--tw-prose-invert-body': theme('colors.white'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.slate[400]'),
						'--tw-prose-invert-links': theme('colors.white'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.slate[400]'),
						'--tw-prose-invert-bullets': '#00AFA6',
						'--tw-prose-invert-hr': theme('colors.slate[700]'),
						'--tw-prose-invert-quotes': theme('colors.slate[100]'),
						'--tw-prose-invert-quote-borders': '#00AFA6',
						'--tw-prose-invert-captions': theme('colors.slate[400]'),
						'--tw-prose-invert-kbd': theme('colors.white'),
						'--tw-prose-invert-kbd-shadows': theme('colors.white'),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.slate[300]'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.slate[600]'),
						'--tw-prose-invert-td-borders': theme('colors.slate[700]'),
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
