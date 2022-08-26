import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header style={{ background: 'navy', padding: 16, fontSize: 24, color: 'white' }}>
        Tera Starter
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;