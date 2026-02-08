"use strict"
// 外部实现了函数 getConfig()
// 返回字符串数组，包含模块名称

// 外部实现了函数 getModule_xxx()
// 返回一个div块

// 通过modName读入模块的div
// modName为字符串
async function readModule(modName) {
    if (typeof modName !== 'string') {
        throw new Error('readModule 应该传入 string');
    }
    
    try {
        // 获取HTML字符串
        const funcName = 'getModule_' + modName;
        if (typeof window[funcName] !== 'function') {
            throw new Error(`函数 ${funcName} 未定义`);
        }
        const htmlString = window[funcName]();
        if (typeof htmlString !== 'string') {
            throw new Error(`函数 ${funcName} 应该返回字符串`);
        }
        // 转换为DOM元素
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString.trim();
        // 获取第一个元素（应该是div）
        const moduleDiv = tempDiv.firstElementChild;
        if (!moduleDiv) {
            throw new Error(`模块 ${modName} 返回的HTML无效`);
        }
        console.log(`模块 ${modName} 加载成功:`, moduleDiv);
        return moduleDiv;
    } catch (err) {
        console.error(`读取模块 ${modName} 失败:`, err);
        // 返回错误占位符
        const errorDiv = document.createElement('div');
        errorDiv.id = modName;
        errorDiv.innerHTML = `<div style="color:red;padding:10px;border:1px solid red;">
            模块加载失败: ${modName}<br>${err.message}
        </div>`;
        return errorDiv;
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
    const modsNames = getConfig();
    console.log("模块列表: ", modsNames);
    for(let modName of modsNames) {
        const currentMod = await readModule(modName);
        const success = loadModule(currentMod, modName);
        if (success) {
            console.log(`${modName} 加载成功`);
        }
        else {
            console.error(`${modName} 加载失败`);
        }
    }
})();
