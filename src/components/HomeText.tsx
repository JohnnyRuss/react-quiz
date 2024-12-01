import * as Styled from "./styles/homeText.styled";

const HomeText: React.FC = () => {
  return (
    <Styled.HomeText>
      <div className="more-than">
        <span>MORE</span>
        <br />
        <span>THAN</span>
      </div>

      <div className="number">4000</div>

      <div className="questions">QUESTIONS</div>
    </Styled.HomeText>
  );
};

export default HomeText;
