const date = new Date();
mes = date.getMonth();
dia = date.getDate();
ano = date.getFullYear();

switch (mes) {
	case 0:
		mes = "Janeiro";
		break;

	case 1:
		mes = "Fevereiro";
		break;

	case 2:
		mes = "Março";
		break;

	case 3:
		mes = "Abril";
		break;

	case 4:
		mes = "Maio";
		break;

	case 5:
		mes = "Junho";
		break;

	case 6:
		mes = "Julho";
		break;

	case 7:
		mes = "Agosto";
		break;

	case 8:
		mes = "Setembro";
		break;

	case 9:
		mes = "Outubro";
		break;

	case 10:
		mes = "Novembro";
		break;

	default:
		mes = "Dezembro";
		break;
}

hoje = dia + " de " + mes + " de " + ano;
// hoje = `${dia} de ${mes} de ${ano} `;

document.getElementById("data").innerHTML = hoje;
