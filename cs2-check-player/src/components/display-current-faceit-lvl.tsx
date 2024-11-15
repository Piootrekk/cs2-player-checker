import React from "react";
import lvl_1 from "./png/lvl_1.png";
import lvl_2 from "./png/lvl_2.png";
import lvl_3 from "./png/lvl_3.png";
import lvl_4 from "./png/lvl_4.png";
import lvl_5 from "./png/lvl_5.png";
import lvl_6 from "./png/lvl_6.png";
import lvl_7 from "./png/lvl_7.png";
import lvl_8 from "./png/lvl_8.png";
import lvl_9 from "./png/lvl_9.png";
import lvl_10 from "./png/lvl_10.png";
import lvl_0 from "./png/lvl_0.png";

import Image from "next/image";

type DisplayFaceitLvlProps = {
  lvl: number;
  width?: number;
  height?: number;
};

const getFaceitLvlImage = (lvl: number) => {
  const lvlImages = [
    lvl_0,
    lvl_1,
    lvl_2,
    lvl_3,
    lvl_4,
    lvl_5,
    lvl_6,
    lvl_7,
    lvl_8,
    lvl_9,
    lvl_10,
  ];
  return lvlImages[lvl];
};

const DisplayFaceitLvl: React.FC<DisplayFaceitLvlProps> = ({
  lvl,
  width,
  height,
}) => {
  return (
    <Image
      src={getFaceitLvlImage(lvl)}
      width={width || 128}
      height={height || 128}
      alt={`${lvl}`}
      quality={100}
      placeholder="empty"
    />
  );
};

export default DisplayFaceitLvl;
