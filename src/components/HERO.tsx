import { FunctionComponent } from "react";
import Container1 from "./Container1";
import styles from "./HERO.module.css";

export type HEROType = {
  className?: string;
};

const HERO: FunctionComponent<HEROType> = ({ className = "" }) => {
  return (
    <div className={[styles.hero, className].join(" ")}>
      <Container1 icon="/icon4.svg" icon1="/icon5.svg" />
    </div>
  );
};

export default HERO;
