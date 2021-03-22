// モーダルウィンドウの実装
$(function () {
    $(".inner").on("click", function () {
        $(this).toggleClass("active");
        $(".modal").toggleClass("open");

        const $title = $(this).find(".inner-title")[0].innerText;
        const $content = $(this).find(".inner-content")[0].textContent;
        var $img = $(this).find("img").attr("src");

        if ($(".inner").hasClass("active")) {
            $(".modal-title").text($title);
            $(".modal-content").text($content);
            $(".modal-img").attr("src", $img);
        };
    });
    $(".modal-bg").on("click", function () {
        $(".modal").toggleClass("open");
    });
    $(".modal-close-btn").on("click", function () {
        $(".modal").toggleClass("open");
    });

});

// ハンバーガークリックで中身のofferをタブ表示
$(function () {
    $(".nav-toggle").click(function () {
        $(".nav-wrapper").toggleClass("open");

        // ハンバーガーメニューが開いている時にハンバーガーボタンをバツにする機能
        $(".nav-toggle span").toggleClass("open");
        $(".open").eq(0).addClass("open0");
        $(".open").eq(1).addClass("open1");
        $(".open").eq(2).addClass("open2");
        $("span").css({
            transition: "300ms"
        })
    });
});

// aタグをクリックした時にページ遷移のアニメーションを付ける

// 画面が読み込まれた時、is-slideを外し、アニメーションさせる
$(window).on('load', function () {
    $('body').removeClass('is-slide');
});

$(function () {
    // ハッシュリンク(#)と別ウィンドウでページを開く場合は実行しない

    $('a:not([href^="#"]):not([target])').on('click', function (e) {
        e.preventDefault();         // ページ遷移を一旦キャンセル
        url = $(this).attr('href'); // 遷移先のURLを取得

        if (url !== '') {
            $('body').addClass('is-slide-in'); // 画面遷移前のアニメーション is-slide-in

            setTimeout(function () {
                window.location = url;  // 0.7秒後に取得したURLに遷移
            }, 700);
        }
        return false;
    });

});