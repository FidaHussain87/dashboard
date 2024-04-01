"use client";
import React, { useState } from "react";
import { LuCrown } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BsBox } from "react-icons/bs";



import BoxIcon from "./BoxIcon";
import classNames from "classnames";

const SideMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const sidebar_width = isCollapsed ? "w-[60px]" : "w-[160px]";
  return (
    <div
      id="left_menu_id"
      className={classNames(
        "flex h-screen bg-black FLEX_COL pt-[60px] relative transition-all duration-500",
        sidebar_width
      )}
    >
      <div
        className="w-[20px] h-[20px] rounded-full bg-white CENTER absolute top-[15px] -right-2 hover:cursor-pointer hover:bg-slate-100"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <MdKeyboardArrowRight />
        ) : (
          <MdKeyboardArrowLeft color="black" size={20} />
        )}
      </div>

      <div id="top_icon_group_id" className="FLEX_COL gap-6">
      <div className={classNames("flex justify-between items-center  cursor-pointer",isCollapsed?null:"gap-4 self-start")}>
        <BoxIcon
          Icon={<LuCrown color="black" size={20} />}
          backgroundColor="WHITE"
        />
        <h1
          className={classNames(
            "text-gray-500 text-sm transition-all duration-500",
            isCollapsed ? " w-0 overflow-hidden" : "self-start"
          )}
        >
          Dashboard
        </h1>
      </div>
      <div id="divider_id" className={classNames("transition-all w-full h-[1px] bg-[#56585B] CENTER",isCollapsed?"w-10":null)}/>


      {/* second menu */}
      <div className={classNames("flex CENTER  cursor-pointer",isCollapsed?null:"gap-4 self-start")}>
        <BoxIcon
          Icon={<FaGift color="#56585B" size={20} />}
          
        />
        <h1
          className={classNames(
            "text-gray-500 text-sm transition-all duration-500",
            isCollapsed ? " w-0 overflow-hidden" : "self-start"
          )}
        >
          Gifts
        </h1>
      </div>

       {/* third menu */}
       <div className={classNames("flex CENTER  cursor-pointer",isCollapsed?null:"gap-4 self-start")}>
        <BoxIcon
          Icon={<FaCartShopping color="#56585B" size={20} />}
          
        />
        <h1
          className={classNames(
            "text-gray-500 text-sm transition-all duration-500",
            isCollapsed ? " w-0 overflow-hidden" : "self-start"
          )}
        >
          Cart
        </h1>
      </div>

       {/* fourth menu */}
       <div className={classNames("flex CENTER  cursor-pointer",isCollapsed?null:"gap-4 self-start")}>
        <BoxIcon
          Icon={<BsBox className="text-[#56585B] group-hover:text-[#Fe5E37]" size={20} />}
          className="group w-[30px] h-[30px] rounded-sm hover:bg-[#22222]"
          
        />
        <h1
          className={classNames(
            "text-gray-500 text-sm transition-all duration-500",
            isCollapsed ? " w-0 overflow-hidden" : "self-start"
          )}
        >
          Cart
        </h1>
      </div>

      {/* fifth menu */}
      <div className={classNames("flex CENTER  cursor-pointer",isCollapsed?null:"gap-4 self-start")}>
        <BoxIcon
          Icon={<FaCartShopping  className="text-[#56585B] group-hover:text-[#Fe5E37]" size={20} />}
          className="group w-[30px] h-[30px] rounded-sm hover:bg-[#222222]"
          
        />
        <h1
          className={classNames(
            "text-gray-500 text-sm transition-all duration-500",
            isCollapsed ? " w-0 overflow-hidden" : "self-start"
          )}
        >
          Cart
        </h1>
      </div>
      </div>
    </div>
  );
};

export default SideMenu;
