(function () {
    function paintStars() {
        var stars = 400; /*星星的密集程度，数字越大越多*/
        var $stars = $(".stars");
        var r = 800; /*星星的看起来的距离,值越大越远,可自行调制到自己满意的样子*/
        for (var i = 0; i < stars; i++) {
            var $star = $("<div/>").addClass("star");
            $stars.append($star);
        }
        $(".star").each(function () {
            var cur = $(this);
            var s = 0.2 + (Math.random() * 1);
            var curR = r + (Math.random() * 300);
            cur.css({
                transformOrigin: "0 0 " + curR + "px",
                transform: " translate3d(0,0,-" + curR + "px) rotateY(" + (Math
                        .random() * 360) + "deg) rotateX(" + (Math.random() * -50) +
                    "deg) scale(" + s + "," + s + ")"
            })
        })
    }

    function toggleBackGround() {
        let str = [
            "星空下仰望的姑娘",
            "不知道这是你第几个难以入睡的夜晚",
            "也不知道星星的光亮",
            "能否温暖你冰凉的脚丫儿",
            "我只知道 星空的另一端",
            "为你担忧的人",
            "也在黑暗中遥望",
            "为你祈求一个甜美的梦乡",
            "那梦里 有温温柔柔的月",
            "还有",
            "彼此依偎的时光..."
        ];
        let i = 0;
        let interval = null;

        function fellback() {
            clearInterval(interval);
            $('.txt').html(str[i]);
            if (i === 10) {
                $('.txt').addClass("bigTxt");
                $('.moonImg').fadeIn(2000);
                $('.peopleImg').fadeOut(2000);
            } else {
                if (i === 0) {
                    $('.peopleImg').fadeIn(2000);
                } else if (i === 4) {
                    $('.peopleImg').fadeOut(2000);
                } else if (i === 5) {
                    $('.peopleImg').attr('src', 'img/4.png').fadeIn(2000);
                }
                interval = setInterval(fellback, 2500);
                i++;
            }
        }
        interval = setInterval(fellback, 1000);
    }
    $(document).ready(function () {
        paintStars();
        toggleBackGround();
    });
})();