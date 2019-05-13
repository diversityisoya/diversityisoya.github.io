var app = new Vue({
    el: '#app',
    data: {
        buki: '',
        list: ['チャージャー', 'シューター',
            'ローラー', 'マニューバ', 'スピナー',
            'ブラスター', 'フデ',
            'スロッシャー', 'シェルター'],

    },
    methods: {
        handler: function (comment) {
            console.log(comment)
        },
        BukiClick: function () {
            console.log("BukiClick")
            var num = Math.floor(Math.random() * 10)
            console.log(num)
            this.buki = this.list[num]
        },

    },
    created: function () {
        //created:アプリのインスタンスの生成が終わったらすぐに処理を行う
        console.log("created");
    },
    // updated: function () {
    //     console.log("updated");
    // }
})
//console.log(app.message);
