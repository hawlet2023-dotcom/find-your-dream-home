function SearchBox() {
  return (
    <div
      className="
        absolute left-1/2 -translate-x-1/2
        bottom-[-55px]
        w-[90%] max-w-5xl
        bg-white
        rounded-2xl
        shadow-lg
        p-5
        flex flex-col md:flex-row
        items-stretch md:items-center
        gap-4
        z-20
      "
    >
      {/* Location */}
      <div
        className="
          flex-1
          flex items-center justify-between
          px-4 py-3
          border-b md:border-b-0 md:border-r
          border-gray-200
        "
      >
        <div>
          <small className="block text-xs text-[#776B64]">
            Location
          </small>

          <p className="mt-1 text-sm font-medium text-[#2B211D]">
            Choose location
          </p>
        </div>

        <svg
          className="w-6 h-6 text-[#2B211D]"
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
      <div
        className="
          flex-1
          flex items-center justify-between
          px-4 py-3
          border-b md:border-b-0 md:border-r
          border-gray-200
        "
      >
        <div>
          <small className="block text-xs text-[#776B64]">
            Type
          </small>

          <p className="mt-1 text-sm font-medium text-[#2B211D]">
            Choose property type
          </p>
        </div>

        <svg
          className="w-6 h-6 text-[#2B211D]"
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
      <div
        className="
          flex-1
          flex items-center justify-between
          px-4 py-3
          border-b md:border-b-0
          border-gray-200
        "
      >
        <div>
          <small className="block text-xs text-[#776B64]">
            Price Range
          </small>

          <p className="mt-1 text-sm font-medium text-[#2B211D]">
            Choose price
          </p>
        </div>

        <svg
          className="w-6 h-6 text-[#2B211D]"
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

      {/* Sign up */}
      <button
        className="
          w-full md:w-auto
          bg-[#2B211D]
          text-white
          px-7 py-3
          rounded-lg
          font-medium
          hover:bg-[#43342D]
          transition
        "
      >
        Sign up
      </button>
    </div>
  );
}

export default SearchBox;