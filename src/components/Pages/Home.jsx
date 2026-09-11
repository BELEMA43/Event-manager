import Summary from "../Summary";
import CarouselPlugin from "../RegCarousel";
import RegChart from "../BarChart";

const Home = () => {
  return (
    <div className="flex-1 mt-5">
      <div className="flex flex-col gap-3 p-6.25 pt-1">
        <Summary />
        <div className="flex flex-col  lg:flex-row justify-center gap-2 w-[90%] lg:w-full h-162 lg:h-80 ml-auto mr-auto">
          <div className=" w-full max-w-200 lg:w-[57%] h-[40%] lg:h-auto flex flex-col rounded-lg justify-center items-center pr-5">
            <RegChart />
          </div>
          <div className="w-full lg:w-[50%] lg:rounded-lg lg:flex lg:justify-center lg:items-center">
            <CarouselPlugin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
