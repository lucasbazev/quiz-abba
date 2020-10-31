import React from 'react';
import Link from 'next/link';

const Segunda = () => {
    return (
        <div className='container mx-auto h-screen'>
            <h1 className='mt-4 text-gray-500'>Questão 2 / 5</h1>

            <div className='container mx-auto mt-24'>
                <p className='font-bold text-xl text-blue-800'>
                    Qual é o país de origem do ABBA?
                </p>

                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> Suíça
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> Inglaterra
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> Finlândia
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> Suécia
                </p>

                <div className='flex justify-center'>
                    <Link href='/terceiraPergunta'>
                        <a className='text-white font-bold bg-blue-800 px-12 py-4 rounded-lg shadow-lg'>Próxima!</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Segunda;