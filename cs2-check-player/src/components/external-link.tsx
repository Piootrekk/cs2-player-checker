import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

type ExternalLinkProps = {
  link: string;
};

const EternalLink: React.FC<ExternalLinkProps> = ({ link }) => {
  return (
    <Button variant={"ghost"} asChild>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 text-sm"
      >
        <ExternalLink className="w-4 h-4" />
      </a>
    </Button>
  );
};

export default EternalLink;
