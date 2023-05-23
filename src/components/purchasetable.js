import React, { useState, useEffect } from 'react';
import "./purchasetable.css"
import { Link } from 'react-router-dom';
const PurchaseTable = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/purchase');
      const data = await response.json();
      setPurchases(data);
    } catch (error) {
      console.log('Error fetching purchases:', error);
    }
  };

  return (
    <div>
        <div>
      <h2>Purchase Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Medicine Name</th>
            <th>Total Cost</th>
            <th>Billing Address</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.email}</td>
              <td>{purchase.quantity}</td>
              <td>{purchase.product}</td>
              <td>{purchase.tcost}</td>
              <td>{purchase.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div>
    <Link to="/login">Go Back Login Page</Link>
    <Link to="/medicinepage">Go Back to Admin Page</Link>
    </div>
    </div>
    
  );
};

export default PurchaseTable;
