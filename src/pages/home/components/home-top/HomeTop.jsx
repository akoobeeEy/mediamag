import { CartIcon } from "@/assets/icons";
import Catalog from "../catalog/Catalog";
import HomeSearch from "../home-search/HomeSearch";
import { useSelector } from "react-redux";
import Banner from "../banner/Banner";

const HomeTop = () => {
  const cart = useSelector((state) => state.cart.products);
  return (
    <div className="py-10">
      <div className="container">
        {/* search cart info */}
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <Catalog />
          </div>
          <div className="col-span-9">
            <div className="flex items-center gap-6  mb-[30px]">
              <div className="w-full">
                <HomeSearch />
              </div>
              <div className="bg-white h-[60px] w-[227px] rounded-[10px] flex items-center gap-4 px-4">
                <CartIcon />
                <p className="text-titleColor font-semibold text-[17px]">
                  Корзина
                </p>
                <span className="w-[31px] h-[22px] rounded-[5px] flex items-center justify-center bg-bodyColor text-titleColor text-sm">
                  {cart.length}
                </span>
              </div>
            </div>
            <Banner />
          </div>
        </div>
        {/* banner */}
      </div>
    </div>
  );
};

export default HomeTop;
