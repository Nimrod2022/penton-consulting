import  { useState } from 'react';
import faqsData from '../shared/FaqsData';

const FAQs = () => {
  const [faqs, setFaqs] = useState(faqsData);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, open: !faq.open };
        } else {
          return { ...faq, open: false };
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div
            className={'faq ' + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
