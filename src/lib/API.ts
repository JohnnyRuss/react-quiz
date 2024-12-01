import {
  CategoryShortDetailsDB_T,
  CategoryDetailsDB_T,
  GetQuizQuestionsParamsT,
} from "@/types/api.types";
import { QuestionT, CategoryDetailsT } from "@/types/index.types";

import { fitQuizData } from "./utils";
import { TRIVIA_URL, TRIVIA_BASE_URL } from "./config";

async function getQuizQuestions(
  params: GetQuizQuestionsParamsT
): Promise<Array<QuestionT>> {
  try {
    const { results } = await (
      await fetch(
        TRIVIA_URL({
          type: params.type,
          amount: params.amount,
          category: params.category,
          difficulty: params.difficulty,
        })
      )
    ).json();

    return results.map(fitQuizData);
  } catch (error) {
    throw new Error("failed to read data");
  }
}

async function getQuizCategoriesShortDetails(): Promise<
  Array<CategoryShortDetailsDB_T>
> {
  try {
    const {
      trivia_categories,
    }: { trivia_categories: Array<CategoryShortDetailsDB_T> } = await (
      await fetch(`${TRIVIA_BASE_URL}/api_category.php`)
    ).json();

    return trivia_categories;
  } catch (error) {
    throw error;
  }
}

function fitCategoryDetails(
  category: CategoryShortDetailsDB_T,
  category_question_count: CategoryDetailsDB_T["category_question_count"]
): CategoryDetailsT {
  return {
    id: category.id,
    name: category.name,
    easyQuestionsCount: category_question_count.total_easy_question_count,
    mediumQuestionsCount: category_question_count.total_medium_question_count,
    hardQuestionsCount: category_question_count.total_hard_question_count,
    totalQuestionsCount: category_question_count.total_question_count,
  };
}

async function getCategories(): Promise<Array<CategoryDetailsT>> {
  try {
    const categoriesShortDetails = await getQuizCategoriesShortDetails();

    const categories = await Promise.all(
      categoriesShortDetails.map(async (category: CategoryShortDetailsDB_T) => {
        const { category_question_count }: CategoryDetailsDB_T = await (
          await fetch(
            `${TRIVIA_BASE_URL}/api_count.php?category=${category.id}`
          )
        ).json();

        const details = fitCategoryDetails(category, category_question_count);

        return details;
      })
    );

    return categories;
  } catch (error) {
    throw error;
  }
}

export { getQuizQuestions, getCategories };
