import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function NavbarMenu(props) {
  return (
		<Menu
			onClick={props.onClick}
			mode={props.mode}
			style={props.style}
		>
			<Menu.Item key="products">
				<Link  to="/produtos">PRODUTOS</Link>
			</Menu.Item>
		</Menu>
     );
}

export default NavbarMenu;