import React from 'react';

export default function Comment({ data }) {
  return (
    <div className="comment">
      <img src={data.author.avatar} alt="Comment" />
      <p>
        <strong>{data.author.name}</strong>
        {data.content}
      </p>
    </div>
  );
}
