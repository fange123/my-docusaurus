import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>我是文档的首页</div>
    </Layout>
  );
}
