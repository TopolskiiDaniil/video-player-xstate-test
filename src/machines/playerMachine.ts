import { createMachine, assign } from "xstate";

export const playerMachine = createMachine(
  {
    id: "player",
    initial: "closed",
    context: {
      playing: true,
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
          CLOSE: { target: "closed", actions: "pause" },
          MINIMIZE: "mini",
          PLAY: { actions: "play" },
          PAUSE: { actions: "pause" },
        },
      },

      mini: {
        on: {
          EXPAND: "opened",
          CLOSE: { target: "closed", actions: "pause" },
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
