import { useNavigate } from "react-router-dom"

export default function LandingPage() {

    const navigate = useNavigate();

    return (
        <>
            <div className="relative min-h-screen bg-linear-to-br from-slate-100 to dark:bg-linear-to-br dark:from-neutral-900 dark:text-white">
                <div className="min-h-screen flex flex-col items-center justify-center gap-7 tracking-wide">
                    <div className="mr-13 text-5xl md:text-6xl font-bold">
                        <span className="sm:text-4xl md:text-5xl">🐝</span> Socialhive
                    </div>
                    <div className="flex gap-4 text-3xl md:text-4xl font-semibold">
                        <span>Connect · </span>
                        <span>Share ·</span>
                        <span>Discover</span>
                    </div>
                    <div className="text-lg md:text-2xl font-medium">
                        Join the community, share your thoughts,
                        <br />
                        and connect with people around the world.
                    </div>
                    <div className="flex flex-row items-center gap-8">
                        <button onClick={() => navigate("/register")} className="bg-black dark:text-black dark:hover:bg-gray-100 dark:bg-white text-white text-xl py-2 px-3 rounded-lg cursor-pointer shadow-sm transition-all duration-200 ease-in-out hover:translate-y-0.5 hover:bg-neutral-900 hover:shadow-lg ">Get Started</button>
                        <button onClick={() => navigate("/login")} className=" text-black dark:text-white border-2 border-black dark:border-white text-xl py-2 px-7 rounded-lg cursor-pointer shadow-sm transition-all duration-200 ease-in-out hover:translate-y-0.5 hover:shadow-lg">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}