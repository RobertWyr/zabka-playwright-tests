# Żabka Playwright Tests

Zautomatyzowane testy end-to-end dla serwisu [zabka.pl](https://www.zabka.pl), stworzone z użyciem [Playwright](https://playwright.dev/).

## 📁 Struktura projektu

```
zabka-playwright-tests/
├── bugs/                    # Folder z błędami aplikacji
├── tests/                   # Pliki z testami E2E
├── playwright.config.ts     # Konfiguracja Playwright
├── package.json             # Skrypty, zależności
├── README.md
```

## 🚀 Skrypty uruchamiania

W pliku `package.json` dostępne są komendy:

| Skrypt             | Co robi                                                                 |
|--------------------|-------------------------------------------------------------------------|
| `npm run test`     | Uruchamia wszystkie testy w trybie headless                             |
| `npm run test-ui`  | Otwiera interfejs graficzny Playwright Test Runner                      |
| `npm run test-debug` | Uruchamia testy w trybie debugowania (pauza, devtools)                |
| `npm run test-headed` | Uruchamia testy w trybie okienkowym (przegl膮darka widoczna)          |
| `npm run test-trace` | Otwiera plik trace ZIP z poprzednich test贸w (trace viewer)           |
| `npm run report`   | Otwiera raport HTML z wynikami test贸w                                   |

## 🧪 Testy

Przykładowy test sprawdza, czy użytkownik (anonimowy) może przejść ze strony głównej do lokalizatora sklepów Żabka.

Test obejmuje:
- Zamknięcie popupów i banerów cookies
- Kliknięcie w link „Znajdź sklep”
- Walidację URL i zawartości strony

## ▶️ Uruchomienie testów

1. Zainstaluj zależności:
```bash
npm install
```

2. Uruchom testy:
```bash
npx playwright test
```

3. Otwórz raport:
```bash
npx playwright show-report
```

## 🛠 Wymagania

- Node.js >= 16
- NPM >= 8
- Chromium (instaluje się automatycznie z Playwright)

