"use client"

import * as React from "react"
import {
	FileText,
	Heart,
	LayoutDashboard,
	Package,
	Settings,
	ShoppingBag,
	TagsIcon,
	User,
	Wallet,
} from "@repo/ui/lucide"
import type { MenuNavItemType } from "@/types/account/accountSideMenuType.ts"
import SideMenu from "@/components/account/organism/SideMenu.tsx"
import type { QueryParams } from "@/types/account/searchParams.ts"

const menuItems: MenuNavItemType[] = [
	{ icon: LayoutDashboard, label: "Overview", view: "overview" },
	{
		icon: Package,
		label: "Product",
		view: "product",
		subMenu: [
			{ label: "Create Product", view: "create-product" },
			{ label: "Product List", view: "product-list" },
			{ label: "Category", view: "product-category" },
		],
	},
	{ icon: User, label: "Profile", view: "profile" },
	{ icon: FileText, label: "Prompts", view: "prompts" },
	{ icon: TagsIcon, label: "Sales", view: "sales" },
	{ icon: Wallet, label: "Payouts", view: "payouts" },
	{ icon: ShoppingBag, label: "Purchases", view: "purchases" },
	{ icon: Heart, label: "Favorites", view: "favorites" },
	{ icon: Settings, label: "Settings", view: "settings" },
]

interface AccountContentWrapperProps {
	children?: React.ReactNode
	queryParams: QueryParams
}

export default function ContentWrapper({
	children,
	queryParams,
}: AccountContentWrapperProps) {
	const view = queryParams.view as string

	return (
		<div className="relative flex h-[calc(100vh-80px)]">
			<SideMenu menuItems={menuItems} activeRoute={view} />

			{/* Main content */}
			<div className="mt-12 flex-1 p-4 lg:mt-0 lg:p-8">{children}</div>

			{/* Overlay for mobile menu -- 햄버거를 눌렀을 때, 나오는 배경, 지금은 사용할 예정이 아니므로 주석처리만 해놓음*/}
			{/*{isMobileMenuOpen ? (*/}
			{/*	<div*/}
			{/*		role="button"*/}
			{/*		tabIndex={0}*/}
			{/*		className="z-5 fixed inset-0 bg-black bg-opacity-50 lg:hidden"*/}
			{/*		onClick={() => setIsMobileMenuOpen(false)}*/}
			{/*		onKeyDown={(e) => {*/}
			{/*			if (e.key === "Enter" || e.key === " ") {*/}
			{/*				setIsMobileMenuOpen(false)*/}
			{/*			}*/}
			{/*		}}*/}
			{/*	/>*/}
			{/*) : null}*/}
		</div>
	)
}
