import { useRef } from "react";

/**
 * Prevents the default action of the function passed to it.
 * It is useful when you want to prevent the default action of a function
 * You can simply pass the function to `attachPreventDefault` and it will prevent running the function
 * if you call `preventDefault` before it.
 * Make sure you also expose the `preventDefault` function to the user so they can call it when needed.
 *
 * @example
 * ```js
 * const { preventDefault, attachPreventDefault } = usePreventDefault();
 *
 * const onChange = () => {
 *   props.onChange({ preventDefault }); -> User can access preventDefault function
 *
 *   // You can attach whatever function you want to prevent here
 *   attachPreventDefault(() => {
 *    // Do something
 *    console.log("Prevented");
 *   });
 * };
 *
 * <MyComponent onChange={(e) => {
 *    e.preventDefault();
 *    // console.log("Prevented"); will not be called
 *    // because the function is attached to `attachPreventDefault`
 * }} />
 * ```
 * */
const usePreventDefault = () => {
  const preventAction = useRef(false);

  const preventDefault = () => (preventAction.current = true);

  const attachPreventDefault = async (fn: () => Promise<void> | void) => {
    if (preventAction.current) {
      preventAction.current = false;
      return;
    }

    await fn();
  };

  return { preventDefault, attachPreventDefault };
};

export default usePreventDefault;
