const onboarding_screens = [
    {
        id: 1,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/beer.png"),
        title: "Celebrate with us",
        description: "Something Old, Something New, and Something Brewed"
    },
    {
        id: 2,
        backgroundImage: require("../assets/images/background_02.png"),
        bannerImage: require("../assets/images/wine.png"),
        title: "Straight Delivery to Home",
        description: "Taste the excitement, It’s got the standards"
    },
    {
        id: 3,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/whiskey.png"),
        title: "For every occasion",
        description: "Here begins the high time of your life where desire meets a new taste"
    }
]

const screens = {
    main_layout: "MainLayout",
    home: "Home",
    search: "Search",
    cart: "MyCart",
    favourite: "Favourite",
    notification: "Notification",
    my_wallet: "My Wallet",
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 1,
        label: screens.search,
    },
    {
        id: 2,
        label: screens.cart,
    },
    {
        id: 3,
        label: screens.favourite,
    },
    {
        id: 4,
        label: screens.notification,
    },
]

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins"
    },
    {
        id: 3,
        label: "30 Mins"
    }
]

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    }
]

const tags = [
    {
        id: 1,
        label: "Burger"
    },
    {
        id: 2,
        label: "Fast Food"
    },
    {
        id: 3,
        label: "Pizza"
    },
    {
        id: 4,
        label: "Asian"
    },
    {
        id: 5,
        label: "Dessert"
    },
    {
        id: 6,
        label: "Breakfast"
    },
    {
        id: 7,
        label: "Vegetable"
    },
    {
        id: 8,
        label: "Taccos"
    }
]

const track_order_status = [
    {
        id: 1,
        title: "Order Confirmed",
        sub_title: "Your order has been received"
    },
    {
        id: 2,
        title: "Order Prepared",
        sub_title: "Your order has been prepared"
    },
    {
        id: 3,
        title: "Delivery in Progress",
        sub_title: "Hang on! Your food is on the way"
    },
    {
        id: 4,
        title: "Delivered",
        sub_title: "Enjoy your meal!"
    },
    {
        id: 5,
        title: "Rate Us",
        sub_title: "Help us improve our service"
    }
]

const tips = [
    {
        id: 1,
        label: "No Tips",
        value: 0
    },
    {
        id: 2,
        label: "$5",
        value: 5
    },
    {
        id: 3,
        label: "$10",
        value: 10
    },
    {
        id: 4,
        label: "$15",
        value: 15
    },
    {
        id: 5,
        label: "$20",
        value: 20
    }
]

const gender = [
    {
        id: 0,
        label: "Male",
        value: "Male"
    },
    {
        id: 1,
        label: "Female",
        value: "Female"
    },
]

const state = [
    {
        id: 0,
        label: "Sarawak",
        value: "Sarawak"
    },
    {
        id: 1,
        label: "Sabah",
        value: "Sabah"
    },
    {
        id: 2,
        label: "Johor",
        value: "Johor"
    },
    {
        id: 3,
        label: "Kedah",
        value: "Kedah"
    },
    {
        id: 4,
        label: "Kelantan",
        value: "Kelantan"
    },
    {
        id: 5,
        label: "Penang",
        value: "Penang"
    },
]

const GOOGLE_MAP_API_KEY = "[Your Google API Key]"

export default {
    onboarding_screens,
    screens,
    bottom_tabs,
    delivery_time,
    ratings,
    tags,
    track_order_status,
    tips,
    gender,
    state,
    GOOGLE_MAP_API_KEY,
}