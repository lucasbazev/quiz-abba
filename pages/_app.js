import React from 'react';

import '../css/styles.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        <div className='conteiner mx-auto text-center'>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp;