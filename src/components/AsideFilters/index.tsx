import formatCurrency from "@/helpers/formatCurrency";
import CustomButton from "../CustomButton";
import { Slider } from "../ui/slider";

export default function AsideFilters() {
  const categories = [
    { id: 1, name: "Smartphones" },
    { id: 2, name: "Laptops" },
    { id: 3, name: "Fones" },
    { id: 4, name: "Smartwatch" },
    { id: 5, name: "Câmeras" },
    { id: 6, name: "Games" },
  ];

  return (
    <aside className="w-80 flex shrink-0">
      <div className="rounded-lg border-[#343942] bg-[#181B20] w-full">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-6">Filtros</h3>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Categoria</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  return (
                    <CustomButton
                      key={category.id}
                      variant={category.id === 1 ? "primary" : "ghost"}
                      className="w-full justify-start h-[40px] text-sm pl-6"
                    >
                      {category.name}
                    </CustomButton>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">Faixa de preço</h3>
              <div className="space-y-4">
                <Slider max={20000} step={100} className="w-full" />
                <div className="flex justify-between text-sm">
                  <span>{formatCurrency(100)}</span>
                  <span>{formatCurrency(2000)}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">
                Avaliação Mínima
              </h3>
              <div className="space-y-2">
                {
                  [0, 3, 4, 4.5].map((rating) => {
                    return (
                      <CustomButton
                        key={rating}
                        variant="ghost"
                        className={`w-full justify-start h-[40px] test-sm pl-6 hover:bg-[#5593f7] ${
                          rating === 0 && "bg-[#5593f7]"
                        }`}
                      >
                        {rating === 0 ? "Todas" : `${rating}+ estrelas`}
                      </CustomButton>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
