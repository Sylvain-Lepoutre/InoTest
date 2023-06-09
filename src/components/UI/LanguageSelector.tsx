import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import englishFlag from '/en-flag.png';
import frenchFlag from '/fr-flag.png';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      changeLanguage();
    }
  };

  const flagImage = i18n.language === 'en' ? englishFlag : frenchFlag;

  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={changeLanguage}
        onKeyPress={handleKeyPress}
        tabIndex="0"
        aria-label="Change language"
      >
        <img className="w-8 mt-[1.7rem] mr-[1rem] md:mt-1 p-0" src={flagImage} alt="Flag" />
      </button>
    </div>
  );
}

export default LanguageSelector;
