module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	mode: 'jit',
	darkmode: 'media',
	theme: {
		extend: {
			colors: {
				blue: '#1fb6ff',
				purple: '#7e5bef',
				pink: '#ff49db',
				orange: '#ff7849',
				green: '#13ce66',
				yellow: '#ffc82c',
				'gray-dark': '#273444',
				gray: '#8492a6',
				'gray-light': '#d3dce6',
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	variants: {
		extend: {
			resize: ['hover', 'focus'],
		},
	},
	plugins: ['@tailwindcss/forms', '@tailwindcss/line-clamp'],
};
