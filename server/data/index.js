import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];
const commentIds = Array.from({length: 5}, (_, i) => new mongoose.Types.ObjectId())
const postIds = Array.from({length: 5}, (_, i) => new mongoose.Types.ObjectId())

const currentDate = new Date(Date.now())

export const users = [
  {
    _id: userIds[0],
    firstName: "Kerry",
    lastName: "Chow",
    email: "kerry_chow@hotmail.ca",
    password: "$2b$10$3uRVjeV1bWEBpHQ4DkWYDOr3hK.dAnT4hdDFF3J6qFk/BcjIQGuoC",
    picturePath: "p-kerry.jpeg",
    friends: [],
    location: "Vancouver",
    occupation: "Software Engineer",
    viewedProfile: 1337,
    impressions: 13337,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "John",
    lastName: "McNeil",
    email: "john_mcneil@gmail.com",
    password: "$2b$10$3uRVjeV1bWEBpHQ4DkWYDOr3hK.dAnT4hdDFF3J6qFk/BcjIQGuoC",
    picturePath: "p10.jpeg",
    friends: [],
    location: "New York",
    occupation: "Journalist",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Jessica",
    lastName: "Ramos",
    email: "jessica_ramos@gmail.com",
    password: "$2b$10$3uRVjeV1bWEBpHQ4DkWYDOr3hK.dAnT4hdDFF3J6qFk/BcjIQGuoC",
    picturePath: "p1.jpeg",
    friends: [],
    location: "Edmonton",
    occupation: "High School Teacher",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Tiffany",
    lastName: "Smith",
    email: "tiffany_smith@gmail.com",
    password: "$2b$10$3uRVjeV1bWEBpHQ4DkWYDOr3hK.dAnT4hdDFF3J6qFk/BcjIQGuoC",
    picturePath: "p2.jpeg",
    friends: [],
    location: "San Jose",
    occupation: "Musician",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Rahim",
    lastName: "Sandhu",
    email: "rahim_sandhu@gmail.com",
    password: "$2b$10$3uRVjeV1bWEBpHQ4DkWYDOr3hK.dAnT4hdDFF3J6qFk/BcjIQGuoC",
    picturePath: "p3.jpeg",
    friends: [],
    location: "Burnaby",
    occupation: "CEO of None-of-ur-Business",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
];

export const posts = [
  {
    _id: postIds[0],
    userId: userIds[0],
    firstName: "Kerry",
    lastName: "Chow",
    location: "Vancouver",
    description: "Welcome to Socialio!",
    picturePath: "post4.jpeg",
    userPicturePath: "p-kerry.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      commentIds[2]
    ],
  },
  {
    _id: postIds[1],
    userId: userIds[1],
    firstName: "John",
    lastName: "McNeil",
    location: "New York",
    description:
      "My first post!",
    picturePath: "post2.jpeg",
    userPicturePath: "p10.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[2], true],
      [userIds[3], true],
    ]),
    comments: [
      commentIds[4]
    ],
  },
  {
    _id: postIds[2],
    userId: userIds[2],
    firstName: "Jessica",
    lastName: "Ramos",
    location: "Edmonton",
    description:
      "My first post!",
    picturePath: "post1.jpeg",
    userPicturePath: "p1.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[2], true],
      [userIds[3], true],
    ]),
    comments: [
    ],
  },
  {
    _id: postIds[3],
    userId: userIds[3],
    firstName: "Tiffany",
    lastName: "Smith",
    location: "San Jose",
    description:
      "Blah blah blah, yummy!",
    picturePath: "post2.jpeg",
    userPicturePath: "p2.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[2], true],
      [userIds[3], true],
    ]),
    comments: [
      commentIds[3]
    ],
  },
  {
    _id: postIds[4],
    userId: userIds[4],
    firstName: "Rahim",
    lastName: "Sandhu",
    location: "Burnaby",
    description:
      "Congratulations to my bestfriend!",
    picturePath: "post8.jpeg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[2], true],
      [userIds[3], true],
    ]),
    comments: [
      commentIds[0],
      commentIds[1]
    ],
  },
];

export const comments = [
  {
    _id: commentIds[0],
    userId: userIds[0],
    firstName: "Kerry",
    lastName: "Chow",
    userPicturePath: "p-kerry.jpeg",
    postId: postIds[4],
    likes: new Map([
      [userIds[4], true],
    ]),
    description: "They look amazing!",
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    _id: commentIds[1],
    userId: userIds[3],
    firstName: "Tiffany",
    lastName: "Smith",
    userPicturePath: "p2.jpeg",
    postId: postIds[4],
    likes: new Map([
      [userIds[4], true],
    ]),
    description: "Majestic!",
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    _id: commentIds[2],
    userId: userIds[4],
    firstName: "Rahim",
    lastName: "Sandhu",
    userPicturePath: "p3.jpeg",
    postId: postIds[0],
    likes: new Map([
      [userIds[0], true],
    ]),
    description: "Welcome everyone!",
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    _id: commentIds[3],
    userId: userIds[2],
    firstName: "Jessica",
    lastName: "Ramos",
    userPicturePath: "p1.jpeg",
    postId: postIds[3],
    likes: new Map([
      [userIds[3], true],
    ]),
    description: "Looks delicious!",
    createdAt: currentDate,
    updatedAt: currentDate,
  },
  {
    _id: commentIds[4],
    userId: userIds[3],
    firstName: "Tiffany",
    lastName: "Smith",
    userPicturePath: "p2.jpeg",
    postId: postIds[1],
    likes: new Map([
      [userIds[1], true],
    ]),
    description: "Looking forward to more posts!",
    createdAt: currentDate,
    updatedAt: currentDate,
  },
]