const body = document.querySelector('body')
const h = document.createElement('h1')
const script = document.querySelector('script')
console.log(h);
const str = `西风烈，
长空雁叫霜晨月。
霜晨月，
马蹄声碎，
喇叭声咽。
雄关漫道真如铁，
而今迈步从头越。
从头越，
苍山如海，
残阳如血` // 'sdjklfds;adfjk'
let index = 0
let timer = setInterval(() => {
    if (index < str.length) {
        h.innerText += str[index]
        index++
    } else {
        clearInterval(timer)
    }
}, 50);
body.insertBefore(h, script)