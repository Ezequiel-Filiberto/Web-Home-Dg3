import { FunctionComponent } from "react";
import styles from "./CURSOS.module.css";

export type CURSOSType = {
  className?: string;
};

const CURSOS: FunctionComponent<CURSOSType> = ({ className = "" }) => {
  return (
    <div className={[styles.cursos, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.heading2}>
          <b className={styles.promos}>PROMOS</b>
        </div>
        <div className={styles.container1}>
          <div className={styles.nuestrosCursos}>NUESTROS CURSOS</div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.container3}>
          <div className={styles.margin}>
            <div className={styles.background}>
              <img
                className={styles.values1pngIcon}
                alt=""
                src="/values1png@2x.png"
              />
              <div className={styles.container4}>
                <div className={styles.heading3}>
                  <b className={styles.cursoBsicoDe}>
                    Curso Básico de Bienestar
                  </b>
                </div>
                <div className={styles.paragraph}>
                  <div className={styles.superscript}>$</div>
                  <div className={styles.div}>50</div>
                  <div className={styles.mes}> / mes</div>
                </div>
                <div className={styles.container5}>
                  <div className={styles.container6}>
                    <img className={styles.icon} alt="" src="/icon6.svg" />
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.item}>
                    <div className={styles.accesibleYAsequibleContainer}>
                      <span className={styles.accesibleYAsequibleContainer1}>
                        <span
                          className={styles.accesibleYAsequible}
                        >{`Accesible y asequible: `}</span>
                        <span className={styles.idealParaPrincipiantes}>
                          Ideal para principiantes.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={styles.item1}>
                    <div className={styles.flexibilidadHorariaClasesContainer}>
                      <span className={styles.accesibleYAsequibleContainer1}>
                        <span className={styles.accesibleYAsequible}>
                          Flexibilidad horaria:
                        </span>
                        <span className={styles.idealParaPrincipiantes}>
                          {" "}
                          Clases en distintos horarios.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={styles.item2}>
                    <div className={styles.ambienteDeApoyoContainer}>
                      <span className={styles.accesibleYAsequibleContainer1}>
                        <span className={styles.accesibleYAsequible}>
                          Ambiente de apoyo:
                        </span>
                        <span className={styles.idealParaPrincipiantes}>
                          {" "}
                          Grupos pequeños y personalizados.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.link}>
                  <div className={styles.comprar}>Comprar</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.margin}>
            <div className={styles.background}>
              <img
                className={styles.values1pngIcon}
                alt=""
                src="/values2png@2x.png"
              />
              <div className={styles.container4}>
                <div className={styles.heading31}>
                  <b className={styles.programaIntegralDe}>
                    Programa Integral de Fitness
                  </b>
                </div>
                <div className={styles.paragraph1}>
                  <div className={styles.superscript1}>$</div>
                  <div className={styles.div1}>135</div>
                  <div className={styles.mes1}> / mes</div>
                </div>
                <div className={styles.container8}>
                  <div className={styles.container6}>
                    <img
                      className={styles.layer1Icon}
                      alt=""
                      src="/layer-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.list1}>
                  <div className={styles.item}>
                    <div
                      className={styles.entrenamientoPersonalizadoPContainer}
                    >
                      <span className={styles.accesibleYAsequibleContainer1}>
                        <span className={styles.accesibleYAsequible}>
                          Entrenamiento personalizado:
                        </span>
                        <span className={styles.idealParaPrincipiantes}>
                          {" "}
                          Planes de ejercicio adaptados.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={styles.item1}>
                    <div
                      className={styles.asesoramientoNutricionalMejContainer}
                    >
                      <span className={styles.accesibleYAsequibleContainer1}>
                        <span className={styles.accesibleYAsequible}>
                          Asesoramiento nutricional:
                        </span>
                        <span className={styles.idealParaPrincipiantes}>
                          {" "}
                          Mejora tus hábitos alimenticios.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={styles.item2}>
                    <div className={styles.seguimientoYEvaluacinContainer}>
                      <span className={styles.accesibleYAsequibleContainer1}>
                        <span className={styles.accesibleYAsequible}>
                          Seguimiento y evaluación:
                        </span>
                        <span className={styles.idealParaPrincipiantes}>
                          {" "}
                          Monitoreo constante del progreso.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.link1}>
                  <div className={styles.comprar}>Comprar</div>
                </div>
                <img
                  className={styles.backgroundIcon}
                  alt=""
                  src="/background@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.margin}>
            <div className={styles.background}>
              <img
                className={styles.values1pngIcon}
                alt=""
                src="/values3png@2x.png"
              />
              <div className={styles.container4}>
                <div className={styles.heading32}>
                  <b className={styles.paquetePremiumDe}>
                    Paquete Premium de Bienestar
                  </b>
                </div>
                <div className={styles.paragraph}>
                  <div className={styles.superscript1}>$</div>
                  <div className={styles.div1}>240</div>
                  <div className={styles.mes1}> / mes</div>
                </div>
                <div className={styles.container5}>
                  <div className={styles.container6}>
                    <img className={styles.icon1} alt="" src="/icon7.svg" />
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.item}>
                    <div className={styles.accesoIlimitadoParticipaContainer}>
                      <span className={styles.accesibleYAsequibleContainer1}>
                        <span className={styles.accesibleYAsequible}>
                          Acceso ilimitado:
                        </span>
                        <span className={styles.idealParaPrincipiantes}>
                          {" "}
                          Participa en todas las clases.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={styles.item1}>
                    <div className={styles.talleresYEventosContainer}>
                      <span className={styles.accesibleYAsequibleContainer1}>
                        <span>
                          <span className={styles.accesibleYAsequible}>
                            Talleres y eventos exclusivos:
                          </span>
                          <span
                            className={styles.idealParaPrincipiantes}
                          >{` `}</span>
                        </span>
                        <span className={styles.idealParaPrincipiantes}>
                          <span>Acceso a eventos especiales.</span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={styles.item2}>
                    <div className={styles.sesionesDeCoachingContainer}>
                      <span className={styles.accesibleYAsequibleContainer1}>
                        <span className={styles.accesibleYAsequible}>
                          Sesiones de coaching:
                        </span>
                        <span className={styles.idealParaPrincipiantes}>
                          {" "}
                          Acompañamiento integral con un coach.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.link}>
                  <div className={styles.comprar}>Comprar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CURSOS;
