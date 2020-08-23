const JWT = require('jsonwebtoken')


exports.protect = async (req, res, next) => {
  try {
    
      const token = req.header("Authorization").replace("Bearer ", "");
      const user = await JWT.verify(token, process.env.JWT_SECRET_KEY);

      if(!user)
      throw new Error()

      req.user = user;
      next();
    
  } catch (e) {
    res.status(400).send({ error: "error in Authentication" });
  }
};

exports.userMiddleware = async (req, res, next) => {
    if (req.user.role !== "user") {
        return res.status(400).json({
          message: "access denied, only user can access",
        });
      }
      next();
};

exports.adminMiddleware = async (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(400).json({
      message: "access denied, only admin can access",
    });
  }
  next();
};
