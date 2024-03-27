function iniciarPrograma() {
    while (true) {
      const escolha = parseInt(prompt(`Escolha uma opção:\n1. Cadastrar Quarto\n2. Reservar Quarto\n3. Visualizar Reservas\n4. Buscar Reserva por ID\n5. Editar Reserva\n6. Cancelar Reserva\n7. Sair`));
  
      switch (escolha) {
        case 1:
          cadastrarQuarto();
          break;
        case 2:
          reservarQuarto();
          break;
        case 3:
          visualizarReservas();
          break;
        case 4:
          buscarReservaPorId();
          break;
        case 5:
          editarReserva();
          break;
        case 6:
          cancelarReserva();
          break;
        case 7:
          return;
        default:
          alert('Opção inválida. Tente novamente.');
      }
    }
  }
  
  // Função para cadastrar um novo quarto
  function cadastrarQuarto() {
    const numeroQuarto = prompt('Digite o número do quarto:');
    const tipo = prompt('Escolha o tipo do quarto:\n1. Simples\n2. Duplo\n3. Suíte');
  
    let descricaoTipo;
    switch (tipo) {
      case '1':
        descricaoTipo = 'Simples';
        break;
      case '2':
        descricaoTipo = 'Duplo';
        break;
      case '3':
        descricaoTipo = 'Suíte';
        break;
      default:
        alert('Opção inválida.');
        return;
    }
  
    const novoQuarto = { numeroQuarto, tipo: descricaoTipo, reservas: [] };
  
    // Obter quartos cadastrados da sessão do navegador
    let quartos = JSON.parse(sessionStorage.getItem('quartos')) || [];
    quartos.push(novoQuarto);
  
    // Armazenar quartos atualizados na sessão do navegador
    sessionStorage.setItem('quartos', JSON.stringify(quartos));
  
    alert('Quarto cadastrado com sucesso!');
  }
  
  // Função para reservar um quarto
  function reservarQuarto() {
    const numeroQuarto = prompt('Digite o número do quarto:');
    const data = prompt('Digite a data da reserva (Formato: YYYY-MM-DD):');
    const horario = prompt('Digite o horário da reserva (Formato: HH:MM):');
  
    const reserva = { data, horario };
  
    // Obter quartos cadastrados da sessão do navegador
    let quartos = JSON.parse(sessionStorage.getItem('quartos')) || [];
    
    // Encontrar o quarto pelo número
    const quarto = quartos.find(q => q.numeroQuarto === numeroQuarto);
  
    if (!quarto) {
      alert('Quarto não encontrado.');
      return;
    }
  
    // Verificar disponibilidade do quarto
    const disponivel = quarto.reservas.every(r => {
      return !(r.data === reserva.data && r.horario === reserva.horario);
    });
  
    if (!disponivel) {
      alert('Quarto não disponível nesse horário.');
      return;
    }
  
    quarto.reservas.push(reserva);
  
    // Armazenar quartos atualizados na sessão do navegador
    sessionStorage.setItem('quartos', JSON.stringify(quartos));
  
    alert('Quarto reservado com sucesso!');
  }
  
  // Função para listar todas as reservas
  function visualizarReservas() {
    const quartos = JSON.parse(sessionStorage.getItem('quartos')) || [];
    
    if (quartos.length === 0) {
      alert('Nenhuma reserva encontrada.');
      return;
    }
  
    let lista = 'Reservas:\n';
    quartos.forEach(quarto => {
      quarto.reservas.forEach((reserva, index) => {
        lista += `Quarto ${quarto.numeroQuarto}, Tipo: ${quarto.tipo}, Data: ${reserva.data}, Horário: ${reserva.horario}\n`;
      });
    });
  
    alert(lista);
  }
  
  // Função para buscar uma reserva específica pelo ID
  function buscarReservaPorId() {
    const id = parseInt(prompt('Digite o ID da reserva:'));
    const quartos = JSON.parse(sessionStorage.getItem('quartos')) || [];
  
    if (id <= 0) {
      alert('ID inválido.');
      return;
    }
  
    let count = 0;
    let encontrada = false;
    quartos.forEach(quarto => {
      quarto.reservas.forEach(reserva => {
        count++;
        if (count === id) {
          encontrada = true;
          alert(`Quarto ${quarto.numeroQuarto}, Tipo: ${quarto.tipo}, Data: ${reserva.data}, Horário: ${reserva.horario}`);
        }
      });
    });
  
    if (!encontrada) {
      alert('Reserva não encontrada.');
    }
  }
  
  // Função para editar uma reserva
  function editarReserva() {
    const id = parseInt(prompt('Digite o ID da reserva que deseja editar:'));
    const quartos = JSON.parse(sessionStorage.getItem('quartos')) || [];
  
    if (id <= 0) {
      alert('ID inválido.');
      return;
    }
  
    let count = 0;
    let encontrada = false;
    quartos.forEach(quarto => {
      quarto.reservas.forEach(reserva => {
        count++;
        if (count === id) {
          encontrada = true;
          const novaData = prompt('Digite a nova data da reserva (Formato: YYYY-MM-DD):');
          const novoHorario = prompt('Digite o novo horário da reserva (Formato: HH:MM):');
          
          reserva.data = novaData;
          reserva.horario = novoHor