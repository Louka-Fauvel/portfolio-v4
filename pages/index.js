import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <div className="md:container md:mx-auto">
                <div className="flex flex-col justify-center items-center mt-52">
                    <h1 className="mb-5 text-4xl md:text-7xl">Louka Fauvel</h1>
                    <h1 className="mt-5 text-2xl md:text-5xl">Développeur web</h1>
                </div>
            </div>
        </>
    )
}
