
import useAdminSearch from '@/hooks/componentHooks/useAdminSearch';
import { searchAction } from '@/app/actions/actions';
import { renderHook } from '@testing-library/react';

jest.mock('@/app/actions/actions', () => ({
    searchAction: jest.fn(),
}));


describe('useAdminSearch', () =>{

    test('should return the correct values', () => {
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
})