const assert = require("assert");
const app = require("../../src/app");

describe("tickets service", () => {
  let thisService;
  let ticketCreated;

  beforeEach(async () => {
    thisService = await app.service("tickets");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (tickets)");
  });

  describe("#create", () => {
    const options = {"name":"new value","ticketNo":"new value"};

    beforeEach(async () => {
      ticketCreated = await thisService.create(options);
    });

    it("should create a new ticket", () => {
      assert.strictEqual(ticketCreated.name, options.name);
assert.strictEqual(ticketCreated.ticketNo, options.ticketNo);
    });
  });

  describe("#get", () => {
    it("should retrieve a ticket by ID", async () => {
      const retrieved = await thisService.get(ticketCreated._id);
      assert.strictEqual(retrieved._id, ticketCreated._id);
    });
  });

  describe("#update", () => {
    let ticketUpdated;
    const options = {"name":"updated value","ticketNo":"updated value"};

    beforeEach(async () => {
      ticketUpdated = await thisService.update(ticketCreated._id, options);
    });

    it("should update an existing ticket ", async () => {
      assert.strictEqual(ticketUpdated.name, options.name);
assert.strictEqual(ticketUpdated.ticketNo, options.ticketNo);
    });
  });

  describe("#delete", () => {
  let ticketDeleted;
    beforeEach(async () => {
      ticketDeleted = await thisService.remove(ticketCreated._id);
    });

    it("should delete a ticket", async () => {
      assert.strictEqual(ticketDeleted._id, ticketCreated._id);
    });
  });
});