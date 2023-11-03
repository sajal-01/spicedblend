import Sidebar from './Sidebar';
import london_dry_img from '../assets/nav/london-dry/img.webp';
import spiced_blend_img from '../assets/nav/spiced-blend/img.webp';
import aperitif_img from '../assets/nav/aperitif/img.webp';
import trio_img from '../assets/nav/trio/img.webp';

export default function Navbar() {
  return (
    <nav className="w-full bg-white ">
      <div className="flex flex-wrap items-center justify-between p-4 ">
        <div className="flex items-center space-x-4">
          <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
            <button
              type="button"
              className="flex items-center w-full font-medium text-gray-600 "
            >
              SHOP
            </button>
            <div
              className=" hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms]    
            hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 sm:mt-3 top-24 left-0 min-w-[15rem] bg-white before:absolute before:-top-5 before:left-0 before:w-full before:h-5"
            >
              <div className="w-full ">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between py-3 border-b border-black group">
                    <a
                      className="flex   relative items-center gap-x-3.5 py-2 px-3  text-[40px] leading-[50px] text-gray-800 hover:text-blue-500 focus:ring-2 focus:ring-blue-500 "
                      href="#"
                    >
                      LONDON DRY{' '}
                      <span className="italic text-md">made with</span> British
                      Gin
                    </a>

                    <img
                      src={london_dry_img}
                      alt="london dry"
                      className="w-[180px] h-full top-10 absolute right-0 hidden group-hover:block transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-black group">
                    <a
                      className="flex items-center  gap-x-3.5 py-2 px-3  text-[40px] leading-[50px] text-gray-800 hover:text-blue-500 focus:ring-2 focus:ring-blue-500 "
                      href="#"
                    >
                      SPICED BLEND{' '}
                      <span className="italic text-md">made with</span>{' '}
                      Caribbean Rum
                    </a>
                    <img
                      src={spiced_blend_img}
                      alt="spiced blend"
                      className="w-[180px] h-full top-10 absolute right-0 hidden group-hover:block transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-black group">
                    <a
                      className="flex items-center  gap-x-3.5 py-2 px-3  text-[40px] leading-[50px] text-gray-800 hover:text-blue-500 focus:ring-2 focus:ring-blue-500 "
                      href="#"
                    >
                      APERITIF <span className="italic text-md">made with</span>{' '}
                      Heritage Botanicals
                    </a>
                    <img
                      src={aperitif_img}
                      alt="aperitif"
                      className="w-[180px] h-full top-10 absolute right-0 hidden group-hover:block transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-black group">
                    <a
                      className="flex items-center  gap-x-3.5 py-2 px-3  text-[40px] leading-[50px] text-gray-800 hover:text-blue-500 focus:ring-2 focus:ring-blue-500 "
                      href="#"
                    >
                      TRIO London Dry, Spiced Blend, Aperitif
                    </a>
                    <img
                      src={trio_img}
                      alt="trio"
                      className="w-[350px] h-full top-10 absolute right-0 hidden group-hover:block transition-all duration-300 ease-in-out "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="/" className="flex items-center">
            STORY
          </a>
        </div>

        <div className="flex md:order-2 ">
          <Sidebar />
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
