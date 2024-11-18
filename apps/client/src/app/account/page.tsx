import AccountContentWrapper from "@/components/account/organism/AccountContentWrapper.tsx"

interface PageProps {
	params: {
		view: string
	}
}

export default function page({ params }: PageProps) {
	const view = params.view
	return (
		<AccountContentWrapper>
			<div className="text-white">test text {view}</div>
		</AccountContentWrapper>
	)
}
