"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@repo/ui/button"
import { signupSchema, signupSchemaObject } from "@/schema/auth.ts"
import SignUpField from "@/components/auth/molecule/SignUpField.tsx"
import SignUpTimerField from "@/components/auth/molecule/SignUpTimerField.tsx"
import { useAuthTimer } from "@/hooks/auth/useAuthTimer.ts"
import {
	requestPasswordResetEmail,
	checkEmailVerificationCode,
	resetPassword,
} from "@/action/auth/resetPassword"
import { useState } from "react"

function ResetPasswordForm() {
	const [emailVerified, setEmailVerified] = useState(false)
	const {
		handleSubmit,
		register,
		watch,
		setError,
		clearErrors,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(signupSchema),
		mode: "onChange",
	})

	const signUpSchemaKeys = signupSchemaObject.keyof().enum
	const email = watch(signUpSchemaKeys.email) as string
	const emailCode = watch(signUpSchemaKeys.emailCode) as string
	const password = watch(signUpSchemaKeys.password) as string

	const emailValidationTime = 180 // 3 minutes
	const [timeLeft, startTimer] = useAuthTimer({ emailValidationTime })

	const handleOnSubmitSuccess = async () => {
		if (!emailVerified) {
			setError(signUpSchemaKeys.emailCode, {
				type: "manual",
				message: "Email verification is required.",
			})
			return
		}

		try {
			await resetPassword({ email, password })
			// eslint-disable-next-line no-alert -- Using alert to notify user of successful reset
			alert(
				"Password has been successfully reset. Redirecting to login page...",
			)
			window.location.href = "/auth/sign-in"
		} catch (error) {
			// eslint-disable-next-line no-console -- Logging error for debugging purposes
			console.error("Password reset failed:", error)
			// eslint-disable-next-line no-alert -- Using alert to notify user of failure
			alert("An error occurred while resetting the password. Please try again.")
		}
	}

	const handleEmailValidation = async () => {
		try {
			await requestPasswordResetEmail({ email })
			startTimer()
			// eslint-disable-next-line no-alert -- Using alert to notify user of failure
			alert("Verification code sent to your email.")
		} catch (error) {
			// eslint-disable-next-line no-console -- Using alert to notify user of failure
			console.error("Failed to request password reset email:", error)
			setError(signUpSchemaKeys.email, {
				type: "manual",
				message: "Failed to send verification email. Please try again.",
			})
		}
	}

	const handleEmailCodeValidation = async () => {
		try {
			const response = await checkEmailVerificationCode({
				email,
				code: emailCode,
			})

			if (response.valid) {
				clearErrors(signUpSchemaKeys.emailCode)
				setEmailVerified(true)
				// eslint-disable-next-line no-alert -- Using alert to notify user of failure
				alert("Email successfully verified.")
			} else {
				setError(signUpSchemaKeys.emailCode, {
					type: "manual",
					message: "Invalid verification code.",
				})
			}
		} catch (error) {
			// eslint-disable-next-line no-console -- Using alert to notify user of failure
			console.error("Failed to verify email code:", error)
			setError(signUpSchemaKeys.emailCode, {
				type: "manual",
				message: "Verification failed. Please try again.",
			})
		}
	}

	return (
		<div className="min-w-[500px] select-none gap-0 rounded border-none bg-[#252525] px-6 pb-12 pt-16 md:min-h-[780px] md:max-w-[650px] md:px-10 md:pb-16 md:pt-24">
			<div className="mb-5 flex h-fit flex-col justify-center gap-[5px] md:mb-14">
				<h1 className="text-center text-4xl font-bold text-white">
					Reset Password
				</h1>
			</div>

			<form onSubmit={handleSubmit(handleOnSubmitSuccess)}>
				<div className="mb-11 flex h-fit w-full flex-col gap-5">
					{/* Email */}
					<SignUpField
						showButton
						labelText="Email"
						labelProps={{
							htmlFor: signUpSchemaKeys.email,
						}}
						buttonText="Validate"
						buttonProps={{
							disabled: Boolean(errors[signUpSchemaKeys.email]) || !email,
							type: "button",
							onClick: handleEmailValidation,
						}}
						inputProps={{
							id: signUpSchemaKeys.email,
							placeholder: "Email",
							...register(signUpSchemaKeys.email),
						}}
						errorProps={{
							name: signUpSchemaKeys.email,
							errors,
						}}
					/>

					{/* Email Code */}
					{timeLeft !== null && (
						<SignUpTimerField
							inputProps={{
								id: signUpSchemaKeys.emailCode,
								placeholder: "Email Verification Code",
								...register(signUpSchemaKeys.emailCode),
							}}
							buttonProps={{
								type: "button",
								disabled:
									timeLeft === 0 ||
									Boolean(errors[signUpSchemaKeys.emailCode]) ||
									!emailCode,
								onClick: handleEmailCodeValidation,
							}}
							buttonText="Check"
							errorProps={{
								name: signUpSchemaKeys.emailCode,
								errors,
							}}
							timeLeft={timeLeft}
						/>
					)}

					{/* Password */}
					<SignUpField
						labelText="Password"
						labelProps={{
							htmlFor: signUpSchemaKeys.password,
						}}
						inputProps={{
							type: "password",
							id: signUpSchemaKeys.password,
							placeholder: "Password",
							...register(signUpSchemaKeys.password),
						}}
						errorProps={{
							name: signUpSchemaKeys.password,
							errors,
						}}
					/>

					{/* Password Confirm */}
					<SignUpField
						labelText="Password Confirm"
						labelProps={{
							htmlFor: signUpSchemaKeys.passwordValidate,
						}}
						inputProps={{
							type: "password",
							id: signUpSchemaKeys.passwordValidate,
							placeholder: "Password Confirm",
							...register(signUpSchemaKeys.passwordValidate),
						}}
						errorProps={{
							name: signUpSchemaKeys.passwordValidate,
							errors,
						}}
					/>
				</div>

				<div className="mb-8 flex h-fit w-full flex-col items-center gap-4">
					<Button
						type="submit"
						className="h-[50px] w-full rounded-[25px] !bg-[#A913F9] text-white hover:!bg-[#A913F9]/90">
						Reset Password
					</Button>
				</div>
			</form>
		</div>
	)
}

export default ResetPasswordForm
