describe("Add University Page Test 1", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/AddUniversity");
    });
    it("Successfully visits add university page", () => {
        cy.url().should("eq", "http://localhost:3000/AddUniversity");
    });
});

describe("Add University Page Test 2", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/AddUniversity");
    });
    it("Successfully writes to the form", () => {
        cy.get(":nth-child(2) > .col-xl-5 > .form-control").type(
            "University of Florida"
        );
        cy.wait(500);
        cy.get(":nth-child(3) > .col-xl-5 > .form-control").type(
            "https://www.ufl.edu/"
        );
        cy.wait(500);
        cy.get(":nth-child(5) > :nth-child(2) > .form-control").type(
            "Gainesville"
        );
        cy.wait(500);
        cy.get(".form-select").select("FL");
        cy.wait(500);
        cy.get(":nth-child(6) > :nth-child(2) > .form-control").type("32611");
        cy.wait(500);
        cy.get("form").submit();
        cy.wait(2000);
    });
});

describe("Add University Page Test 3", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/AddUniversity");
    });
    it("Successfully writes incorrect institute name", () => {
        cy.get(":nth-child(2) > .col-xl-5 > .form-control").type(
            "University of Florida123"
        );
        cy.wait(2000);
        cy.get(":nth-child(2) > .col-xl-5 > .invalid-feedback").contains(
            "Institute name cannot contain numbers or special characters besides space and &."
        );
    });
});

describe("Add University Page Test 4", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/AddUniversity");
    });
    it("Successfully writes incorrect website url", () => {
        cy.get(":nth-child(3) > .col-xl-5 > .form-control").type("ufl");
        cy.wait(2000);
        cy.get(":nth-child(3) > .col-xl-5 > .invalid-feedback").contains(
            "Please enter a valid website."
        );
    });
});

describe("Add University Page Test 5", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/AddUniversity");
    });
    it("Successfully writes incorrect city name", () => {
        cy.get(":nth-child(5) > :nth-child(2) > .form-control").type(
            "Gainesville123"
        );
        cy.wait(2000);
        cy.get(":nth-child(5) > :nth-child(2) > .invalid-feedback").contains(
            "City name cannot contain numbers or special characters besides space."
        );
    });
});

describe("Add University Page Test 6", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/AddUniversity");
    });
    it("Successfully writes incorrect zip code", () => {
        cy.get(":nth-child(6) > :nth-child(2) > .form-control").type("0");
        cy.wait(2000);
        cy.get(":nth-child(6) > :nth-child(2) > .invalid-feedback").contains(
            "Zip code cannot be less than 1."
        );
    });
});
