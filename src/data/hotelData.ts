export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  galleryImages: string[];
  features: string[];
  idealFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  date?: string;
  avatar?: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'comfort' | 'convenience' | 'dining' | 'service';
}

export interface NearbyPlace {
  id: string;
  name: string;
  locationText: string;
  image: string;
  distanceInfo: string;
  description: string;
}

export const HOTEL_INFO = {
  name: "Hotel Madurai",
  locationName: "Udaipur, Rajasthan",
  tagline: "A business class hotel at Udaipur which pampers you with all the facilities and amenities a 21st century traveler expects.",
  classification: "3-Star Business Class & Family Hotel",
  address: "Hotel St, Behind State Bank of Indore, Shrinath Market, Udaipole, Udaipur, Rajasthan 313001, India",
  coordinates: {
    lat: 24.5771753,
    lng: 73.701226,
  },
  phone: "+91 87419 14825",
  rawPhone: "918741914825",
  whatsappNumber: "918741914825",
  email: "hotelmaduraiudaipur@gmail.com",
  bookingUrl: "https://hotels.eglobe-solutions.com/hotelmaduraiudaipur/Booking/Detail#bookingsteps",
  mapDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=24.5771753,73.701226",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.188204604921!2d73.69865107599602!3d24.577175278115047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e564d2d4807d%3A0xe54fbcf767b93a02!2sHotel%20Madurai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const ROOMS: Room[] = [
  {
    id: "super-deluxe-room",
    name: "Super Deluxe Room",
    tagline: "Diamond-Tufted Headboards & Warm Wood Finishings",
    description: "High ceilings and rich dark wood finishings define the bedrooms at the Super Deluxe Room. Accommodating a couple with a spacious bathroom with deep soaking bathtub, separate shower and comfortable beds. Each room is stocked with amenities like LED TV, sofa, tea maker, room service, travel desk and complimentary WiFi.",
    image: "/images/room-super-deluxe-main.jpg",
    galleryImages: [
      "/images/room-super-deluxe-main.jpg",
      "/images/room-super-deluxe-bed.jpg",
      "/images/bathroom-bathtub.jpg",
      "/images/bathroom-sink-toilet.jpg",
      "/images/room-super-deluxe-large.jpg"
    ],
    features: [
      "High ceilings & diamond-tufted leather headboard",
      "Spacious bathroom with soaking bathtub & shower",
      "Plush comfortable king bed with swan towel art",
      "LED TV with Cable/Satellite channels",
      "Cozy sofa seating",
      "In-room tea & coffee maker",
      "Complimentary high-speed WiFi",
      "Dedicated room service",
      "Travel desk assistance"
    ],
    idealFor: "Couples & Business Executives"
  },
  {
    id: "triple-bed-room",
    name: "Triple Bed Room",
    tagline: "Spacious Comfort for Groups & Families",
    description: "Triple Bed Room guests can enjoy a spacious guestroom decorated in warm tones with Rajasthani tile accents, featuring double and single bed setup for business and leisure travelers. Complimentary WiFi, 24 hours laundry service, airport and railway Station transfers, LED TV and split AC are offered with every booking.",
    image: "/images/room-triple-bed-main.jpg",
    galleryImages: [
      "/images/room-triple-bed-main.jpg",
      "/images/room-triple-bed-view2.jpg",
      "/images/bathroom-sink-toilet.jpg",
      "/images/bathroom-ensuite.jpg",
      "/images/room-triple-bed-large.jpg"
    ],
    features: [
      "Triple bedding setup (King bed + Single bed)",
      "Traditional Rajasthani tile wainscoting decor",
      "Efficient split air conditioning",
      "LED TV entertainment",
      "Complimentary high-speed WiFi",
      "24 hours laundry service",
      "Airport & Railway Station transfers",
      "Full room service availability",
      "Spacious bathroom with hot/cold shower"
    ],
    idealFor: "Families & Small Groups"
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    tagline: "Practical Elegance with Scenic City Views",
    description: "Designed for practicality and comfort, these deluxe rooms feature stunning views of Udaipur. Guests benefit from a king-sized bed, carpet rug, seating area, wifi, laundry service, high-speed internet and private en-suite bathroom with essential toiletries.",
    image: "/images/room-deluxe-main.jpg",
    galleryImages: [
      "/images/room-deluxe-main.jpg",
      "/images/room-deluxe-angle.jpg",
      "/images/room-deluxe-tv.jpg",
      "/images/bathroom-ensuite.jpg",
      "/images/room-deluxe-large.jpg"
    ],
    features: [
      "Stunning panoramic views of Udaipur",
      "King-sized bed with crisp linens",
      "Armchairs & coffee table seating",
      "Wall-mounted LED TV & split AC",
      "High-speed wireless internet",
      "Private bathroom with essential toiletries",
      "Continuous hot & cold shower",
      "Full laundry service",
      "Prompt room service"
    ],
    idealFor: "Solo Travelers & Couples"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sapna-delhi",
    quote: "I've stayed and enjoyed my stay here. Room was good and spacious. Hotel staff was courteous enough and helpful. Food was tasty and within our budget. Loved staying in this hotel. Will definitely recommend others to visit it once.",
    author: "Sapna",
    location: "Delhi",
    avatar: "/images/reviews-5bb07f37492e1200012bca99.jpg"
  },
  {
    id: "shivani-dehradun",
    quote: "Our group of three girls visited this hotel in January 2018. Staff was humble and nice, services were good. Hotel had nice interior, I love it. It is at a good location for whole city visit. Had lift facility, luxurious rooms, restaurant is also available there. We stayed there for two days.",
    author: "Shivani",
    location: "Dehradun",
    avatar: "/images/review3-5bb08184492e1200012bca9a.jpg"
  },
  {
    id: "ashok-jaipur",
    quote: "It was a very good experience staying in this hotel. Best service. Good interior. Room was very spacious. Food was delicious. We will again come and stay here. Location of hotel is approvable and it's near both bus stand and railway station.",
    author: "Ashok",
    location: "Jaipur"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "ac-rooms",
    title: "Split AC & Climate Control",
    description: "Every guestroom is equipped with efficient air conditioning ensuring a cool, refreshing stay in Udaipur's climate.",
    iconName: "Wind",
    category: "comfort"
  },
  {
    id: "wifi",
    title: "High-Speed Complimentary WiFi",
    description: "Stay seamlessly connected throughout your stay with complimentary wireless internet across rooms and common areas.",
    iconName: "Wifi",
    category: "convenience"
  },
  {
    id: "tv",
    title: "LED TV with Satellite Channels",
    description: "Modern flat-screen LED TVs with a comprehensive selection of cable and satellite channels in every room.",
    iconName: "Tv",
    category: "comfort"
  },
  {
    id: "bathrooms",
    title: "Private Bath with Hot & Cold Shower",
    description: "En-suite bathrooms fitted with 24/7 hot and cold shower systems, separate shower areas, and fresh essential toiletries.",
    iconName: "Bath",
    category: "comfort"
  },
  {
    id: "lift",
    title: "Elevator / Lift Facility",
    description: "Modern passenger elevator serving all guestroom floors for effortless accessibility with luggage and family.",
    iconName: "ArrowUpDown",
    category: "convenience"
  },
  {
    id: "restaurant",
    title: "Multi-Cuisine Restaurant & Breakfast Room",
    description: "Dine at our cozy in-house restaurant serving rich continental breakfasts, wholesome traditional Indian meals, and our renowned Family Thali.",
    iconName: "Utensils",
    category: "dining"
  },
  {
    id: "underground-bar",
    title: "Underground Bar",
    description: "Unwind at our dedicated Underground Bar, a tranquil subterranean setting to enjoy refreshments after sightseeing.",
    iconName: "Wine",
    category: "dining"
  },
  {
    id: "party-hall",
    title: "Party & Banquet Hall",
    description: "Host private gatherings, family celebrations, and meetings in our banquet hall located conveniently near Udaipur Bus Stand.",
    iconName: "Users",
    category: "convenience"
  },
  {
    id: "transfers",
    title: "Railway Station & Airport Transfers",
    description: "Prompt pick-up and drop transfers arranged directly for Udaipur Railway Station (Udaipole) and Maharana Pratap Airport.",
    iconName: "Car",
    category: "service"
  },
  {
    id: "laundry",
    title: "24-Hour Laundry Service",
    description: "Same-day professional laundry and pressing services to keep your wardrobe fresh throughout your journey.",
    iconName: "Shirt",
    category: "service"
  },
  {
    id: "room-service",
    title: "In-Room Dining & Room Service",
    description: "Courteous room service delivering freshly prepared dishes, morning tea, and refreshments directly to your door.",
    iconName: "Bell",
    category: "service"
  },
  {
    id: "travel-desk",
    title: "Travel Desk & City Sightseeing",
    description: "Our friendly family-run team is happy to provide curated tips for visiting lakes, palaces, bazaars, and local dining.",
    iconName: "Compass",
    category: "service"
  }
];

