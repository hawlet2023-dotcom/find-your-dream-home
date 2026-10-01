import locationIcon from "../assets/icons/location.png";
import homeIcon from "../assets/icons/home.png";
import priceIcon from "../assets/icons/price.png";

function SearchBox() {
  return (
    <div className="search-box">

      {/* Location */}
      <div className="search-item">

        <div>
          <small>Location</small>
          <p>Choose location</p>
        </div>

        <svg
          className="search-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>

      </div>

      {/* Type */}
      <div className="search-item">

        <div>
          <small>Type</small>
          <p>Choose property type</p>
        </div>

        <svg
          className="search-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 21V10l9-7 9 7v11" />
          <path d="M9 21v-7h6v7" />
        </svg>

      </div>

      {/* Price */}
      <div className="search-item">

        <div>
          <small>Price Range</small>
          <p>Choose price</p>
        </div>

        <svg
          className="search-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M15 9.5c-.5-1-1.5-1.5-3-1.5-1.7 0-3 .8-3 2s1.2 2 3 2 3 .8 3 2-1.3 2-3 2c-1.5 0-2.5-.5-3-1.5" />
          <path d="M12 6v2M12 16v2" />
        </svg>

      </div>

      <button className="search-button">
        Sign up
      </button>

    </div>
  );
}

export default SearchBox;