import { NavLink ,Outlet } from "react-router-dom";

function Layout () {

      return (
            <div> 
                <nav>
                  <ul> 
                      
                         <li>
                        <NavLink style={({isActive})=>({color : isActive? "red" :"white"})} to="Appu">Appu</NavLink>
                        </li>
                        <li> 
                        <NavLink style={({isActive})=>({color : isActive? "red" :"white"})} to="Appo">Appo</NavLink>
                        </li>
                  </ul> 
                </nav>
                <Outlet />
            </div>
      );
}
export default Layout;