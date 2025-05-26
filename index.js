const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 🔽 ここで public フォルダの中のファイルを表示できるようにする
app.use(express.static(path.join(__dirname, 'public')));

// 🔽 '/' にアクセスしたとき、public/index.html を表示する
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} でサーバー起動中！`);
});
