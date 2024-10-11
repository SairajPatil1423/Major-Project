
const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-118.7798, 34.0259] // Coordinates for Malibu
        }
    },
    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "New York City",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-74.0060, 40.7128] // Coordinates for New York City
        }
    },
    {
        title: "Mountain Retreat",
        description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
        },
        price: 1000,
        location: "Aspen",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-106.8175, 39.1911] // Coordinates for Aspen
        }
    },
    {
        title: "Historic Villa in Tuscany",
        description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Florence",
        country: "Italy",
        geometry: {
            type: "Point",
            coordinates: [11.2558, 43.7696] // Coordinates for Florence
        }
    },
    {
        title: "Secluded Treehouse Getaway",
        description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
        },
        price: 800,
        location: "Portland",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-122.6765, 45.5231] // Coordinates for Portland
        }
    },
    {
        title: "Beachfront Paradise",
        description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
        geometry: {
            type: "Point",
            coordinates: [-86.8515, 21.1619] // Coordinates for Cancun
        }
    },
    {
        title: "Rustic Cabin by the Lake",
        description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
        },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-120.044, 39.0968] // Coordinates for Lake Tahoe
        }
    },
    {
        title: "Luxury Penthouse with City Views",
        description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
        },
        price: 3500,
        location: "Los Angeles",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-118.2437, 34.0522] // Coordinates for Los Angeles
        }
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
        geometry: {
            type: "Point",
            coordinates: [7.2333, 46.1000] // Coordinates for Verbier
        }
    },
    {
        title: "Safari Lodge in the Serengeti",
        description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
        geometry: {
            type: "Point",
            coordinates: [34.6857, -2.3333] // Coordinates for Serengeti
        }
    },
    {
        title: "Historic Canal House",
        description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
        geometry: {
            type: "Point",
            coordinates: [4.9041, 52.3676] // Coordinates for Amsterdam
        }
    },
    {
        title: "Private Island Retreat",
        description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
        },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
        geometry: {
            type: "Point",
            coordinates: [178.0650, -17.7134] // Coordinates for Fiji
        }
    },
    {
        title: "Charming Cottage in the Cotswolds",
        description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "Cotswolds",
        country: "United Kingdom",
        geometry: {
            type: "Point",
            coordinates: [-1.7800, 51.8333] // Coordinates for Cotswolds
        }
    },
    {
        title: "Historic Brownstone in Boston",
        description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
        },
        price: 2200,
        location: "Boston",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-71.0589, 42.3601] // Coordinates for Boston
        }
    },
    {
        title: "Beachfront Bungalow in Bali",
        description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Bali",
        country: "Indonesia",
        geometry: {
            type: "Point",
            coordinates: [115.1889, -8.4095] // Coordinates for Bali
        }
    },
    {
        title: "Mountain View Cabin in Banff",
        description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Banff",
        country: "Canada",
        geometry: {
            type: "Point",
            coordinates: [-115.5708, 51.1784] // Coordinates for Banff
        }
    },
    {
        title: "Art Deco Apartment in Miami",
        description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60",
        },
        price: 1600,
        location: "Miami",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-80.1918, 25.7617] // Coordinates for Miami
        }
    },
    {
        title: "Tropical Villa in Phuket",
        description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Phuket",
        country: "Thailand",
        geometry: {
            type: "Point",
            coordinates: [98.3917, 7.8804] // Coordinates for Phuket
        }
    },
    {
        title: "Historic Castle in Scotland",
        description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Scottish Highlands",
        country: "United Kingdom",
        geometry: {
            type: "Point",
            coordinates: [-4.2026, 57.4760] // Coordinates for Scottish Highlands
        }
    },
    {
        title: "Desert Oasis in Dubai",
        description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
        },
        price: 5000,
        location: "Dubai",
        country: "United Arab Emirates",
        geometry: {
            type: "Point",
            coordinates: [55.2708, 25.2048] // Coordinates for Dubai
        }
    },
    {
        title: "Rustic Log Cabin in Montana",
        description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
        },
        price: 1100,
        location: "Montana",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-110.3626, 46.8797] // Coordinates for Montana
        }
    },
    {
        title: "Beachfront Villa in Greece",
        description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Mykonos",
        country: "Greece",
        geometry: {
            type: "Point",
            coordinates: [25.3450, 37.4467] // Coordinates for Mykonos
        }
    },
    {
        title: "Eco-Friendly Treehouse Retreat",
        description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
        },
        price: 750,
        location: "Costa Rica",
        country: "Costa Rica",
        geometry: {
            type: "Point",
            coordinates: [-84.0907, 9.9281] // Coordinates for Costa Rica
        }
    },
    {
        title: "Historic Cottage in Charleston",
        description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
        },
        price: 1600,
        location: "Charleston",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-79.9311, 32.7765] // Coordinates for Charleston
        }
    },
    {
        title: "Modern Apartment in Tokyo",
        description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Tokyo",
        country: "Japan",
        geometry: {
            type: "Point",
            coordinates: [139.6917, 35.6895] // Coordinates for Tokyo
        }
    },
    {
        title: "Lakefront Cabin in New Hampshire",
        description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "New Hampshire",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-71.5724, 43.1939] // Coordinates for New Hampshire
        }
    },
    {
        title: "Luxury Villa in the Maldives",
        description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
        },
        price: 6000,
        location: "Maldives",
        country: "Maldives",
        geometry: {
            type: "Point",
            coordinates: [73.2207, 3.2028] // Coordinates for Maldives
        }
    },
    {
        title: "Ski Chalet in Aspen",
        description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Aspen",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-106.8175, 39.1911] // Coordinates for Aspen
        }
    },
    {
        title: "Secluded Beach House in Costa Rica",
        description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Costa Rica",
        country: "Costa Rica",
        geometry: {
            type: "Point",
            coordinates: [-106.8175, 39.1911]
        }
    }
];

module.exports = { data: sampleListings };