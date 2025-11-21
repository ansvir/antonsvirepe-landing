import { useState } from 'react';

interface ProjectImage {
    id: number;
    src: string;
    alt: string;
}

export default function ProjectsGallery({ t }: { t: any }) {
    const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

    const images: ProjectImage[] = [
        { id: 1, src: '/images/project1.jpg', alt: t.hero.projects[0].title },
        { id: 2, src: '/images/project2.png', alt: t.hero.projects[1].title },
        { id: 3, src: '/images/project3.png', alt: t.hero.projects[2].title },
    ];

    return (
        <>
            {/* --- Сетка картинок --- */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img) => (
                    <div
                        key={img.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden group relative cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            {img.alt}
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Модальное окно --- */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-3xl w-full mx-4">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
                        />
                        <button
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 text-lg"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}