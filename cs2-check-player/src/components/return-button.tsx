import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

type ReturnButtonProps = {
  destination?: string;
};

const ReturnButton: React.FC<ReturnButtonProps> = ({ destination }) => {
  return (
    <div className="flex justify-start">
      <Button variant={"ghost"} asChild className="m-4">
        <Link href={destination || "/"}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Search</span>
        </Link>
      </Button>
    </div>
  );
};

export default ReturnButton;
