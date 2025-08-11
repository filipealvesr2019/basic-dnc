import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

export default function Home() {
     return (
        <>
        <Header />
        <h1>Home</h1>
        <p>Subtitle</p>
        <Button buttonStyle="secondary" arrow>Ola!</Button>
        <div className="container">
        <Hero />
        </div>
        <Footer />
        </>
     )
}