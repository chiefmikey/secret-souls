let wings = false;

export const hasWings = (bool: boolean) => {
  wings = bool;
};

export const canFly = () => {
  return wings;
};
