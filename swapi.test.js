const request = require('supertest');

describe('Testes da API SWAPI', () => {
  it('deve retornar status 200 e dados de uma pessoa', async () => {
    const response = await request('https://swapi.dev/api').get('/people/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
  });

  it('deve retornar o nome correto da pessoa', async () => {
    const response = await request('https://swapi.dev/api').get('/people/1');
    expect(response.body.name).toBe('Luke Skywalker');
  });

  it('deve retornar 404 para pessoa inexistente', async () => {
    const response = await request('https://swapi.dev/api').get('/people/999');
    expect(response.status).toBe(404);
  });

  it('deve retornar 404 para veículo inexistente', async () => {
    const response = await request('https://swapi.dev/api').get('/vehicles/999');
    expect(response.status).toBe(404);
  });

  // Adicione mais testes conforme necessário
});

