import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import posthog from 'posthog-js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import './index.css'
import {routers} from "./routes.tsx";

posthog.init(
  'phc_PHGOM1sChg79Rn41sebnqZh6mWjS4g2i6DwEjRhQMBZ',
  {
    api_host: 'https://us.i.posthog.com',
  }
);

function MainApp() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
    });
  }, []);
  return <RouterProvider router={routers}/>;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <MainApp/>
);


