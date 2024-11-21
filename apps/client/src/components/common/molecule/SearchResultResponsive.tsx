import React, { useState } from "react"

import { Button } from "@repo/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@repo/ui/dialog"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@repo/ui/drawer"
import SearchForm from "./SearchForm"

export function SearchResultResponsive() {
	const [open, setOpen] = useState(false)

	return (
		<div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button variant="outline">Edit Profile</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here.
						</DialogDescription>
					</DialogHeader>
					<SearchForm />
				</DialogContent>
			</Dialog>

			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild>
					<Button variant="outline">Edit Profile</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader className="text-left">
						<DrawerTitle>Edit profile</DrawerTitle>
						<DrawerDescription>
							Make changes to your profile here.
						</DrawerDescription>
					</DrawerHeader>
					<SearchForm className="px-4" />
					<DrawerFooter className="pt-2">
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}
