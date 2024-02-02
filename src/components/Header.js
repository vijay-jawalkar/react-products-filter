
import "./Header.css";

export const Header = () => {

  return (
    <header>
      <div className="logo">
        <img src="https://cdn2.vectorstock.com/i/1000x1000/26/91/online-shop-logo-template-icon-vector-30562691.jpg" alt="Shopmate Logo" />
        <span>Shopping Online</span>
      </div>
      <nav className="navigation">
        <div  className="link" end>
          Home
        </div>
       
      </nav>
     
    </header>
  );
};