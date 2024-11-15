export interface AuthMemberType {
	accessToken: string
	refreshToken: string
	nickname: string
	signinEmail: string
}

export interface SignIn {
	email: string
	password: string
}