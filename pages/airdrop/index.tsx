import { NextPage } from "next";
import { Input, Button, Space, message } from "antd";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const sleep = async (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Airdrop: NextPage = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [account, setAccount] = useState<PublicKey | null>(null);
  const [balance, setBalnace] = useState(0);
  const [hash, setHash] = useState("");

  useEffect(() => {
    setAccount(wallet.publicKey);
  }, [wallet.publicKey]);

  useEffect(() => {
    requireBalance();
  }, [account, connection]);

  const requireBalance = async () => {
    if (!account) return;

    try {
      const { value } = await connection.getBalanceAndContext(account);
      setBalnace(value);
    } catch (error: any) {
      console.error(error);
    }
  };

  const requireAirdrop = async () => {
    if (!account) return;

    try {
      const hash = await connection.requestAirdrop(account, LAMPORTS_PER_SOL);
      setHash(hash);
      requireBalance();

      message.success("Airdrop success!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Space direction="vertical">
      <div>Balance: {balance / LAMPORTS_PER_SOL} SOL</div>

      <div>
        Account:{" "}
        <Input
          readOnly
          disabled
          size="large"
          value={account?.toString()}
          style={{ width: "420px" }}
        />
      </div>

      <Button size="large" type="primary" block onClick={requireAirdrop}>
        Require 1 SOL
      </Button>

      {hash && <div>Transaction: {hash}</div>}
    </Space>
  );
};

export default Airdrop;
