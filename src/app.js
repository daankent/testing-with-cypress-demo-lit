import "./view/pages/home-page";
import "./view/pages/koeken-page";

import { Router } from "@vaadin/router";

const bodyElement = document.querySelector(".outlet");

const router = new Router(bodyElement);

router.setRoutes([
  { path: `/`, component: "home-page" },
  { path: `/koeken`, component: "koeken-page" },
]);

export { router };
