import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Upbar from '../../pages/components/upbar';
import Card from '../../pages/components/cards/card';
import './signup.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
     
      <div className="signup-container">
        <div className="content-wrapper">
          <div className="signup-card">
            <h1 className="welcome-title">
              <span className="red">C</span>
              <span className="blue">r</span>
              <span className="yellow">e</span>
              <span className="green">a</span>
              <span className="red">t</span>
              <span className="blue">e</span>
              {' '}
              <span className="yellow">A</span>
              <span className="green">c</span>
              <span className="red">c</span>
              <span className="blue">o</span>
              <span className="yellow">u</span>
              <span className="green">n</span>
              <span className="red">t</span>
            </h1>

            <p className="subtitle">Enter your details to create your account</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  className="form-input"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <p className="error-text">Please enter your full name</p>}
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-text">Please enter a valid email</p>}
              </div>

              <div className="form-group">
                <label className="form-label">Phone number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="US XXXXXXXX"
                  className="form-input"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && <p className="error-text">Please enter a valid phone number</p>}
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="form-input"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="error-text">Password must be at least 8 characters</p>}
              </div>

              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="••••••••"
                  className="form-input"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <p className="error-text">Passwords do not match</p>}
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                />
                <label htmlFor="agreeToTerms">I agree to the Terms & Conditions</label>
              </div>

              <button type="submit" className="signup-button">
                Sign Up
              </button>
            </form>

            <div className="social-section">
              <p>Or continue with</p>
              <div className="social-buttons">
                <button className="social-button">
                  <img src="/icons/google.svg" alt="Google" />
                  Google
                </button>
                <button className="social-button">
                  <img src="/icons/github.svg" alt="GitHub" />
                  GitHub
                </button>
              </div>
            </div>

            <div className="signin-link">
              Already have an account? <Link to="/signin">Sign in</Link>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SignUp;