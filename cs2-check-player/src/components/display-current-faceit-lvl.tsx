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

import Image from "next/image";

type DisplayFaceitLvlProps = {
  lvl: number;
  width?: number;
  height?: number;
};

const getFaceitLvlImage = (lvl: number) => {
  const lvlImages = {
    1: lvl_1,
    2: lvl_2,
    3: lvl_3,
    4: lvl_4,
    5: lvl_5,
    6: lvl_6,
    7: lvl_7,
    8: lvl_8,
    9: lvl_9,
    10: lvl_10,
  } as const;

  return lvlImages[lvl as keyof typeof lvlImages];
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
