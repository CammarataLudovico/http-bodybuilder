import CodePage from "./code-page"

export default function HomePage() {
    return (
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">Http Bodybuilding</h1>
            <div className="w-full max-w-2xl">
                <CodePage />
            </div>
        </div>
    )
}