import iconInstagram from "../assets/icon-Instagram.svg";
import iconMap from "../assets/icon-Map.svg";
import iconPhone from "../assets/icon-Phone.svg";
import iconMail from "../assets/icon-Mail.svg";

export const Footer = () => {
  return (
    <>
      <footer>
        <section>
          <p>© 2024 - Cosmetóloga Valery Miranda</p>
          <ul>
            <li>
              <a href="" target="_blank">
                <img src={iconMap} alt="icon Map" className="iconFooter" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cosmetologa_vm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                <img
                  src={iconInstagram}
                  alt="icon Instagram of Cosmetóloga VM - Valery Miranda"
                  className="iconFooter"
                />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <img
                  src={iconPhone}
                  alt="icon Instagram of Cosmetóloga VM - Valery Miranda"
                  className="iconFooter"
                />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <img
                  src={iconMail}
                  alt="icon Instagram of Cosmetóloga VM - Valery Miranda"
                  className="iconFooter"
                />
              </a>
            </li>
          </ul>
        </section>
        <p>
          Desarrollado por{" "}
          <a
            href="https://www.linkedin.com/in/noelia-camelia-acosta/"
            target="_blank"
            alt="enlace al perfil de linkedIn de Noelia Camelia Acosta"
          >
            Noelia Camelia Acosta
          </a>
        </p>
      </footer>
    </>
  );
};
