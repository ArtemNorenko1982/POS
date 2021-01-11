export const isNull = (value: unknown) => value === null || value === undefined;

export const isStringNull = (value: string) =>
  isNull(value) || value.trim().length === 0;
