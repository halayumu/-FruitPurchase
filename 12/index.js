//--------------------[商品注文処理]--------------------//
function Aplle() {
    //-----[商品名取得処理]-----//
    const cnt = parseInt(prompt('りんご一個160円いくつ購入しますか?'));

    //-----[価格計算処理]-----//
    document.write(`${cnt * 160}円です`);
    document.write(`${cnt}個の購入です`);
}

function banana() {
    //-----[商品名取得処理]-----//
    const cnt = parseInt(prompt('バナナ一個200円いくつ購入しますか?'));

    //-----[価格計算処理]-----//
    document.write(`${cnt * 200}円です`);
    document.write(`${cnt}個の購入です`);
}