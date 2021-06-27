import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

const Form = () => {
  init("user_k6lM6BhZozsGS99tvHSDe");
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1r4qvhw",
        "template_8x3q9n6",
        e.target,
        "user_k6lM6BhZozsGS99tvHSDe"
      )
      .then(
        (result) => {
          setSubmitted(true)
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
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
        ) : null}
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
          <span className={"form-btn-text"}>Let me know</span>
        </button>
      </form>
    </section>
  );
};

export default Form;
