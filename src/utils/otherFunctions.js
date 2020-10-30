function transYtoIndex(transY, length) {
  let x = transY - 200;
  if (x > 0) {
    return 0;
  } else {
    x *= -1;
    if (Math.round(x / 100) > length - 1) {
      return length - 1;
    }
    return Math.round(x / 100);
  }
}

export {transYtoIndex};
