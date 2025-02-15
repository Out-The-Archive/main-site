// app/page.tsx
import { queryDatabase } from '@/api/query-database';
import { parseProperties, Post } from '@/utils/parse-properties';
import Buzzlight from './components/buzzlight';

export default async function HomePage() {
  // Fetch and parse posts on the server
  const database = await queryDatabase();
  const posts: Post[] = parseProperties(database);

  return (
    /*<div>
      <h1>My Notion Blog</h1>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>    */
    
    <div className="flex flex-wrap justify-center gap-4 p-10">
      <Buzzlight 
        imageSrc="/bee.png" 
        hoverSrc="/blackbox.jpg" 
        alt="Hexagon Image 1"
      />
      <Buzzlight 
        imageSrc="/bee.png" 
        hoverSrc="/blackbox.jpg" 
        alt="Hexagon Image 2"
      />
      <Buzzlight 
        imageSrc="/bee.png" 
        hoverSrc="/blackbox.jpg" 
        alt="Hexagon Image 3"
      />
    </div>


  );
}
