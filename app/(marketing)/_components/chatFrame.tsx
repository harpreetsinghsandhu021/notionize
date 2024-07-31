"use client";
import { useRef, useEffect } from "react";

interface Dimensions {
  width: number;
  height: number;
}

const ChatFrame = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const iframeStyles = (styleString: string) => {
      const style = document.createElement("style");
      style.textContent = styleString;
      document.head.appendChild(style);
    };

    iframeStyles(`
      .chat-frame {
        position: fixed;
        right:0;
        bottom:0;
        border: none;
        height: 95vh;
        width:540px;
        z-index:99;
        pointer-events:all;
      }
    `);

    iframe.src = "http://localhost:3001"; // Replace with actual URL
    iframe.classList.add("chat-frame");

    iframe.onload = () => {
      setTimeout(() => {
        try {
          iframe.contentWindow?.postMessage(3, "http://localhost:3001"); // Replace with actual URL
        } catch (err) {
          console.error("Error sending postMessage:", err);
        }
      }, 100);
    };

    const handleMessage = (e: MessageEvent<string>) => {
      if (e.origin !== "http://localhost:3000") return; // Replace with actual origin
      const dimensions: Dimensions = JSON.parse(e.data);
      iframe.width = `${dimensions.width}`;
      iframe.height = `${dimensions.height}`;
      iframe.contentWindow?.postMessage("3", "http://localhost:3001/"); // Replace with actual URL
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src=""
      style={{ colorScheme: "normal" }}
      className="chat-frame"
    ></iframe>
  );
};

export default ChatFrame;
