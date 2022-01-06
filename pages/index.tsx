import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Index: NextPage = () => {
  console.log("2");
  return (
    <div className={styles.container}>
      <Head>
        <title>My Solana Labs</title>
        <meta name="description" content="Solana labs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.walletButtons}>
          <WalletMultiButton />
          <WalletDisconnectButton />
        </div>
      </main>
    </div>
  );
};

export default Index;
