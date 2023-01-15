import React from 'react'
import { Link } from 'react-router-dom'
import MultiButton from '../components/MultiButton'
import SingleButton from '../components/SingleButton'

function Home() {
    return (
        <div className=' h-screen w-full flex items-center justify-center flex-col space-y-10'>
            <Link to={"/single"}><SingleButton /></Link>
            <Link to={"/multi"}><MultiButton /></Link>
        </div>
    )
}

export default Home