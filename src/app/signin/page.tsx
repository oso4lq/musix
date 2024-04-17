"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "../signin/page.module.css";
import classNames from "classnames";
import FormWrapper from "@/components/FormWrapper/FormWrapper";
import { useState } from "react";
import { login } from "@/api";
import { setAuthState, setAuthUserData } from "@/store/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";

const SignIn = () => {

  const dispatcher = useAppDispatch();
  // array of inputs
  const loginForm = {
    email: '',
    password: '',
  };
  const [loginData, setLoginData] = useState(loginForm);
  const [hasError, setHasError] = useState(false);

  // redirect to the main page if the user is already logged in
  const router = useRouter();
  const authState = useAppSelector((state) => state.auth.authState);
  if (authState) {
    router.push('/tracks');
    return null;
  }

  const handleLogin = async (e: any) => {
    console.log("trying to log in with: " + loginData.email + " " + loginData.password);
    e.preventDefault();
    try {
      if (loginData.email === "" || loginData.password === "") {
        setHasError(true);
        throw new Error('Please fill in all the inputs.');
      }
      await login(loginData).then((data) => {
        dispatcher(setAuthUserData(data));
        dispatcher(setAuthState());
      });
    } catch (error: any) {
      setHasError(error.message);
      console.error(error);
      setTimeout(() => {
        setHasError(false);
      }, 3000);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <FormWrapper>
      <div className={styles.modalLogo}>
        <Image
          width={140}
          height={21}
          src="/img/logo_modal.png"
          alt="logo"
        />
      </div>
      <div>osetr@fish.com</div>
      <div>abirvalg</div>
      <input
        className={classNames(styles.modalInput, styles.login)}
        type="text"
        name="email"
        placeholder="e-mail"
        value={loginData.email}
        onChange={handleInputChange}
      />
      <input
        className={classNames(styles.modalInput, styles.password)}
        type="password"
        name="password"
        placeholder="password"
        value={loginData.password}
        onChange={handleInputChange}
      />

      {hasError ? (
        <>
          <button
            id="btnEnter"
            disabled
            className={styles.modalBtnEnter}
            onClick={handleLogin}
          >
            <p>{hasError}</p>
            {/* <Link href="/">Sign In</Link> */}
          </button>
          {/* <p>{hasError}</p> */}
        </>
      ) : (
        <button
          id="btnEnter"
          className={styles.modalBtnEnter}
          onClick={handleLogin}
        >
          <p>Sign In</p>
          {/* <Link href="/">Sign In</Link> */}
        </button>
      )}

      <Link href="/signup" className={styles.modalBtnSignup}>
        Sign Up
      </Link>

    </FormWrapper>
  );
}

export default SignIn;
