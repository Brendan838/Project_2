const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userSeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
}

<<<<<<< HEAD
seedDatabase();
=======
seedAll();
>>>>>>> 98d7211392447c8cfc672f6cd4070a4f1de77c25
