import { FILES } from '@/constants';
import { setLanguage } from '@/store/actions';
import { type StoreType } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';

interface UseLanguage {
  onSetLanguage: (language: string) => void;
  onTranslate: (word: string) => string;
  lang: string;
}

export const useTranslate = (): UseLanguage => {
  const dispatch = useDispatch();
  const lang = useSelector((store: StoreType) => store.languages);

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
