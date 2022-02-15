import adapter from '@sveltejs/adapter-auto';
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import { presetUno, presetAttributify } from 'unocss'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [
				Unocss({
					presets: [
						presetAttributify({ /* preset options */}),
						presetUno(),
						presetIcons({
							extraProperties: {
								'display': 'inline-block',
								'vertical-align': 'middle',
								'position': 'relative',
								
								// ...
							}
						})
						// ...custom presets
					  ]
				})
			]
			
		}
	}
};

export default config;
