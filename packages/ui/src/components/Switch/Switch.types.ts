import type { SwitchProps as HeadlessSwitchProps } from "@headlessui/react";

/** Extensible size map - To allow module augmentation */
export interface SwitchSizeMap {
  sm: unknown;
  md: unknown;
}

export interface SwitchProps extends Omit<HeadlessSwitchProps, "className"> {
  /**
   * The size of the switch.(default: 'md')
   * */
  size?: keyof SwitchSizeMap;

  /**
   * Class name for the switch.
   * */
  className?: string;
  /**
   * Style for the thumb of the switch.
   * */
  thumbClassName?: string;
}
