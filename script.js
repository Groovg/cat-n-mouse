function catMouse(x, j) {
  let dogIndex = x.indexOf("D");
  let catIndex = x.indexOf("C");
  let mouseIndex = x.indexOf("m");

  if (dogIndex < 0 || catIndex < 0 || mouseIndex < 0) {
    return "boring without all three";
  }

  let distanceToEscape = Math.abs(catIndex - mouseIndex);

  let isDogBetween =
    (dogIndex > catIndex && dogIndex < mouseIndex) ||
    (dogIndex > mouseIndex && dogIndex < catIndex);

  if (distanceToEscape <= j) {
    if (isDogBetween) {
      return "Protected!";
    } else {
      return "Caught!";
    }
  } else {
    return "Escaped!";
  }
}
