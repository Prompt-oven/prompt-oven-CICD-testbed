import React from "react"
import Link from "next/link"
import CommonHeader from "@/components/common/atom/Header"
import MainLogo from "@/components/common/atom/icon/MainLogo.tsx"
import { mainNavs } from "@/lib/navigation.ts"
import NavLink from "@/components/common/atom/NavLink.tsx"
import { AvatarMenu } from "@/components/common/molecule/AvatarMenu.tsx"

export default function MainHeader() {
	return (
		<CommonHeader className="h-20 bg-po-black-200">
			{/* Logo */}
			<Link href="/" className="pr-4">
				<MainLogo />
			</Link>

			<div className="box-border hidden h-full max-w-2xl flex-1 items-center border-x border-[#424242] px-10 md:flex">
				<div className="h-8 w-full bg-po-gray-100" />
			</div>

			{/* Navigation */}
			<ul className="mx-4 hidden items-center gap-6 xl:flex">
				{mainNavs.map((nav, index) => (
					// eslint-disable-next-line react/no-array-index-key -- index is unique
					<li key={index}>
						<NavLink href={nav.href} color="#969696" activeColor="#A913F9">
							{nav.label}
						</NavLink>
					</li>
				))}
			</ul>

			{/* Right side buttons */}
			<div className="hidden items-center gap-8 lg:flex">
				<AvatarMenu />
			</div>

			{/* Mobile menu button */}
			<div className="pl-4 lg:hidden" />
		</CommonHeader>
	)
}
