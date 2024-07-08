import { FunctionComponent } from "react";
import Margin2 from "./Margin2";
import styles from "./PROFESORES.module.css";

export type PROFESORESType = {
  className?: string;
};

const PROFESORES: FunctionComponent<PROFESORESType> = ({ className = "" }) => {
  return (
    <div className={[styles.profesores, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.heading2}>
          <b className={styles.equipo}>equipo</b>
        </div>
        <div className={styles.container1}>
          <b className={styles.nuestrosProfesores}>NUESTROS PROFESORES</b>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.container3}>
          <Margin2
            team1jpg="/team1jpg@2x.png"
            image="/image.svg"
            carlosMartnez="Carlos Martínez"
            entrenamientoFuncional="Entrenamiento Funcional"
            conMsDe10AosDeExperiencia="Con más de 10 años de experiencia, Carlos se enfoca en mejorar fuerza y resistencia con rutinas personalizadas."
          />
          <Margin2
            team1jpg="/team2jpg@2x.png"
            image="/image1.svg"
            carlosMartnez="María Fernández"
            entrenamientoFuncional="Pilates"
            conMsDe10AosDeExperiencia="Experta en pilates con 6 años de experiencia, mejora flexibilidad y postura con ejercicios controlados."
            propMarginLeft="unset"
          />
          <Margin2
            team1jpg="/team3jpg@2x.png"
            image="/image2.svg"
            carlosMartnez="Fernando Gómez"
            entrenamientoFuncional="Nutrición Deportiva"
            conMsDe10AosDeExperiencia="Nutricionista deportivo certificado, especializado en planes alimenticios para mejorar rendimiento y recuperación."
            propMarginLeft="unset"
          />
          <Margin2
            team1jpg="/team4jpg@2x.png"
            image="/image3.svg"
            carlosMartnez="Ana López"
            entrenamientoFuncional="Yoga y Meditación"
            conMsDe10AosDeExperiencia="Instructora con 8 años de experiencia, dedicada a equilibrar cuerpo y mente mediante yoga y meditación."
            propMarginLeft="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default PROFESORES;
