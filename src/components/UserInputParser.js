import { menus, hiddenMenus, getCommandList } from './InterfaceMenus'

// Count the amount of `staredown` commands
let stareDownCount = 0;

// (TODO) path to victory: 5x staredown, checkbassoon, ???
let gate = 0;

export const parseUserInput = (msg) => {
  let menuKeys = Object.keys(menus);
  let hiddenMenuKeys = Object.keys(hiddenMenus);
  let cleanedMsg = userInputCleaner(msg);

  // Try special cases before matching input to menu list
  switch (cleanedMsg) {
    // Empty message
    case "":
      return "Cannot do anything with an empty command."
    // Try some variations of "commands" for typos
    case "commands":
      return getCommandList();
    case "command":
      return getCommandList();
    case "commandlist":
      return getCommandList();
    // Staredown path
    case "staredown":
      return stareDownHandler(menuKeys, hiddenMenuKeys);
    case "clear":
      return "clear";
    default:
      break;
  }

  // Post 5x staredowns
  if (gate === 1) {
    for (let i = 0; i < hiddenMenuKeys.length; i++) {
      if (cleanedMsg === hiddenMenuKeys[i]) {
        return hiddenMenus[hiddenMenuKeys[i]].value
      }
    }
  } else {
    // Match user to the enum of possible regular menu options
    for (let i = 0; i < menuKeys.length; i++) {
      if (cleanedMsg === menuKeys[i]) {
        return menus[menuKeys[i]].value
      }
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
    gate++;
    console.log(gate)
    return hiddenMenus[hiddenMenuKeys[0]].value
  }
}
