"use server"

interface ResponseErrorText {
	response: Response
	requestName: string
	url: string
	options: RequestInit
}
const getResponseErrorText = ({
	response,
	requestName,
	url,
	options,
}: ResponseErrorText) => {
	return `Error ${response.status}: "Request Function Name: ${requestName}" Parameters: url=${url}, options=${JSON.stringify(options)} Error Response: ${JSON.stringify(response)}`
}

interface ErrorText {
	error: unknown
	requestName: string
	url: string
	options: RequestInit
}
const getErrorText = ({ error, requestName, url, options }: ErrorText) => {
	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- This is a server-side only log
	return `Error ${error}: "Request Function Name: ${requestName}" Parameters: url=${url}, options=${JSON.stringify(options)}`
}

interface ApiHandlerArgs {
	name?: string // action function name for debugging
	url: string
	options?: RequestInit
}
export const actionHandler = async <T>({
	name,
	url,
	options,
}: ApiHandlerArgs): Promise<T> => {
	try {
		const response = await fetch(process.env.API_BASE_URL + url, options)
		const data = (await response.json()) as T

		if (!response.ok) {
			// 4xx, 5xx 에러 처리
			// const errorData = await response.json(); <-- 나중에 추가하기
			// eslint-disable-next-line no-console -- This is a server-side only log
			console.error(
				getResponseErrorText({
					response,
					requestName: name || actionHandler.name,
					url,
					options: options || ({} as RequestInit),
				}),
			)
		}
		return data
	} catch (error) {
		// Network 에러 혹은 기타 에러
		// eslint-disable-next-line no-console -- This is a server-side only log
		console.error(
			"API 요청 오류: \n",
			getErrorText({
				error,
				requestName: name || actionHandler.name,
				url,
				options: options || ({} as RequestInit),
			}),
		)
		throw error
	}
}

