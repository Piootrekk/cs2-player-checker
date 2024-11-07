import { TriangleAlert } from "lucide-react";

type InvalidInputErrorProps = {
  message: string;
};

const InvalidInputError: React.FC<InvalidInputErrorProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center flex-row gap-x-4 text-red-600 text-lg">
      <TriangleAlert size={24} />
      <span>{message}</span>
      <TriangleAlert size={24} />
    </div>
  );
};

export default InvalidInputError;
