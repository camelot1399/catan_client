const maps = [
    {
        row: 1,
        size: 4,
        cols: [],
    },
    {
        row: 2,
        size: 5,
        cols: [],
    },
    {
        row: 3,
        size: 6,
        cols: [],
    },
    {
        row: 4,
        size: 7,
        cols: [],
    },
    {
        row: 5,
        size: 8,
        cols: [],
    },
    {
        row: 7,
        size: 7,
        cols: [],
    },
    {
        row: 8,
        size: 6,
        cols: [],
    },
    {
        row: 9,
        size: 5,
        cols: [],
    },
    {
        row: 10,
        size: 4,
        cols: [],
    }
];

const gexList = {
    brick: {
        img: 'http://localhost:7000/imgs/gexCards/brick.png',
        count: 5,
        name: 'brick',
    },
    corn: {
        img: 'http://localhost:7000/imgs/gexCards/corn.png',
        count: 6,
        name: 'corn',
    },
    stone: {
        img: 'http://localhost:7000/imgs/gexCards/stone.png',
        count: 5,
        name: 'stone',
    },
    forest: {
        img: 'http://localhost:7000/imgs/gexCards/forest.png',
        count: 6,
        name: 'forest',
    },
    plain: {
        img: 'http://localhost:7000/imgs/gexCards/plain.png',
        count: 2,
        name: 'plain',
    },
    sheep: {
        img: 'http://localhost:7000/imgs/gexCards/sheep.png',
        count: 6,
        name: 'sheep',
    },
};

const gexWater = 'http://localhost:7000/imgs/gexCards/water.png';

const randomize = (number) => {
    return Math.round(Math.random() * number);
}

const getRandomId = () => {
    return Date.now() + randomize(100);
}

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

const getLocationsCity = (row, coll) => {

    const maxSize = (maps[row - 1]?.size - 1);

    if (row <= 4 && coll === 0) {
        return [
            {id: 1, location: 'house', place: 'top'},
            {id: 2, location: 'house', place: 'topRight'},
            {id: 6, location: 'house', place: 'topLeft'},
        ];
    }

    if (row <= 4 && coll !== 0) {
        return [
            {id: 1, location: 'house', place: 'top'},
            {id: 2, location: 'house', place: 'topRight'},
        ];
    }

    if (row === 1) {
        return [
            {id: 1, location: 'house', place: 'top'},
            {id: 5, location: 'house', place: 'bottomLeft'},
            {id: 6, location: 'house', place: 'topLeft'},
        ];
    }

    if (row !== 10 && row >= 6 && coll !== 0) {
        return [
            {id: 4, location: 'house', place: 'bottom'},
            {id: 2, location: 'house', place: 'bottomRight'},
        ];
    }

    if (row !== 10 && row >= 6 && coll === 0) {
        return [
            {id: 4, location: 'house', place: 'bottom'},
            {id: 1, location: 'house', place: 'top'},
            {id: 5, location: 'house', place: 'bottomLeft'},
        ];
    }

    if (row === 5 && coll !== 0 ) {
        return [
            {id: 4, location: 'house', place: 'bottom'},
            {id: 2, location: 'house', place: 'topRight'},
            {id: 3, location: 'house', place: 'bottomRight'},
            {id: 1, location: 'house', place: 'top'},
        ];
    }

    if (row === 5 && coll === 0) {
        return [
            {id: 4, location: 'house', place: 'bottom'},
            {id: 6, location: 'house', place: 'topLeft'},
            {id: 2, location: 'house', place: 'topRight'},
            {id: 5, location: 'house', place: 'bottomLeft'},
            {id: 1, location: 'house', place: 'top'},
        ];
    }

    if (row === 10 && coll === 0) {
        return [
            {id: 1, location: 'house', place: 'top'},
            {id: 4, location: 'house', place: 'bottom'},
            {id: 5, location: 'house', place: 'bottomLeft'},
            {id: 3, location: 'house', place: 'bottomRight'},
        ];
    }

    if (row === 10 && coll !== 0) {
        return [
            {id: 4, location: 'house', place: 'bottom'},
            {id: 3, location: 'house', place: 'bottomRight'},
        ];
    }

    return [];
}

