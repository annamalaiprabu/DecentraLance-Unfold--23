import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  const handelConnect = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];
    if (account) {
      router.push('signup');
    } else {
      alert('Please connect your wallet');
    }
  };

  return (
    <main
      className={`${inter.className} min-h-screen text-white bg-primary px-16 pb-16`}>
      <h1>Home Page</h1>
      <button onClick={handelConnect}>
        <p>Connect Wallet</p>
      </button>
    </main>
  );
}
