function addList(){
  let name = document.getElementById("name").value.trim();
  let score = Number(document.getElementById("score").value);
  let list = document.getElementById("list");

  if(name === "" || score === ""){
    alert("không được để trống mục nào");
    return;
  }
  let li = document.createElement("li");
  li.innerText = `${name} - ${score} điểm`;
  if(score >= 5){
    li.style.color = "green";
  }
  else{
    li.style.color = "red";
  }

  
  list.appendChild(li);
  
  li.onclick = function(){
    li.remove();
  }
  document.getElementById("name").value = "";
  document.getElementById("score").value = "";
}

