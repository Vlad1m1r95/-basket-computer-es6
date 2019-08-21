class Search {
  constructor(id){
    this.$el = document.getElementById(id)
    console.log(this.$el)
    this.init()
  }
  init(){
    this.$el.addEventListener('click' ,searchHandler.bind(this))
  }
}

 const searchHandler = () => {

   
  const $valuesearch = document.getElementById('val-search')
 
  const $select =  document.getElementById('search-select')
  const $inputmodel =  document.getElementById('search-model')
  const $inputrum =  document.getElementById('search-rum')
  const $tbody = document.getElementById('body-item')
  const $tr =  $tbody.children

  
  
  const $valinputs =  $valuesearch.children
  
    let arrformdata = []
     for (let  input of $valinputs) {
       
      arrformdata.push(input.value.toUpperCase())
        
      //  inputdata  =   [$valinputs[0].value, $valinputs[1].value,$valinputs[n-1].value]
     
     
      
     }
     
     
    let arrtrdata = []
  for (let value of $tr){
     const item = value
    
  //  const string = item.textContent.toString()
  //    console.log(string.indexOf('gtx 1050', 'nvidia')) 

      
      
      
     const td = value.children
      for (let value of td){
         
        arrtrdata.push(value.textContent)
        // for(i=0; i< td.length; i++){
        //   console.log(td)
        // }
         
         
         
          // if(value.textContent.toUpperCase() == $select.value.toUpperCase()   )  {
          //   value.style.color = 'green'
          //   item.style.display =  'table-row'
          //   break
          //  }
          //  else  {
          //   item.style.display =  'none'
          //  }
           
      }
       
      let tdarray = ['', td[0].textContent.toUpperCase(),td[1].textContent.toUpperCase(),td[2].textContent.toUpperCase(),td[3].textContent.toUpperCase(),td[4].textContent.toUpperCase(),td[5].textContent.toUpperCase(),td[6].textContent.toUpperCase(),td[7].textContent.toUpperCase(),td[8].textContent.toUpperCase(),td[9].textContent.toUpperCase()]
    
    
      // const found = arrformdata.some(r=> tdarray.indexOf(r) >= 0)
       let part1 = tdarray.includes(arrformdata[0])
        let   part2 = tdarray.includes(arrformdata[1])
        let  part3 = tdarray.includes(arrformdata[2])
        let status  =  part1  &&  part2 && part3
        console.log(status)
        console.log(item)
       if(status == true){
         item.style.display =  'table-row'
        
        
       } else  {
        item.style.display =  'none'
       }
        
     
     
      
  }

  
  
}