import ContentWrapper from "@/components/account/template/ContentWrapper.tsx"
import type { SearchParams } from "@/types/account/searchParams.ts"

export default function page({ searchParams }: SearchParams) {
	return (
		<ContentWrapper queryParams={searchParams}>
			<div className="text-white">test text {searchParams.view}</div>
		</ContentWrapper>
	)
}
