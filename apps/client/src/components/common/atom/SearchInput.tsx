"use client"

import React, { useEffect, useRef, useState } from "react"
import { Search } from "@repo/ui/lucide"
import { Button } from "@repo/ui/button"
import { Input } from "@repo/ui/input"

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	width?: string
	placeholder?: string
	query?: string
}

export default function SearchInput({
	placeholder = "Search items, collection or user",
	query,
	...props
}: SearchInputProps) {
	const [shortcut, setShortcut] = useState("⌘K")
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		const isMac = navigator.userAgent.includes("Mac")
		setShortcut(isMac ? "⌘K" : "Ctrl+K")

		const handleKeyDown = (e: KeyboardEvent) => {
			if (
				(isMac && e.metaKey && e.key === "k") ||
				(!isMac && e.ctrlKey && e.key === "k")
			) {
				e.preventDefault()
				inputRef.current?.focus()
			}
		}

		window.addEventListener("keydown", handleKeyDown)
		return () => window.removeEventListener("keydown", handleKeyDown)
	}, [])

	return (
		<div className="relative flex items-center">
			<Input
				ref={inputRef}
				value={query}
				type="text"
				placeholder={placeholder}
				{...props}
				className="h-[50px] flex-grow rounded-lg bg-[#1B1B1B] py-[15px] !pl-5 !pr-[120px] text-sm text-[#969696] placeholder-[#969696] placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#666666]"
				style={{
					fontFamily: "Roboto, sans-serif",
					fontSize: "15px",
					lineHeight: "20px",
					fontWeight: 500,
				}}
			/>
			<div className="absolute right-2 flex items-center">
				<Search className="mr-5 h-5 w-5 text-[#969696]" />
				<Button
					variant="outline"
					size="sm"
					className="border-[#666666] bg-black text-white hover:bg-[#333333] hover:text-white">
					<span
						className="text-sm font-semibold"
						style={{ fontFamily: "Sora, sans-serif" }}>
						{shortcut}
					</span>
				</Button>
			</div>
		</div>
	)
}
