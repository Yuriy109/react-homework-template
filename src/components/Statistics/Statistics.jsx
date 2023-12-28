import user from '../../data/data.json';
import clsx from 'clsx';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={css.section}>
    {title && <h2 className={css.h2}>Upload stats</h2>}

    <ul className={css.ul}>
      <li className={css.li}>
        <span className="label">{stats[0].label} </span>
        <span className="percentage">{stats[0].percentage}</span>
      </li>
      <li className={css.li}>
        <span className="label">{stats[2].label} </span>
        <span className="percentage">{stats[2].percentage}</span>
      </li>
      <li className={css.li}>
        <span className="label">{stats[3].label} </span>
        <span className="percentage">{stats[3].percentage}</span>
      </li>
      <li className={css.li}>
        <span className="label">{stats[4].label} </span>
        <span className="percentage">{stats[4].percentage}</span>
      </li>
    </ul>
  </section>
);
