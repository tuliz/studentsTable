// const addStudent = (e)=>{
//     console.log(e);
// }

// document.getElementById('addStudent').addEventListener('click',addStudent);


class Student{
    constructor(name, birthdate, phone, email, address, gender){
        this.name = name;
        this.birthdate = birthdate;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.gender = gender;
    }
    id = 0;
get getId(){
    return this.id;
}
set setId(id){
    this.id = id;
}
};

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let th;
let tr;
let td;
let node;

const students = [{name:'hello', birthdate:23, phone:'0544989488', email:'yarden@gmail.com', address:'hadera', gender:'male'}];
for(obj in students[0]){
    node = document.createTextNode(obj);
    th = document.createElement('th');
    th.appendChild(node);
    thead.appendChild(th);
  }
  table.appendChild(thead);

if(students.length > 0){
    students.forEach((student)=>{
       tr = document.createElement('tr');
       for(obj in student){
        node = document.createTextNode(student[obj]);
        td = document.createElement('td');
        td.appendChild(node);
        tr.appendChild(td);
       }
       tbody.append(tr);
    
     }
   )
   table.appendChild(tbody);
   document.getElementById('table').appendChild(table);
 }
