import xMarkImg from '../assets/utils/xMark.png';
export default function AnnouncementBar() {
  return (
    <div className="w-full flex items-center justify-center bg-[#2455f6] text-white text-center py-1">
      <p className="text-[16px] leading-[20px] tracking-normal w-full">
        Use code <strong>DECEM10</strong> for <strong>£10 OFF</strong> your
        first order.
      </p>
      <img src={xMarkImg} alt="x mark" className=" w-6 h-6 mr-5" />
    </div>
  );
}
