import React, { useState } from 'react';
import faqsData from '../../../../shared/FaqsData';

const FAQs: React.FC = () => {
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

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleFAQ(index);
    }
  };

  return (
    <div className="App">
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div
            className={'faq ' + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleFAQ(index)}
            onKeyPress={(event) => handleKeyPress(event, index)}
            tabIndex={0}
            role="button"
            aria-expanded={faq.open ? 'true' : 'false'}
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
