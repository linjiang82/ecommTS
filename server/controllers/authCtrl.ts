const create = (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.json({
    data: "ok",
  });
};

export default { create };
