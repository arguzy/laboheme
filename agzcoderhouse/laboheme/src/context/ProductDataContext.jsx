import { createContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase/index";



const ProductDataContext = createContext({});
export default ProductDataContext;

export const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    
    const db = getFirestore.collection("inventory").get()
    .then((res)=>{
      if (res.empty) {console.log('no llego nada')}
      setProducts(res.doc.map(doc=> doc.data()));
    }).catch((error)=>{
      setErrors(console.log("error", error))
    }
    ).finally(()=>{setIsLoading(false)
    }
    )
    

  }), [];
  


 
   




  return (
    <ProductDataContext.Provider value={{ products, errors, isLoading }}>
      {children}
    </ProductDataContext.Provider>
  );
};