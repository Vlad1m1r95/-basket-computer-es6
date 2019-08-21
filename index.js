
// import {Search} from './search.js'
//Для импорта файла search.js придумал только такое решение, import/export у меня получался 
// только если использовать webpack
// function include(url) {
//   var script = document.createElement('script');
//   script.src = url;
//   document.getElementsByTagName('head')[0].appendChild(script);
// }
// include("search.js");

// Create && Render HTML 

const $body = document.querySelector('body')
           /*Create */

//all-product
const productdiv = document.createElement('div')
      productdiv.setAttribute('id', 'all-product')
//nav-button 
const divallproducts  = document.createElement('div')    
      divallproducts.setAttribute('id', 'nuv-button')
const buttonproducts     = document.createElement('button')
      buttonproducts.setAttribute('value', 'show')
      buttonproducts.classList.add('btn', 'btn-show')
      buttonproducts.innerHTML = 'Мои Компьютеры'      
      divallproducts.insertAdjacentElement('afterbegin', buttonproducts)
//form add-product
const formadd = document.createElement('form')
      formadd.setAttribute('id', 'add-product')
      formadd.classList.add('computer-add', 'hide')


//form change-product
const formchange = document.createElement('form')
      formchange.setAttribute('id', 'change-product')
      formchange.classList.add('computer-add', 'hide')

//more
const morediv = document.createElement('div')
      morediv.setAttribute('id', 'more')
      morediv.classList.add('hide')


//search
const searchform = document.createElement('div')
      searchform.setAttribute('id', 'search-form' )
      searchform.innerHTML = `
    <div id="val-search"  >
      <select type="text" id="search-select">
        <option>Radion</option>
        <option>Nvidia</option>
      </select>
      <input type="text" id="search-model" placeholder="модель видеокарты">
      <input type="number" id="search-rum" placeholder="Количество ОЗУ">
    
    </div><button id="search" class="btn">Найти</button>`  
      
    
      


const $el_morediv        = $body.insertAdjacentElement('afterbegin', morediv)
const $el_formchange     = $body.insertAdjacentElement('afterbegin', formchange)
const $el_formadd        = $body.insertAdjacentElement('afterbegin', formadd)
const $el_productdiv     = $body.insertAdjacentElement('afterbegin', productdiv )
const $el_divallproducts = $body.insertAdjacentElement('afterbegin', divallproducts)
const $el_search         = $body.insertAdjacentElement('afterbegin', searchform)


const $filter             = document.getElementById('search-form')







         

class Component {
  constructor(id) {
    this.$el = document.getElementById(id)
    this.init()

  }

  init() { }

  getname(){
    this.$el.getAttribute('name')
  }

  getid(){
    this.$el.getAttribute('id')
  }

  hide() {
    this.$el.classList.add('hide')
    this.onHide
  }

  show() {
    this.$el.classList.remove('hide')
    this.onShow()

  }

  onShow() { }
  onHide() { }
}


class Navbutton extends Component {
  constructor(id) {
    super(id)
  }
  init() {
   
    this.$el.addEventListener('click',  buttonHandler.bind(this))
   
    console.log(this.$el)

  }
}
let havediv = false
if(!havediv){
  function Productshow()  {

    $body.innerHTML = " "
    $body.insertAdjacentElement('afterbegin',  divallproducts , productdiv)
  
 

  console.log(document.querySelector('#all-product'))
havediv = true
}
}



class Products extends Component {
  constructor(id) {
    super(id)
  }
if(){

}
 
  init() {
      
     this.$el.addEventListener('click', buttonHandler.bind(this))

  console.log(document.querySelector('#all-product'))
   
  

  }

