import Link from "next/link";
import Image from "next/image";
export default function Myprofilepic() {
    return (
<div className = "grid content-start md:content-around">
    <Image src = "/simon.png" 
    width = {220} 
    height = {220} 
    className = "border-4 border-slate-600 rounded-full"
    alt = "Simon" 
    priority ={true}/>  
</div>
    );
}