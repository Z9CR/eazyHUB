function getModule_searchBar() {
    return `
    <div id="searchBar">
        <input type="text" 
               placeholder="🔍︎      此处搜索"
               style="
                   width: 45vw;
                   padding: 12px 20px;
                   border: 2px solid #4285f4;
                   border-radius: 25px;
                   font-size: 16px;
                   outline: none;
                   box-shadow: 0 4px 15px rgba(66, 133, 244, 0.2);
               "
               onkeypress="if(event.key==='Enter') window.open('https://www.bing.com/search?q='+encodeURIComponent(this.value), '_blank');">
    </div>
    `;
}
