import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Good<span className="text-yellow-300">Old</span>Games
            </h3>
            <p className="mb-2">
              Play thousands of free online games, no login required!
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Discord"
              >
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-12">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/category/puzzle"
                    className="hover:text-white transition-colors"
                  >
                    Puzzle Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/arcade"
                    className="hover:text-white transition-colors"
                  >
                    Arcade Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/action"
                    className="hover:text-white transition-colors"
                  >
                    Action Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/adventure"
                    className="hover:text-white transition-colors"
                  >
                    Adventure Games
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/category/strategy"
                    className="hover:text-white transition-colors"
                  >
                    Strategy Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/idle"
                    className="hover:text-white transition-colors"
                  >
                    Idle Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/racing"
                    className="hover:text-white transition-colors"
                  >
                    Racing Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/simulation"
                    className="hover:text-white transition-colors"
                  >
                    Simulation Games
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@good-old-games.com"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              For Game Developers
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/BinBashBanana/gfiles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Submit a Game
                </a>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} good-old-games.com - All rights
            reserved.
          </p>
        </div>

        <div className="text-center text-sm text-gray-500 mt-4">
          <p className="mt-2">
            Thanks to{" "}
            <a
              href="https://github.com/BinBashBanana/gfiles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              gfiles
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/alexelzx/chrome-dino"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              chrome-dino
            </a>{" "}
            for providing game data.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
