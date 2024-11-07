import IdSteamForm from "./id-steam-form";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-background via-background to-muted/20 flex flex-col items-center p-4">
      <div className="w-full max-w-md space-y-6 mt-40 ">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
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
