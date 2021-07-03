import React from 'react';

interface PropsAvatar {
  name: string;
  img?: string;
  age: number;
}

const Avatar = (props: PropsAvatar) => {
  const { name, age } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      
    </div>
  );
}

export default Avatar;