import React, { useState } from 'react';

const MedicineForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [imageurl, setImageurl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const medicine = {
      name,
      price,
      description,
      imageurl,
    };
    onSubmit(medicine);
    setName('');
    setPrice(0);
    setDescription('');
    setImageurl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Cost:
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Image URL:
        <input type="text" value={imageurl} onChange={(e) => setImageurl(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MedicineForm;
