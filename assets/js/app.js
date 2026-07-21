const d=Math.max(0,Math.ceil((new Date('2026-07-18')-new Date())/86400000));
document.getElementById('count').textContent=`Nog ${d} dagen tot vertrek`;