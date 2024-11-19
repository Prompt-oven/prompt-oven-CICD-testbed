import React from "react"
import BestTop5 from "@/components/best/organism/BestTop5"
import BestList from "@/components/best/organism/BestList"
import { getBestCreatorData } from "@/action/best/getBestData"
import type {
	BestCreatorCursorListTypes,
	BestCreatorDataTypes,
} from "@/types/best/bestTypes"

export default async function Page() {
	const bestData: BestCreatorCursorListTypes = await getBestCreatorData()
	const top5Data: BestCreatorDataTypes[] = bestData.content.slice(0, 5)
	const restData: BestCreatorDataTypes[] = bestData.content.slice(5)
	return (
		<section>
			<BestTop5 data={top5Data} />
			<BestList data={restData} />
		</section>
	)
}
