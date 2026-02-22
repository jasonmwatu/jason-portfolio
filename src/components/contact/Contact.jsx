import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { ThemeContext } from "../../context";
import { useSelector } from "react-redux";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  const darkMode = useSelector((state) => state.ui.darkMode);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("send email");
    setDone(false);
    setLoading(true);
    emailjs
      .sendForm("service_dbui85p", "template_nkcsaj7", formRef.current, {
        publicKey: "Lwt4S0Zz1wtc5QhHn",
      })
      .then(
        (result) => {
          console.log(result);
          setDone(true);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setSendError(true);
        },
      );
  };

  return (
    <section className="c" id="contact-me">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              {/* <img src={Phone} alt="" className="c-icon" /> */}
              <Icon
                icon="line-md:phone-call-loop"
                width="36"
                height="36"
                style={{ color: "#8156B2", marginRight: "16px" }}
              />
              +254 111 243 002
            </div>
            <div className="c-info-item">
              {/* <img className="c-icon" src={Email} alt="" /> */}
              <Icon
                icon="line-md:email-opened"
                width="36"
                height="36"
                style={{ color: "#8156B2", marginRight: "16px" }}
              />
              <a href="mailto:jasonmwatu@gmail.com">jasonmwatu@gmail.com</a>
            </div>
            <div className="c-info-item">
              {/* <img className="c-icon" src={Address} alt="" /> */}
              <Icon
                icon="line-md:instagram"
                width="36"
                height="36"
                style={{ color: "#8156B2", marginRight: "16px" }}
              />
              <a
                href="https://www.instagram.com/jasonmwatu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                jasonmwatu
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. I am always available for
            freelancing when the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} id="contact-form">
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#ddd",
              }}
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
            />
            {/* <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" /> */}
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#ddd",
              }}
              type="text"
              placeholder="Your Email"
              name="user_email"
              required
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "#ddd",
              }}
              rows="5"
              placeholder="How Can I Help?"
              name="message"
              required
            />
            <button
              disabled={loading}
              style={{
                backgroundColor: loading && "lightgray",
                color: loading && "darkgray",
              }}
            >
              {done ? "Sent. Send Again?" : loading ? "Sending..." : "Send"}
            </button>
            {/* {loading && (
              <div
                style={{
                  backgroundColor: "orange",
                  marginTop: "16px",
                  padding: "8px",
                  width: "50%",
                  color: "black",
                }}
              >
                "Sending your message..."
              </div>
            )} */}
            {done && <div className="c-status">Message Sent &#10003;</div>}
            {sendError && (
              <div className="c-error">
                Message Not Sent!{" "}
                <span style={{ color: "#B25687" }}>&#10006;</span>
                <p>Try again after some time</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
