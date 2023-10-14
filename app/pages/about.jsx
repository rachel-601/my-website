//This is the About page.


export default function About() {
    return (
        <div className="md:p-16 p-16 justify-left">
            <h1 className="text-indigo-300 text-6xl font-medium tracking-[1rem]">
                ABOUT
            </h1>
            <div className="md:p-16 space-x-10">
                <img className="md:block hidden md:w-72 md:float-left" src="https://i.postimg.cc/VvbrYBGq/IMG-8873.jpg"/>
                <div className="py-20 md:w-3/5 w-full float-left">    // try to fix width!!
                    <h3 className="text-indigo-300 text-4xl font-light">
                        WHO AM I ?
                    </h3>
                    <p className="mt-4 text-black text-2xl font-light">
                        I’m a second year student at UBC majoring in Computer Science in the Faculty of Science. I was born in Vancouver and grew up here my whole life! 
                        I hope to combine my passion for technology and desire to make an impact on my community in my future endeavours.
                    </p>
                    <p className="mt-8">
                        insert resume button
                    </p>
                </div>
                <div className="py-10 w-full float-left">
                    <h3 className="text-indigo-300 text-4xl font-light">
                        INTERESTS    
                    </h3>
                    <p className="mt-4 text-black text-2xl font-light ">
                        <span> In my free time there are so many things I enjoy doing. Listed are just a few... <br/>
                        ~ ultimate frisbee ~ snowboarding ~ baking ~ going to concerts ~ running ~ piano ~ pilates ~ gym ~ shopping ~ exploring restaurants
                        ~ hiking ~ reading ~ watching movies and TV shows ~ travelling
                        </span>
                    </p>
                </div>
            </div>
            
        </div>
        
    )
}