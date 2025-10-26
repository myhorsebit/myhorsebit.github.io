import React from "react";
import productImg from "./assets/wechat_2025-07-27_223736_827.png";

const PRODUCT_NAME = "内定小马";
const MAIN_TEXT = "AI 时代 Web Test 助手";
const SUB_TEXT = "前往下载";
const SUB_TEXT_LINK = "https://r3zpy9khqv.feishu.cn/wiki/L19NwaGtYi2zepkoNalcp3Rgnre";

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', 'HarmonyOS Sans', 'PingFang SC', 'Microsoft YaHei', sans-serif",
      letterSpacing: 1,
    }}>
      <div style={{
        fontSize: 48,
        fontWeight: 800,
        marginBottom: 16,
        letterSpacing: 2,
        background: "linear-gradient(90deg, #00c6ff, #0072ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>{PRODUCT_NAME}</div>
      <img
        src={productImg}
        alt="产品截图"
        style={{ width: 200, maxWidth: "90vw", borderRadius: 12, marginBottom: 20, boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)" }}
      />
      <div style={{ fontSize: 22, fontWeight: 500, marginBottom: 32, opacity: 0.92 }}>{MAIN_TEXT}</div>
      <a
        href={SUB_TEXT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: 16,
          color: "#00c6ff",
          background: "rgba(255,255,255,0.06)",
          padding: "8px 20px",
          borderRadius: 20,
          marginBottom: 40,
          textDecoration: "none",
          transition: "background 0.2s",
          boxShadow: "0 2px 12px 0 rgba(0,198,255,0.08)",
        }}
      >
        {SUB_TEXT}
      </a>
      <div style={{ position: "fixed", bottom: 18, fontSize: 13, color: "#aaa", opacity: 0.7 }}>
        © {new Date().getFullYear()} 内定小马
      </div>
    </div>
  );
}

export default App;
