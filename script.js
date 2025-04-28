const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});


  // <div class="text-center mb-4">
  //                   <button class="btn btn-outline-primary filter-btn" data-filter="all">All</button>
  //                   <button class="btn btn-outline-primary filter-btn" data-filter="web">Web Development</button>
  //                   <button class="btn btn-outline-primary filter-btn" data-filter="design">Design</button>
  //                   <button class="btn btn-outline-primary filter-btn" data-filter="app">App Development</button>
  //               </div>
                
  //               <div class="row portfolio-container">
  //                   <div class="col-md-4 portfolio-item" data-category="web">
  //                       <img src="images/project1.jpg" class="img-fluid" alt="Web project">
  //                   </div>
  //                   <div class="col-md-4 portfolio-item" data-category="design">
  //                       <img src="images/project2.jpg" class="img-fluid" alt="Design project">
  //                   </div>
  //                   <div class="col-md-4 portfolio-item" data-category="app">
  //                       <img src="images/project3.jpg" class="img-fluid" alt="App project">
  //                   </div>
  //                   <!-- Add more projects -->
  //               </div>