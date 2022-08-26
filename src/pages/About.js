import { useSearchParams } from 'react-router-dom';

const About = () => {
  // URL 파라미터 읽기
  const [searchParams, setSearchParams] = useSearchParams();
  const id_token = searchParams.get('id_token');
  const access_token = searchParams.get('access_token');

  return (
    <div>
      <h1>About</h1>
      <p>간단한 React 테스용 템플릿입니다.</p>
      <p>id_token: {id_token}</p>
      <p>access_token: {access_token}</p>
    </div>
  );
};

export default About;