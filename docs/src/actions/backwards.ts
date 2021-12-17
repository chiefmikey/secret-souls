let back = false;

export const goBack = (bool: boolean) => {
  back = bool;
};

export const isGoingBack = () => {
  return back;
};
