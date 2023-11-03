import { useState } from 'react';
import london_dry_img1 from '../assets/product/london-dry/img1.webp';
import london_dry_img2 from '../assets/product/london-dry/img2.webp';
import london_dry_img3 from '../assets/product/london-dry/img3.webp';
import spiced_blend_img1 from '../assets/product/spiced-blend/img1.webp';
import spiced_blend_img2 from '../assets/product/spiced-blend/img2.webp';
import spiced_blend_img3 from '../assets/product/spiced-blend/img3.webp';
import aperitif_img1 from '../assets/product/aperitif/img1.webp';
import aperitif_img2 from '../assets/product/aperitif/img2.webp';
import aperitif_img3 from '../assets/product/aperitif/img3.webp';
import trio_img1 from '../assets/product/trio/img1.webp';
import trio_img2 from '../assets/product/trio/img2.webp';
import trio_img3 from '../assets/product/trio/img3.webp';
import trio_img4 from '../assets/product/trio/img4.webp';

export default function Page() {
  const tabs = [
    {
      id: 1,
      name: 'LONDON DRY',
      title: 'LONDON DRY',
      madeWidth: 'British Gin',
      place: 'Distilled in England',
      volume: '10%vol / 700ml',
      price: '£29.95',
      images: [london_dry_img1, london_dry_img2, london_dry_img3],
      description:
        "LONDON DRY is perfect for those who love a G&T. It's full of flavour but at 10% ABV it means you can enjoy the same ritual and taste but just with less alcohol. The unique combination of botanicals are steeped for 24 hours, then distilled, capturing the essential oils and big flavours. Before being masterfully blended with natural flavours to boost the character and provide a long refreshing finish at just 10%.",
      taste:
        'Upfront Juniper berry, authentic woody juniper with more of a floral berry coming through the mid palate, coriander seed in the middle, finishing with herbaceous backnotes.',
      serve:
        'Simply serve 50ml chilled over ice with 150ml premium Indian Tonic and a lemon slice. 2.3% ABV.',
    },
    {
      id: 2,
      name: 'SPICED BLEND',
      title: 'SPICED BLEND',
      madeWidth: 'Caribbean Rum',
      place: 'Blended in England',
      volume: '10%vol / 700ml',
      price: '£29.95',
      images: [spiced_blend_img1, spiced_blend_img2, spiced_blend_img3],
      description:
        'Blending a duo of light and white Caribbean rums from Martinique and Dominican Republic as the smooth base. Spices are then added and the mix is allowed to steep for 2 days to draw out all of the flavour before being filtered and masterfully blended with natural distillates to 10%ABV. The result is a buttery, caramel-forward, savoury and spicy light spirit with a big impact both on the nose and the taste buds.',
      taste:
        'Deep bonfire toffee, warming savoury spice, rounded honey sweetness, buttery caramel throughout with a hint of tropical fruit.',
      serve:
        'Simply serve 50ml chilled over ice with 150ml premium Ginger Ale and a lime wedge. 2.3% ABV.',
    },
    {
      id: 3,
      name: 'APERITIF',
      title: 'APERITIF',
      madeWidth: 'Heritage Botanicals',
      place: 'Macerated in England',
      volume: '10%vol / 700ml',
      price: '£29.95',
      images: [aperitif_img1, aperitif_img2, aperitif_img3],
      description:
        'Using a special combination of botanicals, from the hedgerow to the vegetable patch. Chosen to tickle the taste buds with interesting hints of approachable bitterness, but cleverly rounded off with the tart strawberry and sweet grape to create the most adult and uniquely moreish of aperitifs. We macerate the botanicals for 2 days to extract maximum flavour, before carefully blending with the real fruit juices to create this distinctly delicious flavour.',
      taste:
        'Complex woody and herbal, full bodied guelder rose with slight floral characters. Sweet grape and subtle strawberry.',
      serve:
        'Simply serve 50ml chilled over ice with 100ml English Sparkling Wine and a dash of premium soda. 10% ABV.',
    },
    {
      id: 4,
      name: 'TRIO',
      title: 'TRIO',
      madeWidth: 'London Dry, Spiced Blend & Aperitif',
      place: 'Made in England',
      volume: '10%vol / 700ml x3',
      price: '£79.85',
      images: [trio_img1, trio_img2, trio_img3, trio_img4],
      description:
        'The complete tasting set. Made up of LONDON DRY heavy with juniper but light with citrus, rounded off with a subtle woody undertone. SPICED BLEND using a duo of light and white Caribbean rums from Martinique and Dominican Republic as its smooth base packed full of buttery dark caramel and spices. APERITIF a special combination of botanicals, from the hedgerow to the vegetable carefully blended with the floral sweetness of Strawberries.',
      taste:
        'LONDON DRY Upfront Juniper berry, authentic woody juniper with more of a floral berry coming through the mid palate, coriander seed in the middle, finishing with woody spiced backnotes. SPICED BLEND Deep caramel, warming savoury spice, rounded honey sweetness, buttery throughout with a hint of tropical fruit. APERITIF Complex woody and herbal, full bodied guelder rose with slight floral characters. Sweet grape and subtle strawberry.',
      serve:
        'Simply serve 50ml LONDON DRY chilled over ice with 150ml premium Indian Tonic and a lemon slice / 50ml SPICED BLEND chilled over ice with 150ml premium Ginger Ale and a lime wedge / 50ml APERITIF chilled over ice with 100ml English Sparkling Wine and a dash of premium soda.',
    },
  ];

  const [product, setProduct] = useState(tabs[0]);
  const [active, setActive] = useState(null);
  const [currentImg, setCurrentImg] = useState(product.images[0]);

  const handleTab = (id) => {
    const newProduct = tabs.find((item) => item.id === id);
    setProduct(newProduct);
    setCurrentImg(newProduct.images[0]);
  };

  const handleActive = (id) => {
    if (active === id) {
      setActive(null);
      return;
    } else setActive(id);
  };
  return (
    <div className="py-20 font-light text-stone-900 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[90rem] mx-auto">
        <div className="w-full col-span-2  h-[48vh] relative  ">
          <img
            src={currentImg}
            alt={product.title}
            className="object-contain w-full h-[35rem] "
          />

          <div className="absolute flex items-center justify-center w-full h-full top-[30rem] ">
            {product.images.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentImg(item)}
                className={`p-2 rounded-full border mx-1 border-black ${
                  currentImg === item ? 'bg-stone-900' : 'bg-white '
                }`}
              ></button>
            ))}
          </div>
        </div>
        <div className="flex flex-col col-span-1 w-[28rem]">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-black ">
            <ul className="flex flex-wrap -mb-px space-x-12 ">
              {tabs.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleTab(item.id)}
                  className="cursor-pointer"
                >
                  <span
                    className={`inline-block py-4 border-transparent rounded-t-lg font-acumin-pro text-[14px] leading-[17.5px] whitespace-nowrap uppercase hover:text-gray-600 hover:border-gray-300 ${
                      product.id === item.id
                        ? 'border-b-2 border-gray-600 text-black underline font-bold'
                        : ''
                    }
                  } `}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <h1 className="pt-5 text-[28px] leading-[30px] uppercase ">
            {product.title}
          </h1>
          <p className="text-[28px] pb-4 leading-[30px]  font-light">
            <span className="">made with </span>
            {product.madeWidth}
          </p>

          <p className="flex  pb-4 items-center justify-between text-[20px] leading-[24px] ">
            {product.place}
            <span className="text-sm font-normal ">{product.volume}</span>
          </p>
          <button className="px-4 py-2 text-[22px] leading-[24px] text-white bg-stone-900 rounded-3xl hover:bg-[#2455f6]">
            {product.price}- Add to Bag
          </button>
          <p className="text-[16px] leading-[20px] pt-2 pb-10 font-light text-center text-blue-500">
            FREE UK DELIVERY
          </p>

          {/* TODO:Accordian */}
          <div
            id="accordion-flush"
            data-active-classes="bg-white  text-gray-900 w-[500px] "
            data-inactive-classes="text-gray-500 "
          >
            <div className="border-t border-gray-900 ">
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  onClick={() => handleActive(1)}
                  className="flex items-center justify-between w-full py-2 text-left "
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded={active === 1 ? 'true' : 'false'}
                  aria-controls="accordion-flush-body-1"
                >
                  <span className="text-[14px] leading-[20px]">
                    DESCRIPTION
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className={`w-6 h-6  shrink-0 ml-4 
                    transition-all duration-500 ease-in-out 
                  ${active === 1 ? 'hidden' : ''}`}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className={`w-6 h-6  shrink-0 ml-4 
                    transition-all duration-500 ease-in-out 
                  ${active === 1 ? '' : 'hidden'}`}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-1"
                className={`  ${
                  active === 1
                    ? 'transition-all duration-500 ease-in-out'
                    : 'hidden'
                }`}
                aria-labelledby="accordion-flush-heading-1"
              >
                <p className="mb-2 text-[14px] leading-[20px">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="border-t border-b border-gray-900 ">
              <h2 id="accordion-flush-heading-2">
                <button
                  type="button"
                  onClick={() => handleActive(2)}
                  className="flex items-center justify-between w-full py-2 text-left "
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded={active === 2 ? 'true' : 'false'}
                  aria-controls="accordion-flush-body-2"
                >
                  <span className="text-[14px] leading-[20px]">TASTE</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className={`w-6 h-6  shrink-0 ml-4 
                    transition-all duration-500 ease-in-out 
                  ${active === 2 ? 'hidden' : ''}`}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className={`w-6 h-6  shrink-0 ml-4 
                    transition-all duration-500 ease-in-out 
                  ${active === 2 ? '' : 'hidden'}`}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-1"
                className={` ${active === 2 ? 'block' : 'hidden'}`}
                aria-labelledby="accordion-flush-heading-2"
              >
                <p className="mb-2 text-[14px] leading-[20px">
                  {product.taste}
                </p>
              </div>
            </div>
            <div className="border-b border-gray-900 ">
              <h2 id="accordion-flush-heading-3">
                <button
                  type="button"
                  onClick={() => handleActive(3)}
                  className="flex items-center justify-between w-full py-2 text-left "
                  data-accordion-target="#accordion-flush-body-3"
                  aria-expanded={active === 3 ? 'true' : 'false'}
                  aria-controls="accordion-flush-body-3"
                >
                  <span className="text-[14px] leading-[20px]">SERVE</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className={`w-6 h-6  shrink-0 ml-4 
                    transition-all duration-500 ease-in-out 
                  ${active === 3 ? 'hidden' : ''}`}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className={`w-6 h-6  shrink-0 ml-4 
                    transition-all duration-500 ease-in-out 
                  ${active === 3 ? '' : 'hidden'}`}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-1"
                className={` ${active === 3 ? 'block' : 'hidden'}`}
                aria-labelledby="accordion-flush-heading-3"
              >
                <p className="mb-2 text-[14px] leading-[20px">
                  {product.serve}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
