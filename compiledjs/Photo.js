"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchPhotos = function (query, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const accessKey = 'VZ_3cv4f_YesvmaSj-2_Sn1KzT98kcFSh8vqjpJ1eok';
        const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;
        try {
            const response = yield fetch(apiUrl);
            const data = yield response.json();
            console.log(data);
            yield callback(data.results);
        }
        catch (error) {
            console.error('Error fetching photos:', error);
            callback([]);
        }
    });
};
function getPhotos(query) {
    return new Promise((resolve, reject) => {
        let fetchedPhotos = [];
        fetchPhotos(query, (results) => {
            // result.forEach((photo: { "": object; })  => {
            //     let fetcedPhoto = {
            //         name: photo?.alt_description
            //     }
            // });
            console.log("results", results);
            results.map((result) => {
                let photo = {
                    name: result.alt_description ? result.alt_description : "No Name",
                    src: result.urls.thumb,
                    author: result.user.name,
                    link: result.links.html,
                    description: result.description,
                    width: result.width,
                    height: result.height
                };
                fetchedPhotos.push(photo);
            });
            resolve(fetchedPhotos);
        });
    });
    // return fetchPhotos;
}
