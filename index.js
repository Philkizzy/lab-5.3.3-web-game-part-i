function newimage(x,s,l,b) {
    x= document.createElement('img')
    x.src = s
    x.style.position = 'fixed'
    x.style.left = l
    x.style.bottom = b
    document.body.append(x)
}
let greenCharacter
newimage(greenCharacter, 'assets/green-character.gif','100px', '100px')
let pinetree
newimage(pinetree,'assets/pine-tree.png','450px','200px')
let tree
newimage(tree,'assets/tree.png','200px','300px')
let pillar
newimage(pillar,'assets/pillar.png','350px','100px')
let crate
newimage(crate,'assets/crate.png','150px','200px')
let well
newimage(well,'assets/well.png','500px','425px')

function newitem(x,s,l,b){
    x= document.createElement('img')
    x.src = s
    x.style.position = 'fixed'
    x.style.left = l
    x.style.bottom = b
    document.body.append(x)
    x.addEventListener('dblclick',function(){
    x.remove()
    })
}
let sword
newitem(sword,'assets/sword.png','500px','405px')
let shield
newitem(shield,'assets/sheild.png','165px','185px')
let staff
newitem(staff,'assets/staff.png','600px','100px')
