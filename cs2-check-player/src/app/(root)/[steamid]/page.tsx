import Loading from "@/components/loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ErrorMessage from "@/components/ui/error-message";
import { getPlayerFaceitBySteamId } from "@/endpoints/faceit-endpoints";
import { Suspense } from "react";

type UserProfileProps = {
  params: Awaited<{
    steamid: string;
  }>;
};

const UserProfile: React.FC<UserProfileProps> = async ({ params }) => {
  const { steamid } = await params;
  if (!steamid) {
    return <ErrorMessage message="Invalid input" />;
  }
  const res = await getPlayerFaceitBySteamId(steamid);
  if (res.error || res.data === undefined) {
    return (
      <ErrorMessage message={res.error!.message} status={res.error!.status} />
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>Faceit profiles</CardTitle>
          <CardDescription>
            Profiles related to provided Steam ID
          </CardDescription>
        </CardHeader>
        <CardContent>
          {res.data.length === 0 && <p>No profie found</p>}
          
        </CardContent>
      </Card>
    </Suspense>
  );
};

export default UserProfile;
