// console.log("Fetched Cows",getPhotos('cow'))

const searchBtn= document.getElementById("searchBtn")!;
const searchInput= document.getElementById("search")as HTMLInputElement;
const userSearchText=document.getElementById('userSearchText')!;

const Container=new PhotoContainer()
const container: HTMLElement= Container.getContainer()!

console.log(container)
function performSearch() {
    
    const searchQuery = searchInput.value;

    if(searchQuery == ""){
        return 
    }

    Container.showLoading()

    getAndsetPhotos(searchQuery)
    
}

function getAndsetPhotos(query: string){

    getPhotos(query)
    .then((photos:Photo[])=>{

      // console.log("Photos",photos)
      
      setTimeout(() => {
        updatePictureGrid(photos)
        
      }, 1500);

    })

}



function updatePictureGrid(pictures: Photo[]) {
  
  Container.emptyContainer()

  if(pictures.length == 0){
    container.innerHTML = "Please use other keyword or check your internet connection!"
  }
  console.log(pictures)
  // Iterate over retrieved pictures data
  pictures.forEach((picture: Photo) => {

    console.log(picture)
    const pictureContainer = document.createElement('div');
    pictureContainer.classList.add('picture-container');

    const image = document.createElement('img');
    image.src = picture.src;
    image.width= picture.width;
    image.height = picture.height;
    image.alt = picture.name;
    pictureContainer.appendChild(image);

    const author = document.createElement('p');
    author.textContent = 'Author: ' + picture.author;
    pictureContainer.appendChild(author);

    const description = document.createElement('p');
    description.textContent = 'Description: ' + picture.description;
    pictureContainer.appendChild(description);

    const link = document.createElement('a');
    link.href = picture.link;
    link.textContent = 'View on Unsplash';
    pictureContainer.appendChild(link);

    container.appendChild(pictureContainer);
  });



  console.log(container)
  // if(useStaggerd){
  //     initializeMasonry();
  // }
}



searchBtn.addEventListener('click', performSearch);

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});

