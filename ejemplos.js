const express = require('express');
const app = express();
//SENDSTATUS
app.get('/ok', (req, res) => {
    // Enviará el código de estado 200 (OK)
    res.sendStatus(200); // El cliente recibirá: "200 OK"
});
app.get('/not-found', (req, res) => {
    // Enviará el código de estado 404 (Not Found)
    res.sendStatus(404); // El cliente recibirá: "404 Not Found"
});
app.get('/server-error', (req, res) => {
    // Enviará el código de estado 500 (Internal Server Error)
    res.sendStatus(500); // El cliente recibirá: "500 Internal Server Error"
});
//
//SET
app.get('/single-header', (req, res) => {
    // Configura el encabezado 'Content-Type' a 'text/plain'
    res.set('Content-Type', 'text/plain');
    res.send('Encabezado Content-Type configurado a text/plain');
});
app.get('/multiple-headers', (req, res) => {
    // Configura múltiples encabezados a la vez usando un objeto
    const Custom_header = req.get('Custom-Header');
    res.set({
        'Content-Type': 'application/json',
        'X-Powered-By': 'Express',
        'Custom-Header': 'Mi encabezado personalizado'
    });
    res.json({ mensaje: 'Encabezados múltiples configurados' } );
});
//
//STATUS
app.get('/success', (req, res) => {
    // Establece el código de estado en 200 (OK)
    res.status(200).send('Solicitud exitosa');
});

app.get('/404', (req, res) => {
    // Establece el código de estado en 404 (Not Found)
    res.status(404).send('Recurso no encontrado');
});
//
//TYPE
app.get('/html', (req, res) => {
    // Configura el encabezado Content-Type como 'text/html'
    res.type('html');
    res.send('<h1>Esto es HTML</h1>');
});
app.get('/json', (req, res) => {
    // Configura el encabezado Content-Type como 'application/json'
    res.type('json');
    res.send({ mensaje: 'Esto es un JSON' });
});
app.get('/texto', (req, res) => {
    // Configura el encabezado Content-Type como 'text/plain'
    res.type('txt');
    res.send('Esto es texto plano');
});
//
//VARY
app.get('/encoding', (req, res) => {
    // Configura el encabezado Vary para que dependa de 'Accept-Encoding'
    res.vary('Accept-Encoding');
    res.send('Esta respuesta varía según el encabezado Accept-Encoding');
});
///////////

