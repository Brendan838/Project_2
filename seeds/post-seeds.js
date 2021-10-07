const { Post } = require('../models');

const postData = [
  {
    title: 'Middleware',
    saved_code: "app.use(express.json()); app.use(express.urlencoded({ extended: true }));"
  },
  {
    title: 'SequelizeSync',
    saved_code: 'sequelize.sync({ force: false }).then(() => {app.listen(PORT, () => console.log("Now listening"));});'
  },
  
];

const seedPost = () => Post.bulkCreate(postData);


module.exports = seedPost();

