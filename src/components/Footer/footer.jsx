import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white mt-20">
      <div className="max-w-350 mx-auto px-4 py-14">

        <div className="grid grid-cols-5 gap-10">

          {/* Brand */}
          <div className="col-span-2">
            <img
              src={logo}
              alt="DevStack"
              className="w-28"
            />

            <p className="text-sm text-slate-500 leading-6 max-w-md mt-4">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-5">
              <a
                href="#"
                className="text-sm text-slate-700 hover:text-[#D91B7E] transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-slate-700 hover:text-[#D91B7E] transition"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm text-slate-700 hover:text-[#D91B7E] transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase">
              Product
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-slate-500 hover:text-[#D91B7E] transition"
              >
                Home
              </a>

              <a
                href="#"
                className="block text-sm text-slate-500 hover:text-[#D91B7E] transition"
              >
                Technologies
              </a>

              <a
                href="#"
                className="block text-sm text-slate-500 hover:text-[#D91B7E] transition"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-slate-500 hover:text-[#D91B7E] transition"
              >
                About
              </a>

              <a
                href="#"
                className="block text-sm text-slate-500 hover:text-[#D91B7E] transition"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-sm text-slate-500 hover:text-[#D91B7E] transition"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase">
              Legal
            </h3>

            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-[#D91B7E] transition whitespace-nowrap"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-sm text-slate-500 hover:text-[#D91B7E] transition whitespace-nowrap"
              >
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 mt-12 pt-7 flex items-center justify-between">

          <p className="text-sm text-slate-400">
            © 2026 DevStack. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-slate-400 hover:text-[#D91B7E] transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-sm text-slate-400 hover:text-[#D91B7E] transition"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;