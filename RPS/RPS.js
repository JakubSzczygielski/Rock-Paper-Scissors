let scissors = document.getElementById('chose1')
let rock = document.getElementById('chose2')
let paper = document.getElementById('chose3')
let result = document.getElementById('result')
let oponentsResult = document.getElementById('oponent')

let oponnent;

rock.addEventListener('click', function(){
    let num = Math.floor(Math.random()*3)
    
    if(num ==0){
        oponnent='Rock'  
    }else if(num==1){
        oponnent='Paper'
    }else{
        oponnent='Scissors'
    }
    oponentsResult.innerText=`Your oponent chose: ${oponnent}`
    console.log(oponnent)

    if(oponnent === 'Rock'){
        result.innerText = 'Tie!'
        result.style.color = 'black'
    }else if(oponnent==='Paper'){
        result.style.color = 'red'
        result.innerText = 'You Lost!'
    }else{
        result.innerText = 'You Won!'
        result.style.color = 'green'
    }
})

scissors.addEventListener('click', function(){
    let num = Math.floor(Math.random()*3)
    
    if(num ==0){
        oponnent='Rock'  
    }else if(num==1){
        oponnent='Paper'
    }else{
        oponnent='Scissors'
    }
    oponentsResult.innerText=`Your oponent chose: ${oponnent}`
    console.log(oponnent)
    
    if(oponnent === 'Rock'){
        result.style.color = 'red'
        result.innerText = 'You Lost!'
    }else if(oponnent==='Paper'){
        result.innerText = 'You Won!'
        result.style.color = 'green'
    }else{
        result.innerText = 'Tie!'
        result.style.color = 'black'
    }
})

paper.addEventListener('click', function(){
    let num = Math.floor(Math.random()*3)
    
    if(num ==0){
        oponnent='Rock'  
    }else if(num==1){
        oponnent='Paper'
    }else{
        oponnent='Scissors'
    }
    oponentsResult.innerText=`Your oponent chose: ${oponnent}`
    console.log(oponnent)
    if(oponnent === 'Rock'){
        result.innerText = 'You Won!'
        result.style.color = 'green'
    }else if(oponnent==='Paper'){
        result.innerText = 'Tie!'
        result.style.color = 'black'
    }else{
        result.style.color = 'red'
        result.innerText = 'You Lost!'
    }
})


