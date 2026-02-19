'use client';

import { useState } from 'react';
import { O_NAS_TEXT } from "./content/texts";

export default function Home() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const images = [
        "https://res.cloudinary.com/ddrnecl2j/image/upload/v1771518165/brzez2_qgggpu.jpg",
        "https://res.cloudinary.com/ddrnecl2j/image/upload/v1771518165/brzez1_fwk3xz.jpg",
        "https://res.cloudinary.com/ddrnecl2j/image/upload/v1771518166/brzez3_sf1w7a.jpg"
    ];

    return (
        <main className="flex flex-col min-h-screen bg-sky-50 text-gray-900">

            <div className="flex-grow">
                <header className="py-20 px-6 text-center bg-white border-b">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Fundacja LUBUSKIE OD-NOWA</h1>
                    <p className="mt-4 text-xl text-gray-600">Prostota w służbie lokalnej społeczności.</p>
                </header>

                <section className="max-w-6xl mx-auto py-16 px-6">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">O nas</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line leading-relaxed text-justify hyphens-auto" lang="pl">
                        {O_NAS_TEXT}
                    </div>
                </section>
                <section className="max-w-6xl mx-auto py-4 px-6">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Pałac w Brzeźnicy:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedImg(src)}
                                className="overflow-hidden rounded-xl shadow-lg aspect-square bg-gray-100 cursor-pointer"
                            >
                                <img
                                    src={src}
                                    alt={`Zdjęcie fundacji ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <footer className="bg-slate-700 text-white py-12 px-6 mt-auto">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
                        <p className="text-xl font-semibold mb-0">Prezes Zarządu:</p>
                        <p className="text-gray-400 font-medium text-lg">Email: fundacjaperyfeerie@gmail.com</p>
                        <p className="text-gray-400 font-medium text-lg">Tel: +48 730 190 107</p>
                    </div>
                </div>
            </footer>

            {selectedImg && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setSelectedImg(null)}
                >
                    <div className="relative max-w-5xl max-h-screen">
                        <img
                            src={selectedImg}
                            alt="Podgląd"
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                        />
                        <button className="absolute top-[-40px] right-0 text-white text-xl font-bold">
                            Zamknij [×]
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}