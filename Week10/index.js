let restaurants = []; //tạo list rỗng

async function restaurant() {
  let restaurant = await fetch('cards.json'); //fetch ra nội dung json và sau đó await
  let json = await restaurant.json(); //lấy nội dung file json từ raw

  
}
  function listRestaurant(){
  let data = document.getElementById('restaurant-list');
  

  json.forEach(item => {
    data.innerHTML += `
    
    <div class="restaurant-card">
      <img src="${item.image}" alt="${item.name}">
      <div class="restaurant-text">
        <div class="left">
          <h3>${item.name}</h3>
          <p>${item.cuisine}</p>
          <p>${item.location}</p>
        </div>
        <div class="right">
          <p>${item.rating}<i class="fa-solid fa-star"></i></p>
          <p><i class="fa-solid fa-dollar-sign"></i>${item.priceForTwo} for two</p>
          <p>${item.distance}</p>
        </div>
      </div>
    </div>
    `
  });
}
restaurant();

