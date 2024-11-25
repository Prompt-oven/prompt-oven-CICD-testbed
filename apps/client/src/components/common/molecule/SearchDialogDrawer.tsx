import React, { useEffect, useState } from "react"

import { Button } from "@repo/ui/button"
import {
	Dialog,
	DialogContent,
	// DialogDescription,
	DialogHeader,
	// DialogTitle,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs"
// import SearchForm from "./SearchForm"
import { X } from "@repo/ui/lucide"
import { Input } from "@repo/ui/input"

interface SearchDialogDrawerWrapperProps {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	isOpen: boolean
}

export function SearchDialogDrawer({
	setIsOpen,
	isOpen,
}: SearchDialogDrawerWrapperProps) {
	const [isMobile, setIsMobile] = useState(false)
	const suggestions = ["@yukanne", "@jason_ahn", "@cookie_friends"]
	const suggestions2 = [
		"Christmas Card Prompt",
		"New Year Prompt",
		"Cookie_friends Prompt",
	]

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

						<DrawerFooter>
							<Button onClick={() => setIsOpen(false)}>닫기</Button>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			) : (
				<Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
					<DialogContent className="border-zinc-80 bg-zinc-900/95">
						<DialogHeader>
							<div className="flex justify-between">
								{/* 수빈 - 탭 클릭 시 해당 api 액션 연결 작업 진행하기 */}
								<Tabs defaultValue="creator" className="w-full">
									<TabsList className="w-[200px] bg-zinc-800">
										<TabsTrigger value="creator" className="w-full">
											Creator
										</TabsTrigger>
										<TabsTrigger value="prompt" className="w-full">
											Prompt
										</TabsTrigger>
									</TabsList>
									<TabsContent value="creator">
										<div className="mt-4 space-y-3">
											<Input
												placeholder="What are you searching for?"
												className="placeholder:text-muted-foreground text-muted-foreground border-none bg-transparent text-lg"
											/>
											{suggestions.map((suggestion) => (
												<Button
													key={suggestion}
													variant="ghost"
													className="text-muted-foreground w-full justify-start hover:text-white">
													{suggestion}
												</Button>
											))}
										</div>
									</TabsContent>
									<TabsContent value="prompt">
										<div className="mt-4 space-y-3">
											<Input
												placeholder="What are you searching for?"
												className="placeholder:text-muted-foreground text-muted-foreground border-none bg-transparent text-lg"
											/>
											{suggestions2.map((suggestion) => (
												<Button
													key={suggestion}
													variant="ghost"
													className="text-muted-foreground w-full justify-start hover:text-white">
													{suggestion}
												</Button>
											))}
										</div>
									</TabsContent>
								</Tabs>
								<Button
									variant="ghost"
									className="text-muted-foreground mt-1.5 h-6 w-6 p-0"
									onClick={() => setIsOpen(false)}>
									<X className="!h-6 !w-6" />
									<span className="sr-only">Close</span>
								</Button>
							</div>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			)}
		</>
	)
}
