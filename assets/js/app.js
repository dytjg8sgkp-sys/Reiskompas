
const vertrek=new Date('2026-07-18');
const dagen=Math.max(0,Math.ceil((vertrek-new Date())/86400000));
const c=document.getElementById('countdown');
if(c)c.textContent=`Nog ${dagen} dagen tot vertrek`;
