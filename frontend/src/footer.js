import React, { Component, useEffect } from "react";
import "./App.css";
import AOS from "aos";
export default function Footer() {
  function handleRedirect() {
    window.location.href = "mailto:itsacave@gmail.com";
  }
  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }, []);
  return (
    <div className="footer">
      <p>contact</p>
      <p onClick={handleRedirect}>itsacave@gmail.com</p>
    </div>
  );
}
