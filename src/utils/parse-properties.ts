import { QueryDatabaseResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export type Post = {
  id: string;
  title: string;
};

// Type guard to check if the row is a PageObjectResponse
const isPageObjectResponse = (row: any): row is PageObjectResponse => {
  return "properties" in row;
};

export const parseProperties = (database: QueryDatabaseResponse): Post[] =>
  database.results
    .filter(isPageObjectResponse) // Filter out items that aren't PageObjectResponse
    .map((row) => {
      const id = row.id;
      const titleCell = row.properties.Title?.type === "title" ? row.properties.Title.title : [];
      const title = titleCell?.[0]?.plain_text || "Untitled";
      return { id, title };
    });
