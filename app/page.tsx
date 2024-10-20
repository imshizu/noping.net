import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
    return (
        <div className="grid grid-rows-[1rem_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] gap-16">
            <Hero />
            <Footer />
        </div>
    );
}
