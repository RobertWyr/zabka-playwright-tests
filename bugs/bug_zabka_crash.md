# Zgłoszenie błędu – Aplikacja Żabka

## 🐞 Problem

Po wejściu w moduł **„Przejazdy”** w aplikacji Żabka na niezalogowanym koncie dochodzi do **nagłego zamknięcia aplikacji (crashu)**.

---

## 📱 Środowisko testowe

- **Wersja aplikacji:** 4.11.3  
- **Model telefonu:** Motorola G72  
- **System:** Android 13

---

## 🔁 Kroki do odtworzenia

1. Uruchom aplikację Żabka bez logowania.
2. Przejdź do sekcji „Przejazdy”.
3. Aplikacja natychmiast się zamyka (crash).
4. Na koncie zalogowanym moduł działa poprawnie.
5. Zamiast crasha powinien pojawić się modal zachęcający do założenia konta (tak jak w module Gaming).

---

## 💥 Log błędu (z `adb logcat`)

```
FATAL EXCEPTION: main
java.lang.IllegalStateException: UserID is required to retrieve Firestore document
    at jw0.o.c(Unknown Source:78)
    ...
```

```
05-15 10:51:08.223   674   674 E AndroidRuntime: FATAL EXCEPTION: main
05-15 10:51:08.223   674   674 E AndroidRuntime: java.lang.IllegalStateException: UserID is required to retrieve Firestore document
...
05-15 10:58:56.227  3528  3528 E AndroidRuntime:        at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:957)
```

---

## 📌 Sugestia

Zamiast crasha, aplikacja powinna wyświetlać modal informujący, że moduł „Przejazdy” wymaga założenia konta / logowania – analogicznie jak w przypadku innych funkcji dostępnych po autoryzacji.

