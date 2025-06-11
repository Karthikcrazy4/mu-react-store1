import React, { useEffect } from 'react' 
import { usestate } from 'react'
const [count,SetCount] = useState(0);
  const fetchproducts = () => {
    alert("Fetching products from API");
  };
  useeffect(() => {fetchproducts()},[]) 
  return(
    <div>
      {count}
      <button onClick={() => SetCount(count + 1)}>Update count</button>
    </div>
  )
