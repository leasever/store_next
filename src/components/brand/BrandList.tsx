import { useCategoryContext } from "@/context/category.context";
import { useFilterContext } from "@/context/filter.context";
import { capitalizeFirstLetter } from "@/utilities/utils";
import { useRouter } from "next/navigation";

export default function BrandList() {
  const { brands } = useCategoryContext();
  const { setOpenFilter } = useFilterContext();
  const router = useRouter();
  const handleClick = (name: string) => {
    setOpenFilter(false);
    router.push(`/filter/brand?query=${name}`);
  };

  return (
    <div className="flex flex-col items-start text-sm">
      {brands.map((brand) => (
        <button
          onClick={() => handleClick(brand.attributes.name)}
          key={brand.id}
          className="relative hover:underline"
        >
          <p className="text-gray-900 ">
            {capitalizeFirstLetter(brand.attributes.name)}
            {` (${brand.attributes.products.data.length})`}
          </p>
        </button>
      ))}
    </div>
  );
}
