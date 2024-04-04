"use server";

import React from "react";
import Notice from "@/components/Notice";
import NewslettersList from "@/components/NewslettersList";

const title = "Newsletters";
const content =
  "Dans cette page, vous retrouvez l'ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez decouvrir toutes nos newsletters selon vos centres d'interet et gerer plus facilement l'inscription a vous newsletters.";

const page = () => {
  return (
    <>
      <Notice title={title} content={content} />
      <NewslettersList />
    </>
  );
};

export default page;
