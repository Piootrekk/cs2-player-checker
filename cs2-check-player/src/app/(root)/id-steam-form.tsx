"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import InvalidInputError from "@/components/invalid-input";
import React, { useActionState } from "react";
import validateSteamUrlForm from "../../action/steam-url-verify";
import { Button } from "@/components/ui/button";
import LoadingSpin from "@/components/ui/loading-spin";
import { redirect } from "next/navigation";

const IdSteamForm = () => {
  const [state, action, isPending] = useActionState(
    validateSteamUrlForm,
    undefined,
    "/"
  );

  if (state?.data) {
    redirect(`/${state.data}`);
  }
  return (
    <form className="space-y-4" action={action}>
      <Input
        type="text"
        placeholder="https://steamcommunity.com/..."
        className="w-full bg-background/50 border-input shadow-sm transition-shadow duration-200 hover:shadow-md focus:shadow-md"
        name="steamUrl"
        defaultValue={state?.input}
      />
      <Button
        disabled={isPending}
        className="w-full  hover:bg-primary/90 shadow-sm transition-all duration-200 hover:shadow-md"
      >
        {isPending ? (
          <LoadingSpin />
        ) : (
          <div className="flex items-center gap-2">
            <SearchIcon size={16} />
            <span>Check Profile</span>
          </div>
        )}
      </Button>
      {state?.error && <InvalidInputError message={state.error} />}
    </form>
  );
};

export default IdSteamForm;
