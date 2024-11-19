import CardEsportal from "./card-esportal";
import CardOthersServices from "./card-other-services";
import CardScopeGG from "./card-scope-gg";

type CardOtherProps = {
  steamid: string;
};

const CardOther: React.FC<CardOtherProps> = ({ steamid }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          OTHER Accounts
          <span className="ml-2 text-sm text-muted-foreground">
            Other services connected with steam
          </span>
        </h2>
      </div>
      <CardScopeGG steamid={steamid} />
      <CardOthersServices steamid={steamid} />
      <CardEsportal steamid={steamid} />
    </div>
  );
};

export default CardOther;
