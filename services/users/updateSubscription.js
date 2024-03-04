const updateSubscription = async (user, subscription) => {
  user.updSubscription(subscription);
  await user.save();

  return {
    email: user.email,
    subscription: user.subscription,
  };
};

module.exports = updateSubscription;
