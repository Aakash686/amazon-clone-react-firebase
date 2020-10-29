import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id={122351}
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        />

        <Product
          id={8568287}
          title="BLACK+DECKER 12-Cup Programmable Coffeemaker, Black, CM1160B"
          price={20.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71wgaeEkddL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={3576847}
          title="Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black"
          price={699.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Q8gm97H8L._AC_SL1500_.jpg"
        />

        <Product
          id={6346146}
          title="Cyberpunk 2077 - PlayStation 4"
          price={49.94}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81iR0aGNJ5L._SL1500_.jpg"
        />

        <Product
          id={6376747}
          title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Bordeaux/Copper Rose, One Size (S and L Bands Included)"
          price={179.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71jiGaztijL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={1984746}
          title="Samsung CJ89 43-inch Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA), Black"
          price={379.97}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81v90JtbImL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
