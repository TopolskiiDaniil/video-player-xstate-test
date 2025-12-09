import { createMachine } from "xstate";

export const playerMachine = createMachine({
  id: "player",
  initial: "closed",
  states: {
    closed: {
      on: {
        OPEN: "opened",
      },
    },
    opened: {
      on: {
        CLOSE: "closed",
        MINIMIZE: "mini",
      },
    },
    mini: {
      on: {
        EXPAND: "opened",
        CLOSE: "closed",
      },
    },
  },
});
