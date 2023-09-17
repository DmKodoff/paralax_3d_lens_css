document.addEventListener('mousemove', (e) => {
  Object.assign(document.documentElement, {
    style: `
    --move-x: ${(e.clientX - window.innerHeight / 2) * -0.005}deg;
    --move-y: ${(e.clientY - window.innerWidth / 2) * 0.01}deg;
    `,
  })
})
