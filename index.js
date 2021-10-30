


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

    
var firstIm = document.createElement("div");
firstIm.id ="firstImage"
document.body.appendChild(firstIm)
document.getElementById("firstImage").style.backgroundImage  = "url('assets/grass.png')";
document.getElementById("firstImage").style.backgroundSize = "200px";
document.getElementById("firstImage").style.backgroundRepeat = "repeat-x";
console.log(firstIm);
    

//     var firstImg = document.body;
//     firstImg.style.backgroundImage = "url('assets/grass.png')";
//    firstImg.style.backgroundRepeat = "no repeat";
//    var width = window.innerWidth / 2;
//    console.log(''+width +'px') ;
//    firstImg.height='5px';
   //document.body.style.backgroundSize = ''+width +'px';
   
   //document.body.style.backgroundPosition = 'bottom right'

