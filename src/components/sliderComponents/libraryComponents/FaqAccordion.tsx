import { useState } from "react";

type Question = {
  id: string;
  content: string;
  answer: string;
  state: boolean;
};

export default function FaqAccordion() {
  const [expanded, setExpanded] = useState<Question[]>([
    {
      id: "1",
      content: "question 1",
      answer: "answer 1",
      state: false,
    },
    {
      id: "2",
      content: "question 2",
      answer: "answer 2",
      state: false,
    },
    {
      id: "3",
      content: "question 3",
      answer: "answer 3",
      state: false,
    },
  ]);

  const handleExpand = (id: string) => {
    setExpanded((prevState) =>
      prevState.map((question) => (question.id === id ? { ...question, state: !question.state } : question))
    );
  };

  console.log(expanded.map((question) => question.state));

  return (
    <div className="flex justify-center">
      <div className="flex-col justify-center">
        {expanded.map((question) => (
          <details key={question.id} className="my-1 text-white max-w-max">
            <summary
              className="text-white py-2 pl-2 pr-8 bg-gray-600 rounded-md"
              onClick={() => handleExpand(question.id)}
              aria-expanded={question.state}
            >
              {question.content}
            </summary>
            <p className="bg-gray-500 p-2 rounded-md">{question.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
