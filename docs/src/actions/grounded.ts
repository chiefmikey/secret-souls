let grounded = true;

export const onGround = (bool: boolean) => {
  grounded = bool;
};

export const isGrounded = () => {
  return grounded;
};
