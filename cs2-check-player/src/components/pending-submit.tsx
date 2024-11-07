"use client";
import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "@/components/ui/button";
import LoadingSpin from "./ui/loading-spin";

type PendingSubmitProps = {
  children: React.ReactNode;
} & ButtonProps;

const PendingSubmit: React.FC<PendingSubmitProps> = ({ children, ...rest }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full p-2" {...rest}>
      {pending ? <LoadingSpin /> : children}
    </Button>
  );
};

export default PendingSubmit;
