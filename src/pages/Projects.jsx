import Banner from "../components/Banner/Banner";

export default function Projects(){
    return (
        <>
          <Header />
             <h1>Home</h1>
             <p>Subtitle</p>
             <Banner title="Projects" image="project.png" />
             <div className="container">
             <ProjectsList />
             </div>
             <Footer />
     
        </>
    )
}