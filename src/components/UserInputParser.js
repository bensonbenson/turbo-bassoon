import { menus, getCommandList } from './InterfaceMenus'

export const parseUserInput = (msg) => {
  let menuKeys = Object.keys(menus);
  let cleanedMsg = userInputCleaner(msg);

  // Show command list
  // Try some variations of "commands" just in case
  if (cleanedMsg === "commands" || cleanedMsg === "command" || cleanedMsg === "commandlist") {
    return getCommandList();
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
