const { program } = require("commander");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const contactsAPI = {
  list: listContacts,
  get: getContactById,
  add: addContact,
  remove: removeContact,
};

async function invokeAction({ action, id, name, email, phone }) {
  if (!contactsAPI[action]) {
    console.warn("\x1B[31m Unknown action type!");
    return;
  }

  let result;
  if (action === "get" || action === "remove") {
    result = await contactsAPI[action](id);
  } else if (action === "add") {
    result = await contactsAPI[action](name, email, phone);
  } else {
    result = await contactsAPI[action]();
  }

  if (Array.isArray(result)) {
    console.table(result);
  } else {
    console.log(result);
  }
}

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse(process.argv);
const options = program.opts();

invokeAction(options);