  async onShow() {
     
     this.$el.innerHTML = " "
     this.$el.innerHTML = `<table class="table-poduct" border="1" cellspacing="0"
    cellpadding="6">
    <thead>
        <tr>
             <td>Тип</td>
            <td> модель</td>
            <td>производитель</td>
            <td> процессор</td>
            <td>Количество ядер</td>
            <td>частота</td>
            <td> поддержка Hyper-Threading</td>
            <td> производитель видеокарты</td>
            <td>видеокарта</td>
            <td>оперативная память</td>
            </tr>
    </thead>
    <tbody id="body-item">
     
    </tbody>
    
      
    </table>
    <button class="btn btn-add" value="add">Добавить</button>`
    const tbody = this.$el.querySelector('#body-item')
    const fbData = await apiService.fetchComputer()
    const computers = TransformService.fbObjectToArray(fbData)
    let html = computers.map(computer => renderComputers(computer))

    tbody.innerHTML = " "
    tbody.innerHTML = html.join(' ')
  }
  isVisible() {
    if (products.$el.hasClass('visible')) {
      tbody.innerHTML = ''
    }
  }

}

class Moreinfo extends Component {
  constructor(id) {
    super(id)
  }
init(){
 
}
  async onShow() {
    let divname = this.$el.getAttribute('name')
    const fbData = await apiService.fetchMoreInfo()
    const computers = TransformService.fbObjectToArray(fbData)
    let html = computers.map(computer => renderMoreinfo(computer))

    this.$el.innerHTML = " "
    this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
    
    document.querySelectorAll('div[name] > ul[name]').forEach(n => {
      if (n.getAttribute('name') !== n.parentNode.getAttribute('name')) {
        n.remove();
        
      } else {
        
      }
    })
    


  }
}



const renderComputers = (computer) => {
  return ` 
  <tr id="data-id${computer.id}">
               <td>${computer.type}</td>
               <td>${computer.model}</td>
               <td>${computer.manufacturer}</td>
               <td>${computer.cpu}</td>
               <td>${computer.core}</td>
               <td>${computer.Hz}</td>
               <td>${computer.HT}</td>
               <td>${computer.cardmanufacturer}</td>
               <td>${computer.videocart}</td>
               <td>${computer.gpu}</td>
               <td id="${computer.id}">
               <button onclick="deleteData(event)" class="btn-red" title="удалить"  
               value="delete">X</button>
               <button  class="btn-green" title="изменить" onclick="linkHandler(event)"
               value="change">*</button> 

               <button  type='submit' id="${computer.id}"  class="btn-yellow" title="подробнее" onclick="linkHandler(event)"
               value="more">?</button> 
               </td>

               
               </tr>
           `

}
const renderMoreinfo =(computer) => {
    return `

  
      <ul name="${computer.id}">
      <h2>Описание продукта</h2>
     <li>Тип компьютера: ${computer.type}</li>
     <li>модель: ${computer.model}</li>
     <li>производитель: ${computer.manufacturer}</li>
     <li>процессор: ${computer.cpu}</li>
     <li>количество ядер: ${computer.core}</li>
     <li>частота: ${computer.Hz} Ггц</li>
     <li>поддержка технологии Hyper-Threading: ${computer.HT}</li>
     <li>производитель видеокарты: ${computer.videocart}</li>
     <li>оперативная память: ${computer.gpu} Gb</li>
     </ul>
  `  
}

//  function renderDataEddit(computer){
//    ` <div class="form-control">
//    <label>тип</label>
//    <select  name="type">
//       <option selected="selected">${computer.type}</option>
//       <option>Сервер</option>
//       <option>Ноутбук</option>
//    </select>
// </div>

// <div class="form-control">
//     <label>модель</label>
//     <input name="model" type="text">${computer.model} 
// </div>

// <div class="form-control">
//     <label>производитель</label>
//     <input name="manufacturer" type="text">${computer.manufacturer}
//  </div>

//  <div class="form-control">
//     <label>процессор</label>
//     <input  name="cpu" type="text">${computer.cpu}
//  </div>

//  <div class="form-control">
//     <label for="">Количество ядер</label>
//     <input name="core" type="text">${computer.core}
//  </div>

//  <div class="form-control">
//     <label for="">частота</label>
//     <input name="Hz" type="text">${computer.Hz}
//  </div>

