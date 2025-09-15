import AboutText from "../components/AboutText/AboutText";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function About(){
    return (
         <>
          <Header />
                     <h1>Home</h1>
                     <p>Subtitle</p>
                     <Banner title="About" image="about.png" />
                     <div className="container">
                     <AboutText />
                     </div>
                     <Footer />
        </>
    )
}