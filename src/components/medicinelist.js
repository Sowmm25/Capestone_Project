import React from 'react';
import { Link } from 'react-router-dom';

const MedicineList = ({ medicines, onDelete }) => {
    return (
        
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine.id}>
            {medicine.name} - {medicine.price}
            <button onClick={() => onDelete(medicine.id)}>Delete</button>
          </li>
        ))}
        <div>
       <Link to="/purchasetable">Purchase Data</Link>
       </div>
      </ul>
      
      
    );
  };
  

export default MedicineList;
