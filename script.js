function setupHoverGroup(ids) {
  const items = ids.map((id) => document.getElementById(id)).filter(Boolean);

  function hasActiveItem() {
    return items.some((item) => item.classList.contains('active'));
  }

  function setHoverStyles(isHover) {
    items.forEach((item) => {
      item.style.backgroundColor = isHover ? '#555555' : '';
      item.style.color = isHover ? 'white' : '';
    });
  }

  items.forEach((item) => {
    item.addEventListener('pointerenter', () => {
      if (!hasActiveItem()) setHoverStyles(true);
    });
    item.addEventListener('pointerleave', () => {
      if (!hasActiveItem()) setHoverStyles(false);
    });
  });
}

function setupNavToggle() {
  const nav = document.querySelector('ul');
  const toggle = document.getElementById('navToggle');
  if (!nav || !toggle) return;

  let collapsed = false;

  function updateToggleButton() {
    if (collapsed) {
      toggle.classList.add('small');
      toggle.textContent = '';
      toggle.setAttribute('aria-label', 'Open navigation');
    } else {
      toggle.classList.remove('small');
      toggle.textContent = 'Hide';
      toggle.setAttribute('aria-label', 'Hide navigation');
    }
  }

  toggle.addEventListener('click', () => {
    collapsed = !collapsed;
    nav.classList.toggle('collapsed', collapsed);
    updateToggleButton();
  });

  updateToggleButton();
}

setupHoverGroup(['lihome', 'ahome']);
setupHoverGroup(['liresources', 'aresources']);
setupHoverGroup(['lieducation', 'aeducation']);
setupNavToggle();

