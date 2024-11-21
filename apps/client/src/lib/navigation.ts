import type { ReactNode } from "react"

export interface NavType {
	title: string
	href: string
	icon?: ReactNode
}

export const mainNavs = [
	{
		title: "HOME",
		href: "/home",
	},
	{
		title: "PROMPTS",
		href: "/prompts",
	},
	{
		title: "SPECIAL EXHIBITION",
		href: "/special-exhibition",
	},
	{
		title: "BEST",
		href: "/best",
	},
]
