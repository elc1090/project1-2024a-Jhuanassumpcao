// Função para salvar os dados do formulário no localStorage ao digitar ou selecionar algo nos campos
function salvarDadosAutomaticamente() {
    localStorage.setItem('nomeAluno', document.getElementById('nomeAluno').value);
    localStorage.setItem('nomeAvaliador', document.getElementById('nomeAvaliador').value);
    localStorage.setItem('semestre', document.getElementById('semestre').value);
    localStorage.setItem('data', document.getElementById('data').value);
    localStorage.setItem('hora', document.getElementById('hora').value);
    localStorage.setItem('conteudoApresentacao', document.getElementById('conteudoApresentacao').value);
    localStorage.setItem('dominio', document.getElementById('dominio').value);
    localStorage.setItem('poderSintese', document.getElementById('poderSintese').value);
    localStorage.setItem('estrutura', document.getElementById('estrutura').value);
    localStorage.setItem('relOriQual', document.getElementById('relOriQual').value);
    localStorage.setItem('conhecimento', document.getElementById('conhecimento').value);
    localStorage.setItem('adequacao', document.getElementById('adequacao').value);
    localStorage.setItem('dataFim', document.getElementById('dataFim').value);
    localStorage.setItem('alterar', document.querySelector('input[name="alterar"]:checked')?.value || '');
    localStorage.setItem('subT3', document.getElementById('subT3').value);
    localStorage.setItem('subT7', document.getElementById('subT7').value);
    localStorage.setItem('total', document.getElementById('total').value);

}

// Função para preencher os campos do formulário com os dados salvos no localStorage ao carregar a página
function preencherDadosFormulario() {
    document.getElementById('nomeAluno').value = localStorage.getItem('nomeAluno') || '';
    document.getElementById('nomeAvaliador').value = localStorage.getItem('nomeAvaliador') || '';
    document.getElementById('semestre').value = localStorage.getItem('semestre') || '';
    document.getElementById('data').value = localStorage.getItem('data') || '';
    document.getElementById('hora').value = localStorage.getItem('hora') || '';
    document.getElementById('conteudoApresentacao').value = localStorage.getItem('conteudoApresentacao') || '';
    document.getElementById('dominio').value = localStorage.getItem('dominio') || '';
    document.getElementById('poderSintese').value = localStorage.getItem('poderSintese') || '';
    document.getElementById('estrutura').value = localStorage.getItem('estrutura') || '';
    document.getElementById('relOriQual').value = localStorage.getItem('relOriQual') || '';
    document.getElementById('conhecimento').value = localStorage.getItem('conhecimento') || '';
    document.getElementById('adequacao').value = localStorage.getItem('adequacao') || '';
    document.getElementById('dataFim').value = localStorage.getItem('dataFim') || '';
    document.getElementById('subT3').value = localStorage.getItem('subT3') || '';
    document.getElementById('subT7').value = localStorage.getItem('subT7') || '';
    document.getElementById('total').value = localStorage.getItem('total') || '';
    const alterarValue = localStorage.getItem('alterar');
    if (alterarValue !== null) {
        document.querySelector(`input[name="alterar"][value="${alterarValue}"]`).checked = true;
    }
}

// Adicione eventos de mudança para chamar a função de salvar automaticamente quando os campos do formulário forem alterados
document.getElementById('nomeAluno').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('nomeAvaliador').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('semestre').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('data').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('hora').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('conteudoApresentacao').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('dominio').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('poderSintese').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('estrutura').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('relOriQual').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('conhecimento').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('adequacao').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('dataFim').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('subT3').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('subT7').addEventListener('change', salvarDadosAutomaticamente);
document.getElementById('total').addEventListener('change', salvarDadosAutomaticamente);
document.querySelectorAll('input[name="alterar"]').forEach((input) => {
    input.addEventListener('change', salvarDadosAutomaticamente);
});

// Preencha os campos do formulário com os dados salvos ao carregar a página
document.addEventListener('DOMContentLoaded', preencherDadosFormulario);
