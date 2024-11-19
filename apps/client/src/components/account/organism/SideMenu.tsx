import React, { Fragment } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils.ts"
import type { MenuNavItemType } from "@/types/account/accountSideMenuType.ts"
import SideMenuItem from "@/components/account/atom/SideMenuItem.tsx"
import SideMenuToggleItem from "@/components/account/molecule/SideMenuToggleItem.tsx"
import { routes } from "@/config/account/route.ts"

interface AccountSideMenuProps {
	menuItems: MenuNavItemType[]
	activeRoute: string
}

function SideMenu({ menuItems, activeRoute }: AccountSideMenuProps) {
	return (
		<>
			{/* Navigation bar for smaller screens */}
			<nav className="z-5 absolute left-0 right-0 top-0 flex h-12 items-center justify-start overflow-hidden border-b-[1px] border-[#424242] bg-[#111111] px-4 text-white lg:!hidden">
				{menuItems.map((item, index) => (
					<Link
						// eslint-disable-next-line react/no-array-index-key -- This is a static array
						key={index}
						href={{
							pathname: routes.account_product,
							query: { view: item.view },
						}}
						className={cn(
							"flex h-full items-center whitespace-nowrap px-3",
							item.view.includes(activeRoute)
								? "border-b-2 border-[#E2ADFF] text-[#E2ADFF]"
								: "text-white",
						)}>
						<item.icon className="mr-2 h-5 w-5" />
						<span className="text-sm font-medium">{item.label}</span>
					</Link>
				))}
			</nav>

			{/* Sidebar */}
			<div
				className={cn(
					"z-5 absolute inset-y-0 left-0 w-64 -translate-x-full transform border-r-[1px] border-[#424242] bg-[#111111] text-white transition-transform duration-200 ease-in-out lg:!relative lg:!translate-x-0",
					// isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
				)}>
				<div className="flex h-full flex-1 flex-col overflow-y-auto">
					<div className="flex flex-col gap-2 p-4">
						{menuItems.map((item, index) =>
							item.subMenu ? (
								<SideMenuToggleItem
									// eslint-disable-next-line react/no-array-index-key -- This is a static array
									key={index}
									view={item.view}
									label={item.label}
									activeRoute={activeRoute}
									Icon={item.icon}
									subMenu={item.subMenu}
								/>
							) : (
								<SideMenuItem
									// eslint-disable-next-line react/no-array-index-key -- This is a static array
									key={index}
									href={{
										pathname: routes.account,
										query: { view: item.view },
									}}
									view={item.view}
									label={item.label}
									activeRoute={activeRoute}
									Icon={item.icon}
								/>
							),
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default SideMenu
