// navigation Data
export const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Best Selling",
    url: "/best-selling",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Events",
    url: "/events",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
];

// branding data
export const brandingData = [
  {
    id: 1,
    title: "Free Shipping",
    Description: "From all orders over 100$",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1H5.63636V24.1818H35"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"></path>
        <path
          d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"></path>
        <path
          d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"></path>
        <path
          d="M34.9982 1H11.8164V18H34.9982V1Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"></path>
        <path
          d="M11.8164 7.18164H34.9982"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Daily Surprise Offers",
    Description: "Save up to 25% off",
    icon: (
      <svg
        width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"></path>
        <path
          d="M30.7 2L29.5 10.85L20.5 9.65"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Affortable Prices",
    Description: "Get Factory direct price",
    icon: (
      <svg
        width="32"
        height="35"
        viewBox="0 0 32 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"></path>
        <path
          d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"></path>
        <path
          d="M16 28V22"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"></path>
        <path
          d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"></path>
        <path
          d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Secure Payments",
    Description: "100% protected payments",
    icon: (
      <svg
        width="32"
        height="38"
        viewBox="0 0 32 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"></path>
        <path
          d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"></path>
        <path
          d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"></path>
      </svg>
    ),
  },
];

// solar equipment categories data with live photos
export const categoriesData = [
  {
    id: 1,
    title: "Solar Panels",
    subTitle: "",
    image_Url: "https://images.unsplash.com/photo-1509395176047-4a66953fd231", // live solar panel field :contentReference[oaicite:3]{index=3}
  },
  {
    id: 2,
    title: "Solar Batteries",
    subTitle: "",
    image_Url: "https://paradisesolarenergy.com/images/home-solar-batteries.jpg", // real installation :contentReference[oaicite:4]{index=4}
  },
  {
    id: 3,
    title: "Inverters",
    subTitle: "",
    image_Url: "https://solarquotes.com.au/images/battery-inverter-install.jpg", // wall-mounted hybrid inverter :contentReference[oaicite:5]{index=5}
  },
  {
    id: 4,
    title: "Charge Controllers",
    subTitle: "",
    image_Url: "https://paradisesolarenergy.com/images/charge-controller-photo.jpg", // sample controller image :contentReference[oaicite:6]{index=6}
  },
  {
    id: 5,
    title: "Solar Water Pumps",
    subTitle: "",
    image_Url:
      "https://5.imimg.com/data5/XC/BS/MY-39257128/solar-water-pump-500x500.jpg",
  },
  {
    id: 6,
    title: "Mounting Structures",
    subTitle: "",
    image_Url:
      "https://www.gogreensolar.com/cdn/shop/products/roof-mounting-kit_1200x1200.jpg?v=1614388011",
  },
  {
    id: 7,
    title: "Solar Street Lights",
    subTitle: "",
    image_Url:
      "https://www.researchdive.com/blogImages/1671532069_solar-street-lighting-system.jpg",
  },
  {
    id: 8,
    title: "Portable Solar Kits",
    subTitle: "",
    image_Url:
      "https://cdn.thewirecutter.com/wp-content/media/2022/06/portable-solar-panels-2048px-0396.jpg",
  },
];

// solar equipment product data
export const productData = [
  {
    id: 1,
    category: "Solar Panels",
    name: "Maxeon 3 440 W Solar Panel",
    description:
      "High-efficiency monocrystalline panel (~22.8%) with integrated micro‑inverter compatibility. Premium long-term performance backed by a 40‑year product warranty and 25‑year performance guarantee.",
    image_Url: [
      { public_id: "maxeon3-1", url: "https://example.com/maxeon3-panel.jpg" }
    ],
    shop: {
      name: "Maxeon Solar Tech",
      shop_avatar: { public_id: "maxeon", url: "https://example.com/maxeon-logo.png" },
      ratings: 4.8
    },
    price: 1870,            // 440W × $4.25/W
    discount_price: 1750,
    rating: 4.9,
    total_sell: 120,
    stock: 30
  },
  {
    id: 2,
    category: "Solar Panels",
    name: "Qcells Q.PEAK DUO ML-G10+ 435 W",
    description:
      "Cost‑effective dual‑cell monocrystalline panel delivering excellent performance and a solid 25‑year warranty. Widely used in residential rooftops.",
    image_Url: [
      { public_id: "qcells-1", url: "https://example.com/qcells-qpeak.jpg" }
    ],
    shop: {
      name: "Qcells Official",
      shop_avatar: { public_id: "qcells", url: "https://example.com/qcells-logo.png" },
      ratings: 4.7
    },
    price: 1522,            // 435 W × $3.50/W (≈)
    discount_price: 1450,
    rating: 4.8,
    total_sell: 200,
    stock: 50
  },
  {
    id: 3,
    category: "Solar Batteries",
    name: "Tesla Powerwall 3 (13.5 kWh)",
    description:
      "Integrated lithium‑ion home storage system with DC‑to‑AC inverter, designed for backup power, self‑consumption & load shifting.",
    image_Url: [
      { public_id: "powerwall3", url: "https://example.com/tesla-powerwall3.jpg" }
    ],
    shop: {
      name: "Tesla Energy",
      shop_avatar: { public_id: "tesla", url: "https://example.com/tesla-logo.png" },
      ratings: 4.6
    },
    price: 11500,           // approximate retail install price
    discount_price: 11000,
    rating: 4.7,
    total_sell: 500,
    stock: 15
  },
  {
    id: 4,
    category: "Inverters & Hybrid Systems",
    name: "Enphase IQ Battery 10.08 kWh + IQ8 Microinverter",
    description:
      "Modular LFP battery pack with integrated IQ8 microinverters allowing seamless backup & intelligent energy management with IQ Gateway.",
    image_Url: [
      { public_id: "enphase10", url: "https://example.com/enphase-iqbattery.jpg" }
    ],
    shop: {
      name: "Enphase Energy",
      shop_avatar: { public_id: "enphase", url: "https://example.com/enphase-logo.png" },
      ratings: 4.5
    },
    price: 11800,           // estimated system cost
    discount_price: 11300,
    rating: 4.6,
    total_sell: 250,
    stock: 20
  },
  {
    id: 5,
    category: "Hybrid Battery Systems",
    name: "EcoFlow Ocean Pro 10 kWh Home Battery System",
    description:
      "Whole‑home energy storage solution expandable up to 80 kWh, with 24 kW output, smart home panel, rapid switching & flood‑resistant UL‑9540B certification.",
    image_Url: [
      { public_id: "oceanpro", url: "https://example.com/ecoflow-oceanpro.jpg" }
    ],
    shop: {
      name: "EcoFlow",
      shop_avatar: { public_id: "ecoflow", url: "https://example.com/ecoflow-logo.png" },
      ratings: 4.7
    },
    price: 10000,
    discount_price: 9800,
    rating: 4.8,
    total_sell: 100,
    stock: 10
  },
 {
    id: 4,
    category: "Inverters",
    name: "SMA Sunny Boy 7.7-US Solar Inverter",
    description:
      "7.7 kW string inverter ideal for residential rooftop solar. Renowned for reliability, easy setup, integrated monitoring via Sunny Portal, and a 10‑year warranty.",
    image_Url: [
      {
        public_id: "sma-sunnyboy-7.7-us",
        url: "https://example.com/images/sma-sunnyboy-7.7-us.jpg",
      }
    ],
    shop: {
      name: "SMA America",
      shop_avatar: {
        public_id: "sma-logo",
        url: "https://example.com/logos/sma.png",
      },
      ratings: 4.7
    },
    price: 1400,
    discount_price: 1299,
    rating: 4.8,
    total_sell: 150,
    stock: 20,
  },

  {
    id: 5,
    category: "Solar Batteries",
    name: "LG Chem RESU10H Prime 9.8 kWh Home Battery",
    description:
      "High-performance lithium-ion home battery with 9.8 kWh usable capacity. Compact, wall-mountable, compatible with hybrid systems, and covered by a 10‑year parts warranty.",
    image_Url: [
      {
        public_id: "lg-resu10h",
        url: "https://example.com/images/lg-resu10h.jpg",
      }
    ],
    shop: {
      name: "LG Energy Solution",
      shop_avatar: {
        public_id: "lg-logo",
        url: "https://example.com/logos/lg.png",
      },
      ratings: 4.6
    },
    price: 8000,
    discount_price: 7600,
    rating: 4.7,
    total_sell: 90,
    stock: 8,
  },

  {
    id: 6,
    category: "Mounting Structures",
    name: "IronRidge XR100 Roof Mount System",
    description:
      "Durable aluminum mounting system suitable for asphalt shingle roofs. Provides strong structural integrity and easy panel layout flexibility.",
    image_Url: [
      {
        public_id: "ironridge-xr100",
        url: "https://example.com/images/ironridge-xr100.jpg",
      }
    ],
    shop: {
      name: "IronRidge",
      shop_avatar: {
        public_id: "ironridge-logo",
        url: "https://example.com/logos/ironridge.png",
      },
      ratings: 4.9
    },
    price: 300,
    discount_price: 279,
    rating: 4.8,
    total_sell: 200,
    stock: 50,
  },

  {
    id: 7,
    category: "Portable Solar Kits",
    name: "Goal Zero Yeti 1000X & Nomad 100 Kit",
    description:
      "Portable power station (1 kWh) with a foldable 100 W solar panel. Ideal for camping, emergency outages, and off-grid adventures. Includes MPPT controller and expandable battery.",
    image_Url: [
      {
        public_id: "goalzero-yeti-nomad",
        url: "https://example.com/images/goalzero-yeti1000x-nomad100.jpg",
      }
    ],
    shop: {
      name: "Goal Zero",
      shop_avatar: {
        public_id: "goalzero-logo",
        url: "https://example.com/logos/goalzero.png",
      },
      ratings: 4.5
    },
    price: 1600,
    discount_price: 1499,
    rating: 4.6,
    total_sell: 120,
    stock: 12,
  },

  // Assuming previous IDs 1–7 from earlier data...

  // Solar Panels (IDs 8–12)
  {
    id: 8,
    category: "Solar Panels",
    name: "Maxeon 3 440W Monocrystalline Solar Panel",
    description:
      "Top‑tier panel with 22.8% efficiency, back-contact cells, 40‑year product warranty & industry-leading degradation rate.",
    image_Url: [{ public_id: "maxeon-440w", url: "https://example.com/maxeon-440w.jpg" }],
    shop: { name: "Maxeon Solar Technologies", shop_avatar: { public_id: "maxeon-logo", url: "https://example.com/maxeon-logo.png" }, ratings: 4.9 },
    price: 350, discount_price: 330, rating: 4.8, total_sell: 500, stock: 100
  },
  {
    id: 9,
    category: "Solar Panels",
    name: "SunPower Maxeon 3 415W Residential Panel",
    description:
      "High-reliability 415 W panel for homes, 112-cell IBC design, ultra-low degradation, extended warranty.",
    image_Url: [{ public_id: "sunpower-415", url: "https://example.com/sunpower-415.jpg" }],
    shop: { name: "SunPower", shop_avatar: { public_id: "sunpower-logo", url: "https://example.com/sunpower-logo.png" }, ratings: 4.8 },
    price: 320, discount_price: 300, rating: 4.7, total_sell: 430, stock: 80
  },
  {
    id: 10,
    category: "Solar Panels",
    name: "JA Solar A-Series 540W Commercial Panel",
    description:
      "Reliable commercial-grade 540 W panel, 21% efficiency, robust frame, ideal for large rooftop or ground-mount installations.",
    image_Url: [{ public_id: "ja-540w", url: "https://example.com/ja-540w.jpg" }],
    shop: { name: "JA Solar", shop_avatar: { public_id: "ja-logo", url: "https://example.com/ja-logo.png" }, ratings: 4.6 },
    price: 420, discount_price: 400, rating: 4.6, total_sell: 200, stock: 50
  },
  {
    id: 11,
    category: "Solar Panels",
    name: "REC Alpha Pure‑R 415W Panel",
    description:
      "High-performance 415 W N‑type panel with half-cut cell design for better shade tolerance and low temperature loss.",
    image_Url: [{ public_id: "rec-415", url: "https://example.com/rec-415.jpg" }],
    shop: { name: "REC Solar", shop_avatar: { public_id: "rec-logo", url: "https://example.com/rec-logo.png" }, ratings: 4.7 },
    price: 340, discount_price: 320, rating: 4.7, total_sell: 260, stock: 70
  },
  {
    id: 12,
    category: "Solar Panels",
    name: "Qcells Q.PEAK DUO G10+ 435W Panel",
    description:
      "Dual-cell mono 435 W panel with excellent low-light performance and a 25‑year warranty for residential rooftops.",
    image_Url: [{ public_id: "qcells-435", url: "https://example.com/qcells-435.jpg" }],
    shop: { name: "Qcells", shop_avatar: { public_id: "qcells-logo", url: "https://example.com/qcells-logo.png" }, ratings: 4.8 },
    price: 310, discount_price: 295, rating: 4.8, total_sell: 340, stock: 90
  },

  // Solar Batteries (IDs 13–17)
  {
    id: 13,
    category: "Solar Batteries",
    name: "Tesla Powerwall 3 13.5 kWh",
    description:
      "All‑in‑one home battery with built-in inverter, 11.5 kW continuous output, expandable & integrates with Tesla solar systems.",
    image_Url: [{ public_id: "pw3", url: "https://example.com/powerwall3.jpg" }],
    shop: { name: "Tesla Energy", shop_avatar: { public_id: "tesla-logo", url: "https://example.com/tesla-logo.png" }, ratings: 4.7 },
    price: 7300, discount_price: 7000, rating: 4.8, total_sell: 1500, stock: 30
  },
  {
    id: 14,
    category: "Solar Batteries",
    name: "LG Chem RESU10H Prime 9.8 kWh",
    description:
      "Compact wall‑mounted lithium-ion battery offering 9.8 kWh usable storage and compatibility with multiple hybrid inverters.",
    image_Url: [{ public_id: "lg-resu10h", url: "https://example.com/lg-resu10h.jpg" }],
    shop: { name: "LG Energy Solution", shop_avatar: { public_id: "lg-logo", url: "https://example.com/lg-logo.png" }, ratings: 4.6 },
    price: 8000, discount_price: 7600, rating: 4.7, total_sell: 350, stock: 25
  },
  {
    id: 15,
    category: "Solar Batteries",
    name: "Enphase IQ Battery 10 kWh",
    description:
      "Modular LFP battery with integrated IQ8 microinverter, scalable backup storage and intelligent energy management.",
    image_Url: [{ public_id: "enphase-10", url: "https://example.com/enphase-10.jpg" }],
    shop: { name: "Enphase Energy", shop_avatar: { public_id: "enphase-logo", url: "https://example.com/enphase-logo.png" }, ratings: 4.5 },
    price: 11500, discount_price: 11000, rating: 4.6, total_sell: 400, stock: 18
  },
  {
    id: 16,
    category: "Solar Batteries",
    name: "EcoFlow Ocean Pro 10 kWh",
    description:
      "Expandable whole-home LiFePO4 battery, 24 kW output capability, flood-resistant, smart home integration.",
    image_Url: [{ public_id: "ecoflow-ocean", url: "https://example.com/ecoflow-ocean.jpg" }],
    shop: { name: "EcoFlow", shop_avatar: { public_id: "ecoflow-logo", url: "https://example.com/ecoflow-logo.png" }, ratings: 4.7 },
    price: 10000, discount_price: 9700, rating: 4.8, total_sell: 200, stock: 12
  },
  {
    id: 17,
    category: "Solar Batteries",
    name: "Sonnen Eco 10 Home Battery",
    description:
      "German-made 10 kWh battery with smart energy management, long lifecycle, integrated software & virtual power plant support.",
    image_Url: [{ public_id: "sonnen-eco10", url: "https://example.com/sonnen-eco10.jpg" }],
    shop: { name: "Sonnen", shop_avatar: { public_id: "sonnen-logo", url: "https://example.com/sonnen-logo.png" }, ratings: 4.6 },
    price: 12000, discount_price: 11700, rating: 4.7, total_sell: 150, stock: 10
  },

  // Inverters (IDs 18–22)
  {
    id: 18,
    category: "Inverters",
    name: "SMA Sunny Boy 7.7‑US String Inverter",
    description:
      "Reliable 7.7 kW residential inverter, integrated monitoring via Sunny Portal and 10‑year warranty.",
    image_Url: [{ public_id: "sma-77us", url: "https://example.com/sma-77us.jpg" }],
    shop: { name: "SMA America", shop_avatar: { public_id: "sma-logo", url: "https://example.com/sma-logo.png" }, ratings: 4.7 },
    price: 1400, discount_price: 1299, rating: 4.8, total_sell: 150, stock: 20
  },
  {
    id: 19,
    category: "Inverters",
    name: "SolarEdge HD‑Wave 7.6 kW Inverter",
    description:
      "High-efficiency inverter with digital monitoring platform, ideal for panel-level optimization and shade conditions.",
    image_Url: [{ public_id: "solaredge-76", url: "https://example.com/solaredge-76.jpg" }],
    shop: { name: "SolarEdge", shop_avatar: { public_id: "solaredge-logo", url: "https://example.com/solaredge-logo.png" }, ratings: 4.8 },
    price: 1300, discount_price: 1250, rating: 4.7, total_sell: 180, stock: 25
  },
  {
    id: 20,
    category: "Inverters",
    name: "Fronius Primo 5 kW Single-Phase",
    description:
      "Austrian-made 5 kW inverter with SnapINverter chassis and Smart Meter compatibility for easy installation.",
    image_Url: [{ public_id: "fronius-primo", url: "https://example.com/fronius-primo.jpg" }],
    shop: { name: "Fronius", shop_avatar: { public_id: "fronius-logo", url: "https://example.com/fronius-logo.png" }, ratings: 4.6 },
    price: 1600, discount_price: 1520, rating: 4.6, total_sell: 140, stock: 15
  },
  {
    id: 21,
    category: "Inverters",
    name: "Enphase IQ8 Microinverter (per panel)",
    description:
      "Module-level inverter with grid-forming capabilities and shade tolerance; ideal for residential solar setups.",
    image_Url: [{ public_id: "enphase-iq8", url: "https://example.com/enphase-iq8.jpg" }],
    shop: { name: "Enphase Energy", shop_avatar: { public_id: "enphase-logo", url: "https://example.com/enphase-logo.png" }, ratings: 4.7 },
    price: 200, discount_price: 190, rating: 4.8, total_sell: 2000, stock: 500
  },
  {
    id: 22,
    category: "Inverters",
    name: "Huawei SUN2000‑5KTL‑L1 Hybrid Inverter",
    description:
      "5 kW split‑phase hybrid inverter, supports battery backup and smart home integration with Wi-Fi connectivity.",
    image_Url: [{ public_id: "huawei-5ktl", url: "https://example.com/huawei-5ktl.jpg" }],
    shop: { name: "Huawei Smart PV", shop_avatar: { public_id: "huawei-logo", url: "https://example.com/huawei-logo.png" }, ratings: 4.6 },
    price: 1100, discount_price: 1050, rating: 4.6, total_sell: 220, stock: 30
  },
];
  export const footerProductLinks = [
  { name: "Our Mission", link: "/about" },
  { name: "Solar Blog", link: "/blog" },
  { name: "Solar Resources", link: "/resources" },
  { name: "Installation Guides", link: "/guides" },
  { name: "Customer Reviews", link: "/reviews" },
];

export const footercompanyLinks = [
  { name: "Solar Panels", link: "/products?category=Solar%20Panels" },
  { name: "Batteries & Storage", link: "/products?category=Solar%20Batteries" },
  { name: "Inverters & Controllers", link: "/products?category=Inverters" },
  { name: "Off-Grid Kits", link: "/products?category=Portable%20Solar%20Kits" },
  { name: "Water Pumps", link: "/products?category=Solar%20Water%20Pumps" },
];

export const footerSupportLinks = [
  { name: "Solar FAQ", link: "/faq" },
  { name: "Contact Support", link: "/contact" },
  { name: "Warranty & Returns", link: "/returns" },
  { name: "Shipping Info", link: "/shipping" },
  { name: "Live Chat", link: "/chat" },
];
