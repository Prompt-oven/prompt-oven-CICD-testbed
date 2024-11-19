import { Button } from "@repo/ui/button"
import { Input } from "@repo/ui/input"

interface ProfileModifyInputProps {
	title: string
	inputName: string
	inputValue: string | undefined
	handleValue: string
	placeholder: string
	handleInputChange: (field: string, value: string) => void
	handleReset: (field: string) => void
}

export default function ProfileModifyInput({
	title,
	inputName,
	inputValue,
	handleValue,
	placeholder,
	handleInputChange,
	handleReset,
}: ProfileModifyInputProps) {
	return (
		<div className="flex flex-col gap-1 text-white">
			<p className="text-xl font-semibold">{title}</p>
			<div className="flex items-center gap-5">
				<Input
					className="flex h-[40px] items-center rounded-lg border border-white/20 bg-gradient-to-r from-[#3F1C24] to-[#262038] px-4"
					name={inputName}
					value={inputValue}
					onChange={(e) => handleInputChange(handleValue, e.target.value)}
					placeholder={placeholder}
				/>
				{/* <Button className="bg-[#1a2642] hover:bg-[#10192e]">Apply</Button> */}
				<Button
					type="button"
					className="bg-[#1a2642] font-semibold hover:bg-[#10192e]"
					// className="bg-[#fc5113] font-semibold hover:bg-[#a55335]"
					onClick={() => handleReset(handleValue)}>
					초기화
				</Button>
			</div>
		</div>
	)
}
