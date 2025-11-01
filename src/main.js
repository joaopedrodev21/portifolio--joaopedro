// Função para modo claro e escuro
const buttonToggle = document.getElementById('theme-toggle');
const bodyEl = document.body;
const currentTheme = localStorage.getItem('theme');
//Verifica o tema salvo no localStorage
if(buttonToggle){
    if(currentTheme === 'light'){
        bodyEl.classList.add('light-theme');
        buttonToggle.textContent = '☀️';
        buttonToggle.setAttribute('aria-pressed', 'true');
    }else{
        bodyEl.classList.remove('light-theme');
        buttonToggle.textContent = '🌙';
        buttonToggle.setAttribute('aria-pressed', 'false');
    }
}
//Adiciona o evento de clique ao botão
buttonToggle.addEventListener('click', () => {
    const isLight = !bodyEl.classList.contains('light-theme');
    bodyEl.classList.toggle('light-theme');
    if(isLight){
        localStorage.setItem('theme', 'light');
        buttonToggle.textContent = '☀️';
        buttonToggle.setAttribute('aria-pressed', 'true');
    }else{
        localStorage.setItem('theme', 'dark');
        buttonToggle.textContent = '🌙';
        buttonToggle.setAttribute('aria-pressed', 'false');
    }
})