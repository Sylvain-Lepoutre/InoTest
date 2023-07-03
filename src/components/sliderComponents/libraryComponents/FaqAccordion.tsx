import { useState } from "react";
import { nanoid } from "nanoid";

type Question = {
  id: number;
  question: string;
  answer: string;
  isExpanded: boolean;
  answerId: string;
};

type Styles = {
  container?: string;
  childContainer?: string;
  details?: string;
  question?: string;
  answer?: string;
};

const FaqAccordion = ({
  questions,
  styles,
}: {
  questions: Pick<Question, "question" | "answer">[];
  styles: Styles;
}) => {
  const [expanded, setExpanded] = useState<Question[]>(
    questions.map((q, index) => ({
      ...q,
      id: index + 1,
      answerId: nanoid(),
      isExpanded: false,
    }))
  );

  const handleExpand = (currentId: string) => {
    setExpanded((prevState) =>
      prevState.map((question) =>
        question.id === currentId ? { ...question, isExpanded: !question.isExpanded } : question
      )
    );
  };

  console.log(expanded);

  return (
    <div className={styles?.container}>
      <div className={styles?.childContainer}>
        {expanded.map((question) => (
          <details key={question.id} className={styles?.details}>
            <summary
              aria-controls={question.answerId}
              // aria-disabled={}
              aria-expanded={question.isExpanded}
              className={styles?.question}
              onClick={() => handleExpand(question.id)}
              role="button"
            >
              {question.question}
            </summary>
            <p id={question.answerId} className={styles?.answer}>
              {question.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
