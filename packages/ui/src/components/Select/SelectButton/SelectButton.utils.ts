import createLabel from "../../../utils/createLabel";
import isEqual from "../../../utils/isEqual";
import type { SelectOptionConfig } from "../SelectOption/SelectOption.types";

/**
 * Just a utility function that maintains the order of the selected values with the options provided in the dropdown.
 * */
export const sortMultiSelectValue = <T = unknown>(
  value: T[],
  options: SelectOptionConfig<T>[]
): SelectOptionConfig<T>[] => {
  const otherValues: T[] = [];
  const sortedValues: SelectOptionConfig<T>[] = [];

  value.forEach((v) => {
    const index = options.findIndex((o) => isEqual(o.value, v));

    if (index === -1) {
      otherValues.push(v);
    } else {
      sortedValues[index] = options[index];
    }
  });

  return [
    ...sortedValues.filter(Boolean),
    ...(otherValues.map((v) => ({
      value: v,
      label: createLabel(v),
      props: {}
    })) as SelectOptionConfig<T>[])
  ];
};
