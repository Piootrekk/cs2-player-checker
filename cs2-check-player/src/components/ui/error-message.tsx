import { TriangleAlert } from "lucide-react";

type TError = {
  status?: number;
  message?: string;
};

type ErrorProps = TError;

const ErrorMessage: React.FC<ErrorProps> = ({ status, message }) => {
  return (
    <div className="flex items-center justify-center flex-row gap-x-4 text-red-600 text-lg">
      <TriangleAlert size={24} />
      {status && <span>{`${status} | `}</span>}
      <span>{message || "Unknown unexpected error"}</span>
      <TriangleAlert size={24} />
    </div>
  );
};

export default ErrorMessage;
export type { TError };
