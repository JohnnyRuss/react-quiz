import { SingleValue } from "react-select";

import S from "@/lib/storage";
import { SettingsKeyT } from "@/types/index.types";
import { useAppContext } from "@/Provider/AppProvider";

import {
  LS_SETTINGS_KEY,
  difficultyOptions,
  matchTypeOptions,
  questionsPerMatchOptions,
} from "@/lib/config";

export default function useHandleSettings() {
  const { settings, setSettings, gameOver, resetGame } = useAppContext();

  const preventChange = !gameOver && !resetGame;

  const handleSwitch = (checked: boolean, key: SettingsKeyT) => {
    if (key === "saveMatchHistory" && preventChange) return;

    setSettings((prev) => {
      const updatedSettings = {
        ...prev,
        [key]: checked,
      };

      S.setValue(LS_SETTINGS_KEY, updatedSettings);

      return updatedSettings;
    });
  };

  const handleSelect = (
    value: SingleValue<{ value: string; label: string }>,
    key: SettingsKeyT
  ) => {
    if (!value || preventChange) return;

    setSettings((prev) => {
      const updatedSettings = {
        ...prev,
        [key]:
          key === "questionsPerMatch" ? parseInt(value.value) : value.value,
      };

      S.setValue(LS_SETTINGS_KEY, updatedSettings);

      return updatedSettings;
    });
  };

  const selectedDifficulty = difficultyOptions.find(
    (value) => value.value === settings.difficulty
  ) || { label: "", value: "" };

  const selectedQuestionsPerMatch = questionsPerMatchOptions.find(
    (value) => value.value === settings.questionsPerMatch.toString()
  ) || { label: "", value: "" };

  const selectedMatchType = matchTypeOptions.find(
    (value) => value.value === settings.type.toString()
  ) || { label: "", value: "" };

  return {
    handleSelect,
    handleSwitch,
    preventChange,
    selectedMatchType,
    selectedDifficulty,
    selectedQuestionsPerMatch,
  };
}
