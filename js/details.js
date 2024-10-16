const displayDetails = (pet) => {
    const detailContainer = document.getElementById("modal-content");
  
    detailContainer.innerHTML = `
          <div class="p-2 border-solid border-[#1313131A]  rounded-xl ">
              <div>
                  <img src=${pet.image} alt="" class="rounded-lg object-cover w-full" />
              </div>
              <div>
                  <h4 class="text-2xl font-bold leading-6 text-primary mb-4 mt-5">${pet.pet_name}</h4>
  
  
                  <div class="text-base font-normal leading-5 text-[#131313B3] space-y-2 flex gap-8">
                      <div class="space-y-2">
                        <div class="flex items-center gap-2">
                          <img src="./images/Frame.png" alt="" />
                          <p>Breed: ${pet.breed}</p>
                        </div>
  
                        <div class="flex items-center gap-2">
                          <i class="fa-solid fa-mercury w-5"></i>
                          <p>Gender: ${pet.gender}</p>
                        </div>
                        <div class="flex items-center gap-2">
                          <i class="fa-solid fa-mercury w-5"></i>
                          <p>Vaccinated status:${pet.vaccinated_status}</p>
                        </div>
                      </div>
  
                      <div class="space-y-2">
                        <div class="flex items-center gap-2">
                          <i class="fa-regular fa-calendar w-5"></i>
                          <p>Birth: ${pet.date_of_birth}</p>
                        </div>
  
  
                        <div class="flex items-center gap-2">
                          <i class="fa-solid fa-dollar-sign w-5"></i>
                          <p>Price: ${pet.price}$</p>
                        </div>
                      </div>
  
  
              </div>
          </div>
          <hr class="border-[#1313131A] border my-4" />
          <h4 class="text-primary font-semibold">Details Information</h4>
          <p class="text-[#131313B3]">${pet.pet_details}</p>
          
  
      `;
    document.getElementById("my_modal_5").showModal();
  };
  
  const adoptBtn = () => {
    const modal = document.getElementById("my_modal_1");
    const countdownElement = document.getElementById("countdown");
    let countdown = 3;
  
    const countdownInterval = setInterval(() => {
      countdownElement.textContent = countdown;
      countdown--;
  
      if (countdown < 0) {
        clearInterval(countdownInterval);
        document.getElementById("my_modal_1").close();
      }
    }, 500);
    document.getElementById("my_modal_1").showModal();
  };
  
  // sort btn
  
  const sortShow = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.pets)
      const sorted = data.pets.sort((a, b) => b.price - a.price);
      // console.log(sorted);
      
    displayAllPets(sorted);
    }
      );
    
  };
  // displayAllPets(sorted);
   // displayAllPets(sorted);
  // showShortContainer();
  // displayAllPets(sortShow);