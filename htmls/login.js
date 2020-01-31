const divEle = document.querySelector('.mixiujuan'),
    infoArea = document.querySelector('.infoArea');
divEle.innerHTML = wrapWithSpan(divEle.textContent);

function wrapWithSpan(words) {
    return [...words].map(letter => `<span>${letter}</span>`).join('');
}

function checkAccount(that) {
    let errorInfo = '';
    switch (that.value) {
        case "娄益":
        case "louyi":
            errorInfo = "你就这么想他？";
            break;
        case "米秀娟":
        case "mixiujuan":
            errorInfo = "嗯，很接近了，加油";
            break;
        default:
            errorInfo = "";
    }
    infoArea.innerHTML = `${errorInfo}`;
}

function login() {
    const wrapEle = document.querySelector('.wrap'),
        account = document.querySelector('.account'),
        password = document.querySelector('.password');
    let Node = '';
    if (account.value === "小麋鹿" && password.value === "扑通扑通") {
        alert('1');
        window.goto("accountInfo");
    }
}