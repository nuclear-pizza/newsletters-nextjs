import { User, Rights } from "@/shared.types";

type UserAPI = {
  getByRight: (right?: Rights) => Promise<User>;
};

const BASE_USER = {
  id: "507f1f77bcf86cd799439011",
  firstName: "Jamie",
  lastName: "Doe",
  gender: "M",
  email: "jamie.doe@example.com",
} as User;

export const USER_WITHOUT_SUBSCRIPTION: User = {
  ...BASE_USER,
  subscriptions: [],
};

export const USER_WITH_ONE_SUBSCRIPTION: User = {
  ...BASE_USER,
  subscriptions: ["RIGHT_1"],
};

export const USER_WITH_MULTIPLE_SUBSCRIPTION: User = {
  ...BASE_USER,
  subscriptions: ["RIGHT_1", "RIGHT_2"],
};

export const userActions: UserAPI = {
  getByRight(right) {
    return new Promise((resolve) => {
      if (!right) return resolve(USER_WITHOUT_SUBSCRIPTION);
      const user = [
        USER_WITH_ONE_SUBSCRIPTION,
        USER_WITH_MULTIPLE_SUBSCRIPTION,
      ].find((user) => user.subscriptions.includes(right));
      resolve(user!);
    });
  },
};
