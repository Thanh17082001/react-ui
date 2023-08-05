
import  { useState,useEffect } from 'react';
import productServices from '../../../services/product.service'
function Search() {
    // const [searchAction, setSearchAction] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const  [data, setData] = useState([]);
    useEffect( () =>{
        const getProduct = async() =>{
            try {
                if(searchValue !== ''){
                    const product = await productServices.search(searchValue)
                    setData(product)
                }
                else{
                    setSearchValue('')
                    setData([])
                }
            } catch (error) {
            console.log(error);
            }
        }
        getProduct()
    }, [searchValue])
    // khi gõ vào ô input
    const handleSearchValue = (e)=>{
        setSearchValue(e.target.value)
    }

   
    // khi bấm nút searh
    // function handleSearch(){
    //     setSearchAction(searchValue)    
    // }
    return ( 
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input 
            type="email"
            // value={searchValue}
            className="form-control w-50" 
            onChange={handleSearchValue}
            placeholder="Enter email"/>
            
        {/* <button className="btn btn-primary " onClick={handleSearch}>Search</button> */}

        <ul>
          {data.map(item => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
  </div>
     );
}

export default Search;