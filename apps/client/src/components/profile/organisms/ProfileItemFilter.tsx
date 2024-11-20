"use client"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@repo/ui/select"

interface PromptFilterProps {
	promptCount: number
}

export default function ProfileItemFilter({ promptCount }: PromptFilterProps) {
	return (
		<div className="gradient-filter flex h-[60px] max-w-[1130px] items-center justify-between rounded-lg border border-white/20 px-4">
			{/* Left Section */}
			<div className="flex items-center gap-4">
				<span className="font-mulish text-sm text-white">
					{promptCount} Results
				</span>
			</div>

			{/* Right Section */}
			<div className="flex items-center gap-4">
				<Select>
					<SelectTrigger className="font-mulish h-[35px] w-[129px] rounded-full border border-white/20 bg-transparent text-white">
						<SelectValue placeholder="Sort By" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="price-asc">Price: Low to High</SelectItem>
						<SelectItem value="price-desc">Price: High to Low</SelectItem>
						<SelectItem value="date">Date Added</SelectItem>
					</SelectContent>
				</Select>

				<Select>
					<SelectTrigger className="font-mulish h-[35px] w-[129px] rounded-full border border-white/20 bg-transparent text-white">
						<SelectValue placeholder="Likes" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="most">Most Liked</SelectItem>
						<SelectItem value="least">Least Liked</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
