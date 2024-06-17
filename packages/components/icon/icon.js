const requireAll = r => r.keys().map(r);
// 加载目录下的所有的 svg 文件
requireAll(require.context("../../icons", true, /\.svg$/));