describe("Admin Functionality Page Test 1", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/AdminFunc");
    });
    it("Successfully visits admin functionality page", () => {
        cy.url().should("eq", "http://localhost:3000/AdminFunc");
    });
});

describe("Admin Functionality Page Test 2", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/AdminFunc");
        cy.wait(1000);
    });
    it("Visits add university page", () => {
        cy.get(":nth-child(1) > .card > .card-body > .btn").click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:3000/AddUniversity");
    });
});

describe("Admin Functionality Page Test 3", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/AdminFunc");
        cy.wait(1000);
    });
    it("Visits add programs page", () => {
        cy.get(":nth-child(3) > .card > .card-body > .btn").click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:3000/AddPrograms");
    });
});

describe("Admin Functionality Page Test 4", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/AdminFunc");
        cy.wait(1000);
    });
    it("Visits delete university page", () => {
        cy.get(":nth-child(7) > .card > .card-body > .btn").click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:3000/DeleteUniversity");
    });
});

describe("Admin Functionality Page Test 5", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/AdminFunc");
        cy.wait(1000);
    });
    it("Visits home page", () => {
        cy.get(".navbar-brand").click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:3000/");
    });
});
