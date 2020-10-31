import React from 'react';
import Link from 'next/link';

const Terceira = () => {
    return (
        <div className='container mx-auto h-screen'>
            <h1 className='mt-4 text-gray-500'>Questão 3 / 5</h1>

            <div className='container mx-auto mt-24'>
                <p className='font-bold text-xl text-blue-800'>
                    Em que ano surgiu o ABBA?
                </p>

                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> 1972
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> 1973
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> 1974
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> 1975
                </p>

                <div className='flex justify-center'>
                    <Link href='/quartaPergunta'>
                        <a className='text-white font-bold bg-blue-800 px-12 py-4 rounded-lg shadow-lg'>Próxima!</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Terceira;