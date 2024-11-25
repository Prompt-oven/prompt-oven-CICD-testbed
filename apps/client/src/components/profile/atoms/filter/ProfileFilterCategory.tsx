import { RadioGroup, RadioGroupItem } from "@repo/ui/radio-group"
import { Label } from "@repo/ui/label"

const categories = [
	"Art",
	"fashion",
	"Music",
	"Video",
	"Games",
	"Sports",
	"Collectibles",
]

export function ProfileFilterCategory({
	value = "",
	name = "",
	onChange,
}: {
	value?: string
	name: string
	onChange?: (value: string) => void
}) {
	return (
		<RadioGroup
			value={value}
			onValueChange={onChange}
			className="space-y-2"
			name={name}>
			{categories.map((category) => (
				<div key={category} className="flex items-center space-x-2">
					<RadioGroupItem
						value={category}
						id={category}
						className="border-white/70 text-white"
					/>
					<Label htmlFor={category} className="text-sm text-white">
						{category}
					</Label>
				</div>
			))}
		</RadioGroup>
	)
}
