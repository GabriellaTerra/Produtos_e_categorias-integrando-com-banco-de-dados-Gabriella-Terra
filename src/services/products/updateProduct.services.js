import database from "../../database";

const updateProductService = async (id,data) => {
  try{
    let query = "UPDATE products SET "
   
    const keys = Object.keys(data)
    const values = Object.values(data)
 
  keys.forEach((key,index) => {
    query += `${key} = \$${(index += 1)}`
  })

 


  query += ` WHERE id = \$${(keys.length += 1)} RETURNING *`

    const res = await database.query(query, [...values, id]);
  
  console.log(res)
    return res.rows[0] 
  }catch(err){
    throw new Error(err)
  }
   
  
};

export default updateProductService;
