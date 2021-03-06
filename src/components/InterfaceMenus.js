export const getCommandList = () => {
  const menuKeys = Object.keys(menus);
  let commands = [];
  menuKeys.forEach(key => {
    commands.push(key)
  });

  return `List of commands: commands,${commands.toString()}`;
}

// TO-DO: multiple randomly generated responses for some commands
export const menus = {
  staredown: {
    value: "You stare down the text interface fiercely, nothing happens."
  },
  checkbassoon: {
    value: "doot doot"
  }
}

// Progress through the game with this gated menu
export const hiddenMenus = {
  toomanystares: {
    value: "Stop staring at me pls."
  },
  // After 5 staredowns
  checkbassoon: {
    value: "You feel a vibration coming from your bassoon."
  }
}
