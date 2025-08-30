(() => {
  const el = document.getElementById('ghost');
  const texts = ['(ﾉꈍoꈍ)ﾉ・ﾟ','(ﾉ—з—)ﾉ*:・ﾟ✧','(ﾉ◕ヮ◕)ﾉ:・ﾟ✧','(ﾉ•̀ω•́)ﾉ:・ﾟ✧','(ﾉ´∀`)ﾉ*:・ﾟ✧',
  '(ﾉʘᴗʘ)ﾉ:・ﾟ✧','(ﾉ•ᴗ•)ﾉ:・ﾟ','(ﾉ≧∀≦)ﾉ*:・ﾟ✧','(ﾉಠᴗಠ)ﾉ...','(ﾉ•_•) hmm','(•_•)...・ﾟ','(•ᴗ•)ﾉ hi','(ﾉ—.—)ﾉ'];
  let i = 0;

  function next() {
    i = (i + 1) % texts.length;
    el.textContent = texts[i];
  }

  el.addEventListener('click', next);
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); }
  });
})();
