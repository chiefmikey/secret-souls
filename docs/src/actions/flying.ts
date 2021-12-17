let wings = false;

export const hasWings = (bool) => {
  wings = bool;
};

export const canFly = () => {
  return wings;
};
