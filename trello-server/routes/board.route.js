const router = require('express').Router();

const boardValidation = require('../validations/board.validation');
const boardController = require('../controllers/board.controller');

router
  .route('/')
  .post(boardValidation.createNew, boardController.createNewBoard);

module.exports = router;
