// const saveLocalStorage = (name:string) =>{
//     try {
//       const savedCart = localStorage.getItem('cart');
//       // Данные в localStorage хранятся как строки, поэтому нужен JSON.parse
//       return savedCart ? JSON.parse(savedCart) : [];
//     } catch (error) {
//       console.error("Ошибка при загрузке корзины:", error);
//       return [];
//     }
// }

// const addLocalStorage = (product, setState) => {
//   setState((prevItems) => {
//     // Ищем, есть ли уже такой товар в корзине (по id)
//     const existingItem = prevItems.find(item => item.id === product.id);

//     if (existingItem) {
//       return prevItems.map(item =>
//         item.id === product.id 
//           ? { ...item, quantity: (item.quantity || 1) + 1 } 
//           : item
//       );
//     }

//     return [...prevItems, { ...product, quantity: 1 }];
//   });
// };
export const saveLocalData = <T extends object>(data:T, key:string) =>{
  try{
    localStorage.setItem(key, JSON.stringify(data))
  }catch(e){
    console.log(e);
  }
}

export const readLocalData = <T extends object>(key:string) =>{
  const response = localStorage.getItem(key);
  if(response) return JSON.parse(response) as T
  else return null
}