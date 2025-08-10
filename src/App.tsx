import React, { useState } from "react";
import productImg from "./assets/wechat_2025-07-27_223736_827.png";

const PRODUCT_NAME = "内定小马";
const MAIN_TEXT = "AI 时代 Web Test 助手";
const SUB_TEXT = "加入用户群，多一些情报🥳";
const SUB_TEXT_LINK = "https://docs.google.com/document/d/1pYYLSmAVMUPMryCnV8P8mCtTw-vvK2JVjTi5Z-x03P0/";
const DMG_ARM64 = "https://ark-auto-2102030424-cn-beijing-default.tos-cn-beijing.volces.com/packages/20250810/%E5%86%85%E5%AE%9A%E5%B0%8F%E9%A9%AC-1.0.1-arm64.dmg";
const DMG_INTEL = "https://ark-auto-2102030424-cn-beijing-default.tos-cn-beijing.volces.com/packages/20250810/%E5%86%85%E5%AE%9A%E5%B0%8F%E9%A9%AC-1.0.1.dmg";
const WINDOWS_EXE = "https://ark-auto-2102030424-cn-beijing-default.tos-cn-beijing.volces.com/packages/20250810/%E5%86%85%E5%AE%9A%E5%B0%8F%E9%A9%AC-1.0.1-win.zip";

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
      <div style={{ display: "flex", gap: 18 }}>
        <a
          href={DMG_ARM64}
          style={buttonStyle}
        >
          .dmg (Apple Silicon)
        </a>
        <a
          href={DMG_INTEL}
          style={buttonStyle}
        >
          .dmg (Intel)
        </a>
        <a
          href={WINDOWS_EXE}
          style={buttonStyle}
        >
          Windows
        </a>
      </div>
      <div style={{ position: "fixed", bottom: 18, fontSize: 13, color: "#aaa", opacity: 0.7 }}>
        © {new Date().getFullYear()} 内定小马
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "12px 28px",
  fontSize: 16,
  fontWeight: 600,
  cursor: "pointer",
  boxShadow: "0 2px 12px 0 rgba(0,198,255,0.10)",
  transition: "transform 0.1s, box-shadow 0.1s",
};

export default App;
