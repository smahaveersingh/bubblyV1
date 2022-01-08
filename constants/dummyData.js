const myProfile = {
    name: "Jhonny",
    profile_image: require("../assets/images/bitmoji.jpg"),
    address: "No. 28, Oriel House, Dundalk"
}

const categories = [
    {
        id: 1,
        name: "Whiskey",
        icon: require("../assets/images/whiskey.png")
    },
    {
        id: 2,
        name: "Wine",
        icon: require("../assets/images/wine.png")
    },
    {
        id: 3,
        name: "Beer",
        icon: require("../assets/images/beer.png")
    }
]

const service_categories = [
    {
        id: 1,
        name: "Alcohol",
        icon: require("../assets/images/whiskey.png")
    },
    {
        id: 2,
        name: "Food",
        icon: require("../assets/images/hot.png")
    },
    {
        id: 3,
        name: "Taxi",
        icon: require("../assets/images/taxi-stop.png")
    }
]

const hamburger = {
    id: 1,
    name: "Jameson Irish Whiskey",
    type: "whiskey",
    description: "Starts from",
    about: "It is no overstatement to say that Jameson is the Irish king of whiskey. The brand has been creating casks of everyones favourite amber spirit for over 200 years.",
    categories: [1],
    service_categories: [1],
    price: [17.99, 25.99, 31.99, 40.00],
    calories: 100,
    isFavourite: true,
    image: require("../assets/dummyData/jj.png")
}

const hotTacos = {
    id: 2,
    name: "Jack Daniels Tennesse Whiskey",
    type: "whiskey",
    description: "Starts from",
    about: "Crafting something that endures for over 150 years takes time and character. You’ll find plenty of both in the people and history that make Jack Daniel’s.",
    categories: [1],
    service_categories: [1],
    price: [17.99, 25.99, 31.99, 40.00],
    calories: 100,
    isFavourite: false,
    image: require("../assets/dummyData/jd.png")
}

const vegBiryani = {
    id: 3,
    name: "Heineken Experience",
    type: "beer",
    description: "Starts from",
    about: "HEINEKEN Ireland is one of Ireland's leading beer and cider companies built on a proud brewing heritage that started in Cork over 160 years ago.",
    categories: [3],
    service_categories: [1],
    price: [12.99, 20.99, 13.99, 20.00],
    calories: 100,
    isFavourite: true,
    image: require("../assets/dummyData/hk.png")
}

const wrapSandwich = {
    id: 4,
    name: "Bushmills Irish Whiskey",
    type: "whiskey",
    description: "Starts from",
    about: "Flavorful, with fruit, spice and nutty notes. Best to drink neat or on the rocks. Spectacular whiskey and the pinnacle of the brand's offerings.",
    categories: [1],
    service_categories: [1],
    price: [17.99, 25.99, 31.99, 40.00],
    calories: 100,
    isFavourite: true,
    image: require("../assets/dummyData/bushmills.png")
}

const w19_crimes = {
    id: 5,
    name: "19 Crimes Red Wine ",
    type: "wine",
    description: "Starts from",
    about: "9 Crimes is inspired by those who, beginning in 1788, were transported to Australia for a life of hard labour. Many did not survive the journey. For the sea-beaten people who made it ashore, a new world awaited.",
    categories: [2],
    service_categories: [1],
    price: [17.99, 25.99, 31.99, 40.00], 
    calories: 100,
    isFavourite: true,
    image: require("../assets/dummyData/19crimes.png")
}

const Alcohol = {
    id: 6,
    //name: "Alcohol and Sprits",
    type: "Alcohol & Spirits",
    description: "Starts from",
    about: "It is no overstatement to say that Jameson is the Irish king of whiskey. The brand has been creating casks of everyones favourite amber spirit for over 200 years.",
    categories: [1],
    price: [17.99, 25.99, 31.99, 40.00],
    calories: 100,
    isFavourite: true,
    image: require("../assets/images/whiskey.png")
}

