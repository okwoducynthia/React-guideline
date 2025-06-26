import "./Navbar.css";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';




const Navbar = () => {
  const title = "Nigeria is my Country";

  const navigate = useNavigate()

  const loginPage = () => {
    navigate("/login")
  }

  const QuestionP = () => {
    navigate("/question")
  }

  const servicePage = () => {
    navigate("/services")
  }
  return (
    <div>
      <li><a href="./login">Services</a></li>
      <li onClick={loginPage}>Login</li>
      <li onClick={servicePage}>Service11</li>
      <li onClick={QuestionP} style={{cursor:"pointer"}}>Service 5th june</li>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <h1 className="fh">{title}</h1>
      <p style={{ color: "purple" }}>Welcome</p>
      <h3
        style={{
          color: "pink",
          backgroundColor: "chocolate",
          fontSize: "50px",
        }}
      >My App
      </h3>

        {/* ===TAILWIND CSS 5TH JUNE 2025===== */}
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>


      <div className="twitter">
        <FaTwitter />
      </div>
      
      <h2 className="nav">Samsung</h2>
      <div className="instagram">
        <FaInstagram />
      </div>
      

      <div
        style={{
          backgroundImage: 'url("vite.svg")',
          backgroundRepeat: "no-repeat"
        }}
      ></div>
    </div>
  );
};

export default Navbar;
