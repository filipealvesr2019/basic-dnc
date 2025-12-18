export default function ContactForm() {
  return (
    <div className="container">
      <div className="contact-form d-flex fd-column al-center"></div>
      <h2>We love meeting new people and helping them.</h2>
      <form action="">
        <div className="d-flex form-group">
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Name *"
          />
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="Email *"
          />
          <textarea 
            className="form-input"
            id="message"
            name="message"
            placeholder="Mensagem *"
            rows="4"
            />
        </div>
      </form>
    </div>
  );
}
