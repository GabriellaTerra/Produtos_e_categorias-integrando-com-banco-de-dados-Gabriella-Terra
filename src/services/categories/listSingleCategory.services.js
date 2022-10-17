import database from "../../database";


const listSingleCategoryService = async (id) =>{
try{
    const res = await database.query("SELECT * FROM categories ctg WHERE ctg.id = $1;",[id])
    return res.rows[0]
}catch(err){
    throw new Error(err)
}
   


}
export default listSingleCategoryService