import IdSteamForm from "./id-steam-form";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 bg-gradient-to-tr from-background via-background to-muted/100">
      <div className="w-full max-w-lg space-y-6 mt-40 text-center">
        <div className="space-y-2 w-full">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Faceit Profile Checker
          </h1>
          <p className="text-muted-foreground">
            Enter a Steam profile URL or ID to check Faceit level
          </p>
        </div>
        <IdSteamForm />
      </div>
    </main>
  );
};

export default Home;
