//closures

// function urlGenerator(domain){
//     return function(url){
//         return `https://${url}.${domain}`;
//     }
// }

// const comURL = urlGenerator('com');
// const uaUrl = urlGenerator('ua');
// console.log(comURL('google'));
// console.log(uaUrl('everest'));



const person = {
        name: "Maks",
        age: 25,
        job: 'AQA'
    }

    function logPerson () {
        console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
    }
    

function bind (obj, fn){
    return function(...args){
        fn.apply(obj, args)
    }
}

bind(person, logPerson)()
