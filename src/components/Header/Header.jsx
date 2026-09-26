import logo from "../../assets/logo.jpeg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-350 mx-auto px-4">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <img
            src={logo}
            alt="DevStack"
            className="w-28"
          />

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-6 text-sm text-slate-600 font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-[#D91B7E] transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#D91B7E] transition"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#D91B7E] transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#D91B7E] transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#D91B7E] transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <button className="hover:bg-[#D91B7E] hover:text-white text-slate-600 px-5 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              Sign In
            </button>

            <button className="bg-[#D91B7E] hover:bg-white hover:text-slate-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;