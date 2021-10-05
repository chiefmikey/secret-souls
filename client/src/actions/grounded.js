let grounded = true;

export const onGround = (bool) => {
  grounded = bool;
};

export const isGrounded = () => {
  return grounded;
};
