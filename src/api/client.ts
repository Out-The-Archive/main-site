import { Client } from '@notionhq/client';

const NOTION_KEY = process.env.NOTION_KEY ?? '';

export const notion = new Client({ auth: NOTION_KEY });