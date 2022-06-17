app.post('/all-products-add', (req, res) => {

    const products1 = new Products({
        name: 'Bee No 1',
        src: 'bee_no_1.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 30,
            widthtop: 0,
            widthunder: 0,
            height: 35,
            heighttop: 0,
            heightunder: 0,
            depth: 30,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 6.8,
        },
        newPrice: 450,
        oldPrice: 450,
        objectType: 'pot',
        collectionName: 'bee',
        fav: 3802,
        stock: 0,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products2 = new Products({
        name: 'Bee No 2',
        src: 'bee_no_2.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 60,
            widthtop: 0,
            widthunder: 0,
            height: 70,
            heighttop: 0,
            heightunder: 0,
            depth: 60,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 57,
        },
        newPrice: 850,
        oldPrice: 850,
        objectType: 'pot',
        collectionName: 'bee',
        fav: 3802,
        stock: 0,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products3 = new Products({
        name: 'Bee No 3',
        src: 'bee_no_3.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 70,
            widthunder: 91,
            height: 56,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 70,
            depthunder: 91,
            diameter: 0,
            weight: 0,
        },
        newPrice: 1350,
        oldPrice: 1350,
        objectType: 'pot',
        collectionName: 'bee',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products4 = new Products({
        name: 'Bee No 4',
        src: 'bee_no_4.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 80,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 49,
            weight: 57,
        },
        newPrice: 1500,
        oldPrice: 1500,
        objectType: 'pot',
        collectionName: 'bee',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products5 = new Products({
        name: 'Bee No 5',
        src: 'bee_no_5.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 53,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 47,
            weight: 25,
        },
        newPrice: 950,
        oldPrice: 950,
        objectType: 'pot',
        collectionName: 'bee',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products6 = new Products({
        name: 'Bee No 6',
        src: 'bee_no_6.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 37,
            widthtop: 0,
            widthunder: 0,
            height: 33,
            heighttop: 0,
            heightunder: 0,
            depth: 37,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 23,
        },
        newPrice: 450,
        oldPrice: 450,
        objectType: 'pot',
        collectionName: 'bee',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products7 = new Products({
        name: 'Bee No 7',
        src: 'bee_no_7.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 26,
            widthunder: 22.5,
            height: 13.5,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 26,
            depthunder: 22.5,
            diameter: 0,
            weight: 6.5,
        },
        newPrice: 300,
        oldPrice: 300,
        objectType: 'pot',
        collectionName: 'bee',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products8 = new Products({
        name: 'Column No 1',
        src: 'column_no_1.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 0,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 1100,
        oldPrice: 1100,
        objectType: 'furniture',
        collectionName: 'column',
        oldPrice: 1100,
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products9 = new Products({
        name: 'Column No 2',
        src: 'column_no_2.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 0,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 850,
        oldPrice: 850,
        objectType: 'furniture',
        collectionName: 'column',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products10 = new Products({
        name: 'Covering No 1',
        src: 'covering_no_1.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 20,
            widthtop: 0,
            widthunder: 0,
            height: 20,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 85,
        oldPrice: 85,
        objectType: 'covering',
        collectionName: 'covering',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products11 = new Products({
        name: 'Covering No 2',
        src: 'covering_no_2.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 20,
            widthtop: 0,
            widthunder: 0,
            height: 20,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 85,
        oldPrice: 85,
        objectType: 'covering',
        collectionName: 'covering',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products12 = new Products({
        name: 'Covering No 3',
        src: 'covering_no_3.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 20,
            widthtop: 0,
            widthunder: 0,
            height: 20,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 85,
        oldPrice: 85,
        objectType: 'covering',
        collectionName: 'covering',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products13 = new Products({
        name: 'Covering No 4',
        src: 'covering_no_4.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 20,
            widthtop: 0,
            widthunder: 0,
            height: 20,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 85,
        oldPrice: 85,
        objectType: 'covering',
        collectionName: 'covering',
        fav: 3802,
        stock: 0,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products14 = new Products({
        name: 'Covering No 5',
        src: 'covering_no_5.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 20,
            widthtop: 0,
            widthunder: 0,
            height: 20,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 85,
        oldPrice: 85,
        objectType: 'covering',
        collectionName: 'covering',
        fav: 3802,
        stock: 0,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products15 = new Products({
        name: 'Covering No 6',
        src: 'covering_no_6.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 20,
            widthtop: 0,
            widthunder: 0,
            height: 20,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 85,
        oldPrice: 85,
        objectType: 'covering',
        collectionName: 'covering',
        fav: 3802,
        stock: 0,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products16 = new Products({
        name: 'Covering No 7',
        src: 'covering_no_7.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 20,
            widthtop: 0,
            widthunder: 0,
            height: 20,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 85,
        oldPrice: 85,
        objectType: 'covering',
        collectionName: 'covering',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products17 = new Products({
        name: 'Covering No 8',
        src: 'covering_no_8.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 20,
            widthtop: 0,
            widthunder: 0,
            height: 20,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 85,
        oldPrice: 85,
        objectType: 'covering',
        collectionName: 'covering',
        fav: 3802,
        stock: 0,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products18 = new Products({
        name: 'Covering No 9',
        src: 'covering_no_9.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 20,
            widthtop: 0,
            widthunder: 0,
            height: 20,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 85,
        oldPrice: 85,
        objectType: 'covering',
        collectionName: 'covering',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products19 = new Products({
        name: 'Hive No 1',
        src: 'hive_no_1.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 16.5,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 33.5,
            weight: 4.2,
        },
        newPrice: 300,
        oldPrice: 300,
        objectType: 'pot',
        collectionName: 'hive',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products20 = new Products({
        name: 'Hive No 2',
        src: 'hive_no_2.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 36,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 81,
            weight: 30,
        },
        newPrice: 1500,
        oldPrice: 1500,
        objectType: 'pot',
        collectionName: 'hive',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products21 = new Products({
        name: 'Hive No 3',
        src: 'hive_no_3.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 16.5,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 26,
            weight: 3.8,
        },
        newPrice: 300,
        oldPrice: 300,
        objectType: 'pot',
        collectionName: 'hive',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products22 = new Products({
        name: 'HoneyComb No 1',
        src: 'honeycomb_no_1.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 50,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 64,
            weight: 41,
        },
        newPrice: 1500,
        oldPrice: 1500,
        objectType: 'pot',
        collectionName: 'honeycomb',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products23 = new Products({
        name: 'HoneyComb No 2',
        src: 'honeycomb_no_2.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 70,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 68,
            weight: 32
        },
        newPrice: 1500,
        oldPrice: 1500,
        objectType: 'pot',
        collectionName: 'honeycomb',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products24 = new Products({
        name: 'HoneyComb No 3',
        src: 'honeycomb_no_3.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 53,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 47,
            weight: 25
        },
        newPrice: 950,
        oldPrice: 950,
        objectType: 'pot',
        collectionName: 'honeycomb',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products25 = new Products({
        name: 'HoneyComb No 4',
        src: 'honeycomb_no_4.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 40,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 59,
            weight: 26,
        },
        newPrice: 950,
        oldPrice: 950,
        objectType: 'pot',
        collectionName: 'honeycomb',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products26 = new Products({
        name: 'HoneyComb No 5',
        src: 'honeycomb_no_5.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 40,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 48,
            weight: 24.1,
        },
        newPrice: 300,
        oldPrice: 300,
        objectType: 'pot',
        collectionName: 'honeycomb',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products27 = new Products({
        name: 'Queen No 1',
        src: 'queen_no_1.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 22.6,
            widthtop: 0,
            widthunder: 0,
            height: 29,
            heighttop: 0,
            heightunder: 0,
            depth: 17,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 6.9,
        },
        newPrice: 400,
        oldPrice: 400,
        objectType: 'pot',
        collectionName: 'queen',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products28 = new Products({
        name: 'Queen No 2',
        src: 'queen_no_2.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 13,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 24,
            weight: 2.5,
        },
        newPrice: 300,
        oldPrice: 300,
        objectType: 'pot',
        collectionName: 'queen',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },
    })
    const products29 = new Products({
        name: 'Table No 1',
        src: 'table_no_1.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 0,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 10500,
        oldPrice: 10500,
        objectType: 'table',
        collectionName: 'table',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },

    })
    const products30 = new Products({
        name: 'Table No 2',
        src: 'table_no_2.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 0,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 6500,
        oldPrice: 6500,
        objectType: 'table',
        collectionName: 'table',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },

    })
    const products31 = new Products({
        name: 'Table No 3',
        src: 'table_no_3.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 0,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 4800,
        oldPrice: 4800,
        objectType: 'table',
        collectionName: 'table',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },

    })
    const products32 = new Products({
        name: 'Table No 4',
        src: 'table_no_4.jpg',
        sizeType: { xsmall: false, small: false, normal: true, large: false, xLarge: false },
        sizes: {
            width: 0,
            widthtop: 0,
            widthunder: 0,
            height: 0,
            heighttop: 0,
            heightunder: 0,
            depth: 0,
            depthtop: 0,
            depthunder: 0,
            diameter: 0,
            weight: 0,
        },
        newPrice: 4500,
        oldPrice: 4500,
        objectType: 'table',
        collectionName: 'table',
        fav: 3802,
        stock: 5,
        color: { white: true, gray: true, darkGray: true, },
        rub: { smooth: true, rough: true, roughter: true, },

    })
    products1.save()
        .then((result) => {
            console.log('OK')
        })
    products2.save()
        .then((result) => {
            console.log('OK')
        })
    products3.save()
        .then((result) => {
            console.log('OK')
        })
    products4.save()
        .then((result) => {
            console.log('OK')
        })
    products5.save()
        .then((result) => {
            console.log('OK')
        })
    products6.save()
        .then((result) => {
            console.log('OK')
        })
    products7.save()
        .then((result) => {
            console.log('OK')
        })
    products8.save()
        .then((result) => {
            console.log('OK')
        })
    products9.save()
        .then((result) => {
            console.log('OK')
        })
    products10.save()
        .then((result) => {
            console.log('OK')
        })
    products11.save()
        .then((result) => {
            console.log('OK')
        })
    products12.save()
        .then((result) => {
            console.log('OK')
        })
    products13.save()
        .then((result) => {
            console.log('OK')
        })
    products14.save()
        .then((result) => {
            console.log('OK')
        })
    products15.save()
        .then((result) => {
            console.log('OK')
        })
    products16.save()
        .then((result) => {
            console.log('OK')
        })
    products17.save()
        .then((result) => {
            console.log('OK')
        })
    products18.save()
        .then((result) => {
            console.log('OK')
        })
    products19.save()
        .then((result) => {
            console.log('OK')
        })
    products20.save()
        .then((result) => {
            console.log('OK')
        })
    products21.save()
        .then((result) => {
            console.log('OK')
        })
    products22.save()
        .then((result) => {
            console.log('OK')
        })
    products23.save()
        .then((result) => {
            console.log('OK')
        })
    products24.save()
        .then((result) => {
            console.log('OK')
        })
    products25.save()
        .then((result) => {
            console.log('OK')
        })
    products26.save()
        .then((result) => {
            console.log('OK')
        })
    products27.save()
        .then((result) => {
            console.log('OK')
        })
    products28.save()
        .then((result) => {
            console.log('OK')
        })
    products29.save()
        .then((result) => {
            console.log('OK')
        })
    products30.save()
        .then((result) => {
            console.log('OK')
        })
    products31.save()
        .then((result) => {
            console.log('OK')
        })
    products32.save()
        .then((result) => {
            console.log('OK')
        })

    res.status(200).json()

})