import React, { useEffect, useState } from "react"

import { Button } from "@repo/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	// DialogTrigger,
} from "@repo/ui/dialog"
import {
	Drawer,
	// DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	// DrawerTrigger,
} from "@repo/ui/drawer"
import SearchForm from "./SearchForm"

interface SearchDialogDrawerWrapperProps {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	isOpen: boolean
}

export function SearchDialogDrawerWrapper({
	setIsOpen,
	isOpen,
}: SearchDialogDrawerWrapperProps) {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768)
		}
		handleResize()
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return (
		<>
			{isMobile ? (
				<Drawer open={isOpen} onOpenChange={() => setIsOpen(false)}>
					<DrawerContent>
						<DrawerHeader className="text-left">
							<DrawerTitle>검색</DrawerTitle>
							<DrawerDescription>Search prompts or creators</DrawerDescription>
						</DrawerHeader>
						<SearchForm className="px-4" /> {/* 수빈 - search form 작업 필요 */}
						<DrawerFooter>
							<Button onClick={() => setIsOpen(false)}>닫기</Button>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			) : (
				<Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>검색</DialogTitle>
							<DialogDescription>Search prompts or creators</DialogDescription>
						</DialogHeader>
						<SearchForm /> {/* 수빈 - search form 작업 필요 */}
					</DialogContent>
				</Dialog>
			)}
		</>
	)
}