const Food = {
    id: 7,
    //name: "Alcohol and Sprits",
    type: "Food",
    description: "Starts from",
    //about: "It is no overstatement to say that Jameson is the Irish king of whiskey. The brand has been creating casks of everyones favourite amber spirit for over 200 years.",
    categories: [1],
    price: [9.99, 25.99, 31.99, 40.00],
    calories: 100,
    isFavourite: true,
    image: require("../assets/images/hot.png")
}

const Taxi = {
    id: 8,
    //name: "Alcohol and Sprits",
    type: "Taxi",
    description: "Starts from",
    about: "It is no overstatement to say that Jameson is the Irish king of whiskey. The brand has been creating casks of everyones favourite amber spirit for over 200 years.",
    categories: [1],
    price: [5.99, 25.99, 31.99, 40.00],
    calories: 100,
    //isFavourite: true,
    image: require("../assets/images/taxi-stop.png")
}

const R_PizzaHut = {
    id: 9,
    name: "PizzaHut",
    type: "Food",
    description: "Discounts from",
    about: "It is no overstatement to say that Jameson is the Irish king of whiskey. The brand has been creating casks of everyones favourite amber spirit for over 200 years.",
    categories: [1],
    price: [5.99 , 25.99, 31.99, 40.00],
    calories: 100,
    //isFavourite: true,
    image: require("../assets/images/pizza-hut.png")
}

const R_Food = {
    id: 10,
    name: "20% off any food for New Registered Customers",
    type: "Food",
    description: "Discounts for orders starting from",
    about: "It is no overstatement to say that Jameson is the Irish king of whiskey. The brand has been creating casks of everyones favourite amber spirit for over 200 years.",
    categories: [1],
    price: [19.99 , 25.99, 31.99, 40.00],
    calories: 100,
    //isFavourite: true,
    image: require("../assets/images/favourite_food.png")
}

const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            hamburger, hotTacos, vegBiryani, w19_crimes, wrapSandwich
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            hamburger, vegBiryani, wrapSandwich, w19_crimes, hotTacos
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich, w19_crimes, vegBiryani
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            hamburger, hotTacos, vegBiryani, w19_crimes, wrapSandwich
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            hamburger, vegBiryani, wrapSandwich, w19_crimes, hotTacos
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            hamburger, hotTacos, wrapSandwich, w19_crimes, vegBiryani
        ]
    },
    {
        id: 7,
        name: "Services",
        list: [
            Alcohol, Food, Taxi,
        ]
    },
    {
        id: 8,
        name: "Rewards",
        list: [
            R_PizzaHut, R_Food,
        ]
    },

]

const sizes = [
    {
        id: 1,
        label: '375 ml"',
        blabel: "6 x 330 ml", 
    },
    {
        id: 2,
        label: '750 ml"',
        blabel: "20 x 330 ml"
    },
    {
        id: 3,
        label: '1 L"',
        blabel: "8 x 50cl can"
    },
    {
        id: 4,
        label: "1.75 L",
        blabel: "20 x 50cl can"
    }
]

const myCart = [
    {
        ...hamburger,
        qty: 1
    },
    {
        ...hotTacos,
        qty: 1
    },
    {
        ...vegBiryani,
        qty: 1
    }
]

const myCards = [
    {
        id: 1,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1234"
    },
    {
        id: 2,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
        card_no: "1234"
    },
]

const allCards = [
    {
        id: 1,
        name: "Apple Pay",
        icon: require("../assets/icons/apple.png")
    },
    {
        id: 2,
        name: "Visa",
        icon: require("../assets/icons/visa.png"),
    },
    {
        id: 3,
        name: "PayPal",
        icon: require("../assets/icons/paypal.png"),
    },
    {
        id: 4,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
    },
    {
        id: 5,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
    },
]


const fromLocs = [
    {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
    },
    {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
    },
    {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
    },
    {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
    },
    {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
    },
    {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
    }
]

const kfc = require("../assets/dummyData/kfc.png")
const pizzaHut = require("../assets/dummyData/pizza_hut.png")
const mcDonald = require("../assets/dummyData/mcdonald.png")
const burgerKing = require("../assets/dummyData/burger_king.png")
const domino = require("../assets/dummyData/domino_pizza.png")
const starbucks = require("../assets/dummyData/starbucks.png")
const veg_biryani = require("../assets/dummyData/veg_biryani.png")
const wrap_sandwich = require("../assets/dummyData/wrap_sandwich.png")

