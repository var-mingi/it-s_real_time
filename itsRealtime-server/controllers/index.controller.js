const index = (req, res, next) => {
  res.json({
    message: `It's real time!`
  })
}

export { index }