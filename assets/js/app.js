const vertrek=new Date('2026-07-01T08:00:00');
function tick(){
 const d=Math.max(0,Math.floor((vertrek-new Date())/86400000));
 document.getElementById('count').textContent=`Nog ${d} dagen tot vertrek`;
}
tick();
