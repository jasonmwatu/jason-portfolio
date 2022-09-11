import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";
import { useSelector } from "react-redux";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  const darkMode = useSelector((state) => state.ui.darkMode);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("send email");
    setDone(false);
    setLoading(true);
    emailjs
      .sendForm(
        "service_dbui85p",
        "template_nkcsaj7",
        formRef.current,
        "Lwt4S0Zz1wtc5QhHn"
      )
      .then(
        (result) => {
          console.log(result);
          setDone(true);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +254 721 946 371
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <a href="mailto:jasonmwatu@gmail.com">jasonmwatu@gmail.com</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Nairobi, Kenya
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} id="contact-form">
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
            />
            {/* <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" /> */}
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Your Email"
              name="user_email"
              required
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="How Can I Help?"
              name="message"
              required
            />
            <button disabled={loading} style={{backgroundColor: loading && "lightgray", color: loading && "darkgray"}}>
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
            {done && (
              <div
                className="c-status"
              >
                "Message Sent..."
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
