// import { useDispatch, useSelector } from "react-redux";

export default function Pagination() {
  //   const { pageNo } = useSelector((state) => state.filter);
  //   const { videos } = useSelector((state) => state.videos);
  //   console.log(videos);
  //   const dispatch = useDispatch();
  //   const handlePagination = (pageNo) => {
  //     dispatch(pageNoChanged(pageNo));
  //   };

  const getStyleWithPageNo = (tabNumber) => {
    return "pageNo" === tabNumber
      ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
      : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full  cursor-pointer";
  };

  return (
    <section className="pt-12 mt-auto">
      <hr className="text-[#4338ca] " />
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        <div
          //   onClick={() => handlePagination(1)}
          className={getStyleWithPageNo(1)}
        >
          1
        </div>
        <div
          //   onClick={() => handlePagination(2)}
          className={getStyleWithPageNo(2)}
        >
          2
        </div>
        <div
          //   onClick={() => handlePagination(3)}
          className={getStyleWithPageNo(3)}
        >
          3
        </div>
      </div>
    </section>
  );
}
