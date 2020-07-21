import React from 'react';
import Link from 'next/link';

const Index = () => {

    return(
        <div>
            <h1>Olá semana Fullstack Master</h1>
            <div>
                <Link href="/sobre"><a>Sobre</a></Link>
            </div>
            <br/>
            <div>
                <Link href="/contato"><a>Contato</a></Link>
            </div>
            <br/>
            <div>
                <Link href="/pesquisa"><a>Responder a pesquisa</a></Link>
            </div>
        </div>
    );
}

export default Index;