import Image from "next/image";
import Navbar from "./navbar/page";
import Myprofilepic from "./myprofilepic/page";
import Posts from "./posts/page";
export default function Home() {
  return (


    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Myprofilepic/>
     <p className = "text-4xl font-bold text-center">
     Simon's Blog App</p>
    <Posts />
    </main>

  );
}
