import Banner from '../components/Banner/Banner'
import ContactForm from '../components/ContactForm/ContactForm'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
export default function Contact(){
    return (
          <>
        <Header />
                     <h1>Home</h1>
                     <p>Subtitle</p>
                     <Banner title="Contact" image="contact.png" />
                     <div className="container">
                     <ContactForm />
                     </div>
                     <Footer />
        </>
    )
}