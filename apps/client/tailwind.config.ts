// tailwind config is required for editor support

import type { Config } from "tailwindcss"
import sharedConfig from "@repo/tailwind-config"

const config: Config = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sora: ["var(--font-sora)", "sans-serif"],
				roboto: ["var(--font-roboto)", "sans-serif"],
			},
			screens: {
				xs: "480px", // xs 브레이크포인트 추가
			},
		},
	},
	presets: [sharedConfig],
}

export default config
