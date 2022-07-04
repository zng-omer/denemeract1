import { NavLink ,Outlet } from "react-router-dom";

const Layout =()=> {

      return (
            <div>
                <nav>
                  <ul>
                        <li>
                              <NavLink style={({isActive})=>({color : isActive? "red" :"black"})} to="/">Appt</NavLink>
                        </li>
                        <li>
                        <NavLink style={({isActive})=>({color : isActive? "red" :"black"})} to="Appu">Appu</NavLink>
                        </li>
                        <li>
                        <NavLink style={({isActive})=>({color : isActive? "red" :"black"})} to="Appo">Appo</NavLink>
                        </li>
                  </ul>
                </nav>
                <Outlet />
            </div>
      );
}
export default Layout;