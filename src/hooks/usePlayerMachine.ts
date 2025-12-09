import { useMachine } from "@xstate/react";
import { playerMachine } from "../machines/playerMachine";

export const usePlayerMachine = () => useMachine(playerMachine);
