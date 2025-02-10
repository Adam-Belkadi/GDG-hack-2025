import React from "react";
import "./EventWall.css";

const EventWall = () => {
  return (
    <div className="event-wall-container">
      <header className="header">
        <div className="logo">{/** Add your logo here */}</div>
        <input type="text" className="search-bar" placeholder="Search" />
      </header>

      <h1 className="title">Event Wall</h1>

      <div className="filter-buttons">
        <button className="filter-button active">All</button>
        <button className="filter-button">10 Km</button>
        <button className="filter-button">Algiers</button>
        <button className="filter-button">On Line</button>
        <button className="filter-button">On Side</button>
        <button className="filter-button">Tech</button>
        <button className="filter-button">Hackathon</button>
        <button className="filter-button">Workshop</button>
        <button className="filter-button">CTF</button>
      </div>

      <div className="event-list">
        {/** Example events */}
        <div className="event-card">
          <img
            src="https://via.placeholder.com/150"
            alt="GDG Hack"
            className="event-image"
          />
          <h3 className="event-title">GDG Hack</h3>
          <p className="event-description">
            Lorem ipsum dolor sit amet, consectetur, quis nostrud exercitation.
          </p>
          <button className="see-more-button">See More</button>
        </div>

        <div className="event-card">
          <img
            src="https://via.placeholder.com/150"
            alt="GHack"
            className="event-image"
          />
          <h3 className="event-title">GHack</h3>
          <p className="event-description">
            Lorem ipsum dolor sit amet, consectetur, quis nostrud exercitation.
          </p>
          <button className="see-more-button">See More</button>
        </div>

        <div className="event-card">
          <img
            src="https://via.placeholder.com/150"
            alt="Ideathon"
            className="event-image"
          />
          <h3 className="event-title">Ideathon</h3>
          <p className="event-description">
            Lorem ipsum dolor sit amet, consectetur, quis nostrud exercitation.
          </p>
          <button className="see-more-button">See More</button>
        </div>
      </div>
    </div>
  );
};

export default EventWall;
