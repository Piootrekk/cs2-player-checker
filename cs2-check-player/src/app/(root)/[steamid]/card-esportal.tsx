import CardService from "@/components/card-service";
import { getEsportalAccount } from "@/endpoints/esporta-endpoint";
import esportal from "@/components/icons-services/esportal.svg";

type CardEsportalProps = {
  steamid: string;
};

const CardEsportal: React.FC<CardEsportalProps> = async ({ steamid }) => {
  const esportalResponse = await getEsportalAccount(steamid);
  if (esportalResponse.error) {
    return null;
  }
  if (esportalResponse.data) {
    return (
      <CardService
        pageName="esportal"
        urlProfile={`https://esportal.com/profile/${esportalResponse.data[0].username}`}
        icon={esportal}
        hasAccount={esportalResponse.data.length > 0}
      />
    );
  }
  return null;
};

export default CardEsportal;
