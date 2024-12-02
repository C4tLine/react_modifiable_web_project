import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import {Button} from "@consta/uikit/Button";
import {Attachment} from "@consta/uikit/Attachment";
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { Layout } from '@consta/uikit/Layout';
import {cnMixSpace} from "@consta/uikit/MixSpace";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';

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
      </Routes>
    </BrowserRouter>
  </Theme>);
};

export default App;
