import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import Loader from "react-loader-spinner";
import vector from "../../images/Vector.svg";

const Form = () => {
  init("user_k6lM6BhZozsGS99tvHSDe");
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState("");
  const [load, setLoad] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  function sendEmail(e) {
    e.preventDefault();
    setLoad(true);

    emailjs
      .sendForm(
        "service_1r4qvhw",
        "template_8x3q9n6",
        e.target,
        "user_k6lM6BhZozsGS99tvHSDe"
      )
      .then(
        (result) => {},
        (error) => {}
      );
    e.target.reset();
    setInterval(() => {
      setSubmitted(true);
    }, 2000);
  }

  return (
    <section className={"form-section container"}>
      <p className={"form-section-text"}>
        Be the first to know when we launch:
      </p>
      <form onSubmit={sendEmail} className={`form`}>
        {submitted ? (
          <span className={"form-submitted"}>
            Thanks - We'll keep in touch 👍
          </span>
        ) : (
          <>
            <input
              autoComplete={"off"}
              className={"form-input"}
              type="email"
              placeholder="Your email"
              name="email"
              value={value}
              onChange={handleChange}
            />
            <button className={`form-btn`} type="submit" disabled={!value}>
              {!load && <span className={"form-btn-text"}>Let me know</span>}
              {!load && (
                <img src={vector} alt="arrow" className={"form-btn-vector"} />
              )}

              {load && (
                <Loader
                  type="TailSpin"
                  color="#FFFFFF"
                  height={40}
                  width={40}
                />
              )}
            </button>
          </>
        )}
      </form>
    </section>
  );
};

export default Form;
