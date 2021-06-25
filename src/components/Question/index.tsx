import { ReactNode } from "react";
import cx from "classnames"; // importa com o nome menor para não ocupar tanto espaço no código
import "./style.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <div
      /* também pode ser escrito assim: `question ${isAnswered ? "answered" : ""} ${isHighlighted ? "highlighted" : ""}` */
      className={cx("question", {
        // (key: value) classNames somente serão aplicadas se o value for true
        answered: isAnswered,
        highlighted: isHighlighted && !isAnswered,
      })}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
