import { PhoneIcon, MapIcon, EmailIcon } from "@/assets/icons";
import { logo } from "@/assets/images";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="bg-white py-[30px]">
      <div className="container">
        <div className="flex justify-between">
          {/* col-1 */}
          <div className="w-[33%]">
            <Link to={"/"} className="mb-[10px]">
              <img src={logo} alt="logo" />
              <span className="ml-5 text-titleColor font-bold text-[27px]">
                mediamag.uz
              </span>
            </Link>
            <p className="ml-5 text-titleColor text-[19px] font-normal">
              Интернет магазин электроники и бытовой техники.
            </p>
          </div>
          {/* col-2 */}
          <div className="flex items-center justify-center w-[33%]">
            <MapIcon />
            <p className="ml-[47px] text-[15px] text-black">Онлайн магазин</p>
          </div>
          {/* col-3 */}
          <div className="flex justify-between w-[30%] items-center">
            <div className="">
              <PhoneIcon />
            </div>
            <div className="ml-[52px] flex items-center justify-between w-full">
              <div className="">
                <Link
                  to={"tel:+998901747674"}
                  className=" font-bold text-[23px]"
                >
                  +998 90 174 76 74
                </Link>
                <p className="text-black text-[13px] font-normal text-end">
                  Пн - Пт 10:00 - 18:00
                </p>
              </div>
              <div>
                <EmailIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
