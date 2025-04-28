

const container = document.getElementsByClassName("container").item(0);


function itensTabela(i){

    let itemTable = '';

    for(let j=1;j<=10;j++){
        itemTable = itemTable + "\n" + `
            <tr>
                <td>${i}x${j}</td>
                <td>${i*j}</td>
            </tr>
        `
    }

    return itemTable;
}

for(let i=1;i<=10;i++){

    container.innerHTML = container.innerHTML +  `
    <div class="table-box">
    <table border="1" class="table-item">
        <thead>
            <tr>
                <td style="font-weight: bold;" colspan="2">Produtos de ${i}</th>
            </tr>
        </thead>
        <tbody>
            ${itensTabela(i)}
        </tbody>
    </table>
    </div>
    `

    
    
}

