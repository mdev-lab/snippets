document.getElementById("btn").addEventListener('click',aggiungiPersona)

let elencoVoti = [{ nome: "Taffi Lorenzo", voto: 8 },
{ nome: "Micheletti Samuele", voto: 7 },
{ nome: "Talarico Vincenzo", voto: 8 }]

let table = document.querySelector("table")

function generaIntestazioneTabella(data) {
    let thead = table.createTHead()
    let row = thead.insertRow()

    for (let key in data) {
        let th = document.createElement("th")
        let text = document.createTextNode(key)

        th.appendChild(text)
        row.appendChild(th)
    }
}

function popolaTabella(data) {
    data.forEach(element => addRow(element))
}
function aggiungiPersona() {
    data = { nome: document.getElementById("persona").value, voto: document.getElementById("voto").value }
    addRow(data)
}
function addRow(data){
    let row = table.insertRow()
    for (let key in data) {
        let cell = row.insertCell()
        let text = document.createTextNode(data[key])
        cell.appendChild(text)
    }
}

generaIntestazioneTabella(elencoVoti[0])
popolaTabella(elencoVoti)
