import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [avatar, setAvatar] = useState('https://www.verdantis.com/wp-content/uploads/2016/04/noimg.jpg')
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      setAvatar(user.avatar);
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>React Starter Kit 입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <Link to="/logout">로그아웃</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">로그인</Link>
          </li>
        )}
        <li><img src={avatar} width={80} height={80}/></li>
      </ul>
    </div>
  );
};

export default Home;