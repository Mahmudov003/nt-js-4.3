// 7. let players = [{name: 'Wes', position: 'WR'}, {name: 'Coty', position: 'QB'}, {name: 'Joe', position: 'WR'}];
// Berilgan o'yinchilar ro'yhatidan lavozimi WR bo'lganlarini qaytaring (Lavozim: position)
let players = [{name: 'Wes', position: 'WR'},
    {name: 'Coty', position: 'QB'},
    {name: 'Joe', position: 'WR'}];
function myFunc() {
    return players.filter(elem => elem.position =='WR')
}

console.log(myFunc(players))