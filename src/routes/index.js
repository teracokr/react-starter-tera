
import * as React from "react";
import { Route, Routes } from 'react-router-dom';

// 일반적인 import
import Layout from '../layouts/Layout'; 
import GoogleCallback from "../auth/GoogleCallback";

// 성능을 위해 
// 불필요한 코드 불러오지 않게. 
// Lazy Loading 적용
const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/Login"));
const MyPage = React.lazy(() => import("../pages/MyPage"));
const About = React.lazy(() => import("../pages/About"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<React.Suspense fallback={<>...</>}><Home /></React.Suspense>}/>
        <Route path="/about" element={<React.Suspense fallback={<>...</>}><About /></React.Suspense>}/>
      </Route>
      <Route path="/login" element={<React.Suspense fallback={<>...</>}><Login /></React.Suspense>}/>
      <Route path="/mypage" element={<React.Suspense fallback={<>...</>}><MyPage /></React.Suspense>}/>
      <Route path="/api/auth/google/callback" element={<GoogleCallback />}/>
      <Route path="*" element={<React.Suspense fallback={<>...</>}><NotFound /></React.Suspense>}/>
    </Routes>
  );
};

export default MyRouter;