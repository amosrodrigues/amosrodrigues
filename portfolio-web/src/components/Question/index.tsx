import { ReactNode } from 'react';
import cx from 'classnames';

import { StyledQuestion } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isHighlighted?: boolean;
  isAnswered?: boolean;
}

export function Question({
  content,
  author,
  isHighlighted = false,
  isAnswered = false,
  children,
}: QuestionProps) {
  return (
    <StyledQuestion>
        <div className={cx(
          'question',
          { answered: isAnswered },
          { highlighted: isHighlighted && !isAnswered},
          )}
        >
          <p>{content}</p>
          <footer>
            <div className="user-info">
              <img src={author.avatar} alt={author.name} />
              <span>{author.name}</span>
            </div>
            <div>
              { children }
            </div>
          </footer>
        </div>
    </StyledQuestion>
  );
}
