import React, {useState, useEffect}  from 'react'

function Product() {
  const [data, setData]=useState([]);
  const [searchApiData, setSearchApiData]=useState([])
  const [search,setSearch] = useState("")
  const [cartData, setCartData]=useState([])
  const [qut, setQut]=useState(1)
  
  const [toggle, setToggle]=useState()

 
  useEffect(()=>{
    fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
    .then(response=>response.json())
    .then(json=>{
      setData(json)
      setSearchApiData(json)
    })
    
  },[])
  const handleFilter=(e)=>{
    if(e.target.value == ''){
      setData(searchApiData)
      
    }else{
     const filterResult= searchApiData.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
     setData(filterResult)
    }
    setSearch(e.target.value)
    
  }

  const addtocart=(e)=>{

    setCartData([...cartData,e])
    setToggle(e.id)
   
  }

 const incriment=(e)=>{
 if(qut!==e.quantity){
  setQut(qut+1)
 }
 }


  const filter=(cat)=>{
      const filterResult= searchApiData.filter(item=>item.color.includes(cat))
      setData(filterResult)
    
   }
 
  return (
    <div className='mainProductContiner'>


      <div className='filterpage'>
        <div className='filters'>
        <p  className='filtertitle'>Color</p>
        <div className='filter'>
          <input type="checkbox"/>
          <p>Red</p>
        </div>
        <div className='filter'>
          <input type="checkbox"  />
          <p>Blue</p>
        </div>
        <div className='filter'>
          <input  type="checkbox" />
          <p>Green</p>
        </div>
        </div>


        <div className='filters'>
        <p  className='filtertitle'>Gendet</p>
        <div className='filter'>
          <input type="checkbox"  />
          <p>Men</p>
        </div>
        <div className='filter'>
          <input type="checkbox" />
          <p>Women</p>
        </div>
        
        </div>

        <div className='filters'>
        <p className='filtertitle'>Price</p>
        <div className='filter'>
          <input type="checkbox"  />
          <p>0-Rs250</p>
        </div>
        <div className='filter'>
          <input type="checkbox" />
          <p>Rs250-450</p>
        </div>
        <div className='filter'>
          <input type="checkbox"  />
          <p>Rs450</p>
        </div>
        
        </div>
       

        <div className='filters'>
        <p  className='filtertitle'>Type</p>
        <div className='filter'>
          <input type="checkbox" />
          <p>Polo</p>
        </div>
        <div className='filter'>
          <input type="checkbox" />
          <p>Hoodie</p>
        </div>
        <div className='filter'>
          <input type="checkbox"/>
          <p>Basic</p>
        </div>
        
        </div>
       
      </div>


      <div className='ProductPage'>
        <form className='searchcontiner'>
          <input className='searchbar' placeholder='Search for products..' value={search} onInput={(e)=>handleFilter(e)} />
          <div className='searchlogo' >🔍</div>
        </form>
      <div className='ProductContiner'>
        {data.map((item)=>(
          <div className='ProductItem' key={item.id}>
        
          <img className='productImg' src={item.imageURL}/>
          <p className='productName'>{item.name}</p>
          <div className='productbottom'>
            <p className='productPrice'>Rs {item.price}</p>
            {item.id==toggle ? <div className='pquantity'>
              <p className='pdec' onClick={()=>{if(qut!==1){setQut(qut-1)}}}>-</p>
              <p className='pqut'  >{qut}</p>
              <p className='pinc' onClick={()=>incriment(item)}>+</p>
            </div>:<button className='addtocart' onClick={()=>addtocart(item)}>Add to cart</button>}
            
          </div>
          </div>

        ))}  
    </div>
      </div>
     
       
    </div>
   
  )
}

export default Product