//  <div class="form-control">
//     <label>поддержка Hyper-Threading</label>
//     <select name="HT" >
//        <option>да</option>
//        <option>нет</option>

//     </select>
//  </div>


//  <div class="form-control">
//     <label >видеокарта</label>
//     <input name="videocart" type="text">>${computer.cardmanufacturer}
//  </div>

//  <div class="form-control">
//     <label>производитель видеокарты</label>
//     <input name="cardmanufacturer" type="text">${computer.videocart}
//  </div>

//  <div class="form-control">
//     <label>оперативная память</label>${computer.gpu}
//     <input name="gpu" type="text">
//  </div>`

//  }





class AddProducts extends Component {
  constructor(id) {
    super(id)

    // this.form = null
  }
  init() {
    this.$el.addEventListener('submit', submitHandler.bind(this))

    this.form = new Form(this.$el, {
      model: [Validators.required],
      cpu: [Validators.required],
      core: [Validators.required],
      Hz: [Validators.required],
      HT: [],
      manufacturer: [Validators.required],
      videocart: [Validators.required],
      cardmanufacturer: [Validators.required],
      gpu: [Validators.required],



    })
  }
}

class changeProducts extends Component {
  constructor(id) {
    super(id)
  }
  init() {
    this.$el.addEventListener('submit', changeData.bind(this))
    this.form = new Form(this.$el, {
      model: [Validators.required],
      cpu: [Validators.required],
      core: [Validators.required],
      Hz: [Validators.required],
      HT: [Validators.required],
      manufacturer: [Validators.required],
      videocart: [Validators.required],
      cardmanufacturer: [Validators.required],
      gpu: [Validators.required],



    })
  }


}

class Computers extends Component {
  constructor(id) {
    super(id)
  }

  init() {



  }

}


//form

class Form {
  constructor(form, controls) {
    this.form = form
    this.controls = controls
  }

  value() {
    const value = {}
    Object.keys(this.controls).forEach(control => {
      value[control] = this.form[control].value
    })
    return value
  }

  clear() {
    Object.keys(this.controls).forEach(control => {
      this.form[control].value = ''
    })
  }

  isValid() {
    let isFormValid = true

    Object.keys(this.controls).forEach(control => {
      const validators = this.controls[control]
      

      let isValid = true
      validators.forEach(validator => {
        isValid = validator(this.form[control].value) && isValid  // true + false = false 
      })

      isValid ? clearError(this.form[control]) : setError(this.form[control])

      isFormValid = isFormValid && isValid
    })
    return isFormValid
  }

}

class Validators {
  static required(value = '') {
    return value && value.trim()
  }

}





// API Firebase


class ApiService {

  getid() {

  }
  constructor(baseUrl) {
    this.url = baseUrl
  }

  async createComputer(computer) {
    try {
      const request = new Request(this.url + '/computers.json', {
        method: 'post',
        body: JSON.stringify(computer)
      })
      return useRequest(request)
    } catch (error) {
      console.error(error)
    }
  }


  async changeComputer(computer, id) {
    try {
      const request = new Request(this.url + `/computers/${id}.json`, {
        method: 'PUT',
        body: JSON.stringify(computer)
      })
      return useRequest(request)

    } catch (error) {
      console.error(error)
    }
  }

  async fetchComputer() {
    try {

      const request = new Request(`${this.url}/computers.json`, {
        method: 'get'
      })
      return useRequest(request)

    } catch (error) {
      console.error(error)
    }
  }

  
  async fetchMoreInfo() {
    id = event.target.getAttribute('id')
    console.log(id)
    try {
      const request = new Request(this.url + `/computers.json`, {
        method: 'get',
      })
      return useRequest(request)

    } catch (error) {
      console.error(error)
    }
  }
}

const useRequest = async (request) => {
  const response = await fetch(request)
  return await response.json()

}

