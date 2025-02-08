import React, { useState } from "react";
import { Link } from "react-router-dom";
import NotificationBar from "../../../ComponenetsBody/NotificationBar";

const LogInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="signin-card">
      <h1 className="welcome-title">
        <span className="red">W</span>
        <span className="blue">e</span>
        <span className="yellow">l</span>
        <span className="green">c</span>
        <span className="red">o</span>
        <span className="blue">m</span>
        <span className="yellow">e</span> <span className="green">B</span>
        <span className="red">a</span>
        <span className="blue">c</span>
        <span className="yellow">k</span>
      </h1>

      <p className="subtitle">Enter your credentials to access your account</p>

      <form onSubmit={handleSubmit}>
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
          {errors.email && (
            <p className="error-text">Your email is incorrect</p>
          )}
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
          {errors.password && (
            <p className="error-text">Your password is incorrect</p>
          )}
        </div>

        <div className="remember-forgot">
          <div className="checkbox-group">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="button" className="forgot-link">
            Forgot password?
          </button>
        </div>

        <button type="submit" className="signin-button">
          Sign In
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

      <div className="signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default LogInPage;
