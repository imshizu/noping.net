import Link from "./ExternalLink";

export default function Footer() {
    return (
        <footer className="row-start-4 gap-6 items-start justify-start leading-8 lg:-ml-[30rem]">
            <p className="mb-2">
                This is kinda only half serious (kinda 👀) so please don't get{" "}
                <Link href="https://www.youtube.com/watch?v=xzpndHtdl9A">mad</Link>
                {" "} at the person who sent you here.
            </p>
            <p className="mb-2">
                That said, if you see this site's URL as someone's status/bio, be prepared for no response if you just ping them!
            </p>
            <p className="mb-2">
                Inspiration is taken from the wonderful{" "}
                <Link href="https://nohello.net/en/">nohello.com</Link>.
                {" "} Open-source on{" "}
                <Link href="https://github.com/altshizu/">Github</Link>.
            </p>
        </footer>
    )
}
