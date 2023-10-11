function scuberGreetingForFeet(rideDistance) {
  if (rideDistance <= 400) {
    return 'This one is on me!';
  } else if (rideDistance > 400 && rideDistance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (rideDistance > 2000 && rideDistance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(desiredCity) {
  return desiredCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tipLevel) {
  if (tipLevel === 'generous') {
    return 'Thank you so much.';
  } else if (tipLevel === 'not as generous') {
    return 'Thank you.';
  } else {
    return 'Bye.';
  }
  
}