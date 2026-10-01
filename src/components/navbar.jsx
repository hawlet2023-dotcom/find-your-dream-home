

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Dwello
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Service</li>
        <li>Agents</li>
        <li>Contact</li>
      </ul>

      <div className="nav-right">

        {/* Search icon */}
        <svg
          className="nav-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>

        {/* User icon */}
        <svg
          className="nav-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
        </svg>

        <button className="nav-button">
          Sign up
        </button>

      </div>

    </nav>
  );
}

export default Navbar;