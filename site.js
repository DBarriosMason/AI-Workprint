// Progressive enhancement: an index link reveals its corresponding native details element.
function revealWorkflow() {
  const id = window.location.hash.slice(1);
  const target = document.getElementById(id);
  if (target && target.classList.contains('workflow')) {
    const details = target.querySelector('details');
    details.open = true;
  }
}
window.addEventListener('hashchange', revealWorkflow);
document.querySelectorAll('.index a').forEach(link => link.addEventListener('click', () => {
  const target = document.getElementById(link.hash.slice(1));
  if (target) target.querySelector('details').open = true;
}));
revealWorkflow();
