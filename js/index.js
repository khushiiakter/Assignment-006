const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
      .then((res) => res.json())
      .then((data) => displayCategories(data.categories));
  };
  const loadAllPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => res.json())
      .then((data) => displayAllPets(data.pets));
  };
  
  const removeActiveClass = () => {
    const buttons = document.getElementsByClassName("category-btn");
    // console.log(buttons);
    for (let btn of buttons) {
      btn.classList.remove("active");
    }
  };
  
  const loadCategoriesPets = (category) => {
    document.getElementById("spinner").classList.remove("hidden");
    const showPets = document.getElementById("section-to-hide");
    showPets.classList.add("hidden");
    setTimeout(() => {
      document.getElementById("spinner").classList.add("hidden");
      showPets.classList.remove("hidden");
    }, 2000);
  
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        removeActiveClass();
        const activeBtn = document.getElementById(`btn-${category}`);
        activeBtn.classList.add("active");
        displayAllPets(data.data);
      });
  };
  
  const loadDetails = (petId) => {
    console.log(petId);
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
      .then((res) => res.json())
      .then((data) => displayDetails(data.petData));
  };
  
  const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
  
    categories.forEach((item) => {
      // create button
      const btnContainer = document.createElement("div");
      btnContainer.innerHTML = `
          <button id="btn-${item.category}" onclick ="loadCategoriesPets('${item.category}')"  class="flex items-center justify-center md:gap-4 gap-3 py-3 px-9 rounded-2xl text-2xl text-primary font-bold border border-solid border-[#0E7A8126] category-btn" >
              <img src="${item.category_icon}" alt="">
              ${item.category}
          </button>
          `;
      categoryContainer.appendChild(btnContainer);
    });
  };
  
  const displayAllPets = (pets) => {
    // document.getElementById("spinner").classList.remove('hidden');
    const petsContainer = document.getElementById("petsContainer");
  
    petsContainer.innerHTML = "";
    if (pets.length === 0) {
      petsContainer.classList.remove("grid");
      petsContainer.innerHTML = `
        <div class="flex rounded-3xl	 bg-[#13131308] flex-col py-[90px] justify-center items-center gap-4 text-center">
          <img src="./images/error.webp" alt="">
          <h3 class="text-3xl font-bold leading-[39px] text-primary">No Information Available</h3>
          <p class="text-[#131313B3] max-w-[760px] leading-6 text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
          its layout. The point of using Lorem Ipsum is that it has a.</p>
        </div>
     
      `;
    } else {
      petsContainer.classList.add("grid");
    }
    pets.forEach((pet) => {
      // h-[188px] w-[268.84px]
  
      const { breed, pet_name, gender, image, price, date_of_birth, petId } = pet;
      const petCard = document.createElement("div");
      petCard.innerHTML = `
              <div class="p-5 border border-solid border-[#1313131A]  rounded-xl ">
                
                  <div class="w-full md:h-[166px]">
                      <img src=${image} alt="" class="rounded-lg object-cover w-full h-full" />
                  </div>
                  <div>
                      <h4 class="text-xl font-bold leading-6 text-primary mb-2 mt-5">${pet_name}</h4>       
                      <div class="text-base font-normal leading-5 text-[#131313B3] space-y-2">
                          <div class="flex items-center gap-2">
                              <img src="./images/Frame.png" alt="" />
                              <p>Breed: ${breed || "Not Found"}</p>
                          </div>
                          <div class="flex items-center gap-2">
                            <i class="fa-regular fa-calendar w-5"></i>
                            <p>Birth: ${date_of_birth || "Not Found"}</p>
                          </div>
                          <div class="flex items-center gap-2">
                            <i class="fa-solid fa-mercury w-5"></i>
                            <p>Gender: ${gender || "Not Found"}</p>
                          </div>
  
                          <div class="flex items-center gap-2">
                            <i class="fa-solid fa-dollar-sign w-5"></i>
                            <p>Price: ${price || "Not Found"} $</p>
                          </div>
                  </div>
                  </div>
                  <hr class="border-[#1313131A] border my-4" />
        
                  <div class="text-secondary text-lg font-bold leading-[22px] flex justify-between">
                    <button onclick="displayLiked('${image}')" class="rounded-lg border border-solid border-[#0E7A8126] py-2 px-4 md:px-3">
                      <i class="fa-regular fa-thumbs-up"></i></button>
                    <button onclick="adoptBtn()"
                      class="rounded-lg border border-solid border-[#0E7A8126] py-2 px-6 md:px-3">
                      Adopt
                    </button>
                    <button class="rounded-lg border border-solid border-[#0E7A8126] py-2 md:px-3 px-6" onclick =  loadDetails(${petId})>Details</button>
                  </div>
              </div>
       
          `;
      petsContainer.append(petCard);
      
    });
    
  };
  
  const displayLiked = (likeImg) => {
    console.log(likeImg);
    const likeContainer = document.getElementById("likedPet");
    const div = document.createElement("div");
    div.innerHTML = `<img src="${likeImg}" alt="" class="rounded-lg">`;
    likeContainer.appendChild(div);
  };
  
  
  
  loadCategories();
  loadAllPets();