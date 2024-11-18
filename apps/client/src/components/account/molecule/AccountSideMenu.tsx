import React, { Fragment } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils.ts"
import type { MenuItemType } from "@/types/account/accountSideMenuType.ts"

interface AccountSideMenuProps {
	menuItems: MenuItemType[]
	activeRoute: string
	setActiveRoute: (route: string) => void
	isMobileMenuOpen: boolean
	setIsMobileMenuOpen: (open: boolean) => void
}

function AccountSideMenu({
	menuItems,
	isMobileMenuOpen,
	setIsMobileMenuOpen,
	setActiveRoute,
	activeRoute,
}: AccountSideMenuProps) {
	return (
		<>
			{/* Navigation bar for smaller screens */}
			<nav className="absolute left-0 right-0 top-0 z-40 flex h-12 items-center justify-start overflow-hidden border-b-[1px] border-[#424242] bg-[#111111] px-4 text-white lg:!hidden">
				{menuItems.slice(0, 5).map((item, index) => (
					<Link
						// eslint-disable-next-line react/no-array-index-key -- This is a static array
						key={index}
						href="#"
						className={cn(
							"flex h-full items-center whitespace-nowrap px-3",
							item.label.includes(activeRoute)
								? "border-b-2 border-[#A913F9] text-[#A913F9]"
								: "text-white",
						)}
						onClick={() => setActiveRoute(item.label)}>
						<item.icon className="mr-2 h-5 w-5" />
						<span className="text-sm font-medium">{item.label}</span>
					</Link>
				))}
			</nav>

			{/* Sidebar */}
			<div
				className={cn(
					"absolute inset-y-0 left-0 z-50 w-64 transform border-r-[1px] border-[#424242] bg-[#111111] text-white transition-transform duration-200 ease-in-out lg:!relative lg:!translate-x-0",
					isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
				)}>
				<div className="flex h-full flex-col">
					<div className="flex-1 overflow-y-auto">
						<div className="p-4">
							{menuItems.map((item, index) => (
								<Link
									// eslint-disable-next-line react/no-array-index-key -- This is a static array
									key={index}
									href="#"
									className={cn(
										"mb-2 flex h-[60px] items-center rounded-lg px-5 py-4 transition-colors",
										item.label.includes(activeRoute)
											? "*:color-[#E2ADFF] *:text-[#E2ADFF]"
											: "hover:bg-white/10",
									)}
									onClick={() => {
										setActiveRoute(item.label)
										setIsMobileMenuOpen(false)
									}}>
									<item.icon className={cn("mr-3 h-6 w-6")} />
									<span>{item.label}</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AccountSideMenu
