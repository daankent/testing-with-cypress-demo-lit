import "./commands";
import "cypress-axe";

import { mount } from "cypress-ct-lit";

Cypress.Commands.add("mount", mount);
