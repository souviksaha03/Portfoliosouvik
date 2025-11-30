import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "./styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h3>Get In Touch</h3>

          <p className="contact-text">
            Feel free to reach out if you have any questions, opportunities, or just want to connect.
            I'm always open to discussing new projects and ideas.
          </p>

          <div className="contact-info">

            <div className="info-card">
              <div className="icon-box"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <p>souviksaha.200318@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box"><FaPhoneAlt /></div>
              <div>
                <h4>Phone</h4>
                <p>+91 6289161641</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box"><FaMapMarkerAlt /></div>
              <div>
                <h4>Location</h4>
                <p>Kolkata, West Bengal</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right">
          <form>
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="your.email@example.com" />
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input type="text" placeholder="What's this about?" />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Your message..." rows="6"></textarea>
            </div>

            <a
              href="https://wa.me/916289161641?text=Hello%2C%20I%20want%20to%20contact%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="send-btn"
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <FaPaperPlane /> Send Message
            </a>


          </form>
        </div>

      </div>
    </section>
  );
}
