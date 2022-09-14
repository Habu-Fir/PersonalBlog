import Image from "next/image"
import Link from "next/link"

const Author = () => {
  return (
    <div className='author flex py-5'>
        <Image src={'/images/Habapx.jpg'} width={100} height={100} 
        className="rounded-full"/>
        <div className="flex flex-col justify-center px-4">
            <Link href={"/"}><a className="text-md font-bold text-gray-800 hover:text-gray-600">Habtamu Firew</a></Link>
            <span className="text-md text-gray-500">4 years of Software Development Experience</span>
        </div>
    </div>
  )
}

export default Author