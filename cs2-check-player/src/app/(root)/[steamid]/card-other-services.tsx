import CardService from "@/components/card-service";
import leetify from "@/components/icons-services/leetify.svg";
import allstars from "@/components/icons-services/allstars.svg";
import csstats from "@/components/icons-services/csstats.svg";
import steamiduk from "@/components/icons-services/steamiduk.png";

type CardOthersServicesProps = {
  steamid: string;
};

const CardOthersServices: React.FC<CardOthersServicesProps> = ({ steamid }) => {
  const services = [
    {
      pageName: "leetify",
      urlProfile: `https://leetify.com/app/profile/${steamid}`,
      icon: leetify,
    },
    {
      pageName: "allstars",
      urlProfile: `https://allstar.gg/match-history?playerSearchIdentifier=${steamid}#counter-strike-2`,
      icon: allstars,
    },
    {
      pageName: "cssstats",
      urlProfile: `https://csstats.gg/player/${steamid}`,
      icon: csstats,
    },
    {
      pageName: "steamiduk",
      urlProfile: `https://steamid.uk/profile/${steamid}`,
      icon: steamiduk,
    },
  ];
  return (
    <>
      {services.map((service) => (
        <CardService key={service.pageName} {...service} />
      ))}
    </>
  );
};

export default CardOthersServices;
