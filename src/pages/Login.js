const Login = () => {

  return (
    <>
      <div>로그인 페이지</div>
      <a href={`${process.env.REACT_APP_API_URL}/api/connect/google`}>구글로그인</a>
    </>
  )
};

export default Login;