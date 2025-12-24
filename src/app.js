import "./view/pages/home-page";

import { Router } from "@vaadin/router";

const bodyElement = document.querySelector(".outlet");

const router = new Router(bodyElement);

router.setRoutes([{ path: `/`, component: "home-page" }]);

export { router };
