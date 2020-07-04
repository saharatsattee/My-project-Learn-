// const moment = require('moment');
// const SLASH_DMYHMS = 'DD/MM/YYYY HH:mm:ss';
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
//----------------------MongoDB---------------------------------------
const db = require('./utilsdb/modelDB')

// function aye(v) {
//   return new Promise((resolve, reject) => {
//     try {
//       if(v.value == 1)
//       resolve([
//          'OK this is from normal case 1 '
//       ])
//       else if(v.value == 2 )
//       resolve([
//         'OK this is from normal case 2 '
//       ])
//       else 
//       reject(`this is from reject functions a `);
//   } catch (error) {
//       reject(`this is from reject functions:${error}`);
//   }

// });
// }

// function ayewriteDB(v) {
//   return new Promise(async(resolve, reject) => {
//   try{
    //   var check = await db.checkDATA(v.DB,v.CAL,v.ID)
    //   if (check){
    //     reject('data has writed')
    //   }
    //   else {
    //     var resual =  db.DBwrite(v.DB,v.CAL,v.ID,v.NAME,v.STATUS) 
    //     if (!resual)
    //     reject(`can't write DB`);
    //     else
    //     resolve(
    //       'done to write DB '
    //     ) 
    //   }
// } catch (error) {
//   reject(`this is from reject functions:${error}`);
// }
// });
// }

// function ayereadDB(v) {
//   return new Promise((resolve, reject) => {
//   try{
    //   db.DBreadSTATUS(v.DB,v.COL,v.ID).then((result) => {
    //     resolve(result)
    //     })
    //     .catch((error) => {
    //       reject(error)
    //     });
//  }catch (error) {
//     reject(`this is from reject functions:${error}`);
// }
// });
// }
//-------------------------------------------------------------------------

function LoginStudent(v) {
  return new Promise(async(resolve, reject) => {
  try{
      var student = await db.CheckStudent('student','studentdata',v.ID)
      var check = await db.CheckStudent('student','checkstudent',v.ID)
      if (!student){ 
        reject('not has a idStudent Number')
      }
      else if (student.password !== v.Pass){ 
        reject('Password fall')
      }
      else if (check){
        resolve('this id Number has checked') }
      else {  
      var resual =  db.Login("student","checkstudent",v.ID,"check") 
        if (!resual)
          reject(`can't write DB`);
        else
          resolve(
          'done to write DB '
        )
      } 

  } catch (error) {
    reject(`this is from reject functions:${error}`);
  }
});
}
function List() {
  return new Promise(async(resolve, reject) => {
    try{
        var student = new Array(); 
        student = await db.ReadArray('student','checkstudent')
        var list = student.length
        resolve(list)

    } catch (error) {
      reject(`this is from reject functions:${error}`);
    }
  });

}

function UpdateData(v) {
  return new Promise(async(resolve, reject) => {
  try{
      var Check = db.UpdateData('student','checkstudent',v.ID)
      if(Check == 'done to write DB') {
        resolve('Status has changed')
      }
      else{
        reject('Something worng to chang status ')
      }

  } catch (error) {
    reject(`this is from reject functions:${error}`);
  }
});
}

module.exports = {
    // aye:aye,
    // ayewriteDB:ayewriteDB,
    // ayereadDB:ayereadDB,
    LoginStudent:LoginStudent,
    List:List,
    UpdateData:UpdateData,
}