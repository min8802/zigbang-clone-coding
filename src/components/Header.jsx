import { useState } from "react";

const Header = () => {

    const [isHover, setIsHover] = useState(false);

    const changeColor = (e, dropdownId) => {
        const liEl = e.currentTarget;
        console.log(liEl);
        const spanEl = liEl.querySelectorAll('span')
        console.log(spanEl);
        spanEl.forEach(spanEl => {
            spanEl.style.color = "#FF681B"
        });
        console.log(e);

        const subDropdownEl = document.getElementById(dropdownId);
        subDropdownEl.style.display = "block"
        

        liEl.addEventListener('mouseout', () => {
            spanEl.forEach(span => {
                span.style.color = ""; // 기본값으로 변경
            });
            subDropdownEl.style.display = "none"
        });
    };

  return (
      <div className="bg-white h-[80px] flex justify-between items-center fixed top-0 z-10 w-full">
          <div className="w-[226px] h-[79px] flex items-center flex-shrink-0">
              <img className="pl-[20px] pr-[8px] pt-[15px] pb-[14px] cursor-pointer" src="../images/zigbangWeb_horizontal_on-line_new.png" />
          </div>
          <div className="min-w-[640px] h-[77px] flex flex-1 ml-[10px]">
              <ul className="flex">
                <li onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="top-li-style flex flex-col justify-center items-start flex-shrink-0 relative" 
                >
                    <span className="top-big-font">아파트</span>
                    <span className="top-small-font">매매/전월세/신축분양</span>
                    <div id="" className={`top-dropdown-style transition duration-500 ${isHover ? "bg-white opacity-100" : "bg-white opacity-0"}`}>
                        <div className="top-subDropdown-style">매매/전*월세</div>
                        <div className="top-subDropdown-style">신축분양</div>
                        <div className="top-subDropdown-style">인구흐름</div>
                    </div>
                </li>
                
                <li className="top-li-style flex flex-col justify-center items-start relative" onMouseOver={(e) => changeColor(e, 'top-dropdown-2')}>
                    <span className="top-big-font">빌라, 투룸+</span>
                    <span className="top-small-font">신축분양/매매/전월세</span>
                    <div id="top-dropdown-2" className="top-dropdown-style hidden">
                        <div className="top-subDropdown-style">빌라, 투룸 찾기</div>
                        <div className="top-subDropdown-style">찜한 매물</div>
                        <div className="top-subDropdown-style">빌라 내놓기(전/월세만)</div>
                    </div>
                </li>
                <li className="top-li-style flex flex-col justify-center items-start relative" onMouseOver={(e) => changeColor(e, 'top-dropdown-3')}>
                    <span className="top-big-font">원룸</span>
                    <span className="top-small-font">전월세</span>
                    <div id="top-dropdown-3" className="top-dropdown-style hidden">
                        <div className="top-subDropdown-style">방 찾기</div>
                        <div className="top-subDropdown-style">찜한 매물</div>
                        <div className="top-subDropdown-style">방 내놓기(전/월세만)</div>
                    </div>
                </li>
                <li className="top-li-style flex flex-col justify-center items-start relative" onMouseOver={(e) => changeColor(e, 'top-dropdown-4')}>
                    <span className="top-big-font">오피스텔</span>
                    <span className="top-small-font">도시형생활주택/전월세</span>
                    <div id="top-dropdown-4" className="top-dropdown-style hidden">
                        <div className="top-subDropdown-style">오피스텔 찾기</div>
                        <div className="top-subDropdown-style">찜한 매물</div>
                        <div className="top-subDropdown-style">오피스텔 내놓기(전/월세만)</div>
                    </div>
                </li>
                <li className="top-li-style flex flex-col justify-center items-start relative" onMouseOver={(e) => changeColor(e, 'top-dropdown-5')}>
                    <span className="top-big-font mr-0">상가</span>
                    <span className="top-small-font">임대/매매</span>
                    <div id="top-dropdown-5" className="top-dropdown-style hidden">
                        <div className="top-subDropdown-style">상가 * 점포</div>
                        <div className="top-subDropdown-style">사무실</div>
                        <div className="top-subDropdown-style">공유오피스</div>
                        <div className="top-subDropdown-style">찜한 매물</div>
                        <div className="top-subDropdown-style">상가 내놓기</div>
                    </div>
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
