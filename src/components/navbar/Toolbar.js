import React from 'react';


function Toolbar(props) {
  return (
        <div className="toolbar">
            <span className="desktop" style={{ textTransform: 'uppercase', fontSize: 10, fontWeight: 'bold' }}>Toda loja em até 12x sem juros no cartão.</span>
            <div className="">
                <a href="/" style={{ padding: '0 20px' }}>Login</a>
                <a href="/" style={{ padding: '0 20px' }}>Cadastre-se</a>
            </div>
        </div>
     );
}

export default Toolbar;