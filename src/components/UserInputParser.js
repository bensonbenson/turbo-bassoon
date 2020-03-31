import { menus, hiddenMenus, getCommandList } from './InterfaceMenus'

// Count the amount of `staredown` commands
let stareDownCount = 0;

export const parseUserInput = (msg) => {
  let menuKeys = Object.keys(menus);
  let hiddenMenuKeys = Object.keys(hiddenMenus);
  let cleanedMsg = userInputCleaner(msg);

  // Empty message
  if (cleanedMsg === "") {
    return "Cannot do anything with an empty command."
  }

  // Show command list
  // Try some variations of "commands" just in case
  if (cleanedMsg === "commands" || cleanedMsg === "command" || cleanedMsg === "commandlist") {
    return getCommandList();
  }

  if ((cleanedMsg === "staredown")) {
    return stareDownHandler(menuKeys, hiddenMenuKeys);
  }

  // Match user to the enum of possible menu options
  for (let i = 0; i < menuKeys.length; i++) {
    if (cleanedMsg === menuKeys[i]) {
      return menus[menuKeys[i]].value
    }
  }
  return false;
}

const userInputCleaner = (msg) => {
  return msg.replace(/ /g, '').toLowerCase();
}

  // Count the amount of staredowns, if the amount of stares reaches 5, return a secret message
  const stareDownHandler = (menuKeys, hiddenMenuKeys) => {
    if (stareDownCount  < 5) {
      stareDownCount++;
      return menus[menuKeys[0]].value
    }
    if (stareDownCount >= 5) {
      return hiddenMenus[hiddenMenuKeys[0]].value
    }
  }
