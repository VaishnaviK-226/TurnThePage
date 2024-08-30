import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a href="index.html">Home</a>
        <a href="guideToSell.html">Guide to Sell</a>
        <a href="buy.html">Buy</a>
        <a href="sell.html">Sell</a>

        <div className="dropdown">
          <button className="dropbtn">
            Clubs <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="fiction.html">Fiction</a>
            <a href="nonfiction.html">Non Fiction</a>
            <a href="education.html">Education</a>
          </div>
        </div>

        <a href="aboutus.html">About Us</a>
        <a href="help.html">FAQ</a>
        <a href="contact.html">Contact Us</a>

        <div className="signup">
          <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
          <a href="login.html">Login</a>
          <a href="sign_up.html">Sign Up</a>
        </div>
      </div>

      <header>FAQ</header>
      <br />
      <section>
        <p>
          Thank you for choosing TURN THE PAGE for all your book buying and selling needs. Whether you're a seasoned user or a newcomer, our Help Center is here to guide you through the process and address any questions you may have.
        </p>
      </section>
      <br />
      <section>
        <h2>Frequently Asked Questions</h2>

        <ul>
          <li>
            <strong>Q: What is Turn The Page and how does it work?</strong>
            <p>A: Turn The Page is an online platform that facilitates the buying and selling of new and used books. Users can list their books for sale, browse through available titles, and securely make transactions.</p>
          </li>
          <br />
          <li>
            <strong>Q: How do I create an account on Turn The Page?</strong>
            <p>A: To create an account, click on the "Sign Up" button on the homepage, fill in the required information. Once registered, you can start buying and selling books.</p>
          </li>
          <br />
          <li>
                <strong>Q: How can I list a book for sale?</strong>
                <p>A: Log in to your account, navigate to the "Sell" section, and provide details about the book, such as title, author, condition, and price.
                </p>
            </li>
            <br />
            <li>
                <strong>Q: How are transactions processed?</strong>
                <p>A: Turn The Page provides a secure platform for transactions. When a buyer purchases a book, payment is processed through our secure payment gateway. Once payment is confirmed, the seller is notified to ship the book to the buyer.</p>
            </li>
            <br />
            <li>
                <strong>Q: What payment methods are accepted on Turn The Page?</strong>
                <p>A: We accept a variety of payment methods, including credit/debit cards and other secure online payment options. The available payment methods will be displayed during the checkout process.</p>
            </li>
            <br />
            <li>
                <strong>Q: What should I do if I encounter a problem with my order?</strong>
                <p>A: Contact our customer support team through the "Contact Us" section of the website. Provide details about the issue, and our team will assist you in resolving it promptly.
                </p>
            </li>
        </ul>
      </section>

      <div className="footer">
        <ul>
          <li><a href="aboutus.html">About Us</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="help.html">FAQs</a></li>
        </ul>
        <div className="social-icons">
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-reddit"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
