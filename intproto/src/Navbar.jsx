import React from 'react';
import {
	Outlet,
	Link
} from 'react-router-dom';
import pHblanco from'./images/phcafe.png';
export const Navbar = () => {
	

	return (
		<>

			<header>
					<h1>
			<Link to='/'><img src={pHblanco} height={70}/></Link></h1>
			<nav>
				<b>
					<Link style={{marginRight:'20px', color:'#F2E9D8', borderColor:'404040'}} to='/'>Inicio</Link>

                        {/* <Link to='/Tabla'>Tablas</Link> */}
                        <Link style={{marginRight:'20px', color:'#F2E9D8'}} to='/Reporte'>Reporte</Link>
						<Link style={{color:'#F2E9D8'}} to='/Tabla'>Tabla</Link>
</b>
					</nav>
			</header>

			<Outlet />
		</>
	);
};
