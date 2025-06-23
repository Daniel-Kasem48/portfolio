import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import posthog from 'posthog-js';

import './index.css'
import {routers} from "./routes.tsx";

posthog.init(
  'phc_PHGOM1sChg79Rn41sebnqZh6mWjS4g2i6DwEjRhQMBZ',
  {
    api_host: 'https://us.i.posthog.com',
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={routers}/>
);


