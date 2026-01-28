import React from "react";

const commentData = [
  {
    name: "sumit singh",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "sumit singh",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "sumit singh",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [
              {
                name: "sumit singh",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: [
                  {
                    name: "sumit singh",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [],
                  },
                  {
                    name: "sumit singh",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "sumit singh",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "sumit singh",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [],
          },
          {
            name: "sumit singh",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [],
          },
        ],
      },
    ],
  },
   {
    name: "sumit singh",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "sumit singh",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "sumit singh",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [
              {
                name: "sumit singh",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: [
                  {
                    name: "sumit singh",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [],
                  },
                  {
                    name: "sumit singh",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "sumit singh",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "sumit singh",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [],
          },
          {
            name: "sumit singh",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [],
          },
        ],
      },
    ],
  },
   {
    name: "sumit singh",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "sumit singh",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "sumit singh",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [
              {
                name: "sumit singh",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: [
                  {
                    name: "sumit singh",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [],
                  },
                  {
                    name: "sumit singh",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "sumit singh",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "sumit singh",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [],
          },
          {
            name: "sumit singh",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [],
          },
        ],
      },
    ],
  },
   {
    name: "sumit singh",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "sumit singh",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "sumit singh",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [
              {
                name: "sumit singh",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: [
                  {
                    name: "sumit singh",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [],
                  },
                  {
                    name: "sumit singh",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "sumit singh",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "sumit singh",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [],
          },
          {
            name: "sumit singh",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-5">
            <CommentsList key={index} comments={comment.replies} />
        </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
