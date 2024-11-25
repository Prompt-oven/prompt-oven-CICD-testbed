import { Button } from "@repo/ui/button"
import { Heart, ShoppingCartIcon } from "@repo/ui/lucide"
import PromptDetailGet from "../atoms/PromptDetailGet"

interface PromptDetailChoiceProps {
	isFavorite: boolean
	isCart: boolean
}

export default function PromptDetailChoice({
	isFavorite,
	isCart,
}: PromptDetailChoiceProps) {
	return (
		<div className="mr-2 flex flex-col justify-between gap-6 xs:!flex-row xs:gap-0 xl:mr-4">
			<div className="flex gap-6">
				<Button
					variant="outline"
					className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-none bg-white p-0">
					{isFavorite ? (
						<Heart className="fill-[#ef4444] text-[#ef4444] hover:opacity-90" />
					) : (
						<Heart className="text-[#ef444] hover:opacity-90" />
					)}
				</Button>

				<Button
					variant="outline"
					className="h-[60px] w-[60px] rounded-full border-none bg-gradient-to-r from-[#A913F9] to-[#3F5EFB] p-0">
					{isCart ? (
						<ShoppingCartIcon className="fill-white text-white hover:opacity-90" />
					) : (
						<ShoppingCartIcon className="text-white hover:opacity-90" />
					)}
				</Button>
			</div>

			<PromptDetailGet />
		</div>
	)
}
