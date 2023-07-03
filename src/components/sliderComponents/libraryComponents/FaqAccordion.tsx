import { useState } from "react";

type Question = {
  id: string;
  question: string;
  answer: string;
  isExpanded: boolean;
};

const FaqAccordion = ({ questions }: { questions: Pick<Question, "question" | "answer">[] }) => {
  const [expanded, setExpanded] = useState<Question[]>(
    questions.map((q, index) => ({ ...q, id: index, isExpanded: false }))
  );

  const handleExpand = (currentQuestionId: string) => {
    setExpanded((prevState) =>
      prevState.map((question) =>
        question.id === currentQuestionId ? { ...question, isExpanded: !question.isExpanded } : question
      )
    );
  };

  console.log(expanded);

  return (
    <div className="flex justify-center">
      <div className="flex-col justify-center">
        {expanded.map((question) => (
          <details key={question.id} className="my-1 text-white max-w-max">
            <summary
              className="text-white py-2 pl-2 pr-8 bg-gray-600 rounded-md"
              onClick={() => handleExpand(question.id)}
              aria-expanded={question.isExpanded}
            >
              {question.question}
            </summary>
            <p className="bg-gray-500 p-2 rounded-md">{question.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
