import css from './FriendList.module.css';

import clsx from 'clsx';

export const FriendList = ({ friends }) => (
  <ul className={css.ul}>
    <FriendListItem friends={friends} />
  </ul>
);

export const FriendListItem = ({ friends }) => {
  return friends.map(item => {
    return (
      <li className={css.li}>
        <span className={item.isOnline ? css.green : css.rot}></span>
        <img
          className={css.img}
          src={item.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.p}>{item.name}</p>
      </li>
    );
  });
};
