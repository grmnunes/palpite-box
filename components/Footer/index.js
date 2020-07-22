import React from 'react';

const Footer = () => {

    return(
        <footer className="bg-gray-700 p-4">
            <div className="container mx-auto text-center font-bold text-white">
                Projeto desenvolvido por Germano Nunes
                <div className="mt-4">
                    <img className="inline p-4" src="/logo_semana_fsm.png" alt="Semana FullStack Master"/>
                    <img className="inline p-4" src="/logo_devpleno.png" alt="DevPleno"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;