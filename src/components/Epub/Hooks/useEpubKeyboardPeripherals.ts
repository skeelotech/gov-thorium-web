import { useMemo } from "react";
import { IKeyboardPeripheralsConfig } from "@readium/navigator";
import { useIsScroll } from "@/hooks";
import { useObservableCondition } from "@/core/Hooks/useObservableCondition";
import { NavPeripheralType } from "@/helpers/peripherals";

export const useEpubKeyboardPeripherals = (): IKeyboardPeripheralsConfig => {
  const isScroll = useIsScroll();
  const noScroll = useObservableCondition(!isScroll);

  return useMemo(() => [
    { type: NavPeripheralType.progressForward,  keyCombos: [{ keyCode: 32,              suppressOnInteractiveElement: true, condition: noScroll }] },
    { type: NavPeripheralType.progressBackward, keyCombos: [{ keyCode: 32, shift: true, suppressOnInteractiveElement: true, condition: noScroll }] },
    { type: NavPeripheralType.moveRight,        keyCombos: [{ keyCode: 39,              suppressOnInteractiveElement: true, condition: noScroll }] },
    { type: NavPeripheralType.moveLeft,         keyCombos: [{ keyCode: 37,              suppressOnInteractiveElement: true, condition: noScroll }] },
    { type: NavPeripheralType.moveUp,           keyCombos: [{ keyCode: 38,              suppressOnInteractiveElement: true, condition: noScroll },
                                                            { keyCode: 33,              suppressOnInteractiveElement: true, condition: noScroll }] },
    { type: NavPeripheralType.moveDown,         keyCombos: [{ keyCode: 40,              suppressOnInteractiveElement: true, condition: noScroll },
                                                            { keyCode: 34,              suppressOnInteractiveElement: true, condition: noScroll }] },
    { type: NavPeripheralType.moveHome,         keyCombos: [{ keyCode: 36,              suppressOnInteractiveElement: true, condition: noScroll }] },
    { type: NavPeripheralType.moveEnd,          keyCombos: [{ keyCode: 35,              suppressOnInteractiveElement: true, condition: noScroll }] },
  ], [noScroll]);
};
