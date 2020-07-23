import React from 'react';
import Link from 'next/link';

const Pesquisa = () => {

    return(
        <div>
            <h1 className="text-center mt-6 font-bold text-4xl">Responda a pesquisa</h1>
            <p className="mt-12 text-center">
                Nosso restaurante está sempre em busca de atender seus cada vez melhor.<br/>
                Por isso, estamos sempre abtertos a ouvir sua opinião.
            </p>
            <div className="w-1/5 mx-auto">
                <label className='font-bold'>Seu nome:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' name='Nome' />
                <label className='font-bold'>E-mail:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' name='Email'/>
                <label className='font-bold'>Whatsapp:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' name='Whatsapp'/>
            </div>
        </div>
    );
}

export default Pesquisa;