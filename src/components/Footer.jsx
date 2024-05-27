const Footer = () => {
    return (
        <footer className="min-h-[298px] w-full bg-white pt-[52px] pb-5">
        <div className="w-[600px] mx-auto flex items-center pb-5">
          <div className="footer-button-font">회사소개</div>
          <span className="border-l border-gray-400 inline-block w-[1px] h-[13px] mx-1"/>
          <div className="footer-button-font">채용정보</div>
          <span className="border-l border-gray-400 inline-block w-[1px] h-[13px] mx-1"/>
          <div className="footer-button-font">이용약관</div>
          <span className="border-l border-gray-400 inline-block w-[1px] h-[13px] mx-1"/>
          <div className="footer-button-font font-bold">개인정보 처리방침</div>
          <span className="border-l border-gray-400 inline-block w-[1px] h-[13px] mx-1"/>
          <div className="footer-button-font">위치기반 서비스 이용약관</div>
          <span className="border-l border-gray-400 inline-block w-[1px] h-[13px] mx-1"/>
          <div className="footer-button-font">중개사 사이트 바로가기</div>
        </div>
        <div className="footer-nonButton-font text-center">
          상호 : (주)직방 &nbsp;|&nbsp; 대표 : 안성우 &nbsp;|&nbsp; 사업자등록번호: 120-87-61559<br/>
          주소 : 서울특별시 강남구 영동대로 731, 지하 2층 (청담동, 신영빌딩) (우 : 06072)<br/>
          통신판매업 신고번호 : 제2021-서울강남-06358호<br/>
          이메일 : cs@zigbang.com  |  서비스제휴문의 : partnership@zigbang.com  | 팩스 : 02-568-4908
        </div>
        <div className="w-[600px] mx-auto flex justify-center items-center pt-6 pb-[13px]">
            <div>
              <img className="footer-icon" src="../images/ico_t2_sns1.png"/>
            </div>
            <div>
              <img className="footer-icon" src="../images/ico_sns_youtube.png"/>
            </div>
            <div>
              <img className="footer-icon" src="../images/ico_sns_blog.png"/>
            </div>
            <div>
              <img className="footer-icon" src="../images/ico_t2_sns4.png"/>
            </div>
        </div>
        <div className="footer-copyright-font text-center">
          Copyright © ZIGBANG. All Rights Reserved.
        </div>
      </footer>
    );
};

export default Footer;