import React, { useEffect, useState } from 'react';

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      {/* top */}
      <div className=" flex items-center justify-between p-3 bg-gray-300">
        <h1>18 Products</h1>
        <div>
          <select className="py-2 px-8">
            <option>Relevance</option>
            <option>name (A-Z)</option>
          </select>
        </div>
      </div>

      {/* products  cards*/}

      <div className=" flex items-center justify-center flex-wrap">
        {data.map((item) => (
          <div className=" flex items-center justify-between p-5">
            <img src={item.image} alt="" className=" w-28 cursor-pointer " />
            <div
              className=" flex flex-col items-center justify-center py-3 shadow-2xl h-40 w-40
          cursor-pointer hover:drop-shadow-2xl transition-all duration-300 ml-3 "
            >
              <div className=" flex items-center justify-center flex-col flex-wrap px-3 py-6">
                <h1>{item.title}</h1>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
