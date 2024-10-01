import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AdminSearch from '@/components/adminSearch';
import useAdminSearch from '@/hooks/componentHooks/useAdminSearch';

// mock the useAdminSearch hook
jest.mock('@/hooks/componentHooks/useAdminSearch');

// mock the dynamic import for AdminSearchResults
jest.mock('next/dynamic', () => () => (props: any) => <div {...props} />);

const mockUseAdminSearch = useAdminSearch as jest.Mock;

describe('AdminSearch Component', () => {
    beforeEach(() => {
        mockUseAdminSearch.mockReturnValue({
            input: '',
            setInput: jest.fn(),
            searchResults: [],
            hasSearched: false,
            errorMessage: '',
            isPending: false,
            hasMore: false,
            handleSubmit: jest.fn(),
            handleLoadMore: jest.fn(),
        });
    });

    test('renders the component correctly', () => {
        render(<AdminSearch />);
        expect(screen.getByPlaceholderText('Search for a word or translation...')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    });

    test('handles input change', () => {
        const setInput = jest.fn();
        mockUseAdminSearch.mockReturnValueOnce({
            ...mockUseAdminSearch(),
            setInput,
        });

        render(<AdminSearch />);
        const input = screen.getByPlaceholderText('Search for a word or translation...');
        fireEvent.change(input, { target: { value: 'test' } });

        expect(setInput).toHaveBeenCalledWith('test');
    });

    test('handles form submission', () => {
        const handleSubmit = jest.fn((e) => e.preventDefault());
        mockUseAdminSearch.mockReturnValueOnce({
            ...mockUseAdminSearch(),
            handleSubmit,
        });

        render(<AdminSearch />);
        const form = screen.getByTestId('adminSearch');
        fireEvent.submit(form);

        expect(handleSubmit).toHaveBeenCalled();
    });

    test('handles load more', async () => {
        const handleLoadMore = jest.fn();
        mockUseAdminSearch.mockReturnValueOnce({
            ...mockUseAdminSearch(),
            hasSearched: true,
            searchResults: ['result1'],
            hasMore: true,
            handleLoadMore,
        });

        render(<AdminSearch />);
        const loadMoreButton = screen.getByText('Load More');
        fireEvent.click(loadMoreButton);

        expect(handleLoadMore).toHaveBeenCalled();
    });
});