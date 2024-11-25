import Image from "next/image"
import { Badge } from "@repo/ui/badge"
import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import StarAnimation from "@repo/ui/star-animation"
import { ShoppingCart } from "@repo/ui/lucide"
import { PromptCardDateFormatted, PromptIsNew } from "@/lib/utils"
import type { PromptsType } from "@/types/prompts/promptsType"

interface PromptItemProps {
	productInfo: PromptsType
}

export default function PromptItem({ productInfo }: PromptItemProps) {
	const formattedDate = PromptCardDateFormatted(productInfo.productRegistDate)
	const isNew = PromptIsNew(productInfo.productRegistDate)

	return (
		<Card className="relative flex h-full w-full max-w-[180px] flex-col overflow-hidden rounded-md border-0 bg-[#111111] shadow-md">
			<div className="relative h-[180px] lg:h-[150px] xl:h-[180px]">
				<Image
					src={productInfo.thumbnailUrl}
					sizes="(max-width: 768px) 100vw, 1400px"
					fill
					priority
					alt="Cyberpunk character"
				/>
				<Badge className="absolute left-2 top-2 border-0 bg-gradient-to-r from-[#A913F9] to-[#3F5EFB] hover:from-[#A913F9] hover:to-[#3F5EFB]">
					{isNew ? "NEW" : formattedDate}
				</Badge>
				<Button
					size="icon"
					className="absolute bottom-[-16px] right-3 z-10 h-8 w-8 rounded-full bg-[#AD20F2] shadow-lg shadow-[#514FD7]/40 hover:bg-[#AD20F2]/90">
					<ShoppingCart className="h-4 w-4" />
				</Button>
			</div>

			<div className="relative flex h-[80px] flex-col gap-[6px] bg-[#3d2d50] pl-2 pt-1">
				<StarAnimation rateData={productInfo.productStar} noAnimation={false} />

				<div className="flex flex-col gap-1">
					<h3 className="font-lato text-xs font-semibold text-white">
						{productInfo.productName}
					</h3>
					<p className="font-lato text-[10px] text-[#827682]">
						{productInfo.categoryName}
					</p>
				</div>

				<span className="font-lato absolute bottom-2 right-3 text-sm text-white">
					{productInfo.productPrice.toLocaleString()}$
				</span>
			</div>
		</Card>
	)
}
