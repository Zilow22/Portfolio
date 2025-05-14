
// 3. Back to top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.id = 'back-to-top';
backToTop.style.cssText = `
  position: fixed; bottom: 20px; right: 20px; display: none;
  background: #0077cc; color: white; border: none; padding: 10px 15px;
  border-radius: 5px; cursor: pointer; z-index: 1000;
`;
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

document.getElementById('changeTextBtn').addEventListener('click', function() {
  document.getElementById('demo').innerHTML = '';
});
