import styles from "./Icon.module.scss";

export default function MaterialSymbolsAddBoxSharp(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
      className={styles.icon}
    >
      <path
        fill="currentColor"
        d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm-8 4V3h18v18H3Z"
      ></path>
    </svg>
  );
}
