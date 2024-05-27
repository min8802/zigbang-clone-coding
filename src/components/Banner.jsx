const Banner = () => {
    return (
        <div className="w-full h-[460px] relative">
        <div className="">
          <img className="w-full h-[460px] object-cover" src="../images/zigbangWeb_heroImg_1440.jpg"/>
        </div>
        <div className="absolute top-0 w-[942px] h-[340px] pt-[156px] left-[50%] -translate-x-1/2">
          <div className="banner-big-font">
          어떤 집을 찾고 계세요?
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 w-[574px] h-[196px] -translate-x-1/2">
            <div className="h-10 bg-[#03142DD9] flex items-center mb-[26px] rounded-lg">
              <div className="banner-small-font">아파트</div>
              <div className="banner-small-font">빌라, 투룸+</div>
              <div className="banner-small-font">원룸</div>
              <div className="banner-small-font">오피스텔</div>
              <div className="banner-small-font">상가</div>
            </div>
            <div className="rounded-lg bg-[#FF681B] flex">
              <div className="w-[508px] pt-[17px] pr-7 pl-[29px] pb-[19px] h-15 bg-[#F2F2F2] rounded-bl-[8px] rounded-tl-[8px]">
                <input type="text" className="w-[447px] h-15 text-4 border-none bg-[#F2F2F2] leading-6 px-[2px] py-[1px]" placeholder="원하시는 지역명, 지하철역, 단지명(아파트명)을 입력해주세요"/>
              </div>
              <div className="w-[66px] h-15 flex justify-center items-center">
                <img className="w-7 h-8 object-cover" src="../images/ic_search.png"/>
              </div>
            </div>
        </div>
      </div>
    );
};

export default Banner;