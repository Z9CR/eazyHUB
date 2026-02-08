"use strict"
// 读入./assets/modules.txt配置文件 
async function readModsInfo() {
    console.log('正在读取模块配置...');
    try{
        // 读入文件
        const response = await fetch('./modules.txt');
        // 获取文本
        const fileContent = await response.text();
        // 按行分割
        const lines = fileContent.split('\n');
        const modules = [];
        // 逐行处理
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            // 遇到 END_OF_FILE 停止
            if (line === 'END_OF_FILE') {
                break;
            }
            // 跳过空行
            if (line.length > 0) {
                modules.push(line);
            }
        }
        console.log('找到模块:', modules);
        return modules;
    } catch(err) {
        console.warn('当前路径为', window.location.href);
        throw '读入模块异常';
    };
    return [];
}

// 通过modName读入模块的div
// modName为字符串
async function readModule(modName) {
    if(typeof modName != 'string') {
        throw 'readModule 应该传入 string'
    }
    else {
        // 读取文件
        const response = await fetch(`./${modName}.html`);
        const html = await response.text();
        // 解析
        const tmpDiv = document.createElement('div');
        tmpDiv.innerHTML = html.trim();
        const ret = tmpDiv.firstElementChild;
        console.log("modInReading: ");
        console.log(ret);
        return ret;
    }
}

// 将./index.html中的id = "xxx"的<div>替换为 ./xxx.html中的<div>
// mod应该是一个DOM
// id为string
function loadModule(mod, id) {
    const targetElement = document.getElementById(id);
    if(!targetElement) {
        console.log(`无元素的id=${id}`);
        return false;
    }
    else {
        console.log(`找到id=${id}的div`);
        targetElement.parentNode.replaceChild(mod, targetElement);
        return true;
    }
}

// 主程序
(async function() {
    const modsNames = await readModsInfo();
    for(let modName of modsNames) {
        const currentMod = await readModule(modName);
        // 替换为模块中的div
        // $modName 就是 id
        loadModule(currentMod, modName);
    }
})();

