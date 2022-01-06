import React, { FC } from "react";
import { Layout, Menu } from "antd";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import styles from "./BasicLayout.module.css";

const { Header, Content, Sider, Footer } = Layout;

export const BasicLayout: FC = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        Solana Labs
        <div className={styles.walletButtons}>
          <WalletMultiButton />
        </div>
      </Header>
      <Layout>
        <Sider>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item key="1">Airdrop</Menu.Item>
          </Menu>
        </Sider>
        <Content className={styles.content}>{children}</Content>
      </Layout>
      <Footer className={styles.footer}>Github</Footer>
    </Layout>
  );
};
