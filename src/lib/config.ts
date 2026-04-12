export const config = {
  webserbisyoBaseUrl: process.env.NEXT_PUBLIC_WEBSERBISYO_BASE_URL ?? "",
  storeSlug: process.env.NEXT_PUBLIC_STORE_SLUG ?? "red-oscar",
  menuUrl: process.env.NEXT_PUBLIC_MENU_URL ?? "",
} as const;
