import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer/index';

describe('Test Footer', () => {
    it('Footer snapshot', () => {
        const view = render(<Footer />);
        expect(view).toMatchSnapshot();
    });
});
