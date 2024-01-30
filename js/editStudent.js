window.addEventListener(onload, (e)=>{
    console.log(e);
})

let students = JSON.parse(localStorage.getItem('students'));
console.log(students);