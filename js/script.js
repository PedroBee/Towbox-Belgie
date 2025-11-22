document.querySelector('.hamburger').addEventListener('click',()=>document.querySelector('.nav-menu').classList.toggle('active'));
document.querySelectorAll('.nav-menu a').forEach(l=>l.addEventListener('click',()=>document.querySelector('.nav-menu').classList.remove('active')));

function openModal(model=''){
    document.getElementById('modal').style.display='flex';
    if(model) document.querySelector('select').value=model;

}
function closeModal(){
    document.querySelectorAll('.modal').forEach(m=>m.style.display='none');
    document.body.style.overflow='auto';
}
document.getElementById('offerteForm').addEventListener('submit',e=>{
    e.preventDefault();
    closeModal();
    document.getElementById('thanksModal').style.display='flex';
});
window.addEventListener('click',e=>{if(e.target.classList.contains('modal'))closeModal();});
<script>
function openModal(type = 'offerte', preselectModel = '') {
    closeModal(); // sluit eerst alles

    if (type === 'huren') {
        const modal = document.getElementById('huurModal');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        if (preselectModel) {
            const select = modal.querySelector('select[name="type"]');
            if (select) select.value = preselectModel.includes('Pro') ? 'V3 Pro Zwart' : 'V3 Standaard Zwart';
        }
    } else {
        const modal = document.getElementById('unifiedModal');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        document.getElementById('modalTitle').textContent = type === 'kopen' ? 'Direct kopen' : 'Offerte aanvragen';
        document.getElementById('formType').value = type;
        document.getElementById('modelKeuze').style.display = type === 'kopen' ? 'block' : 'none';

        if (preselectModel) document.querySelector('#unifiedModal select[name="model"]').value = preselectModel;
    }
}

function closeModal() {
    document.getElementById('unifiedModal').style.display = 'none';
    document.getElementById('huurModal').style.display = 'none';
    document.getElementById('thanksModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Huurformulier → bedankmodal
document.getElementById('huurForm').addEventListener('submit', e => {
    e.preventDefault();
    closeModal();
    document.getElementById('thanksModal').style.display = 'flex';
});

// Particulier ↔ Bedrijf velden tonen/verbergen
function toggleBedrijf() {
    const isBedrijf = document.querySelector('input[name="klanttype"]:checked').value === 'bedrijf';
    const velden = document.getElementById('bedrijfVelden').querySelectorAll('input');
    velden.forEach(v => {
        v.disabled = !isBedrijf;
        v.required = isBedrijf;
    });
    document.getElementById('bedrijfVelden').style.display = isBedrijf ? 'block' : 'none';
}

// Sluit alle modals
function closeModal() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    document.body.style.overflow = 'auto';
}

// Form submit → bedankmodal
document.getElementById('unifiedForm').addEventListener('submit', function(e) {
    e.preventDefault();
    closeModal();
    document.getElementById('thanksModal').style.display = 'flex';

    // Hier kun je later Formspree / EmailJS / PHP koppelen
    console.log('Formulier verzonden:', Object.fromEntries(new FormData(this)));
});

// Sluit bij klik buiten modal
window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) closeModal();
});
</script>
// Toon winkelmandje zodra iemand een model kiest bij Kopen/Huren
function showCart() {
    document.getElementById('cartIcon').style.display = 'flex';
    document.getElementById('cartCount').textContent = '1'; // later uitbreidbaar naar meerdere
}

// Pas openModal aan (voeg dit toe in de functie)
function openModal(type = 'offerte', preselectModel = '') {
    // ... bestaande code ...

    // Toon winkelmand zodra iemand op Kopen of Huren klikt
    if (type === 'kopen' || type === 'huren') {
        showCart();
    }

    if (preselectModel) {
        document.querySelector('select[name="model"]').value = preselectModel;
        showCart(); // toon ook bij offerte vanuit card
    }
}op
// Zorgt dat klik op "Bekijk Modellen" in header direct naar producten scrollt
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Sluit mobiel menu
                document.querySelector('.nav-menu').classList.remove('active');
            }
        }
    });
});
<script>
// Zorgt dat alle links naar #producten direct scrollen (header + hero)
document.querySelectorAll('a[href="#producten"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#producten').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // Sluit mobiel menu als open
        document.querySelector('.nav-menu').classList.remove('active');
    });
});
</script>
function addToCart(model) {
    // Toon winkelmand direct
    document.getElementById('cartIcon').style.display = 'block';
    // Open modal met model
    openModal('kopen', model);
}
// FAQ Accordion – met wow-animatie
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});