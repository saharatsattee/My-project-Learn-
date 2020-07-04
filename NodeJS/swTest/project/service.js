const db = require('./utilsdb/modelDB')


function deposit(v) {
  return new Promise(async(resolve, reject) => {
  try{
      var data_account = await db.GetData('atm','atm',v.account)
      if (!data_account){ 
        reject('Not has a account number')
      }
      else if (data_account.password !== v.password){ 
        reject('Password false')
      }
      else if (Number(v.deposit) % 100 !== 0 ){
        reject('Unable to deposit money Please do the transaction again, such as 100, 500, 1000.')
      }
      else {  
      var new_money = data_account.money + Number(v.deposit)
      var resual_money = await db.UpdateData('atm','atm',v.account,data_account.money ,new_money)
      resolve(resual_money)
      } 

  } catch (error) {
    reject(`this is from reject functions:${error}`);
  }
});
}

function withdraw(v) { 
  return new Promise(async(resolve, reject) => {
  try{
      var data_account = await db.GetData('atm','atm',v.account)
      if (!data_account){ 
        reject('Not has a account number')
      }
      else if (data_account.password !== v.password){ 
        reject('Password false')
      }
      else if (Number(v.withdraw) > data_account.money){
        reject('Money not enough')
      }
      else if (Number(v.withdraw) % 100 !== 0 ){
        reject('Unable to deposit money Please do the transaction again, such as 100, 500, 1000.')
      }
      else {  
      var new_money = data_account.money - Number(v.withdraw)
      var resual_money = await db.UpdateData('atm','atm',v.account,data_account.money ,new_money)
      resolve(resual_money)
      } 

  } catch (error) {
    reject(`this is from reject functions:${error}`);
  }
});
}

function transfer(v) { //โอนมากกว่าเงินในบัญชีไม่ได้ และ โอนให้ตัวเองไม้ได้ 
  return new Promise(async(resolve, reject) => {
  try{
      var data_accountA = await db.GetData('atm','atm',v.accountA)
      var data_accountB = await db.GetData('atm','atm',v.accountB)
      if (!data_accountA){ 
        reject('Not has a accountA number')
      }
      else if (!data_accountB){ 
        reject('Not has a accountB number')
      }
      else if (data_accountA.password !== v.password){ 
        reject('Password false')
      }
      else if (Number(v.transfer) > data_accountA.money){
        reject('Money not enough')
      }
      else if (v.accountA == v.accountB){
        reject(`Can't transfer money to your account`)
      }
      else {  
      var new_money_A = data_accountA.money - Number(v.transfer)
      var new_money_B = data_accountB.money + Number(v.transfer)
      var resual_moneyA = await db.UpdateData('atm','atm',v.accountA,data_accountA.money ,new_money_A)
      var resual_moneyB = await db.UpdateData('atm','atm',v.accountB,data_accountB.money ,new_money_B)
      resolve({
            AccountA : resual_moneyA,
            AccountB : resual_moneyB 
      });
      } 

  } catch (error) {
    reject(`this is from reject functions:${error}`);
  }
});
}

module.exports = {
    deposit:deposit,
    withdraw:withdraw,
    transfer:transfer,
}


//db.atm.insertMany([{ _id: 'rer', password: '0000', money: 200}])