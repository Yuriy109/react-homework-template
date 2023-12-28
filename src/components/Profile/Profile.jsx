import user from '../../data/user.json';
import clsx from 'clsx';
import css from './Profile.module.css'

export const Profile = props => (
    <div className={css.container}>
    <div className={css.profile}>
      <div className={css.desc}>
        <img src={user.avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{user.username}</p>
        <p className={css.tag}>@{user.tag}</p>
        <p className={css.location}>{user.location}</p>
      </div>

      <ul className={css.ul}>
        <li className={css.li}>
          <span className="label">Followers </span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li className={css.li}>
          <span className="label">Views </span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li className={css.li}>
          <span className="label">Likes </span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  </div>
);
