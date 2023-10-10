import { SVGProps } from "react";
import styles from "./IconDownload.module.scss";

export function IconParkOutlineDownload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      width=".5rem"
      height=".5rem"
      viewBox="0 0 48 48"
      {...props}
    >
      <g
        fill="currentColor"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="M6 24.008V42h36V24"></path>
        <path d="m33 23l-9 9l-9-9m8.992-17v26"></path>
      </g>
    </svg>
  );
}
