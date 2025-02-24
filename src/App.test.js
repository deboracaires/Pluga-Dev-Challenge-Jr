import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import Home from '../src/pages/home/index';
import Modal from '../src/components/modal/index';
import '@testing-library/jest-dom';
import { getApps } from '../src/services/api';

jest.mock('../src/services/api');

const mockApps = [
  { app_id: 1, name: 'Ferramenta A', color: '#000', icon: 'iconA.png', link: 'http://example.com/a' },
  { app_id: 2, name: 'Ferramenta B', color: '#000', icon: 'iconB.png', link: 'http://example.com/b' },
  { app_id: 3, name: 'Ferramenta C', color: '#000', icon: 'iconC.png', link: 'http://example.com/c' },
  { app_id: 4, name: 'Ferramenta D', color: '#000', icon: 'iconD.png', link: 'http://example.com/d' },
  { app_id: 5, name: 'Ferramenta E', color: '#000', icon: 'iconE.png', link: 'http://example.com/e' },
  { app_id: 6, name: 'Ferramenta F', color: '#000', icon: 'iconF.png', link: 'http://example.com/f' },
  { app_id: 7, name: 'Ferramenta G', color: '#000', icon: 'iconG.png', link: 'http://example.com/g' },
  { app_id: 8, name: 'Ferramenta H', color: '#000', icon: 'iconH.png', link: 'http://example.com/h' },
  { app_id: 9, name: 'Ferramenta I', color: '#000', icon: 'iconI.png', link: 'http://example.com/i' },
  { app_id: 10, name: 'Ferramenta J', color: '#000', icon: 'iconJ.png', link: 'http://example.com/j' },
  { app_id: 11, name: 'Ferramenta K', color: '#000', icon: 'iconK.png', link: 'http://example.com/k' },
  { app_id: 12, name: 'Ferramenta L', color: '#000', icon: 'iconL.png', link: 'http://example.com/l' }, 
  { app_id: 13, name: 'Ferramenta M', color: '#000', icon: 'iconM.png', link: 'http://example.com/m' },
];

