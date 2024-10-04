import { renderHook, act } from '@testing-library/react';
import useNewWord from '@/hooks/componentHooks/useNewWord';

describe('useNewWord', () => {
    test('1. should return the correct initial states', () => {
        const { result } = renderHook(() => useNewWord());

        expect(result.current.newWordForms).toEqual([]);
        expect(result.current.showPopup).toBe(false);
        expect(result.current.formContainerRef.current).toBe(null);
    });

    test('2. should add new word forms correctly', () => {
        const { result } = renderHook(() => useNewWord());

        act(() => {
            result.current.handleNewWordBtn();
        });

        expect(result.current.newWordForms).toEqual([1]);

        act(() => {
            result.current.handleNewWordBtn();
        });

        expect(result.current.newWordForms).toEqual([1, 2]);

        act(() => {
            result.current.handleNewWordBtn();
        });

        expect(result.current.newWordForms).toEqual([1, 2, 3]);

        act(() => {
            result.current.handleNewWordBtn();
        });

        expect(result.current.newWordForms).toEqual([1, 2, 3]);
        expect(result.current.showPopup).toBe(true);
    });

    test('3. should close word forms correctly', () => {
        const { result } = renderHook(() => useNewWord());

        act(() => {
            result.current.handleNewWordBtn();
        });

        act(() => {
            result.current.handleNewWordBtn();
        });

        act(() => {
            result.current.handleNewWordBtn();
        });

        expect(result.current.newWordForms).toEqual([1, 2, 3]);

        act(() => {
            result.current.handleCloseBtn(1);
        });

        expect(result.current.newWordForms).toEqual([1, 3]);

        act(() => {
            result.current.handleCloseBtn(0);
        });

        expect(result.current.newWordForms).toEqual([3]);
    });

    test('4. should show and close popup correctly', () => {
        const { result } = renderHook(() => useNewWord());

        act(() => {
            result.current.handleNewWordBtn();
        });
        act(() => {
            result.current.handleNewWordBtn();
        });
        act(() => {
            result.current.handleNewWordBtn();
        });
        act(() => {
            result.current.handleNewWordBtn();
        });

        expect(result.current.newWordForms).toEqual([1, 2, 3]);
        expect(result.current.showPopup).toBe(true);

        act(() => {
            result.current.handleClosePopup();
        });

        expect(result.current.showPopup).toBe(false);
    });
});