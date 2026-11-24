exports.getApi = async (req, res) => {
  try {
    res.status(200).json({
      message: "This is example of 200 http code (api is working fine) ",
      success: "true",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      context: e.message,
    });
  }
};

exports.createApi = async (req, res) => {
  try {
    res.status(201).json({
      message: "This is example of 201 http code (Object has been created) ",
      success: "true",
    });
  } catch (e) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Something went wrong",
        context: e.message,
      });
  }
};

exports.updateApi = async (req, res) => {
  try {
    res.status(200).json({
      message: "This is example of 200 http code (Object has been updated) ",
      success: "true",
    });
  } catch (e) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Something went wrong",
        context: e.message,
      });
  }
};
exports.removeApi = async (req, res) => {
  try {
    res.status(200).json({
      message: "This is example of 200 http code (Object has been removed) ",
      success: "true",
    });
  } catch (e) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Something went wrong",
        context: e.message,
      });
  }
};
exports.patchApi = async (req, res) => {
  try {
    res.status(200).json({
      message: "This is example of 200 http code (Object has been patched) ",
      success: "true",
    });
  } catch (e) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Something went wrong",
        context: e.message,
      });
  }
};
