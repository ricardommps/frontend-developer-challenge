import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Products from '../products/Products';
import Newsletter from '../newsletter/Newsletter';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
