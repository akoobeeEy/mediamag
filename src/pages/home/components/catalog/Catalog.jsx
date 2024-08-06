import { ArrowBottomIcon, MenuIcon } from "@/assets/icons";
import { catalogListData } from "@/data";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import ArrowTopIcon from "@/assets/icons/ArrowTopIcon";

const theme = {
  popover: {
    defaultProps: {
      placement: "right-start",
      dismiss: {
        escape: true,
        click: true,
      },
      animate: {
        unmount: {},
        mount: {},
      },
      className:
        "z-50 max-w-[322px] bg-white border border-blue-gray-50 rounded-lg shadow-lg shadow-blue-gray-500/10",
    },
    styles: {
      base: {
        bg: "bg-white",
        p: "p-4",
        border: "border border-blue-gray-50",
        borderRadius: "rounded-lg",
        boxShadow: "shadow-lg shadow-blue-gray-500/10",
        fontFamily: "font-sans",
        fontSize: "text-sm",
        fontWeight: "font-normal",
        color: "text-blue-gray-500",
        outline: "focus:outline-none",
        overflowWrap: "break-words",
        whiteSpace: "whitespace-normal",
      },
    },
  },
};

const Catalog = () => {
  const [openPopover, setOpenPopover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showCatalog, setShowCatalog] = useState(false);

  const handleOpen = (index) => {
    setActiveIndex(index);
    setOpenPopover(true);
  };

  const handleClose = () => {
    setActiveIndex(null);
    setOpenPopover(false);
  };

  return (
    <div className="bg-white rounded-[10px] pt-5 pb-[38px] px-8  relative overflow-hidden">
      <div className="flex items-center">
        <MenuIcon />
        <h2 className="ml-4 text-titleColor font-bold text-[24px]">Каталог</h2>
      </div>
      <div className="mb-10">
        {catalogListData
          .filter((item) => showCatalog || item.disabled)
          .map((item, index) => (
            <Popover
              key={index}
              placement={theme.popover.defaultProps.placement}
              offset={theme.popover.defaultProps.offset}
              open={openPopover && activeIndex === index}
              handler={setOpenPopover}
              className={theme.popover.defaultProps.className}
            >
              <PopoverHandler className="pt-4">
                <div className="w-full">
                  <div className="border-t-[1px] mb-4"></div>
                  <div
                    className="flex justify-between items-center group"
                    onMouseEnter={() => handleOpen(index)}
                    onMouseLeave={handleClose}
                  >
                    <Link className="w-full text-black font-semibold text-[15px] group-hover:text-redColor duration-100">
                      {item.title}
                    </Link>
                    {item.subLink && (
                      <FaChevronRight className="text-grayColor w-[8px] h-[13px] group-hover:text-redColor duration-100" />
                    )}
                  </div>
                </div>
              </PopoverHandler>
              {item.subLink && (
                <PopoverContent
                  onMouseEnter={() => handleOpen(index)}
                  onMouseLeave={handleClose}
                  className={`transform translate-x-[40px]
                w-[322px] overflow-y-auto absolute top-[100px] mt-2`}
                >
                  <div className="mt-4 flex flex-col gap-2">
                    {item.subLink.map((sub, subIndex) => (
                      <div key={subIndex}>
                        <div className="border-t-[1px] mb-4"></div>
                        <div className="w-full group cursor-pointer">
                          <p className="w-full text-titleColor tracking-wide font-normal font-montserrat text-[15px] group-hover:text-redColor duration-100">
                            {sub.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              )}
            </Popover>
          ))}
      </div>
      <div className="flex justify-center">
        <div className="bg-custom-black absolute -bottom-[40px]  w-[76px] rounded-full h-[76px] group hover:bg-[#191919] duration-150">
          <div
            onClick={() => setShowCatalog(!showCatalog)}
            className="flex justify-center items-center pt-3 cursor-pointer w-full"
          >
            {showCatalog ? <ArrowTopIcon /> : <ArrowBottomIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
