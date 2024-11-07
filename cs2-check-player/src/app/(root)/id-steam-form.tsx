"use client";

import PendingSubmit from "@/components/pending-submit";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import InvalidInputError from "@/components/invalid-input";
import React, { useActionState } from "react";
import validateSteamUrlForm from "./action/steam-url-verify";

const IdSteamForm = () => {
  const [state, action] = useActionState(validateSteamUrlForm, undefined, "/");
  return (
    <form className="space-y-4" action={action}>
      <Input
        type="text"
        placeholder="https://steamcommunity.com/..."
        className="w-full bg-background/50 border-input shadow-sm transition-shadow duration-200 hover:shadow-md focus:shadow-md"
        name="steamUrl"
        defaultValue={state?.input}
      />
      <PendingSubmit className="w-full bg-primary hover:bg-primary/90 shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="flex items-center gap-2">
          <SearchIcon size={16} />
          <span>Check Profile</span>
        </div>
      </PendingSubmit>
      {state?.error && <InvalidInputError message={state.error} />}
      {state?.data && <p>{state.data}</p>}
    </form>
  );
};

export default IdSteamForm;
