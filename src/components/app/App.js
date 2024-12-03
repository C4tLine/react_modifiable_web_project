import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';

import NotFoundPage from '../../pages/not-found-page/NotFoundPage';
import MainLayout from '../../layouts/main-layout/MainLayout';
import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePage';
// import ServiceDetailPage from '../../pages/service-detail-page/ServiceDetailPage';

const App = () => {
  return (<Theme preset={presetGpnDefault}>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.main} element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.service} element={<ServicePage />} />
          {/* <Route path={`${AppRoute.service}/:id`} element={<ServiceDetailPage />} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  </Theme>);
};

export default App;
