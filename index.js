const express = require('express');
const path = require('path');
const app = express();

// public フォルダを静的ファイルとして使う
app.use(express.static(path.join(__dirname, 'public')));

// ルートにアクセスが来たら index.html を返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Render用ポート設定
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`サーバー起動中: http://localhost:${PORT}`);
});


