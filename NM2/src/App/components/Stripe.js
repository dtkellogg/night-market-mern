import React from 'react';
// import './App.css';
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout'

export default function Stripe({ price, children }) {
  const [product, setProduct] = React.useState({
    name: "Donate",
    price: 20,
    productBy: 'Davis Night Market'
  })

  const makePayment = token => {
    const headers = {
      "Content-Type": "application/json",
    }
    const body = {
      headers,
      token,
      product
    }

    // STRIPE ONLY WORKS ON HTTPS SO THE BELOW METHOD WOULDN'T WORK IN PRODUCTION
    axios.post("/api/v1/stripe", body);
  }

  return (
    <div className="stripe">
      <StripeCheckout
        stripeKey={
          process.env.REACT_APP_KEY
        }
        token={makePayment}
        name="Donate to Davis Night Market"
        amount={product.price * 100}
        // shippingAddress
        // billingAddress
      >
        {children}
      </StripeCheckout>
    </div>
  );
}