import React from 'react';

const Resultado = () => {
    return (
        <div className='container mx-auto flex flex-col mt-40 h-screen'>
            <p className='font-bold text-gray-900 mb-6'>Feliz 1 ano e 6 meses! Amo você!</p>

            <img className='mx-auto w-1/2' src='/disco.png' alt='disco'/>

            <h1 className='my-6 font-bold text-2xl text-blue-800'>Parabéns!</h1>

            <p className='font-bold text-gray-600'>Você acaba de ganhar um Disco ABBA Gold!</p>
        </div>
    )
}

export default Resultado;