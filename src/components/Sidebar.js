import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseProductQty, decreaseProductQty } from '../redux/actions';

export default function Sidebar() {
  const total = useSelector((state) => state?.totalItems);
  const cart = useSelector((state) => state?.cart);
  const subtotal = useSelector((state) => state?.total);
  const dispatch = useDispatch();

  const handleUpdateQty = (item, type) => {
    let basket = cart;

    const index = basket.findIndex((x) => x.id === item.id);

    if (index !== -1) {
      if (type === 'add') {
        dispatch({
          type: 'INCREASE_PRODUCT_QTY',
          payload: item,
        });
      } else if (type === 'remove') {
        dispatch({
          type: 'DECREASE_PRODUCT_QTY',
          payload: item,
        });
      }

      localStorage.setItem('basket', JSON.stringify(basket));
    }
  };

  return (
    <div>
      <button type="button" data-hs-overlay="#hs-overlay-right">
        BASKET ({total ? total : 0})
      </button>
      <div
        id="hs-overlay-right"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-md w-full  z-[60] bg-white border-l   "
        tabIndex={-1}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b ">
          <h3 className="uppercase text-[20px] leading-[25px] text-gray-800 ">
            BASKET <span className="italic">({total ? total : 0})</span>
          </h3>
          <button
            type="button"
            className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-gray-500 rounded-md hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white d"
            data-hs-overlay="#hs-overlay-right"
          >
            <span className="sr-only">Close modal</span>
            <svg
              className="w-3.5 h-3.5"
              width={8}
              height={8}
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          {total > 0 ? (
            <div className="relative flex flex-col min-h-[90vh] text-center text-gray-800">
              <div className="text-gray-500 border-b-4 border-black font-light text-[16px] leading-[20px] tracking-[0.48px] text-left pb-2 ">
                Congratulations! You've got free delivery
              </div>
              <div className="mt-4">
                {cart?.map((item, index) => (
                  <div className="flex flex-col items-start justify-start w-full mb-10 font-light text-stone-900 ">
                    <div className="flex items-center justify-between">
                      <img src={item?.images[0]} className="h-16 w-11 " />
                      <h3 className="text-[22px]  ml-10  leading-[26px]">
                        <strong className="uppercase">{item?.name}</strong>
                        <span className="ml-2 text-[20px] font-light">
                          made with {item?.madeWidth}
                        </span>
                      </h3>
                    </div>
                    <div className="flex items-center justify-between w-full px-20">
                      <div className="flex items-center justify-center space-x-5">
                        <button
                          onClick={() => handleUpdateQty(item, 'remove')}
                          className="pr-1 text-2xl"
                        >
                          -
                        </button>
                        <span className="text-[20px] font-light">
                          {item?.qty}
                        </span>
                        <button
                          onClick={() => handleUpdateQty(item, 'add')}
                          className="pl-1 text-2xl"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-[20px] font-light">
                        £{(item?.price * item?.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute w-full border-t border-black bottom-5">
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[20px] font-light">Subtotal</span>
                  <span className="text-[20px] font-light">
                    £{subtotal?.toFixed(2)}
                  </span>
                </div>
                <button className="px-4 w-full mt-2 py-2 text-[22px] font-thin leading-[24px] text-white bg-stone-900 rounded-3xl hover:bg-[#2455f6]">
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-800">
              <span className="text-gray-500 font-light text-[16px] leading-[20px] ">
                Your cart is empty
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
