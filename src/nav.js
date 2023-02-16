export default function button() {
  const modal = document.getElementById('modal');

  (function createItem() {
    const btnCreateItem = document.getElementById('create-new-item');
    btnCreateItem.addEventListener('click', () => {
      modal.classList.add('active');
    });
  }());
}
