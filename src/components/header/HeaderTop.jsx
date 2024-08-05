import { Link } from "react-router-dom";

import { headerTopData } from "@/data";
import UserIcon from "@/assets/icons/UserIcon";
import { ruFlag, uzFlag } from "@/assets/images";

const HeaderTop = () => {
  const className =
    "text-grayColor text-sm hover:text-white duration-100 leading-[55px]";
  const flex = `flex items-center gap-[30px]`;
  return (
    <div className="bg-black h-[55px] flex items-center">
      <div className="container">
        <div className="w-full flex justify-between items-center ">
          {/* header-top left */}
          <div className={flex}>
            {headerTopData.map((item, index) => (
              <Link className={className} key={index} /* to={item.path} */>
                {item.name}
              </Link>
            ))}
          </div>
          {/*header-top right */}
          <div className={flex}>
            <Link>
              <UserIcon />
            </Link>
            <Link className={className}>Вход / Регистрация</Link>
            <div className={flex}>
              <Link>
                <img src={ruFlag} alt="ruFlag" className="w-[26px] h-[26px]" />
              </Link>
              <Link>
                <img src={uzFlag} alt="uzFlag" className="w-[26px] h-[26px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
