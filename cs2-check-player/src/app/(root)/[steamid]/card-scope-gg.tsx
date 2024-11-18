import { scopeGGAccount } from "@/endpoints/other-endpoints";
import scope from "@/components/svg/scope.svg";
import CardService from "@/components/card-service";

type CardScopeGGProps = {
  steamid: string;
};

const CardScopeGG: React.FC<CardScopeGGProps> = async ({ steamid }) => {
  const res = await scopeGGAccount(steamid);
  if (res.error) {
    return null;
  }
  return (
    <CardService
      pageName="scope"
      urlProfile={`https://app.scope.gg/dashboard/${res.data.accountData.steamAccountId}`}
      icon={scope}
      hasAccount={res.data.isRegistered}
    />
  );
};

export default CardScopeGG;
