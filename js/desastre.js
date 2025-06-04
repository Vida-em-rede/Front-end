const openSidebar = document.getElementById('openSidebar');
const closeSidebar = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');

openSidebar.addEventListener('click', () => {
  sidebar.classList.remove('hidden');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.add('hidden');
});