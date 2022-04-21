describe("Landing Page Test 1", () => {
    beforeEach(() => {
        cy.viewport(1440, 800);
        cy.wait(1000);
        cy.visit("http://localhost:3000/");
        cy.wait(1000);
    });
    it("Successfully visits landing page", () => {
        cy.url().should("eq", "http://localhost:3000/");
        cy.wait(1000);
    });
});

describe("Landing Page Test 2", () => {
    beforeEach(() => {
        cy.viewport(1440, 800);
        cy.wait(1000);
        cy.visit("http://localhost:3000/");
        cy.wait(1000);
    });
    it("Successfully opens signup modal", () => {
        cy.get('[role="button"][href="#"]').click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:3000/#");
        cy.wait(1000);
    });
});

describe("Landing Page Test 3", () => {
    beforeEach(() => {
        cy.viewport(1440, 800);
        cy.wait(1000);
        cy.visit("http://localhost:3000/");
        cy.wait(1000);
    });
    it("Successfully signs up on matching passwords", () => {
        cy.get('[role="button"][href="#"]').click();
        cy.wait(1000);
        cy.get("#floatingInput2").type("Aakash");
        cy.wait(1000);
        cy.get("#floatingInput3").type("Naik");
        cy.wait(1000);
        cy.get("#floatingInput4").type("aakashnaik@gmail.com");
        cy.wait(1000);
        cy.get("#floatingPassword2").type("123aakash");
        cy.wait(1000);
        cy.get("#floatingPassword3").type("123aakash");
        cy.wait(1000);
        cy.get(".btn-success").click();
        cy.url().should("eq", "http://localhost:3000/#");
        cy.wait(1000);
    });
});

describe("Landing Page Test 4", () => {
    beforeEach(() => {
        cy.viewport(1440, 800);
        cy.wait(1000);
        cy.visit("http://localhost:3000/");
        cy.wait(1000);
    });
    it("Successfully displays validation messages", () => {
        cy.get("#userName").click();
        cy.wait(1000);
        cy.get(".container").click();
        cy.wait(1000);
        cy.get("form > :nth-child(2)").should("be.visible");
        cy.wait(1000);
        cy.get("#pwd").click();
        cy.wait(1000);
        cy.get(".container").click();
        cy.wait(1000);
        cy.get("form > :nth-child(4)").should("be.visible");
        cy.wait(1000);
    });
});

describe("Landing Page Test 5", () => {
    beforeEach(() => {
        cy.viewport(1440, 800);
        cy.wait(1000);
        cy.visit("http://localhost:3000/");
        cy.wait(1000);
    });
    it("Successfully logs in", () => {
        cy.get("#userName").type("kdudhe@gmail.com");
        cy.wait(1000);
        cy.get("#pwd").type("123kunal");
        cy.wait(1000);
        cy.get('[href="/StudentHomePage"]').click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:3000/StudentHomePage");
        cy.wait(1000);
    });
});

describe("Landing Page Test 6", () => {
    beforeEach(() => {
        cy.viewport(1440, 800);
        cy.wait(1000);
        cy.visit("http://localhost:3000/");
        cy.get("#userName").type("kdudhe@gmail.com");
        cy.wait(1000);
        cy.get("#pwd").type("123kunal");
        cy.wait(1000);
        cy.get('[href="/StudentHomePage"]').click();
        cy.wait(1000);
    });
    it("Successfully logs in and logs out", () => {
        cy.get(".profile-person-bg").click();
        cy.wait(1000);
        cy.get('.flex-column > [href="/"]').click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:3000/");
        cy.wait(1000);
    });
});

describe("Landing Page Test 7", () => {
    beforeEach(() => {
        cy.viewport(1440, 800);
        cy.wait(1000);
        cy.visit("http://localhost:3000/");
        cy.get("#userName").type("kdudhe@gmail.com");
        cy.wait(1000);
        cy.get("#pwd").type("123kunal");
        cy.wait(1000);
        cy.get('[href="/StudentHomePage"]').click();
        cy.wait(1000);
    });
    it("Successfully creates a blog post", () => {
        cy.get(".post-button-bg").click();
        cy.wait(1000);
        cy.get(":nth-child(1) > .mb-2").type("Hello");
        cy.wait(1000);
        cy.get(":nth-child(2) > .mb-2").type("Hello World");
        cy.wait(1000);
        cy.get(".btn-success").click();
        cy.wait(1000);
        cy.reload();
        cy.wait(1000);
        cy.get(":nth-child(3) > .col-2 > h4").should("be.visible");
        cy.wait(1000);
    });
});

describe("Landing Page Test 8", () => {
    beforeEach(() => {
        cy.viewport(1440, 800);
        cy.wait(1000);
        cy.visit("http://localhost:3000/");
        cy.get("#userName").type("kdudhe@gmail.com");
        cy.wait(1000);
        cy.get("#pwd").type("123kunal");
        cy.wait(1000);
        cy.get('[href="/StudentHomePage"]').click();
        cy.wait(1000);
    });
    it("Successfully opens resources page", () => {
        cy.get(":nth-child(4) > .btn").click();
        cy.wait(1000);
        cy.get('[href="/US"]').click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:3000/US");
        cy.wait(1000);
    });
});

describe("Landing Page Test 9", () => {
    beforeEach(() => {
        cy.viewport(1440, 800);
        cy.wait(1000);
        cy.visit("http://localhost:3000/");
        cy.get("#userName").type("kdudhe@gmail.com");
        cy.wait(1000);
        cy.get("#pwd").type("123kunal");
        cy.wait(1000);
        cy.get('[href="/StudentHomePage"]').click();
        cy.wait(1000);
    });
    it("Successfully opens dashboard", () => {
        cy.get(".ms-3 > :nth-child(2) > .btn").click();
        cy.wait(1000);
        cy.url().should("eq", "http://localhost:3000/Dashboard");
        cy.wait(1000);
        cy.get("tbody > :nth-child(1) > :nth-child(1)").should("be.visible");
        cy.wait(1000);
    });
});

describe("Landing Page Test 10", () => {
    beforeEach(() => {
        cy.viewport(1440, 800);
        cy.wait(1000);
        cy.visit("http://localhost:3000/");
        cy.get("#userName").type("kdudhe@gmail.com");
        cy.wait(1000);
        cy.get("#pwd").type("123kunal");
        cy.wait(1000);
        cy.get('[href="/StudentHomePage"]').click();
        cy.wait(1000);
    });
    it("Successfully opens user profile and displays user's name", () => {
        cy.get(".profile-person-bg").click();
        cy.wait(1000);
        cy.get('[href="/ProfileSettingsPage"]').click();
        cy.wait(1000);
        cy.get("#firstName").should("have.value", "Kunal");
        cy.wait(1000);
    });
});
