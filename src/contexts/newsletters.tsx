"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { newsletterActions } from "@/mocks/newsletters";
import { Newsletter } from "@/shared.types";

type NewslettersProviderProps = {
  children: React.ReactNode;
};

const NewslettersContext = createContext<Newsletter[] | null>(null);

export default function NewslettersProvider({
  children,
}: NewslettersProviderProps) {
  const [newsletters, setNewsletters] = useState<Newsletter[] | null>(null);

  useEffect(function () {
    async function fetchNewsletters() {
      try {
        const newsletters = await newsletterActions.getAll();
        setNewsletters(newsletters);
      } catch (err) {
        throw new Error("💥 Error fetching newsletters! 💥");
      }
    }
    fetchNewsletters();
  }, []);

  return (
    <NewslettersContext.Provider value={newsletters}>
      {children}
    </NewslettersContext.Provider>
  );
}

export function useNewsletters() {
  const newsletters = useContext(NewslettersContext);
  if (newsletters === undefined)
    throw new Error(
      'You are trying to consume "Newsletters" context out of its provider scope!'
    );
  return newsletters;
}
