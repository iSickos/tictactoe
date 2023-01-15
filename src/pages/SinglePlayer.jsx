import React from 'react'
import capa from '../assets/capa.svg'

function SinglePlayer() {
    return (
        <div className=' h-screen w-full flex items-center justify-center flex-col space-y-5'>
            <div className='w-[250px] h-auto bg-no-repeat bg-contain'
                style={{
                    backgroundImage: `url(${capa})`,
                    backgroundSize: "250px auto",
                }}>
                <img src={capa} alt="" className=' invisible' />
            </div>
            <div className=' text-center select-none'>
                <p>Sorry, no single player for now 😔</p>
            </div>
        </div>
    )
}

export default SinglePlayer