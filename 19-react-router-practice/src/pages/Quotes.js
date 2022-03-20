import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Leandro', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Chelem', text: 'I love cooking brownies.' },
  { id: 'q3', author: 'Nina', text: 'I wanna go for a walk... woof!' },
];

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
