import hero from "../../assets/hero.jpg";

const Banner = () => {
  return (
    <div className="">
      <div className="lg:flex my-[-150px] lg:my-[100px] lg:mx-[0px] ">
        <div className=" ">
          <h1 className="text-gray-700 dark:text-gray-100 text-5xl font-normal  mt-[10px] lg:mx-[100px] ml-[80px] text-start">
            Unlock Your Career Potential: Where Opportunities Meet Aspirations!
          </h1>
          <div className=" mt-[40px] ml-[80px] lg:ml-[100px] bg-[#ae4cff] w-[213px] h-[50px] rounded-full shadow-2xl">
            <button className=" w-[100px] text-white text-2xl font-normal pl-[65px] pt-[7px]">
              Explore
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="my-[0px] ml-[70px] lg:w-[1920px] lg:rounded-3xl "
            src={hero}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
