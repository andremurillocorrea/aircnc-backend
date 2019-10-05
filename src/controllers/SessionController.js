// possible methods in a controller: index (list), show (unique), store (create), update, destroy
const User = require('../models/User')

module.exports = {
  async store(req, res) {
    const { email } = req.body

    let user = await User.findOne({ email })

    if (!user) {
      user = await User.create({ email })
    }

    return res.json(user)
  }
}