import IdSteamForm from "./id-steam-form";

const Home = () => {
  return (
    <>
      <div className="space-y-2 w-full">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Faceit Profile Checker
        </h1>
        <p className="text-muted-foreground">
          Enter a Steam profile URL or ID to check Faceit level
        </p>
      </div>
      <IdSteamForm />
    </>
  );
};

export default Home;
