import { createSanity } from "./createSanity"

export const getProduct = async()=>{
    return await createSanity.fetch(`*[_type == "products"]`)
  }
 