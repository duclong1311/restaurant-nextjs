import Link from "next/link";

export default function BlogPage() {
    return (
        <main>
            <h1>Blog</h1>
            <p><Link href={"/blog/post-1"}/></p>
            <p><Link href={"/blog/post-2"}/></p>
        </main>
    )
}   