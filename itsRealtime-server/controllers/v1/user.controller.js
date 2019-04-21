import userModel from '../../schemas/user.schemas'

const get = async (req, res, next) => {
  const results = await userModel.find({})
  res.json(results);
}
  
const post = async (req, res, next) => {
  const result = await userModel.create(req.body)
  res.send(result)
}

export { get, post }