const Regexps = {
  NAME: /^[a-zA-Z0-9_\- ]{3,20}$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PHONE: /^\(\d{3}\) \d{3}-\d{4}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/,
};

const Subscriptions = {
  STARTER: "starter",
  PRO: "pro",
  BUSINESS: "business",
};

const Enums = {
  SUBSCRIPTIONS: Object.values(Subscriptions),
};

module.exports = {
  Regexps,
  Enums,
  Subscriptions,
};
