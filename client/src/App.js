
import { Routes, Route } from "react-router-dom";
import HomePage from './Components/MainPage/HomePage.js'
import MechantPage from './Components/MechantPage/AddProduct.js'
import ShopByPage from './Components/ShopByPage/Shopby.js'
import SignupPage from './Components/Login&SignupPage/SignupPage.js'
import Header from './Components/Header.js'
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mechant" element={<MechantPage />} />
          <Route path="/shopby/:pets" element={<ShopByPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
