import {
	getDetailCategory,
	getDetailDrops,
} from "@/action/prompt-detail/getAssociationProduct"
import { getProductDetail } from "@/action/prompt-detail/getProductDetailData"
import { getProductReview } from "@/action/review/getReviewData"
import PromptDetailTemplate from "@/components/prompt-detail/templates/PromptDetailTemplate"

export default async function PromptDetail() {
	const productDetail = await getProductDetail()
	const productReview = await getProductReview()
	const notableDrops = await getDetailDrops()
	const categories = await getDetailCategory()

	return (
		<main className="container mx-auto bg-[#111111] py-1">
			<PromptDetailTemplate
				productDetail={productDetail}
				productReview={productReview}
				notableDrops={notableDrops}
				categories={categories}
			/>
		</main>
	)
}
