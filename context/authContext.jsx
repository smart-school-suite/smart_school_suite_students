import React, { createContext, useCallback, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../axios/axios";
import { handleSetAuthUser } from "../features/slices/authSlice";
import { secureStorage } from "../utils/securesStore";
const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const storageKeys = {
     LOGIN_OTP_TOKEN_HEADER:"LOGIN-OTP-TOKEN-HEADER",
     AUTH_TOKEN:"AUTH-TOKEN",
     API_KEY:"API-KEY",
     PASSWORD_OTP_TOKEN_HEADER:"PASSWORD-OTP-TOKEN-HEADER",
     PASSWORD_RESET_TOKEN:"PASSWORD-RESET-TOKEN"
  }
  const [authError, setAuthError] = useState({ 
       login: null,
       otp: null,
       changePassword: null,
       passwordResetError: null,
       passwordRestOtp: null,
       changeAuthPassword: null
    });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState({
    login: false,
    otp: false,
    createSchool: false,
    createSchoolBranch: false,
    subscribe: false,
    admin: false,
    changeAuthPassword: false,
    passwordReset: false,
    passwordResetOtp: false,
    changePassword: false
  });

  const handleLogin = async (email, password, router) => {
    setLoading((prevalue) => ({ ...prevalue, login: true }));
    setAuthError((prevalue) => ({ ...prevalue, login: null }));
    try {
      const response = await axios.post("auth/student/login", {
        email,
        password,
      });
      const responseData = response.data.data;
      secureStorage.setItem(storageKeys['LOGIN_OTP_TOKEN_HEADER'], responseData.otp_token_header)
      router.navigate("LoginOtp");
    } catch (error) {
      setAuthError((prevalue) => ({
        ...prevalue,
        login: "Login failed. Please check your credentials.",
      }));
      console.log(error)
    } finally {
      setLoading((prevalue) => ({ ...prevalue, login: false }));
    }
  };

  const handleTwoStepVerification = async (otp, router, otpTokenHeader) => {
    setLoading((prevalue) => ({ ...prevalue, otp: true }));
    setAuthError((prevalue) => ({ ...prevalue, otp: null }));
    try {
      const response = await axios.post(
        "auth/student/verify-otp",
        {
          otp,
        },
        {
          headers: { OTP_TOKEN_HEADER: otpTokenHeader },
        }
      );
      const responseData = response.data.data;
      await getAuthenticatedUser(responseData.authToken, responseData.apiKey, router, );
      await secureStorage.setItem(storageKeys['AUTH_TOKEN'],  responseData.authToken)
      await secureStorage.setItem(storageKeys['API_KEY'], responseData.apiKey)

      router.navigate("Home");
    } catch (error) {
      setAuthError((prevalue) => ({
        ...prevalue,
        otp: "Two step verification failed Please check credentials and try again",
      }));
    } finally {
      setLoading((prevalue) => ({ ...prevalue, otp: false }));
    }
  };

  const getAuthenticatedUser = useCallback(
    async (token, apiKey, router) => {
      try {
        const response = await axios.get("auth/student/me", {
          headers: {
            Authorization: `Bearer ${token}`,
            "API-KEY":apiKey
          },
        });
        dispatch(handleSetAuthUser({ user: response.data.data }));
      } catch (error) {
        router.navigate("Login")
      }
    },
    []
  );
  
  const handlePasswordReset = async (router, email) => {
    setLoading((prevalue) => ({ ...prevalue, passwordReset: true }));
    setAuthError((prevalue) => ({ ...prevalue, passordResetError: null }));
    try {
      const response = await axios.post("auth/student/password/reset", {
        email,
      });
      const responseData = response.data.data;
      secureStorage.setItem(storageKeys['PASSWORD_OTP_TOKEN_HEADER'], responseData.otp_header)
      router.navigate("ResetPasswordOtp");
    } catch (e) {
      setAuthError((prevalue) => ({
        ...prevalue,
        passordResetError: "Opps Something went wrong try again",
      }));
    } finally {
      setLoading((prevalue) => ({ ...prevalue, passwordReset: false }));
    }
  };

  const handleValidatePasswordResetOtp = async (
    router,
    otp,
    resetPasswordOtpToken
  ) => {
    setLoading((prevalue) => ({ ...prevalue, passwordResetOtp: true }));
    setAuthError((prevalue) => ({ ...prevalue, passwordRestOtp: null }));
    try {
      const response = await axios.post(
        "auth/student/password/reset/verify-otp",
        {
          otp,
        },
        {
          headers: { "OTP-TOKEN-HEADER": resetPasswordOtpToken },
        }
      );
      const responseData = response.data.data;
      secureStorage.setItem(storageKeys['PASSWORD_RESET_TOKEN'], responseData.password_reset_token)
      router.navigate("ChangePassword");
    } catch (e) {
      setAuthError((prevalue) => ({
        ...prevalue,
        passwordResetOtp:
          "Something went wrong trying to validate opt try again",
      }));
    } finally {
      setLoading((prevalue) => ({ ...prevalue, passwordResetOtp: false }));
    }
  };

  const handleChangePassword = async (router, passwordCredentails, passwordResetToken) => {
    setLoading((prevalue) => ({ ...prevalue, changePassword:true }));
    setAuthError((prevalue) => ({ ...prevalue, changePassword:null }))
    try {
      await axios.post("auth/student/password/reset/update",
        {
          new_password:passwordCredentails.new_password,
          new_password_confirmation:passwordCredentails.new_password_confirmation
        },
        {
          headers:{
            "PASSWORD-RESET-TOKEN":passwordResetToken
          }
        }
      )
     await secureStorage.removeItem(storageKeys['PASSWORD_RESET_TOKEN']);
      await secureStorage.removeItem(storageKeys['PASSWORD_OTP_TOKEN_HEADER']);
      router.navigate("PasswordResetSuccessfull");
    } catch (e) {
        setAuthError((prevalue) => ({ ...prevalue,  changePassword:"Something went wrong try again"}));
        console.log(e);
    }
    finally{
       setLoading((prevalue) => ({ ...prevalue, changePassword:false }))
    }
  };

  const contextValue = React.useMemo(
    () => ({
      authError,
      loading,
      handlePasswordReset,
      handleLogin,
      handleTwoStepVerification,
      handleValidatePasswordResetOtp,
      handleChangePassword,
      getAuthenticatedUser 
    }),
    [
      authError,
      loading,
      handlePasswordReset,
      handleLogin,
      handleTwoStepVerification,
      handleValidatePasswordResetOtp,
      handleChangePassword,
      getAuthenticatedUser 
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
