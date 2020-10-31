import React from 'react';
import Link from 'next/link';

const Index = () => {
    return (
        <div className='container mx-auto h-screen flex flex-col mt-24'>
            <img className='mx-auto w-2/3' src='/abba.png' alt='abba' />

            <h1 className='my-6 font-bold text-2xl text-blue-800'>
                Você realmente conhece o ABBA?
            </h1>

            <p className='mb-6 font-bold text-gray-600'>
                Responda ao quiz pra descobrir se você <br />
                é um fã de verdade ou se é só um modinha!
            </p>

            <div className='mt-6'>
                <Link href='/primeiraPergunta'>
                    <a className='text-white font-bold bg-blue-800 px-12 py-4 rounded-lg shadow-lg'>Responder!</a>
                </Link>
            </div>
        </div>
    )
}

export default Index;