import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage Component', () => {
    test('deve renderizar a mensagem de boas-vindas corretamente', () => {
        render(<HomePage />);
        const titleElement = screen.getByText(/Página Inicial/i);
        const messageElement = screen.getByText(/Bem-vindo ao projeto CRUD de séries!/i);

        expect(titleElement).toBeInTheDocument();
        expect(messageElement).toBeInTheDocument();
    });
});