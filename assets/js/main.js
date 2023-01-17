const icon = document.querySelector('#theme-icon');

icon.addEventListener('click', () => {
    const section = document.querySelector('section');
    if(icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        section.classList.add('dark');
        return
    }
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    section.classList.remove('dark');
});