import Image from 'next/image';
import { getPosts } from '@/lib/data';
import styles from './adminPosts.module.css';
import { deletePost } from '@/lib/actions';

export default async function AdminPosts() {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image src={post.img || '/noAvatar.png'} alt="avatar" width={50} height={50} />
            <span>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete post</button>
          </form>
        </div>
      ))}
    </div>
  );
}
