# Currency Converter

Simple web-based currency converter using [ExchangeRates Api](https://exchangeratesapi.io/). 

Once the web application is loaded, it fetches the latest rates and currencies available and display them, allowing the user to convert values from one currency to another. The currency conversion is fully done on the application itself, not using any 3rd party API's.

*Disclaimer*: The base currency for the Free plan of `ExchangeRates` platform is limited to `EUR`. Therefore, selecting other currencies as `base` won't work unfortunately.

## Project libraries

The project was created using `create-react-app` to scaffold the basic structure. I opted to not introduce other 3rd party libraries apart from `Typescript` and `normalize.css`.
## Follow up improvements

- The currency input can be improved as it is handling comas but not dots. When the user adds a dot, input is cleaned up.

- Localization could be introduced here by `Intl.NumberFormat`. User locale could be taken into consideration in order to format the text of the input fields properly. Besides that, the selected `currency symbol` in the `<select>` markup could be taken into consideration in order to add prefix-sufix in the input with the proper symbol. (Ex: Show `£ 3.50` if user selects `GBP`)

- Unit tests could be added to cover API calls, Hooks, and also Component's behavior and UI

- E2E tests could be added, although rely on the `ExchangeRatesApi` using live data would not be the ideal scenario to assert the values of the conversions. For that case, some extra setup is required to create an specific environemnt that would provide the API with some proper mocked data

## Running the project

In order to run the project locally, you should create `.env` file in the root folder and provide there your `access key` for the ExchangeRates platform.

```
REACT_APP_ACCESS_KEY_EXCHANGE_RATES=${MY_ACCESS_KEY}
```

After doing that, be sure you have installed all dependencies, so you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in the interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder.\
