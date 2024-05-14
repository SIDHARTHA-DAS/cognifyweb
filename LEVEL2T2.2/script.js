const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
