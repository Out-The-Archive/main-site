// app/page.tsx
import { queryDatabase } from '@/api/query-database';
import { parseProperties, Post } from '@/utils/parse-properties';

export default async function HomePage() {
  // Fetch and parse posts on the server
  const database = await queryDatabase();
  const posts: Post[] = parseProperties(database);

  return (
    <div>
      <h1>My Notion Blog</h1>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
