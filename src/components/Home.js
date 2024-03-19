import React from 'react';
import '../styles/home.css'
import { Link } from 'react-router-dom';
import Contact from './Contact';
import Service from './Service';
import About from './About'
const Home = () => {
  return (
    <div>
      <h1>Welcome to Feedback Collection System</h1>
      <About/>
      <Service/>
      <Contact/>
    </div>
  );
  }

export default Home;
