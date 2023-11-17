import React, { ChangeEvent, ReactNode, useRef, useState } from 'react';
import Link from '../Link';
import { useAppDispatch, useAppSelector } from '../../redux';
import { actions } from '../../redux/reducet';

type Props = {
  title: string;
  children?: ReactNode;
};

const Card = ({ title, children }: Props) => {
  const dispatch = useAppDispatch()
  const [link, setLink] = useState<string | null>('');
  const [val,setVal] = useState('')
  const ref = useRef<HTMLDivElement>(null);
  const state = useAppSelector((state)=>state.counter.value)
  
  

  const click = () => {
    console.log(ref.current?.ATTRIBUTE_NODE);
  };

  const onInputChange = (e:ChangeEvent<HTMLInputElement>) =>{
    setVal(e.target.value)
    dispatch(actions.decrement(2))
  }
  
  return (
    <div>
      <input onChange={onInputChange}>ss</input>
      <div ref={ref}>{title}</div>
      <div>{children}</div>
      <Link href="ad" onClick={setLink}>
        Sad
      </Link>
    </div>
  );
};

export default Card;
