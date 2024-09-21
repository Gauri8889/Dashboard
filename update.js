async function dataShow() {
    let mytable = `
       <table>
         <tr>
         <th>Employee no</th>
         <th>Name</th>
         <th>City</th>
         <th>Salary</th>
         <th>Actions</th>
         </tr>
      `;
  
    let url = "http://localhost:3000/employees";
  
    let myobj = await fetch(url);
    console.log(myobj);
  
    let mydata = await myobj.json();
    console.log(mydata);
  
    mydata.map((key) => {
      mytable += `
       <tr>
       <td><input type="text" value="${key.employeeno}" id="eno-${key.id}" readonly></td>
       <td><input type="text" value="${key.name}" id="nm-${key.id}" readonly></td>
       <td><input type="text" value="${key.city}" id="city-${key.id}" readonly></td>
       <td><input type="text" value="${key.salary}" id="salary-${key.id}" readonly></td>
       <td>
  
       <a href="#" onclick="myrecordRemove(${key.id})" class="button button-delete">Delete</a>
       <a href="#" onclick="editRow(${key.id})" id="edit-${key.id}" class="button button-edit">Edit</a>
       <a href="#" onclick="saveRow(${key.id})" id="save-${key.id}" class="button button-save" style="display:inline">Save</a>
       </td>
       </tr>
      `;
    });
  
    mytable += `</table>`;
    document.getElementById("demo").innerHTML = mytable;
  }
  dataShow();