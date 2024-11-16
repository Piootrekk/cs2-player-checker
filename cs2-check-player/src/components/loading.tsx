import { Skeleton } from "./ui/skeleton";

const Loading = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-full min-h-screen space-y-4">
        <Skeleton className="w-1/3 h-14" />
        <Skeleton className="w-1/3 h-14" />
        <Skeleton className="w-1/3 h-14" />
      </section>
    </>
  );
};

export default Loading;
