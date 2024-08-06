import { Carousel } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@/assets/icons";

const Banner = () => {
  return (
    <Carousel
      className="rounded-xl h-[492px] overflow-hidden z-40"
      loop={true}
      navigation={false}
      prevArrow={({ handlePrev }) => (
        <button
          className="absolute -left-[38px] top-1/2 transform 
          -translate-y-1/2 p-2 w-[76px] h-[76px] bg-white text-black flex items-center justify-end rounded-full z-10"
          onClick={handlePrev}
        >
          <ArrowLeftIcon />
        </button>
      )}
      nextArrow={({ handleNext }) => (
        <button
          className="absolute -right-[38px] top-1/2 transform -translate-y-1/2 p-2 w-[76px] h-[76px] bg-white text-black flex items-center justify-start rounded-full z-10"
          onClick={handleNext}
        >
          <ArrowRightIcon />
        </button>
      )}
    >
      <div className="bg-banner1 bg-no-repeat bg-cover w-full h-full relative">
        <div className="carousel-item"></div>
        <div className="carousel-body ml-20 flex flex-col justify-center h-full absolute left-0">
          <p className="text-white text-[15px] mb-3">
            Оформляйте рассрочку или покупку на выгодных условиях
          </p>
          <h1 className="text-white font-bold leading-[42px] text-[35px]">
            не выходя из дома!!!
          </h1>
        </div>
      </div>
      <div className="bg-banner2 bg-no-repeat bg-cover w-full h-full">
        <div className="carousel-item"></div>
        <div className="carousel-body ml-20 flex flex-col justify-center h-full absolute left-0">
          <p className="text-white text-[15px] mb-3">
            Оформляйте рассрочку или покупку на выгодных условиях
          </p>
          <h1 className="text-white font-bold leading-[42px] text-[35px]">
            не выходя из дома!!!
          </h1>
        </div>
      </div>
      <div className="bg-banner3 bg-no-repeat bg-cover w-full h-full relative ">
      <div className="carousel-item"></div>
        <div className="carousel-body ml-20 flex flex-col justify-center h-full absolute left-0">
          <p className="text-white text-[15px] mb-3">
            Оформляйте рассрочку или покупку на выгодных условиях
          </p>
          <h1 className="text-white font-bold leading-[42px] text-[35px]">
            не выходя из дома!!!
          </h1>
        </div>
      </div>
      <div className="bg-banner4 bg-no-repeat bg-cover w-full h-full relative ">
      <div className="carousel-item"></div>
        <div className="carousel-body ml-20 flex flex-col justify-center h-full absolute left-0">
          <p className="text-white text-[15px] mb-3">
            Оформляйте рассрочку или покупку на выгодных условиях
          </p>
          <h1 className="text-white font-bold leading-[42px] text-[35px]">
            не выходя из дома!!!
          </h1>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
