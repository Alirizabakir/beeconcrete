app.post('/all-products-add', (req, res) => {

    const products1 = new Products({
        name: 'Bee No 1',
        src: {
            a: 'bee_no_1_a.jpg',
            b: 'bee_no_1_b.jpg',
        },
        big: {
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
            newPrice: 450,
            oldPrice: 450
        },
        small: {
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
            newPrice: 450,
            oldPrice: 450
        },
        collectionName: 'bee',
        fav: 3802,
        color: true,
        rub: false
    })
    const products2 = new Products({
        name: 'Bee No 2',
        src: {
            a: 'bee_no_2_a.jpg',
            b: 'bee_no_2_b.jpg'
        },
        big: {
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
            newPrice: 850,
            oldPrice: 850
        },
        small: {
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
            newPrice: 850,
            oldPrice: 850
        },
        collectionName: 'bee',
        fav: 3802,
        color: true,
        rub: false,
    })
    const products3 = new Products({
        name: 'Bee No 3',
        src: {
            a: 'bee_no_3_a.jpg',
            b: 'bee_no_3_b.jpg',
        },
        big: {
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
            newPrice: 1350,
            oldPrice: 1350
        },
        small: {
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
            newPrice: 1350,
            oldPrice: 1350
        },
        collectionName: 'bee',
        fav: 3802,
        color: true,
        rub: false
    })
    const products4 = new Products({
        name: 'Bee No 4',
        src: {
            a: 'bee_no_4_a.jpg',
            b: 'bee_no_4_b.jpg'
        },
        big: {
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
            newPrice: 1500,
            oldPrice: 1500
        },
        small: {
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
            newPrice: 1500,
            oldPrice: 1500
        },
        collectionName: 'bee',
        fav: 3802,
        color: true,
        rub: false
    })
    const products5 = new Products({
        name: 'Bee No 5',
        src: {
            a: 'bee_no_5_a.jpg',
            b: 'bee_no_5_b.jpg',
        },
        big: {
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
            newPrice: 950,
            oldPrice: 950
        },
        small: {
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
            newPrice: 950,
            oldPrice: 950
        },
        collectionName: 'bee',
        fav: 3802,
        color: true,
        rub: false
    })
    const products6 = new Products({
        name: 'Bee No 6',
        src: {
            a: 'bee_no_6_a.jpg',
            b: 'bee_no_6_b.jpg',
        },
        big: {
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
            newPrice: 450,
            oldPrice: 450
        },
        small: {
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
            newPrice: 450,
            oldPrice: 450
        },
        collectionName: 'bee',
        fav: 3802,
        color: true,
        rub: false
    })
    const products7 = new Products({
        name: 'Bee No 7',
        src: {
            a: 'bee_no_7_a.jpg',
            b: 'bee_no_7_b.jpg',
        },
        big: {
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
            newPrice: 300,
            oldPrice: 300
        },
        small: {
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
            newPrice: 300,
            oldPrice: 300
        },
        collectionName: 'bee',
        fav: 3802,
        color: true,
        rub: false
    })
    const products8 = new Products({
        name: 'Column No 1',
        src: {
            a: 'column_no_1_a.jpg',
            b: 'column_no_1_b.jpg',
        },
        big: {
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
            newPrice: 1100
        },
        small: {
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
            newPrice: 1100
        },
        collectionName: 'column',
        oldPrice: 1100,
        fav: 3802,
        color: true,
        rub: false
    })
    const products9 = new Products({
        name: 'Column No 2',
        src: {
            a: 'column_no_2_a.jpg',
            b: 'column_no_2_b.jpg',
        },
        big: {
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
            newPrice: 850,
            oldPrice: 850
        },
        small: {
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
            newPrice: 850,
            oldPrice: 850
        },
        collectionName: 'column',
        fav: 3802,
        color: true,
        rub: false
    })
    const products10 = new Products({
        name: 'Covering No 1',
        src: {
            a: 'covering_no_1_a.jpg',
            b: 'covering_no_2_b.jpg',
        },
        big: {
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
            newPrice: 85,
            oldPrice: 85
        },
        small: {
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
            newPrice: 85,
            oldPrice: 85
        },
        collectionName: 'covering',
        fav: 3802,
        color: false,
        rub: false
    })
    const products11 = new Products({
        name: 'Covering No 2',
        src: {
            a: 'covering_no_2_a.jpg',
            b: 'covering_no_2_b.jpg',
        },
        big: {
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
            newPrice: 85,
            oldPrice: 85
        },
        small: {
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
            newPrice: 85,
            oldPrice: 85
        },
        collectionName: 'covering',
        fav: 3802,
        color: false,
        rub: false
    })
    const products12 = new Products({
        name: 'Covering No 3',
        src: {
            a: 'covering_no_3_a.jpg',
            b: 'covering_no_3_b.jpg',
        },
        big: {
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
            newPrice: 85,
            oldPrice: 85
        },
        small: {
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
            newPrice: 85,
            oldPrice: 85
        },
        collectionName: 'covering',
        fav: 3802,
        color: false,
        rub: false
    })
    const products13 = new Products({
        name: 'Covering No 4',
        src: {
            a: 'covering_no_4_a.jpg',
            b: 'covering_no_4_b.jpg',
        },
        big: {
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
            newPrice: 85,
            oldPrice: 85
        },
        small: {
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
            newPrice: 85,
            oldPrice: 85
        },
        collectionName: 'covering',
        fav: 3802,
        color: false,
        rub: false
    })
    const products14 = new Products({
        name: 'Covering No 5',
        src: {
            a: 'covering_no_5_a.jpg',
            b: 'covering_no_5_b.jpg',
        },
        big: {
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
            newPrice: 85,
            oldPrice: 85
        },
        small: {
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
            newPrice: 85,
            oldPrice: 85
        },
        collectionName: 'covering',
        fav: 3802,
        color: false,
        rub: false
    })
    const products15 = new Products({
        name: 'Covering No 6',
        src: {
            a: 'covering_no_6_a.jpg',
            b: 'covering_no_6_b.jpg',
        },
        big: {
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
            newPrice: 85,
            oldPrice: 85
        },
        small: {
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
            newPrice: 85,
            oldPrice: 85
        },
        collectionName: 'covering',
        fav: 3802,
        color: false,
        rub: false
    })
    const products16 = new Products({
        name: 'Covering No 7',
        src: {
            a: 'covering_no_7_a.jpg',
            b: 'covering_no_7_b.jpg',
        },
        big: {
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
            newPrice: 85,
            oldPrice: 85
        },
        small: {
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
            newPrice: 85,
            oldPrice: 85
        },
        collectionName: 'covering',
        fav: 3802,
        color: false,
        rub: false
    })
    const products17 = new Products({
        name: 'Covering No 8',
        src: {
            a: 'covering_no_8_a.jpg',
            b: 'covering_no_8_b.jpg',
        },
        big: {
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
            newPrice: 85,
            oldPrice: 85
        },
        small: {
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
            newPrice: 85,
            oldPrice: 85
        },
        collectionName: 'covering',
        fav: 3802,
        color: false,
        rub: false
    })
    const products18 = new Products({
        name: 'Covering No 9',
        src: {
            a: 'covering_no_9_a.jpg',
            b: 'covering_no_9_b.jpg',
        },
        big: {
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
            newPrice: 85,
            oldPrice: 85
        },
        small: {
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
            newPrice: 85,
            oldPrice: 85
        },
        collectionName: 'covering',
        fav: 3802,
        color: false,
        rub: false
    })
    const products19 = new Products({
        name: 'Hive No 1',
        src: {
            a: 'hive_no_1_a.jpg',
            b: 'hive_no_1_b.jpg'
        },
        big: {
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
            newPrice: 300,
            oldPrice: 300
        },
        small: {
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
            newPrice: 300,
            oldPrice: 300
        },
        collectionName: 'hive',
        fav: 3802,
        color: true,
        rub: false
    })
    const products20 = new Products({
        name: 'Hive No 2',
        src: {
            a: 'hive_no_2_a.jpg',
            b: 'hive_no_2_b.jpg',
        },
        big: {
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
            newPrice: 1500,
            oldPrice: 1500
        },
        small: {
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
            newPrice: 1500,
            oldPrice: 1500
        },
        collectionName: 'hive',
        fav: 3802,
        color: true,
        rub: false
    })
    const products21 = new Products({
        name: 'Hive No 3',
        src: {
            a: 'hive_no_3_a.jpg',
            b: 'hive_no_3_b.jpg',
        },
        big: {
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
            newPrice: 300,
            oldPrice: 300
        },
        small: {
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
            newPrice: 300,
            oldPrice: 300
        },
        collectionName: 'hive',
        fav: 3802,
        color: true,
        rub: false
    })
    const products22 = new Products({
        name: 'HoneyComb No 1',
        src: {
            a: 'honeycomb_no_1_a.jpg',
            b: 'honeycomb_no_1_b.jpg',
        },
        big: {
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
            newPrice: 1500,
            oldPrice: 1500
        },
        small: {
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
            newPrice: 1500,
            oldPrice: 1500
        },
        collectionName: 'honeycomb',
        fav: 3802,
        color: true,
        rub: false
    })
    const products23 = new Products({
        name: 'HoneyComb No 2',
        src: {
            a: 'honeycomb_no_2_a.jpg',
            b: 'honeycomb_no_2_b.jpg',
        },
        big: {
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
            weight: 32,
            newPrice: 1500,
            oldPrice: 1500
        },
        small: {
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
            weight: 32,
            newPrice: 1500,
            oldPrice: 1500
        },
        collectionName: 'honeycomb',
        fav: 3802,
        color: true,
        rub: false
    })
    const products24 = new Products({
        name: 'HoneyComb No 3',
        src: {
            a: 'honeycomb_no_3_a.jpg',
            b: 'honeycomb_no_3_b.jpg',
        },
        big: {
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
            newPrice: 950,
            oldPrice: 950
        },
        small: {
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
            newPrice: 950,
            oldPrice: 950
        },
        collectionName: 'honeycomb',
        fav: 3802,
        color: true,
        rub: false
    })
    const products25 = new Products({
        name: 'HoneyComb No 4',
        src: {
            a: 'honeycomb_no_4_a.jpg',
            b: 'honeycomb_no_4_b.jpg',
        },
        big: {
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
            newPrice: 950,
            oldPrice: 950
        },
        small: {
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
            newPrice: 950,
            oldPrice: 950
        },
        collectionName: 'honeycomb',
        fav: 3802,
        color: true,
        rub: false
    })
    const products26 = new Products({
        name: 'HoneyComb No 5',
        src: {
            a: 'honeycomb_no_5_a.jpg',
            b: 'honeycomb_no_5_b.jpg',
        },
        big: {
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
            newPrice: 300,
            oldPrice: 300
        },
        small: {
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
            newPrice: 300,
            oldPrice: 300
        },
        collectionName: 'honeycomb',
        fav: 3802,
        color: true,
        rub: false
    })
    const products27 = new Products({
        name: 'Queen No 1',
        src: {
            a: 'queen_no_1_a.jpg',
            b: 'queen_no_1_b.jpg'
        },
        big: {
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
            newPrice: 400,
            oldPrice: 400
        },
        small: {
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
            newPrice: 400,
            oldPrice: 400
        },
        collectionName: 'queen',
        fav: 3802,
        color: true,
        rub: false
    })
    const products28 = new Products({
        name: 'Queen No 2',
        src: {
            a: 'queen_no_2_a.jpg',
            b: 'queen_no_2_b.jpg',
        },
        big: {
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
            newPrice: 300,
            oldPrice: 300
        },
        small: {
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
            newPrice: 300,
            oldPrice: 300
        },
        collectionName: 'queen',
        fav: 3802,
        color: true,
        rub: false
    })
    const products29 = new Products({
        name: 'Table No 1',
        src: {
            a: 'table_no_1_a.jpg',
            b: 'table_no_1_b.jpg',
        },
        big: {
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
            newPrice: 10500,
            oldPrice: 10500
        },
        small: {
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
            newPrice: 10500,
            oldPrice: 10500
        },
        collectionName: 'table',
        fav: 3802,
        color: true,
        rub: false
    })
    const products30 = new Products({
        name: 'Table No 2',
        src: {
            a: 'table_no_2_a.jpg',
            b: 'table_no_2_b.jpg',
        },
        big: {
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
            newPrice: 6500,
            oldPrice: 6500
        },
        small: {
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
            newPrice: 6500,
            oldPrice: 6500
        },
        collectionName: 'table',
        fav: 3802,
        color: true,
        rub: false
    })
    const products31 = new Products({
        name: 'Table No 3',
        src: {
            a: 'table_no_3_a.jpg',
            b: 'table_no_3_b.jpg',
        },
        big: {
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
            newPrice: 4800,
            oldPrice: 4800
        },
        small: {
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
            newPrice: 4800,
            oldPrice: 4800
        },
        collectionName: 'table',
        fav: 3802,
        color: true,
        rub: false
    })
    const products32 = new Products({
        name: 'Table No 4',
        src: {
            a: 'table_no_4_a.jpg',
            b: 'table_no_4_b.jpg',
        },
        big: {
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
            newPrice: 4500,
            oldPrice: 4500
        },
        small: {
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
            newPrice: 4500,
            oldPrice: 4500
        },
        collectionName: 'table',
        fav: 3802,
        color: true,
        rub: false
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