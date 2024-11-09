import React from "react";
import lvl_1 from "./svg/lvl_1.svg";
import lvl_2 from "./svg/lvl_2.svg";
import lvl_3 from "./svg/lvl_3.svg";
import lvl_4 from "./svg/lvl_4.svg";
import lvl_5 from "./svg/lvl_5.svg";
import lvl_6 from "./svg/lvl_6.svg";
import lvl_7 from "./svg/lvl_7.svg";
import lvl_8 from "./svg/lvl_8.svg";
import lvl_9 from "./svg/lvl_9.svg";
import lvl_10 from "./svg/lvl_10.svg";
import lvl_0 from "./svg/lvl_0.svg";
import Image from "next/image";

type DisplayFaceitLvlProps = {
  lvl: number;
  width?: number;
  height?: number;
};

const getFaceitLvlImage = (lvl: number) => {
  switch (lvl) {
    case 1:
      return lvl_1;
    case 2:
      return lvl_2;
    case 3:
      return lvl_3;
    case 4:
      return lvl_4;
    case 5:
      return lvl_5;
    case 6:
      return lvl_6;
    case 7:
      return lvl_7;
    case 8:
      return lvl_8;
    case 9:
      return lvl_9;
    case 10:
      return lvl_10;
    default:
      return lvl_0;
  }
};

const DisplayFaceitLvl: React.FC<DisplayFaceitLvlProps> = ({
  lvl,
  width,
  height,
}) => {
  return (
    <Image
      src={getFaceitLvlImage(lvl)}
      width={width || 64}
      height={height || 64}
      alt={`${lvl}`}
      placeholder="empty"
    />
  );
};

export default DisplayFaceitLvl;
