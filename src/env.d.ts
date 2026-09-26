/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly REVIEWS_SHEET_CSV_URL?: string;
  readonly REVIEW_FORM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}