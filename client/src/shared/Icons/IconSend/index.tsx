import { SVGProps } from "react";
import styles from "./IconSend.module.scss";

export function RiSendPlane2Fill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#ffffff"
        d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.593A.5.5 0 0 1 3 22.154V13Z"
      ></path>
    </svg>
  );
}
