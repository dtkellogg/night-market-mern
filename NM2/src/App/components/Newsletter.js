import React from "react";
import axios from "axios";
import '../../index.css'
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";

export default function Contact() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [failedMessage, setFailedMessage] = React.useState("");

  const validate = () => {
    const emailRegexp2 = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

    if (emailRegexp2.test(email)) {
      return true
    } else {
      setFailedMessage('Invalid email. Please try again.')
      window.setTimeout(() => {
        setFailedMessage("");
      }, 4000);
    }
  }

  const handleSubmit = async function(e) {
    e.preventDefault();

    const isValid = validate()

    if (isValid) {
      const dataToSubmit = {
        email,
      };
  
      callAxios(dataToSubmit)
    }
  }

  async function callAxios(dataToSubmit) {
    axios
      .post("/api/v1/subscribers", dataToSubmit)
      .then((response) => {
        if (response.data.success === true) {
          setSubmitted(true);
          setEmail("");
          window.setTimeout(() => {
            setSubmitted(false);
          }, 4000);
        } else {
          setFailedMessage('There was an error signing up. Please try again.');
          throw new Error(response.data.message);
        }
      })
      .catch((err) => {
        console.log(`err message here: ${err.message}`)
        
        setFailedMessage(err.message);
      });
  }

  return (
    <form className="form__footer" onSubmit={handleSubmit}>
      <h3 className="text-size-3 margin-bottom grey-light-5">
        Sign up for our newsletter
      </h3>

      <div className="subscription__input-and-btn margin-bottom">
        <input
          type="email"
          className="form__input form__input-footer"
          placeholder="Email address"
          // required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="btn__footer"
          onClick={handleSubmit}
          disabled={submitted || failedMessage.length > 0}
        >
          Subscribe
        </button>
      </div>

      {submitted && (
        <p className="form__success-message--newsletter text-size-4">
          Successfully registered for newsletter
        </p>
      )}
      {failedMessage.length > 0 && (
        <p className="form__fail-message--newsletter text-size-4">
          {/* Failed to register for newsletter. Please try again. */}
          {failedMessage}
        </p>
      )}

      <ul className="social-media-icons__list margin-bottom-lg">
        <li className="social-media-icons__list-item icon facebook">
          <a href="https://www.facebook.com/davisnightmarket">
            <FaFacebookSquare
              size={50}
              color="var(--facebook)"
              fill="var(--facebook)"
              className="social-media-icon grey-light-7"
            />
          </a>
        </li>
        <li className="social-media-icons__list-item icon instagram">
          <a href="https://www.instagram.com/davisnightmarket/">
            <FaInstagram
              size={50}
              color="var(--instagram)"
              className="social-media-icon"
            />
          </a>
        </li>
        <li className="social-media-icons__list-item icon twitter">
          <a href="https://twitter.com/DavisNightMrkt">
            <FaTwitter
              size={50}
              color="var(--twitter)"
              className="social-media-icon grey-light-7"
            />
          </a>
        </li>
      </ul>
    </form>
  );
}

// Form needs:
// 1. name
// 2. email
// 3. phone (optional)
// 4. subject
// 5. message