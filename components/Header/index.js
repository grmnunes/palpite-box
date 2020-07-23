import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const Header = () => {

    return(
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className="container mx-auto">
                    <Link href="/">
                        <a><img className="mx-auto" src="/logo_palpitebox.png" alt="Palpite-Box"/></a>
                    </Link>
                </div>
            </div>
            <div className="bg-gray-300 p-4 text-center">
                <Link href="/sobre"><a className="px-2">Sobre</a></Link>
                <Link href="/contato"><a className="px-2">Contato</a></Link> 
                <Link href="/pesquisa"><a className="px-2">Responder a pesquisa</a></Link>
            </div>
        </React.Fragment>
    );
};

export default Header