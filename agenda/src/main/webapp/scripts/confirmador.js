/**
 * Confirmação0 de exclusão de um contato
 * @author Augusto Martins
 */
 
 function confirmar(idcon){
	let resposta = confirm("Confirma a exclusão deste contato ?")
	if (resposta === true){
		//alert(idcon)
		window.location.href = "delete?idcon=" + idcon
	}
}