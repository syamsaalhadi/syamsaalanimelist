import Link from "next/link"
import { headers } from "../../../next.config"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"
import Image from 'next/image'




const Navbar = ()=> {
    return (
        
    <header>
        <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
            <Link href="/" className="font-bold text-2xl">
                <div className="flex justify-center md:justify-normal">
            <Image className=" bg-color-primary hover:bg-color-secondary bg-opacity-10 rounded-xl "
        src="/icons.png"
         width={100}
         height={40}
         alt="Ini Gambar"
         /></div>
         </Link>
            
            <InputSearch />
            <UserActionButton/>
            
        </div>
        
    </header> 
    )
}


export default Navbar