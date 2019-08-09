
// 1 Генератор
function *combos(list) {
  const n = list.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        for(let m = i+2; m < n; m++){
          yield [list[i], list[j], list[m]];
        }
         
      }
  }
}
string= 'abcdefghijklmnopqrstuvwxyz'

// arr.push('b', 'c', 'd', 'e')




//Функции с итератором

function makeIterator(array){
  var nextIndex = 0;
  
  return {
     next: function(){
         return nextIndex < array.length ?
             {value: array[nextIndex++], done: false} :
             {done: true};
     }
  }
}

const iter = makeIterator(['Петя', 'Вася', 'Вика','Лена'])


let range = {
  from: 1,
  to: 5
}

range[Symbol.iterator] = function() {

  let current = this.from;
  let last = this.to;


  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: current++
        };
      } else {
        return {
          done: true
        };
      }
    }

  }
};

for (let num of range) {
  console.log(num); // 1, затем 2, 3, 4, 5
}


console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())




let it = combos(string)



const $generate = document.querySelector('#generate')

$generate.addEventListener('click', () => alert(it.next().value.join('')))
  



//классы 

class Mix_info {
  constructor(name, dofb){
    this.name = name,
    this.dofb = dofb
  }
}
let sayHiMixin = {

  sayHi() {
    alert(`Привет, ${this.name}`);
  },
  sayBye() {
    alert(`Пока, ${this.name}`);
  }
};
let getInfo = {
  age(){
    let age = new Date().getFullYear() - this.dofb
    alert(`${this.name} ${age} года`)
  
  }
}

class Person extends Mix_info{}

class Car extends Mix_info{
    constructor(name, dofb, model, color, id){
      super(name, dofb)
      this.$el = document.getElementById(id)
      this.model = model
      this.color = color
      this.init()
    
    }
    init(){
      this.$el.addEventListener('click', ()  => {alert(`цвет  ${this.name} ${this.model}  ${this.color} `) } )
      
    }
}


Object.assign(Person.prototype, sayHiMixin, getInfo);
Object.assign(Car.prototype, getInfo);


class Dog  extends Person{
  constructor(breed, name, dofb){
    
    super(name,dofb)
    this.breed = breed
   
  }
}



const person = new Person('Вася', 1995)
const dog    = new Dog('Мопс', 'Миля', 2012)
const car    = new Car('Тойота', 1995, 'Старлет', 'Синий', 'getColorCar')

person.sayHi()
person.age()
dog.sayHi()
car.age()
console.log(dog)
console.log(car)



//Локализация даты
let now = new Date();

let options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
  
}


const $date = document.getElementById('date')

$date.insertAdjacentHTML('afterbegin', `<p>${now.toLocaleString('ru', options)}</p>`)












// const form = new Message('message')
// const chat = new Chat('chat')

// console.log(chat)
// console.log(form)



