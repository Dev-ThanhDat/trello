const initRoutes = (app) => {
  app.use('/api/board', require('./board.route'));
};

module.exports = initRoutes;
