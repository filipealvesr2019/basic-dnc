import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProjectsList from "../components/ProjectsList/ProjectsList";

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