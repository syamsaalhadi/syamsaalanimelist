"use client"
import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={32} className="bg-color-accent"/>
                <h2 className="text-color-accent">NOT FOUND | 404</h2>
                <Link href="/" className="text-color-primary hover:text-color-accent underline">Go back home</Link>
                
            </div>
        </div>
    )

}

export default Page

