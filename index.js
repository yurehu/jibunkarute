// index.js（または server.js）

const express = require('express');
const app = express();
const path = require('path');

// 静的ファイルを公開（HTMLやJSなど）
app.use(express.static(path.join(__dirname, 'public')));

// ルートにアクセスしたら index.html を返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`サーバーが起動しました: http://localhost:${PORT}`);
});

