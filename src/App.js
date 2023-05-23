import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/login';
import WelcomePage from './components/WelcomePage';
import Medicine from './components/medicines';
import DummyPaymentGateway from './components/paymentgateway.'
import MedicinePage from './components/medicinepage';
import AdminLogin from './components/adminlogin';
import RegistrationForm from './components/register';
import Login from './components/login';
import PurchaseTable from './components/purchasetable';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/"  element={<LoginForm/>} />
          <Route path="/register" element={<RegistrationForm/>} />
          <Route path="/medicines" element={<Medicine/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/paymentgateway" element={<DummyPaymentGateway/>}/>
          <Route path="/medicinepage" element={<MedicinePage/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path='/purchasetable' element={<PurchaseTable/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
