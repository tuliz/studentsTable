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
  getId(){
    return this.id;
      }
  setId(id){
    this.id = id;
    }
 };

 let students = [];
//getting students array that got saved in local storage
if(JSON.parse(localStorage.getItem("students")))
students = JSON.parse(localStorage.getItem("students"));

//varaibles for table in html
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let th;
let tr;
let td;
let node;
let btnEdit;
let btnDelete;

//showing titles first in table head
for(obj in students[0]){
node = document.createTextNode(obj);
th = document.createElement('th');
th.appendChild(node);
thead.appendChild(th);
}
table.appendChild(thead);


//getting the info of students and spreading them in table 
if(students.length > 0){
  students.forEach((student, i)=>{
     tr = document.createElement('tr');
     for(obj in student){
      node = document.createTextNode(student[obj]);
      td = document.createElement('td');
      td.appendChild(node);
      tr.appendChild(td);
     }

     btnEdit = document.createElement('button');
     btnEdit.innerHTML = 'Edit';
     btnEdit.setAttribute('class', 'btnEdit');
     btnEdit.setAttribute('id', `edit${student.id}`);


     btnDelete = document.createElement('button');
     btnDelete.innerHTML = 'Delete';
     btnDelete.setAttribute('class', 'btnDelete');
     btnDelete.setAttribute('id', `delete${student.id}`);

    tr.appendChild(btnEdit);
    tr.appendChild(btnDelete);

    tbody.append(tr);
  
   }
 )
 table.appendChild(tbody);
  }


  document.getElementById('table').appendChild(table);

//getting button click in html and creating new student object and adding to students array
document.getElementById('addStudent').addEventListener('click',()=>{
  let name = document.getElementById('name').value;
  let birthdate = document.getElementById('birthdate').value;
  let phone = document.getElementById('phone').value;
  let email = document.getElementById('email').value;
  let address = document.getElementById('address').value;
  let gender = document.getElementById('gender').value;
  let newStudent = new Student(name, birthdate, phone, email, address, gender);
  let id = 0;
  id = students.length + 1;
  newStudent.setId(id);
  students.push(newStudent);
  window.localStorage.setItem("students", JSON.stringify(students));
  location.reload();
 });

 //creting event for pressing delete on student and deleting that student from array
  document.querySelectorAll('.btnDelete').forEach((btn)=>{
    btn.addEventListener('click',()=>{
      for(let i = 0; i < students.length; i++){
        if(students[i].id == btn.id.slice(6,7)){
           students.splice(i,1);
           localStorage.setItem('students',JSON.stringify(students));
           location.reload();
        }
      }
    });
 });


 document.querySelectorAll('.btnEdit').forEach((btn)=>{
  btn.addEventListener('click',()=>{
    for(let i = 0; i < students.length; i++){
      if(students[i].id == btn.id.slice(4,5)){
        location.href = './editStudent.html';
      }
    }
  });
});