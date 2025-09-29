document.addEventListener('DOMContentLoaded', () => {
  const years = document.querySelectorAll('.timeline-years li');
  const items = document.querySelectorAll('.timeline-item');
  const prevBtn = document.querySelector('.timeline-btn.prev');
  const nextBtn = document.querySelector('.timeline-btn.next');
  const track = document.querySelector('.timeline-track');

  let activeIndex = 0;

  function updateTimeline(index) {
    years.forEach((el, i) => el.classList.toggle('active', i === index));
    items.forEach((el, i) => el.classList.toggle('active', i === index));

    activeIndex = index;

    prevBtn.disabled = activeIndex === 0;
    nextBtn.disabled = activeIndex === years.length - 1;

    const li = years[index];
    const trackWidth = track.offsetWidth;
    const liCenter = li.offsetLeft + li.offsetWidth / 2;

    let scrollPos = liCenter - trackWidth / 2;

    scrollPos = Math.max(0, Math.min(scrollPos, track.scrollWidth - trackWidth));

    track.scrollTo({
      left: scrollPos,
      behavior: 'smooth'
    });
  }

  // Click on years
  years.forEach((year, index) => {
    year.addEventListener('click', () => updateTimeline(index));
  });

  // Prev button
  prevBtn.addEventListener('click', () => {
    if (activeIndex > 0) updateTimeline(activeIndex - 1);
  });

  // Next button
  nextBtn.addEventListener('click', () => {
    if (activeIndex < years.length - 1) updateTimeline(activeIndex + 1);
  });

  // Initialize timeline
  updateTimeline(0);
});
