export interface BestCreatorDataTypes {
	id: number
	name: string
	rank: number
	rankChange?: number
	image: string
	creatorTag?: string
}

export interface BestCreatorCursorListTypes {
	content: BestCreatorDataTypes[]
	lastCreatedAt: string | null
	lastId: string | null
	hasNext: boolean
	pageSize: number
	page: number
}
