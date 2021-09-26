const { Post } = require('../models');

const postdata = [
  {
    title: 'Why MVC is so important',
    post_url: 'MVS alloes developers to maintain a true seperation of concerns, devising their code between the Model layer fir data, the View layer for design, and the Controller layer for application logic.',
    user_id: 1
  },
  {
    title: 'Authentication vs. Authorization',
    post_url: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the sytem.',
    user_id: 2
  },
  {
    title: 'Object-Relational Mapping',
    post_url: "I have really loved learning about ORMs. It's really splified the way I create queries in SQL!",
    user_id: 3
  },
  {
    title: 'Handlebars',
    post_url: "Handlebars compiles templates into JavaScript functions. This makes the template execution faster than most other template engines.",
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;