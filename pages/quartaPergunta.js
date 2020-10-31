import React from 'react';
import Link from 'next/link';

const Quarta = () => {
    return (
        <div className='container mx-auto h-screen'>
            <h1 className='mt-4 text-gray-500'>Questão 4 / 5</h1>

            <div className='container mx-auto mt-24'>
                <p className='font-bold text-xl text-blue-800'>
                    Qual dessas músicas não é do ABBA?
                </p>

                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> Dancing Queen
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> Gimme! Gimme! Gimme!
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> September
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> Fernando
                </p>

                <div className='flex justify-center'>
                    <Link href='/quintaPergunta'>
                        <a className='text-white font-bold bg-blue-800 px-12 py-4 rounded-lg shadow-lg'>Próxima!</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Quarta;