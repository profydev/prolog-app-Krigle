import { version } from "../../package.json";

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  it("Should show the version number from package.json", () => {
    cy.get("footer").contains(`Version: ${version}`);
  });
});