class TransformService {
  tbody = document.querySelector('#body-item')
  static fbObjectToArray(fbData) {
    if (fbData !== null) {
      return Object.keys(fbData).map(key => {
        const item = fbData[key]

        item.id = key
        return item
      })
    } else {
      return Object.keys(fbData = 0).map(key => {
        const item = fbData[key]
        item.id = key
        return item
      })
    }

  }

}

const apiService = new ApiService('https://homework1-vlad1m1r.firebaseio.com/')

class LoaderComponent extends Component {
  constructor(id) {
    super(id)
  }
}



const renderAddProduct  = () => {
  addProducts.$el.innerHTML = ''
  addProducts.$el.innerHTML = ` <h1>Добавить компьютер</h1>
  <div class="main">
      <div class="form-control">
          <label>тип</label>
          <select name="type">
             <option>Ноутбук</option>
             <option>Сервер</option>
          </select>
       </div>
       
       <div class="form-control">
           <label>модель</label>
           <input name="model" type="text"> 
       </div>
       
       <div class="form-control">
           <label>производитель</label>
           <input name="manufacturer" type="text">
        </div>
       
        <div class="form-control">
           <label>процессор</label>
           <input  name="cpu" type="text">
        </div>
       
        <div class="form-control">
           <label for="">Количество ядер</label>
           <input name="core" type="number" step="0.1">
        </div>
       
        <div class="form-control">
           <label for="">частота</label>
           <input name="Hz" type="number" step="0.1">
        </div>
       
        <div class="form-control">
           <label>поддержка Hyper-Threading</label>
           <select name="HT" >
              <option>да</option>
              <option>нет</option>

           </select>
        </div>
       
       
        <div class="form-control">
           <label >видеокарта</label>
           <input name="videocart" type="text">
        </div>
       
        <div class="form-control">
           <label>производитель видеокарты</label>
           <input name="cardmanufacturer" type="text">
        </div>
       
        <div class="form-control">
           <label>оперативная память</label>
           <input name="gpu" type="number" step="0.1">
        </div>
        
        <button type="submit" class="btn btn-save" value="save">Сохранить</button>`
}
const renderAddProductRemove = () => {
  addProducts.$el.innerHTML = ''
}
const renderChangeProduct = () => {
  changeProducts.$el.innerHTML = ''
  changeProducts.$el.innerHTML = ` <div class="main">
  <div class="form-control">
      <label>тип</label>
      <select name="type">
         <option selected="selected">Ноутбук</option>
         <option>Сервер</option>
      </select>
   </div>
   
   <div class="form-control">
       <label>модель</label>
       <input name="model" type="text"> 
   </div>
   
   <div class="form-control">
       <label>производитель</label>
       <input name="manufacturer" type="text">
    </div>
   
    <div class="form-control">
       <label>процессор</label>
       <input  name="cpu" type="text">
    </div>
   
    <div class="form-control">
       <label for="">Количество ядер</label>
       <input name="core" type="number" step="0.1">
    </div>
   
    <div class="form-control">
       <label for="">частота</label>
       <input name="Hz" type="number" step="0.1">
    </div>
   
    <div class="form-control">
       <label>поддержка Hyper-Threading</label>
       <select name="HT" >
          <option>да</option>
          <option>нет</option>

       </select>
    </div>
   
   
    <div class="form-control">
       <label >видеокарта</label>
       <input name="videocart" type="text">
    </div>
   
    <div class="form-control">
       <label>производитель видеокарты</label>
       <input name="cardmanufacturer" type="text">
    </div>
   
    <div class="form-control">
       <label>оперативная память</label>
       <input name="gpu" type="number" step="0.1">
    </div>
    
    <button type="submit" class="btn btn-save" value="change">Изменить</button>
</div>`
}

const renderChangeProductRemove = () => {
  changeProducts.$el.innerHTML = ''
}


