# Instrukcja uruchomienia aplikacji

## Wymagania

- Node >20.0.0
- npm >10.0.0

## Uruchomienie

1. Wykonaj polecenie `npm install` w głównym katalogu projektu
2. Wykonaj polecenie `npm start:backend` w głównym katalogu projektu. 
By uruchomić kilka serwerów backendowych, wykonaj to samo polecenie kilka razy w różnych terminalach.
3. Wykonaj polecenie `npm start:frontend` w głównym katalogu projektu.
4. Aplikacja będzie dostępna pod adresem `http://localhost:3000/`

Aby zatrzymać serwery, naciśnij `Ctrl+C` w terminalu, w którym zostały uruchomione.

## Przykładowe dane

Serwer backendowy udostępnia API pozwalające na manipulacje danych. Niżej spis dostępnych endpointów.

1. `GET /blocks` - zwraca listę bloków
2. `GET /peers` - zwraca listę peerów
3. `GET /diplomas` - zwraca listę dyplomów
4. `POST /add-diploma` - dodaje blok z danymi do dyplomy
5. `POST /generate-mock-diplomas` - generuje liste przykładowych dyplomów

Każdy serwer backendowy wyświetla na konsoli informacje o swoim adresie IP i porcie, na którym nasłuchuje.
Używając tych informacji, można wykonywać zapytania do serwera.

Przykładowy zapytanie: `curl http://localhost:3001/generate-mock-diplomas -X POST`

