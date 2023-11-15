import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children?: ReactNode;
};

const Card = ({ title, children }: Props) => {
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
