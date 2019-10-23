// require : モジュールを読み込む
const os = require('os');
const path = require('path');

console.log(os.platform());

// processオブジェクト

// process.argv 引数取得
for (let i = 0, len = process.argv.length; i < len; i++) {
  console.log(`${i}: ${process.argv[i]}`);
}

// process.env 環境変数取得
for (let key in process.env) {
  console.log(`${key} : ${process.env[key]}`);
}

// 現在のワークディレクトリが取得
console.log(process.cwd());

// 実行しているファイルのパスに変更
console.log(process.cwd());
process.chdir(__dirname);
console.log(process.cwd());
