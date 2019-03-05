const express = require('express');
const app = express();

const  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))

app.get('/test', (req, res)=>{
    res.end("ini get XI RPL");
});

app.post('/test', (req, res)=>{
    res.end("ini post XI RPL");
});

app.get('/siswa/:nama', (request, response)=>{
    let namaSiswa = request.params.nama;
    response.end("menampilkan nama siswa "+ namaSiswa);
});

app.post('/siswa', (request, response)=>{
    let namaSiswa = request.body.nama;
    let alamat = request.body.address;
    response.end("menampilkan nama siswa "+ namaSiswa +", yang beralamat di "+ alamat);
});

app.delete('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    response.end("id" + id +"telah dihapus, atas nama siswa "+ namaSiswa);
});

app.put('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    let alamat = request.body.address;
    response.end("Siswa dengan id "+ id + "telah dihapus");
});

app.listen('8080', (e)=>{
    console.log(e);
});