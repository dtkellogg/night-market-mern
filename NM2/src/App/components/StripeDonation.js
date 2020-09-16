import React from 'react';
// import './App.css';
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout'

export default function Stripe({ price, children }) {

    const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [failed, setFailed] = React.useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    }

//   const [product, setProduct] = React.useState({
//     name: "Donate",
//     price: 20,
//     productBy: 'Davis Night Market'
//   })

//   const makePayment = token => {
//     const headers = {
//       "Content-Type": "application/json",
//     }
//     const body = {
//       headers,
//       token,
//       product
//     }

//     // STRIPE ONLY WORKS ON HTTPS SO THE BELOW METHOD WOULDN'T WORK IN PRODUCTION
//     axios.post("/api/v1/stripe", body);
//   }

  return (
    <div className="stripe">
      <form method="POST" action="">
          <div className="form__element">
          <label className="text-size-3 letter-spacing-md" for="name">Name:</label>
          <input
            type="text"
            className="form__input form__input-contact"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__element">
          <label className="text-size-3 letter-spacing-md" for="email">Email</label>
          <input
            type="email"
            className="form__input form__input-contact"
            placeholder="Your email address ☆★"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__element">
          <label className="text-size-3 letter-spacing-md" for="amount">Amount</label>
          <input
            type="number"
            className="form__input form__input-contact"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
                <button
          className="btn btn__form btn__contact"
          onClick={handleSubmit}
          disabled={submitted || failed.length > 0}
          >
          Submit
        </button>
      </form>
    </div>
  );
}