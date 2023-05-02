import pic1 from "Assets/img/pic1.webp";
import pic2 from "Assets/img/pic2.webp";
import pic3 from "Assets/img/pic3.webp";
import pic4 from "Assets/img/pic4.webp";

import logo from "Assets/logo.png";
import logo2 from "Assets/logo2.png";
import logo3 from "Assets/aboutus.png";
import logo4 from "Assets/info.png";

import { FiHome } from "react-icons/fi";
import { MdOutlinePeople, MdOutlineContactSupport } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiLocationMarker, HiOutlineLightBulb } from "react-icons/hi";

import locationImg from "Assets/location.png";

const onClickLocation = () => {
  window.open(
    "https://www.google.com/maps/place/Centro+Insular+de+Deportes+de+Gran+Canaria/@28.1130894,-15.4203185,17z/data=!3m1!4b1!4m6!3m5!1s0xc4095848462aaa9:0x9ceb6601a23aec80!8m2!3d28.1130847!4d-15.4177436!16zL20vMGR0MnNw"
  );
};

const sections = {
  HOME: {
    ID: 1,
    NAME: "Inicio",
    TITLE: "El bienestar empieza",
    SUBTITLE: "sintiéndote bien tú mismo.",
    INFO: [
      "La práctica de ejercicio ofrece beneficios cognitivos que mejoran el rendimiento y por lo tanto el negocio, así como la viabilidad de este; tanto en términos de publicidad. como en cualquier ámbito relacionado con la Responsabilidad Civil y Coporativa.",
      "Es por ello, que nace la mejor herramienta para mejorar la vida de tus trabajadores, la razón de ser de este proyecto:",
      "Total WorkFit",
      "Contando con instalaciones deportivas y áreas de recreo, ayudaremos a los trabajadores, mediante actividades conjuntas o individuales, a desarrollarse físicamente y a motivarlos a relacionarse entre ellos , lo que se traducirá en un mejor clima laboral y en una mejora de la salud personal.",
    ],
    IMG: logo,
    BACKGROUND: pic1,
    ICON: <FiHome size={25} />,
    SCROLLPOS: 0,
  },
  MOTIVATION: {
    ID: 2,
    NAME: "Motivación",
    TITLE: "El cansancio y la rutina",
    SUBTITLE: "son tu peor enemigo.",
    INFO: [
      "Los malos hábitos, el hastío, las dolencias crónicas, y el sedentarismo, conllevan a un deterioro cognitivo y físico que hace mella en la salud física y mental de cada persona. Esto, a su vez, produce un mal ambiente laboral que repercute ecónomica y directamente en todos los empleados, desde el primero hasta el último, jerarquicamente.",
      "Incluir hábitos saludables en la empresa. hace que los trabajadores tengan un mejor estado de salud, y por tanto, un mejor estado anímico, lo que se traduce en una mejor calidad de vida y una disminución del estrés en todos los sentidos, permitiendo ser el ejercicio, una vía de escape para cada trabajador.",
      "No hay que dejar para mañana todo lo que nos pueda ser beneficioso. De ahi nace este proyecto, y esa es nuestra misión.",
    ],
    IMG: logo2,
    BACKGROUND: pic2,
    ICON: <HiOutlineLightBulb size={25} />,
    SCROLLPOS: 33 - 20,
  },
  ABOUTUS: {
    ID: 3,
    NAME: "Nosotros",
    TITLE: "Las personas",
    SUBTITLE: "detrás de la idea...",
    INFO: [
      "Somos una empresa que da servicios a empresas con puestos muy repetitivos y que conlleven dolencias por los malos hábitos y contrarestarlos con ejercicios de control postural.",
      "Hemos puesto nuestra oficina y comenzado con Guaguas Municipales como primeros clientes ya que tienen un elevado número de empleados en dichos puestos: Conductores, mecánicos y oficinistas...",
      "Estamos empezando con ellos pero al estar ubicada en el Sebadal zona industrial y siendo pioneros en la materia a impartir saldremos a buscar más empresas similares, publicidad en las Guaguas Carteles RRSS y Web Con premios a la fidelidad y al captar empresas.",
      "Nosotros vamos a las empresas, ellos no vienen a nosotros.... ellos son nuestros clientes.",
    ],
    IMG: logo3,
    BACKGROUND: pic3,
    ICON: <MdOutlinePeople size={25} />,
    SCROLLPOS: 67 - 20,
  },
  CONTACT: {
    ID: 4,
    NAME: "Contacto",
    TITLE: "Ponte en contacto",
    SUBTITLE: "con nosotros.",
    INFO: [
      "Nos encontraremos en las instalaciones deportivas que tiene en su poder GUAGUAS MUNICIPALES.",
      "Puede ponerse en contacto acudiendo a dicha dirección, o mediante los siguientes canales de comunicación:",
    ],
    IMG: logo4,
    BACKGROUND: pic4,
    CHANNELS: [
      {
        icon: <BsTelephoneFill />,
        name: "Teléfono",
        value: "645541320",
      },
      {
        icon: <AiOutlineMail size={20} />,
        name: "Email",
        value: "total_workfit@gmail.com",
      },
      {
        icon: <HiLocationMarker size={20} />,
        name: "Dirección",
        value: "Avda. Alcalde Ramírez Bethencourt s/n, 35003",
      },
    ],
    LOCATION: {
      img: locationImg,
      onClick: onClickLocation,
    },
    ICON: <MdOutlineContactSupport size={25} />,
    SCROLLPOS: 100 - 20,
  },
};

export default sections;
