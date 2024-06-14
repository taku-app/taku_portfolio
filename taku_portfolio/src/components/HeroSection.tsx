import Image from "next/image";
import HeroIntroduction from "@/components/HeroIntroduction";

export default function HeroSection() {
    const BASE_PATH = process.env.BASE_PATH || "";
    return (
        <>
            <section className="hero-section bg-gray-900 py-16">
                <div className="container mx-auto flex flex-col lg:flex-row h-auto lg:h-[600px] gap-8">
                    <div
                        className="hero-title-wrapper flex-1 flex items-center justify-center bg-white p-10 shadow-2xl rounded-lg">
                        <h1 className="text-5xl font-extrabold text-gray-900">Welcome to My Portfolio</h1>
                    </div>
                    <div aria-label="Hero Image Wrapper"
                         className="relative flex-1 h-80 lg:h-auto rounded-lg overflow-hidden shadow-2xl">
                        <Image className="hero-image object-cover" src={`${BASE_PATH}/profile.jpeg`} layout="fill" alt="Hero Image"/>
                    </div>
                    <div aria-label="Introduction Wrapper"
                         className="introduction-wrapper flex-1 h-auto overflow-scroll bg-white p-10 shadow-2xl rounded-lg">
                        <HeroIntroduction/>
                    </div>
                </div>
            </section>
        </>
    );
}