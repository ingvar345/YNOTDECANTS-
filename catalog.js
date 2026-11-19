// Catalogue imported from the supplied pricing workbook. Prices are USD estimates.
const products = [
  {
    "id": "abercrombiefitch-firstinstinct",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/abercrombiefitch-firstinstinct",
    "brand": "Abercrombie & Fitch",
    "name": "First Instinct",
    "categories": [
      "men"
    ],
    "description": "Top notes are Melon, Tonic Water and Gin; middle notes are Violet Leaf, Sichuan Pepper and Citruses; base notes are Musk, Suede and Amber.",
    "notes": [
      "Ozonic",
      "Aquatic",
      "Aromatic",
      "Musky",
      "Fresh",
      "Citrus",
      "Fresh spicy",
      "Herbal",
      "Powdery",
      "Woody"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.0,
      "10": 19.0,
      "30": 51.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "afnan-supremacycollectorsedition",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/afnan-supremacycollectorsedition",
    "brand": "Afnan",
    "name": "Supremacy Collector's Edition",
    "categories": [
      "men"
    ],
    "description": "Top notes are Pineapple, Bergamot, White Flowers and Apple; middle notes are Orange Blossom, Birch and Amber; base notes are oak moss, Musk and Ambergris.",
    "notes": [
      "Fruity",
      "Sweet",
      "White floral",
      "Citrus",
      "Amber",
      "Mossy",
      "Animalic",
      "Tropical",
      "Fresh",
      "Musky"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.5,
      "30": 49.0
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "afnan-supremacyinheavenpourhomme",
    "brand": "Afnan",
    "name": "Supremacy In Heaven Pour Homme",
    "categories": [],
    "description": "Top notes are Bergamot and Mandarin Orange; middle notes are Green Tea and Black Currant; base notes are Musk, Woodsy Notes and Sandalwood.",
    "notes": [
      "Citrus",
      "Woody",
      "Fruity",
      "Green",
      "Musky",
      "Powdery",
      "Fresh spicy",
      "Aromatic",
      "Floral",
      "Soft spicy"
    ],
    "wear": "Spring/Summer/Day",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "afnan-supremacynotonlyintense",
    "brand": "Afnan",
    "name": "Supremacy Not Only Intense",
    "categories": [],
    "description": "Top notes are Black Currant, Bergamot and Apple; middle notes are Oakmoss, Patchouli and Lavender; base notes are Ambergris, Musk and Saffron.",
    "notes": [
      "Fruity",
      "Mossy",
      "Woody",
      "Earthy",
      "Citrus",
      "Fresh spicy",
      "Amber",
      "Animalic",
      "Aromatic",
      "Warm spicy"
    ],
    "wear": "Winter* Spring Summer Fall Day Night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "alharamain-amberoud",
    "brand": "Al Haramain",
    "name": "Amber Oud",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are bergamot and green notes; middle notes are sweet notes, melon, pineapple and amber; base notes are musk, vanilla and woody notes.",
    "notes": [
      "Fruity",
      "Sweet",
      "Fresh",
      "Synthetic",
      "Woody"
    ],
    "wear": "winter spring summer autumn day night",
    "pricingConflict": true,
    "prices": {},
    "price": null,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "alharamain-amberouddubainight",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/alharamain-amberouddubainight",
    "brand": "Al Haramain",
    "name": "Amber Oud Dubai Night",
    "categories": [
      "men"
    ],
    "description": "Top notes are Saffron, Bergamot and elemi; middle notes are Agarwood, Bulgarian Rose and Lily of the Valley; base notes are Tonka Bean, Amber, White Musk and Oakmoss.",
    "notes": [
      "Amber",
      "Warm spicy",
      "Oud",
      "Rose",
      "Aromatic",
      "Citrus",
      "Musky",
      "Vanilla",
      "Fresh spicy",
      "Powdery"
    ],
    "wear": "winter spring summer* fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.0,
      "10": 25.5,
      "30": 69.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "alharamain-aquadubai",
    "brand": "Al Haramain",
    "name": "Aqua Dubai",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top Notes Green notes Bergamot Mandarin orange Heart Notes Blackcurrant Melon Pineapple Amber Base Notes Musk Galbanum Petitgrain Vanilla",
    "notes": [
      "Citrus",
      "Green",
      "Aromatic",
      "Fruity",
      "Fresh spicy",
      "Musky",
      "Powdery",
      "Amber"
    ],
    "wear": "spring summer day",
    "pricingConflict": true,
    "prices": {},
    "price": null,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "alharamain-laventure",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/alharamain-laventure",
    "brand": "Al Haramain",
    "name": "L'aventure",
    "categories": [
      "men"
    ],
    "description": "Top notes are Lemon, Bergamot and elemi; middle notes are Woody Notes, Jasmine and Lily-of-the-Valley; base notes are Musk, Patchouli and Amber.",
    "notes": [
      "Citrus",
      "Aromatic",
      "Woody",
      "Musky",
      "Fresh spicy",
      "White floral",
      "Powdery"
    ],
    "wear": "spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.5,
      "30": 55.5
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "alharamain-laventurefemmeeaudeparfum",
    "brand": "Al Haramain",
    "name": "L'Aventure Femme Eau de Parfum",
    "categories": [],
    "description": "Top notes are Pineapple, Black Currant, Bergamot and Wild Berries; middle notes are Cedar, Freesia and Rose; base notes are Musk, Sandalwood, Amber and Vanilla.",
    "notes": [
      "Top notes are pineapple",
      "Black currant",
      "Freesia and rose; base notes are musk",
      "Sandalwood",
      "Amber and vanilla."
    ],
    "wear": "Spring/Summer/Fall/Day/night*",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "amouage-existence",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/amouage-existence",
    "brand": "Amouage",
    "name": "Existence",
    "categories": [
      "women"
    ],
    "description": "Top notes are Aldehydes, Lily of the Valley and Rose; middle notes are Frankincense, Mystikal and Labdanum; base notes are White Musk, Benzoin and Ambergris.",
    "notes": [
      "Amber",
      "Fresh",
      "Aldehydic",
      "White floral",
      "Rose",
      "Musky",
      "Soapy",
      "Warm spicy",
      "Floral",
      "Green"
    ],
    "wear": "spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 11.5,
      "5": 25.0,
      "10": 47.0,
      "30": 134.5
    },
    "price": 11.5,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "arabiyatprestige-mahdaldhahab",
    "brand": "Arabiyat Prestige",
    "name": "Mahd Al Dhahab",
    "categories": [],
    "description": "Top notes are Bergamot, Spices and Lemon; middle notes are Amber, Patchouli and Oud; base notes are Vanilla, Sandalwood and White Musk.",
    "notes": [
      "Powdery",
      "Vanilla",
      "Woody",
      "Citrus",
      "Warm spicy",
      "Amber",
      "Musky",
      "Balsamic",
      "Patchouli",
      "Aromatic"
    ],
    "wear": "Winter Spring Summer* Fall Day Night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "arabiyatprestige-marwa",
    "brand": "Arabiyat Prestige",
    "name": "Marwa",
    "categories": [],
    "description": "Top notes are Calabrian bergamot, Lemon and Sicilian Orange; middle notes are Nigerian Ginger, Ceylon Cinnamon and Tunisian Neroli; base notes are Ambroxan, Chinese Black Tea, Olibanum and Guaiac Wood.",
    "notes": [
      "Fresh spicy",
      "Amber",
      "Citrus",
      "Fresh",
      "Woody",
      "Warm spicy",
      "Green",
      "Cinnamon",
      "Musky",
      "Aromatic"
    ],
    "wear": "Spring/Summer/Day",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "armaf-clubdenuitintenseman",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/armaf-clubdenuitintenseman",
    "brand": "Armaf",
    "name": "Club de Nuit Intense Man",
    "categories": [
      "men"
    ],
    "description": "Top Notes Lemon Bergamot Pineapple Apple Blackcurrant Heart Notes Birch Jasmine Rose Base Notes Ambergris Musk Patchouli Vanilla",
    "notes": [
      "Citrus",
      "Smoky",
      "Fresh",
      "Fruity",
      "Woody"
    ],
    "wear": "Fall/Winter/Spring Day Night",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.0,
      "30": 47.5
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "atralia-matchalatte",
    "brand": "Atralia",
    "name": "Matcha Latte",
    "categories": [],
    "description": "Top notes are Vanilla, Milk and Anise; middle notes are Sugar, Toffee and Licorice; base notes are Madagascar Vanilla, Tonka and Musk.",
    "notes": [
      "Sweet",
      "Vanilla",
      "Lactonic",
      "Soft spicy",
      "Powdery"
    ],
    "wear": "winter spring summer* fall day night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "atralia-sugarmalloweaudeparfum",
    "brand": "Atralia",
    "name": "Sugar Mallow Eau de Parfum",
    "categories": [],
    "description": "Top notes are Marshmallow, Strawberry and Orange; middle notes are Whipped Cream, Vanilla, Floral Notes and Coconut; base notes are Sugar, Cotton Candy, Musk and Raspberry.",
    "notes": [
      "Sweet",
      "Vanilla",
      "Powdery",
      "Fruity",
      "Caramel"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "azzaro-themostwanted",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/azzaro-themostwanted",
    "brand": "Azzaro",
    "name": "The Most Wanted",
    "categories": [
      "men"
    ],
    "description": "Top Notes Guatemala cardamom Heart Notes Toffee Base Notes Bourbon vanilla Vetiver",
    "notes": [
      "Sweet",
      "Spicy",
      "Gourmand",
      "Synthetic",
      "Woody"
    ],
    "wear": "Winter/Fall/Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.0,
      "30": 54.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "azzaro-wanted",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/azzaro-wanted",
    "brand": "Azzaro",
    "name": "Wanted",
    "categories": [
      "men"
    ],
    "description": "Top Notes Calabrian lemon Nigerian ginger Heart Notes Guatemala cardamom Cade juniper wood Base Notes Brazilian tonka bean Haitian vetiver",
    "notes": [
      "Synthetic",
      "Citrus",
      "Sweet",
      "Fresh",
      "Spicy"
    ],
    "wear": "winter*/spring/summer/autumn day/night",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.5,
      "30": 49.0
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "azzaro-wantedbynight",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/azzaro-wantedbynight",
    "brand": "Azzaro",
    "name": "Wanted by Night",
    "categories": [
      "men"
    ],
    "description": "Top Notes Cinnamon Mandarin orange Heart Notes Cumin Virginia ceda Frankincense Base Notes Cedarwood Tobacco absolute Cypress",
    "notes": [
      "Sweet",
      "Spicy",
      "Woody",
      "Fruity",
      "Synthetic"
    ],
    "wear": "Winter/Fall/Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.0,
      "30": 54.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "azzaro-wantedtonic",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/azzaro-wantedtonic",
    "brand": "Azzaro",
    "name": "Wanted Tonic",
    "categories": [
      "men"
    ],
    "description": "Top note is Lime; middle note is Ginger; base note is Patchouli.",
    "notes": [
      "Synthetic",
      "Aquatic",
      "Fresh",
      "Sweet",
      "Spicy"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.5,
      "30": 49.0
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "boadiceathevictorious-harmonious",
    "brand": "Boadicea the Victorious",
    "name": "Harmonious",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Ambrette (Musk Mallow), Cognac, Rum, Cardamom, Cinnamon, Saffron and Bergamot; middle notes are Orris Root, May Rose, Cashmere Wood and Coriander; base notes are Leather, Sandalwood, Musk, Amber, Vanilla and Vetiver.",
    "notes": [
      "Woody",
      "Musky",
      "Warm spicy",
      "Powdery",
      "Iris",
      "Aromatic",
      "Leather",
      "Floral",
      "Amber",
      "Earthy"
    ],
    "wear": "winter spring summer* fall day night",
    "pricingConflict": true,
    "prices": {},
    "price": null,
    "category": "unisex",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-b9",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-b9",
    "brand": "Bond no 9",
    "name": "B9",
    "categories": [
      "men"
    ],
    "description": "based on a blend of saffron, gardenia leaves, amber and musk.",
    "notes": [
      "White floral",
      "Musky",
      "Warm spicy",
      "Powdery",
      "Amber",
      "Animalic",
      "Lactonic",
      "Metallic",
      "Leather"
    ],
    "wear": "winter fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 12.5,
      "5": 28.0,
      "10": 53.0,
      "30": 153.5
    },
    "price": 12.5,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-bleeckerstreet",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-bleeckerstreet",
    "brand": "Bond no 9",
    "name": "Bleecker Street",
    "categories": [
      "men"
    ],
    "description": "Blackcurrant Violet leaf Vanilla Caramel Cinnamon Jasmine Oakmoss Patchouli",
    "notes": [
      "Green",
      "Fresh",
      "Fruity",
      "Woody",
      "Citrus"
    ],
    "wear": "Spring/Summer/fall Day",
    "pricingConflict": false,
    "prices": {
      "2": 13.0,
      "5": 29.0,
      "10": 55.5,
      "30": 159.5
    },
    "price": 13.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-dubaijade",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-dubaijade",
    "brand": "Bond no 9",
    "name": "Dubai Jade",
    "categories": [
      "men"
    ],
    "description": "Top Notes Sweet violet leaf Cumin Raspberry Heart Notes Lily Jasmine Rose Cedarwood Base Notes Ambe Ambrette Musk Birch tar Oud",
    "notes": [
      "Spicy",
      "Fresh",
      "Woody",
      "Sweet",
      "Smoky"
    ],
    "wear": "winter spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 15.5,
      "5": 35.5,
      "10": 68.0,
      "30": 197.5
    },
    "price": 15.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-eaudenewyork",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-eaudenewyork",
    "brand": "Bond no 9",
    "name": "Eau de New York",
    "categories": [
      "men"
    ],
    "description": "Neroli Petitgrain Oakmoss Bergamot White lily Blond woods Cyclamen Gardenia Grapefruit Green notes Mandarin orange Musk Vervain Vetiver Basil Jasmine",
    "notes": [
      "Fresh",
      "Floral",
      "Citrus",
      "Green",
      "Spicy"
    ],
    "wear": "Spring/Summer/Day",
    "pricingConflict": false,
    "prices": {
      "2": 11.0,
      "5": 23.5,
      "10": 44.5,
      "30": 128.0
    },
    "price": 11.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-fireisland",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-fireisland",
    "brand": "Bond no 9",
    "name": "Fire Island",
    "categories": [
      "men"
    ],
    "description": "Top Notes Cardamom Heart Notes White musk Neroli Base Notes Tuberose Patchouli",
    "notes": [
      "Floral",
      "Fresh",
      "Sweet",
      "Synthetic",
      "Powdery"
    ],
    "wear": "spring/Summer Day",
    "pricingConflict": false,
    "prices": {
      "2": 13.5,
      "5": 30.0,
      "10": 57.5,
      "30": 166.0
    },
    "price": 13.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-governorsisland",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-governorsisland",
    "brand": "Bond no 9",
    "name": "Governors Island",
    "categories": [
      "men"
    ],
    "description": "Ambrox Cedarwood Honey Incense material",
    "notes": [
      "Woody",
      "Spicy",
      "Synthetic",
      "Smoky",
      "Sweet"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 13.0,
      "5": 29.0,
      "10": 55.5,
      "30": 159.5
    },
    "price": 13.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-greenwichvillage",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-greenwichvillage",
    "brand": "Bond no 9",
    "name": "Greenwich Village",
    "categories": [
      "men"
    ],
    "description": "Blackcurrant Mandarin orange Ambrox Peach Praliné Water lily Jasmine Oakmoss Patchouli Peony Vanilla Lychee",
    "notes": [
      "Fruity",
      "Sweet",
      "Floral",
      "Fresh",
      "Gourmand"
    ],
    "wear": "winter* spring summer autumn* day night",
    "pricingConflict": false,
    "prices": {
      "2": 13.0,
      "5": 29.0,
      "10": 55.5,
      "30": 159.5
    },
    "price": 13.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-highline",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-highline",
    "brand": "Bond no 9",
    "name": "High Line",
    "categories": [
      "men"
    ],
    "description": "Tulip Muscari Purple lovegrass Bergamot Bur oak Indian rhubarb Redleaf rose",
    "notes": [
      "Floral",
      "Fresh",
      "Green",
      "Synthetic",
      "Citrus"
    ],
    "wear": "Spring/Summer/Day",
    "pricingConflict": false,
    "prices": {
      "2": 10.5,
      "5": 22.0,
      "10": 41.5,
      "30": 118.5
    },
    "price": 10.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-ilovenewyorkforfathers",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-ilovenewyorkforfathers",
    "brand": "Bond no 9",
    "name": "I Love New York for Fathers",
    "categories": [
      "men"
    ],
    "description": "Top Notes Lime Basil Coriander Heart Notes Sage Grapefruit blossom Lavender Base Notes Amber Musk Tree moss",
    "notes": [
      "Fresh",
      "Green",
      "Citrus",
      "Fruity",
      "Aquatic"
    ],
    "wear": "summer spring day night*",
    "pricingConflict": false,
    "prices": {
      "2": 15.5,
      "5": 35.5,
      "10": 68.0,
      "30": 197.5
    },
    "price": 15.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-lafayettestreet",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-lafayettestreet",
    "brand": "Bond no 9",
    "name": "Lafayette Street",
    "categories": [
      "men"
    ],
    "description": "Apple Bergamot Floral notes Ambergris Tonka bean Ambroxan Coriander Dry woods Vanilla",
    "notes": [
      "Sweet",
      "Fresh",
      "Floral",
      "Fruity",
      "Spicy"
    ],
    "wear": "winter* spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 13.0,
      "5": 29.0,
      "10": 55.5,
      "30": 159.5
    },
    "price": 13.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-newyorknights",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-newyorknights",
    "brand": "Bond no 9",
    "name": "New York Nights",
    "categories": [
      "men"
    ],
    "description": "Top Notes Gardenia Carnation Jasmine Heart Notes Floral notes Patchouli Marine notes Sandalwood Base Notes Caramel Coffee",
    "notes": [
      "Sweet",
      "Floral",
      "Gourmand",
      "Creamy",
      "Spicy"
    ],
    "wear": "winter spring* summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 13.0,
      "5": 29.0,
      "10": 55.5,
      "30": 159.5
    },
    "price": 13.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-nomad",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-nomad",
    "brand": "Bond no 9",
    "name": "NoMad",
    "categories": [
      "men"
    ],
    "description": "Pear Rose Vanilla Amber Blackcurrant Oud Violet leaf Quince",
    "notes": [
      "Fruity",
      "Sweet",
      "Woody",
      "Floral",
      "Synthetic"
    ],
    "wear": "winter spring summer* autumn day* night",
    "pricingConflict": false,
    "prices": {
      "2": 15.5,
      "5": 35.5,
      "10": 68.0,
      "30": 197.5
    },
    "price": 15.5,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-numberone",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-numberone",
    "brand": "Bond no 9",
    "name": "Number One",
    "categories": [
      "men"
    ],
    "description": "Top Notes Italian bergamot Ylang-ylang Heart Notes Brazilian tonka bean Bulgarian rose Jasmine White musk Base Notes Bourbon vanilla Cashmere wood Indonesian patchouli",
    "notes": [
      "Sweet",
      "Gourmand",
      "Powdery",
      "Floral",
      "Creamy"
    ],
    "wear": "winter spring autumn night",
    "pricingConflict": false,
    "prices": {
      "2": 13.0,
      "5": 29.0,
      "10": 55.5,
      "30": 159.5
    },
    "price": 13.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-offbroadway",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bondno9-offbroadway",
    "brand": "Bond no 9",
    "name": "Off-Broadway",
    "categories": [
      "men"
    ],
    "description": "Top Notes Blackcurrant Grapefruit blossom Heart Notes Lily Nutmeg Osmanthus Base Notes Musk Patchouli Sandalwood Vetiver",
    "notes": [
      "Floral",
      "Fruity"
    ],
    "wear": "winter spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 13.0,
      "5": 29.0,
      "10": 55.5,
      "30": 159.5
    },
    "price": 13.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-sagharbor",
    "brand": "Bond no 9",
    "name": "Sag Harbor",
    "categories": [
      "men"
    ],
    "description": "Magnolia Marine notes Sandalwood Bergamot Ivy Peony Amber Oud",
    "notes": [
      "Fresh",
      "Floral",
      "Aquatic",
      "Synthetic",
      "Citrus"
    ],
    "wear": "Spring/Summer Day",
    "pricingConflict": false,
    "prices": {
      "2": 10.5,
      "5": 22.5,
      "10": 42.5,
      "30": 122.0
    },
    "price": 10.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-shelterisland",
    "brand": "Bond no 9",
    "name": "Shelter Island",
    "categories": [
      "men"
    ],
    "description": "Top Notes Black pepper Citrus zest Heart Notes White lily Algae Base Notes Oud Sandalwood Amber Musk Myrrh",
    "notes": [
      "Aquatic",
      "Fresh",
      "Woody",
      "Floral",
      "Synthetic"
    ],
    "wear": "summer spring day night*",
    "pricingConflict": false,
    "prices": {
      "2": 10.5,
      "5": 22.5,
      "10": 42.5,
      "30": 122.0
    },
    "price": 10.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-signature",
    "brand": "Bond no 9",
    "name": "Signature",
    "categories": [
      "men"
    ],
    "description": "Rose Musk Tonka bean Oud",
    "notes": [
      "Floral",
      "Oriental",
      "Sweet",
      "Woody",
      "Fruity"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 13.0,
      "5": 29.5,
      "10": 56.5,
      "30": 163.0
    },
    "price": 13.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-suttonplace",
    "brand": "Bond no 9",
    "name": "Sutton Place",
    "categories": [
      "men"
    ],
    "description": "Lily Musk Pineapple Bergamot Amber Blackcurrant absolute Jasmine Leather Patchouli",
    "notes": [
      "Fresh",
      "Spicy",
      "Fruity",
      "Woody",
      "Citrus"
    ],
    "wear": "winter* spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 13.0,
      "5": 29.5,
      "10": 56.0,
      "30": 161.5
    },
    "price": 13.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-thescentofpeaceforhim",
    "brand": "Bond no 9",
    "name": "The Scent of Peace for Him",
    "categories": [
      "men"
    ],
    "description": "Top Notes Pineapple Juniper berry Bergamot Heart Notes Blackcurrant Cedarwood Vetiver Base Notes Musk Moss Patchouli",
    "notes": [
      "Fruity",
      "Fresh",
      "Synthetic",
      "Sweet",
      "Citrus"
    ],
    "wear": "Spring/Summer/Day",
    "pricingConflict": false,
    "prices": {
      "2": 13.0,
      "5": 29.5,
      "10": 56.0,
      "30": 161.5
    },
    "price": 13.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-tribeca",
    "brand": "Bond no 9",
    "name": "TriBeCa",
    "categories": [
      "men"
    ],
    "description": "Top Notes Green hazelnut Cocoa absolute Heart Notes Jasmine sambac absolute Cedarwood Base Notes Caramel Moss Ambroxan",
    "notes": [
      "Sweet",
      "Gourmand",
      "Creamy",
      "Synthetic",
      "Spicy"
    ],
    "wear": "winter spring* summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 13.0,
      "5": 29.0,
      "10": 55.5,
      "30": 159.5
    },
    "price": 13.0,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-wallstreet",
    "brand": "Bond no 9",
    "name": "Wall Street",
    "categories": [
      "men"
    ],
    "description": "Cucumber Ambergris Crambe Lavender Vetiver",
    "notes": [
      "Fresh",
      "Aquatic",
      "Green",
      "Synthetic",
      "Spicy"
    ],
    "wear": "spring summer day night*",
    "pricingConflict": false,
    "prices": {
      "2": 10.0,
      "5": 21.5,
      "10": 40.0,
      "30": 114.0
    },
    "price": 10.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bondno9-westside",
    "brand": "Bond no 9",
    "name": "West Side",
    "categories": [
      "men"
    ],
    "description": "Top Notes Peony Rose Ylang-ylang Heart Notes Base Notes Vanilla Musk",
    "notes": [
      "Floral",
      "Sweet",
      "Powdery",
      "Gourmand",
      "Woody"
    ],
    "wear": "winter* spring summer autumn* day night",
    "pricingConflict": false,
    "prices": {
      "2": 11.0,
      "5": 24.5,
      "10": 46.5,
      "30": 133.0
    },
    "price": 11.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "burberry-britformenlimitededition",
    "brand": "Burberry",
    "name": "Brit for Men Limited Edition",
    "categories": [
      "men"
    ],
    "description": "Rosemary Melon Galbanum Middle Notes Watery Notes Violet Cyclamen Base Notes Musk Moss Vetiver",
    "notes": [
      "Spicy",
      "Oriental",
      "Woody",
      "Fresh",
      "Fougère"
    ],
    "wear": "Spring/summer/Fall/Day/night",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.5,
      "30": 49.0
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "burberry-britsheer",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/burberry-britsheer",
    "brand": "Burberry",
    "name": "Brit Sheer",
    "categories": [
      "women"
    ],
    "description": "Top notes are Litchi, Yuzu, Pineapple Leaf and Mandarin Orange; middle notes are Pink Peony, Peach Blossom and Pear; base notes are White Musk and White Woods.",
    "notes": [
      "Floral",
      "Fruity",
      "Fresh",
      "Citrus",
      "Sweet",
      "Tropical",
      "Musky",
      "Rose",
      "Green"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.5,
      "30": 49.0
    },
    "price": 5.5,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "burberry-burberrybritformen",
    "brand": "Burberry",
    "name": "Burberry Brit for Men",
    "categories": [
      "men"
    ],
    "description": "Top Notes Cardamom Ginger Lime Mandarin orange Heart Notes Brazilian rosewood Cedar Patchouli Base Notes Musk Tonka bean Vetiver",
    "notes": [
      "Citrus",
      "Woody",
      "Spicy",
      "Fresh",
      "Sweet"
    ],
    "wear": "Fall/Winter/Day/Night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.0,
      "10": 9.0,
      "30": 21.0
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "burberry-burberrytouch",
    "brand": "Burberry",
    "name": "Burberry Touch",
    "categories": [
      "men"
    ],
    "description": "Top notes are Violet Leaf, Artemisia and Mandarin Orange; middle notes are White Pepper, Cedar and Nutmeg; base notes are White Musk, Tonka Bean and Vetiver.",
    "notes": [
      "Fresh spicy",
      "Ozonic",
      "Musky",
      "Aquatic",
      "Woody",
      "Aromatic",
      "Powdery",
      "Green",
      "Warm spicy",
      "Vanilla"
    ],
    "wear": "spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.0,
      "10": 9.0,
      "30": 21.0
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "burberry-heroparfum",
    "brand": "Burberry",
    "name": "Hero Parfum",
    "categories": [],
    "description": "Top note is Amyris; middle note is Cedarwood; base note is Cypriol Oil or Nagarmotha.",
    "notes": [
      "Woody",
      "Earthy",
      "Aromatic",
      "Balsamic",
      "Powdery"
    ],
    "wear": "Winter Spring* Summer* Fall Day* Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.5,
      "10": 22.5,
      "30": 62.0
    },
    "price": 6.5,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bvlgari-aqvapourhommebvlgari",
    "brand": "Bvlgari",
    "name": "Aqva Pour Homme Bvlgari",
    "categories": [
      "men"
    ],
    "description": "Top Notes Mandarin orange Petitgrain Heart Notes Neptune grass Santolina Base Notes Mineral amber Clary sage",
    "notes": [
      "Aquatic",
      "Fresh",
      "Citrus",
      "Green",
      "Synthetic"
    ],
    "wear": "Spring/Summer/Day/night",
    "pricingConflict": false,
    "prices": {
      "2": 8.0,
      "5": 17.0,
      "10": 31.0,
      "30": 87.0
    },
    "price": 8.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bvlgari-baciami",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/bvlgari-baciami",
    "brand": "Bvlgari",
    "name": "Baciami",
    "categories": [
      "women"
    ],
    "description": "Vanilla, Floral notes, Amber, Gardenia",
    "notes": [
      "Floral",
      "Creamy",
      "Sweet",
      "Powerdery",
      "Gourmand"
    ],
    "wear": "winter spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 10.0,
      "5": 21.0,
      "10": 39.5,
      "30": 112.5
    },
    "price": 10.0,
    "category": "women",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bvlgari-bvlgariman",
    "brand": "Bvlgari",
    "name": "Bvlgari Man",
    "categories": [
      "men"
    ],
    "description": "Calabrian bergamot Tonka bean White pear Benzoin Siam Blond woods Sandalwood Vegetal amber White honey Violet leaf",
    "notes": [
      "Woody",
      "Fresh",
      "Spicy",
      "Green",
      "Citrus"
    ],
    "wear": "Spring/Summer/Fall Day/night",
    "pricingConflict": false,
    "prices": {
      "2": 9.0,
      "5": 19.5,
      "10": 36.5,
      "30": 103.0
    },
    "price": 9.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bvlgari-bvlgarimanblack",
    "brand": "Bvlgari",
    "name": "Bvlgari Man (Black)",
    "categories": [
      "men"
    ],
    "description": "Top Notes Rum Tobacco Heart Notes Leather Orris absolute Tuberose Base Notes Gaiac wood Tonka bean Benzoin",
    "notes": [
      "Spicy",
      "Woody",
      "Sweet",
      "Oriental",
      "Leathery"
    ],
    "wear": "Fall/winter/night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "bvlgari-legemmetygar",
    "brand": "Bvlgari",
    "name": "Le Gemme - Tygar",
    "categories": [
      "men"
    ],
    "description": "Grapefruit Ambrox Ginger",
    "notes": [
      "Citrus",
      "Fresh",
      "Woody",
      "Spicy",
      "Fruity"
    ],
    "wear": "spring summer autumn* day night",
    "pricingConflict": false,
    "prices": {
      "2": 14.0,
      "5": 31.5,
      "10": 60.0,
      "30": 174.0
    },
    "price": 14.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "byredo-oudimmortel",
    "brand": "Byredo",
    "name": "Oud Immortel",
    "categories": [
      "men"
    ],
    "description": "Top Notes Frankincense Cardamom Heart Notes Papyrus Patchouli Brazilian rosewood Base Notes Base Notes Oud Tobacco Moss",
    "notes": [
      "Woody",
      "Spicy",
      "Smoky",
      "Earthy",
      "Oriental"
    ],
    "wear": "winter spring* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 10.0,
      "5": 21.0,
      "10": 39.5,
      "30": 112.5
    },
    "price": 10.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "calvinklein-escapebycalvinklein",
    "brand": "Calvin Klein",
    "name": "Escape by Calvin Klein",
    "categories": [
      "men"
    ],
    "description": "Top Notes Melon Juniper Mango Bergamot Eucalyptus Grapefruit Heart Notes Birch Cypress Fir Sage Marine notes Rosemary Base Notes Oakmoss Amber Patchouli Sandalwood Vetiver",
    "notes": [
      "Fruity",
      "Fresh",
      "Citrus",
      "Woody",
      "Sweet"
    ],
    "wear": "Spring/ Summer Day",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.0,
      "10": 7.5,
      "30": 16.0
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "calvinklein-eternityformen",
    "brand": "Calvin Klein",
    "name": "Eternity for Men",
    "categories": [
      "men"
    ],
    "description": "Top Notes Lavender Green notes Mandarin orange Heart Notes Sage Geranium Jasmine Basil Base Notes Sandalwood Vetiver Amber Rosewood",
    "notes": [
      "Fresh",
      "Green",
      "Citrus",
      "Spicy",
      "Floral"
    ],
    "wear": "Spring/ Summer Day",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.5,
      "10": 8.5,
      "30": 19.0
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "carolinaherrera-212men",
    "brand": "Carolina Herrera",
    "name": "212 Men",
    "categories": [
      "men"
    ],
    "description": "Top Notes Citrus leaf Grass Heart Notes Heart Notes Lavender Spices Gardenia Base Notes Base Notes Musk Sandalwood Gaiac wood",
    "notes": [
      "Fresh",
      "Green",
      "Synthetic",
      "Woody",
      "Citrus"
    ],
    "wear": "Spring/ Summer Day Night",
    "pricingConflict": false,
    "prices": {
      "2": 4.5,
      "5": 7.5,
      "10": 12.5,
      "30": 32.0
    },
    "price": 4.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "carolinaherrera-badboy",
    "brand": "Carolina Herrera",
    "name": "Bad Boy",
    "categories": [
      "men"
    ],
    "description": "Top Notes Black pepper Grapefruit Italian bergamot Pink pepper White pepper Heart Notes Vetiver Clary sage Base Notes Cocoa absolute Tonka bean",
    "notes": [
      "Sweet",
      "Synthetic",
      "Spicy",
      "Woody",
      "Fresh"
    ],
    "wear": "Fall/ Winter/ spring Night",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 8.5,
      "10": 14.0,
      "30": 36.5
    },
    "price": 5.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "carolinaherrera-chmen",
    "brand": "Carolina Herrera",
    "name": "CH Men",
    "categories": [
      "men"
    ],
    "description": "Top Notes Violet Grass Heart Notes Nutmeg Saffron Base Notes Suede Vanilla Cashmere Jasmine sambac Sandalwood Vetiver",
    "notes": [
      "Sweet",
      "Leathery",
      "Woody",
      "Fruity",
      "Spicy"
    ],
    "wear": "winter spring autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.0,
      "10": 19.5,
      "30": 52.5
    },
    "price": 6.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "carolinaherrera-goodgirlblush",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/carolinaherrera-goodgirlblush",
    "brand": "Carolina Herrera",
    "name": "Good Girl Blush",
    "categories": [
      "women"
    ],
    "description": "Top notes are Bergamot and Bitter Almond; middle notes are Peony and Ylang-Ylang; base notes are Vanilla and Coumarin.",
    "notes": [
      "Floral",
      "Vanilla",
      "Fresh",
      "Citrus",
      "Sweet",
      "Yellow floral",
      "Rose",
      "Woody",
      "Almond",
      "Aromatic"
    ],
    "wear": "spring summer autumn* day night*",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 13.5,
      "10": 24.0,
      "30": 66.5
    },
    "price": 7.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "cartier-declarationdunsoir",
    "brand": "Cartier",
    "name": "Déclaration d'un Soir",
    "categories": [
      "men"
    ],
    "description": "Top Notes Cardamom Pepper Cumin Heart Notes Rose Nutmeg Base Notes Sandalwood",
    "notes": [
      "Floral",
      "Spicy",
      "Woody",
      "Fresh",
      "Synthetic"
    ],
    "wear": "Winter/ Fall/ Spring/ Summer Day",
    "pricingConflict": false,
    "prices": {
      "2": 4.5,
      "5": 8.5,
      "10": 14.0,
      "30": 35.5
    },
    "price": 4.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "cartier-pashadecartier",
    "brand": "Cartier",
    "name": "Pasha de Cartier",
    "categories": [
      "men"
    ],
    "description": "Balsamic notes Sandalwood Amber Patchouli",
    "notes": [
      "Spicy",
      "Sweet",
      "Woody",
      "Oriental",
      "Resinous"
    ],
    "wear": "Fall/ Winter/ Night",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 9.5,
      "10": 16.0,
      "30": 41.5
    },
    "price": 5.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "chanel-allurehomme",
    "brand": "Chanel",
    "name": "Allure Homme",
    "categories": [
      "men"
    ],
    "description": "Top Notes Bergamot Lavender Peach Ginger Lemon Mandarin orange Heart Notes Pepper Cedar Jasmine Patchouli Rosewood Vetiver Aniseed Freesia Gardenia Rose Base Notes Sandalwood Tonka bean Amber Musk Oakmoss Vanilla Benzoin Coconut Leather",
    "notes": [
      "Woody",
      "Spicy",
      "Fresh",
      "Sweet",
      "Citrus"
    ],
    "wear": "winter spring autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.0,
      "30": 54.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "chanel-bleudechanel",
    "brand": "Chanel",
    "name": "Bleu de Chanel",
    "categories": [
      "men"
    ],
    "description": "Top Notes Top Notes Citrus notes Pink pepper Vetiver Heart Notes Grapefruit Cedar Labdanum Base Notes Ginger Sandalwood Frankincense",
    "notes": [
      "Fresh",
      "Citrus",
      "Woody",
      "Spicy",
      "Aquatic"
    ],
    "wear": "Spring/ Summer/Fall Day/Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 13.0,
      "10": 23.0,
      "30": 63.5
    },
    "price": 6.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "clinque-happy",
    "brand": "Clinque",
    "name": "Happy",
    "categories": [
      "men"
    ],
    "description": "Top notes are Mandarin Orange, Lime, Sea Notes, Lemon and Green Notes; middle notes are Freesia, Jasmine, Lily-of-the-Valley and Rose; base notes are Cypress, Musk, Cedar and Guaiac Wood.",
    "notes": [
      "Citrus",
      "Green",
      "Aromatic",
      "Marine",
      "Woody"
    ],
    "wear": "spring Summer day",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.0,
      "10": 17.0,
      "30": 44.5
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "coach-coachplatinum",
    "brand": "Coach",
    "name": "Coach Platinum",
    "categories": [
      "men"
    ],
    "description": "Top notes are Pineapple, Black Pepper and Juniper Berries; middle notes are Cashmeran, Sage and Geranium; base notes are Vanilla, Leather, Sandalwood and Patchouli.",
    "notes": [
      "Woody",
      "Fresh spicy",
      "Aromatic",
      "Vanilla",
      "Powdery",
      "Sweet",
      "Fruity",
      "Warm spicy",
      "Leather",
      "Musky"
    ],
    "wear": "spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.0,
      "10": 19.0,
      "30": 51.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "coach-openroad",
    "brand": "Coach",
    "name": "Open Road",
    "categories": [
      "men"
    ],
    "description": "Top notes are Lemon and Red Apple; middle notes are Sichuan Pepper, Clary Sage and Lavender; base notes are Vetiver, Cedar and Patchouli.",
    "notes": [
      "Aromatic",
      "Woody",
      "Citrus",
      "Fresh spicy",
      "Earthy",
      "Lavender",
      "Herbal",
      "Soft spicy",
      "Fruity",
      "Patchouli"
    ],
    "wear": "spring summer fall* day",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.5,
      "10": 8.5,
      "30": 19.0
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "creed-millesimeimperial",
    "brand": "Creed",
    "name": "Millésime Impérial",
    "categories": [
      "men"
    ],
    "description": "Top Notes Bergamot Blackcurrant Violet leaf Heart Notes Marine notes Iris Base Notes Cedarwood Musk Sandalwood",
    "notes": [
      "Fresh",
      "Citrus",
      "Aquatic",
      "Fruity",
      "Woody"
    ],
    "wear": "Spring/Summer/fall*/Day/night*",
    "pricingConflict": false,
    "prices": {
      "2": 13.0,
      "5": 29.5,
      "10": 56.5,
      "30": 163.0
    },
    "price": 13.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "creed-silvermountainwater",
    "brand": "Creed",
    "name": "Silver Mountain Water",
    "categories": [
      "men"
    ],
    "description": "Top Notes Bergamot Blackcurrant Galbanum Orange Heart Notes Ozonic notes Tea Base Notes Musk Sandalwood",
    "notes": [
      "Fresh",
      "Citrus",
      "Aquatic",
      "Fruity",
      "Green"
    ],
    "wear": "Fall*/Spring/Summer/Day/Night*",
    "pricingConflict": false,
    "prices": {
      "2": 13.0,
      "5": 29.5,
      "10": 56.5,
      "30": 163.0
    },
    "price": 13.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dior-diorhommecologne",
    "brand": "Dior",
    "name": "Dior Homme Cologne",
    "categories": [
      "men"
    ],
    "description": "Top Notes Calabrian bergamot Heart Notes Moroccan grapefruit blossom White musk",
    "notes": [
      "Citrus",
      "Fresh",
      "Fruity",
      "Aquatic",
      "Floral"
    ],
    "wear": "spring/summer/day",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 12.0,
      "10": 21.0,
      "30": 57.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dior-diorhommeintense",
    "brand": "Dior",
    "name": "Dior Homme Intense",
    "categories": [
      "men"
    ],
    "description": "Top Notes Florentine iris absolute Heart Notes Ecuadorian ambrette seed Base Notes Virginia cedar",
    "notes": [
      "Powdery",
      "Sweet",
      "Woody",
      "Spicy",
      "Gourmand"
    ],
    "wear": "Winter/Fall/Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 13.0,
      "10": 23.0,
      "30": 63.5
    },
    "price": 6.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dior-diorhommesport",
    "brand": "Dior",
    "name": "Dior Homme Sport",
    "categories": [
      "men"
    ],
    "description": "Top note citron Blood orange grapefruit Pear Heart notes Elemi resin nutmeg pink pepper Base notes Haitian vetiver sandalwood",
    "notes": [
      "Fresh",
      "Citrus",
      "Woody",
      "Spicy",
      "Fruity"
    ],
    "wear": "spring/summer/day",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 12.0,
      "10": 21.0,
      "30": 57.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dior-fahrenheit",
    "brand": "Dior",
    "name": "Fahrenheit",
    "categories": [
      "men"
    ],
    "description": "Top notes are Nutmeg Flower, Lavender, Cedar, Mandarin Orange, Chamomile, Bergamot, Hawthorn and Lemon; middle notes are Violet Leaf, Nutmeg, Cedar, Sandalwood, Carnation, Honeysuckle, Jasmine and Lily-of-the-Valley; base notes are Leather, Vetiver, Musk, Amber, Patchouli and Tonka Bean.",
    "notes": [
      "Leather",
      "Woody",
      "Ozonic",
      "Fresh spicy",
      "Aromatic",
      "Animalic",
      "Aquatic",
      "Floral",
      "Citrus",
      "Green"
    ],
    "wear": "winter fall day* night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.0,
      "30": 54.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dior-sauvage",
    "brand": "Dior",
    "name": "Sauvage",
    "categories": [
      "men"
    ],
    "description": "Top notes are Calabrian bergamot and Pepper; middle notes are Sichuan Pepper, Lavender, Pink Pepper, Vetiver, Patchouli, Geranium and elemi; base notes are Ambroxan, Cedar and Labdanum.",
    "notes": [
      "Resh spicy",
      "Amber",
      "Citrus",
      "Aromatic",
      "Musky",
      "Woody",
      "Lavender",
      "Herbal",
      "Warm spicy"
    ],
    "wear": "winter* spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.0,
      "30": 54.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dior-sauvageelixir",
    "brand": "Dior",
    "name": "Sauvage Elixir",
    "categories": [
      "men"
    ],
    "description": "Top Notes NutmegCardamom Cinnamon Grapefruit Heart Notes Provençal lavender Base Notes Liquorice Amber notes Patchouli Woods Haitian vetiver",
    "notes": [
      "Spicy",
      "Woody",
      "Sweet",
      "Fresh",
      "Synthetic"
    ],
    "wear": "Fall/Winter/Night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.0,
      "10": 25.5,
      "30": 71.0
    },
    "price": 7.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dior-sauvageparfumdior",
    "brand": "Dior",
    "name": "Sauvage Parfum Dior",
    "categories": [
      "men"
    ],
    "description": "Top notes are Bergamot, Mandarin Orange and elemi; middle note is Sandalwood; base notes are Olibanum, Tonka Bean and Vanilla.",
    "notes": [
      "Citrus",
      "Woody",
      "Amber",
      "Aromatic",
      "Vanilla",
      "Fresh spicy",
      "Warm spicy",
      "Powdery",
      "Balsamic",
      "Sweet"
    ],
    "wear": "Spring/Fall/Winter/Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 13.0,
      "10": 23.0,
      "30": 63.5
    },
    "price": 6.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dolcegabbana-dolcegabbanatheonesport",
    "brand": "Dolce & Gabbana",
    "name": "Dolce & Gabbana The One Sport",
    "categories": [
      "men"
    ],
    "description": "Top Notes Rosemary Aquatic notes Heart Notes Cardamom Sequoia Base Notes Musk Patchouli",
    "notes": [
      "Fresh",
      "Aquatic",
      "Synthetic",
      "Citrus",
      "Spicy"
    ],
    "wear": "Spring/Summer day",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dolcegabbana-lightblue-women",
    "brand": "Dolce & Gabbana",
    "name": "Light Blue",
    "categories": [
      "women"
    ],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "women",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dolcegabbana-theoneformen",
    "brand": "Dolce & Gabbana",
    "name": "The One for Men",
    "categories": [
      "men"
    ],
    "description": "Top Notes Grapefruit Basil Coriander Heart Notes Orange blossom Cardamom Ginger Base Notes Amber Tobacco Cedar",
    "notes": [
      "Sweet",
      "Spicy",
      "Woody",
      "Oriental",
      "Fruity"
    ],
    "wear": "Fall/Winter/spring Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.0,
      "10": 19.5,
      "30": 52.5
    },
    "price": 6.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dolcegabbana-lightblue-men",
    "brand": "Dolce&Gabbana",
    "name": "Light Blue",
    "categories": [
      "men"
    ],
    "description": "Top notes are Grapefruit, Bergamot, Sicilian Mandarin and Juniper; middle notes are Pepper, Rosemary and Brazilian Rosewood; base notes are Musk, Incense and Oakmoss.",
    "notes": [
      "Citrus",
      "Fresh spicy",
      "Aromatic",
      "Woody",
      "Musky"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.5,
      "10": 10.0,
      "30": 24.0
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dolcegabbana-theone",
    "brand": "Dolce&Gabbana",
    "name": "The One",
    "categories": [
      "men"
    ],
    "description": "Top notes are Grapefruit, Coriander and Basil; middle notes are Cardamom, Ginger and Orange Blossom; base notes are Amber, Tobacco and Cedar.",
    "notes": [
      "Amber",
      "Tobacco",
      "Fresh spicy",
      "Citrus",
      "Aromatic",
      "Warm spicy",
      "Sweet",
      "Woody",
      "White floral",
      "Fresh"
    ],
    "wear": "winter fall day* night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.5,
      "10": 22.5,
      "30": 62.0
    },
    "price": 6.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dumont-elixir",
    "brand": "Dumont",
    "name": "Elixir",
    "categories": [
      "men"
    ],
    "description": "Top notes are Apple, Bergamot, Cardamom and Orange; middle notes are Orange Blossom, Praline, Geranium and Mint; base notes are Ambergris, Tonka, Amber and Moss.",
    "notes": [
      "Citrus",
      "Amber",
      "Aromatic",
      "Sweet",
      "Fresh spicy",
      "White floral",
      "Warm spicy",
      "Green",
      "Animalic",
      "Fruity"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.5,
      "10": 10.0,
      "30": 24.0
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dumont-nitroblue",
    "brand": "Dumont",
    "name": "Nitro Blue",
    "categories": [
      "men"
    ],
    "description": "Top notes are Orange Blossom, Cinnamon, Sage, Lemon and Basil; middle notes are Praline, Tolu Balsam, Woody Notes and Black Cardamom; base notes are Sweet Notes, Black Amber, Patchouli and Brazilian Rosewood.",
    "notes": [
      "Sweet",
      "Warm spicy",
      "Amber",
      "Woody",
      "Aromatic",
      "Citrus",
      "Cinnamon",
      "White floral",
      "Balsamic",
      "Powdery"
    ],
    "wear": "winter spring summer* fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.5,
      "10": 8.0,
      "30": 17.5
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dumont-nitrored",
    "brand": "Dumont",
    "name": "Nitro Red",
    "categories": [
      "men"
    ],
    "description": "Top notes are Apple, Lavender and Bergamot; middle notes are Watermelon, Cedar and Calamus; base notes are Amber, Sandalwood and Patchouli.",
    "notes": [
      "Woody",
      "Ozonic",
      "Aquatic",
      "Fruity",
      "Amber",
      "Lavender",
      "Fresh spicy",
      "Citrus",
      "Aromatic",
      "Warm spicy"
    ],
    "wear": "spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.0,
      "10": 9.5,
      "30": 22.5
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "dumont-nitrowhite",
    "brand": "Dumont",
    "name": "Nitro White",
    "categories": [],
    "description": "Top notes are Juniper Berries, Iris and Cypress; middle notes are Myrrh and Patchouli; base notes are Honey, Vanilla, Amber, Musk and Leather.",
    "notes": [
      "Amber",
      "Honey",
      "Powdery",
      "Vanilla",
      "Aromatic",
      "Sweet",
      "Woody",
      "Musky",
      "Fresh spicy",
      "Animalic"
    ],
    "wear": "Winter Spring Summer* Fall Day Night",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.5,
      "10": 8.5,
      "30": 19.0
    },
    "price": 3.5,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "ermenegildozegna-uomo",
    "brand": "Ermenegildo Zegna",
    "name": "Uomo",
    "categories": [
      "men"
    ],
    "description": "Top notes are Cardamom, Calabrian bergamot, Mint and Lemon; middle notes are Vetiver, Hedione, Cedar, Sage and Floral Notes; base notes are Amber, Vanilla, Woody Notes and Musk.",
    "notes": [
      "Aromatic",
      "Woody",
      "Citrus",
      "Green",
      "Warm spicy",
      "Floral",
      "Amber",
      "Powdery",
      "Vanilla",
      "Fresh spicy"
    ],
    "wear": "Spring Fall Day",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "escada-candylove",
    "brand": "Escada",
    "name": "Candy Love",
    "categories": [],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "escada-escadaflordelsol",
    "brand": "Escada",
    "name": "Escada Flor Del Sol",
    "categories": [],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "escada-escadamagnetism",
    "brand": "Escada",
    "name": "Escada Magnetism",
    "categories": [
      "men"
    ],
    "description": "Tolu balm Amber Cedar Musk Pepper Pepper tree Saffron Sandalwood Vanilla Leather",
    "notes": [
      "Spicy",
      "Sweet",
      "Woody",
      "Oriental",
      "Powdery"
    ],
    "wear": "Fall/Winter/day/Night",
    "pricingConflict": false,
    "prices": {
      "2": 14.0,
      "5": 31.5,
      "10": 60.5,
      "30": 175.5
    },
    "price": 14.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "escentricmolecules-escentric01",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/escentricmolecules-escentric01",
    "brand": "Escentric Molecules",
    "name": "Escentric 01",
    "categories": [
      "women"
    ],
    "description": "Floral Musk ISO-E-Super",
    "notes": [
      "Woody",
      "Musky",
      "Amber",
      "Animalic",
      "Powdery"
    ],
    "wear": "spring summer autumn day",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 13.0,
      "10": 23.0,
      "30": 63.5
    },
    "price": 6.5,
    "category": "women",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "escentricmolecules-molecule01",
    "brand": "Escentric Molecules",
    "name": "Molecule 01",
    "categories": [
      "men"
    ],
    "description": "Floral Musk ISO-E-Super",
    "notes": [
      "Woody",
      "Musky",
      "Amber",
      "Animalic",
      "Powdery"
    ],
    "wear": "spring summer autumn day",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.5,
      "10": 22.5,
      "30": 62.0
    },
    "price": 6.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "escentricmolecules-molecule03",
    "brand": "Escentric Molecules",
    "name": "Molecule 03",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "The fragrance features Vetiver. ISO-E-Super",
    "notes": [
      "Aromatic",
      "Woody",
      "Earthy",
      "Green"
    ],
    "wear": "winter* spring summer autumn day night",
    "pricingConflict": true,
    "prices": {},
    "price": null,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "exnihilo-bluetalisman",
    "brand": "Ex Nihilo",
    "name": "Blue Talisman",
    "categories": [],
    "description": "Top notes are Pear, Bergamot, Mandarin Orange and Ginger; middle notes are Orange Blossom and Georgywood; base notes are Musk, Ambrofix™, Akigalawood and Cedar.",
    "notes": [
      "Citrus",
      "Fruity",
      "Musky",
      "Sweet",
      "Woody",
      "Fresh spicy",
      "White floral",
      "Powdery",
      "Fresh",
      "Oud"
    ],
    "wear": "Spring Summer Fall* Day Night*",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "fendi-fandifendipourhomme",
    "brand": "Fendi",
    "name": "Fan di Fendi pour Homme",
    "categories": [
      "men"
    ],
    "description": "Top Notes Calabrian bergamot Egyptian basil Sicilian mandarin orange Heart Notes Guatemala cardamom Egyptian geranium La Réunion pink pepper Texas cedar Base Notes Venezuelan tonka bean Indonesian patchouli Leather",
    "notes": [
      "Spicy",
      "Woody",
      "Sweet",
      "Fruity",
      "Leathery"
    ],
    "wear": "Winter/ Fall/ day/ Night",
    "pricingConflict": false,
    "prices": {
      "2": 7.5,
      "5": 15.5,
      "10": 28.0,
      "30": 77.5
    },
    "price": 7.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "ferragamo-fbyferragamopourhomme",
    "brand": "Ferragamo",
    "name": "F by Ferragamo pour Homme",
    "categories": [
      "men"
    ],
    "description": "Top Notes Apple Lavender Heart Notes Black pepper Base Notes Labdanum Amber Leathery notes",
    "notes": [
      "Spicy",
      "Fresh",
      "Fruity",
      "Leathery",
      "Citrus"
    ],
    "wear": "Fall/ Winter/ Spring Day/",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.5,
      "10": 10.0,
      "30": 24.0
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "ferragamo-salvatoreferragamopourhomme",
    "brand": "Ferragamo",
    "name": "Salvatore Ferragamo pour Homme",
    "categories": [
      "men"
    ],
    "description": "Top Notes Fig leaf Rosewood Caraway Cyclamen Geranium Grapefruit Neroli Heart Notes Cardamom Orris root Carnation Jasmine Rose Base Notes Vetiver Cedar Leather Musk Sandalwood Oakmoss",
    "notes": [
      "Woody",
      "Green",
      "Spicy",
      "Fresh",
      "Fruity"
    ],
    "wear": "spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.5,
      "10": 10.0,
      "30": 23.5
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "flavia-limpression",
    "brand": "Flavia",
    "name": "L'impression",
    "categories": [
      "men"
    ],
    "description": "Top notes are Grapefruit, Ginger and Bergamot; middle notes are Water Notes, Ambergris, Rosemary and Sage; base notes are Amber, Ambergris and Labdanum.",
    "notes": [
      "Citrus",
      "Amber",
      "Fresh spicy",
      "Aquatic",
      "Fresh",
      "Aromatic",
      "Animalic"
    ],
    "wear": "spring summer fall* day night",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.0,
      "10": 7.5,
      "30": 16.0
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "fragranceone-officeformen",
    "brand": "Fragrance One",
    "name": "Office For Men",
    "categories": [
      "men"
    ],
    "description": "Top notes are Ambroxan, Bergamot and Orris Root; middle notes are Woody Notes, Floral Notes, Ambergris, Amber and Jasmine; base notes are Woody Notes, Musk, Patchouli and Cashalox.",
    "notes": [
      "Amber",
      "Musky",
      "Citrus",
      "Woody",
      "Floral",
      "Powdery",
      "Fresh spicy"
    ],
    "wear": "winter* spring summer fall day night*",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.5,
      "10": 22.5,
      "30": 62.0
    },
    "price": 6.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "frenchave-royalblend",
    "brand": "French Ave",
    "name": "Royal Blend",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Cognac, Cinnamon and Plum; middle notes are Myrrh and Iris; base notes are Vanilla, Tonka and Sandalwood.",
    "notes": [
      "Warm spicy",
      "Woody",
      "Vanilla",
      "Sweet",
      "Cinnamon",
      "Fruity",
      "Amber",
      "Powdery",
      "Balsamic"
    ],
    "wear": "Winter fall day* night",
    "pricingConflict": true,
    "prices": {},
    "price": null,
    "category": "unisex",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "frenchave-vulcanbaie",
    "brand": "French Ave",
    "name": "Vulcan Baie",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Black Currant, Blackberry, Rosemary and Bergamot; middle notes are Vodka, Raspberry, Basil and Lily of the Valley; base notes are Strawberry, Musk, Peach, Patchouli, Amber, Sandalwood and Incense.",
    "notes": [
      "Fruity",
      "Sweet",
      "Aromatic",
      "Fresh spicy",
      "Woody",
      "Vodka"
    ],
    "wear": "spring summer fall* day night*",
    "pricingConflict": true,
    "prices": {},
    "price": null,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "frenchave-vulcanfeu",
    "brand": "French Ave",
    "name": "Vulcan Feu",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top Notes Mango Ginger Lemon Rhubarb Heart Notes Jasmine Violet Pink pepper Praliné Base Notes Ambergris Cedarwood Moss Tonka bean",
    "notes": [
      "Tropical",
      "Fruity",
      "Sweet",
      "Citrus",
      "Woody",
      "Fresh",
      "Fresh spicy",
      "Amber",
      "Aromatic",
      "Terpenic"
    ],
    "wear": "spring summer fall day",
    "pricingConflict": true,
    "prices": {},
    "price": null,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "frenchave-vulcansable",
    "brand": "French Ave",
    "name": "Vulcan Sable",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Whiskey, Orange, Coriander and Mandarin; middle notes are Tonka, Cashmeran, Styrax and Anise; base notes are Vanilla, Benzoin and Patchouli.",
    "notes": [
      "Woody",
      "Vanilla",
      "Amber",
      "Whiskey",
      "Warm spicy",
      "Citrus",
      "Sweet",
      "Powdery",
      "Musky",
      "Balsamic"
    ],
    "wear": "winter fall day* night",
    "pricingConflict": true,
    "prices": {},
    "price": null,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "frenchavenue-liquidbrun",
    "brand": "French Avenue",
    "name": "Liquid Brun",
    "categories": [],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "giorgioarmani-armanicode",
    "brand": "Giorgio Armani",
    "name": "Armani Code",
    "categories": [
      "men"
    ],
    "description": "Top Notes Bergamot Lemon Heart Notes Star anise Olive blossom Base Notes Tonka bean Gaiac wood Leather Tobacco",
    "notes": [
      "Spicy",
      "Sweet",
      "Woody",
      "Fresh",
      "Oriental"
    ],
    "wear": "Winter/Fall/Night",
    "pricingConflict": true,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "giorgioarmani-armanicodeprofumo",
    "brand": "Giorgio Armani",
    "name": "Armani Code Profumo",
    "categories": [
      "men"
    ],
    "description": "Top Notes Cardamom Green mandarin orange Green apple Heart Notes Nutmeg Orange blossom Lavender Base Notes Base Notes Tonka bean Amber Leather",
    "notes": [
      "Sweet",
      "Spicy",
      "Oriental",
      "Gourmand",
      "Woody"
    ],
    "wear": "Winter/Fall/Night",
    "pricingConflict": true,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "gisada-ambassadorintense",
    "brand": "Gisada",
    "name": "Ambassador Intense",
    "categories": [
      "men"
    ],
    "description": "Top Notes Liquorice Ginger CO2 Grapefruit Nutmeg Elemi resin Frankincense Guatemala cardamom Ozone Pink pepper Bergamot Lavender absoluteLavender absolute Mandarin orange Heart Notes Caramel Clove Raspberry Carnation Cinnamon Egyptian geranium Freesia Heliotrope Orchid JasmineJasmine Base Notes Amber Cashmere wood Haitian vetiver",
    "notes": [
      "Sweet",
      "Spicy",
      "Fruity",
      "Woody",
      "Synthetic"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 8.5,
      "5": 17.5,
      "10": 32.0,
      "30": 90.5
    },
    "price": 8.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "gisada-ambassadormen",
    "brand": "Gisada",
    "name": "Ambassador Men",
    "categories": [
      "men"
    ],
    "description": "Top notes are Green Mandarin, Apple, Cardamom and Violet; middle notes are Mango, Lavender, Black Pepper, Patchouli and Peony; base notes are Vanilla, Amber, Teak Wood, Vetiver and Moss.",
    "notes": [
      "Fruity",
      "Tropical",
      "Sweet",
      "Woody",
      "Vanilla",
      "Warm spicy",
      "Fresh spicy",
      "Aromatic",
      "Amber",
      "Citrus"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 8.0,
      "5": 16.5,
      "10": 30.0,
      "30": 84.0
    },
    "price": 8.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "givenchy-gentlemansociety",
    "brand": "Givenchy",
    "name": "Gentleman Society",
    "categories": [
      "men"
    ],
    "description": "Top notes are Nutmeg, Peppermint and Clary Sage; middle notes are Coffee, Orris Root, Madagascar Vetiver, Haitian Vetiver, Vetiver and French Narcissus; base notes are Madagascar Vanilla, Australian Sandalwood and Himalayan Cedar.",
    "notes": [
      "Woody",
      "Powdery",
      "Aromatic",
      "Coffee",
      "Vanilla",
      "Warm spicy",
      "Iris",
      "Green",
      "Fresh spicy",
      "Earthy"
    ],
    "wear": "winter spring* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 9.0,
      "10": 15.5,
      "30": 39.5
    },
    "price": 5.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "givenchy-gentlemenonly",
    "brand": "Givenchy",
    "name": "Gentlemen Only",
    "categories": [
      "men"
    ],
    "description": "Top Notes Top Notes Birch leaf Indonesian nutmeg Italian green mandarin orange Somalian frankincense Heart Notes Egyptian cumin Texas cedar Base Notes Aldron® Haitian vetiver Indonesian patchouli",
    "notes": [
      "Fresh",
      "Spicy",
      "Woody",
      "Synthetic",
      "Green"
    ],
    "wear": "Fall/ Spring/ Summer/",
    "pricingConflict": false,
    "prices": {
      "2": 4.5,
      "5": 7.5,
      "10": 12.5,
      "30": 32.0
    },
    "price": 4.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "givenchy-pibygivenchy",
    "brand": "Givenchy",
    "name": "Pi by Givenchy",
    "categories": [
      "men"
    ],
    "description": "Benzoin Ironwood Pine needle Mandarin orange",
    "notes": [
      "Sweet",
      "Oriental",
      "Gourmand",
      "Spicy",
      "Woody"
    ],
    "wear": "Winter/ Fall/ Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.0,
      "10": 19.0,
      "30": 51.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "gucci-bloom",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/gucci-bloom",
    "brand": "Gucci",
    "name": "Bloom",
    "categories": [
      "women"
    ],
    "description": "Jasmine TuberoseTuberose MuskMusk Rangoon creeperRangoon creeper",
    "notes": [
      "Floral",
      "Creamy",
      "Sweet",
      "Fresh",
      "Powdery"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 13.0,
      "10": 23.5,
      "30": 65.0
    },
    "price": 6.5,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "gucci-bloomambrosia",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/gucci-bloomambrosia",
    "brand": "Gucci",
    "name": "Bloom Ambrosia",
    "categories": [
      "women"
    ],
    "description": "Top notes are Jasmine and Honeysuckle; middle note is Tuberose; base notes are Damask Rose and Orris.",
    "notes": [
      "White floral",
      "Tuberose",
      "Rose",
      "Iris",
      "Animalic"
    ],
    "wear": "spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 13.0,
      "10": 23.0,
      "30": 63.5
    },
    "price": 6.5,
    "category": "women",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "gucci-florajasmine",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/gucci-florajasmine",
    "brand": "Gucci",
    "name": "Flora Jasmine",
    "categories": [
      "women"
    ],
    "description": "Top Notes Italian bergamot Mandarin orange blossom Black pepper Heart Notes Jasminum grandiflorum absoluteJasmine sambac absolute Damask rose Magnolia Base Notes Australian sandalwood Benzoin Indonesian patchouli",
    "notes": [
      "Floral",
      "Fresh",
      "Sweet",
      "Powdery",
      "Creamy"
    ],
    "wear": "spring summer fall day",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 13.5,
      "10": 24.5,
      "30": 68.0
    },
    "price": 7.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "gucci-guccibyguccipourhomme",
    "brand": "Gucci",
    "name": "Gucci by Gucci pour Homme",
    "categories": [
      "men"
    ],
    "description": "Top Notes Cypress Bergamot Violet Heart Notes Tobacco Jasmine Base Notes Base Notes Amber Elemi resin Patchouli",
    "notes": [
      "Fresh",
      "Spicy",
      "Woody",
      "Citrus",
      "Sweet"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.0,
      "10": 19.5,
      "30": 52.5
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "gucci-guccienvyformen",
    "brand": "Gucci",
    "name": "Gucci Envy for Men",
    "categories": [
      "men"
    ],
    "description": "Top Notes Coriander Pepper Mandarin orange Rosewood Heart Notes Heart Notes Sandalwood Carnation Rose Jasmine Base Notes Base Notes Leather Patchouli Vanilla Vetiver",
    "notes": [
      "Spicy",
      "Woody",
      "Green",
      "Oriental",
      "Leathery"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 52.5,
      "5": 128.0,
      "10": 253.0,
      "30": 753.5
    },
    "price": 52.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "gucci-gucciguiltyabsoluteeaudeparfum",
    "brand": "Gucci",
    "name": "Gucci Guilty Absolute Eau de Parfum",
    "categories": [
      "men"
    ],
    "description": "Woodleather® Goldenwood® Nootka cypress Patchouli Vetiver",
    "notes": [
      "Leathery",
      "Woody",
      "Spicy",
      "Smoky",
      "Earthy"
    ],
    "wear": "winter autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 9.5,
      "10": 16.5,
      "30": 43.0
    },
    "price": 5.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "gucci-guiltyelixirdeparfumpourhomme",
    "brand": "Gucci",
    "name": "Guilty Elixir de Parfum pour Homme",
    "categories": [
      "men"
    ],
    "description": "Top Notes Orange blossom absolute Nutmeg Pimento Heart Notes Orange blossom absolute Osmanthus Orris butter Base Notes Ambrofix Vanillin Benzoin Siam Patchouli",
    "notes": [
      "Sweet",
      "Floral",
      "Spicy",
      "Powdery",
      "Woody"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.5,
      "30": 73.0
    },
    "price": 7.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "gucci-guiltypourhomme",
    "brand": "Gucci",
    "name": "Guilty pour Homme",
    "categories": [
      "men"
    ],
    "description": "Top Notes Italian lemon Pink pepper Heart Notes Heart Notes French lavender Neroli Orange blossom absolute Base Notes Base Notes Cedarwood Patchouli",
    "notes": [
      "Fresh",
      "Synthetic",
      "Citrus",
      "Spicy",
      "Woody"
    ],
    "wear": "spring summer autumn day night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "gucci-pourhomme",
    "brand": "Gucci",
    "name": "Pour Homme",
    "categories": [
      "men"
    ],
    "description": "Top notes are Cypress, Violet and Bergamot; middle notes are Tobacco and Jasmine; base notes are Patchouli, Amber, Leather, Elemi resin and Olibanum.",
    "notes": [
      "Woody",
      "Tobacco",
      "Aromatic",
      "Fresh spicy",
      "Violet",
      "Amber",
      "Sweet",
      "Powdery",
      "Citrus",
      "Patchouli"
    ],
    "wear": "winter spring summer* fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 8.0,
      "5": 16.0,
      "10": 29.5,
      "30": 82.5
    },
    "price": 8.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "hanaemori-hanaemori",
    "brand": "Hanae Mori",
    "name": "Hanae Mori",
    "categories": [
      "men"
    ],
    "description": "Top Notes Lemon Lavender Heart Notes Jasmine Base Notes Tonka bean Vanilla Woody notes",
    "notes": [
      "Sweet",
      "Citrus",
      "Fresh",
      "Floral",
      "Powdery"
    ],
    "wear": "Winte/Fall/Spring/Summer/",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.5,
      "10": 22.5,
      "30": 62.0
    },
    "price": 6.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "hermes-eauderhubarbeecarlate",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/hermes-eauderhubarbeecarlate",
    "brand": "Hermès",
    "name": "Eau de Rhubarbe Écarlate",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Rhubarb West Indian lantana White musk",
    "notes": [
      "Fruity",
      "Fresh",
      "Citrus",
      "Floral",
      "Green"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.5,
      "30": 55.5
    },
    "price": 6.0,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "hermes-terredhermes",
    "brand": "Hermès",
    "name": "Terre d'Hermès",
    "categories": [
      "men"
    ],
    "description": "Vetiver Cedar Orange Grapefruit Flintstone Geranium leaf Pepper Benzoin Patchouli Pink pepper",
    "notes": [
      "Woody",
      "Earthy",
      "Citrus",
      "Spicy",
      "Fresh"
    ],
    "wear": "winter/Spring/summer/Fall Day/night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.5,
      "30": 73.0
    },
    "price": 7.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "hugoboss-bossbottled",
    "brand": "Hugo Boss",
    "name": "Boss Bottled",
    "categories": [
      "men"
    ],
    "description": "Top notes are Apple, Plum, Bergamot, Lemon, Oakmoss and Geranium; middle notes are Cinnamon, Mahogany and Carnation; base notes are Vanilla, Sandalwood, Cedar, Vetiver and Olive Tree.",
    "notes": [
      "Woody",
      "Fruity",
      "Vanilla",
      "Warm spicy",
      "Cinnamon",
      "Aromatic",
      "Citrus",
      "Powdery",
      "Fresh",
      "Green"
    ],
    "wear": "winter spring summer* fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 7.0,
      "10": 11.0,
      "30": 27.0
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "hugoboss-bossbottledtonic",
    "brand": "Hugo Boss",
    "name": "Boss Bottled Tonic",
    "categories": [],
    "description": "Top notes are Apple, Bitter Orange, Grapefruit and Lemon; middle notes are Ginger, Cinnamon, Geranium and Cloves; base notes are Woodsy Notes and Vetiver.",
    "notes": [
      "Citrus",
      "Fresh spicy",
      "Fresh",
      "Aromatic",
      "Fruity",
      "Warm spicy",
      "Woody",
      "Cinnamon",
      "Green"
    ],
    "wear": "Spring, Summer, Day",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "hugoboss-bossthescent",
    "brand": "Hugo Boss",
    "name": "Boss The Scent",
    "categories": [
      "men"
    ],
    "description": "Top notes are Ginger, Mandarin Orange and Bergamot; middle notes are Maninka and Lavender; base notes are Leather and Woody Notes.",
    "notes": [
      "Fresh spicy",
      "Citrus",
      "Leather",
      "Lavender",
      "Woody",
      "Fruity",
      "Fresh",
      "Animalic",
      "Aromatic"
    ],
    "wear": "winter spring summer* fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.0,
      "10": 25.5,
      "30": 69.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "isseymiyake-leaudisseypourhomme",
    "brand": "Issey Miyake",
    "name": "L'Eau d'Issey pour Homme",
    "categories": [
      "men"
    ],
    "description": "Top Notes Yuzu Mandarin orange Heart Notes Nutmeg Water lily Cinnamon Base Notes Sandalwoo Vetiver Amber Tobacco",
    "notes": [
      "Fresh",
      "Citrus",
      "Aquatic",
      "Woody",
      "Spicy"
    ],
    "wear": "Spring/Summer Day",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 9.0,
      "10": 15.5,
      "30": 39.5
    },
    "price": 5.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jimmychoo-illicit",
    "brand": "Jimmy Choo",
    "name": "Illicit",
    "categories": [],
    "description": "top notes of bitter orange and warm ginger, creating a fresh yet spicy introduction that awakens the senses. At its heart, romantic notes of rose and jasmine sambac add a soft floral elegance, bringing a feminine touch to the fragrance. As it settles, rich base notes of amber, honey, and sandalwood create a smooth, sensual finish that lingers beautifully on the skin.",
    "notes": [
      "Honey",
      "Sweet",
      "Citrus",
      "White floral",
      "Amber",
      "Woody",
      "Fresh spicy",
      "Caramel",
      "Fresh",
      "Vanilla"
    ],
    "wear": "Winter Spring Fall Day Nigh",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilano-bonus",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/jomilano-bonus",
    "brand": "Jo Milano",
    "name": "Bonus",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Citron, Mint, Orange, Lemon, Black Currant and Coriander. Middle notes are Apricot, Basil, Carrot seeds and May Rose. Base notes are Fig, Dates and Ambrette.",
    "notes": [
      "Fruity",
      "Citrus",
      "Aromatic",
      "Green",
      "Fresh spicy sweet"
    ],
    "wear": "spring summer fall* day night*",
    "pricingConflict": false,
    "prices": {
      "2": 7.5,
      "5": 15.5,
      "10": 28.0,
      "30": 77.5
    },
    "price": 7.5,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilano-emerald",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/jomilano-emerald",
    "brand": "Jo Milano",
    "name": "Emerald",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes delivers a burst of energy and confidence. As the scent evolves, radiant orange blossom and delicate neroli mix with an amplified ginger essence, creating a heart that’s both luminous and captivating. The base settles into a clean, skin-like musk and warm, velvety ambrette, giving the fragrance a smooth, lasting finish that lingers throughout the day.",
    "notes": [
      "Fresh spicy",
      "Citrusy",
      "Aromatic fresh ginger"
    ],
    "wear": "spring summer day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.5,
      "5": 15.5,
      "10": 28.0,
      "30": 77.5
    },
    "price": 7.5,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilano-fullhouse",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/jomilano-fullhouse",
    "brand": "Jo Milano",
    "name": "Full House",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Citron, Calabrian bergamot and Sicilian Orange; middle notes are Nigerian Ginger, Tunisian Neroli and Ceylon Cinnamon; base notes are Chinese Black Tea, Ambroxan, Guaiac Wood and Olibanum.",
    "notes": [
      "Fresh spicy",
      "Amber",
      "Fresh",
      "Green"
    ],
    "wear": "spring summer day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.5,
      "5": 15.5,
      "10": 28.0,
      "30": 77.5
    },
    "price": 7.5,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilano-highroller",
    "brand": "Jo Milano",
    "name": "HighRoller",
    "categories": [
      "men"
    ],
    "description": "Top notes are Black Currant, Grapefruit and Bergamot; middle notes are Cardamom, Cinnamon, Ginger and Citron; base notes are Pink Pepper and Patchouli.",
    "notes": [
      "Citrus",
      "Warm spicy",
      "Fresh spicy",
      "Soft spicy",
      "Fruity",
      "Aromatic",
      "Cinnamon"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.5,
      "5": 15.5,
      "10": 28.0,
      "30": 77.5
    },
    "price": 7.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilano-nolimit",
    "brand": "Jo Milano",
    "name": "No Limit",
    "categories": [
      "men"
    ],
    "description": "Top note is Citrus; middle notes are Iris and Amyris; base notes are Tonka Bean and Amber.",
    "notes": [
      "Iris",
      "Amber",
      "Woody",
      "Aromatic",
      "Powdery",
      "Citrus",
      "Vanilla",
      "Violet",
      "Earthy",
      "Balsamic"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.5,
      "5": 15.5,
      "10": 28.0,
      "30": 77.5
    },
    "price": 7.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilano-opal",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/jomilano-opal",
    "brand": "Jo Milano",
    "name": "Opal",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Raspberry, Pear, Bergamot and Lemon; middle notes are Green Notes, Spices, Peony, Rose and Jasmine; base notes are Sandalwood, Musk, Amber and Cedar.",
    "notes": [
      "Woody",
      "Green",
      "Powdery",
      "Warm spicy",
      "Musky",
      "Fruity",
      "Amber",
      "Rose",
      "Floral",
      "Citrus"
    ],
    "wear": "spring summer fall winter day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.5,
      "5": 15.5,
      "10": 28.0,
      "30": 77.5
    },
    "price": 7.5,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilano-royale",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/jomilano-royale",
    "brand": "Jo Milano",
    "name": "Royale",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Cacao and Hazelnut; middle notes are Jasmine Sambac and Cedar; base notes are Caramel, Ambroxan and Moss.",
    "notes": [
      "Woody",
      "Caramel",
      "Cacao",
      "Nutty",
      "Amber",
      "White floral",
      "Sweet",
      "Warm spicy",
      "Musky",
      "Mossy"
    ],
    "wear": "winter spring summer* fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.5,
      "5": 15.5,
      "10": 28.0,
      "30": 77.5
    },
    "price": 7.5,
    "category": "unisex",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilanoparis-gameofspadesblacksapphire",
    "brand": "Jo Milano Paris",
    "name": "Game of Spades Black Sapphire",
    "categories": [],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilanoparis-gameofspadesboston",
    "brand": "Jo Milano Paris",
    "name": "Game of Spades Boston",
    "categories": [],
    "description": "Top notes are Pineapple, Bergamot and Juniper Berries; middle note is Currant buds; base notes are Cedar and Vetiver.",
    "notes": [
      "Woody",
      "Aromatic",
      "Fruity",
      "Fresh spicy",
      "Citrus",
      "Sweet",
      "Green",
      "Tropical",
      "Earthy",
      "Fresh"
    ],
    "wear": "Winter* Spring Summer Fall Day Night*",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilanoparis-gameofspadesqueen",
    "brand": "Jo Milano Paris",
    "name": "Game of Spades Queen",
    "categories": [],
    "description": "Top notes are Tangerine and Freesia; middle notes are Jasmine Sambac, Rose and Lily; base notes are Musk, Sandalwood and Amber.",
    "notes": [
      "White floral",
      "Floral",
      "Citrus",
      "Rose",
      "Musky",
      "Powdery",
      "Amber",
      "Woody",
      "Animalic",
      "Soft spicy"
    ],
    "wear": "Winter* Spring Summer* Fall Day Night*",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilanoparis-gameofspadestopaz",
    "brand": "Jo Milano Paris",
    "name": "Game of Spades Topaz",
    "categories": [],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilanoparis-gameofspadeswildcard",
    "brand": "Jo Milano Paris",
    "name": "Game of Spades Wildcard",
    "categories": [],
    "description": "Top notes are Flowers, Bergamot and Coriander; middle notes are Apple, Ambroxan and Vanilla; base notes are Woodsy Notes, Tonka Bean and Ambergris.",
    "notes": [
      "Amber",
      "Vanilla",
      "Floral",
      "Fruity",
      "Woody",
      "Citrus",
      "Aromatic",
      "Musky",
      "Fresh spicy",
      "Fresh"
    ],
    "wear": "Winter Spring Summer Fall Day Night",
    "pricingConflict": false,
    "prices": {
      "2": 7.5,
      "5": 15.5,
      "10": 28.0,
      "30": 77.5
    },
    "price": 7.5,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilanoparis-gamesofspadesboston",
    "brand": "Jo Milano Paris",
    "name": "Games of Spades Boston",
    "categories": [],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilanoparis-gamesofspadesdoublebid",
    "brand": "Jo Milano Paris",
    "name": "Games of Spades Double Bid",
    "categories": [],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilanoparis-gamesofspadesdoublebonus",
    "brand": "Jo Milano Paris",
    "name": "Games of Spades Double Bonus",
    "categories": [],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilanoparis-gamesofspadesgold",
    "brand": "Jo Milano Paris",
    "name": "Games of Spades Gold",
    "categories": [],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilanoparis-gamesofspadesking",
    "brand": "Jo Milano Paris",
    "name": "Games of Spades King",
    "categories": [],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilanoparis-gamesofspadesmoon",
    "brand": "Jo Milano Paris",
    "name": "Games of Spades Moon",
    "categories": [],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "jomilanoparis-gamesofspadeswin",
    "brand": "Jo Milano Paris",
    "name": "Games of Spades Win",
    "categories": [],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "johnpaulgaultier-gaultier2",
    "brand": "John Paul Gaultier",
    "name": "Gaultier²",
    "categories": [
      "men"
    ],
    "description": "Vanilla Amber Musk",
    "notes": [
      "Sweet",
      "Oriental",
      "Gourmand",
      "Powdery",
      "Spicy"
    ],
    "wear": "Fall/Winter/spring*/day/Night",
    "pricingConflict": false,
    "prices": {
      "2": 10.0,
      "5": 21.0,
      "10": 39.5,
      "30": 112.5
    },
    "price": 10.0,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "johnpaulgaultier-lemaleelixirabsolu",
    "brand": "John Paul Gaultier",
    "name": "Le Mâle Elixir Absolu",
    "categories": [
      "men"
    ],
    "description": "Tonka bean Cardamom Lavender Plum Cinnamon Ambrette seed Artemisia Benzoin Bergamot Davana Labdanum Patchouli",
    "notes": [
      "Sweet",
      "Creamy",
      "Fruity",
      "Gourmand",
      "Powdery"
    ],
    "wear": "winter/spring*/autumn/night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 13.5,
      "10": 24.5,
      "30": 68.0
    },
    "price": 7.0,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "johnpaulgaultier-lemaleleparfum",
    "brand": "John Paul Gaultier",
    "name": "Le Mâle Le Parfum",
    "categories": [
      "men"
    ],
    "description": "Top Notes Cardamom Heart Notes Iris Lavender Base Notes Vanilla Oriental woods",
    "notes": [
      "Sweet",
      "Spicy",
      "Oriental",
      "Powdery",
      "Woody"
    ],
    "wear": "winter/spring*/autumn/night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.0,
      "30": 54.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "johnpaulgaultier-scandalpourhommeleparfum",
    "brand": "John Paul Gaultier",
    "name": "Scandal pour Homme Le Parfum",
    "categories": [
      "men"
    ],
    "description": "Top Notes Geranium Heart Notes Tonka bean Base Notes Sandalwood",
    "notes": [
      "Sweet",
      "Synthetic",
      "Woody",
      "Spicy",
      "Gourmand"
    ],
    "wear": "winter/spring*/autumn/night",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 9.5,
      "10": 16.5,
      "30": 43.0
    },
    "price": 5.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "johnpaulgaultier-ultramale",
    "brand": "John Paul Gaultier",
    "name": "Ultra Mâle",
    "categories": [
      "men"
    ],
    "description": "Top Notes Pear Lavender Bergamot Mint Heart Notes Cinnamon Clary sage Cumin Base Notes Vanilla Amber Woods",
    "notes": [
      "Sweet",
      "Fruity",
      "Synthetic",
      "Spicy",
      "Gourmand"
    ],
    "wear": "Fall/Winter/spring/summer Day/Night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "johnvarvatos-artisianpure",
    "brand": "John Varvatos",
    "name": "Artisian Pure",
    "categories": [
      "men"
    ],
    "description": "Top notes are Clementine, Lemon, Mandarin Orange, Bergamot, Thyme and Marjoram; middle notes are Petitgrain and Ginger; base notes are Woody Notes, Musk, Orris Root and Amber.",
    "notes": [
      "Citrus",
      "Aromatic",
      "Fresh spicy",
      "Herbal"
    ],
    "wear": "Spring/ Summer Day",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.0,
      "10": 21.5,
      "30": 58.5
    },
    "price": 6.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "johnvarvatos-darkrebelrider",
    "brand": "John Varvatos",
    "name": "Dark Rebel Rider",
    "categories": [
      "men"
    ],
    "description": "Top notes are Aldehydes, Bitter Orange, Saffron, Marjoram and Hyssop; middle notes are Resin, Olibanum, Tolu Balsam, Orris, Rock rose, Black Violet and Osmanthus; base notes are Russian Leather, Cacao, Woody Notes, Vanila, Atlas Cedar and Patchouli.",
    "notes": [
      "Amber",
      "Woody",
      "Leather",
      "Warm spicy",
      "Powdery",
      "Balsamic",
      "Animalic",
      "Cacao",
      "Fresh spicy",
      "Smoky"
    ],
    "wear": "Winter/ Fall Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.5,
      "30": 55.5
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "johnvarvatos-vintage",
    "brand": "John Varvatos",
    "name": "Vintage",
    "categories": [
      "men"
    ],
    "description": "Top notes are Rhubarb, Quince, Pepper, Wormwood, Basil and Fennel; middle notes are Cinnamon, Juniper Berries, Lavender, Green Leaves, Orris Root and Jasmine; base notes are Tobacco, Suede, Balsam Fir, Tonka Bean, Woody Notes, Oakmoss and Patchoul",
    "notes": [
      "Aromatic",
      "Fresh spicy",
      "Woody",
      "Sweet",
      "Tobacco",
      "Green",
      "Fruity",
      "Warm spicy",
      "Fresh",
      "Leather"
    ],
    "wear": "Fall/ Winter/ Spring Day/",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.0,
      "30": 47.5
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "johnvarvatos-xxindigo",
    "brand": "John Varvatos",
    "name": "XX Indigo",
    "categories": [
      "men"
    ],
    "description": "Top notes are Mint, Pink Pepper and Lemon; middle notes are Geranium, Himalayan Poppy and Cardamom; base notes are Vetiver, Patchouli and Musk.",
    "notes": [
      "Aromatic",
      "Fresh spicy",
      "Green",
      "Warm spicy",
      "Woody",
      "Musky",
      "Citrus",
      "Earthy",
      "Rose",
      "Soft spicy"
    ],
    "wear": "Winter* spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.0,
      "30": 47.5
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "joop-joop",
    "brand": "Joop",
    "name": "Joop",
    "categories": [
      "men"
    ],
    "description": "Top notes are Orange Blossom, Mandarin Orange, Bergamot and Amalfi Lemon; middle notes are Cinnamon, Heliotrope, Jasmine, Cardamom and Lily-of-the-Valley; base notes are Vanilla, Tonka Bean, Sandalwood, Patchouli, Honey, Tobacco and Vetiver.",
    "notes": [
      "Vanilla",
      "Warm spicy",
      "White floral",
      "Powdery",
      "Citrus",
      "Cinnamon",
      "Sweet",
      "Woody",
      "Aromatic",
      "Floral"
    ],
    "wear": "winter fall day* night",
    "pricingConflict": false,
    "prices": {
      "2": 4.5,
      "5": 8.0,
      "10": 13.0,
      "30": 33.5
    },
    "price": 4.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "kayali-yumpistachiogelato",
    "brand": "Kayali",
    "name": "Yum Pistachio Gelato",
    "categories": [
      "women"
    ],
    "description": "Top notes are Pistachio, Ice cream, Bergamot, Hazelnut, Rum and Cardamom; middle notes are Lily-of-the-Valley, Pear, Jasmine, Peony, Geranium, White Peach and Raspberry; base notes are Whipped Cream, Marshmallow, Cotton Candy, Tonka Bean, Loukhoum, Sandalwood, Cedar and Cacao.",
    "notes": [
      "Sweet",
      "Woody",
      "Vanilla",
      "Nutty",
      "Powdery",
      "Warm spicy"
    ],
    "wear": "spring summer fall day",
    "pricingConflict": false,
    "prices": {
      "2": 8.0,
      "5": 16.5,
      "10": 30.0,
      "30": 84.0
    },
    "price": 8.0,
    "category": "women",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "kennethcole-kennethcolesignature",
    "brand": "Kenneth Cole",
    "name": "Kenneth Cole Signature",
    "categories": [
      "men"
    ],
    "description": "Top Notes Cardamom Violet Grapefruit Pimento Heart Notes Marine notes Orris root Espresso Water lily Base Notes Papyrus Patchouli Gaiac wood Amber",
    "notes": [
      "Spicy",
      "Aquatic",
      "Fresh",
      "Synthetic",
      "Woody"
    ],
    "wear": "Spring/ Fall Day/ Night",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 8.5,
      "10": 14.0,
      "30": 36.5
    },
    "price": 5.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "kenzo-flowerbykenzo",
    "brand": "Kenzo",
    "name": "Flower by Kenzo",
    "categories": [
      "women"
    ],
    "description": "Top notes are Bulgarian Rose, Hawthorn, Black Currant and Mandarin Orange; middle notes are Parma Violet, Rose, Opoponax and Jasmine; base notes are White Musk, Vanilla and Incense.",
    "notes": [
      "Powdery",
      "Floral",
      "Violet",
      "Rose",
      "Amber",
      "Musky",
      "Vanilla",
      "Sweet",
      "Balsamic",
      "Smoky"
    ],
    "wear": "winter spring summer fall day night*",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.0,
      "10": 19.5,
      "30": 52.5
    },
    "price": 6.0,
    "category": "women",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "kenzo-kenzohomme",
    "brand": "Kenzo",
    "name": "Kenzo Homme",
    "categories": [
      "men"
    ],
    "description": "Top Notes Calypsone® Pink pepper Heart Notes Fig wood Haitian vetiver Base Notes Akigalawood® Australian sandalwood",
    "notes": [
      "Aquatic",
      "Fresh",
      "Woody",
      "Synthetic",
      "Spicy"
    ],
    "wear": "Spring/ Summer/ Fall/Night",
    "pricingConflict": false,
    "prices": {
      "2": 4.5,
      "5": 8.0,
      "10": 13.5,
      "30": 35.0
    },
    "price": 4.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "kenzo-kenzopourhomme",
    "brand": "Kenzo",
    "name": "Kenzo pour Homme",
    "categories": [
      "men"
    ],
    "description": "Green notes Fruity notes Lemon Bergamot Clary sage Heart Notes Ozone Iris Jasmine Juniper Lily of the valley Peach Rose Base Notes Musk Cedar Moss Sandalwood Ambergris",
    "notes": [
      "Fresh",
      "Aquatic",
      "Woody",
      "Spicy",
      "Green"
    ],
    "wear": "Spring/ Summer/Day",
    "pricingConflict": false,
    "prices": {
      "2": 4.5,
      "5": 7.0,
      "10": 11.5,
      "30": 28.5
    },
    "price": 4.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "kenzo-kenzopower",
    "brand": "Kenzo",
    "name": "Kenzo Power",
    "categories": [
      "men"
    ],
    "description": "Top Notes Bergamot Cardamom Coriander Heart Notes Floral notes Base Notes Cedarwood Labdanum Tolu balm",
    "notes": [
      "Floral",
      "Fresh",
      "Woody",
      "Sweet",
      "Powdery"
    ],
    "wear": "Spring/ Summer/ Day",
    "pricingConflict": false,
    "prices": {
      "2": 8.0,
      "5": 17.0,
      "10": 31.0,
      "30": 87.0
    },
    "price": 8.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "kenzo-worldperfume",
    "brand": "Kenzo",
    "name": "World Perfume",
    "categories": [
      "women"
    ],
    "description": "Top note is Red Fruits; middle notes are Peony, Floral Notes and Egyptian Jasmine; base note is Ambroxan.",
    "notes": [
      "Floral",
      "Fruity",
      "Fresh",
      "Amber",
      "Musky",
      "White floral",
      "Rose",
      "Sweet"
    ],
    "wear": "Winter* Spring Summer Fall Day Night*",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.5,
      "30": 55.5
    },
    "price": 6.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "khadlajperfumes-rosecouture",
    "brand": "Khadlaj Perfumes",
    "name": "Rose Couture",
    "categories": [
      "women"
    ],
    "description": "Top notes are Lychee, Bergamot and Pear; middle notes are Turkish Rose, Agarwood and Incense; base notes are Vanilla, Amber and Cedarwood.",
    "notes": [
      "Rose",
      "Amber",
      "Fruity",
      "Vanilla",
      "Citrus",
      "Floral",
      "Tropical",
      "Powdery",
      "Oud",
      "Fresh"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 8.5,
      "10": 14.5,
      "30": 38.0
    },
    "price": 5.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "kilian-angelsshare",
    "brand": "Kilian",
    "name": "Angels' Share",
    "categories": [
      "men"
    ],
    "description": "Top Notes Cognac Heart Notes Cinnamon Tonka bean absolute Oak wood absolute Base Notes Praliné Vanilla Sandalwood",
    "notes": [
      "Sweet",
      "Gourmand",
      "Spicy",
      "Woody",
      "Oriental"
    ],
    "wear": "winter/autumn/night",
    "pricingConflict": false,
    "prices": {
      "2": 11.5,
      "5": 25.5,
      "10": 48.5,
      "30": 139.0
    },
    "price": 11.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "kilian-applebrandyontherocks",
    "brand": "Kilian",
    "name": "Apple Brandy on the Rocks",
    "categories": [
      "men"
    ],
    "description": "Top notes are Cardamom and Bergamot; middle notes are Apple, Rum, Brandy, Pineapple, Vanilla and Moss; base notes are Cedar and Ambroxan.",
    "notes": [
      "Fruity",
      "Woody",
      "Warm spicy",
      "Fresh",
      "Rum",
      "Sweet",
      "Green",
      "Amber",
      "Aromatic",
      "Vanilla"
    ],
    "wear": "winter spring summer* fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 9.0,
      "5": 18.5,
      "10": 34.5,
      "30": 98.0
    },
    "price": 9.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "kilian-backtoblack",
    "brand": "Kilian",
    "name": "Back to Black",
    "categories": [
      "men"
    ],
    "description": "Bergamot, saffron, nutmeg, cardamom, coriander, raspberry, chamomile, olibanum, honey, cedar, oak, tobacco, patchouli, almond, vanilla and labdanum.",
    "notes": [
      "Sweet",
      "Honey",
      "Tobacco",
      "Amber",
      "Fruity",
      "Cherry",
      "Vanilla",
      "Warm spicy",
      "Floral",
      "Almond"
    ],
    "wear": "winter fall night",
    "pricingConflict": false,
    "prices": {
      "2": 9.5,
      "5": 20.0,
      "10": 37.0,
      "30": 104.5
    },
    "price": 9.5,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lalique-encrenoire",
    "brand": "Lalique",
    "name": "Encre Noire",
    "categories": [
      "men"
    ],
    "description": "Top Notes Top Notes Cypress Vetiveryl acetate Heart Notes Bourbon vetive Haitian vetiver Base Notes Cashmere wood Musk",
    "notes": [
      "Woody",
      "Earthy",
      "Smoky",
      "Spicy",
      "Green"
    ],
    "wear": "Fall/ Winter/Night",
    "pricingConflict": false,
    "prices": {
      "2": 4.5,
      "5": 8.0,
      "10": 13.0,
      "30": 33.5
    },
    "price": 4.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lalique-encrenoiresport",
    "brand": "Lalique",
    "name": "Encre Noire Sport",
    "categories": [
      "men"
    ],
    "description": "Top Notes Grapefruit Cypress Bergamot Provençal lavender Heart Notes Bourbon vetiver Haitian vetiver Aquatic notes Nutmeg Base Notes Cashmere wood Musk",
    "notes": [
      "Woody",
      "Fresh",
      "Green",
      "Earthy",
      "Citrus"
    ],
    "wear": "Fall/ Winter/ Spring/ Nigh",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.0,
      "10": 17.0,
      "30": 44.5
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lalique-laliquewhite",
    "brand": "Lalique",
    "name": "Lalique White",
    "categories": [
      "men"
    ],
    "description": "Top Notes Lemon leaf Bergamot Tamarind Heart Notes White pepper Cardamom Nutmeg Violet Base Notes Cedar Musk Amber",
    "notes": [
      "Fresh",
      "Citrus",
      "Spicy",
      "Woody",
      "Green"
    ],
    "wear": "Spring/ Summer/ Day",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.0,
      "10": 17.0,
      "30": 44.5
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lancome-idole",
    "brand": "Lancôme",
    "name": "Idôle",
    "categories": [
      "women"
    ],
    "description": "Top Notes Pear Italian bergamot Pink pepper Heart Notes Turkish rose Grasse rose absolute Indian jasminum grandiflorum Rose absolute Rose water absolute Egyptian jasminum grandiflorum absolute Jasmine sambac absolute Base Notes Ambrettolide Bourbon vanilla ™Sylkolide™ Indonesian patchouli Texas cedar",
    "notes": [
      "Floral",
      "Sweet",
      "Fruity",
      "Fresh",
      "Synthetic"
    ],
    "wear": "spring summer autumn* day",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.0,
      "10": 21.5,
      "30": 58.5
    },
    "price": 6.5,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lattafa-awraqaloud",
    "brand": "Lattafa",
    "name": "Awraq Al Oud",
    "categories": [
      "men"
    ],
    "description": "Top Notes Aldehydes Rose Saffron Heart Notes Oud Sweet notes Base Notes Musk Amber",
    "notes": [
      "Floral",
      "Oriental",
      "Woody",
      "Chypre",
      "Spicy"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 7.0,
      "10": 11.0,
      "30": 27.0
    },
    "price": 4.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lattafa-badeealoudoudforglory",
    "brand": "Lattafa",
    "name": "Bade'e Al Oud Oud for Glory",
    "categories": [
      "men"
    ],
    "description": "Top notes are Saffron, Nutmeg and Lavender; middle notes are Agarwood (Oud) and Patchouli; base notes are Agarwood (Oud), Patchouli and Musk.",
    "notes": [
      "Oud",
      "Warm spicy",
      "Fresh spicy",
      "Patchouli",
      "Metallic",
      "Musky",
      "Woody",
      "Lavender",
      "Leather",
      "Earthy"
    ],
    "wear": "winter spring* fall night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.5,
      "10": 10.0,
      "30": 24.0
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lattafa-briochevanilleeaudeparfum",
    "brand": "Lattafa",
    "name": "Brioche Vanille Eau de Parfum",
    "categories": [],
    "description": "Top notes are Brioche, Bergamot and Freesia; middle notes are Balsam Fir and Heliotrope; base notes are Vanilla, Benzoin and Praline.",
    "notes": [
      "Vanilla",
      "Sweet",
      "Amber",
      "Fresh spicy",
      "Woody",
      "Aromatic",
      "Powdery",
      "Conifer",
      "Balsamic",
      "Fresh"
    ],
    "wear": "Fall/Winter/Day/Night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lattafa-confidentialprivategold",
    "brand": "Lattafa",
    "name": "Confidential Private Gold",
    "categories": [
      "men"
    ],
    "description": "Top Notes Peach Raspberry Heart Notes Blackcurrant Heliotrope Lily of the valley Oud Base Notes Musk Amber Sandalwood Vanilla",
    "notes": [
      "Fruity",
      "Sweet",
      "Synthetic",
      "Fresh",
      "Floral"
    ],
    "wear": "spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.0,
      "10": 9.0,
      "30": 21.0
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lattafa-hayaati",
    "brand": "Lattafa",
    "name": "Hayaati",
    "categories": [
      "men"
    ],
    "description": "Top Notes Apple Bergamot Heart Notes Cinnamon Woody notes Base Notes Musky notes Vanilla",
    "notes": [
      "Fresh",
      "Fruity",
      "Sweet",
      "Synthetic",
      "Spicy"
    ],
    "wear": "spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.5,
      "10": 10.0,
      "30": 24.0
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lattafa-khamrah",
    "brand": "Lattafa",
    "name": "Khamrah",
    "categories": [],
    "description": "Top notes are Cinnamon, Nutmeg and Bergamot; middle notes are Dates, Praline, Tuberose and Mahonial; base notes are Vanilla, Tonka Bean, Amberwood, Myrrh, Benzoin and Akigalawood.",
    "notes": [
      "Sweet",
      "Warm spicy",
      "Vanilla",
      "Amber",
      "Cinnamon",
      "Woody",
      "Fresh spicy",
      "Fruity"
    ],
    "wear": "Winter, Fall, Day Night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lattafa-ladiesmayar",
    "brand": "Lattafa",
    "name": "Ladies Mayar",
    "categories": [
      "women"
    ],
    "description": "Mayar opens with a soft whisper of amber that gently draws you in. As the scent unfolds, rich heart notes of sandalwood add a creamy, comforting depth. Finally, smooth base notes of vanilla deliver a sweet, velvety finish that lingers beautifully throughout the day.",
    "notes": [
      "Fruity",
      "Rose",
      "Sweet",
      "Fresh",
      "Tropical",
      "Floral",
      "Aquatic",
      "Musky"
    ],
    "wear": "spring summer fall day",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lattafa-mayarnaturalintense",
    "brand": "Lattafa",
    "name": "Mayar Natural Intense",
    "categories": [
      "women"
    ],
    "description": "Top notes are Green Tangerine, Fig, Melon and Coconut Water; middle notes are Lotus, Water Lily and Jasmine; base notes are Musk, Ambroxan, Sandalwood and Vanilla.",
    "notes": [
      "Floral",
      "Aquatic",
      "Fruity",
      "Ozonic",
      "Citrus",
      "Musky",
      "Fresh",
      "Sweet",
      "Woody",
      "White floral"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.0,
      "10": 9.5,
      "30": 22.5
    },
    "price": 4.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lattafa-oudforglory",
    "brand": "Lattafa",
    "name": "Oud for Glory",
    "categories": [
      "men"
    ],
    "description": "Top Notes Bergamot Blackcurrant Pink pepper Heart Notes Oud Caramel Peony Base Notes Base Notes Ambe Patchouli Raspberry",
    "notes": [
      "Oriental",
      "Woody",
      "Spicy",
      "Sweet",
      "Smoky"
    ],
    "wear": "winter autumn day* night",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 8.5,
      "10": 14.0,
      "30": 36.5
    },
    "price": 5.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lattafa-qaedalfursan",
    "brand": "Lattafa",
    "name": "Qaed Al Fursan",
    "categories": [
      "men"
    ],
    "description": "Top notes are Pineapple and Saffron; middle notes are Balsam Fir and Jasmine; base notes are Cedar, Amber and Agarwood (Oud).",
    "notes": [
      "Fruity",
      "Sweet",
      "Woody",
      "Tropical",
      "Fresh",
      "Amber",
      "Warm spicy",
      "Oud",
      "White floral",
      "Fresh spicy"
    ],
    "wear": "spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.5,
      "5": 8.0,
      "10": 13.5,
      "30": 35.0
    },
    "price": 4.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lattafa-sehr",
    "brand": "Lattafa",
    "name": "Sehr",
    "categories": [
      "men"
    ],
    "description": "Top notes are Bitter Almond and Cinnamon; middle notes are Akigalawood, Pomarose and Jasmine; base notes are Vanilla Absolute, Tonka Bean and Amber.",
    "notes": [
      "Vanilla",
      "Almond",
      "Sweet",
      "Warm spicy",
      "Amber",
      "Nutty",
      "Oud",
      "Cinnamon",
      "Fruity",
      "Woody"
    ],
    "wear": "winter fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.5,
      "10": 10.5,
      "30": 25.5
    },
    "price": 4.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lattafa-yara",
    "brand": "Lattafa",
    "name": "Yara",
    "categories": [
      "women"
    ],
    "description": "Top Notes Heliotrope Tangerine Orchid Heart Notes Gourmand notes Tropical notes Base Notes Musk Vanilla Sandalwood",
    "notes": [
      "Sweet",
      "Creamy",
      "Fruity",
      "Gourmand",
      "Floral"
    ],
    "wear": "spring/summer/day",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.5,
      "10": 10.0,
      "30": 24.0
    },
    "price": 4.0,
    "category": "women",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lattafa-yaracandy",
    "brand": "Lattafa",
    "name": "Yara Candy",
    "categories": [
      "women"
    ],
    "description": "Top Notes Green mandarin orange BlackcurrantBlackcurrant Heart Notes Strawberry candy Gardenia Base Notes Base Notes Vanilla syrup Amber Musk Sandalwood",
    "notes": [
      "Sweet",
      "Fruity",
      "Gourmand",
      "Creamy",
      "Fresh"
    ],
    "wear": "spring/summer/day/night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.0,
      "10": 9.5,
      "30": 22.5
    },
    "price": 4.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "lizclaiborne-spark",
    "brand": "Liz Claiborne",
    "name": "Spark",
    "categories": [
      "men"
    ],
    "description": "Liz Claiborne is a Oriental Woody fragrance for men.Top notes are Rum, Cardamom and Pepper; middle notes are Honey, Cognac and Fig Leaf; base notes are Amber and Sandalwood.",
    "notes": [
      "Warm spicy",
      "Woody",
      "Honey",
      "Sweet",
      "Amber",
      "Rum",
      "Fresh spicy",
      "Aromatic",
      "Powdery",
      "Green"
    ],
    "wear": "winter spring* fall day* night",
    "pricingConflict": false,
    "prices": {
      "2": 4.5,
      "5": 7.5,
      "10": 12.0,
      "30": 30.5
    },
    "price": 4.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "louisvuitton-afternoonswim",
    "brand": "Louis Vuitton",
    "name": "Afternoon Swim",
    "categories": [
      "men"
    ],
    "description": "Mandarin orange Sicilian orange Bergamot Ambergris Ginger",
    "notes": [
      "Fresh",
      "Citrus",
      "Aquatic",
      "Fruity",
      "Sweet"
    ],
    "wear": "Spring/ Summer/ Day",
    "pricingConflict": false,
    "prices": {
      "2": 10.5,
      "5": 22.5,
      "10": 42.5,
      "30": 122.0
    },
    "price": 10.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "louisvuitton-ombrenomade",
    "brand": "Louis Vuitton",
    "name": "Ombre Nomade",
    "categories": [
      "men"
    ],
    "description": "Oud Frankincense Raspberry Benzoin",
    "notes": [
      "Woody",
      "Smoky",
      "Oriental",
      "Leathery",
      "Spicy"
    ],
    "wear": "Winter/ Fall/ Night",
    "pricingConflict": false,
    "prices": {
      "2": 12.5,
      "5": 27.5,
      "10": 52.5,
      "30": 152.0
    },
    "price": 12.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mmicallef-gntonic",
    "brand": "M. Micallef",
    "name": "GnTonic",
    "categories": [
      "men"
    ],
    "description": "Top notes are Tonic Water, Gin, Lime, Peppermint, Ginger, Bigarade and Pink Pepper; middle notes are Lily-of-the-Valley, Cedar, Cypriol Oil or Nagarmotha, Orange Blossom and Nutmeg; base notes are Moss, Vetiver, White Musk, Sandalwood and Amber.",
    "notes": [
      "Aromatic",
      "Woody",
      "Fresh spicy",
      "Green",
      "Citrus",
      "Earthy",
      "Fresh",
      "White floral",
      "Musky",
      "Mossy"
    ],
    "wear": "spring summer day night*",
    "pricingConflict": false,
    "prices": {
      "2": 8.0,
      "5": 17.0,
      "10": 31.0,
      "30": 87.0
    },
    "price": 8.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "maisonmargiela-bythefireplace",
    "brand": "Maison Margiela",
    "name": "By the Fireplace",
    "categories": [
      "men"
    ],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.5,
      "10": 22.5,
      "30": 62.0
    },
    "price": 6.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "maisonmargiela-jazzclub",
    "brand": "Maison Margiela",
    "name": "Jazz Club",
    "categories": [
      "men"
    ],
    "description": "Jazz Club opens with a bold mix of neroli, Spanish lemon, and pink pepper, sparking a fresh and spicy energy. As the scent develops, heart notes of clary sage, vetiver, and deep rum add a warm, masculine depth. Finally, base notes of rich tobacco leaf, creamy vanilla, and styrax wrap",
    "notes": [
      "Tobacco",
      "Sweet",
      "Vanilla",
      "Rum",
      "Woody",
      "Aromatic",
      "Soft spicy",
      "Amber",
      "Powdery",
      "Warm spicy"
    ],
    "wear": "winter fall night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.5,
      "10": 22.5,
      "30": 62.0
    },
    "price": 6.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "maisonmargiela-lazysundaymorning",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/maisonmargiela-lazysundaymorning",
    "brand": "Maison Margiela",
    "name": "Lazy Sunday Morning",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Aldehydes, Lily-of-the-Valley and Pear; middle notes are Rose, Iris and Orange Blossom; base notes are White Musk, Ambrette (Musk Mallow) and Indonesian Patchouli Leaf.",
    "notes": [
      "Musky",
      "Fresh",
      "White floral",
      "Aldehydic",
      "Rose",
      "Powdery",
      "Floral",
      "Soapy",
      "Iris",
      "Sweet"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.5,
      "10": 22.5,
      "30": 62.0
    },
    "price": 6.5,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "maisonmargiela-neverendingsummer",
    "brand": "Maison Margiela",
    "name": "Never-ending Summer",
    "categories": [],
    "description": "Top notes are Bitter Orange, Aperol and Pepper; middle notes are Earl Grey Tea, Cardamom and Nutmeg; base notes are Vetiver, Cedarwood, Patchouli, Cashmeran, Peru Balsam and Vanilla.",
    "notes": [
      "Citrus",
      "Woody",
      "Fresh spicy",
      "Fresh",
      "Aromatic",
      "Warm spicy",
      "Green",
      "Earthy"
    ],
    "wear": "Spring/Summer/Day",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.5,
      "10": 22.5,
      "30": 62.0
    },
    "price": 6.5,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-amberful",
    "brand": "Mancera",
    "name": "Amberful",
    "categories": [
      "men"
    ],
    "description": "Top Notes Japanese yuzu Calabrian bergamot Indian nutmeg Pink pepper Heart Notes Amberwood Sulawesi patchouli Violet Base Notes Base Notes Amber Tree moss",
    "notes": [
      "Citrus",
      "Fresh",
      "Woody",
      "Synthetic",
      "Spicy"
    ],
    "wear": "spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-aoudblackcandy",
    "url": "https://links.jumpstartbuilds.com/preview/666UFgKTeBxF9swEjAfP/product/mancera-aoudblackcandy",
    "brand": "Mancera",
    "name": "Aoud Black Candy",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Licorice and Mint; middle notes are Amber and Rose; base notes are Sweet Notes and White Musk.",
    "notes": [
      "Sweet",
      "Soft spicy",
      "Amber",
      "Musky",
      "Rose",
      "Green",
      "Powdery",
      "Aromatic",
      "Anis"
    ],
    "wear": "winter spring* summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.0,
      "10": 21.5,
      "30": 58.5
    },
    "price": 6.5,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-aoudbluenotes",
    "brand": "Mancera",
    "name": "Aoud Blue Notes",
    "categories": [
      "men"
    ],
    "description": "Top Notes Green notes Bergamot Italian citrus fruits Heart Notes Orris root Patchouli Rose Violet Ylang-ylang Base Notes Woody notes Vanilla Amber Leather",
    "notes": [
      "Fresh",
      "Woody",
      "Sweet",
      "Fruity",
      "Floral"
    ],
    "wear": "spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-aoudlemonmint",
    "brand": "Mancera",
    "name": "Aoud Lemon Mint",
    "categories": [
      "men"
    ],
    "description": "Top Notes Sicilian lemon Almond Coriander Black pepper Heart Notes Heart Notes Mint Jasmine Oud iPatchouli Base Notes Ambe Vanilla White musk Haitian vetiver Leather",
    "notes": [
      "Citrus",
      "Fresh",
      "Woody",
      "Sweet",
      "Spicy"
    ],
    "wear": "spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-aoudvanille",
    "brand": "Mancera",
    "name": "Aoud Vanille",
    "categories": [
      "men"
    ],
    "description": "Top Notes Nepalese oud Cardamom Saffron Black pepper Heart Notes Floral notes Base Notes Bourbon vanilla Gaiac wood Mysore sandalwood",
    "notes": [
      "Sweet",
      "Woody",
      "Spicy",
      "Oriental",
      "Gourmand"
    ],
    "wear": "winter autumn day* night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-aquawood",
    "brand": "Mancera",
    "name": "Aqua Wood",
    "categories": [
      "men"
    ],
    "description": "Top Notes Citrus fruits Pear Heart Notes Turkish rose Ginger Patchouli Base Notes White musk Frankincense Amber Benzoin",
    "notes": [
      "Fresh",
      "Aquatic",
      "Woody",
      "Fruity",
      "Floral"
    ],
    "wear": "spring summer autumn* day night*",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-blackline",
    "brand": "Mancera",
    "name": "Black Line",
    "categories": [
      "men"
    ],
    "description": "Top Notes Spices Heart Notes Rose Amber Leather Patchouli Base Notes Indian sandalwood White musk",
    "notes": [
      "Woody",
      "Spicy",
      "Floral",
      "Leathery",
      "Resinous"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-cedratboise",
    "brand": "Mancera",
    "name": "Cedrat Boise",
    "categories": [
      "men"
    ],
    "description": "Top Notes Blackcurrant Sicilian lemon Spices Heart Notes Patchouli Water jasmine Base Notes Woody notes Leather Musk Oakmoss Vanilla",
    "notes": [
      "Citrus",
      "Woody",
      "Fruity",
      "Fresh",
      "Spicy"
    ],
    "wear": "winter* spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-cocovanille",
    "brand": "Mancera",
    "name": "Coco Vanille",
    "categories": [
      "women"
    ],
    "description": "Top notes are Coconut and White Peach; middle notes are Tiare Flower, Ylang-Ylang and Jasmine; base notes are Madagascar Vanilla, White Musk and Woody Notes.",
    "notes": [
      "Vanilla",
      "Sweet",
      "Coconut",
      "White floral",
      "Powdery",
      "Yellow floral",
      "Fruity",
      "Lactonic",
      "Tropical",
      "Woody"
    ],
    "wear": "winter* spring Summer fall day night*",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "women",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-cosmicpepper",
    "brand": "Mancera",
    "name": "Cosmic Pepper",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Lemon, Pink Pepper, Sage and Tangerine; middle notes are Black Pepper, Oud and Damask Rose; base notes are White Musk, Tonka Bean, Ambergris, Oakmoss and Labdanum.",
    "notes": [
      "Citrus",
      "Musky",
      "Aromatic",
      "Amber",
      "Soft spicy",
      "Fresh spicy",
      "Sweet",
      "Herbal",
      "Warm spicy",
      "Powdery"
    ],
    "wear": "Winter* spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-crazyforoud",
    "brand": "Mancera",
    "name": "Crazy for Oud",
    "categories": [
      "men"
    ],
    "description": "Top notes are Laotian Oud, Leather and Bergamot; middle notes are Tiramisu, Bulgarian Rose, Violet, Patchouli and White Magnolia; base notes are Vanilla, Woody Notes, White Musk, Amber and Oakmoss.",
    "notes": [
      "Woody",
      "Oud",
      "Sweet",
      "Animalic",
      "Leather",
      "Rose",
      "Powdery",
      "Floral",
      "Vanilla",
      "Musky"
    ],
    "wear": "winter spring fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-fabulousyuzu",
    "brand": "Mancera",
    "name": "Fabulous Yuzu",
    "categories": [
      "men"
    ],
    "description": "Top Notes Japanese yuzu Mandarin orange Lemon Cinnamon Heart Notes Mimosa Jasmine Vetiver Base Notes Vanilla Mysore sandalwood Tonka bean",
    "notes": [
      "Citrus",
      "Sweet",
      "Fresh",
      "Fruity",
      "Floral"
    ],
    "wear": "spring summer fall day",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-frenchriviera",
    "brand": "Mancera",
    "name": "French Riviera",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Lemon, Orange, Tangerine, Ginger and Pepper; middle notes are Sea Notes, Tiare Flower, Pine Tree, Mimosa and Vetiver; base notes are Sea Salt, White Musk and Amber.",
    "notes": [
      "Citrus",
      "Marine",
      "Aromatic",
      "Salty",
      "White floral",
      "Sweet",
      "Woody",
      "Fresh spicy",
      "Musky",
      "Powdery"
    ],
    "wear": "spring summer day",
    "pricingConflict": true,
    "prices": {},
    "price": null,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-holidays",
    "brand": "Mancera",
    "name": "Holidays",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Coconut and Bergamot; middle notes are Tiare Flower, Ylang-Ylang and Sea Notes; base notes are Vanilla Pod, Sandalwood and White Musk.",
    "notes": [
      "Sweet",
      "Vanilla",
      "Coconut",
      "White floral",
      "Yellow floral",
      "Woody",
      "Marine",
      "Powdery",
      "Aromatic",
      "Musky"
    ],
    "wear": "spring summer autumn* day night*",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "unisex",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-instantcrush",
    "brand": "Mancera",
    "name": "Instant Crush",
    "categories": [
      "men"
    ],
    "description": "Top Notes Saffron Citrus fruits Ginger Heart Notes Amber Egyptian jasmine Moroccan rose Base Notes White musk Vanilla Sandalwood Oakmoss",
    "notes": [
      "Sweet",
      "Floral",
      "Spicy",
      "Creamy",
      "Synthetic"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-intensecedratboise",
    "brand": "Mancera",
    "name": "Intense Cedrat Boise",
    "categories": [
      "men"
    ],
    "description": "Top Notes Sicilian citrus fruits Spices Blackcurrant Heart Notes Indian sandalwood Leathery notes Cambodian oud Patchouli Jasmine Base Notes Ambergris Oakmoss Vanilla White musk",
    "notes": [
      "Citrus",
      "Woody",
      "Fresh",
      "Fruity",
      "Sweet"
    ],
    "wear": "winter* spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 8.0,
      "5": 16.0,
      "10": 29.5,
      "30": 82.5
    },
    "price": 8.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-jardinexclusif",
    "brand": "Mancera",
    "name": "Jardin Exclusif",
    "categories": [
      "men"
    ],
    "description": "Top Notes Fruits Hard candy Heart Notes Jasmine Ambergris Rose Violet Base Notes Vanilla Sandalwood White musk",
    "notes": [
      "Floral",
      "Sweet",
      "Fruity",
      "Fresh",
      "Green"
    ],
    "wear": "spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-jasminexclusif",
    "brand": "Mancera",
    "name": "Jasmin Exclusif",
    "categories": [
      "women"
    ],
    "description": "Top notes are Spices and Bergamot; middle notes are Egyptian Jasmine, Agarwood (Oud), Leather and Patchouli; base notes are Jasmine, Sandalwood, Vanilla Pod and Labdanum.",
    "notes": [
      "White floral",
      "Oud",
      "Woody",
      "Leather",
      "Warm spicy",
      "Animalic",
      "Powdery",
      "Vanilla",
      "Amber",
      "Balsamic"
    ],
    "wear": "winter spring autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "women",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-juicyflowers",
    "brand": "Mancera",
    "name": "Juicy Flowers",
    "categories": [
      "women"
    ],
    "description": "Top Notes Red fruits Citrus fruits Pear Pink pepper Heart Notes Jasmine Peach Sandalwood Rose Base Notes Raspberry White musk Ambergris Vanilla",
    "notes": [
      "Fruity",
      "Sweet",
      "Floral",
      "Synthetic",
      "Citrus"
    ],
    "wear": "spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-lemonline",
    "brand": "Mancera",
    "name": "Lemon Line",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Lemon, Lavender and Orange; middle notes are White Flowers, Geranium and Amber; base notes are oak moss and White Musk.",
    "notes": [
      "Citrus",
      "Aromatic",
      "Lavender",
      "Fresh spicy",
      "Mossy",
      "Musky"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-pearl",
    "brand": "Mancera",
    "name": "Pearl",
    "categories": [
      "women"
    ],
    "description": "Top notes are Fig, Bergamot, Green Apple and White Peach; middle notes are Rose, Egyptian Jasmine and Violet; base notes are White Musk and Ambergris.",
    "notes": [
      "Fruity",
      "Musky",
      "Powdery",
      "Rose",
      "Sweet",
      "Amber",
      "Citrus",
      "Floral",
      "Animalic",
      "Woody"
    ],
    "wear": "spring summer fall* day",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-preciousoud",
    "brand": "Mancera",
    "name": "Precious Oud",
    "categories": [
      "men"
    ],
    "description": "Top Notes Leather Laotian oud Whisky Bergamot Heart Notes Magnolia Tiramisu Patchouli Rose Violet Base Notes Amber Sandalwood Oakmoss Vanilla Cedarwood",
    "notes": [
      "Floral",
      "Sweet",
      "Oriental",
      "Woody",
      "Leathery"
    ],
    "wear": "winter autumn day* night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-redtobacco",
    "brand": "Mancera",
    "name": "Red Tobacco",
    "categories": [
      "men"
    ],
    "description": "Top notes are Agarwood (Oud), Cinnamon, Incense, Pear, Saffron and Nutmeg; middle notes are Leather, Tobacco, Patchouli, Jasmine and Vetiver; base notes are Vanilla, Musk, Sandalwood, Guaiac Wood and Ambergris.",
    "notes": [
      "Leather",
      "Tobacco",
      "Warm spicy",
      "Sweet",
      "Vanilla",
      "Animalic",
      "Powdery",
      "Oud",
      "Musky"
    ],
    "wear": "winter fall night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-rosesvanille",
    "brand": "Mancera",
    "name": "Roses Vanille",
    "categories": [
      "women"
    ],
    "description": "Top note is Italian Lemon; middle note is Turkish Rose; base notes are Vanilla, White Musk and Cedar.",
    "notes": [
      "Rose",
      "Vanilla",
      "Powdery",
      "Musky",
      "Floral",
      "Woody",
      "Citrus",
      "Sweet"
    ],
    "wear": "winter spring* summer* fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-sicily",
    "brand": "Mancera",
    "name": "Sicily",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Mandarin orange Grapefruit Peach Bergamot Apple Pineapple Heart Notes Jasmine Ylang-ylang Rose Violet Base Notes White musk Woody notes",
    "notes": [
      "Citrus",
      "Fruity",
      "Sweet",
      "Fresh spicy",
      "Powdery",
      "White floral"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-soleilditalie",
    "brand": "Mancera",
    "name": "Soleil D'Italie",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Bitter Orange, Lime, Calabrian bergamot, Mandarin Orange, Pink Pepper and Cardamom; middle notes are Watery Notes, Bulgarian Rose and Patchouli Leaf; base notes are White Musk, Cedar, Ambergris, Vetiver and Guaiac Wood.",
    "notes": [
      "Citrus",
      "Woody",
      "Aquatic",
      "Aromatic",
      "Musky",
      "Fresh"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-tonkacola",
    "brand": "Mancera",
    "name": "Tonka Cola",
    "categories": [
      "men"
    ],
    "description": "Top Notes Black cherry Cinnamon Sicilian lemon Nutmeg Heart Notes Heart Notes Cola Indonesian patchouli Orange blossom Base Notes Base Notes Brazilian tonka bean Vanilla Benzoin Labdanum",
    "notes": [
      "Sweet",
      "Spicy",
      "Gourmand",
      "Citrus",
      "Fruity"
    ],
    "wear": "winter spring* autumn day* night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-vetiversensuel",
    "brand": "Mancera",
    "name": "Vetiver Sensuel",
    "categories": [
      "men"
    ],
    "description": "Top Notes Bergamot Lemon Pepper Lime Orange Heart Notes Mint Orchid Patchouli Base Notes es Vetiver Oakmoss White musk Woody notes Amber",
    "notes": [
      "Fresh",
      "Citrus",
      "Green",
      "Woody",
      "Fruity"
    ],
    "wear": "spring summer Fall/day",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mancera-wavemusk",
    "brand": "Mancera",
    "name": "Wave Musk",
    "categories": [
      "men"
    ],
    "description": "Top Notes Grapefruit Herbs Blackcurrant Heart Notes Seawater Driftwood Salt Orange blossom Base Notes White musk Kelp",
    "notes": [
      "Marine",
      "Aromatic",
      "Salty",
      "Citrus",
      "Musky",
      "Aquatic",
      "Green",
      "White floral",
      "Fresh",
      "Woody"
    ],
    "wear": "Spring Summer Day",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "marcjacobs-daisylove",
    "brand": "Marc Jacobs",
    "name": "Daisy Love",
    "categories": [
      "women"
    ],
    "description": "top note is Cloudberry; the middle note is Daisy; the base notes are Cashmere Musk and Driftwood.",
    "notes": [
      "Sweet",
      "Floral",
      "Fruity",
      "Fresh",
      "Synthetic"
    ],
    "wear": "spring/summer/day",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.5,
      "30": 55.5
    },
    "price": 6.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "marcjacobs-dot",
    "brand": "Marc Jacobs",
    "name": "Dot",
    "categories": [
      "women"
    ],
    "description": "Top Notes Red berries Honeysuckle Dragon fruit Heart Notes Jasmine Coconut water Orange blossom Base Notes Musk Driftwood Vanilla",
    "notes": [
      "White floral",
      "Tropical",
      "Sweet",
      "Fresh",
      "Coconut",
      "Vanilla"
    ],
    "wear": "spring/summer/day",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 8.5,
      "10": 14.5,
      "30": 38.0
    },
    "price": 5.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mfk-apom",
    "brand": "MFK",
    "name": "APOM",
    "categories": [
      "men"
    ],
    "description": "Orange blossom absolute White musk Ylang-ylang Cedarwood Vanilla Labdanum True lavender absolute",
    "notes": [
      "Floral",
      "Creamy",
      "Sweet",
      "Fresh",
      "Woody"
    ],
    "wear": "spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 8.5,
      "5": 18.0,
      "10": 33.5,
      "30": 95.0
    },
    "price": 8.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mfk-gentlefluiditysilver",
    "brand": "MFK",
    "name": "Gentle Fluidity (Silver)",
    "categories": [
      "men"
    ],
    "description": "Vanilla Juniper berry Musk Woods Coriander seed Nutmeg",
    "notes": [
      "Fresh",
      "Woody",
      "Spicy",
      "Green",
      "Aquatic"
    ],
    "wear": "spring summer autumn day",
    "pricingConflict": false,
    "prices": {
      "2": 8.5,
      "5": 18.0,
      "10": 33.5,
      "30": 95.0
    },
    "price": 8.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mfk-grandsoir",
    "brand": "MFK",
    "name": "Grand Soir",
    "categories": [
      "men"
    ],
    "description": "Benzoin Siam Vanilla Spanish labdanum Brazilian tonka bean Ceylonese cinnamon leaf Provençal lavender Venezuelan tonka bean",
    "notes": [
      "Sweet",
      "Resinous",
      "Spicy",
      "Oriental",
      "Gourmand"
    ],
    "wear": "winter autumn night",
    "pricingConflict": false,
    "prices": {
      "2": 8.5,
      "5": 18.0,
      "10": 33.5,
      "30": 95.0
    },
    "price": 8.5,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mfk-oudsatinmood",
    "brand": "MFK",
    "name": "Oud Satin Mood",
    "categories": [
      "men"
    ],
    "description": "Bulgarian damask rose Turkish damask rose absolute Vanilla Benzoin Siam Violet Amber Laotian oud",
    "notes": [
      "Floral",
      "Sweet",
      "Oriental",
      "Woody",
      "Powdery"
    ],
    "wear": "winter autumn night",
    "pricingConflict": false,
    "prices": {
      "2": 10.0,
      "5": 21.5,
      "10": 40.5,
      "30": 115.5
    },
    "price": 10.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "michaelmalullondon-jetblackreserve",
    "brand": "Michael Malul London",
    "name": "Jet Black Reserve",
    "categories": [
      "men"
    ],
    "description": "Top Notes Apple Cardamom Lavender Heart Notes White pepper Base Notes Amber Woody notes",
    "notes": [
      "Woody",
      "Spicy"
    ],
    "wear": "winter autumn day* night",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.5,
      "30": 49.0
    },
    "price": 5.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mindgames-frenchdefense",
    "brand": "Mind Games",
    "name": "French Defense",
    "categories": [
      "men"
    ],
    "description": "Black cherry Amber Blond woods Cognac Rose absolute Cedarwood Chamomile Madagascan geranium Mimosa Patchouli Saffron Violet leaf",
    "notes": [
      "Sweet",
      "Fruity",
      "Spicy",
      "Woody",
      "Resinous"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 11.0,
      "5": 24.5,
      "10": 46.5,
      "30": 133.0
    },
    "price": 11.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mindgames-gambit",
    "brand": "Mind Games",
    "name": "Gambit",
    "categories": [
      "men"
    ],
    "description": "Top Notes Clove Petitgrain Lavender Heart Notes Mimosa absolute Cardamom Madagascan geranium Base Notes Ambrostar Indonesian patchouli Sandalwood",
    "notes": [
      "Spicy",
      "Fresh",
      "Woody",
      "Sweet",
      "Green"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 11.0,
      "5": 24.5,
      "10": 46.5,
      "30": 133.0
    },
    "price": 11.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "mindgames-jadoube",
    "brand": "Mind Games",
    "name": "J'Adoube",
    "categories": [
      "men"
    ],
    "description": "Top Notes Top Notes Madagascan mandarin orange Red currant Heart Notes Damask rose Pomegranate Base Notes Ambrostar Leather Sulawesi patchouli Benzoin",
    "notes": [
      "Fruity",
      "Floral",
      "Sweet",
      "Leathery",
      "Spicy"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 11.0,
      "5": 24.5,
      "10": 46.5,
      "30": 133.0
    },
    "price": 11.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "missdior-rosenroses",
    "brand": "Miss Dior",
    "name": "Rose N'Roses",
    "categories": [
      "women"
    ],
    "description": "Top notes are Geranium, Bergamot and Italian Mandarin; middle notes are Grasse Rose and Damask Rose; base note is White Musk.",
    "notes": [
      "Rose",
      "Musky",
      "Fresh spicy",
      "Citrus",
      "Aromatic",
      "Powdery",
      "Floral"
    ],
    "wear": "spring summer fall* day night*",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.5,
      "30": 55.5
    },
    "price": 6.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "moncler-cieldhiverunnerolienmajeste",
    "brand": "Moncler",
    "name": "Ciel d'Hiver - Un néroli en majesté",
    "categories": [
      "men"
    ],
    "description": "Ambrette Ambroxan Neroli Sandalwood",
    "notes": [
      "Woody",
      "Citrus",
      "Floral",
      "Fruity",
      "Fresh"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 11.0,
      "5": 23.5,
      "10": 44.5,
      "30": 128.0
    },
    "price": 11.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "moncler-lesolstice",
    "brand": "Moncler",
    "name": "Le Solstice",
    "categories": [],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "moncler-monclersunrisepourhomme",
    "brand": "Moncler",
    "name": "Moncler Sunrise pour Homme",
    "categories": [
      "men"
    ],
    "description": "Top Notes Italian bergamot Pink pepper Lemon Heart Notes Indonesian nutmeg Sage Suede Base Notes Frankincense Haitian vetiver Indonesian patchouli",
    "notes": [
      "Woody",
      "Sweet",
      "Spicy",
      "Fresh",
      "Citrus"
    ],
    "wear": "winter* spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.5,
      "5": 8.0,
      "10": 13.5,
      "30": 35.0
    },
    "price": 4.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "moncler-sunrisepourfemme",
    "brand": "Moncler",
    "name": "Sunrise pour Femme",
    "categories": [
      "women"
    ],
    "description": "Top Notes Pear Grapefruit Violet leaf Heart Notes Egyptian jasmine Freesia Lily of the valley Peony Base Notes Amber Australian sandalwood Texas cedar",
    "notes": [
      "Floral",
      "Fresh",
      "Creamy",
      "Sweet",
      "Fruity"
    ],
    "wear": "spring summer autumn day",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 13.5,
      "10": 24.5,
      "30": 68.0
    },
    "price": 7.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montale-ambermusk",
    "brand": "Montale",
    "name": "Amber Musk",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Part of the amber fragrance family, it opens with a delicate balance of white musk and ambergris, creating a silky and smooth first impression. As the scent develops, powdery notes and warm amber take center stage, while a hint of cedarwood adds a grounding touch for an elegant finish.",
    "notes": [
      "Amber",
      "Powdery",
      "Musky",
      "Animalic",
      "Woody"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": true,
    "prices": {},
    "price": null,
    "category": "unisex",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montale-aoudmusk",
    "brand": "Montale",
    "name": "Aoud Musk",
    "categories": [
      "men"
    ],
    "description": "Aoud Musk is an elegant blend of saffron, ebony, vetiver and amber notes, placed on the base of sensual musk and agar.",
    "notes": [
      "Woody",
      "Oud",
      "Musky",
      "Warm spicy",
      "Powdery",
      "Amber",
      "Metallic",
      "Earthy",
      "Aromatic",
      "Leather"
    ],
    "wear": "winter fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 13.5,
      "10": 24.5,
      "30": 68.0
    },
    "price": 7.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montale-arabianstonka",
    "brand": "Montale",
    "name": "Arabians Tonka",
    "categories": [
      "men"
    ],
    "description": "Top Notes Saffron Bergamot Heart Notes Bulgarian rose Nepalese oud Leather Base Notes Tonka bean Cane sugar Amber White musk Oakmoss",
    "notes": [
      "Oriental",
      "Sweet",
      "Spicy",
      "Woody",
      "Gourmand"
    ],
    "wear": "winter autumn night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 13.5,
      "10": 24.5,
      "30": 68.0
    },
    "price": 7.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montale-blackaoud",
    "brand": "Montale",
    "name": "Black Aoud",
    "categories": [
      "men"
    ],
    "description": "Rose Cambodian oud Indonesian patchouli Labdanum Sandalwood Mandarin orange Musk",
    "notes": [
      "Floral",
      "Oriental",
      "Woody",
      "Spicy",
      "Resinous"
    ],
    "wear": "Winter/ Fall Day &Night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 13.5,
      "10": 24.5,
      "30": 68.0
    },
    "price": 7.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montale-daydreams",
    "brand": "Montale",
    "name": "Day Dreams",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "top notes, featuring the sweet and delicate aromas of orange blossom, jasmine, and mandarin. These initial scents create an inviting and refreshing introduction that seamlessly blends into the heart notes.",
    "notes": [
      "White floral",
      "Citrus",
      "Vanilla",
      "Sweet",
      "Woody",
      "Powdery"
    ],
    "wear": "spring summer day",
    "pricingConflict": true,
    "prices": {},
    "price": null,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montale-honeyaoud",
    "brand": "Montale",
    "name": "Honey Aoud",
    "categories": [
      "men"
    ],
    "description": "Ceylonese cinnamon Laotian oud Bourbon vanilla Honey Sumatra patchouli Amber Floral notes Leather",
    "notes": [
      "Sweet",
      "Oriental",
      "Spicy",
      "Woody",
      "Gourmand"
    ],
    "wear": "winter autumn night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 13.5,
      "10": 24.5,
      "30": 68.0
    },
    "price": 7.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montale-mangomanga",
    "brand": "Montale",
    "name": "Mango Manga",
    "categories": [
      "women"
    ],
    "description": "Top Notes Mango Orange Heart Notes Jasmine sambacCalabrian neroli Base Notes Vetiver Oakmoss Cedar",
    "notes": [
      "Tropical",
      "Sweet",
      "Fruity",
      "Woody",
      "Citrus",
      "Oud",
      "Yellow floral",
      "White floral",
      "Terpenic",
      "Earthy"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 9.0,
      "10": 15.5,
      "30": 39.5
    },
    "price": 5.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montale-oudsapparot",
    "brand": "Montale",
    "name": "Oud Sapparot",
    "categories": [],
    "description": "Top notes are Pineapple, Cambodian Oud and Saffron; middle notes are Leather, Birch and Cinnamon; base notes are Coconut, Vanilla and White Musk.",
    "notes": [
      "Sweet",
      "Fruity",
      "Leather",
      "Woody",
      "Warm spicy",
      "Animalic",
      "Tropical",
      "Vanilla",
      "Smoky",
      "Coconut"
    ],
    "wear": "Winter Spring Summer Fall Day Night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montale-oudmazing",
    "brand": "Montale",
    "name": "Oudmazing",
    "categories": [
      "men"
    ],
    "description": "Top notes are Agarwood (Oud), Fig, Pear, Sicilian Orange and Sicilian Bergamot; middle notes are Patchouli Leaf, Orris and Egyptian Jasmine; base notes are Grapes, Madagascar Vanilla, Leather and White Musk.",
    "notes": [
      "Fruity",
      "Sweet",
      "Oud",
      "Vanilla",
      "Woody",
      "Leather",
      "Powdery",
      "Patchouli",
      "Citrus",
      "Animalic"
    ],
    "wear": "winter spring* fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 13.5,
      "10": 24.5,
      "30": 68.0
    },
    "price": 7.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montale-ristrettointensecafe",
    "brand": "Montale",
    "name": "Ristretto Intense Café",
    "categories": [
      "men"
    ],
    "description": "Coffee Rose Vanilla White musk",
    "notes": [
      "Woody",
      "Warm spicy",
      "Amber",
      "Oud",
      "Balsamic",
      "Smoky",
      "Aromatic",
      "Powdery"
    ],
    "wear": "winter autumn +E236night",
    "pricingConflict": false,
    "prices": {
      "2": 7.5,
      "5": 15.5,
      "10": 28.5,
      "30": 79.0
    },
    "price": 7.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montale-rosesmusk",
    "brand": "Montale",
    "name": "Roses Musk",
    "categories": [
      "women"
    ],
    "description": "top note blooms into a delicate heart of jasmine, adding a soft, feminine touch. The fragrance dries down with a warm and sensual base of amber and musk, creating a long-lasting scent that lingers gracefully on the skin.",
    "notes": [
      "Rose",
      "Musky",
      "Powdery",
      "Floral",
      "White floral"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.5,
      "30": 49.0
    },
    "price": 5.5,
    "category": "women",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montale-woodsandspices",
    "brand": "Montale",
    "name": "Woods and Spices",
    "categories": [
      "men"
    ],
    "description": "Sandalwood Cardamom Pimento Vetiver Ebony Frankincense",
    "notes": [
      "Spicy",
      "Woody",
      "Fresh",
      "Sweet",
      "Oriental"
    ],
    "wear": "Winter/ Fall Day/ Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.5,
      "10": 22.5,
      "30": 62.0
    },
    "price": 6.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montblanc-explorer",
    "brand": "Montblanc",
    "name": "Explorer",
    "categories": [
      "men"
    ],
    "description": "Top notes are Bergamot, Pink Pepper and Clary Sage; middle notes are Haitian Vetiver and Leather; base notes are Ambroxan, Akigalawood, Indonesian Patchouli Leaf and Cacao Pod.",
    "notes": [
      "Woody",
      "Citrus",
      "Aromatic",
      "Amber",
      "Musky",
      "Fresh spicy",
      "Oud",
      "Soft spicy",
      "Warm spicy",
      "Earthy"
    ],
    "wear": "spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.0,
      "10": 19.5,
      "30": 52.5
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montblanc-individuel",
    "brand": "Montblanc",
    "name": "Individuel",
    "categories": [
      "men"
    ],
    "description": "Juniper berry Bergamot,Cinnamon Lavender, Mint, Coriander Rosemary Heart Notes Geranium Orange blossom Jasmine Violet Base Notes Raspberry Vanilla Amber Musks Oakmoss Patchouli Sandalwood Tonka bean Dark chocolate, Vetiver",
    "notes": [
      "Sweet",
      "Fruity",
      "Fresh",
      "Synthetic",
      "Spicy"
    ],
    "wear": "Fall/Winter/Spring day/Night",
    "pricingConflict": false,
    "prices": {
      "2": 4.5,
      "5": 7.5,
      "10": 12.5,
      "30": 32.0
    },
    "price": 4.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montblanc-legendmontblanc",
    "brand": "Montblanc",
    "name": "Legend Montblanc",
    "categories": [
      "men"
    ],
    "description": "Top Notes Bergamot Citrus fruits Lavender Heart Notes White cedar Jasmine Rose Base Notes Evernyl Tonka bean Sandalwood",
    "notes": [
      "Fresh",
      "Synthetic",
      "Fruity",
      "Woody",
      "Spicy"
    ],
    "wear": "Fall/Winter/Spring day/Night",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.0,
      "10": 17.0,
      "30": 44.5
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "montblanc-signature",
    "brand": "Montblanc",
    "name": "Signature",
    "categories": [
      "women"
    ],
    "description": "Top note is Clementine; middle notes are Magnolia, Ylang-Ylang and Peony; base notes are Vanilla, White Musk and Benzoin.",
    "notes": [
      "Vanilla",
      "Floral",
      "Citrus",
      "Musky",
      "Sweet",
      "Powdery",
      "Yellow floral",
      "Amber"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.0,
      "10": 17.5,
      "30": 46.0
    },
    "price": 5.5,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "narcisorodriguez-narcisorodriguezforhim",
    "brand": "Narciso Rodriguez",
    "name": "Narciso Rodriguez for Him",
    "categories": [
      "men"
    ],
    "description": "musk, amber, violet leaf and patchouli",
    "notes": [
      "Ozonic",
      "Musky",
      "Patchouli",
      "Aquatic",
      "Powdery",
      "Woody",
      "Amber",
      "Warm spicy",
      "Earthy",
      "Green"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 8.0,
      "5": 17.0,
      "10": 31.0,
      "30": 87.0
    },
    "price": 8.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "nasomatto-blackafgano",
    "brand": "Nasomatto",
    "name": "Black Afgano",
    "categories": [
      "men"
    ],
    "description": "Top notes are cannabis, Green Notes, Davana, Saffron and Thyme; middle notes are Resins, Woodsy Notes, Tobacco, Coffee, Cinnamon, Violet and Raspberry; base notes are Agarwood (Oud), Incense, Amber, Animal notes, Guaiac Wood, Musk, Tonka, Gurjan balsam, Cedar, Ambroxan and Vanilla.",
    "notes": [
      "Amber",
      "Smoky",
      "Woody",
      "Oud",
      "Cannabis",
      "Balsamic",
      "Green",
      "Aromatic",
      "Warm spicy",
      "Tobacco"
    ],
    "wear": "winter fall night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 12.0,
      "10": 21.0,
      "30": 57.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "nautica-voyage",
    "brand": "Nautica",
    "name": "Voyage",
    "categories": [
      "men"
    ],
    "description": "Top Notes Apple Leaves Heart Notes Lotus Mimosa Base Notes Moss Musk Cedar Amber",
    "notes": [
      "Aquatic",
      "Fresh",
      "Synthetic",
      "Green",
      "Fruity"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.0,
      "10": 7.0,
      "30": 14.5
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "nicolemiller-nicolemillerformen",
    "brand": "Nicole Miller",
    "name": "Nicole Miller for Men",
    "categories": [
      "men"
    ],
    "description": "Top Notes Apple Honey Heart Notes Vanilla Leather Oakmoss Base Notes Ambe Musk Sandalwood",
    "notes": [
      "Fruity",
      "Sweet",
      "Woody",
      "Resinous",
      "Gourmand"
    ],
    "wear": "Fall/Day/Night",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.0,
      "30": 47.5
    },
    "price": 5.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "nishane-wulongcha",
    "brand": "Nishane",
    "name": "Wūlóng Chá",
    "categories": [
      "men"
    ],
    "description": "Top Notes Bergamot Litsea cubeba Mandarin orange Orange Heart Notes Oolong tea Nutmeg Base Notes Mediterranean fig Musk",
    "notes": [
      "Fresh",
      "Citrus",
      "Green",
      "Fruity",
      "Spicy"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 11.0,
      "5": 23.5,
      "10": 44.0,
      "30": 126.5
    },
    "price": 11.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "pacorabanne-1millionlucky",
    "brand": "Paco Rabanne",
    "name": "1 Million Lucky",
    "categories": [
      "men"
    ],
    "description": "Top Notes Greengage plum Grapefruit Ozonic notes Heart Notes Hazelnut Honey Cashmere wood Cedarwood Jasmine Base Notes Vetiver Oakmoss Patchouli",
    "notes": [
      "Sweet",
      "Fruity",
      "Gourmand",
      "Fresh",
      "Woody"
    ],
    "wear": "Fall/ Winter/ Spring/ Day/Nig",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.5,
      "30": 49.0
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "pacorabanne-invictusaqua",
    "brand": "Paco Rabanne",
    "name": "Invictus Aqua",
    "categories": [
      "men"
    ],
    "description": "Top notes are Yuzu, Grapefruit and Pink Pepper; middle notes are Sea water and Violet Leaf; base notes are Ambergris, Amberwood and Guaiac Wood.",
    "notes": [
      "Citrus",
      "Amber",
      "Marine",
      "Aquatic",
      "Aromatic",
      "Woody",
      "Ozonic",
      "Green",
      "Salty",
      "Animalic"
    ],
    "wear": "Spring/ Summer/ Day",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.0,
      "10": 19.0,
      "30": 51.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "pacorabanne-milliongoldforher",
    "brand": "Paco Rabanne",
    "name": "Million Gold for Her",
    "categories": [
      "women"
    ],
    "description": "Madagascan mandarin orange Tonkalactone® Lavender ®Pearadise® Heart Notes Rose oxide Jasmine Madagascan ylang-ylang Base Notes Bourbon vanilla absolute Ecomusk® Mossy notes",
    "notes": [
      "Floral",
      "Sweet",
      "Creamy",
      "Fruity",
      "Synthetic"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.5,
      "10": 26.0,
      "30": 71.5
    },
    "price": 7.0,
    "category": "women",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "pacorabanne-purexs",
    "brand": "Paco Rabanne",
    "name": "Pure XS",
    "categories": [
      "men"
    ],
    "description": "Sugar liqueur Vanilla myrrh Plant juice Ginger musk thyme Cinnamon leather",
    "notes": [
      "Sweet",
      "Synthetic",
      "Spicy",
      "Fresh",
      "Gourmand"
    ],
    "wear": "Winter/ Fall/Night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "pacorabanne-rabannephantom",
    "brand": "Paco Rabanne",
    "name": "Rabanne Phantom",
    "categories": [
      "men"
    ],
    "description": "Caribbean rum Coffee Cane sugar Cyanide Sandalwood Java vetiver",
    "notes": [
      "Gourmand",
      "Sweet",
      "Spicy",
      "Woody",
      "Creamy"
    ],
    "wear": "winter/autumn/night",
    "pricingConflict": false,
    "prices": {
      "2": 4.5,
      "5": 8.0,
      "10": 13.5,
      "30": 35.0
    },
    "price": 4.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "parfumsdemarly-goldophin",
    "brand": "Parfums de Marly",
    "name": "Goldophin",
    "categories": [
      "men"
    ],
    "description": "Top notes are Fruity Notes, Saffron, Mate, Thyme, Cypress and Green Notes; middle notes are Rose, Orris and Jasmine; base notes are Leather, Amber, Vetiver, Musk, Virginia Cedar and Vanille",
    "notes": [
      "Leather",
      "Aromatic",
      "Fruity",
      "Animalic",
      "Woody",
      "Warm spicy",
      "Sweet",
      "Fresh spicy",
      "Powdery",
      "Smoky"
    ],
    "wear": "Winter/ Spring/ Fall/ Day",
    "pricingConflict": false,
    "prices": {
      "2": 11.5,
      "5": 25.0,
      "10": 47.0,
      "30": 134.5
    },
    "price": 11.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "parfumsdemarly-layton",
    "brand": "Parfums de Marly",
    "name": "Layton",
    "categories": [
      "men"
    ],
    "description": "Top Notes Apple Lavender Bergamot Mandarin orange Heart Notes Geranium Jasmine Violet Base Notes Vanilla Cardamom Gaiac wood Sandalwood Patchouli Pink pepper",
    "notes": [
      "Sweet",
      "Spicy",
      "Fruity",
      "Woody",
      "Orientalsweet",
      "Spicy",
      "Fruity",
      "Woody",
      "Oriental"
    ],
    "wear": "Winter/Spring/Fall/Day",
    "pricingConflict": false,
    "prices": {
      "2": 11.5,
      "5": 25.0,
      "10": 47.0,
      "30": 134.5
    },
    "price": 11.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "parfumsdemarly-laytonexclusif",
    "brand": "Parfums de Marly",
    "name": "Layton Exclusif",
    "categories": [
      "men"
    ],
    "description": "Top Notes Apple Bergamot Grapefruit Heart Notes Geranium Lavender Oud Cinnamon Base Notes Gaiac wood Vanilla Cyprio Patchouli",
    "notes": [
      "Woody",
      "Spicy",
      "Sweet",
      "Oriental",
      "Smoky"
    ],
    "wear": "Fall/Winter/Night",
    "pricingConflict": false,
    "prices": {
      "2": 12.5,
      "5": 28.0,
      "10": 53.0,
      "30": 153.5
    },
    "price": 12.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "parfumsdemarly-pegasus",
    "brand": "Parfums de Marly",
    "name": "Pegasus",
    "categories": [
      "men"
    ],
    "description": "Top Notes Heliotrope Bergamot Cypress Heart Notes Bitter almond Jasmine Lavender Base Notes Vanilla Amber Sandalwood",
    "notes": [
      "Sweet",
      "Creamy",
      "Spicy",
      "Gourmand",
      "Woody"
    ],
    "wear": "Winter/Spring/Fall/Day",
    "pricingConflict": false,
    "prices": {
      "2": 11.5,
      "5": 25.0,
      "10": 47.0,
      "30": 134.5
    },
    "price": 11.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "parfumsdemarly-percival",
    "brand": "Parfums de Marly",
    "name": "Percival",
    "categories": [
      "men"
    ],
    "description": "Top Notes Aromatic notes Bergamot Mandarin orange Pink pepper Heart Notes Lavender Coriander Geranium Jasmine Violet Cinnamon Base Notes Base Notes Balsam fir Pepper Spices Musk Tonka bean",
    "notes": [
      "Fresh",
      "Spicy",
      "Citrus",
      "Aquatic",
      "Woody"
    ],
    "wear": "Spring/Summer/Fall/Day",
    "pricingConflict": false,
    "prices": {
      "2": 11.5,
      "5": 25.0,
      "10": 47.0,
      "30": 134.5
    },
    "price": 11.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "parfumsdemarly-perseus",
    "brand": "Parfums de Marly",
    "name": "Perseus",
    "categories": [
      "men"
    ],
    "description": "Top Notes Grapefruit Bergamot Blackcurrant bud Heart Notes Vetiver Green mandarin orange Geranium Base Notes Cashmere wood Ambergris Dry woods",
    "notes": [
      "Citrus",
      "Fresh",
      "Woody",
      "Fruity",
      "Green"
    ],
    "wear": "Spring/ Summer/Day",
    "pricingConflict": false,
    "prices": {
      "2": 11.5,
      "5": 25.0,
      "10": 47.0,
      "30": 134.5
    },
    "price": 11.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "pariscorner-noufpineapple",
    "brand": "PARIS CORNER",
    "name": "Nouf Pineapple",
    "categories": [
      "men"
    ],
    "description": "Top Notes: Pineapple, Bergamot, Grape fruit Heart Heart note: White cedar, Jasmine, Patchouli Base Note: Woody Notes, Oakmoss",
    "notes": [
      "Fruity",
      "Sweet",
      "Fresh",
      "Synthetic",
      "Woody"
    ],
    "wear": "winter spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.0,
      "10": 7.0,
      "30": 14.5
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "pariscorner-qissablue",
    "brand": "Paris Corner",
    "name": "Qissa Blue",
    "categories": [],
    "description": "Top notes are Citrus, Bergamot, Lemon, Ylang-Ylang, Artemisia, Leather and Incense; middle notes are Sweet Orange, Ginger, Jasmine, Magnolia and Patchouli; base notes are Musk, Oakmoss, Saffron and Amber.",
    "notes": [
      "Citrus",
      "Fresh spicy",
      "Fresh",
      "Aromatic",
      "Herbal"
    ],
    "wear": "Spring, Summer, Day",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "pariscorner-qissadelicious",
    "brand": "Paris Corner",
    "name": "Qissa Delicious",
    "categories": [
      "women"
    ],
    "description": "Top notes are Whipped Cream, Dark Chocolate and Orange; middle notes are Marshmallow, Coconut and Jasmine; base notes are Vanilla and White Musk.",
    "notes": [
      "Sweet",
      "Vanilla",
      "Powdery",
      "Citrus",
      "Chocolate",
      "Musky",
      "Lactonic"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.0,
      "10": 9.0,
      "30": 21.0
    },
    "price": 4.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "pariscorner-qissapink",
    "brand": "Paris Corner",
    "name": "Qissa Pink",
    "categories": [],
    "description": "Top notes are Coconut and Apple; middle notes are Jasmine, Rose and Violet; base notes are Vanilla, Sugar, Sandalwood, Cedarwood and Patchouli.",
    "notes": [
      "Vanilla",
      "Sweet",
      "Coconut",
      "Powdery",
      "White floral",
      "Rose",
      "Woody",
      "Violet",
      "Fruity",
      "Fresh"
    ],
    "wear": "Spring, Summer, Day",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "perryellis-360blackformen",
    "brand": "Perry Ellis",
    "name": "360° Black for Men",
    "categories": [
      "men"
    ],
    "description": "Top Notes Cardamom Ginger Sambuca Heart Notes Black basil Nutmeg Tamarind Base Notes Liquidambar Suede Tobacco",
    "notes": [
      "Oriental",
      "Spicy",
      "Sweet",
      "Resinous",
      "Smoky"
    ],
    "wear": "Winter/ Fall day/ Night",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.5,
      "10": 8.0,
      "30": 17.5
    },
    "price": 3.5,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "perryellis-360redformen",
    "brand": "Perry Ellis",
    "name": "360° Red for Men",
    "categories": [
      "men"
    ],
    "description": "Top Notes Top Notes Lime Mandarin orange Bergamot Orange Cinnamon Clove Nutmeg Heart Notes Lavender Parsley Coriander seed Base Notes Musk Cedarwood Oakmoss Sandalwood Vetiver Patchouli",
    "notes": [
      "Fresh",
      "Citrus",
      "Aquatic",
      "Spicy",
      "Synthetic"
    ],
    "wear": "Fall/ Winter/ Spring Day/",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.5,
      "10": 8.0,
      "30": 17.5
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "prada-lunarossa",
    "brand": "Prada",
    "name": "Luna Rossa",
    "categories": [
      "men"
    ],
    "description": "Top Notes Lavender absolute Bitter orange Heart Notes Nana mint eClary sage Base Notes Ambroxan Ambrette seed absolute",
    "notes": [
      "Fresh",
      "Spicy",
      "Synthetic",
      "Citrus",
      "Powdery"
    ],
    "wear": "spring/summer/autumn*/day",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 8.5,
      "10": 14.5,
      "30": 38.0
    },
    "price": 5.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "prada-lunarossablackprada",
    "brand": "Prada",
    "name": "Luna Rossa Black Prada",
    "categories": [
      "men"
    ],
    "description": "Top Notes Angelica Bergamot Heart Notes Coumarin Patchouli Base Notes Amber",
    "notes": [
      "Sweet",
      "Powdery",
      "Spicy",
      "Creamy",
      "Woody"
    ],
    "wear": "winter/spring*/autumn/night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 12.0,
      "10": 21.0,
      "30": 57.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "prada-lunarossaoceanprada",
    "brand": "Prada",
    "name": "Luna Rossa Ocean Prada",
    "categories": [
      "men"
    ],
    "description": "Top Notes Grapefruit Heart Notes Frankincense Base Notes Vanilla Amber Xtreme",
    "notes": [
      "Fresh",
      "Sweet",
      "Synthetic",
      "Spicy",
      "Powdery"
    ],
    "wear": "winter spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 12.0,
      "10": 21.0,
      "30": 57.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "prada-pradalhomme",
    "brand": "Prada",
    "name": "Prada L'Homme",
    "categories": [
      "men"
    ],
    "description": "Iris Amber Nerol Violet Cedar Geranium Patchouli Pepper",
    "notes": [
      "Powdery",
      "Fresh",
      "Floral",
      "Sweet",
      "Creamy"
    ],
    "wear": "spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.0,
      "10": 19.5,
      "30": 52.5
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "rasari-hawaseclat",
    "brand": "Rasari",
    "name": "Hawas Eclat",
    "categories": [],
    "description": "Top notes are Litchi, Pear, Bergamot and Pistachio; middle notes are Rose and Incense; base notes are Vanilla, Musk, Amber and Woodsy Notes.",
    "notes": [
      "Fruity",
      "Rose",
      "Amber",
      "Vanilla",
      "Powdery",
      "Woody",
      "Musky",
      "Sweet",
      "Fresh",
      "Tropical"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "rasari-hawaskobra",
    "brand": "Rasari",
    "name": "Hawas Kobra",
    "categories": [],
    "description": "Top Notes Ginger, Bergamot and Tangerine; middle notes are Green Tea, Cinnamon and Neroli; base notes are Musk, Woodsy Notes and Amber.",
    "notes": [
      "Citrus",
      "Fresh spicy",
      "Fresh",
      "Musky",
      "Woody",
      "Amber",
      "Powdery",
      "Green",
      "Cinnamon",
      "Warm spicy"
    ],
    "wear": "Spring/Summer/Day",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "rasasi-daarejpourhomme",
    "brand": "Rasasi",
    "name": "Daarej pour Homme",
    "categories": [
      "men"
    ],
    "description": "Top Notes Cardamom, Cumin Mugwort Heart Notes Iris Rose Base Notes Musk, onka bean, Vanilla ,Amber,Patchouli Sandalwood",
    "notes": [
      "Sweet",
      "Oriental",
      "Spicy",
      "Powerdy",
      "Floral"
    ],
    "wear": "Winter/Fall/Day/Night",
    "pricingConflict": false,
    "prices": {
      "2": 3.0,
      "5": 4.5,
      "10": 6.5,
      "30": 13.0
    },
    "price": 3.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "rasasi-hawas",
    "brand": "Rasasi",
    "name": "Hawas",
    "categories": [
      "men"
    ],
    "description": "Top Notes Apple Bergamot Pea Cinnamon Lemon Pineapple Heart Notes Melon Orange blossom Plum Violet Cardamom Base Notes Musk Amberwood Patchouli Ambergris Cedarwood Sandalwood",
    "notes": [
      "Fresh",
      "Fruity",
      "Sweet",
      "Aquatic",
      "Synthetic"
    ],
    "wear": "Spring, Summer, Fall day/night",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.5,
      "10": 8.5,
      "30": 19.0
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "rasasi-hawasblack",
    "brand": "Rasasi",
    "name": "Hawas Black",
    "categories": [
      "men"
    ],
    "description": "Top notes are Bergamot, Pineapple and Grapefruit; middle notes are Patchouli, Cedarwood and Jasmine; base notes are Oakmoss, Woody Notes and Amber.",
    "notes": [
      "Fresh",
      "Citrus",
      "Earthy",
      "Green",
      "Woody"
    ],
    "wear": "Spring, Summer, Fall day/night",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.5,
      "10": 8.5,
      "30": 19.0
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "rasasi-hawasfire",
    "brand": "Rasasi",
    "name": "Hawas Fire",
    "categories": [
      "men"
    ],
    "description": "Top note is Clary Sage; middle notes are Marine notes and Egyptian Jasmine; base notes are Amber, Mineral notes and Ambergris.",
    "notes": [
      "Amber",
      "Aromatic",
      "Mineral",
      "Marine",
      "White floral",
      "Soft spicy",
      "Animalic",
      "Salty"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.0,
      "10": 9.0,
      "30": 21.0
    },
    "price": 4.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "rasasi-hawasforher",
    "brand": "Rasasi",
    "name": "Hawas for Her",
    "categories": [
      "women"
    ],
    "description": "Top Notes Grapefruit Apple Pomegranate Heart Notes Iris Jasmine sambac absolute Citrus notes Base Notes Praliné Patchouli Vetiver",
    "notes": [
      "Floral",
      "Sweet",
      "Fruity",
      "Gourmand",
      "Synthetic"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 12.0,
      "10": 21.0,
      "30": 57.0
    },
    "price": 6.0,
    "category": "women",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "rasasi-hawasice",
    "brand": "Rasasi",
    "name": "Hawas Ice",
    "categories": [
      "men"
    ],
    "description": "Top notes are Apple, Italian Lemon, Sicilian Bergamot and Star Anise; middle notes are Plum, Orange Blossom and Cardamon; base notes are Musk, Amber, Driftwood and Moss.",
    "notes": [
      "Fruity",
      "Citrus",
      "Sweet",
      "Aromatic",
      "Fresh",
      "Musky",
      "Powdery",
      "White floral",
      "Fresh spicy",
      "Amber"
    ],
    "wear": "Spring, Summer, Fall day/night",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.5,
      "10": 8.5,
      "30": 19.0
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "rasasi-hawastropical",
    "brand": "Rasasi",
    "name": "Hawas Tropical",
    "categories": [
      "men"
    ],
    "description": "Top Notes Coconut Water Fig Leaf Ginger Middle Notes Coconut Fig Mint Base Notes Sandalwood Tonka Bean Musk",
    "notes": [
      "Sweet",
      "Coconut",
      "Green",
      "Woody",
      "Vanilla",
      "Fruity",
      "Aromatic",
      "Powdery",
      "Lactonic",
      "Fresh spic"
    ],
    "wear": "spring summer fall* day",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.5,
      "10": 10.0,
      "30": 23.5
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "rasasi-tasmeemmen",
    "brand": "Rasasi",
    "name": "Tasmeem Men",
    "categories": [
      "men"
    ],
    "description": "Top Notes Cumin Cardamom Mugwort Heart Notes IrisIris RoseRose Base NotesTonka bean, Vanilla Amber, Musk Patchouli, Sandalwood",
    "notes": [
      "Sweet",
      "Oriental",
      "Spicy",
      "Powerdy",
      "Floral"
    ],
    "wear": "Winter/Fall/Day/Night",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.0,
      "10": 7.5,
      "30": 16.0
    },
    "price": 3.5,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "rayhaan-oceanrush",
    "brand": "Rayhaan",
    "name": "Ocean Rush",
    "categories": [
      "men"
    ],
    "description": "Top notes are Cascalone, Aquozone, Bergamot and Mandarin; middle notes are Lavender, Cypress and Rosemary; base notes are Amber, Musk and Patchouli.",
    "notes": [
      "Fresh",
      "Aromatic",
      "Fresh spicy",
      "Aquatic",
      "Citrus",
      "Woody",
      "Marine",
      "Lavender",
      "Amber",
      "Musky"
    ],
    "wear": "spring summer fall* day",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.5,
      "10": 8.0,
      "30": 17.5
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "riiffsperfumes-freeze",
    "brand": "Riiffs Perfumes",
    "name": "Freeze",
    "categories": [],
    "description": "Top notes are Spearmint, Lemon Zest, Calabrian bergamot, Grapefruit and Snow; middle notes are Ice, Tea, Ginger and Sage; base notes are Ambermax™, Peony and Cedar.",
    "notes": [
      "Citrus",
      "Fresh",
      "Green",
      "Fresh spicy",
      "Aromatic"
    ],
    "wear": "Spring*/Summer/Day",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "rochas-rochasman",
    "brand": "Rochas",
    "name": "Rochas Man",
    "categories": [
      "men"
    ],
    "description": "Top Notes Lavender Green leaves Bergamot Heart Notes Musk Jasmine Lily of the valley Raspberry Base Notes Coffee Vanilla Amber Patchouli Sandalwood",
    "notes": [
      "Sweet",
      "Gourmand",
      "Spicy",
      "Powdery",
      "Oriental"
    ],
    "wear": "Fall/ Winter/day/ Night",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.5,
      "10": 8.5,
      "30": 19.0
    },
    "price": 3.5,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "roja-apexeauintense",
    "brand": "Roja",
    "name": "Apex Eau Intense",
    "categories": [
      "women",
      "men",
      "unisex"
    ],
    "description": "Top notes are Mint, Chlorophyll, Helvetolide, Lemon, Bergamot, Clary Sage, Lavender and Mandarin; middle notes are Pomelo and Rose Oxide; base notes are Grass, Ambroxan, Violet Leaf, Driftwood, Velvione™, Cashmere Wood, Patchouli, Pepper, Cedar, Cardamon, Musk, elemi, Myrrh and Sandalwood.",
    "notes": [
      "Citrus",
      "Aromatic",
      "Green",
      "Woody",
      "Fresh spicy",
      "Amber",
      "Musky",
      "Warm spicy",
      "Fresh",
      "Ozonic"
    ],
    "wear": "spring summer fall* day",
    "pricingConflict": false,
    "prices": {
      "2": 11.0,
      "5": 23.5,
      "10": 44.5,
      "30": 128.0
    },
    "price": 11.0,
    "category": "unisex",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "royalefragrance-hayaati",
    "brand": "Royale Fragrance",
    "name": "Hayaati",
    "categories": [
      "men"
    ],
    "description": "Top note is Amber; middle notes are Toffee and Apple; base notes are Amber and Musk.",
    "notes": [
      "Amber",
      "Sweet",
      "Fruity",
      "Fresh",
      "Musky",
      "Caramel",
      "Powdery",
      "Green",
      "Animalic"
    ],
    "wear": "winter spring summer* fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.0,
      "10": 7.0,
      "30": 14.5
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "salvatoreferragamo-salvatoreferragamo",
    "brand": "Salvatore Ferragamo",
    "name": "Salvatore Ferragamo",
    "categories": [
      "men"
    ],
    "description": "Top notes are Fig Leaf, Grapefruit, Caraway, Brazilian Rosewood, African Geranium, Cyclamen and Neroli; middle notes are Carnation, Cardamom, Rose, Jasmine and Orris Root; base notes are Cedar, Vetiver, Sandalwood, Leather, Musk and Oakmoss.",
    "notes": [
      "Woody",
      "Green",
      "Aromatic",
      "Fresh",
      "Warm spicy",
      "Fresh spicy",
      "Floral",
      "Powdery",
      "Citrus",
      "Earthy"
    ],
    "wear": "spring summer fall day night*",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.5,
      "10": 8.0,
      "30": 17.5
    },
    "price": 3.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "scentologia-syncherry",
    "brand": "Scentologia",
    "name": "Syn.cherry",
    "categories": [],
    "description": "Top notes are Raspberry, Cherry, Pear and Blackcurrant; middle notes are Violet, Palisander Rosewood, Mango, Rose and Jasmine; base notes are Amber, Vanilla, Caramel, Moss, Cedarwood, Musk and Patchouli.",
    "notes": [
      "Sweet",
      "Fruity",
      "Woody",
      "Powdery",
      "Amber",
      "Violet",
      "Cherry",
      "Rose",
      "Floral",
      "Mossy"
    ],
    "wear": "Winter Spring Summer Fall Day Night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "uncategorised",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "scentstory-24goldoudedition",
    "brand": "Scentstory",
    "name": "24 Gold Oud Edition",
    "categories": [
      "men"
    ],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "scentstory-24icegold",
    "brand": "Scentstory",
    "name": "24 Ice Gold",
    "categories": [
      "men"
    ],
    "description": "Top Notes Apple Bergamot Red fruits Heart Notes Base Notes Ambroxan Patchouli White musk",
    "notes": [
      "Citrus",
      "Woody",
      "Fresh",
      "Aquatic",
      "Fruity"
    ],
    "wear": "Spring/Summer/Day",
    "pricingConflict": false,
    "prices": {
      "2": 4.5,
      "5": 8.0,
      "10": 13.0,
      "30": 33.5
    },
    "price": 4.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "sergelutens-chergui",
    "brand": "Serge Lutens",
    "name": "Chergui",
    "categories": [
      "men"
    ],
    "description": "Hay Immortelle Russian leather",
    "notes": [
      "Spicy",
      "Oriental",
      "Sweet",
      "Woody",
      "Resinous"
    ],
    "wear": "Winter/ Fall Day Night",
    "pricingConflict": false,
    "prices": {
      "2": 10.0,
      "5": 21.0,
      "10": 39.5,
      "30": 112.5
    },
    "price": 10.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "sospiroperfumes-vibrato",
    "brand": "Sospiro Perfumes",
    "name": "Vibrato",
    "categories": [
      "men"
    ],
    "description": "top notes of Magnolia and Jasmine with an uplifting, citrusy touch of Bergamot and Grapefruit. A burst of Ginger and Powdery notes balanced with a dewy and fresh herbal accent to add a smooth and mellow aroma. The charming and warm base made of a semi-spicy and woody mix of Cedarwood, Oriental, Musk, Patchouli, and Orris notes creates a complex and vivid scent that is also quite subtle.",
    "notes": [
      "Citrus",
      "Fresh spicy",
      "Powdery",
      "Woody",
      "Green",
      "Musky",
      "Aromatic"
    ],
    "wear": "spring summer day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.5,
      "5": 15.0,
      "10": 27.0,
      "30": 74.5
    },
    "price": 7.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "spiritofkings-tabana",
    "brand": "Spirit Of Kings",
    "name": "Tabana",
    "categories": [
      "men"
    ],
    "description": "Top notes are Agarwood (Oud), Saffron, Cardamom and Bergamot; middle notes are Leather and Pepper; base note is Ambergris.",
    "notes": [
      "Warm spicy",
      "Leather",
      "Oud",
      "Animalic",
      "Fresh spicy",
      "Amber",
      "Metallic",
      "Aromatic",
      "Smoky"
    ],
    "wear": "winter fall day night",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "stephanehumbertlucas-godoffire",
    "brand": "Stéphane Humbert Lucas",
    "name": "God of Fire",
    "categories": [
      "men"
    ],
    "description": "Top Notes Mango Ginger Lemon Pink pepper Heart Notes Coumarin Dry woods Jasmine Base Notes Musk Amber Nagarmotha Oud",
    "notes": [
      "Fruity",
      "Sweet",
      "Fresh",
      "Citrus",
      "Woody"
    ],
    "wear": "spring summer autumn* day* night",
    "pricingConflict": false,
    "prices": {
      "2": 8.5,
      "5": 17.0,
      "10": 31.5,
      "30": 88.5
    },
    "price": 8.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "stephanehumbertlucas-sanddance",
    "brand": "Stéphane Humbert Lucas",
    "name": "Sand Dance",
    "categories": [
      "men"
    ],
    "description": "Top Notes Coriander Irish cream Mandarin orange Heart Notes Cocoa Sandalwood Cashmere wood Base Notes Tonka bean Benzoin Styrax Patchouli Cedar",
    "notes": [
      "Sweet",
      "Spicy",
      "Gourmand",
      "Woody",
      "Creamy"
    ],
    "wear": "winter autumn day* night",
    "pricingConflict": false,
    "prices": {
      "2": 8.5,
      "5": 17.0,
      "10": 31.5,
      "30": 88.5
    },
    "price": 8.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "stephanehumbertlucas-venomincarnat",
    "brand": "Stéphane Humbert Lucas",
    "name": "Venom Incarnat",
    "categories": [
      "men"
    ],
    "description": "Top Notes Strawberry lCaramel Woodland strawberry Blackberry Heart Notes Raspberry Amber Cinnamon Virginia cedar Base Notes Patchouli Tonka bean Russian leather Vanilla",
    "notes": [
      "Fruity",
      "Sweet",
      "Leathery",
      "Gourmand",
      "Spicy"
    ],
    "wear": "winter autumn day* night",
    "pricingConflict": false,
    "prices": {
      "2": 8.5,
      "5": 17.0,
      "10": 31.5,
      "30": 88.5
    },
    "price": 8.5,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "superz-dominancegold",
    "brand": "Superz",
    "name": "Dominance Gold",
    "categories": [
      "men"
    ],
    "description": "Apple Lily of the valley Rose Tonka bean Vanilla Cinnamon Lemon Pineapple Pink pepper Cedarwood Grapefruit",
    "notes": [
      "Sweet",
      "Fruity",
      "Floral",
      "Creamy",
      "Synthetic"
    ],
    "wear": "winter spring summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.0,
      "10": 19.5,
      "30": 52.5
    },
    "price": 6.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "superz-endlesssea",
    "brand": "Superz",
    "name": "Endless Sea",
    "categories": [
      "men"
    ],
    "description": "Musky notes Musky Lemon Rose Marine notes Amber Bergamot Mossy notes Nagarmotha Patchouli Sandalwood",
    "notes": [
      "Aquatic",
      "Fresh",
      "Citrus",
      "Spicy",
      "Synthetic"
    ],
    "wear": "spring summer day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.5,
      "30": 55.5
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "superz-khamzatsmesh",
    "brand": "Superz",
    "name": "Khamzat - Smesh",
    "categories": [
      "men"
    ],
    "description": "Cashmere wood Tonka bean Vanilla Blood orange Cinnamon Mossy notes Neroli Amber Cedarwood Lavender Spices Vetiver",
    "notes": [
      "Spicy",
      "Sweet",
      "Earthy",
      "Woody",
      "Green"
    ],
    "wear": "winter spring autumn day* night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 13.0,
      "10": 23.5,
      "30": 65.0
    },
    "price": 6.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "superz-khamzatthewolf",
    "brand": "Superz",
    "name": "Khamzat - The Wolf",
    "categories": [
      "men"
    ],
    "description": "Raspberry Apple Lily of the valley Musk White blossoms Violet Cinnamon Leather Saffron Amber Cardamom Woody notes",
    "notes": [
      "Leathery",
      "Fruity",
      "Spicy",
      "Oriental",
      "Floral"
    ],
    "wear": "winter spring autumn day* night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 13.0,
      "10": 23.5,
      "30": 65.0
    },
    "price": 6.5,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "swissarabian-shaghafoudtonka",
    "brand": "Swiss Arabian",
    "name": "Shaghaf Oud Tonka",
    "categories": [
      "men"
    ],
    "description": "Top Notes Almond Heart Notes Tunisian orange blossom Turkish rose Cinnamon Base Notes Tonka bean Vanilla Amberwood",
    "notes": [
      "Sweet",
      "Gourmand",
      "Creamy",
      "Oriental",
      "Spicy"
    ],
    "wear": "winter spring autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.5,
      "10": 10.5,
      "30": 25.5
    },
    "price": 4.0,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "theirrymugler-amensilveredition",
    "brand": "Theirry Mugler",
    "name": "A*Men Silver Edition",
    "categories": [
      "men"
    ],
    "description": "Top notes are Lavender, Mint, Fruity and Spicy Notes, Coriander, Green Notes and Bergamot; middle notes are Caramel, Patchouli, Honey, Milk, Cedar, Jasmine and Lily-of-the-Valley; base notes are Coffee, Patchouli, Vanilla, Tonka Bean, Benzoin, Amber, Sandalwood and Musk.",
    "notes": [
      "Gourmand",
      "Sweet",
      "Fresh",
      "Oriental",
      "Spicy"
    ],
    "wear": "Fall/ Winter/ Night",
    "pricingConflict": false,
    "prices": {
      "2": 9.0,
      "5": 19.5,
      "10": 36.5,
      "30": 103.0
    },
    "price": 9.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "thierrymugler-ultrazest",
    "brand": "Thierry Mugler",
    "name": "Ultra Zest",
    "categories": [
      "men"
    ],
    "description": "Top notes are Blood Orange, Tangerine, Ginger and Mint; middle notes are Coffee, Cinnamon and Black Pepper; base notes are Patchouli, Vanilla and Tonka Bean.",
    "notes": [
      "Citrus",
      "Warm spicy",
      "Vanilla",
      "Fresh spicy",
      "Patchouli",
      "Sweet",
      "Coffee",
      "Fruity",
      "Woody",
      "Green"
    ],
    "wear": "spring summer fall* day",
    "pricingConflict": false,
    "prices": {
      "2": 13.5,
      "5": 30.0,
      "10": 57.0,
      "30": 164.5
    },
    "price": 13.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "tizianaterenzi-casanova",
    "brand": "Tiziana Terenzi",
    "name": "Casanova",
    "categories": [
      "men"
    ],
    "description": "Top notes orchid powder Bergamot jasmine Heart notes Ambergris Vanilla cardamom leather Guaiac wood myrrh pink pepper Base notes Amber Guaiac wood Tonka bean white musk cedar oakmoss Vetiver",
    "notes": [
      "Flowery",
      "Spicy",
      "Powdery",
      "Woody",
      "Sweet"
    ],
    "wear": "winter* spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 14.0,
      "5": 31.0,
      "10": 59.0,
      "30": 171.0
    },
    "price": 14.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "tizianaterenzi-goldroseoudh",
    "brand": "Tiziana Terenzi",
    "name": "Gold Rose Oudh",
    "categories": [
      "men"
    ],
    "description": "Top notes fir Bergamot embers sand Heart notes Bulgarian rose Patchouli black pepper Base notes Oud sandalwood Amber Honey musk",
    "notes": [
      "Woody",
      "Flowery",
      "Spicy",
      "Oriental",
      "Resinous"
    ],
    "wear": "winter autumn day* night",
    "pricingConflict": false,
    "prices": {
      "2": 10.0,
      "5": 21.0,
      "10": 39.0,
      "30": 111.0
    },
    "price": 10.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "tizianaterenzi-gumin",
    "brand": "Tiziana Terenzi",
    "name": "Gumin",
    "categories": [
      "men"
    ],
    "description": "Top notes are Mandarin Orange, Orange, Pineapple and Bergamot; middle notes are Ozonic notes, Amber, Violet, Jasmine and Rose; base notes are Musk, Sandalwood, Birch and Agarwood (Oud).",
    "notes": [
      "Citrus",
      "Sweet",
      "Fruity",
      "Powdery",
      "Woody",
      "Musky",
      "Ozonic",
      "Fresh spicy"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 14.0,
      "5": 31.0,
      "10": 59.0,
      "30": 171.0
    },
    "price": 14.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "tomford-blackorchid",
    "brand": "Tom Ford",
    "name": "Black Orchid",
    "categories": [
      "men"
    ],
    "description": "Top Notes Top Notes Black truffle Bitter orange Ylang-ylang Bergamot Heart Notes Black orchid Black plum Rum Base Notes Patchouli Vanilla",
    "notes": [
      "Floral",
      "Oriental",
      "Sweet",
      "Spicy",
      "Woody"
    ],
    "wear": "Winter/ Fall day Night",
    "pricingConflict": false,
    "prices": {
      "2": 8.0,
      "5": 16.5,
      "10": 30.0,
      "30": 84.0
    },
    "price": 8.0,
    "category": "men",
    "mood": "floral",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "tomford-neroliportofino",
    "brand": "Tom Ford",
    "name": "Neroli Portofino",
    "categories": [
      "men"
    ],
    "description": "Bergamot Orange blossom Mandarin orange Amber Vanilla",
    "notes": [
      "Fresh",
      "Citrus",
      "Floral",
      "Aquatic",
      "Green"
    ],
    "wear": "Summer day Night*",
    "pricingConflict": false,
    "prices": {
      "2": 12.5,
      "5": 28.0,
      "10": 53.0,
      "30": 153.5
    },
    "price": 12.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "tomford-noirextreme",
    "brand": "Tom Ford",
    "name": "Noir Extreme",
    "categories": [
      "men"
    ],
    "description": "Top Notes Cardamom Mandarin orange Nutmeg Saffron Neroli Heart Notes Kulfi Mastic Orange blossom Jasmine Rose Base Notes Vanilla Amber Sandalwood",
    "notes": [
      "Sweet",
      "Gourmand",
      "Spicy",
      "Oriental",
      "Creamy"
    ],
    "wear": "Winter/ Fall day Night",
    "pricingConflict": false,
    "prices": {
      "2": 8.0,
      "5": 16.5,
      "10": 30.0,
      "30": 84.0
    },
    "price": 8.0,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "tomford-ombreleather",
    "brand": "Tom Ford",
    "name": "Ombre Leather",
    "categories": [
      "men"
    ],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "tomford-oudwood",
    "brand": "Tom Ford",
    "name": "Oud Wood",
    "categories": [
      "men"
    ],
    "description": "Cardamom Oud Sandalwood Pink pepper Rosewood Amber Tonka bean Vetiver",
    "notes": [
      "Woody",
      "Spicy",
      "Oriental",
      "Resinous",
      "Smoky"
    ],
    "wear": "Winter/ Fall day Night",
    "pricingConflict": false,
    "prices": {
      "2": 12.5,
      "5": 28.0,
      "10": 53.0,
      "30": 153.5
    },
    "price": 12.5,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "tomford-soleilblanc",
    "brand": "Tom Ford",
    "name": "Soleil Blanc",
    "categories": [
      "men"
    ],
    "description": "Top Notes Bergamot Tuberose Ylang-ylang Jasmine Base Notes Coco de mer onka bean Benzoin",
    "notes": [
      "Creamy",
      "Sweet",
      "Floral",
      "Fresh",
      "Powdery"
    ],
    "wear": "Summer day Night*",
    "pricingConflict": false,
    "prices": {
      "2": 12.5,
      "5": 28.0,
      "10": 53.0,
      "30": 153.5
    },
    "price": 12.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "truereligion-pink",
    "brand": "True Religion",
    "name": "Pink",
    "categories": [
      "women"
    ],
    "description": "This light fruity floral scent features an amber-musk base and floral body with hints of lotus, peony, and magnolia. Finished with sweet pink lemon, watermelon, and white currant top notes.",
    "notes": [],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.5,
      "10": 8.5,
      "30": 19.0
    },
    "price": 3.5,
    "category": "women",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "valentino-valentinouomoborninromaintense",
    "brand": "Valentino",
    "name": "Valentino Uomo Born In Roma Intense",
    "categories": [
      "men"
    ],
    "description": "Top Notes Vanilla Ginger Heart Notes Provençal lavender Nutmeg Base Notes Haitian vetiver",
    "notes": [
      "Sweet",
      "Synthetic",
      "Fresh",
      "Fruity",
      "Woody"
    ],
    "wear": "Fall/Winter/spring Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.5,
      "10": 22.5,
      "30": 62.0
    },
    "price": 6.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "valentino-valentinouomointense",
    "brand": "Valentino",
    "name": "Valentino Uomo Intense",
    "categories": [
      "men"
    ],
    "description": "Top Notes Nutmeg Mandarin orange Heart Notes Sage Juniper berry Base Notes Iris VanillaLeather Patchouli Tonka bean",
    "notes": [
      "Powdery",
      "Sweet",
      "Leathery",
      "Spicy",
      "Creamy"
    ],
    "wear": "Fall/Winter/Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.0,
      "10": 19.5,
      "30": 52.5
    },
    "price": 6.0,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "vancleefarpels-midnightinparis",
    "brand": "Van Cleef & Arpels",
    "name": "Midnight in Paris",
    "categories": [
      "men"
    ],
    "description": "Top Notes Bergamot Lemon Rosemary Heart Notes Leather Maté tea Lily of the valley Base Notes Tonka bean Amber Frankincense",
    "notes": [
      "Sweet",
      "Powdery",
      "Spicy",
      "Oriental",
      "Leathery"
    ],
    "wear": "Fall/ Winter Night",
    "pricingConflict": false,
    "prices": {
      "2": 11.5,
      "5": 25.0,
      "10": 47.0,
      "30": 134.5
    },
    "price": 11.5,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "verawang-verawang",
    "brand": "Vera Wang",
    "name": "Vera Wang",
    "categories": [
      "men"
    ],
    "description": "Top Notes Yuzu Mandarin orange leaf Heart Notes Nutmeg Aniseed Leather Base Notes Sandalwood Tobacco",
    "notes": [
      "Spicy",
      "Woody",
      "Sweet",
      "Fresh",
      "Citrus"
    ],
    "wear": "Spring/ Fall/ Winter/ Night",
    "pricingConflict": false,
    "prices": {
      "2": 12.5,
      "5": 27.5,
      "10": 52.0,
      "30": 150.5
    },
    "price": 12.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-babybluejeans",
    "brand": "Versace",
    "name": "Baby Blue Jeans",
    "categories": [
      "men"
    ],
    "description": "Top Notes Bergamo Lime Mandarin orange Heart Notes Galbanum Iris Rosemary Base Notes Cedarwood Musk Patchouli Sandalwood Vanilla",
    "notes": [
      "Citrus",
      "Sweet",
      "Woody",
      "Fresh",
      "Spicy"
    ],
    "wear": "Spring/Summer/Fall Day",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 9.0,
      "10": 15.5,
      "30": 39.5
    },
    "price": 5.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-bluejeans",
    "brand": "Versace",
    "name": "Blue Jeans",
    "categories": [
      "men"
    ],
    "description": "Top Notes Citrus fruits Aniseed Bergamot Rosewood Basil Juniper Heart Notes Heliotrope Lavender Carnation Geranium Jasmine Lily of the valley Sage Fir Rose Base Notes Musk Tonka beanT Amber Cedar Iris Patchouli Sandalwood Vanilla Vetiver",
    "notes": [
      "Fresh",
      "Citrus",
      "Sweet",
      "Synthetic",
      "Floral"
    ],
    "wear": "Spring/Summer/Fall Day",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.5,
      "10": 10.5,
      "30": 25.5
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-dylanblue",
    "brand": "Versace",
    "name": "Dylan Blue",
    "categories": [
      "women"
    ],
    "description": "Top notes: black currant sorbet, Granny Smith apple, clover, forget-me-not, Shisolia Heart: Eglantine rose, Petalia, Rosyfolia, jasmine, ice infusion of peach Base: patchouli coeur, styrax, white smooth woods, musk",
    "notes": [
      "Fruity",
      "Floral",
      "Green",
      "Rose",
      "Fresh",
      "Woody",
      "Sweet",
      "Musky"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.0,
      "10": 21.5,
      "30": 58.5
    },
    "price": 6.5,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-dylanpurple",
    "brand": "Versace",
    "name": "Dylan Purple",
    "categories": [
      "women"
    ],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "women",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-dylanturquoise",
    "brand": "Versace",
    "name": "Dylan Turquoise",
    "categories": [
      "women"
    ],
    "description": "Top notes: mandarin, primofiore lemon, pink pepper Heart: black currant bud, jasmine, freesia, guava Base: cedar, musk, Clearwood",
    "notes": [
      "Citrus",
      "Woody",
      "Fruity",
      "Musky",
      "Soft spicy",
      "Aromatic",
      "Floral",
      "Fresh",
      "Powdery",
      "Tropical"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.0,
      "10": 17.0,
      "30": 44.5
    },
    "price": 5.5,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-erosenergy",
    "brand": "Versace",
    "name": "Eros Energy",
    "categories": [
      "men"
    ],
    "description": "Grapefruit Italian bergamot Italian blood orange Orpur® Italian green mandarin Orpur® Italian lemon Peruvian lime Heart Notes Ambrofix Pink pepper CO2 Orpur Blackcurrant Base Notes Base Notes Indonesian patchouli Orpur® Musk Oakmoss",
    "notes": [
      "Citrus",
      "Fresh",
      "Fruity",
      "Synthetic",
      "Sweet"
    ],
    "wear": "Spring/Summer/Day",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.5,
      "10": 20.5,
      "30": 55.5
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-erosflame",
    "brand": "Versace",
    "name": "Eros Flame",
    "categories": [
      "men"
    ],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-erosparfum",
    "brand": "Versace",
    "name": "Eros Parfum",
    "categories": [
      "men"
    ],
    "description": "Top Notes Green apple Mint Italian lemon Heart Notes Venezuelan tonka bean Ambroxan Geranium Base Notes Bourbon vanilla Atlas cedar Virginia cedar Oakmoss Vetiver",
    "notes": [
      "Sweet",
      "Fresh",
      "Synthetic",
      "Fruity",
      "Citrus"
    ],
    "wear": "Winter/Spring/Summer /Fall Day/Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 13.0,
      "10": 23.5,
      "30": 65.0
    },
    "price": 6.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-erospourfemmeeaudeparfum",
    "brand": "Versace",
    "name": "Eros Pour Femme Eau de Parfum",
    "categories": [
      "women"
    ],
    "description": "Explore this fragrance in the Ynotdecants collection.",
    "notes": [],
    "wear": "",
    "pricingConflict": false,
    "prices": {},
    "price": null,
    "category": "women",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-thedreamer",
    "brand": "Versace",
    "name": "The Dreamer",
    "categories": [
      "men"
    ],
    "description": "Top Notes Tarragon Artemisia Juniper Heart Notes Heart Notes Iris Flax Lily Base Notes Base Notes Tobacco flower Amber",
    "notes": [
      "Floral",
      "Sweet",
      "Spicy",
      "Fresh",
      "Powdery"
    ],
    "wear": "Winter/Spring/Fall Day",
    "pricingConflict": false,
    "prices": {
      "2": 4.0,
      "5": 6.5,
      "10": 10.0,
      "30": 24.0
    },
    "price": 4.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-versacemaneaufraiche",
    "brand": "Versace",
    "name": "Versace Man Eau Fraîche",
    "categories": [
      "men"
    ],
    "description": "Top Notes Starfruit White lemon Rosewood Heart Notes Clary sage Tarragon Cedar leaf Base Notes Musk Amber Sycamore wood",
    "notes": [
      "Fresh",
      "Citrus",
      "Aquatic",
      "Synthetic",
      "Fruity"
    ],
    "wear": "Spring/Summer/Day",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.5,
      "30": 49.0
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-versacepourhomme",
    "brand": "Versace",
    "name": "Versace pour Homme",
    "categories": [
      "men"
    ],
    "description": "Bergamot Bitter orange leaf Lemon Neroli Heart Notes Cedarwood Clary sage Geranium Hyacinth Base Notes Base Notes Mineral amber Musk Tonka bean Oud",
    "notes": [
      "Fresh",
      "Citrus",
      "Aquatic",
      "Synthetic",
      "Floral"
    ],
    "wear": "Spring/Summer/Day",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.5,
      "30": 49.0
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-versacepourhommedylanblue",
    "brand": "Versace",
    "name": "Versace pour Homme Dylan Blue",
    "categories": [
      "men"
    ],
    "description": "Top notes Calabrian bergamot Water Notes Grapefruit Fig Leaf Middle notes Ambroxan Black Pepper Patchouli Violet Leaf Papyrus Base notes Incense Musk Tonka Bean Saffron",
    "notes": [
      "Amber",
      "Citrus",
      "Fresh spicy",
      "Musky",
      "Aquatic",
      "Warm spicy",
      "Woody",
      "Fresh",
      "Aromatic",
      "Smoky"
    ],
    "wear": "Spring/Summer /Fall Day/Night",
    "pricingConflict": false,
    "prices": {
      "2": 5.5,
      "5": 10.5,
      "10": 18.5,
      "30": 49.0
    },
    "price": 5.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "versace-versacepourhommeoudnoir",
    "brand": "Versace",
    "name": "Versace pour Homme Oud Noir",
    "categories": [
      "men"
    ],
    "description": "Pepper Bitter Neroli Heart Notes Heart Notes Frankincense Cardamom Saffron Base Notes Base Notes Oud Patchouli Leatherwood",
    "notes": [
      "Woody",
      "Spicy",
      "Oriental",
      "Smoky",
      "Resinous"
    ],
    "wear": "winter/autumn day*/night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 14.0,
      "10": 25.5,
      "30": 69.5
    },
    "price": 7.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "viktorrolf-antidote",
    "brand": "Viktor & Rolf",
    "name": "Antidote",
    "categories": [
      "men"
    ],
    "description": "Cardamom Mint Bergamot Grapefruit Mandarin orange Heart Notes Lavender Cinnamon Nutmeg Orange blossom Violet Freesia Geranium Base Notes Cedar Tonka bean Vanilla Amber Iris Labdanum Oakmoss Patchouli Gaiac wood Sandalwood White musk Leather",
    "notes": [
      "Spicy",
      "Sweet",
      "Floral",
      "Woody",
      "Fresh"
    ],
    "wear": "Winter/Spring/Fall Day/Night",
    "pricingConflict": false,
    "prices": {
      "2": 26.0,
      "5": 61.5,
      "10": 120.5,
      "30": 355.5
    },
    "price": 26.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "viktorrolf-spicebomb",
    "brand": "Viktor & Rolf",
    "name": "Spicebomb",
    "categories": [
      "men"
    ],
    "description": "Top Notes Black pepper Pimento Grapefruit Heart Notes Cinnamon Cumin Saffron Base Notes Vanilla Tobacco Amber Cistus",
    "notes": [
      "Spicy",
      "Sweet",
      "Oriental",
      "Gourmand",
      "Woody"
    ],
    "wear": "Winter/Fall/Night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 11.0,
      "10": 19.5,
      "30": 52.5
    },
    "price": 6.0,
    "category": "men",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "viktorrolf-spicebombextreme",
    "brand": "Viktor & Rolf",
    "name": "Spicebomb Extreme",
    "categories": [
      "men"
    ],
    "description": "Top Notes Black pepper Pimento Grapefruit Heart Notes Heart Notes Cinnamon Cumin Saffron Base Notes Base Notes Vanilla Tobacco Amberr Cistus",
    "notes": [
      "Fresh",
      "Sweet",
      "Synthetic",
      "Spicy",
      "Powdery"
    ],
    "wear": "winter/autumn/night",
    "pricingConflict": false,
    "prices": {
      "2": 6.0,
      "5": 12.0,
      "10": 21.0,
      "30": 57.0
    },
    "price": 6.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "vilhelmparfumerie-mangoskineaudeparfum",
    "brand": "Vilhelm Parfumerie",
    "name": "Mango Skin Eau de Parfum",
    "categories": [
      "women"
    ],
    "description": "Top notes are Mango, Blackberry and Black Pepper; middle notes are Orris, Jasmine and Lotus; base notes are Vanilla, Icing pink and Patchouli.",
    "notes": [
      "Fruity",
      "Tropical",
      "Sweet",
      "Terpenic",
      "Vanilla",
      "Woody"
    ],
    "wear": "spring summer day",
    "pricingConflict": false,
    "prices": {
      "2": 9.0,
      "5": 19.5,
      "10": 36.0,
      "30": 101.5
    },
    "price": 9.0,
    "category": "women",
    "mood": "woody",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "xerjoff-40knots",
    "brand": "Xerjoff",
    "name": "40 Knots",
    "categories": [
      "men"
    ],
    "description": "top notes featuring foliage and salt minerals. The heart of the fragrance reveals marine and woody elements, creating a harmonious balance that is both captivating and soothing. Finally, the base notes of cedar wood provide a warm and grounding finish, leaving a lasting impression that is both sophisticated and alluring.",
    "notes": [
      "Woody",
      "Marine",
      "Salty",
      "Green",
      "Aromatic"
    ],
    "wear": "winter* spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 10.5,
      "5": 22.5,
      "10": 42.5,
      "30": 122.0
    },
    "price": 10.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "xerjoff-erbagold",
    "brand": "Xerjoff",
    "name": "Erba Gold",
    "categories": [
      "men"
    ],
    "description": "Top Notes Amalfi lemon Brazilian orange Calabrian bergamot Ginger Heart Notes Melon Green apple Pear eClove Guatemala cardamom Madagascan cinnamon Base Notes White musk Amber Bourbon vanilla Woods",
    "notes": [
      "Fruity",
      "Sweet",
      "Citrus",
      "Fresh",
      "Synthetic"
    ],
    "wear": "spring summer day night",
    "pricingConflict": false,
    "prices": {
      "2": 10.5,
      "5": 22.5,
      "10": 42.5,
      "30": 122.0
    },
    "price": 10.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "xerjoff-naxos",
    "brand": "Xerjoff",
    "name": "Naxos",
    "categories": [
      "men"
    ],
    "description": "Top Notes Lavender Bergamo Lemon Heart Notes Honey Cashmere Cinnamon Jasmine sambac Base Notes Base Notes Tobacco Tonka bean Vanilla",
    "notes": [
      "Sweet",
      "Spicy",
      "Gourmand",
      "Creamy",
      "Citrus"
    ],
    "wear": "Fall/Winter/spring*/Day*/Night",
    "pricingConflict": false,
    "prices": {
      "2": 9.0,
      "5": 19.0,
      "10": 35.5,
      "30": 99.5
    },
    "price": 9.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "ysl-babycatyvessaintlaurent",
    "brand": "YSL",
    "name": "Babycat Yves Saint Laurent",
    "categories": [
      "men"
    ],
    "description": "Top notes are Black and Pink Pepper, Black Pepper, elemi and Pink Pepper; middle notes are Olibanum and Saffron; base notes are Bourbon Vanilla, Suede and Cedar.",
    "notes": [
      "Vanilla",
      "Fresh spicy",
      "Warm spicy",
      "Leather",
      "Powdery",
      "Amber",
      "Musky",
      "Aromatic",
      "Balsamic",
      "Soft spicy"
    ],
    "wear": "winter fall day* night",
    "pricingConflict": false,
    "prices": {
      "2": 10.0,
      "5": 21.5,
      "10": 40.5,
      "30": 115.5
    },
    "price": 10.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "ysl-tuxedoyvessaintlaurent",
    "brand": "YSL",
    "name": "Tuxedo Yves Saint Laurent",
    "categories": [
      "men"
    ],
    "description": "Top notes are Violet Leaf, Coriander and Bergamot; middle notes are Rose, Black Pepper and Lily-of-the-Valley; base notes are Patchouli, Bourbon Vanilla and Ambergris.",
    "notes": [
      "Patchouli",
      "Vanilla",
      "Amber",
      "Ozonic",
      "Fresh spicy",
      "Warm spicy",
      "Balsamic",
      "Woody",
      "Rose",
      "Aquatic"
    ],
    "wear": "winter spring summer* fall day* night",
    "pricingConflict": false,
    "prices": {
      "2": 10.0,
      "5": 21.5,
      "10": 40.5,
      "30": 115.5
    },
    "price": 10.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "ysl-ytheyvessaintlaurentperfume",
    "brand": "YSL",
    "name": "Y The Yves Saint Laurent Perfume",
    "categories": [
      "men"
    ],
    "description": "Top Notes Apple Aldehydes Bergamot Ginger Elemi resin Heart Notes Juniper berry Lavender Sage Geranium absolute Base Notes Operanide® Vetiver Frankincense Tonka bean",
    "notes": [
      "Fresh",
      "Sweet",
      "Synthetic",
      "Fruity",
      "Aquatic"
    ],
    "wear": "winter spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 6.5,
      "5": 12.5,
      "10": 22.5,
      "30": 62.0
    },
    "price": 6.5,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "yvesdesistelle-thallium",
    "brand": "Yves de Sistelle",
    "name": "Thallium",
    "categories": [
      "men"
    ],
    "description": "Top note pineapple Bergamot Heart notes lavender Apple jasmine Base notes Amber musk Patchouli cedar",
    "notes": [
      "Sweet",
      "Fresh",
      "Synthetic",
      "Fruity",
      "Flowery"
    ],
    "wear": "winter spring summer autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 3.0,
      "5": 4.5,
      "10": 6.5,
      "30": 13.0
    },
    "price": 3.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "yvesdesistelle-thalliumblack",
    "brand": "Yves de Sistelle",
    "name": "Thallium Black",
    "categories": [
      "men"
    ],
    "description": "Top notes Apple Bergamot cardamom Heart notes basil nutmeg plum Rose geranium sage Base notes Amber musk Patchouli Tonka bean",
    "notes": [
      "Sweet",
      "Powdery",
      "Fruity",
      "Spicy",
      "Synthetic"
    ],
    "wear": "winter spring* summer* autumn day night",
    "pricingConflict": false,
    "prices": {
      "2": 3.5,
      "5": 5.0,
      "10": 7.0,
      "30": 14.5
    },
    "price": 3.5,
    "category": "men",
    "mood": "warm",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "yvessaintlaurent-libreeaudeparfum",
    "brand": "Yves Saint Laurent",
    "name": "Libre Eau de Parfum",
    "categories": [
      "women"
    ],
    "description": "Top notes are Lavender, Mandarin Orange, Black Currant and Petitgrain; middle notes are Lavender, Orange Blossom and Jasmine; base notes are Madagascar Vanilla, Musk, Ambergris and Cedar.",
    "notes": [
      "White floral",
      "Lavender",
      "Vanilla",
      "Citrus",
      "Powdery",
      "Sweet",
      "Aromatic",
      "Animalic",
      "Musky",
      "Fresh spicy"
    ],
    "wear": "winter spring summer fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 7.0,
      "5": 13.5,
      "10": 24.0,
      "30": 66.5
    },
    "price": 7.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "zara-violetblossom",
    "brand": "Zara",
    "name": "Violet Blossom",
    "categories": [
      "women"
    ],
    "description": "Top note is Cherry Blossom; middle note is Magnolia; base note is Tonka Bean.",
    "notes": [
      "Floral",
      "Vanilla",
      "Amber",
      "Fresh",
      "Sweet",
      "Fruity",
      "Aromatic"
    ],
    "wear": "winter spring fall day night",
    "pricingConflict": false,
    "prices": {
      "2": 5.0,
      "5": 9.0,
      "10": 15.5,
      "30": 39.5
    },
    "price": 5.0,
    "category": "women",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  },
  {
    "id": "zirh-corduroy",
    "brand": "Zirh",
    "name": "Corduroy",
    "categories": [
      "men"
    ],
    "description": "Top Notes Coral Grapefruit Heart Notes Cardamom Cinnamon Davana Lavender Suede Mandarin orange Base Notes Vanilla Tonka bean Sandalwood Virginia cedar Cashmere wood Gaiac wood",
    "notes": [
      "Woody",
      "Spicy",
      "Sweet",
      "Oriental",
      "Fresh"
    ],
    "wear": "Fall/ Winter/ spring Day/ Night",
    "pricingConflict": false,
    "prices": {
      "2": 3.0,
      "5": 4.5,
      "10": 6.5,
      "30": 13.0
    },
    "price": 3.0,
    "category": "men",
    "mood": "fresh",
    "tag": "YNOTDECANTS"
  }
];
