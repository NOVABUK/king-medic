// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    const setMenu = (open) => {
        mainNav.classList.toggle('open', open);
        menuToggle.setAttribute('aria-expanded', open);
        menuToggle.innerHTML = open
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    };

    menuToggle.addEventListener('click', () => {
        setMenu(!mainNav.classList.contains('open'));
    });

    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenu(false));
    });
}

// Appointment form -> WhatsApp (only runs on pages that have the form)
const form = document.getElementById('appointmentForm');

if (form) {
    const dateInput = document.getElementById('date');
    dateInput.min = new Date().toISOString().split('T')[0];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const service = form.service.value;
        const date = new Date(form.date.value).toLocaleDateString('en-GB', {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
        });
        const note = form.message.value.trim();

        let text =
            'Hello Kings Medic, I would like to request an appointment.\n\n' +
            'Name: ' + name + '\n' +
            'Phone: ' + phone + '\n' +
            'Service: ' + service + '\n' +
            'Preferred date: ' + date;

        if (note) text += '\nNote: ' + note;

        window.open('https://wa.me/2348127978318?text=' + encodeURIComponent(text), '_blank');
    });
}