function etsiRuokaa() {
    fetch('ruoka.json')
        .then(vastaus => vastaus.json())
        .then(series => {
            console.log(series);
            const app = document.getElementById('app');
            app.innerHTML = series.map(({name, price}) => `
<div class="container">
            <div>
               <h4>${name}</h4>
                    <h7>${price}</h7><br> 
               </div>
                 </div>
                 
`).join('');
        })
}

etsiRuokaa();