// @ts-check
import { test, expect } from "@playwright/test";

test("renders the personal homepage", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Zhen Kit Kong/);
  await expect(page.getByRole("heading", { name: /Zhen Kit Kong/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Wakey" })).toBeVisible();
});

test("does not render project screenshots", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator('img[src*="matcha-settings"]')).toHaveCount(0);
  await expect(page.locator('img[src*="matcha-menu"]')).toHaveCount(0);
  await expect(page.locator("body")).not.toContainText("matcha-settings.jpeg");
  await expect(page.locator("body")).not.toContainText("matcha-menu.jpeg");
});

test("primary links are keyboard reachable", async ({ page }) => {
  await page.goto("/");

  const skipLink = page.getByRole("link", { name: "skip to projects" });
  const homeLink = page.getByRole("link", { name: "Go to the top of the homepage" });
  const projectsLink = page.getByRole("link", { name: "projects", exact: true });
  const contactLink = page.getByRole("link", { name: "contact", exact: true });

  await skipLink.focus();
  await expect(skipLink).toBeFocused();

  await homeLink.focus();
  await expect(homeLink).toBeFocused();

  await projectsLink.focus();
  await expect(projectsLink).toBeFocused();

  await contactLink.focus();
  await expect(contactLink).toBeFocused();
});
