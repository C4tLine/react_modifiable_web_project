import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';

import NotFoundPage from '../../pages/not-found-page/NotFoundPage';
import MainLayout from '../../layouts/main-layout/MainLayout';
import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePage';
import ServiceDetailPage from '../../pages/service-detail-page/SeviceDetailPage';
import LoginPage from '../../pages/login-page/LoginPage';
import ProfilePage from '../../pages/profile-page/ProfilePage';


const App = () => {
  return (
  <Theme preset={presetGpnDefault}>
     <BrowserRouter>
      <Routes>
        <Route path={AppRoute.main} element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.service} element={<ServicePage />} />
          <Route path={AppRoute.detail} element={<ServiceDetailPage />} />
          <Route path={AppRoute.login} element={<LoginPage />} />
          <Route path={AppRoute.profile} element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
     </BrowserRouter>
  </Theme>);
};

export default App;
