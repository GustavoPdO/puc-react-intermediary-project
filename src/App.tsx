import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import UserReview from './components/UserReview';
import { useDarkMode } from './contexts/DarkModeContext';
import { getReviewList } from './services/faker';
import { UserReviewProps } from './Types';

function App() {
  const [reviewList, setReviewList] = useState<Array<UserReviewProps>>()
  const { colorMode } = useDarkMode()

  useEffect(() => {
    setReviewList(getReviewList())
  }, [])

  return (
    <main >
      <Header />
      <div className={`container primary-bg __${colorMode}`}>

      </div>
      <div className={`container secondary-bg __${colorMode}`}>
        <div className="review_list">
          {reviewList?.map(({ avatar, name, review }, index) => <UserReview key={`${name}-${index}`} avatar={avatar} name={name} review={review} />)}
        </div>
      </div>
    </main>
  );
}

export default App;

