import Image from "next/image";
import Link from "next/link";
import styles from "../signup/page.module.css";
import classNames from "classnames";
import FormWrapper from "@/components/FormWrapper/FormWrapper";
export default function SignUp() {
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
        className={classNames(styles.modalInput, styles.passwordFirst)}
        type="password"
        name="password"
        placeholder="password"
      />
      <input
        className={classNames(styles.modalInput, styles.passwordDouble)}
        type="password"
        name="password"
        placeholder="repeat password"
      />
      <button className={styles.modalBtnSignupEnt}>
        <Link href="/signin">Sign Up</Link>
      </button>
    </FormWrapper>
  );
}
