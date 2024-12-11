let isOn = false;

function Bulb() {
  const bulb = document.getElementById('bulb');
  isOn = !isOn;

  if (isOn) {
    bulb.classList.remove('red');
    bulb.classList.add('green');
  } else {
    bulb.classList.remove('green');
    bulb.classList.add('red');
  }
}

// Initialize with red color
document.getElementById('bulb').classList.add('red');