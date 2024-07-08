import { FunctionComponent } from "react";
import Group from "./Group";
import styles from "./QUEDICENNUESTROSPROFESIONAL.module.css";

export type QUEDICENNUESTROSPROFESIONALType = {
  className?: string;
};

const QUEDICENNUESTROSPROFESIONAL: FunctionComponent<
  QUEDICENNUESTROSPROFESIONALType
> = ({ className = "" }) => {
  return (
    <div className={[styles.queDicenNuestrosProfesional, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.heading2}>
          <b className={styles.comentarios}>COMENTARIOS</b>
        </div>
        <div className={styles.container1}>
          <b className={styles.loQueDicen}>Lo que dicen de nosotros</b>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.container3}>
          <div className={styles.group25margin}>
            <Group
              laVariedadDeClasesYLaCali={`"La variedad de clases y la calidad de los entrenadores en Almacenit es inigualable. Desde que me uní, he notado una gran mejora en mi bienestar general. Los eventos y talleres exclusivos son un gran plus. ¡Es el mejor centro de bienestar que he encontrado!"`}
              testimonials2jpg="/testimonials2jpg@2x.png"
              carlosMartnez="Carlos Martínez"
              diseador="Diseñador"
            />
          </div>
          <div className={styles.group35}>
            <div className={styles.container4}>
              <div className={styles.margin}>
                <div className={styles.container5}>
                  <div className={styles.container6}>
                    <div className={styles.container7}>
                      <img className={styles.icon} alt="" src="/icon13.svg" />
                    </div>
                  </div>
                  <div className={styles.container6}>
                    <div className={styles.container7}>
                      <img className={styles.icon} alt="" src="/icon14.svg" />
                    </div>
                  </div>
                  <div className={styles.container6}>
                    <div className={styles.container7}>
                      <img className={styles.icon} alt="" src="/icon15.svg" />
                    </div>
                  </div>
                  <div className={styles.container6}>
                    <div className={styles.container7}>
                      <img className={styles.icon} alt="" src="/icon16.svg" />
                    </div>
                  </div>
                  <div className={styles.container6}>
                    <div className={styles.container7}>
                      <img className={styles.icon} alt="" src="/icon13.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.margin1}>
                <div className={styles.paragraph}>
                  <i className={styles.almacenitHaTransformado}>
                    "Almacenit ha transformado mi vida. Los entrenadores son
                    increíbles y siempre están ahí para motivarme. Las
                    instalaciones son modernas y tienen todo lo que necesito
                    para mi entrenamiento. ¡Altamente recomendado!"
                  </i>
                </div>
              </div>
              <div className={styles.margin2}>
                <div className={styles.container16}>
                  <img
                    className={styles.testimonials3jpgIcon}
                    alt=""
                    src="/testimonials3jpg@2x.png"
                  />
                  <div className={styles.heading3}>
                    <b className={styles.juanPrez}>Juan Pérez</b>
                  </div>
                  <div className={styles.heading4}>
                    <div className={styles.comerciante}>Comerciante</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.group45margin}>
            <Group
              laVariedadDeClasesYLaCali={`"Estoy muy feliz de haberme unido a Almacenit. Los programas personalizados realmente me han ayudado a alcanzar mis objetivos de salud. Además, el ambiente es muy acogedor y me siento como en casa cada vez que voy."`}
              testimonials2jpg="/testimonials4jpg@2x.png"
              carlosMartnez="María González"
              diseador="Psicóloga"
            />
          </div>
        </div>
        <div className={styles.container17}>
          <div className={styles.buttonGoToSlide1} />
          <div className={styles.buttonGoToSlide2} />
          <div className={styles.buttonGoToSlide1} />
          <div className={styles.buttonGoToSlide1} />
          <div className={styles.buttonGoToSlide1} />
        </div>
      </div>
    </div>
  );
};

export default QUEDICENNUESTROSPROFESIONAL;
