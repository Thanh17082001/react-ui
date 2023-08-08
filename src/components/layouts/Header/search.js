
import  { useState,useEffect, useRef } from 'react';
import productServices from '../../../services/product.service'

import useDounce from '../../hooks/useDebounce';
function Search() {
    // const [searchAction, setSearchAction] = useState('')
    const [searchValue, setSearchValue] = useState("")
    const  [data, setData] = useState([]);
    const refInput = useRef()

    const valueDebounced = useDounce(searchValue, 500)
    useEffect( () =>{
        const getProduct = async() =>{
                try {
                    if(!valueDebounced.trim() || valueDebounced===''){
                        setData([])
                        return;
                    }
                    else{
                        const product = await productServices.search(valueDebounced)
                        setData(product)
                    }
                } catch (error) {
                }
            }
        getProduct()
    }, [valueDebounced])
    // khi gõ vào ô input
    const handleSearchValue = (e)=>{
        setSearchValue(e.target.value)
    }
    const handleClear = (e)=>{
        setSearchValue('')
        setData([])
       refInput.current.focus();
    }
   
    // khi bấm nút searh
    // function handleSearch(){
    //     setSearchAction(searchValue)    
    // }
    return ( 
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
            ref={refInput}
            type="email"
            value={searchValue}
            className="form-control w-50" 
            onChange={handleSearchValue}
            placeholder="Enter email"/>
            
        {/* <button className="btn btn-primary " onClick={handleSearch}>Search</button> */}

        <button onClick={(e) => handleClear(e)}><i className="fa-regular fa-circle-xmark"></i></button>

        <ul>
          {data.map(item => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
  </div>
     );
}

export default Search;