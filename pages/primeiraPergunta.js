import React from 'react';
import Link from 'next/link';

const Primeira = () => {
    return (
        <div className='container mx-auto h-screen'>
            <h1 className='mt-4 text-gray-500'>Questão 1 / 5</h1>

            <div className='container mx-auto mt-20'>
                <p className='font-bold text-xl text-blue-800'>
                    O grupo ABBA é formado por <br />
                    quantos integrantes?
                </p>

                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> 3
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> 5
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> 4
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> 6
                </p>

                <div className='flex justify-center'>
                    <Link href='/segundaPergunta'>
                        <a className='text-white font-bold bg-blue-800 px-12 py-4 rounded-lg shadow-lg'>Próxima!</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Primeira;