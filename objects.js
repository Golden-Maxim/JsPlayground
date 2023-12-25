// const person = {
//     name: "Maks",
//     age: 25,
//     job: 'AQA'
// }

// console.log(Object.keys(person));
// //console.log(Object.getOwnPropertyNames(person));

// const array1 = [1, 4, 9, 16];


// array1.map(x => x *2).filter(x => x < 30).forEach(x => console.log(x));

// console.log(person.hasOwnProperty('age'))


const person  = Object.create(
    {
        //prototype
        calculateAge(){
            console.log("Age is: " , new Date().getFullYear() - this.birthYear);
        }

    }, 
    {
        name:{
            value:"Maks",
            enumerable: true, // allow to enumerate object
            writable:true, // allow to change object
            configurable: true // we can delete any key from object
        },

        birthYear:{
            value: 1995,
            enumerable: true,
        },
        age: {
            get(){
              return new Date().getFullYear() - this.birthYear
            },
            set(value) {

            }
        }
    }
    )

    person.name = "Jack"

    //delete person.name

   for(let key in person){
        // in that way we will not go though prototype
        if(person.hasOwnProperty(key))
        console.log("Key: " , key + ':', person[key]);
   }

   console.log(person.age)


   person.calculateAge();