const orderHistories = [
    {
        title: "19 Sep 2021",
        data: [
            {
                id: 18888,
                name: "Pizza Hut",
                image: pizzaHut,
                price: 35.30,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 3,
                deliveredTime: "19 Sep, 14:30"
            },
            {
                id: 28888,
                name: "KFC",
                image: kfc,
                price: 55.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "19 Sep, 12:30"
            },
            {
                id: 38888,
                name: "Domino's Pizza",
                image: domino,
                price: 15.50,
                status: "C",
                status_desc: "Order Cancel",
                itemCount: 1,
                deliveredTime: "19 Sep, 10:30"
            },
        ]
    },
    {
        title: "15 Sep 2021",
        data: [
            {
                id: 48888,
                name: "Starbucks",
                image: starbucks,
                price: 40.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "15 Sep, 10:00"
            }
        ]
    }
]

const upcomingOrders = [
    {
        title: "",
        data: [
            {
                id: 88888,
                name: "Starbucks",
                image: starbucks,
                price: 10.00,
                status: "O",
                status_desc: "Food on the way",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
            {
                id: 98888,
                name: "McDonald",
                image: mcDonald,
                price: 20.00,
                status: "O",
                status_desc: "Food on the way",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
        ]
    },
    {
        title: "Latest Orders",
        data: [
            {
                id: 68888,
                name: "Starbucks",
                image: starbucks,
                price: 10.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
            {
                id: 78888,
                name: "Burger King",
                image: burgerKing,
                price: 12.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "27 Sep, 8:00"
            }
        ]
    }
]

const availableCoupons = [
    {
        id: 1,
        name: "Burger King",
        image: burgerKing,
        description: 'Valid until 01 Jan 2022',
        discountPercent: 20,
    },
    {
        id: 2,
        name: "KFC",
        image: kfc,
        description: 'Valid until 01 Jan 2022',
        discountPercent: 10,
    },
    {
        id: 3,
        name: "Pizza Hut",
        image: pizzaHut,
        description: 'Valid until 01 Feb 2022',
        discountPercent: 35,
    },
    {
        id: 4,
        name: "Starbucks",
        image: starbucks,
        description: 'Valid until 01 Feb 2022',
        discountPercent: 15,
    },
    {
        id: 5,
        name: "Domino's Pizza",
        image: domino,
        description: 'Valid until 01 Feb 2022',
        discountPercent: 30,
    },
]

const usedCoupons = [
    {
        id: 1,
        name: "Burger King",
        image: burgerKing,
        description: 'Used on 2 Sep 2021',
        discountPercent: 20,
    },
    {
        id: 2,
        name: "Starbucks",
        image: starbucks,
        description: 'Used on 18 Sep 2021',
        discountPercent: 15,
    },
]

const notifications = [
    {
        title: "Today",
        data: [
            {
                id: 1,
                image: domino,
                title: "Domino's - Buy 1 get 1 free",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "a few seconds ago"
            },
            {
                id: 2,
                image: veg_biryani,
                title: "Veg Biryani - 35% sale today",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "5 mins ago"
            },
        ]
    },
    {
        title: "Yesterday",
        data: [
            {
                id: 3,
                image: domino,
                title: "Domino's - Buy 1 get 1 free",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "1 day ago"
            },
            {
                id: 4,
                image: veg_biryani,
                title: "Veg Biryani - 35% sale today",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "1 day ago"
            }
        ]
    }
]

const deliveryMan = {
    name: "Williams Adam",
    avatar: require("../assets/dummyData/delivery_man.png")
}

export default {
    myProfile,
    categories,
    menu,
    sizes,
    myCart,
    myCards,
    allCards,
    fromLocs,
    orderHistories,
    upcomingOrders,
    availableCoupons,
    usedCoupons,
    notifications,
    deliveryMan,
    service_categories
}