export const SITE_TITLE = 'Livro de Receitas';
export const SITE_DESCRIPTION = 'Receitas caseiras da nossa cozinha';

export const CATEGORIES = ['Doces', 'Pratos Principais', 'Pães', 'Acompanhamentos'] as const;
export type Category = (typeof CATEGORIES)[number];
