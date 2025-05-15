import { test, expect } from '@playwright/test';

test.describe('Lokalizator sklepów Żabka', () => {
  // Przed każdym testem: nowa sesja, wejście na stronę, zamknięcie popupów i bannerów
  
  test.beforeEach(async ({ page }) => {
    // 1. Wejdź na stronę główną i poczekaj na pełne załadowanie
    await page.goto('https://www.zabka.pl/');
    await page.waitForLoadState('networkidle');

    // 2. Zamknij wszelkie pop-upy przez naciśnięcie Esc
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);

    // 3. Zamknij ewentualny banner cookies
    const cookieBtn = page.locator('button:has-text("Akcept")').first();
    if (await cookieBtn.isVisible({ timeout: 2000 })) {
      await cookieBtn.click();
    }
  });

  // TC01: przechodzi na lokalizator sklepów Żabka
  test.only('przechodzi z homepage na lokalizator sklepów Żabka', async ({ page }) => {
    // 4. Odnajdź link „Znajdź sklep”, hover i click
    const findStoreLink = page.locator('a[href*="/znajdz-sklep"]', { hasText: 'Znajdź sklep' }).first();
    await findStoreLink.waitFor({ state: 'visible', timeout: 5000 });
    await findStoreLink.hover();
    await findStoreLink.click({ force: true });

    // 5. Zweryfikuj, że adres URL zawiera "/znajdz-sklep"
    await expect(page).toHaveURL(/\/znajdz-sklep/);

    // 6. Sprawdź nagłówek h1
    await expect(page.locator('h1')).toHaveText('Znajdź sklep Żabka');

    // 7. Upewnij się, że zachęta „Podaj lokalizację” jest widoczna
    await expect(page.locator('text=Podaj lokalizację')).toBeVisible();
  });
});
