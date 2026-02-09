function tuxsay_getRandomQuote() {
    // 把新的名言剪贴到里面
    let quotes = [
        "Talk is cheap. Show me the code.",
        "代码胜于雄辩。",
        "Hello World!",
        "编程不是关于你知道什么，而是关于你能弄清楚什么。",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "First, solve the problem. Then, write the code.",
        "先解决问题，再写代码。",
        "Code is poetry.",
        "调试代码比写代码难两倍。",
        "Programming is understanding.",
        "最好的错误信息是让程序继续运行而不出错。",
        "Premature optimization is the root of all evil.",
        "过早优化是万恶之源。",
        "There are only two hard things in Computer Science: cache invalidation and naming things.",
        "Keep it simple, stupid.",
        "保持简单，笨蛋。",
        "It works on my machine.",
        "它能在我机器上运行。",
        "Everything is a file.",
        "开源是创新的引擎。",
        "Hardware is what you can hit with a hammer.",
        "Don't Repeat Yourself.",
        "不要重复自己。",
        "The only valid measurement of code quality is WTFs per minute.",
        "Write once, run anywhere.",
        "写一次，到处运行。",
        "No silver bullet.",
        "Software is eating the world.",
        "软件正在吞噬世界。",
        "If you can't explain it to a six year old, you don't understand it yourself.",
        "Simplicity is the ultimate sophistication.",
        "简单性是最高的复杂性。",
        "Testing is the art of finding failure.",
        "Your code should be beautiful.",
        "Programming is an act of creation.",
        "The best code is no code at all.",
        "最好的代码就是没有代码。",
        "More code, more bugs.",
        "代码写得越多，bug就越多。",
        "Clear code is better than clever code.",
        "清晰的代码胜于聪明的代码。",
        "If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem.",
        "Programming is not typing, it's thinking.",
        "编程不是打字，是思考。",
        "Good programmers write code that works. Great programmers write code that is understandable.",
        "The only constant is change.",
        "唯一不变的就是变化本身。",
        "A running system is the best documentation.",
        "If it ain't broke, don't fix it.",
        "如果它没坏，就不要修复它。",
        "Time is your most precious resource.",
        "Refactor, refactor, refactor.",
        "Code review is the best way to improve code quality.",
        "Continuous integration, continuous delivery.",
        "Data is the new oil.",
        "Security is not a feature, it's a requirement.",
        "Learning never stops.",
        "学习永不停止。",
        "Technology should serve humanity.",
        "Programming changes the world.",
        "Dreams are realized through code.",
        "Quality is free.",
        "Fail fast, fail often.",
        "快速失败，经常失败。",
        "Never stop being curious.",
        "永远不要停止好奇。",
        "Creativity requires play.",
        "Coffee is programmer fuel.",
        "咖啡是程序员燃料。",
        "Programming is both art and science.",
        "Details make the difference.",
        "Consistency is key.",
        "Persistence conquers all.",
        "坚持战胜一切。"
    ];
    let currentQuote = 
    quotes[
        Math.floor(
            Math.random()*quotes.length
        )
    ];
    return currentQuote;
}

function tuxsay_getRandomMascotPath() {
    // 把新的吉祥物添加到下面
    let mascotPaths = [
        './assets/tuxsay/mascots/128px-Mascot_konqi.png',
        './assets/tuxsay/mascots/Tux.png',
        './assets/tuxsay/mascots/Crystal_128_penguin.png',
        './assets/tuxsay/mascots/Daemon-phk.png'
    ];
    let currentMascotPath = 
    mascotPaths[
        Math.floor(
            Math.random()*mascotPaths.length
        )
    ];
    return currentMascotPath;
}

function getModule_tuxsay() {
    return `
    <div id="tuxsay">
        <div id="_tuxsay_quote">
            ${tuxsay_getRandomQuote()}
        </div>
        <img 
            id="_tuxsay_mascot"
            src="${tuxsay_getRandomMascotPath()}"
        ></img>
    </div> 
    `;
}

