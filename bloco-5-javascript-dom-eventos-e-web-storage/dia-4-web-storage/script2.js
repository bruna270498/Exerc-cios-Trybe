/* 
As pessoas devem ter o poder de alterar:
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte (Font family).
Essas preferências devem ser salvas de forma que, ao retornar à página, as 
preferências que foram previamente configuradas possam ser aplicadas na tela.
Bônus
As propriedades descritas acima são obrigatórias, mas você é livre para adicionar
qualquer outra propriedade que julgar válida e que tenha como objetivo a melhora 
da experiência da pessoa que lê em sua página.  */
const body = document.getElementsByTagName('body')

function corDeTela(cor){
    body = body.style.backgroundColor = cor;
    console.lod(body)

}