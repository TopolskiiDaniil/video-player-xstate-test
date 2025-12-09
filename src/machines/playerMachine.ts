import { createMachine, assign } from "xstate";

export const playerMachine = createMachine(
  {
    id: "player",
    initial: "closed",
    context: {
      playing: false,
    },
    states: {
      closed: {
        entry: "pause",
        on: {
          PLAY: {
            target: "opened",
            actions: "play",
          },
        },
      },

      opened: {
        on: {
          CLOSE: "closed",
          MINIMIZE: "mini",
          PLAY: { actions: "play" },
          PAUSE: { actions: "pause" },
        },
      },

      mini: {
        on: {
          EXPAND: "opened",
          CLOSE: "closed",
          PLAY: { actions: "play" },
          PAUSE: { actions: "pause" },
        },
      },
    },
  },
  {
    actions: {
      play: assign({ playing: () => true }),
      pause: assign({ playing: () => false }),
    },
  }
);
