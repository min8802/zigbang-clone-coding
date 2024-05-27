const DownloadButton = () => {
    return (
        <div className="h-[279px] w-full bg-[#F3F5F5]">
        <div
          className="w-[890px] h-[280px] pl-[366px] mx-auto"
          style={{
            backgroundImage: 'url(https://s.zigbang.com/v1/web/main/downLoad_phone_new.png)',
            backgroundPosition: '109px 0px',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
          >
          <div className="mb-10 ml-1 app-download-font pt-[101px]">
            직방앱을 다운 받으세요 !
          </div>
          <div className="w-[400px] flex justify-between">
            <button 
              className="w-[190px] h-[52px]"
              style={{
              backgroundImage: 'url(https://s.zigbang.com/legacy/images/v2/main/BTN_download_android_nor.png)',
              backgroundSize: 'contain',
            }}></button>
            <button 
              className="w-[190px] h-[52px]"
              style={{
              backgroundImage: 'url(https://s.zigbang.com/legacy/images/v2/main/BTN_download_ios_nor.png)',
              backgroundSize: 'contain',
            }}></button>
            
          </div>
        </div>
      </div>
    );
};

export default DownloadButton;