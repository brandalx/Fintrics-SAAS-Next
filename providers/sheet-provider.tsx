"use client";

import { useMountedState } from "react-use";

import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";

export const SheetProvider = () => {
  //eq of use state - use effect => true (to fix hydration error)
  const isMounted = useMountedState();

  if (!isMounted) return null;
  return (
    <>
      <NewAccountSheet />
    </>
  );
};
