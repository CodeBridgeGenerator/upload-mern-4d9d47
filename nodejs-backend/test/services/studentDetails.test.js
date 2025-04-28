const assert = require("assert");
const app = require("../../src/app");

describe("studentDetails service", () => {
  let thisService;
  let studentDetailCreated;

  beforeEach(async () => {
    thisService = await app.service("studentDetails");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (studentDetails)");
  });

  describe("#create", () => {
    const options = {"name":"new value","stuImage":"new value"};

    beforeEach(async () => {
      studentDetailCreated = await thisService.create(options);
    });

    it("should create a new studentDetail", () => {
      assert.strictEqual(studentDetailCreated.name, options.name);
assert.strictEqual(studentDetailCreated.stuImage, options.stuImage);
    });
  });

  describe("#get", () => {
    it("should retrieve a studentDetail by ID", async () => {
      const retrieved = await thisService.get(studentDetailCreated._id);
      assert.strictEqual(retrieved._id, studentDetailCreated._id);
    });
  });

  describe("#update", () => {
    let studentDetailUpdated;
    const options = {"name":"updated value","stuImage":"updated value"};

    beforeEach(async () => {
      studentDetailUpdated = await thisService.update(studentDetailCreated._id, options);
    });

    it("should update an existing studentDetail ", async () => {
      assert.strictEqual(studentDetailUpdated.name, options.name);
assert.strictEqual(studentDetailUpdated.stuImage, options.stuImage);
    });
  });

  describe("#delete", () => {
  let studentDetailDeleted;
    beforeEach(async () => {
      studentDetailDeleted = await thisService.remove(studentDetailCreated._id);
    });

    it("should delete a studentDetail", async () => {
      assert.strictEqual(studentDetailDeleted._id, studentDetailCreated._id);
    });
  });
});