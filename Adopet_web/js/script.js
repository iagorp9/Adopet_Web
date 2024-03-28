function validar(){
	var nome = document.getElementById('nome').value;
	var especie = document.getElementById('especie').value;
	var raca = document.getElementById('raca').value;
	var idade = document.getElementById('idade').value;
	var descricao = document.getElementById('descricao').value;
	var sexo = document.getElementById('sexo').value;
	var alerta = document.getElementById('erro');
	
	if(nome.length<2){
		alerta.innerHTML = 'Preencha o nome corretamente';
		document.getElementById('nome').focus();
		document.getElementById('n').style.color = 'red';
		return false;
	}
	else if(especie.length<2){
		alerta.innerHTML = 'Preencha o nome da espécie corretamente';
		document.getElementById('especie').focus();
		document.getElementById('e').style.color = 'red';
		return false;
	}
	else if(raca.length<3){
		alerta.innerHTML = 'Preencha o nome da raça corretamente';
		document.getElementById('raca').focus();
		document.getElementById('r').style.color = 'red';
		return false;
	}
	else if(idade.length<1){
		alerta.innerHTML = 'Preencha a idade corretamente';
		document.getElementById('idade').focus();
		document.getElementById('i').style.color = 'red';
		return false;
	}
	else if(descricao.length<10){
		alerta.innerHTML = 'Preencha a descrição corretamente';
		document.getElementById('descricao').focus();
		document.getElementById('d').style.color = 'red';
		return false;
	}
	else if(sexo=='vazio'){
		alerta.innerHTML = 'Selecione um Sexo';
		document.getElementById('s').style.color = 'red';
		return false;
	}
	else{
		alert("Animal cadastrado com sucesso");
	}
}
/* contato */
function validar2(){
	var nome = document.getElementById('nome').value;
	var email = document.getElementById('email').value;
	var mensagem = document.getElementById('mensagem').value;
	var alerta = document.getElementById('erro');
	
	if(nome.length<2){
		alerta.innerHTML = 'Preencha o nome corretamente';
		document.getElementById('nome').focus();
		document.getElementById('n').style.color = 'red';
		return false;
	}
	if(email.length<4){
		alerta.innerHTML = 'Preencha o email corretamente';
		document.getElementById('email').focus();
		document.getElementById('e').style.color = 'red';
		return false;
	}
	 if(mensagem.length<3){
		alerta.innerHTML = 'escreve uma mensagem maior';
		document.getElementById('mensagem').focus();
		document.getElementById('m').style.color = 'red';
		return false;
	}
	else{
		alert("Mensagem enviada com sucesso");
	}
}
