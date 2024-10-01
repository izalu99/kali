

import useAdminSearch from '@/hooks/componentHooks/useAdminSearch';
import { renderHook, act } from '@testing-library/react';
import { searchAction } from '@/app/actions/actions';

jest.mock('@/app/actions/actions', () => ({
    searchAction: jest.fn(),
  }));



describe('useAdminSearch', () =>{


    test('1. Should return the correct initial states', () => {
        const { result } = renderHook(() => useAdminSearch());
        const { input, 
            setInput, 
            searchResults, 
            hasSearched, 
            errorMessage, 
            isPending, 
            hasMore, 
            handleSubmit, 
            handleLoadMore } = result.current;
        expect(input).toBe('');
        expect(typeof setInput).toBe('function');
        expect(searchResults).toEqual([]);
        expect(hasSearched).toBe(false);
        expect(errorMessage).toBe('');
        expect(isPending).toBe(false);
        expect(hasMore).toBe(true);
        expect(typeof handleSubmit).toBe('function');
        expect(typeof handleLoadMore).toBe('function');
    });


    test('2. Should update input state correctly', () => {
        const { result } = renderHook(() => useAdminSearch());
        const { setInput } = result.current;

        act(() => {
            setInput('test');
        })

        expect(result.current.input).toBe('test');
        
    });
    
})
