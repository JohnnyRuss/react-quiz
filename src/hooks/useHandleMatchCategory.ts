import { useEffect, useState } from "react";
import { SingleValue } from "react-select";

import LS from "@/lib/storage";
import { getCategories } from "@/lib/api";
import { CategoryOptionT } from "@/types/index.types";
import { generateCategoryOptions, LS_CATEGORY_KEY } from "@/lib/config";

const selectedCategoryInitialState: CategoryOptionT = {
  value: "",
  label: "Any",
};

export default function useHandleMatchCategory() {
  const [loading, setLoading] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState<
    Array<CategoryOptionT>
  >([]);

  const [selectedCategory, setSelectedCategory] = useState<CategoryOptionT>(
    selectedCategoryInitialState
  );

  async function getCategoriesQuery() {
    try {
      setLoading(true);
      const categoriesData = await getCategories();
      setCategoryOptions(() => [
        { label: "Any", value: "" },
        ...generateCategoryOptions(categoriesData || []),
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const onSelectCategory = (category: SingleValue<CategoryOptionT>) => {
    if (!category) return;

    const selected = categoryOptions.find(
      (option) => option.value === category.value
    );

    if (!selected) return;

    setSelectedCategory(() => selected);

    LS.setValue(LS_CATEGORY_KEY, selected);
  };

  useEffect(() => {
    getCategoriesQuery();
  }, []);

  useEffect(() => {
    const persisted_category: CategoryOptionT =
      LS.getValue(LS_CATEGORY_KEY) || selectedCategoryInitialState;

    if (!persisted_category) return;

    setSelectedCategory(() => persisted_category);
  }, [categoryOptions]);

  return { categoryOptions, selectedCategory, onSelectCategory, loading };
}
