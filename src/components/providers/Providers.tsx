"use client";

import { DrawerProvider } from "@/context/DrawerContext";
import ContactDrawer from "@/components/ui/ContactDrawer";
import FloatingContactButton from "@/components/ui/FloatingContactButton";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <DrawerProvider>
      {children}
      <ContactDrawer />
      <FloatingContactButton />
    </DrawerProvider>
  );
}
