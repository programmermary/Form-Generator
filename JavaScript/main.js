const toggle = document.getElementById('togglePassword');
const input = document.getElementById('passwordInput');

input.addEventListener('input', () => {
if (input.value.length > 0) {
    toggle.style.display = 'inline-block';
} else {
    toggle.style.display = 'none';
    input.type = 'password';
    toggle.classList.add('fa-eye');
    toggle.classList.remove('fa-eye-slash');
}
});
toggle.addEventListener('click', () => {
    const type = input.type === 'password' ? 'text' : 'password';
    input.type = type;
    toggle.classList.toggle('fa-eye');
    toggle.classList.toggle('fa-eye-slash');
});