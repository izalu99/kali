import { render, screen } from '@testing-library/react';
import Menu from '@/components/menu';
import type { MenuItem } from '@/components/menu';

jest.mock('next/link', () => {
    return ({ children }:any) => {
        return children;
    };
});

describe('Menu', () => {
  it('renders menu', () => {

    const mockItems: MenuItem[] = [
      { link: '/about', label: 'About' },
      { link: '/contact', label: 'Contact' },
    ];


    render(<Menu items={mockItems} />);
    
    const menu = screen.getByTestId('menu');
    expect(menu).toBeInTheDocument();

    mockItems.forEach((item) => {
        const linkElement = screen.getByText(item.label);
        expect(linkElement).toBeInTheDocument();
    });
  });
});