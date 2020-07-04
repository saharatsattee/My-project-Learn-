const db = require('./utilsdb/modelDB')


function MVC_login(v) {
  return new Promise(async(resolve, reject) => {
  try{
      var student = await db.CheckStudent('mvc','student',v.email)
      if (!student){ 
        reject('Not has a E-mail Student')
      }
      else if (student.password !== v.password){ 
        reject('Password Fail')
      }
      else if (student.status == 'Check' ){
        resolve('This E-mail has checked') }
      else {  
      var resual =  db.Login("mvc","student",v.email) 
        if (!resual)
          reject(`can't write DB`);
        else
          resolve(
          'Login เรียบร้อย '
        )
      } 

  } catch (error) {
    reject(`this is from reject functions:${error}`);
  }
});
}

function MVC_Report() {
  return new Promise(async(resolve, reject) => {
    try{
        var student_NotCheck = new Array(); 
        var student_Check = new Array(); 
        var nameStudent_notCheck = new Array(); 
        var nameStudent_Check = new Array(); 
        var i , Fname , Lname


        student_NotCheck = await db.StudentNotCheck('mvc','student')
        student_Check = await db.StudentCheck('mvc','student')
        var student_Check_List = student_Check.length
        var student_NotCheck_List = student_NotCheck.length

        for( i = 0 ; i < student_NotCheck_List ; i++ ){
          Fname = student_NotCheck[i].Fname
          Lname = student_NotCheck[i].Lname
          nameStudent_notCheck[i] = Fname + " "+ Lname
        }

        for( i = 0 ; i < student_Check_List ; i++ ){
          Fname = student_Check[i].Fname
          Lname = student_Check[i].Lname
          nameStudent_Check[i] = Fname + " "+ Lname
        }

        resolve({
        message: {
            จำนวนนักศึกษาที่เช็คชื่อ: student_Check_List,
            รายชื่อนักศึกษาที่เช็คชื่อ : nameStudent_Check ,
            จำนวนนักศึกษาที่ไม่เช็คชื่อ: student_NotCheck_List,
            รายชื่อนักศึกษาที่ไม่เช็คชื่อ : nameStudent_notCheck
        }
});

    } catch (error) {
      reject(`this is from reject functions:${error}`);
    }
  });

}


module.exports = {
  
  MVC_login : MVC_login, 
  MVC_Report : MVC_Report ,
   
}
