import React from 'react'
import capa from '../assets/capa.svg'

function NotFound() {
    return (
        <div className=' h-screen w-full flex items-center justify-center flex-col space-y-5'>
            <div className='w-[250px] h-auto bg-no-repeat bg-contain'
                style={{
                    backgroundImage: `url(${capa})`,
                    backgroundSize: "250px auto",
                }}>
                <img src={capa} alt="" className=' invisible' />
            </div>
            <div className='select-none text-center'>
                <p>404.</p>
                <p>Page not found</p>
            </div>
        </div>
    )
}

export default NotFound