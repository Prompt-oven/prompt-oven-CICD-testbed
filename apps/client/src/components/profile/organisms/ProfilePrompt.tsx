import type { ProfileListCardType } from "@/types/profile/profileTypes"
import ProfileFilterSidebar from "./ProfileFilterSidebar"
import ProfileItemFilter from "./ProfileItemFilter"
import ProfilePromptList from "./ProfilePromptList"

interface ProfilePromptProps {
	listData: ProfileListCardType[]
	handleFilter: (formData: FormData) => void // Ensure this is correctly typed
}

export default function ProfilePrompt({
	listData,
	handleFilter,
}: ProfilePromptProps) {
	return (
		<form action={handleFilter}>
			<div className="mx-10 mb-16 flex flex-col gap-8 sm:flex-row">
				<ProfileFilterSidebar />
				<div className="flex w-full flex-col gap-8">
					<ProfileItemFilter
						promptCount={listData.length}
						handleFilter={handleFilter}
					/>
					<ProfilePromptList listData={listData} />
				</div>
			</div>
		</form>
	)
}
