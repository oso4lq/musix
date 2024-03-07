import Image from "next/image";
import Link from "next/link";
import styles from "../signin/page.module.css";
import classNames from "classnames";
import FormWrapper from "@/components/FormWrapper/FormWrapper";

export default function SignIn() {
  return (
    <FormWrapper>
      <a href="../">
        <div className={styles.modalLogo}>
          <Image
            width={140}
            height={21}
            src="/img/logo_modal.png"
            alt="logo"
          />
        </div>
      </a>
      <input
        className={classNames(styles.modalInput, styles.login)}
        type="text"
        name="login"
        placeholder="e-mail"
      />
      <input
        className={classNames(styles.modalInput, styles.password)}
        type="password"
        name="password"
        placeholder="password"
      />
      <button className={styles.modalBtnEnter}>
        <Link href="/">Sign In</Link>
      </button>
      <Link href="/signup" className={styles.modalBtnSignup}>
        Sign Up
      </Link>
    </FormWrapper>
  );
}
