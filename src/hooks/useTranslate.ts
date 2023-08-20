import { FILES } from '@/constants';
import { getLanguages, setLanguage } from '@/store/actions';
import { useDispatch, useSelector } from 'react-redux';

interface UseLanguage {
  onSetLanguage: (language: string) => void;
  onTranslate: (word: string) => string;
  lang: string;
}

export const useTranslate = (): UseLanguage => {
  const dispatch = useDispatch();
  const lang = useSelector(getLanguages);

  const onSetLanguage = (language: string): void => {
    dispatch(setLanguage(language));
  };

  const onTranslate = (word: string): string => {
    return FILES[lang][word];
  };

  return {
    onSetLanguage,
    onTranslate,
    lang
  };
};
