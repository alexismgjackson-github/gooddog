import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <nav className="header-nav">
          <div className="logo-container">
            <img
              className="scissor-icon"
              src="/assets/icons/scissor.svg"
              alt="Scissor icon"
            />
            <div className="logo">GoodDog </div>
          </div>
        </nav>
      </header>
    </>
  );
}
