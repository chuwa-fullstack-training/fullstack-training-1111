/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */
 
 //express version
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/hw1/:dir/:ext', (req, res) => {
    const dir = req.params.dir; // 从路由获取文件夹名称
    const ext = '.' + req.params.ext; // 从路由获取扩展名，添加 `.`

    const directoryPath = path.join(__dirname, dir); // 拼接路径

    // 检查目录是否存在
    if (!fs.existsSync(directoryPath)) {
        return res.status(404).json({ error: 'Directory not found' });
    }

    try {
        // 读取目录内容
        const items = fs.readdirSync(directoryPath);
        const result = [];

        // 筛选指定扩展名的文件
        items.forEach(item => {
            if (path.extname(item) === ext) {
                result.push(item);
            }
        });

        // 返回 JSON 格式的结果
        res.json(result);
    } catch (err) {
        // 错误处理
        res.status(500).json({ error: 'Server error', details: err.message });
    }
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});











const express = require('express');
const app = express();
const PORT = 3000;

// /api/parsetime 路由
app.get('/api/parsetime', (req, res) => {
  const iso = req.query.iso; // 获取查询参数
  if (!iso) {
    return res.status(400).json({ error: 'Missing "iso" parameter' });
  }

  const date = new Date(iso);
  if (isNaN(date)) {
    return res.status(400).json({ error: 'Invalid "iso" parameter' });
  }

  res.json({
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
  });
});

// /api/unixtime 路由
app.get('/api/unixtime', (req, res) => {
  const iso = req.query.iso; // 获取查询参数
  if (!iso) {
    return res.status(400).json({ error: 'Missing "iso" parameter' });
  }

  const date = new Date(iso);
  if (isNaN(date)) {
    return res.status(400).json({ error: 'Invalid "iso" parameter' });
  }

  res.json({ unixtime: date.getTime() });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
