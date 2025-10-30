// Custom adjustments for WeBWorK iframe heights
document.addEventListener('DOMContentLoaded', () => {
  const heights = {
    'knowledge-check1-webwork': 900,
    'knowledge-check2-webwork': 500,
  };

  Object.entries(heights).forEach(([id, height]) => {
    const iframe = document.getElementById(id);
    if (iframe) {
      iframe.style.height = `${height}px`;
    }
  });
});
