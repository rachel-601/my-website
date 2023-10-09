//This is the About page.


export default function About() {
    return (
        <div className="md:p-16 p-8 justify-left">
            <h1 className="text-indigo-300 text-6xl font-medium tracking-[1rem]">
                ABOUT
            </h1>
            <div className="md:p-16 space-x-10">
                <img className="md:block hidden w-4/12 md:float-left" src="https://i.postimg.cc/VvbrYBGq/IMG-8873.jpg"/>
                <div className="py-10 w-3/5 float-left">
                    <h3 className="text-indigo-300 text-5xl font-light">
                        WHO AM I ?
                    </h3>
                    <p className="mt-8 text-black text-3xl font-light">
                        I’m a second year student at UBC majoring in Computer Science in the Faculty of Science. I was born in Vancouver and grew up here my whole life! 
                    </p>
                    <p className="mt-8">
                        insert resume button
                    </p>
                </div>
            </div>
        </div>
    )
}