addSeasonField()
addRoundField()
addSubmitButton()
createTable()


function addSeasonField(){
    input = document.createElement('input');
    input.placeholder="Enter a Year";
    input.name="Season";
    input.classList.add("form-control");
    document.body.appendChild(input)
};

function addRoundField(){
    input = document.createElement('input');
    input.placeholder="Enter a Round";
    input.name="Round";
    input.classList.add("form-control");
    document.body.appendChild(input)
};

function addSubmitButton(){
    button = document.createElement("button");
    document.body.appendChild(button);
    button.innerText="Submit";
    button.classList.add('btn', 'btn-primary', "form-control");
    button.addEventListener('click', (event)=>handleSubmit(event) );
}

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log(event);
    let season = document.getElementsByName("Season")[0].value;
    let round = document.getElementsByName("Round")[0].value;
    getData(season, round);    
};

function createTable(){
    table=document.createElement('table');
    table.classList.add('table', 'table-primary', 'table-striped')
    document.body.appendChild(table)

    thead=document.createElement('thead');
    table.appendChild(thead)

    tr = document.createElement('tr');
    thead.appendChild(tr);

    th = document.createElement('th');
    th.innerText="First Name";
    th.scope="col";
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText="Last Name";
    th.scope="col";
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText="DOB";
    th.scope="col";
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText="Position";
    th.scope="col";
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText="Wins";
    th.scope="col";
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText="Nationality";
    th.scope="col";
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText="Constructor";
    th.scope="col";
    tr.appendChild(th);

    let tbody=document.createElement('tbody');
    table.appendChild(tbody);

};

let seasonInput = addSeasonField.input;
let roundInput = addRoundField.input;

async function getData(seasonInput, roundInput){
    let result = await axios.get(`https://ergast.com/api/f1/${seasonInput}/${roundInput}/driverStandings.json`)
        console.log(result)
        result = result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings

    let tbody=document.getElementsByTagName('tbody')[0];
    
    tbody.innerHTML = '';
    for(const driver of result){

    let tr=document.createElement('tr');
    tbody.appendChild(tr)

    td=document.createElement('th');
    td.scope='row';
    td.innerHTML=`${driver.Driver.givenName}`
    tr.appendChild(td);

    td=document.createElement('th');
    td.scope='row';
    td.innerHTML=`${driver.Driver.familyName}`
    tr.appendChild(td);

    td=document.createElement('th');
    td.scope='row';
    td.innerHTML=`${driver.Driver.dateOfBirth}`
    tr.appendChild(td);

    td=document.createElement('th');
    td.scope='row';
    td.innerHTML=`${driver.position}`
    tr.appendChild(td);

    td=document.createElement('th');
    td.scope='row';
    td.innerHTML=`${driver.wins}`
    tr.appendChild(td);

    td=document.createElement('th');
    td.scope='row';
    td.innerHTML=`${driver.Driver.nationality}`
    tr.appendChild(td);

    td=document.createElement('th');
    td.scope='row';
    td.innerHTML=`${driver.Constructors[0].constructorId}`
    tr.appendChild(td);
    }

};  