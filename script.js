function search() {
    const champion = document.getElementById('search').value
    console.log(champion)
    const url = `http://ddragon.leagueoflegends.com/cdn/12.10.1/data/pt_BR/champion/${champion}.json`



    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(post => {
            response = post.data[champion];
            console.log(response);
            document.getElementById('search').value = ''
            document.body.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg')`
            document.getElementById('name').innerHTML = response.name + ', ' + response.title
            document.getElementById('loretxt').innerHTML = response.lore
            document.getElementById('passiveName').innerHTML = response.passive.name
            document.getElementById('passiveDesc').innerHTML = response.passive.description
            document.getElementById('skillQName').innerHTML = response.spells[0].name
            document.getElementById('skillQDesc').innerHTML = response.spells[0].description
            document.getElementById('skillWName').innerHTML = response.spells[1].name
            document.getElementById('skillWDesc').innerHTML = response.spells[1].description
            document.getElementById('skillEName').innerHTML = response.spells[2].name
            document.getElementById('skillEDesc').innerHTML = response.spells[2].description
            document.getElementById('skillRName').innerHTML = response.spells[3].name
            document.getElementById('skillRDesc').innerHTML = response.spells[3].description
            document.getElementById('tags').innerHTML = 'Função: ' + response.tags[0]
            document.title = response.id + ', ' + response.title

        });
}

search()