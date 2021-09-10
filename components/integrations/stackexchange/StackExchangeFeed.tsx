import Link from 'next/link';
// Local
import type { StackExchangeQuestion } from '@/interfaces/integrations';

type StackExchangeFeedProps = {
  questions: StackExchangeQuestion[];
};

const StackExchangeFeed = ({ questions }: StackExchangeFeedProps): JSX.Element => {
  if (questions.length === 0) {
    return <></>;
  }

  // Full response
  return (
    <div>
      <p>StackExchange</p>
      <ul>
        {questions.map((question) => (
          <li key={question.question_id}>
            {/* @TODO: Link Helper for blank */}
            <a href={question.link} target="_blank">
              <p>{question.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackExchangeFeed;
