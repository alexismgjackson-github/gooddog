// Importing custom CSS for styling the Header component
import "./Header.css";

export default function Header() {
  return (
    <>
      {/* Main header element containing the navigation */}
      <header>
        {/* Navigation container */}
        <nav className="header-nav">
          {/* Logo container to hold the logo and the icon */}
          <div className="logo-container">
            {/* Scissor icon, which represents the theme of grooming services */}
            <img
              className="scissor-icon"
              src="/assets/icons/scissor.svg" // Path to the scissor icon image
              alt="Scissor icon" // Alt text for accessibility
            />
            {/* Logo text of the company */}
            <div className="logo">GoodDog</div>
          </div>
        </nav>
      </header>
    </>
  );
}
