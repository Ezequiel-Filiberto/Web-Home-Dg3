import { FunctionComponent } from "react";
import Margin3 from "./Margin3";
import styles from "./POSTEOSRECIENTES.module.css";

export type POSTEOSRECIENTESType = {
  className?: string;
};

const POSTEOSRECIENTES: FunctionComponent<POSTEOSRECIENTESType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.posteosRecientes, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.heading2}>
          <b className={styles.beneficios}>beneficios</b>
        </div>
        <div className={styles.container1}>
          <b className={styles.beneficiosDeAprender}>
            Beneficios de Aprender con Nosotros
          </b>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.container3}>
          <Margin3
            blog1jpg="/blog1jpg@2x.png"
            mejoraIntegralDeLaSalud="Mejora Integral de la Salud"
            nuestrosCursosEstnDiseado="Nuestros cursos están diseñados para mejorar tu condición física y mental, ayudándote a alcanzar un equilibrio óptimo en tu vida diaria."
          />
          <Margin3
            blog1jpg="/blog1jpg@2x.png"
            mejoraIntegralDeLaSalud="Atención Personalizada"
            nuestrosCursosEstnDiseado="Cada curso ofrece un enfoque individualizado, adaptándose a tus necesidades y objetivos específicos para garantizar resultados efectivos."
            propMarginLeft="unset"
          />
          <Margin3
            blog1jpg="/blog1jpg@2x.png"
            mejoraIntegralDeLaSalud="Acceso a Profesionales Expertos"
            nuestrosCursosEstnDiseado="Tendrás la oportunidad de aprender y entrenar con nuestros entrenadores certificados, quienes te guiarán en cada paso de tu viaje hacia el bienestar."
            propMarginLeft="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default POSTEOSRECIENTES;
