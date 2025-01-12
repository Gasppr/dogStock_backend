const produtoController = {
    async getAllProdutos(req, res) {

        let produtos = {
            produto1: { nome: "miojo", descricao: "Macarrão instântaneo", imagem: "insira sua url", valor: "3.00" },
            produto2: { nome: "miojo", descricao: "Macarrão instântaneo", imagem: "insira sua url", valor: "3.00" }
        }

        res.send(produtos);
    },


    async updateProduto(req, res) {

    },

    async createProduto(req, res) {
        
    },
    async deleteProduto(req, res) {
        
    }


}

module.exports = produtoController;