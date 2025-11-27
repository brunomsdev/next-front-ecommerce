import AsideFilters from "@/components/AsideFilters";
import CustomInput from "@/components/CustomInput";
import { PageWrapper } from "@/components/PageWrapper";
import ProductCard from "@/components/ProductCard";
import ProductsList from "@/components/ProductsList";
import ProductsSection from "@/components/ProductsSection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoSearch } from "react-icons/io5";

export default function Products() {
  return (
    <div className="">
      <PageWrapper.Root withAuth={true}>
        <PageWrapper.Header />
        <PageWrapper.Content
          title="Todos os products"
          subtitle="8 produts encontrados"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <CustomInput
              type="text"
              placeholder="Buscar produtos"
              icon={<IoSearch />}
            />

            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nome A-Z</SelectItem>
                <SelectItem value="price-low">Menor preço</SelectItem>
                <SelectItem value="price-high">Maior preço</SelectItem>
                <SelectItem value="rating">Melhor avaliação</SelectItem>
                <SelectItem value="reviews">Mais avaliados</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-8">
            <AsideFilters />
            <ProductsList />
          </div>
        </PageWrapper.Content>
      </PageWrapper.Root>
    </div>
  );
}
