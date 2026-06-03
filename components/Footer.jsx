import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="relative bg-black text-gray-200 mt-12 mb-8 md:mb-0">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url('/footer.jpg')" }}
                aria-hidden="true"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />

            <div className="relative max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col items-center justify-center gap-8 ">
                    <div className=" flex flex-col items-center gap-6 md:flex-row md:justify-between w-full">
                        <Link href="/" className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition duration-100">
                            <Image
                                src="/LXshort.svg"
                                alt="LXShort Logo"
                                width={150}
                                height={40}
                            />
                        </Link>
                        <nav className="flex flex-row gap-4 text-sm text-gray-300">
                            <Link href="/">Movies</Link>
                            <Link href="/">TV-Shows</Link>
                            <Link href="/">Favorites</Link>
                        </nav>
                    </div>

                </div>

                <div className="mt-6 text-center max-w-3xl mx-auto">
                    <p className="text-sm text-gray-600 leading-relaxed">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem, ipsam natus, ullam facere labore quos quod molestiae ea quaerat nesciunt? Quisquam voluptatibus sapiente quia delectus repellendus placeat? Eaque, officia.
                    </p>

                    <p className="my-6 text-xs text-gray-400">LXShort © {new Date().getFullYear()}. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}


