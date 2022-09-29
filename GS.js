function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,

        get: function () { //so para obter o valor e retornara como getter
            return estoquePrivado;
        },


        set: function (valor) { // aqui vou setar o valor,vou mexer no valor 

            if (typeof valor !== 'number') {
                throw new TypeError('noa é um numero ');
            }

            estoquePrivado = valor
        }
    });

}
// na function factory é assim 
function criaProduto(nome) {
    return {
        get nome() { //return nome 
            return nome;
        },

        set nome(valor) { //seta o nome 
            valor = valor.replace('coisa', ''); //para excluir coisa 
            nome = valor;
        }
    };
}

const p2 = criaProduto('camisetas');
p2.nome = 'qqer coisa '
console.log(p2.nome)
// const p1 = new Produto('camiseta', 20 ,3);
// // console.log(p1);
// p1.estoque = 'ksdbsahbd';
// console.log (p1.estoque);