/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#00040f',
				secondary: '#00f6ff',
				primaryLight: '#189edb',
				secondaryDark: '#f68923',
				secondaryLight: '#62469b',
				dimWhite: 'rgba(255, 255, 255, 0.7)',
				dimBlue: 'rgba(9, 151, 124, 0.1)',
				rooferColor: '#73cdd7',
				themeLight: '#7de7eb',
				themeDark: '#0494C4',
				themeDarker: '#3A5BA0',
				themeDarkest: '#1F4690'
			},
			fontFamily: {
				'poppins': 'Poppins, sans-serif'
			},
			backgroundImage: {},
			animation: {
				spin: 'spin 6s linear infinite',
				button: 'rotate 0.5s ease ',
				rotate: 'rotate 2s linear infinite',
				beat: 'beat 1.5s ease-out infinite',
				wiggle: 'wiggle 1s ease-in-out infinite',
				pulse: 'pulse 3s linear 10s infinite',
				blob: 'blob 7s infinite',
				appear: 'lefty 1s ease',
				show: 'show 10s ease-in'
			},
			keyframes: {
				rotate: {
					'100%': { transform: 'rotate(360deg)' }
				},
				beat: {
					'0%, 100%': { transform: 'scale(1)' },
					'25%': { transform: 'scale(1.2)' }
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-7deg)' },
					'50%': { transform: 'rotate(7deg)' }
				},
				pulse: {
					'0% 100%': {
						opacity: 1
					},
					'50%': {
						opacity: 0.5
					}
				},
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)'
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)'
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)'
					},
					'100%': {
						transform: 'tranlate(0px, 0px) scale(1)'
					}
				},
				lefty: {
					'0%': {
						transform: 'translate(2000px)'
					},
					'100%': {
						transform: 'translate(0px)'
					}
				},
				show: {
					'0%%': {
						opacity: 1
					},
					'100%': {
						opacity: 0.5
					}
				}
			}
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px'
		}
	},
	plugins: []
};
