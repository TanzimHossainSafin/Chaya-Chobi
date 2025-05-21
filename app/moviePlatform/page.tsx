export default function MoviePlatformPage() {
    const platforms = [
        {
            name: "Netflix",
            url: "https://www.netflix.com/bd/",
            logo: (
                <svg viewBox="0 0 32 32" width={32} height={32} fill="none">
                    <rect width="32" height="32" rx="6" fill="#E50914"/>
                    <path d="M12 6h3v20h-3zM17 6h3v20h-3z" fill="#fff" opacity="0.2"/>
                    <path d="M15.5 6h1v20h-1z" fill="#fff"/>
                </svg>
            )
        },
        {
            name: "Prime Video",
            url: "https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root",
            logo: (
                <svg viewBox="0 0 32 32" width={32} height={32} fill="none">
                    <rect width="32" height="32" rx="6" fill="#00A8E1"/>
                    <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold" fontFamily="Arial">Prime</text>
                </svg>
            )
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/",
            logo: (
                <svg viewBox="0 0 32 32" width={32} height={32} fill="none">
                    <rect width="32" height="32" rx="6" fill="#FF0000"/>
                    <polygon points="13,10 24,16 13,22" fill="#fff"/>
                </svg>
            )
        },
        {
            name: "Disney+",
            url: "https://www.disneyplus.com/",
            logo: (
                <svg viewBox="0 0 32 32" width={32} height={32} fill="none">
                    <rect width="32" height="32" rx="6" fill="#113CCF"/>
                    <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold" fontFamily="Arial">D+</text>
                </svg>
            )
        },
        {
            name: "HBO",
            url: "https://www.hbo.com/",
            logo: (
                <svg viewBox="0 0 32 32" width={32} height={32} fill="none">
                    <rect width="32" height="32" rx="6" fill="#221F1F"/>
                    <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold" fontFamily="Arial">HBO</text>
                </svg>
            )
        },
        {
            name: "Hulu",
            url: "https://www.hulu.com/",
            logo: (
                <svg viewBox="0 0 32 32" width={32} height={32} fill="none">
                    <rect width="32" height="32" rx="6" fill="#1CE783"/>
                    <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#222" fontWeight="bold" fontFamily="Arial">hulu</text>
                </svg>
            )
        },
        {
            name: "Apple TV+",
            url: "https://www.apple.com/apple-tv-plus/",
            logo: (
                <svg viewBox="0 0 32 32" width={32} height={32} fill="none">
                    <rect width="32" height="32" rx="6" fill="#000"/>
                    <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold" fontFamily="Arial">TV+</text>
                </svg>
            )
        },
        {
            name: "Peacock",
            url: "https://www.peacocktv.com/",
            logo: (
                <svg viewBox="0 0 32 32" width={32} height={32} fill="none">
                    <rect width="32" height="32" rx="6" fill="#FFC72C"/>
                    <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#222" fontWeight="bold" fontFamily="Arial">P</text>
                </svg>
            )
        },
        {
            name: "Chorki",
            url: "https://www.chorki.com/",
            logo: (
                <svg viewBox="0 0 32 32" width={32} height={32} fill="none">
                    <rect width="32" height="32" rx="6" fill="#E50914"/>
                    <text x="16" y="21" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold" fontFamily="Arial">Chorki</text>
                </svg>
            )
        },
        {
            name: "Sony Cinemax",
            url: "https://www.sonycinemax.com/",
            logo: (
                <svg viewBox="0 0 32 32" width={32} height={32} fill="none">
                    <rect width="32" height="32" rx="6" fill="#231F20"/>
                    <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold" fontFamily="Arial">S</text>
                </svg>
            )
        },
        {
            name: "Hoichoi",
            url: "https://www.hoichoi.tv/",
            logo: (
                <svg viewBox="0 0 32 32" width={32} height={32} fill="none">
                    <rect width="32" height="32" rx="6" fill="#E50914"/>
                    <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold" fontFamily="Arial">h</text>
                </svg>
            )
        },
        {
            name: "Bioscope",
            url: "https://www.bioscopelive.com/",
            logo: (
                <svg viewBox="0 0 32 32" width={32} height={32} fill="none">
                    <rect width="32" height="32" rx="6" fill="#43B02A"/>
                    <text x="16" y="21" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold" fontFamily="Arial">Bioscope</text>
                </svg>
            )
        },
    ];
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-blue-700 drop-shadow">Popular Movie Platforms</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
                {platforms.map((platform) => (
                    <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-xl shadow-md p-6 text-center font-semibold text-lg text-red-800 hover:bg-blue- hover:text-gray-700 border border-gray-600 transition-all duration-200 cursor-pointer flex flex-col items-center gap-2"
                    >
                        <span className="flex justify-center items-center mb-2">{platform.logo}</span>
                        {platform.name}
                    </a>
                ))}
            </div>
        </div>
    )
}
