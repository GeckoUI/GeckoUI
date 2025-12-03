// eslint-disable-next-line @typescript-eslint/no-explicit-any -- ignore
export const getDataAttributes = (props: Record<string, any>) => {
  return Object.keys(props).reduce<Record<string, string>>((acc, key) => {
    if (key.startsWith("data-")) {
      acc[key] = props[key as `data-${string}`];
    }

    return acc;
  }, {});
};
