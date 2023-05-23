import React, { useState, useEffect } from 'react';
import { useLocation,useSearchParams,createSearchParams  } from 'react-router-dom';
import { useNavigate } from 'react-router';
import './medicine.css';
import '@fortawesome/fontawesome-free/css/all.css';





const Medicines = () => {
  const nav=useNavigate();
  const [medicines, setMedicines] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const [searchparams]=useSearchParams();
  const [quantity, setQuantity] = useState(0);
   
  // Inside the Medicine compon
//const params = new URLSearchParams(location.search);



  useEffect(() => {
    fetchMedicines();
  }, []);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  
  const fetchMedicines = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/medicines');
      const data = await response.json();
      setMedicines(data);
      setFilteredMedicines(data);
    } catch (error) {
      console.log('Error fetching medicines:', error);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(searchTerm)
    );
    setFilteredMedicines(filtered);
  };

  const handleMoreDetails = (medicineId) => {
    // Perform actions when more details button is clicked
    console.log('More details for medicine:', medicineId);
  };

  const handleAddToCart = (medicineId) => {
    // Perform actions when add to cart button is clicked
    const selectedMedicine = filteredMedicines.find(
      (medicine) => medicine.id === medicineId
    );
  
    if (selectedMedicine) {
      const newItem = {
        id: selectedMedicine.id,
        name: selectedMedicine.name,
        cost: selectedMedicine.price,
        quantity: quantity,
      };
  
      setCartItems([...cartItems, newItem]);
    }
    console.log('Add to cart:', medicineId);
  };
  const calculateTotalAmount = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  };
  
  const handleBuyNow2= (medicine) => {
    // Perform actions when buy now button is clicked
    if (medicine) {
      const totalCost = quantity * medicine.cost;
    console.log('Buy now:', medicine);
    const tcost=calculateTotalAmount()
    const email = new URLSearchParams(window.location.search).get('name');
    nav({
      pathname: '/paymentgateway',
      search: createSearchParams({
        name: email,
      
        cartItems: JSON.stringify(cartItems),
        tcost: tcost,
      }).toString(),

    }
    );
  };
  
}

  

  const handleBuyNow = (medicine) => {
    // Perform actions when buy now button is clicked
    if (medicine) {
      const totalCost = quantity * medicine.cost;
    console.log('Buy now:', medicine);
    const email = new URLSearchParams(window.location.search).get("name");
    nav({
      pathname:"/paymentgateway",
      search:createSearchParams({
        name:email,
        medicinename:medicine.name,
        quantity:quantity,
        price:quantity*medicine.price
        
      }).toString()
    }
    );
  };
  
}

  return (
    <div>
       
        
      
    
      <h1>Medicine List</h1>
      <div>
      <div className='search-bar'>
        <input 
          type="text"
          placeholder="      Search Medicines"
          value={searchTerm}
          onChange={handleSearch}
          
        />
    
    </div>
      
      <div>
        {filteredMedicines.map((medicine) => (
          
          <div key={medicine.id}>
            <h3>{medicine.name}</h3>
            
            <img src={medicine.imageurl} alt={medicine.name} />
            <p>Cost: {medicine.price}</p>
            <p>{medicine.description}</p>
            <div>

            <button onClick={() => handleAddToCart(medicine.id)} id='button1'>
              Add to Cart
            </button>
            <br></br>
      
            <button onClick={() => handleBuyNow(medicine)}id='button2'>
              Buy Now
            </button>
            </div>
            <div className="quantity-container">
  <button className="icon-button" onClick={decreaseQuantity}>
    <i className="minus-icon">-</i>
  </button>
  <p className="quantity">{quantity}</p>
  <button className="icon-button" onClick={increaseQuantity}>
    <i className="plus-icon">+</i>
  </button>
</div>

            </div>
          
        ))}
      </div>
      <h2>Cart Summary</h2>
        <ul>
          {cartItems.map((medicine, id) => (
            <li key={id}>
            
              {medicine.name} - Quantity: {medicine.quantity} -cost: {medicine.cost*quantity}
            </li>
          ))}
        </ul>
        <p>Total Amount: {calculateTotalAmount()}</p>
        <button onClick={handleBuyNow2}>Proced to Payment</button>
    </div>
    </div>
    
  );
};


export default Medicines;
