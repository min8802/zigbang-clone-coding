const Header = () => {
  return (
      <div className="bg-white h-[80px] flex justify-between items-center fixed top-0 z-10 w-full">
          <div className="w-[226px] h-[79px] flex items-center flex-shrink-0">
              <img className="pl-[20px] pr-[8px] pt-[15px] pb-[14px] cursor-pointer" src="../images/zigbangWeb_horizontal_on-line_new.png" />
          </div>
          <div className="min-w-[640px] h-[77px] flex flex-1 ml-[10px]">
              <ul className="flex">
                  <li className="top-li-style flex flex-col justify-center items-start flex-shrink-0">
                      <span className="top-big-font">아파트</span>
                      <span className="top-small-font">매매/전월세/신축분양</span>
                  </li>
                  <li className="top-li-style flex flex-col justify-center items-start flex-shrink-0">
                      <span className="top-big-font">빌라, 투룸+</span>
                      <span className="top-small-font">신축분양/매매/전월세</span>
                  </li>
                  <li className="top-li-style flex flex-col justify-center items-start flex-shrink-0">
                      <span className="top-big-font">원룸</span>
                      <span className="top-small-font">전월세</span>
                  </li>
                  <li className="top-li-style flex flex-col justify-center items-start flex-shrink-0">
                      <span className="top-big-font">오피스텔</span>
                      <span className="top-small-font">도시형생활주택/전월세</span>
                  </li>
                  <li className="top-li-style flex flex-col justify-center items-start flex-shrink-0">
                      <span className="top-big-font mr-0">상가</span>
                      <span className="top-small-font">임대/매매</span>
                  </li>
              </ul>
          </div>
          <div className="flex items-center min-w-[287px]">
              <button className="min-w-[106px] h-[30px] rounded bg-[#EEEEEE] px-2 pt-[5px] pb-[6px] top-small-font border border-gray-200">
                  로그인 및 회원가입
              </button>
              <div className="ml-[15px] pl-[13px] pr-[21px] pt-[21px] pb-5">
                  <img className="w-[126px] h-[38px]" src="../images/ceo_ad_img_new.png" />
              </div>
          </div>
      </div>
  );
};

export default Header;
