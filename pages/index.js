import ProfileHead from '@/components/ProfileHead';
import ProjectSection from '@/components/ProjectSection';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`${inter.className} min-h-screen text-white bg-primary px-16 pb-16`}>
      <h1>Home Page</h1>
      <Link href="/client">
        <p>Client</p>
      </Link>
      <Link href="/freelancer">
        <p>Admin</p>
      </Link>
    </main>
  );
}
