const lodash = require('lodash');

const blogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0,
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0,
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0,
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0,
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0,
  },
];

const dummy = blogs => {
  return 1;
};

const totalLikes = blogs => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = blogs => {
  if (blogs.length === 0) return 'no favorite blog yet';
  return blogs.reduce((fav, blog) => (blog.likes > fav.likes ? blog : fav));
};

const mostBlogs = blogs => {
  if (blogs.length === 0) return 'no blogs yet';

  const amountBlogs = lodash.countBy(blogs, 'author');

  return Object.entries(amountBlogs)
    .map(([author, amount]) => ({
      author,
      blogs: amount,
    }))
    .sort((blog1, blog2) => blog2.blogs - blog1.blogs)[0];
};

const mostLikes = blogs => {
  if (blogs.length === 0) return 'no blogs yet';

  const amountLikes = blogs.reduce((obj, blog) => {
    obj[blog.author] = (obj[blog.author] || 0) + blog.likes;
    return obj;
  }, {});

  return Object.entries(amountLikes)
    .map(([author, likes]) => ({
      author,
      likes,
    }))
    .sort((a, b) => b.likes - a.likes)[0];
};

console.log(mostLikes(blogs));
module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes };
