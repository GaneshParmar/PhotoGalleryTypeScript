
type Photo={
    name: string,
    src: string,
    author: string,
    link: string,
    description: string,
    width: number,
    height: number
}

type PhotoData={
    alt_description: string,
    urls:{
        thumb: string
    },
    user:{
        name: string
    },
    links:{
        html: string
    },
    description:string,
    width: number,
    height: number
}

const fetchPhotos =async function (query:string,callback: Function) {
    const accessKey = 'VZ_3cv4f_YesvmaSj-2_Sn1KzT98kcFSh8vqjpJ1eok';
    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data)
    await callback(data.results)
    } catch (error) {
      console.error('Error fetching photos:', error);
    callback([]);
    }
  }

function getPhotos(query: string) : Promise<Photo[]>{


    return new Promise((resolve,reject)=>{
        
        
        
        let fetchedPhotos: Photo[] | any=[]
    
        fetchPhotos(query,(results: PhotoData[])=>{
            
            // result.forEach((photo: { "": object; })  => {
            //     let fetcedPhoto = {
            //         name: photo?.alt_description
            //     }
            // });
    
            console.log("results",results)

            results.map((result: PhotoData)=>{
    
                let photo:Photo={
                    name: result.alt_description?result.alt_description:"No Name",
                    src: result.urls.thumb,
                    author: result.user.name,
                    link: result.links.html,
                    description: result.description,
                    width: result.width,
                    height: result.height
                }
    
                fetchedPhotos.push(photo)
            })
    
            resolve(fetchedPhotos)
    
        })
    })
    
   
    // return fetchPhotos;


}
