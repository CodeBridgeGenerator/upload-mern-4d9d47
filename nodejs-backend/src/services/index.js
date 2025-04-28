
const studentDetails = require("./studentDetails/studentDetails.service.js");
const tickets = require("./tickets/tickets.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    
  app.configure(studentDetails);
  app.configure(tickets);
    // ~cb-add-configure-service-name~
};
