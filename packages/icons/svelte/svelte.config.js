import {sveltePreprocess} from 'svelte-preprocess';

const config = {
	preprocess: sveltePreprocess({
		typescript: true,
	}),
};

export default config;
