import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>React Starter Kit 입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
      </ul>

    </div>
  );
};

export default Home;