import getFormattedDate from "@/lib/getFormattedDate"
import { getSortedPostsData, getPostData } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post: { id: any }) => ({
        postId: post.id
    }))
}



export default async function Post({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find((post: { id: string }) => post.id === postId)) notFound()

    const { title, date, contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return (
        <main className="max-w-4xl mx-auto px-5 lg:px-0 my-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">{title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{pubDate}</p>
            <article className="prose lg:prose-lg prose-slate dark:prose-dark mt-6">
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
            <div className="mt-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors">
         
                        ← Back to home
                
                </Link>
            </div>
        </main>
    )
}