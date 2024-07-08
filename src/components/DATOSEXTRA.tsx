import { FunctionComponent } from "react";
import Margin5 from "./Margin5";
import styles from "./DATOSEXTRA.module.css";

export type DATOSEXTRAType = {
  className?: string;
};

const DATOSEXTRA: FunctionComponent<DATOSEXTRAType> = ({ className = "" }) => {
  return (
    <div className={[styles.datosExtra, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <Margin5
            icon="/icon1.svg"
            videoPlaceholders="232"
            clientesSatisfecho="Clientes satisfecho"
          />
          <Margin5
            icon="/icon2.svg"
            videoPlaceholders="521"
            clientesSatisfecho="Proyectos"
            propFlex="unset"
            propMinWidth="unset"
            propWidth="392px"
          />
          <Margin5
            icon="/icon3.svg"
            videoPlaceholders="15"
            clientesSatisfecho="Entrenadores"
            propFlex="unset"
            propMinWidth="unset"
            propWidth="340px"
          />
        </div>
      </div>
    </div>
  );
};

export default DATOSEXTRA;
