import type { ReactNode } from "react"

export interface NavType {
	title: string
	href: string
	icon?: ReactNode
}
// todo : href를 고정 문자열이 아니라 route 파일에서 값을 받아오게 수정하기
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

export const sellerAvatarNavs: NavType[] = [
	{
		title: "To Be Seller",
		href: "/seller-registration",
	},
	{
		title: "Profile",
		href: "/profile",
	},
	{
		title: "Dashboard",
		href: "/dashboard",
	},
	{
		title: "Product",
		href: "/product-list",
	},
	{
		title: "Payouts",
		href: "/payouts",
	},
	{
		title: "Purchases",
		href: "/purchases",
	},
	{
		title: "Settings",
		href: "/settings",
	},
]

export const userAvatarNavs: NavType[] = [
	{
		title: "Profile",
		href: "/profile",
	},
	{
		title: "Purchases",
		href: "/purchases",
	},
	{
		title: "Settings",
		href: "/settings",
	},
]
