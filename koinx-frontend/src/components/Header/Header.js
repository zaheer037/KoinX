import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Logo */}
        <div className="text-primary fw-bold fs-4">
          Koin<span className="text-warning">X</span>™
        </div>

        {/* Navigation Links */}
        <nav className="d-none d-md-flex gap-4">
          <a href="#crypto-taxes" className="text-dark text-decoration-none">
            Crypto Taxes
          </a>
          <a href="#free-tools" className="text-dark text-decoration-none">
            Free Tools
          </a>
          <a href="#resource-center" className="text-dark text-decoration-none">
            Resource Center
          </a>
        </nav>

        {/* Get Started Button */}
        <button className="btn btn-primary px-4 py-2">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
