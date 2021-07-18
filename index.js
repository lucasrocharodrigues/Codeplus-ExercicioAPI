import api from './api.js'

const config = {
    method: 'GET',
    url: 'products.json',
    data: null
}

api(config, productList => {
    console.log(productList)
});

//Neste exercício você deve imprimir na UL ".product-list" produtos seguindo o layout no README do gitbub: https://i.imgur.com/EbVlWpX.png
//Deve incluir a soma dos produtos
//O botão finalizar compra deve ter o href de "/checkout"
