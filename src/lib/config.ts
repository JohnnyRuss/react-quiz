import {
  MatchT,
  DifficultyT,
  CategoryOptionT,
  CategoryDetailsT,
} from "@/types/index.types";
import { GetQuizQuestionsParamsT } from "@/types/api.types";

export const TRIVIA_BASE_URL: string = "https://opentdb.com";

export const TRIVIA_URL = (params: GetQuizQuestionsParamsT) => {
  const difficulty =
    params.difficulty === DifficultyT.ANY
      ? ""
      : `&difficulty=${params.difficulty.toLocaleLowerCase()}`;

  const type =
    params.type === MatchT.ANY
      ? ""
      : params.type === MatchT["TRUE/FALSE"]
      ? "&type=boolean"
      : "&type=multiple";

  const category = params.category ? `&category=${params.category}` : "";

  return `${TRIVIA_BASE_URL}/api.php?amount=${params.amount}${difficulty}${type}${category}`;
};

export const switchButtonConfig = {
  offColor: "#53403d",
  onColor: "#945c42",
  offHandleColor: "#ff5656",
  onHandleColor: "#56ffa4",
  handleDiameter: 10,
};

export const difficultyOptions = [
  { value: DifficultyT.ANY, label: "Any" },
  { value: DifficultyT.EASY, label: "Easy" },
  { value: DifficultyT.MEDIUM, label: "Medium" },
  { value: DifficultyT.HARD, label: "Hard" },
];

export const matchTypeOptions = [
  { value: MatchT.ANY, label: "Any" },
  { value: MatchT["TRUE/FALSE"], label: "True/False" },
  { value: MatchT.MULTIPLE, label: "Multiple" },
];

export const questionsPerMatchOptions = [
  { value: "10", label: "10" },
  { value: "15", label: "15" },
  { value: "20", label: "20" },
  { value: "25", label: "25" },
  { value: "30", label: "30" },
  { value: "35", label: "35" },
  { value: "40", label: "40" },
  { value: "45", label: "45" },
  { value: "50", label: "50" },
];

export const generateCategoryOptions = (
  categories: Array<CategoryDetailsT>
): Array<CategoryOptionT> =>
  categories.map((category) => ({
    value: category.id.toString(),
    label: category.name,
  }));

export const LS_GAME_PROGRESS_KEY = "game-progress" as const;
export const LS_SETTINGS_KEY = "settings" as const;
export const LS_CATEGORY_KEY = "category" as const;

export const SCORE_FOR_EASY = 1;
export const SCORE_FOR_MEDIUM = 2;
export const SCORE_FOR_HARD = 3;