export const NEARBY_PLACES: NearbyPlace[] = [
  {
    id: "udaipur-station",
    name: "Udaipur Railway Station & Udaipole Bus Stand",
    locationText: "Udaipole, Udaipur (Behind State Bank of Indore)",
    image: "/images/madurai-station-5bb0833ea4b9050001a66857.jpg",
    distanceInfo: "Walking distance (< 500m)",
    description: "Hotel Madurai is strategically positioned in Shrinath Market, Udaipole — making arrivals and departures by train or interstate bus exceptionally effortless."
  },
  {
    id: "fatehsagar",
    name: "Fateh Sagar Lake",
    locationText: "Fateh Sagar, Udaipur",
    image: "/images/fathesagar-madurai-5bb0848c492e1200012bca9d.jpg",
    distanceInfo: "approx. 4.5 km",
    description: "One of Udaipur's most iconic lakes, surrounded by the Aravalli hills, charming waterfront promenades, boating, and Nehru Park island."
  },
  {
    id: "sahelion-ki-bari",
    name: "Sahelion Ki Bari",
    locationText: "Panchwati, Udaipur",
    image: "/images/shareiq-577-1454412891-530251-jpg-destreviewimages-720x512-1454412891-cropped-5bb08524492e1200012bca9e.jpg",
    distanceInfo: "approx. 4.0 km",
    description: "Historic 18th-century royal gardens adorned with marble elephant fountains, lotus pools, and lush bougainvillea pavilions."
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-facade",
    title: "Hotel Madurai Grand Facade & Architecture",
    category: "Property",
    image: "/images/hotel-exterior-facade.jpg",
    caption: "Multi-story hotel building with distinctive tree artwork and official Hotel & Restaurant signage in Udaipole, Udaipur."
  },
  {
    id: "gal-lobby",
    title: "Grand Reception & Guest Lounge",
    category: "Property",
    image: "/images/hotel-reception-lobby.jpg",
    caption: "Spacious marble lobby featuring illuminated carved front desk, elevator access, and seating lounge."
  },
  {
    id: "gal-frontdesk",
    title: "24/7 Front Desk Counter",
    category: "Property",
    image: "/images/hotel-front-desk.jpg",
    caption: "Round-the-clock reception desk with illuminated floral woodwork and royal Mewar insignia."
  },
  {
    id: "gal-lobby-staff",
    title: "Welcome Lobby & Exotic Aquarium",
    category: "Property",
    image: "/images/hotel-lobby-staff.jpg",
    caption: "Courteous hotel reception staff, glass restaurant overlook, and glowing fish aquarium."
  },
  {
    id: "gal-elevator",
    title: "Passenger Elevator & Lift Lobby",
    category: "Amenities",
    image: "/images/hotel-elevator-lift.jpg",
    caption: "Modern passenger lift serving all guestroom floors with effortless accessibility for elders and luggage."
  },
  {
    id: "gal-dining-hall",
    title: "In-House Multi-Cuisine Restaurant",
    category: "Dining",
    image: "/images/restaurant-dining-hall.jpg",
    caption: "Warm ambient restaurant dining hall with wood-paneled pillars, circular chandeliers, and comfortable seating."
  },
  {
    id: "gal-super-deluxe-1",
    title: "Super Deluxe Suite Master Bedroom",
    category: "Rooms",
    image: "/images/room-super-deluxe-main.jpg",
    caption: "Luxury suite featuring handcrafted diamond-tufted headboard, swan towel art, and split AC."
  },
  {
    id: "gal-super-deluxe-2",
    title: "Super Deluxe Honeymoon Bedding",
    category: "Rooms",
    image: "/images/room-super-deluxe-bed.jpg",
    caption: "Romantic towel origami, plush floral pillows, and crisp white linens."
  },
  {
    id: "gal-triple-1",
    title: "Triple Bed Family Room",
    category: "Rooms",
    image: "/images/room-triple-bed-main.jpg",
    caption: "Spacious family suite configured with a king bed and additional single bed."
  },
  {
    id: "gal-triple-2",
    title: "Triple Bed Room Rajasthani Detail",
    category: "Rooms",
    image: "/images/room-triple-bed-view2.jpg",
    caption: "Warm aesthetic with traditional Rajasthani tile wainscoting, split AC, and coffee seating."
  },
  {
    id: "gal-deluxe-1",
    title: "Deluxe Room Panoramic Comfort",
    category: "Rooms",
    image: "/images/room-deluxe-main.jpg",
    caption: "Bright guestroom with plush king-sized bed, carpet rug, coffee table, and modern split AC."
  },
  {
    id: "gal-deluxe-2",
    title: "Deluxe Room Seating & Bedding",
    category: "Rooms",
    image: "/images/room-deluxe-angle.jpg",
    caption: "Inviting seating arrangement with complimentary bottled water, wood finishes, and bedside controls."
  },
  {
    id: "gal-deluxe-3",
    title: "Deluxe Room LED TV & Entertainment Wall",
    category: "Rooms",
    image: "/images/room-deluxe-tv.jpg",
    caption: "Wall-mounted LED TV with satellite channels, climate control AC, and traditional accent tilework."
  },
  {
    id: "gal-bath-tub",
    title: "Luxury Marble Soaking Bathtub",
    category: "Amenities",
    image: "/images/bathroom-bathtub.jpg",
    caption: "Deep soaking marble bathtub with telephone shower and hot/cold water mixer."
  },
  {
    id: "gal-bath-vanity",
    title: "Modern En-Suite Bathroom Vanity",
    category: "Amenities",
    image: "/images/bathroom-sink-toilet.jpg",
    caption: "Contemporary vessel sink vanity, wall-hung WC, and designer ceramic tile finishes."
  },
  {
    id: "gal-bath-ensuite",
    title: "En-Suite Bathroom & Sanitary Amenities",
    category: "Amenities",
    image: "/images/bathroom-ensuite.jpg",
    caption: "Spotlessly maintained bathroom with large vanity mirror and 24/7 hot & cold shower."
  },
  {
    id: "gal-restaurant-thali",
    title: "Famous Family Thali Dining",
    category: "Dining",
    image: "/images/5bd7063b4c21cd0001298965.jpg",
    caption: "Authentic multi-dish Rajasthani & North Indian thali arrangements."
  },
  {
    id: "gal-banquet",
    title: "Banquet & Party Hall",
    category: "Events",
    image: "/images/5bd7054ac52ae30001ddb980.jpg",
    caption: "Celebration, gathering and meeting space near Udaipur Bus Stand."
  },
  {
    id: "gal-fatehsagar",
    title: "Fateh Sagar Lake Sightseeing",
    category: "Sightseeing",
    image: "/images/fathesagar-madurai-5bb0848c492e1200012bca9d.jpg",
    caption: "Picturesque waterfront promenades and boating at Fateh Sagar Lake."
  },
  {
    id: "gal-gardens",
    title: "Sahelion Ki Bari Royal Gardens",
    category: "Sightseeing",
    image: "/images/shareiq-577-1454412891-530251-jpg-destreviewimages-720x512-1454412891-cropped-5bb08524492e1200012bca9e.jpg",
    caption: "Historic 18th-century royal marble fountains and garden pavilions."
  }
];

