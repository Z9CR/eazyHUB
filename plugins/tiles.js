//***
//*** Do not put it before 
//*** `<script src="./loadModule.js"></script>`
//*** And Never put it into moduleLoadList
//***

function getModule_tiles() {
    return `
        <div id="tiles">
            <!--JS code will add tiles in auto-->
            <!--a tile should in class "_tiles_tile"-->
            
        </div>
        <br>
    `;
}

// 在此编辑你的url
function _tiles_getTilesUrls() {
    return [
        "https://www.bilibili.com",
        "https://chat.deepseek.com",
        "https://www.github.com",
        "https://www.leetcode.cn",
        "https://www.runoob.com"
    ];
}

// @url: 字符串格式的url
// @return: 返回图标的网址
function _tiles_getFaviconOf(url) {
    const specialUrls = {
        // 如果有网站的favico不能正常解析，
        // 把正确的favico地址加入数组
        "chat.deepseek.com": "https://www.deepseek.com/favicon.ico"
    }
    const domain = new URL(url).hostname;
    try {
        if(domain in specialUrls){
            return specialUrls[domain];
        }
        else{
            return `https://${domain}/favicon.ico`;
        }
    } catch (e) {
        console.warn(`@Module:tiles 获取${url}的ico失败`);
        return null;
    }
}

// 把新的磁贴写入doc
function _tiles_loadTilesDiv() {
    const urls = _tiles_getTilesUrls();
    for(const url of urls) {
        const icon = _tiles_getFaviconOf(url);
        // 获取磁贴总版块
        let allTiles = document.getElementById("tiles");
        const newTile = `
            <a href="${url}" target="_self" class="_tiles_tile">
                <img src="${icon}" alt=${url} class="_tiles_tileImg">
            </a>`;
        allTiles.insertAdjacentHTML("beforeend", newTile);
    }
}

_tiles_loadTilesDiv();
