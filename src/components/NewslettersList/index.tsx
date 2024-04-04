"use client";
import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/contexts/user";
import { useNewsletters } from "@/contexts/newsletters";
import {
  Newsletter,
  NewsletterGroupedBySite,
  Subscriptions,
} from "@/shared.types";
import Card from "../shared/Card";
import Title from "../shared/Title";
import { StyledNewslettersList } from "./NewslettersList.styles";

export default function NewslettersList() {
  const user = useUser();
  const newsletters = useNewsletters();
  const newslettersGroupedBySite = useMemo(
    function () {
      return newsletters?.reduce((acc: NewsletterGroupedBySite, newsletter) => {
        const { site } = newsletter;
        if (!acc[site]) {
          acc[site] = [];
        }
        acc[site] = [...acc[site], newsletter];
        return acc;
      }, {});
    },
    [newsletters]
  );

  if (!newslettersGroupedBySite) return null;

  function hasSubscription(requiredSubscriptions: Subscriptions) {
    if (requiredSubscriptions.length === 0) return true;
    return user?.subscriptions.some((subscription) =>
      requiredSubscriptions.includes(subscription)
    );
  }

  return Object.entries(newslettersGroupedBySite).map(
    ([section, newsletters]: [string, Newsletter[]]) => (
      <div key={section}>
        <Title title={section} heading="h2" size="1.375rem" underlined={true} />
        <StyledNewslettersList>
          {newsletters.map((newsletter) => (
            <Card
              key={newsletter.id}
              title={newsletter.title}
              src={newsletter.image}
              content={newsletter.description}
              ctaLabel={
                hasSubscription(newsletter.subscriptions)
                  ? "S'inscrire"
                  : "S'abonner"
              }
              ctaColor={
                hasSubscription(newsletter.subscriptions) ? "#fff" : "#000"
              }
              ctaBgColor={
                hasSubscription(newsletter.subscriptions)
                  ? "#B00005"
                  : "#FAEC70"
              }
            />
          ))}
        </StyledNewslettersList>
      </div>
    )
  );
}
