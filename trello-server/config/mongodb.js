const mongoose = require('mongoose');

module.exports.dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn.connection.readyState === 1)
      console.log('Successful database connection!');
  } catch (error) {
    console.log('Database connection is unsuccessful!');
    throw new Error(error);
  }
};
