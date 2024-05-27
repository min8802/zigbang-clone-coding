import newsData from "../data/newsData.json"
import boardData from "../data/boardData.json"

const Board = () => {
    return (
        <div className="w-full pt-10 pb-[27px] bg-white overflow-hidden">
        <div className="mx-auto w-[840px] flex">
          <div className="w-[260px] overflow-hidden text-ellipsis">
            <div className="pt-1 pb-[11px] border-b board-font font-bold leading-5">소개할게요</div>
            <div className="pt-5">
              <img src="../images/231228_d3eb8ac513.png"/>
            </div>
          </div>
          <div className="w-[260px] ml-[30px] overflow-hidden text-ellipsis">
            <div className="flex justify-between border-b">
              <div className="pt-1 pb-[11px] board-font font-bold leading-5">
                뉴스
              </div>
              <div>
                <button className="bg-[#EEEEEE] board-button-font py-[6px] px-3 rounded-md">더보기</button>
              </div>
            </div>
            <div className="pt-5">
              {newsData.map((v,i) => (
                <div key={i} className="board-small-font h-8">{v.text}</div>
              ))}
            </div>
          </div>
          <div className="w-[260px] ml-[30px] overflow-hidden text-ellipsis">
          <div className="flex justify-between border-b">
              <div className="pt-1 pb-[11px] board-font font-bold leading-5">
                공지사항
              </div>
              <div>
                <button className="bg-[#EEEEEE] board-button-font py-[6px] px-3 rounded-md">더보기</button>
              </div>
            </div>
            <div className="pt-5">
              {boardData.map((v,i) => (
                <div key={i} className="board-small-font h-8">{v.text}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Board;