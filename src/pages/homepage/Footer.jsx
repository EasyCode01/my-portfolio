import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className="footer">
      <div className="section-container">
        <div className="content">
          <h2 className="footer-name">Ezekiel Oyedijo</h2>
          <p className="copy-right text">
            &copy; {year} copyright all right reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
