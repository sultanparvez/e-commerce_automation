import { Then } from "@cucumber/cucumber";
import checkAuthError from "../../support/assertions/checkAuthError";

Then(/^an authentication error message should say "(.*)"$/, errorMessage => {
  checkAuthError(errorMessage);
});
