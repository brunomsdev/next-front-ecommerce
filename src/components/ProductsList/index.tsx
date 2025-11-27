import customToast from "@/helpers/customToast"
import requestApi from "@/helpers/requestApi"
import { Product } from "@/interfaces/Product"
import { useEffect, useState } from "react"
import ProductCard from "../ProductCard"

export default function ProductsList(){
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await requestApi({
          url: "/products",
          method: "GET"
        })

        setProducts(response.data)
      } catch (error) {
        console.error(error)
        customToast.error({
          message: "Erro ao buscar produtos"
        })
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products?.map((product) => {
        return (
          <ProductCard 
            key={product.id}
            product={product}
          />
        )
      })}
    </div>
  )
}