import { FunctionComponent } from "react";
import QUIENESSOMOS from "../components/QUIENESSOMOS";
import DATOSEXTRA from "../components/DATOSEXTRA";
import HERO from "../components/HERO";
import CURSOS from "../components/CURSOS";
import INSTITUCION from "../components/INSTITUCION";
import Container from "../components/Container";
import POSTEOSRECIENTES from "../components/POSTEOSRECIENTES";
import FOTOSULTIMOSTRABAJOS from "../components/FOTOSULTIMOSTRABAJOS";
import PROFESORES from "../components/PROFESORES";
import QUEDICENNUESTROSPROFESIONAL from "../components/QUEDICENNUESTROSPROFESIONAL";
import UBICACION from "../components/UBICACION";
import PREGUNTAS from "../components/PREGUNTAS";
import CONTACTO from "../components/CONTACTO";
import OverlayBorder from "../components/OverlayBorder";
import Margin from "../components/Margin";
import styles from "./WebDesktopHome.module.css";

const WebDesktopHome: FunctionComponent = () => {
  return (
    <div className={styles.webDesktopHome}>
      <div className={styles.container}>
        <div className={styles.frame}>
          <div className={styles.iframe}>
            <div className={styles.body}>
              <div className={styles.main}>
                <QUIENESSOMOS />
                <DATOSEXTRA />
                <HERO />
                <CURSOS />
                <INSTITUCION />
                <div className={styles.institucion}>
                  <div className={styles.container1}>
                    <div className={styles.heading2}>
                      <b className={styles.lugar}>lugar</b>
                    </div>
                    <div className={styles.container2}>
                      <div className={styles.nuestraInstitucin}>
                        NUESTRA INSTITUCIÓN
                      </div>
                    </div>
                    <div className={styles.container3}>
                      <div className={styles.container4}>
                        <div className={styles.container5}>
                          <div className={styles.aboutjpg}>
                            <img
                              className={styles.image10Icon}
                              alt=""
                              src="/image-10@2x.png"
                            />
                          </div>
                          <div className={styles.container6}>
                            <div className={styles.overlay}>
                              <div className={styles.heading21}>
                                <b className={styles.tuLugarDe}>
                                  Tu Lugar de Bienestar
                                </b>
                              </div>
                              <div className={styles.container7}>
                                <div
                                  className={
                                    styles.disfrutaDeEquipamientoContainer
                                  }
                                >
                                  <span
                                    className={
                                      styles.disfrutaDeEquipamientoContainer1
                                    }
                                  >
                                    <p
                                      className={
                                        styles.disfrutaDeEquipamientoModer
                                      }
                                    >
                                      <span
                                        className={styles.disfrutaDe}
                                      >{`Disfruta de `}</span>
                                      <b className={styles.disfrutaDe}>
                                        equipamiento moderno y espacios amplios
                                      </b>
                                      <span>{` y cómodos en un entorno seguro y acogedor. Nuestras sedes están ubicadas estratégicamente para ser `}</span>
                                      <b className={styles.disfrutaDe}>
                                        fácilmente accesibles, brindándote todo
                                        lo necesario para alcanzar tus metas
                                      </b>
                                      <span className={styles.disfrutaDe}>
                                        {" "}
                                        de bienestar en un ambiente motivador y
                                        de apoyo.
                                      </span>
                                    </p>
                                    <p
                                      className={
                                        styles.disfrutaDeEquipamientoModer
                                      }
                                    >
                                      <b>&nbsp;</b>
                                    </p>
                                    <p
                                      className={
                                        styles.disfrutaDeEquipamientoModer
                                      }
                                    >
                                      <b>Características destacadas:</b>
                                    </p>
                                    <ul
                                      className={
                                        styles.equipamientoModernoMquinas
                                      }
                                    >
                                      <li
                                        className={
                                          styles.ambienteAcogedorEspaciosAm
                                        }
                                      >
                                        <b>Equipamiento Moderno:</b>
                                        <span className={styles.disfrutaDe}>
                                          {" "}
                                          Máquinas y equipos de última
                                          generación.
                                        </span>
                                      </li>
                                      <li
                                        className={
                                          styles.ambienteAcogedorEspaciosAm
                                        }
                                      >
                                        <b className={styles.disfrutaDe}>
                                          Ambiente Acogedor:
                                        </b>
                                        <span className={styles.disfrutaDe}>
                                          {" "}
                                          Espacios amplios y confortables.
                                        </span>
                                      </li>
                                      <li>
                                        <b className={styles.disfrutaDe}>
                                          Seguridad y Higiene:
                                        </b>
                                        <span className={styles.disfrutaDe}>
                                          {" "}
                                          Entorno limpio y seguro para todos.
                                        </span>
                                      </li>
                                    </ul>
                                  </span>
                                </div>
                              </div>
                              <Container
                                leerMs="Ver más"
                                icon="/icon9.svg"
                                propPadding="22px 0px 0px"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container8}>
                    <div className={styles.container9}>
                      <div className={styles.margin}>
                        <div className={styles.container10}>
                          <img
                            className={styles.featurespngIcon}
                            alt=""
                            src="/featurespng@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.margin1}>
                        <div className={styles.container11}>
                          <div className={styles.container12}>
                            <div className={styles.margin2}>
                              <div className={styles.container13}>
                                <div className={styles.margin3}>
                                  <div className={styles.overlay1}>
                                    <div className={styles.container14}>
                                      <img
                                        className={styles.icon}
                                        alt=""
                                        src="/icon22.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.heading3}>
                                  <div
                                    className={
                                      styles.instalacionesModernasYContainer
                                    }
                                  >
                                    <p
                                      className={
                                        styles.disfrutaDeEquipamientoModer
                                      }
                                    >
                                      1. Instalaciones Modernas
                                    </p>
                                    <p
                                      className={
                                        styles.disfrutaDeEquipamientoModer
                                      }
                                    >
                                      y Equipadas
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.margin4}>
                              <div className={styles.container13}>
                                <div className={styles.margin3}>
                                  <div className={styles.overlay1}>
                                    <div className={styles.container14}>
                                      <img
                                        className={styles.icon}
                                        alt=""
                                        src="/icon10.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.heading3}>
                                  <div
                                    className={
                                      styles.instalacionesModernasYContainer
                                    }
                                  >
                                    <p
                                      className={
                                        styles.disfrutaDeEquipamientoModer
                                      }
                                    >
                                      4. Variedad de Clases y
                                    </p>
                                    <p
                                      className={
                                        styles.disfrutaDeEquipamientoModer
                                      }
                                    >
                                      Programas Personalizados
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.margin6}>
                              <div className={styles.container13}>
                                <div className={styles.margin3}>
                                  <div className={styles.overlay1}>
                                    <div className={styles.container14}>
                                      <img
                                        className={styles.icon}
                                        alt=""
                                        src="/icon10.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.heading3}>
                                  <div
                                    className={
                                      styles.instalacionesModernasYContainer
                                    }
                                  >
                                    <p
                                      className={
                                        styles.disfrutaDeEquipamientoModer
                                      }
                                    >
                                      2. Entrenadores Certificados
                                    </p>
                                    <p
                                      className={
                                        styles.disfrutaDeEquipamientoModer
                                      }
                                    >
                                      y Experimentados
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.margin8}>
                              <div className={styles.container13}>
                                <div className={styles.margin3}>
                                  <div className={styles.overlay1}>
                                    <div className={styles.container14}>
                                      <img
                                        className={styles.icon}
                                        alt=""
                                        src="/icon10.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.heading3}>
                                  <div
                                    className={
                                      styles.instalacionesModernasYContainer
                                    }
                                  >
                                    <p
                                      className={
                                        styles.disfrutaDeEquipamientoModer
                                      }
                                    >
                                      5. Áreas de Relajación
                                    </p>
                                    <p
                                      className={
                                        styles.disfrutaDeEquipamientoModer
                                      }
                                    >
                                      y Recuperación
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.margin10}>
                              <div className={styles.container13}>
                                <div className={styles.margin3}>
                                  <div className={styles.overlay1}>
                                    <div className={styles.container14}>
                                      <img
                                        className={styles.icon}
                                        alt=""
                                        src="/icon10.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.heading3}>
                                  <div
                                    className={
                                      styles.instalacionesModernasYContainer
                                    }
                                  >
                                    <p
                                      className={
                                        styles.disfrutaDeEquipamientoModer
                                      }
                                    >
                                      3. Ambiente Seguro
                                    </p>
                                    <p
                                      className={
                                        styles.disfrutaDeEquipamientoModer
                                      }
                                    >
                                      y Acogedor
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.margin12}>
                              <div className={styles.container13}>
                                <div className={styles.margin3}>
                                  <div className={styles.overlay1}>
                                    <div className={styles.container14}>
                                      <img
                                        className={styles.icon}
                                        alt=""
                                        src="/icon10.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.heading3}>
                                  <div
                                    className={
                                      styles.instalacionesModernasYContainer
                                    }
                                  >
                                    6. Ubicación y Accesibilidad
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <POSTEOSRECIENTES />
                <div className={styles.marcas}>
                  <img
                    className={styles.marca31}
                    alt=""
                    src="/marca-3-1@2x.png"
                  />
                  <img
                    className={styles.marca11}
                    alt=""
                    src="/marca-1-1@2x.png"
                  />
                  <img
                    className={styles.pngwingcom31}
                    alt=""
                    src="/pngwingcom-3-1@2x.png"
                  />
                  <img
                    className={styles.marca41}
                    alt=""
                    src="/marca-4-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <FOTOSULTIMOSTRABAJOS />
        </div>
        <div className={styles.frame1}>
          <PROFESORES />
          <QUEDICENNUESTROSPROFESIONAL />
        </div>
        <div className={styles.frame2}>
          <UBICACION />
          <PREGUNTAS />
        </div>
        <div className={styles.frame3}>
          <CONTACTO />
          <div className={styles.header}>
            <div className={styles.container25}>
              <div className={styles.linkmargin}>
                <div className={styles.link}>
                  <div className={styles.heading3}>
                    <div className={styles.almacenit}>Almacenit</div>
                  </div>
                </div>
              </div>
              <div className={styles.nav}>
                <div className={styles.list}>
                  <div className={styles.item} />
                  <div className={styles.item1}>
                    <div className={styles.link1}>
                      <div className={styles.inicio}>Inicio</div>
                    </div>
                  </div>
                  <div className={styles.item2}>
                    <div className={styles.link1}>
                      <div className={styles.inicio}>Sobre nosotros</div>
                    </div>
                  </div>
                  <div className={styles.item3}>
                    <div className={styles.link1}>
                      <div className={styles.inicio}>Servicios</div>
                    </div>
                  </div>
                  <div className={styles.item4}>
                    <div className={styles.link1}>
                      <div className={styles.inicio}>Portfolio</div>
                    </div>
                  </div>
                  <div className={styles.item5}>
                    <div className={styles.link1}>
                      <div className={styles.inicio}>Equipo</div>
                    </div>
                  </div>
                  <div className={styles.item6}>
                    <div className={styles.link1}>
                      <div className={styles.inicio}>Blog</div>
                    </div>
                  </div>
                  <div className={styles.item7}>
                    <div className={styles.link7}>
                      <div className={styles.heading3}>
                        <div className={styles.inicio}>Desplegable</div>
                      </div>
                      <div className={styles.margin14}>
                        <div className={styles.container14}>
                          <img
                            className={styles.icon6}
                            alt=""
                            src="/icon23.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item8}>
                    <div className={styles.link8}>
                      <div className={styles.inicio}>Contacto</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.linkmargin1}>
                <div className={styles.link9}>
                  <div className={styles.inicio}>Empezar</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pieDePgina}>
            <OverlayBorder />
            <div className={styles.container28}>
              <div className={styles.container29}>
                <div className={styles.margin15}>
                  <div className={styles.container30}>
                    <div className={styles.link10}>
                      <div className={styles.heading3}>
                        <div className={styles.almacenit1}>Almacenit</div>
                      </div>
                    </div>
                    <div className={styles.container32}>
                      <div className={styles.heading21}>
                        <div className={styles.buenosAiresArgentina}>
                          Avenida Libertador 1234, Palermo,
                        </div>
                      </div>
                      <div className={styles.heading21}>
                        <div className={styles.buenosAiresArgentina}>
                          Buenos Aires, Argentina.
                        </div>
                      </div>
                      <div className={styles.container35}>
                        <div className={styles.buenosAiresArgentina}>
                          <b>Telefono:</b>
                          <span> +54 11 1234 5678</span>
                        </div>
                      </div>
                      <div className={styles.heading21}>
                        <div className={styles.buenosAiresArgentina}>
                          <b>Mail:</b>
                          <span> contacto@almacenit.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Margin
                  linksUtiles="Links utiles"
                  inicio="Inicio"
                  quinesSomos="¿Quiénes somos?"
                  loQueNosDiferencia="Lo que nos diferencia"
                  ventajasDeNuestrosCursos="Ventajas de nuestros cursos"
                />
                <Margin
                  linksUtiles="Nuestros servicios"
                  inicio="Nuestros cursos"
                  quinesSomos="Nuestra institución"
                  loQueNosDiferencia="Nuestros profesores"
                  ventajasDeNuestrosCursos="Últimas fotos"
                  propRight="unset"
                  propLeft="unset"
                />
                <div className={styles.margin16}>
                  <div className={styles.container37}>
                    <div className={styles.container38}>
                      <div className={styles.sguenosEnRedes}>
                        ¡Síguenos en redes sociales para estar al día con
                        nuestras novedades y eventos!
                      </div>
                    </div>
                    <div className={styles.container39}>
                      <div className={styles.linkmargin2}>
                        <div className={styles.link11}>
                          <div className={styles.container40}>
                            <div className={styles.container14}>
                              <img
                                className={styles.icon7}
                                alt=""
                                src="/icon25.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkmargin2}>
                        <div className={styles.link11}>
                          <div className={styles.container40}>
                            <div className={styles.container14}>
                              <img
                                className={styles.icon7}
                                alt=""
                                src="/icon26.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkmargin2}>
                        <div className={styles.link11}>
                          <div className={styles.container40}>
                            <div className={styles.container14}>
                              <img
                                className={styles.icon7}
                                alt=""
                                src="/icon27.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.linkmargin2}>
                        <div className={styles.link11}>
                          <div className={styles.container40}>
                            <div className={styles.container14}>
                              <img
                                className={styles.icon7}
                                alt=""
                                src="/icon28.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.heading4}>
                      <b className={styles.siguenos}>Siguenos</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.horizontalborder}>
              <div className={styles.paragraph}>
                <div className={styles.copyright}>© Copyright </div>
                <b className={styles.copyright}>Almacenit</b>
                <div className={styles.copyright}>
                  Todos los derechos reservados
                </div>
              </div>
              <div className={styles.container48} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesktopHome;
