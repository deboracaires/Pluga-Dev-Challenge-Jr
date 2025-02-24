import { getApps } from './api';
import axios from 'axios';

jest.mock('axios');

describe('getApps', () => {
  test('retorna dados em caso de sucesso', async () => {
    axios.get.mockResolvedValueOnce({ data: [{ id: 1, name: 'Teste' }] });
    const apps = await getApps();
    expect(apps).toEqual([{ id: 1, name: 'Teste' }]);
  });

  test('retorna array vazio em caso de erro', async () => {
    axios.get.mockRejectedValueOnce(new Error('Erro de rede'));
    const apps = await getApps();
    expect(apps).toEqual([]);
  });
});
