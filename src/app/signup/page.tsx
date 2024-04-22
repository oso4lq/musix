"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "../signup/page.module.css";
import classNames from "classnames";
import FormWrapper from "@/components/FormWrapper/FormWrapper";
import { useState } from "react";
import { register } from "@/api";
import { setAuthState, setAuthUserData } from "@/store/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";

const SignUp = () => {

  const dispatcher = useAppDispatch();
  // array of inputs
  const registerForm = {
    email: '',
    password: '',
    username: '',
    repeatedPassword: '',
  };
  const [registerData, setRegisterData] = useState(registerForm);
  const [hasError, setHasError] = useState(false);

  // redirect to the main page if the user is already logged in
  const router = useRouter();
  const authState = useAppSelector((state) => state.auth.authState);
  if (authState) {
    router.push('/tracks');
    return null;
  }

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      if (registerData.password !== registerData.repeatedPassword) {
        setHasError(true);
        throw new Error('Passwords do not match.');
      }
      if (registerData.email === "" ||
        registerData.password === "" ||
        registerData.username === "" ||
        registerData.repeatedPassword === "") {
        setHasError(true);
        throw new Error('Please fill in all the inputs.');
      }
      await register(registerData).then((data) => {
        dispatcher(setAuthUserData(data));
        dispatcher(setAuthState());
      });
    } catch (error: any) {
      setHasError(error.message);
      console.error(error);
      setTimeout(() => {
        setHasError(false);
      }, 3000);
    };
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  return (
    <FormWrapper>
      <div className={styles.modalLogo}>
        <Link href="/">
          <Image
            width={140}
            height={21}
            src="/img/logo_modal.png"
            alt="logo"
          />
        </Link>
      </div>
      <input
        className={classNames(styles.modalInput, styles.login)}
        type="text"
        name="username"
        placeholder="username"
        value={registerData.username}
        onChange={handleInputChange}
      />
      <input
        className={classNames(styles.modalInput, styles.login)}
        type="text"
        name="email"
        placeholder="e-mail"
        value={registerData.email}
        onChange={handleInputChange}
      />
      <input
        className={classNames(styles.modalInput, styles.passwordFirst)}
        type="password"
        name="password"
        placeholder="password"
        value={registerData.password}
        onChange={handleInputChange}
      />
      <input
        className={classNames(styles.modalInput, styles.passwordDouble)}
        type="password"
        name="repeatedPassword"
        placeholder="repeat password"
        value={registerData.repeatedPassword}
        onChange={handleInputChange}
      />

      <div className={styles.buttonBox}>
        {hasError ? (
          <>
            <button
              id="btnEnter"
              disabled
              className={styles.modalBtnEnter}
              onClick={handleRegister}
            >
              <p>{hasError}</p>
            </button>
          </>
        ) : (
          <button
            id="btnEnter"
            className={styles.modalBtnEnter}
            onClick={handleRegister}
          >
            <p>Sign Up</p>
          </button>
        )}

        <Link href="/signin" className={styles.modalBtnSignin}>
          Sign In
        </Link>
      </div>

    </FormWrapper>
  );
}

export default SignUp;
