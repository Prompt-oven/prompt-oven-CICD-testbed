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

const menuItems: MenuNavItemType[] = [
	{ icon: LayoutDashboard, label: "Overview", route: "overview" },
	{
		icon: Package,
		label: "Product",
		route: "product",
		subMenu: [
			{ label: "Create Product", route: "create-product" },
			{ label: "Product List", route: "product-list" },
			{ label: "Category", route: "product-category" },
		],
	},
	{ icon: User, label: "Profile", route: "profile" },
	{ icon: FileText, label: "Prompts", route: "prompts" },
	{ icon: TagsIcon, label: "Sales", route: "sales" },
	{ icon: Wallet, label: "Payouts", route: "payouts" },
	{ icon: ShoppingBag, label: "Purchases", route: "purchases" },
	{ icon: Heart, label: "Favorites", route: "favorites" },
	{ icon: Settings, label: "Settings", route: "settings" },
]

interface AccountContentWrapperProps {
	children?: React.ReactNode
}

export default function ContentWrapper({
	children,
}: AccountContentWrapperProps) {
	const [activeRoute, setActiveRoute] = React.useState("dashboard")
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

	return (
		<div className="relative flex h-[calc(100vh-80px)]">
			<SideMenu
				menuItems={menuItems}
				activeRoute={activeRoute}
				setActiveRoute={setActiveRoute}
				isMobileMenuOpen={isMobileMenuOpen}
				setIsMobileMenuOpen={setIsMobileMenuOpen}
			/>

			{/* Main content */}
			<div className="mt-12 flex-1 p-4 lg:mt-0 lg:p-8">{children}</div>

			{/* Overlay for mobile menu */}
			{isMobileMenuOpen ? (
				<div
					role="button"
					tabIndex={0}
					className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
					onClick={() => setIsMobileMenuOpen(false)}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							setIsMobileMenuOpen(false)
						}
					}}
				/>
			) : null}
		</div>
	)
}
