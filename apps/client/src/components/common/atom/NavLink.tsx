"use client"

import type { AnchorHTMLAttributes, ReactNode } from "react"
import { useCallback, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string
	color?: string
	activeColor?: string
	children?: ReactNode
}

export default function NavLink({
	href,
	children,
	color = "#D9D9D9",
	activeColor,
	...props
}: NavLinkProps) {
	const pathname = usePathname()
	const isActive = pathname === href
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = useCallback(() => setIsHovered(true), [])
	const handleMouseLeave = useCallback(() => setIsHovered(false), [])

	const currentColor = isActive || isHovered ? activeColor : color

	return (
		<Link
			href={href}
			className="text-lg font-bold transition-colors duration-200"
			style={{ color: currentColor }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}>
			{children}
		</Link>
	)
}
