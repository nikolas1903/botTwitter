var twit = require('twit')
var config = require('./config.js')
const randomItem = require('random-item')
const schedule = require('node-schedule')
const frases = require('./frases')
var Twitter = new twit(config)

//Definindo um intervalo de tempo que o Bot vai rodar. No caso, é de uma em uma hora. 
//Para mudar a data, basta entrar em: https://crontab.guru/examples.html e ver qual a hora que quer colocar.
schedule.scheduleJob('0 * * * *', () =>{
// statuses/update é o método que envia um tweet. 
    Twitter.post('statuses/update',     
    {
//botei o randomItem nas frases, para elas serem aleatórias...
        status: randomItem (frases)    
    },
    function(err, data, response){
        console.log(data)
    })
})
