# Weather App

Este projeto é um aplicativo de clima desenvolvido em React, que exibe as condições climáticas atuais de uma cidade ou da localização do usuário. Ele também oferece previsão estendida para os próximos 5 dias.

## Funcionalidades
- [x] Exibe o clima atual de uma cidade.
- [x] Previsão estendida para 5 dias.
- [x] Suporte à localização automática do usuário.
- [x] Alternador de tema claro e escuro.
- [x] Histórico de buscas recentes.

## Tecnologias Usadas
- **React**: Biblioteca principal para o desenvolvimento da interface.
- **Tailwind CSS**: Framework para estilização.
- **OpenWeatherMap API**: API para obter dados do clima.

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/weather-app.git
   cd weather-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure sua chave de API:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione a chave da API no formato abaixo:
     ```env
     REACT_APP_API_KEY=sua-chave-aqui
     ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

## Como Usar
1. Abra `http://localhost:3000` no navegador.
2. Digite o nome de uma cidade no campo de busca ou clique em "Usar Minha Localização".
3. Visualize o clima atual, previsão estendida e informações como temperatura, umidade e velocidade do vento.

## Estrutura do Projeto
```
weather-app/
├── src/
│   ├── components/
│   │   ├── WeatherInput.js      # Campo de entrada para buscar cidades
│   │   ├── WeatherDisplay.js    # Exibe o clima atual
│   │   ├── ForecastDisplay.js   # Exibe a previsão estendida
│   ├── App.js                   # Componente principal
│   ├── index.js                 # Ponto de entrada da aplicação
│   ├── index.css                # Estilos globais
├── public/
│   ├── index.html               # HTML principal
├── .env                         # Variáveis de ambiente (API Key)
└── README.md                    # Documentação do projeto
```

## Exemplos de Resposta da API
### Clima Atual (`/weather`):
```json
{
  "name": "London",
  "main": {
    "temp": 18.5,
    "humidity": 70
  },
  "weather": [
    { "description": "nublado", "icon": "04d" }
  ]
}
```

### Previsão Extendida (`/forecast`):
```json
{
  "list": [
    {
      "dt_txt": "2025-01-24 12:00:00",
      "main": { "temp": 20.1 },
      "weather": [
        { "description": "ensolarado", "icon": "01d" }
      ]
    }
  ]
}
```

## Contribuição
1. Faça um fork do repositório.
2. Crie um branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e crie um pull request.

## Licença
Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

---


