import React from "react"
import { cn } from "@/lib/utils.ts"
import SideMenuItem from "@/components/account/atom/SideMenuItem.tsx"
import SideMenuToggleItem from "@/components/account/molecule/SideMenuToggleItem.tsx"
import { routes } from "@/config/account/route.ts"
import type { MenuNavItemType } from "@/lib/navigation.ts"

interface AccountSideMenuProps {
	menuItems: MenuNavItemType[]
	activeRoute: string
}

function SideMenu({ menuItems, activeRoute }: AccountSideMenuProps) {
	return (
		<div
			className={cn(
				"z-5 absolute inset-y-0 left-0 w-64 -translate-x-full transform border-r-[1px] border-[#424242] bg-[#111111] text-white transition-transform duration-200 ease-in-out lg:!relative lg:!translate-x-0",
				// isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
			)}>
			<div className="common-scrollbar-y flex h-full flex-1 flex-col">
				<div className="flex flex-col gap-2 p-4 !pr-2">
					{menuItems.map((item, index) =>
						item.subMenu ? (
							<SideMenuToggleItem
								// eslint-disable-next-line react/no-array-index-key -- This is a static array
								key={index}
								view={item.query}
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
									query: { view: item.query },
								}}
								view={item.query}
								label={item.label}
								activeRoute={activeRoute}
								Icon={item.icon}
							/>
						),
					)}
				</div>
			</div>
		</div>
	)
}

export default SideMenu
