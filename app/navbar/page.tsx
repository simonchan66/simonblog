import Link from "next/link";
import { FaYoutube, FaGithub, FaLinkedin, FaTwitter, FaLaptop } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="bg-slate-800 p-4 sticky top-0 z-10 h-16 shadow-lg">
            <div className="max-w-6xl mx-auto flex justify-between items-center h-full">
                <h1 className="text-white font-semibold text-xl">
                    <Link href="/" className="hover:text-gray-300 transition-colors">
                        Simon Chan&apos;s Blog App made with Next.js
                    </Link>
                </h1>

                <div className="flex items-center gap-6 text-white text-2xl">
                    <Link href="https://youtube.com/simonchan66" className="hover:text-red-600 transition-colors">
                
                            <FaYoutube aria-label="YouTube" />
                    
                    </Link>
                    <Link href="https://yourwebsite.com/" className="hover:text-blue-500 transition-colors">
                   
                            <FaLaptop aria-label="Website" />
                  
                    </Link>
                    <Link href="https://github.com/simonchan66" className="hover:text-gray-400 transition-colors">
                       
                            <FaGithub aria-label="GitHub" />
                    </Link>
                    <Link href="https://twitter.com/simonchan66" className="hover:text-blue-400 transition-colors">
              
                              <FaTwitter aria-label="Twitter" />
                  
                    </Link>
                </div>
            </div>
        </nav>
    )
}