describe('Home Page', () => {
  beforeEach(() => {
    getApps.mockReset();
  });

  test('deve exibir 12 ferramentas por página', async () => {
    getApps.mockResolvedValueOnce(mockApps);

    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText('Ferramenta A')).toBeInTheDocument();
    });

    const toolElements = screen.getAllByText(/Ferramenta/i);
    expect(toolElements.length).toBe(12);

    expect(screen.getByText('Anterior')).toBeInTheDocument();
    expect(screen.getByText('Próxima')).toBeInTheDocument();
  });

  test('busca de ferramenta', async () => {
    getApps.mockResolvedValueOnce(mockApps);

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText('Ferramenta A')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText(/buscar/i);

    fireEvent.change(searchInput, { target: { value: 'B' } });

    expect(screen.queryByText('Ferramenta A')).not.toBeInTheDocument();
    expect(screen.getByText('Ferramenta B')).toBeInTheDocument();
  });

  test('o modal abre ao clicar em uma ferramenta', async () => {
    getApps.mockResolvedValueOnce(mockApps);

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText('Ferramenta A')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Ferramenta A'));

    await waitFor(() => {
      expect(screen.getByText('Acessar')).toBeInTheDocument();
    });
  });

  test('no modal aparecem os últimos vistos', async () => {
    getApps.mockResolvedValueOnce(mockApps);
  
    render(<Home />);
  
    await waitFor(() => {
      expect(screen.getByText('Ferramenta A')).toBeInTheDocument();
    });
  
    fireEvent.click(screen.getByText('Ferramenta A'));
    await waitFor(() => {
      expect(screen.getByText('Acessar')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId('modal-overlay'));
  
    fireEvent.click(screen.getByText('Ferramenta B'));
    await waitFor(() => {
      expect(screen.getByText('Acessar')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId('modal-overlay'));
  
    fireEvent.click(screen.getByText('Ferramenta C'));
    await waitFor(() => {
      expect(screen.getByText('Acessar')).toBeInTheDocument();
    });
  
    const viewedAppsContainer = screen.getByTestId('viewed-apps');
  
    expect(within(viewedAppsContainer).getByText('Ferramenta A')).toBeInTheDocument();
    expect(within(viewedAppsContainer).getByText('Ferramenta B')).toBeInTheDocument();
  });

  test('o modal exibe corretamente o clicado', async () => {
    getApps.mockResolvedValueOnce(mockApps);
  
    render(<Home />);
  
    await waitFor(() => {
      expect(screen.getByText('Ferramenta A')).toBeInTheDocument();
    });
  
    fireEvent.click(screen.getByText('Ferramenta B'));
  
    await waitFor(() => {
      expect(screen.getByText('Acessar')).toBeInTheDocument();
    });

    const modalTitle = screen.getByTestId('modal-title');

    expect(within(modalTitle).getByText('Ferramenta B')).toBeInTheDocument();
  });
  

  test('o link no modal está correto', async () => {
    getApps.mockResolvedValueOnce(mockApps);

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText('Ferramenta A')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Ferramenta A'));

    await waitFor(() => {
      const link = screen.getByText('Acessar');
      expect(link).toHaveAttribute('href', 'http://example.com/a');
    });
  });
  test('desabilita botão próxima quando não há mais páginas', async () => {
    getApps.mockResolvedValueOnce(mockApps);
  
    render(<Home />);
    await waitFor(() => expect(screen.getByText('Ferramenta A')).toBeInTheDocument());
  
    fireEvent.click(screen.getByText('Próxima'));
    expect(screen.getByText('Próxima')).toBeDisabled();
  });

  test('não renderiza modal se app for null', () => {
    render(<Modal app={null} viewedApps={[]} onClose={jest.fn()} />);
    expect(screen.queryByText('Acessar')).not.toBeInTheDocument();
  });

  test('os botões de paginação funcionam corretamente', async () => {
    getApps.mockResolvedValueOnce(mockApps);
    render(<Home />);
    await waitFor(() => expect(screen.getByText('Ferramenta A')).toBeInTheDocument());
    
    expect(screen.getByText('Anterior')).toBeDisabled();
    expect(screen.getByText('Próxima')).not.toBeDisabled();

    fireEvent.click(screen.getByText('Próxima'));
    await waitFor(() => expect(screen.getByText(/Página 2/i)).toBeInTheDocument());
  
    expect(screen.getByText('Anterior')).not.toBeDisabled();
  });

  test('o modal fecha ao clicar fora', async () => {
    getApps.mockResolvedValueOnce(mockApps);
    render(<Home />);
    await waitFor(() => expect(screen.getByText('Ferramenta A')).toBeInTheDocument());

    fireEvent.click(screen.getByText('Ferramenta A'));
    await waitFor(() => expect(screen.getByText('Acessar')).toBeInTheDocument());
    
    fireEvent.click(screen.getByTestId('modal-overlay'));
    await waitFor(() => {
      expect(screen.queryByText('Acessar')).not.toBeInTheDocument();
    });
  });

  test('filtra apps duplicados e atualiza viewedApps', async () => {
    getApps.mockResolvedValueOnce(mockApps);
    render(<Home />);
    await waitFor(() => expect(screen.getByText('Ferramenta A')).toBeInTheDocument());

    fireEvent.click(screen.getByText('Ferramenta A'));
    await waitFor(() => expect(screen.getByText('Acessar')).toBeInTheDocument());
    
    fireEvent.click(screen.getByTestId('modal-overlay'));
    await waitFor(() => {
      expect(screen.queryByText('Acessar')).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Ferramenta B'));
    await waitFor(() => expect(screen.getByText('Acessar')).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('modal-overlay'));
    await waitFor(() => {
      expect(screen.queryByText('Acessar')).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Ferramenta A'));
    await waitFor(() => expect(screen.getByTestId('modal-title').textContent).toBe('Ferramenta A'));
    
    const viewedAppsContainer = screen.getByTestId('viewed-apps');

    expect(within(viewedAppsContainer).getByText('Ferramenta B')).toBeInTheDocument();
  });
});
