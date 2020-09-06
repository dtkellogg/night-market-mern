import React from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [failed, setFailed] = React.useState("")

  const validate = () => {
    const emailRegexp = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    const phoneRegexp = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/

    if (!emailRegexp.test(email) && message.length === 0) {
      setFailed("Please submit a message and a valid email address.");
      window.setTimeout(() => {
        setFailed("");
      }, 4000);
    } else if (!emailRegexp.test(email)) {
      setFailed("Please submit a valid email address.");
      window.setTimeout(() => {
        setFailed("");
      }, 4000);
    } else if (phone.length > 0 && !phoneRegexp.test(phone)) {
      setFailed("Please submit a valid phone number.");
      window.setTimeout(() => {
        setFailed("");
      }, 4000);
    } else if (message.length === 0) {
      setFailed("Please add a message.");
      window.setTimeout(() => {
        setFailed("");
      }, 4000);
    } else {
      return true;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate()

    if (isValid) {
      setSubmitted(true);

      window.setTimeout(() => {
        setSubmitted(false);
        }, 4000
      );

    const dataToSubmit = {
      name,
      email,
      phone,
      subject,
      message,
    };
    
    await axios
      .post("/api/v1/messages", dataToSubmit)
      .then(response => {console.log(`axios response: ${response.data}`)})
      .then(() => {
        setName('')
        setEmail('')
        setPhone('')
        setSubject('')
        setMessage('')
      })
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__header">
        <h2 className="text-size-2 light-yellow">
          {/* Any Questions? */}
          Contact Us
        </h2>
        <h3 className="text-size-3">Please leave us a message here</h3>
        {submitted && (
          <p className="form__success-message--contact text-size-3">
            Email has been sent.
          </p>
        )}
        {failed.length > 0 && (
          <p className="form__fail-message--contact text-size-3">
            {/* Failed to register for newsletter. Please try again. */}
            {failed}
          </p>
        )}
        <button
          className="btn btn__form btn__contact"
          onClick={handleSubmit}
          disabled={submitted || failed.length > 0}
        >
          Submit
        </button>
      </div>
      <div className="form__content">
        <div className="form__element">
          {/* <label>Name</label> */}
          <input
            type="text"
            className="form__input form__input-contact"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Email</label> */}
          <input
            type="email"
            className="form__input form__input-contact"
            placeholder="Your email address (required)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Phone Number</label> */}
          <input
            type="text"
            className="form__input form__input-contact"
            placeholder="Your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Subject</label> */}
          <input
            type="text"
            className="form__input form__input-contact"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form__element">
          {/* <label>Message</label> */}
          <textarea
            type="text"
            className="form__textarea form__input form__input-contact"
            placeholder="Please enter your message here (required)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}

// Form needs:
// 1. name
// 2. email
// 3. phone (optional)
// 4. subject
// 5. message