let input=document.querySelector('input')
let button=document.querySelector('button')
let result=document.querySelector('.content')



async function recipe(val){
    
    let res=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' +val)
    let data=await res.json()

    console.log(data.meals)
    data.meals.map((ele)=>{
        console.log(ele)
    
        let div=document.createElement('div')
        div.setAttribute("class",'each')
        div.innerHTML=`
        <img src="${ele.strMealThumb}">
        <div class="ss">
        <h2>${ele.strArea} <span>Dish Belongs to </span>${ele.strCategory}<span> Category</span></h2>

        
        </div>
        
        <button id="more">View recipe</button>

        `
        
        result.appendChild(div)



    })
   
}



button.addEventListener('click',(e)=>{
    e.preventDefault()
    recipe(input.value)
    input.value=' '

})