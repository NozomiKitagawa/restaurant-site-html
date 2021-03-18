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

// $(function () {
//     $(".nav-toggle").on("click", function () {
//         $(this).toggleClass("open");
//     });
// });