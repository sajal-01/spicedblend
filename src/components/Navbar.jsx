export default function Navbar() {
  return (
    <nav className="w-full bg-white border-gray-200">
      <div className="flex flex-wrap items-center justify-between p-4 ">
        <div className="flex items-center space-x-4">
          <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
            <button
              type="button"
              className="flex items-center w-full font-medium text-gray-600 "
            >
              SHOP
            </button>
            <div className=" hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 sm:mt-3 top-full left-0 min-w-[15rem] bg-white sm:shadow-md rounded-lg p-2  before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
              <div className="sm:grid sm:grid-cols-3">
                <div className="flex flex-col">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                    href="#"
                  >
                    LONDON DRY <span className="text-xs">made with</span>{' '}
                    British Gin
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                    href="#"
                  >
                    SPICED BLEND <span className="text-xs">made with</span>{' '}
                    Caribbean Rum
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                    href="#"
                  >
                    APERITIF <span className="text-xs">made with</span> Heritage
                    Botanicals
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                    href="#"
                  >
                    TRIO London Dry, Spiced Blend, Aperitif
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="/" className="flex items-center">
            STORY
          </a>
        </div>

        <div className="flex md:order-2 ">BASKET (0)</div>
        <div
          className="items-center justify-between hidden w-full text-4xl font-medium tracking-normal md:flex md:w-auto md:order-1 "
          id="navbar-cta"
        >
          DECEM
        </div>
      </div>
    </nav>
  );
}
