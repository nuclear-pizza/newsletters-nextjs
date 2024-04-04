export type Rights = "RIGHT_1" | "RIGHT_2";

export type Subscriptions = Rights[];

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  subscriptions: Subscriptions;
};

export type Newsletter = {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: Subscriptions;
};

export type NewsletterGroupedBySite = { [site: string]: Newsletter[] };
