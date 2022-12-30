export var mySampleMenu = {
    restaurant: {
        id: 2,
        name: "Best Pizza",
        address: "Fray Camilo Henriquez",
        phone: "+56975703829",
        todays_key: 0,
        website_url: "https://bestpizza.com",
        facade_image_url: "https://i.ibb.co/HpzRt06/best-pizza-facade.jpg",
        logo_image_url: "https://i.ibb.co/9YXH9p0/best-pizza-logo-2.jpg",
        selected_theme: 1,
    },
    restaurant_reviews: {
        reviews_average: {
            number_of_stars__avg: 5.0,
        },
        reviews: [
            {
                review: {
                    id: 20,
                    diner_name: "uno",
                    rejected: false,
                    creation_date: "2022-12-14T13:45:10.612602Z",
                    number_of_stars: 5,
                    observations: "I liked it",
                },
            },
        ],
    },
    categories: [
        {
            category: {
                id: 35,
                name: "Pizzas",
                description: "Estas son las ricas Pizzas",
                image_url: "https://i.ibb.co/J7fKk6L/pizzas.jpg",
            },
            dishes: [
                {
                    dish: {
                        id: 7,
                        name: "Pizza Picante",
                        description: "Esta es la deliciosa Pizza Picante",
                        image_url: "https://i.ibb.co/zXVk6dD/Pizza-Picante.jpg",
                        price: "8500.00",
                    },
                    dish_reviews_average: 2.71,
                    reviews: [
                        {
                            review: {
                                id: 8,
                                diner_name: "yo 6",
                                rejected: false,
                                creation_date: "2022-12-14T13:50:09.865206Z",
                                number_of_stars: 5,
                                observations: "Me gustó esta Pizza Picante",
                            },
                        },
                        {
                            review: {
                                id: 7,
                                diner_name: "yo 5",
                                rejected: false,
                                creation_date: "2022-12-14T13:48:38.028192Z",
                                number_of_stars: 3,
                                observations:
                                    "Me gustó esta Pizza Picante, es demasiado buena, me encantó, además de que una de las más sabrosas que he probado",
                            },
                        },
                        {
                            review: {
                                id: 4,
                                diner_name: "yo 2",
                                rejected: false,
                                creation_date: "2022-12-14T10:24:58.038303Z",
                                number_of_stars: 2,
                                observations: "Me gustó esta Pizza Picante",
                            },
                        },
                        {
                            review: {
                                id: 2,
                                diner_name: "yo",
                                rejected: false,
                                creation_date: "2022-12-13T10:24:58.038303Z",
                                number_of_stars: 5,
                                observations: "I liked this dish",
                            },
                        },
                        {
                            review: {
                                id: 6,
                                diner_name: "yo 4",
                                rejected: false,
                                creation_date: "2022-12-13T10:24:58.038303Z",
                                number_of_stars: 2,
                                observations: "Me gustó esta Pizza Picante",
                            },
                        },
                        {
                            review: {
                                id: 5,
                                diner_name: "yo 3",
                                rejected: false,
                                creation_date: "2022-12-13T10:24:58.038303Z",
                                number_of_stars: 2,
                                observations: "Me gustó esta Pizza Picante",
                            },
                        },
                        {
                            review: {
                                id: 3,
                                diner_name: "yo 1",
                                rejected: false,
                                creation_date: "2022-12-13T10:24:58.038303Z",
                                number_of_stars: 2,
                                observations: "I liked this Piza Picante",
                            },
                        },
                    ],
                },
                {
                    dish: {
                        id: 8,
                        name: "Pizza con Chorizo",
                        description:
                            "Fabulosa pizza con Chorizo. Su sabor es inolvidable. Escogida por muchos. Elogiada por muchos",
                        image_url:
                            "https://i.ibb.co/TMk9xgc/Pizza-con-Chorizo.jpg",
                        price: "7500.00",
                    },
                    dish_reviews_average: 0,
                    reviews: [],
                },
                {
                    dish: {
                        id: 10,
                        name: "Pizza con Jamón",
                        description:
                            "Deliciosa pizza con Jamón hecha con los mejores ingredientes para garantizar rico sabor. Esta es la pizza perfecta para comer en pareja",
                        image_url:
                            "https://i.ibb.co/Qj27Zrv/Pizza-con-jamon.jpg",
                        price: "8000.00",
                    },
                    dish_reviews_average: 4.0,
                    reviews: [
                        {
                            review: {
                                id: 1,
                                diner_name: "el secuestrador",
                                rejected: false,
                                creation_date: "2022-12-13T10:24:58.038303Z",
                                number_of_stars: 4,
                                observations:
                                    "Demasiado rica la pizza con jamón",
                            },
                        },
                    ],
                },
            ],
        },
        {
            category: {
                id: 36,
                name: "Bebidas",
                description: "Estas son las ricas Bebidas",
                image_url: "https://i.ibb.co/7QqWqVJ/bebidas.jpg",
            },
            dishes: [
                {
                    dish: {
                        id: 12,
                        name: "Limonada",
                        description: "Fabulosa Limonada",
                        image_url: "https://i.ibb.co/KqTSztf/Limonadas.jpg",
                        price: "2000.00",
                    },
                    dish_reviews_average: 0,
                    reviews: [],
                },
            ],
        },
        {
            category: {
                id: 37,
                name: "Postres",
                description: "Estos son los ricos Postres",
                image_url: "https://i.ibb.co/ByGGBc3/postres.jpg",
            },
            dishes: [
                {
                    dish: {
                        id: 11,
                        name: "Pie de Maracuyá",
                        description: "Fabuloso Pie de Maracuyá",
                        image_url:
                            "https://i.ibb.co/dt3PdDC/Pie-de-Maracuy.jpg",
                        price: "2500.00",
                    },
                    dish_reviews_average: 0,
                    reviews: [],
                },
            ],
        },
    ],
};
