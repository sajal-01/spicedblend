import { useEffect, useState } from 'react';
import xMarkImg from '../assets/utils/xMark.png';

export default function AnnouncementBar() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const show = JSON.parse(localStorage.getItem('showAnnouncementBar'));
    console.log('show', show);
    if (show === false) {
      setShow(false);
    }
  }, []);
  return (
    <>
      {show && (
        <div className="w-full flex items-center justify-center bg-[#2455f6] text-white text-center py-1">
          <p className="text-[16px] leading-[20px] tracking-normal w-full">
            Use code <strong>DECEM10</strong> for <strong>£10 OFF</strong> your
            first order.
          </p>
          <button
            onClick={() => {
              localStorage.setItem('showAnnouncementBar', false);
              setShow(false);
            }}
            className="ml-5"
          >
            <img src={xMarkImg} alt="x mark" className="w-6 h-6 mr-5 " />
          </button>
        </div>
      )}
    </>
  );
}
