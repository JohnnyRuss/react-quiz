import { useAppContext } from "@/Provider/AppProvider";

const NextButton: React.FC = () => {
  const { nextQuestion } = useAppContext();

  return (
    <button className="btn" onClick={nextQuestion} style={{ width: "100%" }}>
      Next Question
    </button>
  );
};

export default NextButton;
