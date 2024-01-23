import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

// Define the properties directly in the Props type
type Props = {
    post: {
        title: string;
        date: string; 
        id: string; 
    };
}

export default function ListItem({ post }: Props) {
  const { title, date, id } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link href={`/posts/${id}`} passHref className="underline hover:text-black/70 dark:hover:text-white">
       
          {title}
       
      </Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
}