//This is the Home page.


export default function Home() {
    return (
        <div className="bg-home-page-bg md:h-full md:w-full h-full w-screen bg-cover bg-center">
            <div className="lg:py-80 py-72">
                <h2 className="md:flex items-center justify-center text-white text-xl md:text-2xl font-light text-center">
                    hi, my name is
                </h2>
                <p className="text-indigo-300 text-7xl font-medium tracking-[1rem] md:flex items-center justify-center text-center">
                    RACHEL SHI
                </p>
                <p className="md:flex justify-center text-white text-2xl font-light text-center">
                    welcome to my website
                </p>
            </div>
        </div>
    )
}