const buttonHandler = (event) => {
  const $el = event.target

  switch ($el.value) {
    case 'show':
      const tbody = products.$el.querySelector('#body-item')
      products.show()
      addProducts
      $filter.style.display = 'block'
      
      
      
      
      renderAddProductRemove()
      changeProducts.hide()
      
     
      renderChangeProductRemove()
      moreinfo.hide()
      
      $body.insertAdjacentElement('afterbegin', morediv)
      $body.insertAdjacentElement('afterbegin', formchange)
      $body.insertAdjacentElement('afterbegin', formadd)
      $body.insertAdjacentElement('afterbegin', productdiv )
      $body.insertAdjacentElement('afterbegin', searchform)
      $body.insertAdjacentElement('afterbegin', divallproducts)
      
      break
    case 'eddit':
      $filter.style.display = 'none'
      products.hide()
     
      break
     
    case 'add':
      addProducts.show()
      products.hide()
      renderAddProduct()
      searchform.remove()
      $filter.style.display = 'none'
      $el_formchange.remove()
      $el_morediv.remove()
      $el_productdiv.remove()
      document.getElementById("val-search").style.display = 'none'
      break
  }
}

  const linkHandler = async (event, id, buttonid) => {
  $el = event.target
  this.id = id
  id = $el.parentElement.getAttribute('id')
 

  switch ($el.value) {

    case 'change':
        $filter.style.display = 'none'
      products.hide()
      changeProducts.show()
      renderChangeProduct()
      $el_formadd.remove()
      $el_productdiv.remove()
      $el_morediv.remove()
      searchform.remove()
     
      
      document.getElementById('change-product').setAttribute('name', id)
  
      await apiService.fetchMoreInfo(id)
      break
    case 'more':
      $filter.style.display = 'none'
      products.hide()
      $el_productdiv.remove()
      $el_formchange.remove()
      $el_formadd.remove()
      searchform.remove()
      
     
      moreinfo.show()
      td = this.$el.parentElement
      console.log()
      
      const divmore = document.querySelector('#more')
      let   idinfo  = divmore.setAttribute('name', id)
      break
  }



}




async function submitHandler   (event)  {
  event.preventDefault()
  if (this.form.isValid()) {
    const formData = {
      type: this.$el.type.value,
      ...this.form.value()
    }

    await apiService.createComputer(formData)
    this.form.clear()
    alert('Товар сохранен в базе данных')
  }
}

const setError = ($control) => {
  clearError($control)
  const error = '<p class="validation-error">Поле не может быть пустым</p>'
  $control.classList.add('invalid')
  $control.insertAdjacentHTML('afterend', error)
}
const clearError = ($control) => {
  $control.classList.remove('invalid')

  if ($control.nextSibling) {
    $control.closest('.form-control').removeChild($control.nextSibling)
  }

}

const deleteData = (event) => {
  const baseUrl = 'https://homework1-vlad1m1r.firebaseio.com/'
  const $el = event.target
  let id = $el.parentElement.getAttribute('id')
  let parenttd = $el.parentElement
  let parenttr = parenttd.parentElement
  alert('Данные удалены с бд')
  parenttr.remove()
  tbody = document.querySelector('#body-item')
  if (tbody.children.length === 0) {
    document.querySelector('.table-poduct').remove()
    products.$el.insertAdjacentHTML('afterbegin', '<p>нет товаров </p> <br>')
  }





  return fetch(baseUrl + `/computers/${id}.json`, {
    method: 'delete',
    // body: JSON.stringify(computer)
  }).then(response =>
    response.json().then(json => {
      return json;

    })
  );
}


async function changeData(event)     {
  $el = event.target
  this.id = id
  id = document.querySelector('#change-product').getAttribute('name')
  console.log(id)
  event.preventDefault()
  if (this.form.isValid()) {
    const formData = {
      type: this.$el.type.value,
      ...this.form.value()
    }
    await apiService.changeComputer(formData, id)
    this.form.clear()
    alert('Товар изменен')
  }
}




const navbutton = new Navbutton('nuv-button')
const computers = new Computers('body-item')
const search = new Search('search')
const products = new Products('all-product')
const addProducts = new AddProducts('add-product')
const loader = new LoaderComponent('loader')
const moreinfo = new Moreinfo('more')
changeProducts = new changeProducts('change-product')

