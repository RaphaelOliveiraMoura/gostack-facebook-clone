import React from 'react';

import Comment from './Comment';

export default function Post({ data }) {
  return (
    <div className="post">
      <div className="profile">
        <img src={data.author.avatar} />
        <div className="description">
          <span>{data.author.name}</span>
          <p>{data.date}</p>
        </div>
      </div>
      <p>{data.content}</p>
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}
