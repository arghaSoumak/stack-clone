import React, { Component } from 'react';
import Background from '../../Image/background-image.jpeg';
import "./Login.css";



 const Login = () => (
     
    <React.Fragment>
      <section className="background" style={{backgroundImage: `url(${Background})`}}>
      
        <div className="grid">
            <div className="item ">
              <h1>Ask Questions and get your Answers here.</h1>
            </div>
            <div className="item">
              <div className="card">
                <h2>Stack Clone</h2>
                <h3>Join our Stack Cone Community!</h3>
                <button className="card_button google">Continue with Google</button>
                <button className="card_button github ">Continue with GitHub</button>
                <p className="color" >By signing up you indicate you have read and agree to the Terms and Services.</p>
              </div>
            </div>
        </div>
        </section>
  </React.Fragment>
 )
export default Login