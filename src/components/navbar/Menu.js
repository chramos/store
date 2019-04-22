import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function NavbarMenu(props) {
  return (
		<Menu 
			mode={props.mode}
			style={props.style}
		>
			<Menu.Item key="male">
				<Link to="/produtos/masculino">MASCULINO</Link>
			</Menu.Item>
			
			<Menu.Item key="female">
				<Link to="/produtos/feminino">FEMININO</Link>
			</Menu.Item>
		</Menu>
     );
}

export default NavbarMenu;