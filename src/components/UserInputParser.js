import { menus } from './InterfaceMenus'

export const parseUserInput = (msg) => {
  let menuKeys = Object.keys(menus);

  // Match user to the enum of possible menu options
  for (let i = 0; i < menuKeys.length; i++) {
    if (msg === menuKeys[i]) {
      return menus[menuKeys[i]].value
    }
  }
  return false;
}
