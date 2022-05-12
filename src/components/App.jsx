import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import FriendList from '../components/FriendsList/FriendList';
import TransactionHistory from '../components/Transactions/TransactionHistory';

import User from '../resourses/user.json';
import filesData from '../resourses/data.json';
import friends from '../resourses/friends.json';
import transactions from '../resourses/transactions.json';

const titleText = 'Upload stats';

export default function App() {
  return (
    <div className="mainDiv">
      <Profile
        username={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        followers={User.stats.followers}
        views={User.stats.views}
        likes={User.stats.likes}
      />
      <Statistics data={filesData} title={titleText} />
      <FriendList data={friends} />
      <TransactionHistory data={transactions} />
    </div>
  );
}
