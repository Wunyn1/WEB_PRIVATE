let content = document.querySelector(".content");
let button = document.querySelector(".btn");
console.log(content);
console.log(button);
let contentText = content.textContent;
let preview = contentText.length > 50 ? contentText.slice(0,50) + "..." : contentText;
content.textContent = preview;

let isShowingPreview = true;

button.addEventListener("click", function(){
  if(isShowingPreview){
     content.textContent = contentText;
  button.textContent = "thu gọn";
    isShowingPreview = false;
  }
  else{
    content.textContent = preview;
    button.textContent = "xem thêm";
    isShowingPreview = true;
  }
})