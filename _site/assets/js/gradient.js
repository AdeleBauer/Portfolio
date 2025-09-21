  let i = 0;
  setInterval(() => { document.documentElement.style.setProperty('--color', `hsl(${i/2}, 100%, 50%)`);
    i = (i + 1) % 720;
  }, 50); // Change every 100ms (adjust speed as needed)