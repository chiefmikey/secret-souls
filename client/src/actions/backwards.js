let back = false;

export const goBack = (bool) => {
  back = bool;
};

export const isGoingBack = () => {
  return back;
};
