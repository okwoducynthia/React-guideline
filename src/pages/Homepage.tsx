import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero/Hero";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Eventlisteners from "../components/Eventlisteners/Eventlisteners";
import UseState from "../components/ReactHooks/UseState";
import UseEffects from "../components/ReactHooks/UseEffects";
import DeleteModal from "../components/DeleteModal/DeleteModal";
import FetchAllData from "../components/FetchAllData";
import Fetch2 from "../components/ReactHooks/Fetch2";
import FetchStudent from "../components/StudentApi/FetchStudent";
import { Link, useNavigate } from "react-router-dom";
import FetchDataTable from "../components/FetchDataTable";
import FetchTable2 from "../components/FetchTable2";


const Homepage = () => {

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/signup")
  }

  return (
    <div>
      <Hero />
      <Navbar />
      <HeroSection />

      <UseState/>
      <UseEffects/>
      <Eventlisteners />
      <DeleteModal/>
      <Header />
      <FetchAllData/>
      <Fetch2/>
      <FetchStudent/>
      <FetchDataTable/>
      <FetchTable2/>

      <button style={{fontSize:"20px"}}>
        <a href="/signup">
        Register Here
        </a>
      </button>

      <br />

      <button style={{fontSize:"20px"}}>
        <Link to={"/signup"}>
        Sign Up
        </Link>
      </button>

      <br />

      <button style={{fontSize:"20px"}} onClick={handleNavigate}>
        New User? Register Here.
      </button>

      <br />

      <button style={{fontSize:"20px"}}>
        <Link to={"/login2"}>
        Login
        </Link>
      </button>

      <br />

      <button style={{fontSize:"20px"}}>
        <Link to={"/profile"}>
        Update Profile
        </Link>
      </button>
      
    </div>
  );
};
// This buttons is linked to the signed up component
export default Homepage;
