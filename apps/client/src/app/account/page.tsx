import ContentWrapper from "@/components/account/template/ContentWrapper.tsx"

interface PageProps {
	params: {
		view: string
	}
}

export default function page({ params }: PageProps) {
	const view = params.view
	return (
		<ContentWrapper>
			<div className="text-white">test text {view}</div>
		</ContentWrapper>
	)
}
