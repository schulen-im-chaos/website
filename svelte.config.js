import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: undefined,
			precompress: false,
			strict: false
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				if (path == "/404") {
					return;
				}

				throw new Error(message);
			}
		}
	},
	preprocess: vitePreprocess()
};

export default config;
