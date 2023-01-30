import * as Styled from "./styles";

type Props = {
  title: string;
  type?: "button" | "submit" | "reset";
  style: "pattern";
  onClick?: (e: any) => void;
};

export const Button = ({ title, type = "button", style, onClick }: Props) => {
  return (
    <Styled.Wrapper>
      {style == "pattern" && (
        <button type={type} className="button button-pattern" onClick={onClick}>
          {title}
        </button>
      )}
    </Styled.Wrapper>
  );
};
