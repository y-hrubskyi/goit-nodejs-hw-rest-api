const { userService } = require("../../services");

const updateSubscription = async (req, res) => {
  const { subscription } = req.body;
  const { user } = req;

  const result = await userService.updateSubscription(user, subscription);
  res.json(result);
};

module.exports = updateSubscription;
