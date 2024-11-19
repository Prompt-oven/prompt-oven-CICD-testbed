"use client"

import React, { useState, useEffect } from "react"
import debounce from "lodash/debounce"
import { useSearchActions } from "@/action/search/useSearchResults"
import SearchInput from "../atom/SearchInput"
import SearchDropdown from "../molecule/SearchDropdown"
import { useRouter } from "next/navigation"

function SearchOrganism() {
	const [open, setOpen] = useState(false)
	const [query, setQuery] = useState("")
	const { creators, prompts, fetchAndSetSearchResults } = useSearchActions()
	const router = useRouter()

	const debouncedFetchAndSetSearchResults = debounce((searchQuery: string) => {
		fetchAndSetSearchResults(searchQuery)
	}, 300)

	useEffect(() => {
		if (query) {
			setOpen(true)
			debouncedFetchAndSetSearchResults(query)
		} else {
			setOpen(false)
		}
	}, [query])

	const handleFocus = () => setOpen(true)
	const handleBlur = () => setTimeout(() => setOpen(false), 100)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (query === "") {
			return
		}
		router.push(`/prompts?query=${query}`)
		setQuery("")
	}
	return (
		<form className="relative w-[40rem]" onSubmit={handleSubmit}>
			<SearchInput
				value={query}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={(e) => setQuery(e.target.value)}
			/>
			{open && query.length > 0 && (
				<div className="absolute left-0 top-full z-10 w-full">
					<SearchDropdown creators={creators} prompts={prompts} />
				</div>
			)}
		</form>
	)
}

export default SearchOrganism
