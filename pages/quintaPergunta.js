import React from 'react';
import Link from 'next/link';

const Quinta = () => {
    return (
        <div className='container mx-auto h-screen'>
            <h1 className='mt-4 text-gray-500'>Questão 5 / 5</h1>

            <div className='container mx-auto mt-24'>
                <p className='font-bold text-xl text-blue-800'>
                    Quantos álbuns do ABBA <br /> 
                    foram lançados?
                </p>

                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> 7
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> 8
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> 10
                </p>
                <p className='bg-gray-300 m-6 py-4 rounded-lg shadow-lg flex items-baseline'>
                    <input type='radio' className='float-left mx-4' /> 11
                </p>

                <div className='flex justify-center'>
                    <Link href='/resultado'>
                        <a className='text-white font-bold bg-blue-800 px-12 py-4 rounded-lg shadow-lg'>Finalizar!</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Quinta;