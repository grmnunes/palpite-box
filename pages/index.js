import React from 'react';
import Link from 'next/link';

const Index = () => {

    return(
        <div>
            <p className="mt-12 text-center">
                Nosso restaurante está sempre em busca de atender seus cada vez melhor.<br/>
                Por isso, estamos sempre abtertos a ouvir sua opinião.
            </p>
            <div className="text-center my-12 font-bold text-white">
                <Link href="/">
                    <a className="bg-blue-400 px-6 py-4 rounded-lg shadow-lg hover:shadow"> Dar opinião ou sugestão </a>
                </Link>
            </div>
            <p className="mt-12 text-center">
                Mensagem de desconto
            </p>
        </div>
    );
}

export default Index;