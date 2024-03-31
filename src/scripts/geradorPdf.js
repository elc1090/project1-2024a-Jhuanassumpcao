document.getElementById("generatePdfBtn").addEventListener("click", function () {


    $('#generatePdfBtn').prop('disabled', true);
    $("#generatePdfBtn").addClass("disabled loading"); 
    $("#iconPdf").removeClass("fa-file-pdf");
    $("#iconPdf").addClass("rotate fa-circle-notch");

    // Create a new jsPDF instance
    const doc = new jspdf.jsPDF();
  
    doc.setFont('arial');
    doc.setFontSize(12);
    
    var img = 'public/img/cedula.jpg'
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    doc.addImage(img, "JPG", 0, 0, width, height);
  
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
    const subT7 = document.getElementById("subT7").value;
    const total = document.getElementById("total").value;
  
    var dataFim = document.getElementById("dataFim").value;
  
    const radios = document.getElementsByName("alterar");
    const selected = Array.from(radios).find(radio => radio.checked);
    if (!validateFields()) {
      return false;
  }

  
  
    y=106
    dataFim = formatarData(dataFim)
    dataValue = formatarData(dataValue)
  
    const conteudoPDF = `
      Aluno: ${nomeAlunoValue} 
      Professor: ${nomeProfessorValue}
      Data: ${dataValue}
      Hora: ${horaValue}
      Semestre: ${semestreValue}
      `;
  
    // Adicione o conteúdo ao PDF
    doc.text(conteudoPDF, 27, 60, 0);
  
    doc.text(conteudoApresentacao, 166, y, 0, );
    doc.text(dominio, 166, y+=7, 0, );
    doc.text(poderSintese, 166, y+=7, 0, );
    doc.text(subT3, 166, y+=7, 0, );
  
    doc.text(estrutura, 166, y+=16, 0, );
    doc.text(relOriQual, 166, y+=7, 0, );
    doc.text(conhecimento, 166, y+=7, 0, );
    doc.text(adequacao, 166, y+=7, 0, );
    doc.text(subT7, 166, y+=8, 0, );
    doc.text(total, 166, y+=8, 0, );
  
    doc.text(`O aluno deverá realizar alterações no relatório escrito? ${selected.value}.`, 32, 190, 0);
  
    doc.text(dataFim, 146, 237.9, 0);
  
  
    const canvas = document.getElementById("assinaturaCanvas");
    const imageData = canvas.toDataURL("image/png");
    doc.addImage(imageData, "PNG", 90, 200, 50, 20); // (image data, format, x, y, width, height)
  
  
    // Save the PDF
    doc.save("filled_form.pdf");
  });
  
  
  function formatarData(data) {
    return data.split('-').reverse().join('/');
  }
  
  function validateFields() {
    const requiredFields = [
        { field: "nomeAluno", message: "- Nome do Estudante" },
        { field: "nomeAvaliador", message: "- Nome do Avaliador" },
        { field: "data", message: "- Data" },
        { field: "hora", message: "- Hora" },
        { field: "semestre", message: "- Semestre" },
        { field: "conteudoApresentacao", message: "- Conteúdo da Apresentação" },
        { field: "dominio", message: "- Domínio dos Recursos Didáticos" },
        { field: "poderSintese", message: "- Utilização do Tempo e Poder de Síntese" },
        { field: "estrutura", message: "- Estrutura do Trabalho" },
        { field: "relOriQual", message: "- Relevância, Originalidade e Qualidade do Conteúdo do Texto" },
        { field: "conhecimento", message: "- Grau de Conhecimento Demonstrado no Trabalho Escrito" },
        { field: "adequacao", message: "- Adequação da Bibliografia Apresentada" },
        { field: "dataFim", message: "- Data Final para entregar a cópia definitiva do Trabalho de Graduação" },
        { field: "alterar", message: "- O aluno deverá realizar alterações no Relatório Escrito?" },
        { field: "assinaturaCanvas", message: "- Assinatura do Avaliador(a)" }
    ];

    let hasErrors = false;
    let mensagem = "Por favor, preencha todos os campos\n";

    $(".form-control").removeClass("error-field");
    $("#assinaturaCanvas").removeClass("error-field");
    $(".form-group").has('input[name="alterar"]').removeClass("error-field"); // Adiciona a classe de erro ao form-group

    let firstErrorElement = null;

    requiredFields.forEach(({ field, message }) => {
        const element = document.getElementById(field);
        if (element) {
            if (field === "assinaturaCanvas") {
                // Verifica se a assinatura foi feita
                const canvas = document.getElementById("assinaturaCanvas");
                const context = canvas.getContext("2d");
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
                const isEmpty = imageData.every(value => value === 0);
                if (isEmpty) {
                    $("#" + field).addClass("error-field");
                    hasErrors = true;

                    if (!firstErrorElement) {
                        firstErrorElement = element;
                    }
                }
            } else if (element.value.trim() === "") {
                $("#" + field).addClass("error-field");
                hasErrors = true;

                if (!firstErrorElement) {
                    firstErrorElement = element;
                }
            }
        }
    });

    const selectedRadio = document.querySelector('input[name="alterar"]:checked');
    if (!selectedRadio) {
        hasErrors = true;

        $(".form-group").has('input[name="alterar"]').addClass("error-field"); // Adiciona a classe de erro ao form-group
    }
    $("#iconPdf").removeClass("rotate fa-circle-notch");
    $("#iconPdf").addClass("fa-file-pdf");
    $('#generatePdfBtn').prop('disabled', false);
    $("#generatePdfBtn").removeClass("disabled loading");

    if (hasErrors) {
        alert(mensagem);
        
        // Rola a página até o primeiro campo com erro
        if (firstErrorElement) {
            firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        return false;
    }
    return true;
}
