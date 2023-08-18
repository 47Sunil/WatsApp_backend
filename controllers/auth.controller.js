export const register = async (req, res, next) => {
  try {
    res.send(req.body);
  } catch (error) {
    console.log(error);
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

export const refreshToken = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    // res.status(500).json({ message: error.message });
    next(error);
  }
};
