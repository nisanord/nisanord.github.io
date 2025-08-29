(() => {
  const el = document.getElementById('ghost');
  const texts = ['(ﾉꈍoꈍ)ﾉ:&#x30FB;&#xFF9F✧','(ﾉ—з—)ﾉ:&#x30FB;&#xFF9F✧','(ﾉ◕ヮ◕)ﾉ:&#x30FB;&#xFF9F;✧'];
  let i = 0;
  let busy = false;
  const prefersReduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function finish(){
    i = (i + 1) % texts.length;
    el.textContent = texts[i];
    el.classList.remove('is-out');
    busy = false;
  }

  function next(){
    if (busy) return;

    if (prefersReduced){
      finish();
      return;
    }

    busy = true;
    el.classList.add('is-out');

    const onEnd = () => {
      el.removeEventListener('transitionend', onEnd);
      finish();
    };
    el.addEventListener('transitionend', onEnd, { once: true });

    setTimeout(() => { if (busy){ el.removeEventListener('transitionend', onEnd); finish(); } }, 300);
  }

  el.addEventListener('click', next);
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); }
  });
})();
