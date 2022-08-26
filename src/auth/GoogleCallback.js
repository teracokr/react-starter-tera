import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const GoogleCallback = () => {
  const navigate = useNavigate();

  // 브라우저의 URL에서 쿼리파라미터를 읽어옴.
  const [searchParams, setSearchParams] = useSearchParams();
  const id_token = searchParams.get('id_token');
  const access_token = searchParams.get('access_token');


  // 계정 생성 요청 함수
  const getStrapiAuth = async (url, params) => {
    const response = await axios.get(url, { params });
    if (response.status === 200) {
      console.log(response.data.jwt)
      console.log(response.data.user) // id, displayName
      localStorage.setItem('accessToken', response.data.jwt)
      localStorage.setItem('tempId', response.data.user.email)
      response.data.user.displayName = response.data.user.username
      localStorage.setItem('user', JSON.stringify(response.data.user))  
      // 페이지로 이동하기
      navigate('/',  { replace: true} );

    } else {
      console.log('err');
      return <></>
    }
  }

  // Strapi에 계정 생성 요청
  // 이미 존재하면 정보 가져오기
  const url = `${process.env.REACT_APP_API_URL}/api/auth/google/callback`
  const params = {
    id_token: id_token,
    access_token: access_token
  };

  // 계정 생성 요청 
  getStrapiAuth(url, params);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      GoogleCallback
    </div>
  );
};

export default GoogleCallback;
