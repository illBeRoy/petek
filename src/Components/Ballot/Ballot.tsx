import React from 'react';
import style from './Ballot.module.css';
import { Textfit } from 'react-textfit';

export interface BallotProps {
  initials: string;
  footer: string;
}

export const Ballot = ({ initials, footer }: BallotProps) => {
  return (
    <div className={style.card}>
      <Textfit className={style.initials} mode="single">
        {initials}
      </Textfit>
      <p className={style.footer}>{footer}</p>
    </div>
  );
};
