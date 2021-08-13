let initialState = {
  arrayOfBooks: [
    {
      "id": 1,
      "name ": "Bamity",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$0.32",
      "stock": 3,
      "author": "Nikos",
      "genre": "Drama",
      "published_date": "2020/11/29"
    },
    {
      "id": 2,
      "name ": "Span",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$1.84",
      "stock": 9,
      "author": "Adela",
      "genre": "Comedy",
      "published_date": "2020/07/11"
    },
    {
      "id": 3,
      "name ": "Fixflex",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$2.51",
      "stock": 2,
      "author": "Lorianna",
      "genre": "Action|Crime|Drama",
      "published_date": "2021/03/05"
    },
    {
      "id": 4,
      "name ": "Y-find",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$1.54",
      "stock": 5,
      "author": "Catha",
      "genre": "Action|Drama|Thriller",
      "published_date": "2020/12/21"
    },
    {
      "id": 5,
      "name ": "Ronstring",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$6.20",
      "stock": 10,
      "author": "Ingra",
      "genre": "Comedy",
      "published_date": "2020/11/06"
    },
    {
      "id": 6,
      "name ": "Fix San",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$6.21",
      "stock": 8,
      "author": "Marcy",
      "genre": "Horror|Sci-Fi",
      "published_date": "2020/07/23"
    },
    {
      "id": 7,
      "name ": "Matsoft",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$6.50",
      "stock": 5,
      "author": "Willyt",
      "genre": "Adventure|Fantasy",
      "published_date": "2020/10/25"
    },
    {
      "id": 8,
      "name ": "Tres-Zap",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$8.50",
      "stock": 3,
      "author": "Jerad",
      "genre": "Action|Adventure|Sci-Fi|Thriller",
      "published_date": "2020/04/29"
    },
    {
      "id": 9,
      "name ": "Stim",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$8.22",
      "stock": 5,
      "author": "Bradley",
      "genre": "Thriller",
      "published_date": "2020/11/18"
    },
    {
      "id": 10,
      "name ": "Overhold",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$5.09",
      "stock": 6,
      "author": "Hugh",
      "genre": "Comedy|Musical",
      "published_date": "2020/10/14"
    },
    {
      "id": 11,
      "name ": "Latlux",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$7.07",
      "stock": 5,
      "author": "Valentin",
      "genre": "Documentary|War",
      "published_date": "2020/11/18"
    },
    {
      "id": 12,
      "name ": "Sonsing",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$1.89",
      "stock": 5,
      "author": "Stormi",
      "genre": "Comedy|Drama|Romance",
      "published_date": "2021/03/13"
    },
    {
      "id": 13,
      "name ": "Voltsillam",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$4.84",
      "stock": 3,
      "author": "Reagan",
      "genre": "Comedy|Fantasy",
      "published_date": "2021/01/11"
    },
    {
      "id": 14,
      "name ": "Treeflex",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$7.42",
      "stock": 5,
      "author": "Mavis",
      "genre": "Animation|Comedy|Horror",
      "published_date": "2021/03/14"
    },
    {
      "id": 15,
      "name ": "Gembucket",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$4.89",
      "stock": 5,
      "author": "Hakeem",
      "genre": "Comedy|Drama",
      "published_date": "2020/10/18"
    },
    {
      "id": 16,
      "name ": "Y-Solowarm",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$2.46",
      "stock": 3,
      "author": "Jerrine",
      "genre": "Documentary",
      "published_date": "2020/11/14"
    },
    {
      "id": 17,
      "name ": "Kanlam",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$9.50",
      "stock": 2,
      "author": "Poppy",
      "genre": "Documentary|Horror",
      "published_date": "2021/02/01"
    },
    {
      "id": 18,
      "name ": "Bamity",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$7.28",
      "stock": 10,
      "author": "Orelee",
      "genre": "Comedy|Drama|Romance",
      "published_date": "2020/04/05"
    },
    {
      "id": 19,
      "name ": "Cardguard",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$6.65",
      "stock": 8,
      "author": "Rad",
      "genre": "Adventure|Drama|Romance",
      "published_date": "2020/06/29"
    },
    {
      "id": 20,
      "name ": "Alphazap",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$5.79",
      "stock": 7,
      "author": "Jennine",
      "genre": "Drama|War",
      "published_date": "2020/11/09"
    },
    {
      "id": 21,
      "name ": "Transcof",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$3.72",
      "stock": 9,
      "author": "Sheffy",
      "genre": "Documentary",
      "published_date": "2020/12/26"
    },
    {
      "id": 22,
      "name ": "Cookley",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$3.08",
      "stock": 1,
      "author": "Antony",
      "genre": "Action|Thriller",
      "published_date": "2021/01/15"
    },
    {
      "id": 23,
      "name ": "Sonair",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$8.94",
      "stock": 8,
      "author": "Nessy",
      "genre": "Horror|Thriller",
      "published_date": "2020/07/06"
    },
    {
      "id": 24,
      "name ": "Zoolab",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$0.17",
      "stock": 2,
      "author": "Edward",
      "genre": "Crime|Thriller",
      "published_date": "2020/04/05"
    },
    {
      "id": 25,
      "name ": "Rank",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$3.78",
      "stock": 4,
      "author": "Nikola",
      "genre": "Drama",
      "published_date": "2021/03/22"
    },
    {
      "id": 26,
      "name ": "It",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$9.01",
      "stock": 10,
      "author": "Cathlene",
      "genre": "Comedy|Drama|Romance",
      "published_date": "2020/07/25"
    },
    {
      "id": 27,
      "name ": "Biodex",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$8.77",
      "stock": 4,
      "author": "Cobb",
      "genre": "Comedy|Romance",
      "published_date": "2020/10/24"
    },
    {
      "id": 28,
      "name ": "Subin",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$6.06",
      "stock": 7,
      "author": "Shana",
      "genre": "Comedy|Musical",
      "published_date": "2021/03/18"
    },
    {
      "id": 29,
      "name ": "Otcom",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$7.20",
      "stock": 8,
      "author": "Katerine",
      "genre": "Documentary",
      "published_date": "2020/10/01"
    },
    {
      "id": 30,
      "name ": "Otcom",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$9.78",
      "stock": 7,
      "author": "Cissy",
      "genre": "Comedy|Musical|Romance",
      "published_date": "2020/11/05"
    },
    {
      "id": 31,
      "name ": "Bitchip",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$8.16",
      "stock": 2,
      "author": "Merle",
      "genre": "Drama",
      "published_date": "2021/03/02"
    },
    {
      "id": 32,
      "name ": "Daltfresh",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$6.33",
      "stock": 2,
      "author": "Shannon",
      "genre": "Animation|Children",
      "published_date": "2020/10/12"
    },
    {
      "id": 33,
      "name ": "Asoka",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$8.38",
      "stock": 7,
      "author": "Osmond",
      "genre": "Drama",
      "published_date": "2020/12/12"
    },
    {
      "id": 34,
      "name ": "Zaam-Dox",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$8.94",
      "stock": 9,
      "author": "Dino",
      "genre": "Crime|Horror|Mystery|Romance|Thriller",
      "published_date": "2020/08/11"
    },
    {
      "id": 35,
      "name ": "Temp",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$4.00",
      "stock": 3,
      "author": "Gris",
      "genre": "Action|Adventure|Crime|Thriller",
      "published_date": "2020/11/20"
    },
    {
      "id": 36,
      "name ": "Y-find",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$3.40",
      "stock": 3,
      "author": "Kristina",
      "genre": "Action|Adventure",
      "published_date": "2020/09/02"
    },
    {
      "id": 37,
      "name ": "Cookley",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$5.43",
      "stock": 4,
      "author": "Zuzana",
      "genre": "Children|Comedy",
      "published_date": "2020/04/24"
    },
    {
      "id": 38,
      "name ": "Fix San",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$8.02",
      "stock": 7,
      "author": "Alberta",
      "genre": "Drama|Romance",
      "published_date": "2020/07/15"
    },
    {
      "id": 39,
      "name ": "Sonsing",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$0.13",
      "stock": 5,
      "author": "Jozef",
      "genre": "Documentary|Thriller",
      "published_date": "2020/10/16"
    },
    {
      "id": 40,
      "name ": "Matsoft",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$0.20",
      "stock": 8,
      "author": "Stephani",
      "genre": "Comedy|Crime|Drama|Romance|Thriller",
      "published_date": "2020/07/29"
    },
    {
      "id": 41,
      "name ": "Zontrax",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$3.78",
      "stock": 4,
      "author": "Warner",
      "genre": "Action",
      "published_date": "2020/06/23"
    },
    {
      "id": 42,
      "name ": "Tres-Zap",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$2.90",
      "stock": 5,
      "author": "Lisetta",
      "genre": "Drama|War",
      "published_date": "2020/10/15"
    },
    {
      "id": 43,
      "name ": "Matsoft",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$7.53",
      "stock": 4,
      "author": "Yardley",
      "genre": "Documentary",
      "published_date": "2020/04/21"
    },
    {
      "id": 44,
      "name ": "Kanlam",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$0.65",
      "stock": 9,
      "author": "Miranda",
      "genre": "Drama|Romance|Thriller",
      "published_date": "2021/02/18"
    },
    {
      "id": 45,
      "name ": "Job",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$1.56",
      "stock": 1,
      "author": "Sheffie",
      "genre": "Comedy",
      "published_date": "2021/01/16"
    },
    {
      "id": 46,
      "name ": "Transcof",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$5.96",
      "stock": 3,
      "author": "Hamilton",
      "genre": "Drama",
      "published_date": "2020/09/12"
    },
    {
      "id": 47,
      "name ": "Namfix",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$2.98",
      "stock": 10,
      "author": "Stanly",
      "genre": "Drama|Romance",
      "published_date": "2020/03/31"
    },
    {
      "id": 48,
      "name ": "Matsoft",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$1.39",
      "stock": 4,
      "author": "Salomon",
      "genre": "Horror|Sci-Fi",
      "published_date": "2020/11/19"
    },
    {
      "id": 49,
      "name ": "Tin",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$4.11",
      "stock": 3,
      "author": "Leena",
      "genre": "Drama|Romance",
      "published_date": "2020/07/12"
    },
    {
      "id": 50,
      "name ": "Alphazap",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$8.69",
      "stock": 4,
      "author": "Yanaton",
      "genre": "Action|Drama|War",
      "published_date": "2020/07/27"
    },
    {
      "id": 51,
      "name ": "Rank",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$7.35",
      "stock": 1,
      "author": "Titos",
      "genre": "Comedy|Drama",
      "published_date": "2021/03/02"
    },
    {
      "id": 52,
      "name ": "Aerified",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$0.32",
      "stock": 9,
      "author": "Jean",
      "genre": "Comedy",
      "published_date": "2020/07/18"
    },
    {
      "id": 53,
      "name ": "Fintone",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$9.83",
      "stock": 2,
      "author": "Zandra",
      "genre": "Drama",
      "published_date": "2021/01/12"
    },
    {
      "id": 54,
      "name ": "Lotstring",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$6.83",
      "stock": 5,
      "author": "Jaquenetta",
      "genre": "Drama",
      "published_date": "2020/12/24"
    },
    {
      "id": 55,
      "name ": "Alpha",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$8.16",
      "stock": 7,
      "author": "Christos",
      "genre": "Drama",
      "published_date": "2020/05/13"
    },
    {
      "id": 56,
      "name ": "Sonsing",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$1.66",
      "stock": 2,
      "author": "Auria",
      "genre": "Comedy|Drama",
      "published_date": "2020/04/04"
    },
    {
      "id": 57,
      "name ": "Namfix",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$5.41",
      "stock": 6,
      "author": "Pascal",
      "genre": "Crime|Film-Noir",
      "published_date": "2021/03/08"
    },
    {
      "id": 58,
      "name ": "Hatity",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$6.92",
      "stock": 3,
      "author": "Cass",
      "genre": "Action|Adventure|Sci-Fi|IMAX",
      "published_date": "2020/12/22"
    },
    {
      "id": 59,
      "name ": "Lotlux",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$7.68",
      "stock": 10,
      "author": "Tricia",
      "genre": "Comedy",
      "published_date": "2020/11/18"
    },
    {
      "id": 60,
      "name ": "Transcof",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$4.20",
      "stock": 2,
      "author": "Gwen",
      "genre": "Adventure|Comedy|Sci-Fi",
      "published_date": "2021/03/17"
    },
    {
      "id": 61,
      "name ": "Subin",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$3.71",
      "stock": 8,
      "author": "Borden",
      "genre": "Drama|Romance",
      "published_date": "2020/05/03"
    },
    {
      "id": 62,
      "name ": "Duobam",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$4.09",
      "stock": 5,
      "author": "Mignon",
      "genre": "Action|Adventure|Fantasy",
      "published_date": "2020/04/07"
    },
    {
      "id": 63,
      "name ": "Holdlamis",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$5.82",
      "stock": 10,
      "author": "Rivalee",
      "genre": "Drama",
      "published_date": "2020/11/07"
    },
    {
      "id": 64,
      "name ": "Voyatouch",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$1.54",
      "stock": 1,
      "author": "Standford",
      "genre": "Thriller",
      "published_date": "2020/06/18"
    },
    {
      "id": 65,
      "name ": "Biodex",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$0.95",
      "stock": 10,
      "author": "Keelia",
      "genre": "Documentary|Drama",
      "published_date": "2020/08/08"
    },
    {
      "id": 66,
      "name ": "Tresom",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$9.14",
      "stock": 6,
      "author": "Marylou",
      "genre": "Film-Noir",
      "published_date": "2020/12/12"
    },
    {
      "id": 67,
      "name ": "Home Ing",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$5.30",
      "stock": 6,
      "author": "Celka",
      "genre": "Horror|Thriller",
      "published_date": "2020/04/06"
    },
    {
      "id": 68,
      "name ": "Matsoft",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$7.64",
      "stock": 5,
      "author": "Freedman",
      "genre": "Comedy",
      "published_date": "2021/02/28"
    },
    {
      "id": 69,
      "name ": "Viva",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$6.23",
      "stock": 5,
      "author": "Petrina",
      "genre": "Crime|Drama|Thriller",
      "published_date": "2020/06/07"
    },
    {
      "id": 70,
      "name ": "Ventosanzap",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$6.32",
      "stock": 8,
      "author": "Lenore",
      "genre": "Film-Noir|Thriller",
      "published_date": "2020/12/04"
    },
    {
      "id": 71,
      "name ": "Voltsillam",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$3.75",
      "stock": 9,
      "author": "Candy",
      "genre": "Comedy|Drama|Romance",
      "published_date": "2021/03/17"
    },
    {
      "id": 72,
      "name ": "Tin",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$7.41",
      "stock": 7,
      "author": "Jolee",
      "genre": "Drama",
      "published_date": "2020/09/02"
    },
    {
      "id": 73,
      "name ": "Span",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$7.99",
      "stock": 4,
      "author": "Peadar",
      "genre": "Comedy|Sci-Fi",
      "published_date": "2021/03/13"
    },
    {
      "id": 74,
      "name ": "Matsoft",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$4.73",
      "stock": 7,
      "author": "Callean",
      "genre": "Action|Drama",
      "published_date": "2020/09/26"
    },
    {
      "id": 75,
      "name ": "Tempsoft",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$8.91",
      "stock": 8,
      "author": "Ingeborg",
      "genre": "Comedy|Horror|Romance",
      "published_date": "2020/09/20"
    },
    {
      "id": 76,
      "name ": "Tempsoft",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$4.55",
      "stock": 10,
      "author": "Glen",
      "genre": "Horror",
      "published_date": "2020/09/21"
    },
    {
      "id": 77,
      "name ": "Daltfresh",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$7.72",
      "stock": 3,
      "author": "Bradford",
      "genre": "Animation|Comedy|War",
      "published_date": "2020/04/12"
    },
    {
      "id": 78,
      "name ": "Alpha",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$1.24",
      "stock": 2,
      "author": "Rosalynd",
      "genre": "Action|Sci-Fi|Thriller",
      "published_date": "2020/04/01"
    },
    {
      "id": 79,
      "name ": "Tempsoft",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$7.71",
      "stock": 7,
      "author": "Jolyn",
      "genre": "Drama|Horror|Mystery",
      "published_date": "2021/01/26"
    },
    {
      "id": 80,
      "name ": "Temp",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$3.60",
      "stock": 1,
      "author": "Putnem",
      "genre": "Musical|War",
      "published_date": "2020/06/17"
    },
    {
      "id": 81,
      "name ": "Bitchip",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$1.72",
      "stock": 1,
      "author": "Sutton",
      "genre": "Drama",
      "published_date": "2020/07/22"
    },
    {
      "id": 82,
      "name ": "Namfix",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$4.32",
      "stock": 5,
      "author": "Darline",
      "genre": "Documentary",
      "published_date": "2020/04/22"
    },
    {
      "id": 83,
      "name ": "Solarbreeze",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$1.19",
      "stock": 5,
      "author": "Otha",
      "genre": "Action|Comedy|Crime",
      "published_date": "2020/06/14"
    },
    {
      "id": 84,
      "name ": "Biodex",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$6.71",
      "stock": 3,
      "author": "Maryellen",
      "genre": "Action",
      "published_date": "2021/03/22"
    },
    {
      "id": 85,
      "name ": "Alphazap",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$8.03",
      "stock": 10,
      "author": "Robinson",
      "genre": "Action|Animation|Sci-Fi",
      "published_date": "2020/04/24"
    },
    {
      "id": 86,
      "name ": "Bitwolf",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$6.40",
      "stock": 10,
      "author": "Joyous",
      "genre": "Comedy|Sci-Fi",
      "published_date": "2021/01/09"
    },
    {
      "id": 87,
      "name ": "Tres-Zap",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$8.99",
      "stock": 10,
      "author": "Bax",
      "genre": "(no genres listed)",
      "published_date": "2021/03/27"
    },
    {
      "id": 88,
      "name ": "Alphazap",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$3.48",
      "stock": 3,
      "author": "Ailyn",
      "genre": "Drama|Romance",
      "published_date": "2020/10/12"
    },
    {
      "id": 89,
      "name ": "Tresom",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$6.15",
      "stock": 1,
      "author": "Roby",
      "genre": "Documentary",
      "published_date": "2020/04/15"
    },
    {
      "id": 90,
      "name ": "Sonair",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$8.99",
      "stock": 1,
      "author": "Vito",
      "genre": "Crime|Drama|Thriller",
      "published_date": "2020/09/28"
    },
    {
      "id": 91,
      "name ": "Bigtax",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$6.13",
      "stock": 9,
      "author": "Hewe",
      "genre": "Comedy",
      "published_date": "2020/10/26"
    },
    {
      "id": 92,
      "name ": "Domainer",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$8.89",
      "stock": 8,
      "author": "Caralie",
      "genre": "Drama|Fantasy",
      "published_date": "2021/03/25"
    },
    {
      "id": 93,
      "name ": "Fixflex",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$6.29",
      "stock": 10,
      "author": "Rowen",
      "genre": "Drama|Romance",
      "published_date": "2020/11/12"
    },
    {
      "id": 94,
      "name ": "Flexidy",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$9.46",
      "stock": 2,
      "author": "Cecilia",
      "genre": "Drama|Romance",
      "published_date": "2020/07/18"
    },
    {
      "id": 95,
      "name ": "Mat Lam Tam",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$7.72",
      "stock": 2,
      "author": "Conrade",
      "genre": "Adventure|Drama",
      "published_date": "2021/02/16"
    },
    {
      "id": 96,
      "name ": "Redhold",
      "image": "http://dummyimage.com/250x250.png/cc0000/ffffff",
      "price": "$0.18",
      "stock": 10,
      "author": "Amil",
      "genre": "Action|Comedy",
      "published_date": "2021/01/12"
    },
    {
      "id": 97,
      "name ": "Alphazap",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$6.38",
      "stock": 5,
      "author": "Zaria",
      "genre": "Action|Drama|War",
      "published_date": "2020/04/26"
    },
    {
      "id": 98,
      "name ": "Tin",
      "image": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
      "price": "$7.85",
      "stock": 10,
      "author": "Gwenny",
      "genre": "Drama",
      "published_date": "2020/08/30"
    },
    {
      "id": 99,
      "name ": "Sonair",
      "image": "http://dummyimage.com/250x250.png/dddddd/000000",
      "price": "$1.12",
      "stock": 8,
      "author": "Myrlene",
      "genre": "Drama",
      "published_date": "2021/03/07"
    },
    {
      "id": 100,
      "name ": "Konklux",
      "image": "http://dummyimage.com/250x250.png/ff4444/ffffff",
      "price": "$3.78",
      "stock": 4,
      "author": "Dario",
      "genre": "Comedy|Musical|Romance",
      "published_date": "2020/11/10"
    }
  ]
}

const bookReducer = (state = initialState, action) => {
  switch (action.type){
    case "INCREMENT_STOCK":
      return {
        arrayOfBooks: state.arrayOfBooks.map(book => {
          if (book.id === action.payload.id) book.stock += action.payload.count;
          return book;
        })
      }
      // return state.filter((element) => element.id !== action.payload.id).concat(book);
    case "DECREMENT_STOCK":
      return {
        arrayOfBooks: state.arrayOfBooks.map(book => {
          if (book.id === action.payload.id) book.stock -= action.payload.count;
          return book;
        })
      }
    default:
      return state;
  }
}

export default bookReducer;