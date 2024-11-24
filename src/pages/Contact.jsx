import workingPhoto from "../assets/ValeryMiranda/Working.png";
import Address from "../components/Address";
import iconMail from "../assets/icon-Mail.svg";
import iconMessage from "../assets/icon-Message.svg";
import iconMap from "../assets/icon-Map.svg";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img src={workingPhoto} alt="working Photo" className="mb-8" />
      <ul className="space-y-8">
        <li className="flex flex-col items-center">
          <a href="mailto:cosmetologavalerymiranda@gmail.com">
            <img
              src={iconMail}
              alt="Enlace al correo electrónico empresarial: cosmetologavalerymiranda@gmail.com"
              className="w-12 mb-2"
            />
          </a>
          <p>cosmetologavalerymiranda@gmail.com</p>
        </li>
        <li className="flex flex-col items-center">
          <a href="tel:+598 95 905 258">
            <img
              src={iconMessage}
              alt="Enlace al whatsapp: +598 95 905 258"
              className="w-12 mb-2"
            />
          </a>
          <p>+598 95 905 258</p>
        </li>
        <li className="flex flex-col items-center">
          <img
            src={iconMap}
            alt="ícono de ubicación de un mapa"
            className="w-12 mb-2"
          />
          <Address />
        </li>
      </ul>
    </div>
  );
};

export default Contact;
