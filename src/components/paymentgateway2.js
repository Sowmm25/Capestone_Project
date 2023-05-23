import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './paymentgateway.css';

const DummyPaymentGateway = () => {
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const [searchParams] = useSearchParams();

  const email = searchParams.get("name") || '';
  const cartItems = JSON.parse(searchParams.get('cartItems'));
  const tcost = searchParams.get('totalAmount');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      tcost,
      quantity,
      product,
      address
    };

    try {
      const response = await fetch('http://localhost:8080/api/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful
        setPaymentInProgress(true);
        setTimeout(() => {
          const paymentSuccess = Math.random() < 0.8; // Simulate 80% success rate

          setPaymentInProgress(false);
          if (paymentSuccess) {
            setPaymentSuccess(true);
          } else {
            setPaymentError(true);
          }
        }, 2000); // Simulate a 2-second delay

        // Reset form fields
        setAddress('');
        setError('');
      } else {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error.message);
      console.log('Registration Error:', error);
    }
  };

  return (
    <div>
      <h2>Payment Gateway</h2>
      <p>Hello {email} This is your purchase summary!</p>
      <p>Name: {product}</p>
      <p>Total Cost: {tcost}</p>

      {paymentSuccess ? (
        <div className="payment-success">Payment Successful!</div>
      ) : (
        <form onSubmit={handlePaymentSubmit}>
          <label>
            Card Number:
            <input type="text" />
          </label>
          <br></br>
          <label>
            Expiry Date:
            <input type="text" />
          </label>
          <br></br>
          <br></br>
          <label>
            CVV:
            <input type="text" />
          </label>
          <br></br>
          <br></br>
          <label>
            <br></br>
            Billing Address:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
<br></br>
<br></br>
          <br />
          <button type="submit">Pay Now</button>
          <br></br>
        </form>
      )}

      {paymentInProgress && <div className="payment-progress">Processing Payment...</div>}
      {paymentError && <div className="payment-error">Payment Error</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default DummyPaymentGateway;
