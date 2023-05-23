import React, { useEffect, useState } from 'react';
import MedicineForm from './medicineform';
import MedicineList from './medicinelist';

const MedicinePage = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/medicines');
      const data = await response.json();
      setMedicines(data);
    } catch (error) {
      console.log('Error fetching medicines:', error);
    }
  };

  const addMedicine = async (medicine) => {
    try {
      const response = await fetch('http://localhost:8080/api/medicines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(medicine),
      });
      const data = await response.json();
      setMedicines([...medicines, data]);
    } catch (error) {
      console.log('Error adding medicine:', error);
    }
  };

  const deleteMedicine = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/medicines/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setMedicines(medicines.filter((medicine) => medicine.id !== id));
      }
    } catch (error) {
      console.log('Error deleting medicine:', error);
    }
  };

  return (
    <div>
      <h2>Medicine List</h2>
      <MedicineForm onSubmit={addMedicine} />
      <MedicineList medicines={medicines} onDelete={deleteMedicine} />
      
    </div>
  );
};

export default MedicinePage;
