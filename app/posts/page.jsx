import { getSortedPostsData }  from "@/lib/posts";
import ListItem from "../listitem/page";
export default function Posts() {
const posts = getSortedPostsData();
    return (
    <section className= "mt-6 mx-auto max-w-2xl">
      <h2 className="text-3xl font-bold">Blog Posts</h2>
      <ul className="list-none">
        {posts.map((post) => (
<ListItem key = {post.id} post={post}/>
        ))}
        </ul>
    </section> 
)
}
