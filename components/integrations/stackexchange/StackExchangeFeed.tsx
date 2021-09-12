// Local
import type { StackExchangeQuestion } from '@/interfaces/integrations';

type StackExchangeFeedProps = {
  content: StackExchangeQuestion[];
};

const StackExchangeFeed = ({ content }: StackExchangeFeedProps): JSX.Element => {
  if (content.length === 0) {
    return <></>;
  }

  // Full response
  return (
    <div>
      <p>StackExchange</p>
      <ul>
        {content.map((question) => (
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
