import {Link} from "react-router-dom";
import ButtonAppBar from "./NavBarDemo";

export default function Login()
{
   return(
        <div>
       
        Login Page
            <nav>
         <Link to="/">Home</Link>
         <Link to="/contact">Contact</Link>
         </nav>
         </div>
    );
}