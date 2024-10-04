

import useAdminWordTranslation
 from "@/hooks/componentHooks/useAdminWordTranslation";

import { renderHook} from "@testing-library/react";




jest.mock('@/app/actions/actions', () => ({
    updateWordAction: jest.fn(),
    updateTranslationAction: jest.fn(),
    deleteTranslationAndWordAction: jest.fn()
  }));


describe('useAdminWordTranslation', () => {


    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('1. Should return the correct initial states', () => {
        const mockWordLocal = {};
        const mockTranslationLocal = {};
        const { result } = renderHook(() => 
            useAdminWordTranslation({mockWordLocal, mockTranslationLocal}));
        
        const {
            loading,
            modalMessage,
            setModalMessage,
            wordText,
            setWordText,
            wordPronunciation,
            setWordPronunciation,
            wordType,
            setWordType,
            wordTense,
            setWordTense,
            wordExample,
            setWordExample,
            translationText,
            setTranslationText,
            translationLanguage,
            setTranslationLanguage,
            wordTransDeleted,
            handleSubmit,
            handleDelete
            } = result.current;

        expect(loading).toBe(false);
        expect(modalMessage).toBe('');
        expect(wordText).toBe('');
        expect(wordPronunciation).toBe('');
        expect(wordType).toBe('');
        expect(wordTense).toBe('');
        expect(wordExample).toBe('');
        expect(translationText).toBe('');
        expect(translationLanguage).toBe('');
        expect(wordTransDeleted).toBe(false);
        expect(typeof handleSubmit).toBe('function');
        expect(typeof handleDelete).toBe('function');
    });

    test('2. Should update the states correctly', () => {
        const mockWord = {
            id: 1,
            text: 'mockWord',
            pronunciation: 'mockPronunciation',
            type: 'mockType',
            tense: 'mockTense',
            example: 'mockExample'
        };
        const mockTranslation = {
            id: 1,
            wordId: 1,
            text: 'mockTranslation',
            language: 'mockLanguage'
        };
        const { result } = renderHook(() =>
            useAdminWordTranslation({word: mockWord, translation: mockTranslation}));
        
        

        expect(result.current.wordText).toBe('mockWord');
        expect(result.current.wordPronunciation).toBe('mockPronunciation');
        expect(result.current.wordType).toBe('mockType');
        expect(result.current.wordTense).toBe('mockTense');
        expect(result.current.wordExample).toBe('mockExample');
        expect(result.current.translationText).toBe('mockTranslation');
        expect(result.current.translationLanguage).toBe('mockLanguage');
        
        expect(result.current.loading).toBe(false);
        expect(result.current.modalMessage).toBe('');
        expect(result.current.wordTransDeleted).toBe(false);
        expect(typeof result.current.handleSubmit).toBe('function');
        expect(typeof result.current.handleDelete).toBe('function');
    });    
});

