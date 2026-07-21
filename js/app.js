function show(id){document.querySelectorAll('main section').forEach(s=>s.hidden=true);document.getElementById(id).hidden=false;}
const data={Receptie:'Inchecken, informatie en hulp.',Zwembad:'Garden Pool en Splash Pool.',Supermarkt:'Dagelijkse boodschappen en bakkerij.',Restaurant:'Meerdere restaurants en bars.',Sportcentrum:'Fitness, padel, tennis en minigolf.',Strand:'Direct bereikbaar vanaf de camping.'};
function info(k){details.textContent=data[k]||k;}
