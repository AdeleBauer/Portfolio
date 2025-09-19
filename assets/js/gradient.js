  let i = 0;
  setInterval(() => { document.documentElement.style.setProperty('--color', `hsl(${i}, 100%, 50%)`);
    i = (i + 1) % 360;
  }, 100); // Change every 100ms (adjust speed as needed)