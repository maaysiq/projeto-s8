// passo-a-passo
// 1: Importar o JSON de músicas
// 2: Criar o metodo para buscar todas as músicas
// 3: Exportar o método

// ./ retornar arquivos ou pastas do mesmo diretorio
// ../ retorna arquivos ou pastas de um diretorio acima

const series = require('../model/series.json');

const getaAll = (req, res) => {
    console.log (req.url)
    res.status(200).send(series)
}

const getById = (req, res) => {
    const id = req.params.id

    const serieFiltrada = series.find((series) => {
        return series.id == id
    })
    res.status(200).send(serieFiltrada);

}

    module.exports = { getaAll, getById}