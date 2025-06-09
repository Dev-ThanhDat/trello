const { StatusCodes } = require('http-status-codes');

module.exports.createNewBoard = async (req, res) => {
  try {
    return res.status(StatusCodes.CREATED).json({
      status: 'success',
      message: 'Board created successfully'
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};
