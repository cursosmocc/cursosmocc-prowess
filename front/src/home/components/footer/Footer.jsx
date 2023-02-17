import React from "react";
import "./style.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
const TikTokIcon = ({ color = "white" }) => {
  return (
    <svg
      fill={color}
      xmlns="https://www.tiktok.com/@totalprowess_ec?_t=8WfSUUREkkf&_r=1"
      viewBox="0 0 50 50"
      width="100%"
      height="100%">
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="bg-footer">
      <h3 className="titulo-footer">
          Compartir
      </h3>
      <ul className="iconos ">  
        <li className="nav-item">
          <a
              href="https://Prowessec.com"
              target={"_blank"}
              className="fot-link"
              rel="noreferrer"
            >
              <LanguageIcon style={{  }} />
          </a>  
        </li>
        <li className="nav-item">
          <a
              href="https://instagram.com/prowess_ec?igshid=YmMyMTA2M2Y="
              target={"_blank"}
              className="fot-link"
              rel="noreferrer"
            >
              <InstagramIcon style={{  }} />
            </a>
        </li>
        <li className="nav-item">
          <a
              href="https://www.facebook.com/prowess.ec"
              target={"_blank"}
              className="fot-link"
              rel="noreferrer"
            >
              <FacebookIcon style={{}} />
            </a>
        </li>
        <li className="nav-item">
          <a
              href="https://www.tiktok.com/@totalprowess_ec?_t=8WfSUUREkkf&_r=1"
              target={"_blank"}
              className="fot-link"
              rel="noreferrer">
              <div className="tiktok" style={{width: "25px"  }}>
                <TikTokIcon style={{ }} />
              </div>
            </a>          
        </li>      
      </ul>
        <h3 className="texto-footer">
            Dr.Luis Simbaña Taipe
      </h3>
      <h3 className="texto-footer">
         Whatsapp:<a className="link-footer" href="https://api.whatsapp.com/send?phone=593998160293&text=Me%20interesa%20saber%20mas%20sobre%20PROWESSEC">+593 99 816 0293.</a></h3>
      <h3 className="texto-footer">
         Correo:<a className="link-footer" href="lesimbania@espe.edu.ec">lesimbania@espe.edu.ec</a></h3>
      <div className="derechos-footer">
        <h8 className="texto-derechos">Todos los derechos reservados - Prowess Ecuador 2021</h8> 
      </div>
    </footer>
  );
};

export default Footer;
