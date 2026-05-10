document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const msgInput = document.getElementById('mensagem');
    const msgSucesso = document.getElementById('mensagem-sucesso');

    form.addEventListener('submit', (e) => {
        // Previne que a página recarregue ao clicar em enviar
        e.preventDefault(); 

        let isValido = true;

        // Limpa as mensagens de erro anteriores
        document.querySelectorAll('.erro-msg').forEach(el => el.textContent = '');

        // 1. Validação do Nome
        if (nomeInput.value.trim() === '') {
            document.getElementById('erro-nome').textContent = 'O campo de nome é obrigatório.';
            isValido = false;
        }

        // 2. Validação do E-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            document.getElementById('erro-email').textContent = 'O campo de e-mail é obrigatório.';
            isValido = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById('erro-email').textContent = 'O campo de e-mail deve estar em um formato válido (exemplo: usuario@dominio.com).';
            isValido = false;
        }

        // 3. Validação da Mensagem
        if (msgInput.value.trim() === '') {
            document.getElementById('erro-mensagem').textContent = 'O campo de mensagem é obrigatório.';
            isValido = false;
        }

        // 4. Simulação de Envio
        if (isValido) {
            // Exibe o feedback de sucesso visual
            msgSucesso.style.display = 'block';

            // Limpa os campos do formulário
            form.reset();

            // Esconde a mensagem de sucesso automaticamente após 5 segundos
            setTimeout(() => {
                msgSucesso.style.display = 'none';
            }, 5000);
        }
    });
});