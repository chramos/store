import React from 'react';
import { Link } from 'react-router-dom';

function Toolbar(props) {
  return (
        <div className="toolbar">
            <span className="desktop" style={{ textTransform: 'uppercase', fontSize: 10, fontWeight: 'bold' }}>Toda loja em até 12x sem juros no cartão.</span>
            <div className="">
                <Link to="/entrar" style={{ padding: '0 20px' }}>Entrar</Link>
                <Link to="/registrar" style={{ padding: '0 20px' }}>Registrar</Link>
            </div>
        </div>
     );
}

export default Toolbar;