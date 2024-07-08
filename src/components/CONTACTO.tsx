import { FunctionComponent } from "react";
import Margin1 from "./Margin1";
import styles from "./CONTACTO.module.css";

export type CONTACTOType = {
  className?: string;
};

const CONTACTO: FunctionComponent<CONTACTOType> = ({ className = "" }) => {
  return (
    <div className={[styles.contacto, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.heading2}>
          <b className={styles.contacto1}>CONTACTO</b>
        </div>
        <div className={styles.container1}>
          <b className={styles.contactanos}>CONTACTANOS</b>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.container3}>
          <div className={styles.margin}>
            <div className={styles.container4}>
              <div className={styles.container5}>
                <div className={styles.margin1}>
                  <div className={styles.container6}>
                    <div className={styles.overlay}>
                      <div className={styles.container7}>
                        <img className={styles.icon} alt="" src="/icon18.svg" />
                      </div>
                      <div className={styles.heading3}>
                        <b className={styles.direccin}>Dirección</b>
                      </div>
                      <div className={styles.container8}>
                        <div className={styles.direccin}>
                          Avenida Libertador 1234, Palermo
                        </div>
                      </div>
                      <div className={styles.container9}>
                        <div className={styles.direccin}>
                          Buenos Aires, Argentina.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Margin1
                  icon="/icon19.svg"
                  llamanos="Llamanos"
                  prop="+54 11 1234 5678"
                  prop1="+54 11 8765 4321"
                />
                <Margin1
                  icon="/icon20.svg"
                  llamanos="Nuestros mails"
                  prop="contacto@almacenit.com"
                  prop1="info@almacenit.com"
                />
                <Margin1
                  icon="/icon21.svg"
                  llamanos="Horas abierto"
                  prop="Lunes a Viernes"
                  prop1="7:00 AM - 9:00 PM"
                />
              </div>
            </div>
          </div>
          <div className={styles.margin2}>
            <div className={styles.form}>
              <div className={styles.container10}>
                <div className={styles.margin3}>
                  <div className={styles.container11}>
                    <div className={styles.input}>
                      <div className={styles.container12}>
                        <div className={styles.nombre}>Nombre</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame}>
                  <div className={styles.margin4}>
                    <div className={styles.container11}>
                      <div className={styles.input}>
                        <div className={styles.container12}>
                          <div className={styles.nombre}>Mail de contacto</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.margin5}>
                  <div className={styles.container11}>
                    <div className={styles.input}>
                      <div className={styles.container12}>
                        <div className={styles.nombre}>Sujeto</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.margin6}>
                  <div className={styles.container17}>
                    <div className={styles.textarea} />
                  </div>
                </div>
                <div className={styles.margin7}>
                  <div className={styles.container18}>
                    <div className={styles.button}>
                      <div className={styles.direccin}>Enviar mensaje</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CONTACTO;
