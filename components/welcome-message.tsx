"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

export const WelcomeMessage = () => {
  const { user, isLoaded } = useUser();
  return (
    <div>
      <h2>Welcome Back</h2>
      <p>This is your financial overview report</p>
    </div>
  );
};
