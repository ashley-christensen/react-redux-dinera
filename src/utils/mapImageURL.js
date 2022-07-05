import { baseUrl } from '../app/shared/baseUrl';

//maps over array, pulls out each item. Returns new array of objects using spread operator to prepend EACH image property with BaseURL
export const mapImageURL = (arr) => {
 return arr.map((item) => {
  return {
   ...item,
   image: baseUrl + item.image
  };
 });
};