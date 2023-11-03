import { useEffect } from 'react';

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
              <div className="w-full px-5">
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

        <div className="flex md:order-2 ">
          <button
            type="button"
            data-hs-overlay="#docs-sidebar"
            aria-controls="docs-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Basket</span>
            BASKET (0 )
          </button>
        </div>
        <div
          id="docs-sidebar"
          className="hs-overlay hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform hidden fixed top-0 right-0 bottom-0 z-[60] w-96 bg-white border-l border-gray-200 pt-3 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:left-auto lg:bottom-0 font-acumin-pro "
        >
          <div className="flex items-center justify-between px-6 pb-3 border-b border-black">
            <a
              className="flex-none text-xl "
              href="javascript:;"
              aria-label="Basket"
            >
              BASKET (0)
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <p className="py-3 text-center">
            <span className="text-gray-500 ">Your cart is empty</span>
          </p>
        </div>

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