const getLocationRoads = (row, coll) => {

    if (row !== 1 && row <= 4 && coll === 0) {
        return [
            {id: 1, location: 'road', place: 'left'},
            {id: 2, location: 'road', place: 'right'},
            {id: 3, location: 'road', place: 'topLeft'},
            {id: 4, location: 'road', place: 'topRight'},
            {id: 6, location: 'road', place: 'bottomRight'},
        ];
    }

    if (row !== 1 && row <= 4 && coll !== 0) {
        return [
            // {id: 1, location: 'house', place: 'top'},
            // {id: 2, location: 'house', place: 'topRight'},
            {id: 4, location: 'road', place: 'topRight'},
            {id: 6, location: 'road', place: 'bottomRight'},
            {id: 2, location: 'road', place: 'right'},
            
        ];
    }

    if (row === 1 && coll !== 0) {
        return [
            {id: 3, location: 'road', place: 'topLeft'},
            {id: 4, location: 'road', place: 'topRight'},
            {id: 2, location: 'road', place: 'right'},
            {id: 6, location: 'road', place: 'bottomRight'},
        ];
    }

    if (row === 1 && coll === 0) {
        return [
            {id: 3, location: 'road', place: 'topLeft'},
            {id: 4, location: 'road', place: 'topRight'},
            {id: 2, location: 'road', place: 'right'},
            {id: 6, location: 'road', place: 'bottomRight'},
            {id: 1, location: 'road', place: 'left'},
        ];
    }

    if (row !== 10 && row >= 6 && coll !== 0) {
        return [
            {id: 4, location: 'road', place: 'topRight'},
            {id: 2, location: 'road', place: 'right'},
            {id: 6, location: 'road', place: 'bottomRight'},
        ];
    }

    if (row !== 10 && row >= 6 && coll === 0) {
        return [
            {id: 4, location: 'road', place: 'topRight'},
            {id: 2, location: 'road', place: 'right'},
            {id: 6, location: 'road', place: 'bottomRight'},
            {id: 1, location: 'road', place: 'left'},
            {id: 5, location: 'road', place: 'bottomLeft'},

        ];
    }

    if (row === 5 && coll !== 0 ) {
        return [
            {id: 2, location: 'road', place: 'right'},
            {id: 6, location: 'road', place: 'bottomRight'},
            {id: 4, location: 'road', place: 'topRight'},
        ];
    }

    if (row === 5 && coll === 0) {
        return [
            {id: 4, location: 'road', place: 'topRight'},
            {id: 2, location: 'road', place: 'right'},
            {id: 6, location: 'road', place: 'bottomRight'},
            {id: 1, location: 'road', place: 'left'},
            {id: 5, location: 'road', place: 'bottomLeft'},
            {id: 3, location: 'road', place: 'topLeft'},
        ];
    }

    if (row === 10 && coll === 0) {
        return [
            {id: 2, location: 'road', place: 'right'},
            {id: 6, location: 'road', place: 'bottomRight'},
            {id: 4, location: 'road', place: 'topRight'},
            {id: 5, location: 'road', place: 'bottomLeft'},
            {id: 1, location: 'road', place: 'left'},
        ];
    }

    if (row === 10 && coll !== 0) {
        return [
            {id: 2, location: 'road', place: 'right'},
            {id: 6, location: 'road', place: 'bottomRight'},
            {id: 4, location: 'road', place: 'topRight'},
            {id: 5, location: 'road', place: 'bottomLeft'},
        ];
    }

    return [];
}

const getGexList = async () => {
    const temp = Object.values(gexList);
    const result = [];

    await temp.forEach(el => {
        if (el.count !== 0) {
            for (let i = 0; i < el.count; i++) {
                result.push({
                    img: el.img,
                    name: el.name
                })
            }
        }
    })

    return result;
}

export const getMaps = async () => {
    let newMap = [...maps];

    let gexListSorting = await getGexList();
    let gexList = await shuffle(gexListSorting);

    let result = newMap.map(el => {
        for (let i = 0; i < el.size; i++) {
            let card = {}

            if (i === 0 || 
                i === el.size - 1 || 
                el.row === 1 || 
                el.row === maps[maps.length - 1].row) {
                card = {img: gexWater, name: 'water'};
            } else {
                if (gexList.length) {
                    card = gexList.splice(0,1)[0];
                }
            }

            let data = {
                id: getRandomId(),
                card,
                locationsCity: getLocationsCity(el.row, i),
                roads: getLocationRoads(el.row, i),
            };

            el.cols.push(data);
        };

        return el
    });

    return result;
}
