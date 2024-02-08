function printOrderTotal(responseString) {
    try {
        let responseJSON = JSON.parse(responseString);
        let orderSubtotal = 0;
        try {
            responseJSON.forEach(function (item) {
                item.price = Number(item.price);
                orderSubtotal += !isNaN(item.price) ? item.price : 0;
            })
            console.log('Стоимость заказа: ' + (orderSubtotal > 0 ? orderSubtotal + ' руб.' : 'бесплатно'));
        } catch (e) {
            console.log("Ошибка при парсинге JSON: невозможно перебрать товары в заказе!")
        }
    } catch(e) {
        console.log("Ошибка при парсинге JSON: полученный JSON имеет неверный формат!")
    }
}