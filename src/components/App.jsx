
import { Profile } from '../components/Profile/Profile';
import { Statistics } from '../components/Statistics/Statistics';

import data from '../data/data.json';

import friends from '../data/friends.json'
import { FriendList, FriendListItem } from './FriendList/FriendList';

import transactions from '../data/transactions.json';
import { TransactionHistory } from './Transactions/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile></Profile>
      <br />
      <br />
      <br />
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
};
