// passo-a-passo
// 1: Importar o JSON de músicas
// 2: Criar o metodo para buscar todas as músicas
// 3: Exportar o método

// ./ retornar arquivos ou pastas do mesmo diretorio
// ../ retorna arquivos ou pastas de um diretorio acima

const musicas = require('../model/musicas.json');

const getAll = (req,res) =>{
    console.log(req.url);
    res.status(200).send(musicas);
}

const getById = (req, res) => {
    const id = req.params.id

    const musicaFiltrada = musicas.find((musica) =>{
        return musica.id == id
    })
    res.status(200).send(musicaFiltrada);
}

const getByArtist = (req, res) =>{
    const artista = req.params.artista
    const artistaFiltrado = musicas.filter((musica) => musica.artista == artista)

    res.status(200).send(artistaFiltrado);
}

const getAllArtist = (req, res) => {
    const artistas = musicas.map((musica) => musica.artista)

    res.status(200).send(artistas)
}

module.exports = { getAll, getById, getByArtist, getAllArtist}