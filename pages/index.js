import Image from 'next/image';
import { Inter } from 'next/font/google';
import ProjectCard from '@/components/ProjectCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <ProjectCard
        projectTitle={'Project Title'}
        projectDescription={
          'Lorem ipsum is used to demonstrate the visual form of a document or typeface without relying on meaningful content. It can be used as a placeholder before final copy is available'
        }
        status={'completed'}
        budget={'1000'}
        date={"July '23"}
        domains={'Web Development'}
      />
    </main>
  );
}
