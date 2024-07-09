async function getdata(){
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
}

const ServerProductList = async () => {
    const products = await getdata();    

  return (
    <div>
      <h1 className="pb-4">Server Product List</h1>

        {
            products && products.map((item)=>(
                <h3 key={item.id} className='text-blue-700'>{item.title}</h3>
            ))

        }

    </div>
  )
}

export default ServerProductList;
