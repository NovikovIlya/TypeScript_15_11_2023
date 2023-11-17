import React, { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  onClick: React.Dispatch<React.SetStateAction<string | null>>;
};

const Link = ({ href, children, onClick }: Props) => {
  return (
    <div>
      <a onClick={()=>onClick(href)} href={href}>{children}</a>
    </div>
  );
};

export default Link;
