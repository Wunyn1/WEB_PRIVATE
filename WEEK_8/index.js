let toDoList = [];

while(true){
  let choose = prompt("ban mun lam gi?1-add/2-show/3-edit/4-remove/5-exit");
  choose = Number(choose);
  if(isNaN(choose)){
    break;
  }

  switch(choose){
    case 1:
      let work = prompt("ten cong viec moi cua ban?")
      toDoList.push(work);
      console.log("da them cong viec moi");
      break;
    case 2:
      alert("tat ca cong viec: ");
      if(toDoList.length === 0){
        break;
      }
      else{
        for(let cv of toDoList){
          console.log(cv);
        }
      }
      break;
    case 3:
      let change = prompt("ten cong viec muon sua?")
      let check = false;
      for(let i=0; i<toDoList.length;i++){
        if(toDoList[i] === change){
          let newWork = prompt("noi dung moi: ");
          toDoList[i] = newWork;
          check = true;
          break;
        }
      }
      if(!check){
        alert("cong viec " + change + " khong ton tai");
      }
      break;
    case 4:
      let removeWork = prompt("ten cong viec muon xoa");
      let newArr = [];
      for(let i=0; i<toDoList.length; i++){
        if(toDoList[i] === removeWork){
          continue;
        }
        newArr.push(toDoList[i]);
      }
      alert("da xoa cong viec");
      break;
    case 5:
      alert("cam on da sd ctrinh tam biet");
      break;
    default:
      alert("lua chon khong hop le, nhap lai");
      break;
  }
}















// console.log("bài 1")

// let name = prompt("nhập tên");

// let age=prompt("Nhập tuổi");
// console.log(typeof age);
// age=Number(age);
// while (true) {
//   age=Number(age);
//   if (typeof age === "number" && !isNaN(age)) break;
//   age=prompt("Nhập tuổi");

// }



// let userName = name;
// let userAge = age;

// let userAges = Number(userAge);
// console.log("tuoi: "+userAges);



// console.log(`chào mừng ${userName.toUpperCase()}! tên của bạn thật đẹp, nó có ${userName.length} kí tự.
// Năm sau bạn sẽ ${userAges+1} tuổi`);

console.log("bài 2")
let birthYear = prompt("nhập năm sinh");
let ageNow = new Date().getFullYear;
console.log(ageNow);
ageNow = Number(ageNow)

console.log(ageNow);
if(ageNow < 18){
  alert("bạn chưa đủ tuổi lái xe")
}
else if(ageNow === 18){
  alert("bạn vừa đủ tuổi lái xe")
}
else{
  alert("bạn đã đủ tuổi lái xe")
}