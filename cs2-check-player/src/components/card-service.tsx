import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Card } from "./ui/card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

type CardServiceProps = {
  pageName: string;
  urlProfile: string;
  hasAccount?: boolean;
  icon: StaticImport;
};
const CardService: React.FC<CardServiceProps> = ({
  pageName,
  urlProfile,
  hasAccount,
  icon,
}) => {
  return (
    <Card className="group overflow-hidden bg-primary/5 border-none transition-all hover:shadow-lg">
      <div className="p-5 flex flex-wrap items-center gap-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center">
          <Image
            src={icon}
            alt={pageName}
            className="w-7 h-7"
            height={28}
            width={28}
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col items-start justify-center gap-2">
            <a href={urlProfile} target="_blank" rel="noreferrer">
              <h3 className="font-medium text-lg truncate">{pageName}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                View Profile
                <ExternalLink className="w-3.5 h-3.5" />
              </p>
            </a>
          </div>
        </div>
        {hasAccount && (
          <span className="inline-flex items-center rounded-full bg-green-900 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-600/20">
            Account Connected
          </span>
        )}
      </div>
    </Card>
  );
};

export default CardService;