export const HOTEL_UPDATES = [
  {
    id: "up-1",
    title: "Best 3 Star Hotel to stay in Lakecity",
    date: "June 14, 2021",
    snippet: "Hotel Madurai Udaipur welcomes you to the City of Lakes with modern amenities, prime connectivity, and warm hospitality.",
    image: "/images/hotel-exterior-facade.jpg"
  },
  {
    id: "up-2",
    title: "Family Thali & Multi-Cuisine Dining",
    date: "October 29, 2018",
    snippet: "Enjoy delicious, authentic multi-dish Indian thalis and continental breakfast prepared fresh with genuine home-style flavors.",
    image: "/images/restaurant-dining-hall.jpg"
  },
  {
    id: "up-3",
    title: "24/7 Reception & Lift Accessibility",
    date: "October 29, 2018",
    snippet: "Passenger elevator serving all guestroom floors, 24/7 reception, and travel desk near Udaipur Railway Station.",
    image: "/images/hotel-reception-lobby.jpg"
  },
  {
    id: "up-4",
    title: "Reasonable Luxury Rooms in Central Udaipur",
    date: "December 10, 2018",
    snippet: "Affordable luxury combining air conditioned comfort, prompt service, and unbeatable access to transport hubs.",
    image: "/images/room-super-deluxe-main.jpg"
  }
];

export const getWhatsAppUrl = (roomName?: string) => {
  const baseMessage = roomName
    ? `Hello Hotel Madurai, I would like to enquire about room availability and booking for the ${roomName}.`
    : "Hello Hotel Madurai, I would like to enquire about room availability and booking.";
  return `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(baseMessage)}`;
};
