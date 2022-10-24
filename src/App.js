import React from 'react';

import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';

import './App.css';
import './index.css'
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App