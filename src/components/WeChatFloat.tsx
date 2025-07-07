import { useState } from 'react';

const WeChatFloat = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="fixed z-50 right-6 bottom-6 flex flex-col items-end"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <button
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-3 flex items-center justify-center focus:outline-none"
        onClick={() => setShow((v) => !v)}
        aria-label="微信二维码"
      >
        <span className="mr-2 font-medium text-base">联系我们</span>
        <svg width="28" height="28" viewBox="0 0 1024 1024" fill="none"><circle cx="512" cy="512" r="512" fill="#fff"/><path d="M512 128C300.3 128 128 300.3 128 512c0 211.7 172.3 384 384 384s384-172.3 384-384c0-211.7-172.3-384-384-384zm0 704c-176.7 0-320-143.3-320-320s143.3-320 320-320 320 143.3 320 320-143.3 320-320 320z" fill="#1AAD19"/><circle cx="384" cy="480" r="32" fill="#1AAD19"/><circle cx="512" cy="480" r="32" fill="#1AAD19"/><circle cx="640" cy="480" r="32" fill="#1AAD19"/></svg>
      </button>
      {show && (
        <div className="mb-3 bg-white rounded-xl shadow-2xl p-4 flex flex-col items-center animate-fade-in border border-gray-200" style={{minWidth: 200}}>
          <img
            src="/微信二维码.jpg"
            alt="微信二维码"
            className="w-40 h-40 object-contain mb-2 rounded"
          />
          <div className="text-sm text-gray-700 font-medium">CEO金戈宁</div>
        </div>
      )}
    </div>
  );
};

export default WeChatFloat; 