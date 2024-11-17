import { Card } from "@/components/ui/card";
import { scopeGGAccount } from "@/endpoints/other-endpoints";

type CardScopeGGProps = {
  steamid: string;
};

const CardScopeGG: React.FC<CardScopeGGProps> = async ({ steamid }) => {
  const res = await scopeGGAccount(steamid);
  if (res.error) {
    return null;
  }
  return (
    <Card className="bg-primary/5 border-none">
      <div className="p-4 flex items-center gap-4">
        <span>{res.data.isRegistered ? "Has account" : "Not registered"}</span>
      </div>
    </Card>
  );
};

export default CardScopeGG;
