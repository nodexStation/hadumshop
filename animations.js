// HADUM — GSAP reveals + hero intro. Progressive enhancement only:
// content is never hidden in CSS, so if GSAP fails the page is static but complete.
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.gsap) return;

  gsap.from('[data-hero]', {
    y: 26, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, clearProps: 'all'
  });

  var cards = document.querySelectorAll('.float-card');
  if (cards.length) {
    gsap.to(cards, { y: -8, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 0.5 });
  }

  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.reveal').forEach(function (el) {
      gsap.from(el, {
        y: 28, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
  }
})();
