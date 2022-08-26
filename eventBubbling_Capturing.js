let gp = document.getElementById('grandParent');
let parent = document.getElementById('parent');
let child = document.getElementById('child');

gp.addEventListener('click',()=>{
    console.log('gp clicked');
},true);

parent.addEventListener('click',(e)=>{
    console.log('parent clicked');
     e.stopImmediatePropagation();
},true);

child.addEventListener('click',(e)=>{
    console.log('child clicked');
    e.stopPropagation();
},true)