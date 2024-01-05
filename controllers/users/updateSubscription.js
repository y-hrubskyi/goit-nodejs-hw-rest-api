const updateSubscription = async (req, res) => {
  const { subscription } = req.body;
  const { user } = req;

  user.updSubscription(subscription);
  await user.save();

  res.json({
    email: user.email,
    subscription: user.subscription,
  });
};

module.exports = updateSubscription;
