import React from "react";
import SectionHead from "../../components/SectionHead";
import { contactDetails } from "../../constants";
import { useAppContext } from "../../context/context";

const Contact = () => {
  let { dispatch, state } = useAppContext();
  let { isLightTheme, light, dark } = state;
  return (
    <section
      id="contact"
      style={{ background: isLightTheme ? light.mainColor2 : dark.mainColor1 }}
      className="contact padding-y"
    >
      <div className="section-container">
        <SectionHead mainTitle="Get in touch" />

        <div className="contact-inner-content">
          <div className="contact-form">
            <form action="https://formspree.io/f/moqokgea" method="POST">
              <h2 style={{ marginBottom: 15 }} className="small-label">
                SAY SOMETHING
              </h2>
              <div className="text-field">
                <input type="text" name="name" placeholder="Name *" required />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                />
              </div>

              <div className="text-field">
                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject *"
                  required
                />
              </div>

              <div className="text-field">
                <textarea
                  name="Message"
                  cols="30"
                  rows="10"
                  placeholder="Your message *"
                  required
                ></textarea>
              </div>

              <div className="text-field">
                <button className="btn-fill" type="submit">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          <div className="contact-address-phone">
            {contactDetails.map((contact, idx) => (
              <div key={idx} className="contact-add-phone">
                <span className="contact-icon">{contact.icon}</span>
                <div className="contact-details">
                  <p className="small-label"> {contact.headTitle}</p>
                  <p className="text">{contact.textOne}</p>
                  <p className="text">{contact?.textTwo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
