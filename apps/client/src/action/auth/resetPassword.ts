import { EmailCheckPayload, EmailCheckResponse, EmailPayload, ResetPasswordPayload } from '@/types/auth/ResetPassowrd';
import { actionHandler } from '../actionHandler';

export const requestPasswordResetEmail = async (
  data: EmailPayload,
): Promise<Response> => {
  return actionHandler<Response>({
    name: "requestPasswordResetEmail",
    url: "/v1/auth/email/request",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    },
  });
};

export const checkEmailVerificationCode = async (
  data: EmailCheckPayload,
): Promise<EmailCheckResponse> => {
  return actionHandler<EmailCheckResponse>({
    name: "checkEmailVerificationCode",
    url: "/v1/auth/email/check",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    },
  });
};

export const resetPassword = async (
  data: ResetPasswordPayload,
): Promise<Response> => {
  return actionHandler<Response>({
    name: "resetPassword",
    url: "/v1/auth/resetPW",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    },
  });
};