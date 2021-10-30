


function newImage(srcImage, leftValue, bottomValue){
let path = document.createElement('img')
path.src = srcImage
path.style.position = 'fixed'
path.style.left = leftValue
path.style.bottom = bottomValue
document.body.append(path)

}

function newItem(srcImage, leftValue, bottomValue){
let sword = document.createElement('img')
sword.src = srcImage
sword.position = 'fixed'
sword.left = leftValue
sword.bottom = bottomValue
document.body.append(sword)

sword.addEventListener('dblclick', function(){
    sword.remove()
})

}
    // invoke newImage function
newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

    // Invoke newItem function
    newItem('assets/sheild.png','165px','185px')
    newItem('assets/staff.png', '600px', '100px')

    

   

   
    
  

