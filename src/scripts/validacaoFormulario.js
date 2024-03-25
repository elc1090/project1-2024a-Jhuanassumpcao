function validarFormulario() {
    
    const nomeAlunoValue = document.getElementById("nomeAluno").value;
    const nomeProfessorValue = document.getElementById("nomeAvaliador").value;
    var dataValue = document.getElementById("data").value;
    const horaValue = document.getElementById("hora").value;
    const semestreValue = document.getElementById("semestre").value;
  
    const conteudoApresentacao = document.getElementById("conteudoApresentacao").value;
    const dominio = document.getElementById("dominio").value;
    const poderSintese = document.getElementById("poderSintese").value;
    const subT3 = document.getElementById("subT3").value;
  
    const estrutura = document.getElementById("estrutura").value;
    const relOriQual = document.getElementById("relOriQual").value;
    const conhecimento = document.getElementById("conhecimento").value;
    const adequacao = document.getElementById("adequacao").value;

  
    var dataFim = document.getElementById("dataFim").value;
  
    const radios = document.getElementsByName("alterar");
    const selected = Array.from(radios).find(radio => radio.checked);

    $(".form-control").removeClass("error-field");
    // Verifica se algum campo obrigatório está vazio
    if (nomeAlunoValue === "" || nomeProfessorValue === "" || dataValue === "" || horaValue === "" || semestreValue === "" || conteudoApresentacao === "" || dominio === "" || poderSintese === "" || estrutura === "" || relOriQual === "" || conhecimento === "" || adequacao === "" || dataFim === "" || !selected) {
    // Limpa todos os campos com erro antes de destacar novamente
    $(".form-control").removeClass("error-field");

    let mensagem = "Por favor, preencha os seguintes campos:\n";
    if (nomeAlunoValue === "") {
        mensagem += "- Nome do Estudante\n";
        $("#nomeAluno").addClass("error-field");
    }
    if (nomeProfessorValue === "") {
        mensagem += "- Nome do Avaliador\n";
        $("#nomeAvaliador").addClass("error-field");
    }
    if (dataValue === "") {
        mensagem += "- Data\n";
        $("#data").addClass("error-field");
    }
    if (horaValue === "") {
        mensagem += "- Hora\n";
        $("#hora").addClass("error-field");
    }
    if (semestreValue === "") {
        mensagem += "- Semestre\n";
        $("#semestre").addClass("error-field");
    }
    if (conteudoApresentacao === "") {
        mensagem += "- Conteúdo da Apresentação\n";
        $("#conteudoApresentacao").addClass("error-field");
    }
    if (dominio === "") {
        mensagem += "- Domínio dos Recursos Didáticos\n";
        $("#dominio").addClass("error-field");
    }
    if (poderSintese === "") {
        mensagem += "- Utilização do Tempo e Poder de Síntese\n";
        $("#poderSintese").addClass("error-field");
    }
    if (estrutura === "") {
        mensagem += "- Estrutura do Trabalho\n";
        $("#estrutura").addClass("error-field");
    }
    if (relOriQual === "") {
        mensagem += "- Relevância, Originalidade e Qualidade do Conteúdo do Texto\n";
        $("#relOriQual").addClass("error-field");
    }
    if (conhecimento === "") {
        mensagem += "- Grau de Conhecimento Demonstrado no Trabalho Escrito\n";
        $("#conhecimento").addClass("error-field");
    }
    if (adequacao === "") {
        mensagem += "- Adequação da Bibliografia Apresentada\n";
        $("#adequacao").addClass("error-field");
    }
    if (dataFim === "") {
        mensagem += "- Data Final para entregar a cópia definitiva do Trabalho de Graduação\n";
        $("#dataFim").addClass("error-field");
    }
    if (!selected) {
        mensagem += "- O aluno deverá realizar alterações no Relatório Escrito?\n";
        $("input[name='alterar']").addClass("error-field");
    }

    alert(mensagem);
    return false;
    }
}