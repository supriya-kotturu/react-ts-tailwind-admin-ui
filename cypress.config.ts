import { defineConfig } from 'cypress';

export default defineConfig({
	projectId: 'qmiutk',
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: 'http://localhost:3030',
	},

	component: {
		devServer: {
			framework: 'react',
			bundler: 'vite',
		},
	},
});
