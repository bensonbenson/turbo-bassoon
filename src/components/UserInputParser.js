import { menus } from './InterfaceMenus'

export const parseUserInput = (msg) => {
  let menuKeys = Object.keys(menus);
  let cleanedMsg = userInputCleaner(msg);

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
