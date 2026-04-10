import { ConceptData } from "@/lib/types";

export const concepts: ConceptData[] = [
  {
    slug: "bright-indirect-light",
    name: "Bright Indirect Light",
    description:
      "Bright indirect light is the most commonly recommended lighting condition for tropical houseplants. It refers to abundant natural light that has been diffused or reflected before reaching the plant, avoiding the harsh intensity of direct sun rays.",
    meaning:
      "Bright indirect light means the plant receives strong ambient illumination without direct sunbeams striking its foliage. This typically occurs a few feet from a south- or west-facing window, or right beside an east-facing window where morning sun is gentle. A good test is to hold your hand between the light source and the plant: you should see a soft shadow rather than a sharp, well-defined one.",
    whyItMatters:
      "Most popular houseplants originate from tropical forest understories where they evolved beneath a canopy that filters sunlight. Direct sun can scorch their leaves, causing brown, crispy patches and faded coloring. Conversely, too little light leads to leggy, stretched growth and poor leaf development.",
    howToApply:
      "Place your plant near a window with a sheer curtain, or set it two to four feet back from an unobstructed south- or west-facing window. Rotate the pot a quarter turn every week or two so all sides receive even light. If natural light is limited, a full-spectrum LED grow light positioned about twelve inches above the canopy for ten to twelve hours a day is an excellent supplement.",
    examples: [
      "A Monstera deliciosa placed three feet from a south-facing window with a sheer curtain.",
      "A Fiddle Leaf Fig beside a large east-facing window receiving gentle morning sun.",
      "A Pothos hanging basket near a bright north-facing window in the Southern Hemisphere.",
    ],
    relatedConcepts: ["low-light-tolerance", "dormancy"],
  },
  {
    slug: "overwatering",
    name: "Overwatering",
    description:
      "Overwatering is the single most common cause of houseplant death. It occurs not just from giving too much water at once, but more often from watering too frequently before the soil has had a chance to dry out appropriately.",
    meaning:
      "Overwatering means the root zone remains saturated for extended periods, depriving roots of the oxygen they need to function. Roots sitting in waterlogged soil begin to decay, a condition known as root rot, which is caused by opportunistic fungi such as Pythium and Phytophthora. Symptoms include yellowing lower leaves, mushy stems, a sour soil smell, and wilting despite moist soil.",
    whyItMatters:
      "Healthy roots require a balance of moisture and air in the soil. When pore spaces stay filled with water, roots suffocate and lose their ability to absorb nutrients, leading to a cascade of decline. Root rot can spread quickly and is often fatal by the time above-ground symptoms appear, making prevention far more effective than treatment.",
    howToApply:
      "Always check the soil moisture before watering by inserting your finger one to two inches deep; water only when the top layer feels dry for most tropicals. Use pots with drainage holes and discard any water that collects in saucers after fifteen minutes. Adjust your watering frequency with the seasons, as plants need far less water during the shorter, cooler days of winter.",
    examples: [
      "A Peace Lily whose leaves yellow from the base up because the saucer keeps the soil constantly wet.",
      "A succulent developing translucent, mushy leaves after being watered on a rigid daily schedule.",
      "A Dracaena with brown leaf tips and a foul-smelling root ball caused by poor drainage.",
    ],
    relatedConcepts: ["well-draining-soil", "dormancy"],
  },
  {
    slug: "well-draining-soil",
    name: "Well-Draining Soil",
    description:
      "Well-draining soil allows excess water to flow through the pot quickly while still retaining enough moisture for roots to absorb. It is a critical factor in preventing root rot and maintaining healthy root systems for the vast majority of houseplants.",
    meaning:
      "A well-draining soil mix contains coarse, porous materials such as perlite, pumice, orchid bark, or coarse sand that create air pockets and channels for water movement. Unlike dense garden soil or pure peat, these mixes prevent water from pooling around roots. The ideal blend varies by plant type: cacti and succulents need very gritty, fast-draining mixes, while tropical foliage plants prefer a balance of moisture retention and drainage.",
    whyItMatters:
      "Soil structure directly affects how much oxygen reaches the roots and how long moisture remains available. Compacted or overly fine soil holds water like a sponge, creating anaerobic conditions that promote fungal diseases. Good drainage also prevents mineral salt buildup from fertilizers, which can burn delicate root tips and cause brown leaf edges.",
    howToApply:
      "For most houseplants, mix equal parts quality potting soil, perlite, and orchid bark as a reliable starting point. For succulents and cacti, increase the perlite or pumice to at least fifty percent of the mix. Always use pots with drainage holes, and consider adding a thin layer of horticultural charcoal at the bottom to help absorb impurities and keep the mix fresh.",
    examples: [
      "A mix of one part coco coir, one part perlite, and one part orchid bark for a Philodendron.",
      "A blend of two parts pumice to one part potting soil for an Echeveria succulent.",
      "Adding a handful of coarse perlite to a store-bought potting mix to improve drainage for a Calathea.",
    ],
    relatedConcepts: ["overwatering", "repotting"],
  },
  {
    slug: "humidity",
    name: "Humidity for Houseplants",
    description:
      "Humidity refers to the amount of water vapor present in the air surrounding a plant. Many popular houseplants hail from tropical rainforests where relative humidity regularly exceeds sixty percent, making indoor humidity management an important aspect of their care.",
    meaning:
      "Relative humidity is the percentage of moisture the air holds compared to the maximum it could hold at that temperature. Most homes maintain humidity between thirty and fifty percent, especially in winter when heating systems dry the air. Tropical plants like Calatheas, ferns, and Anthuriums thrive at fifty to seventy percent humidity, and will show stress when levels drop too low.",
    whyItMatters:
      "When humidity is too low, plants lose water through their leaves faster than roots can replace it, leading to brown, crispy leaf edges and tips. Some plants may also fail to unfurl new leaves properly or develop curled foliage. Persistently dry air can also make plants more susceptible to spider mites, which thrive in arid conditions.",
    howToApply:
      "Group humidity-loving plants together so their collective transpiration raises the local moisture level. Use a plug-in humidifier nearby, aiming for fifty to sixty percent relative humidity, and monitor levels with an inexpensive hygrometer. Misting provides only temporary relief and can promote fungal issues on leaves, so it is generally less effective than a humidifier or a pebble tray filled with water placed beneath the pot.",
    examples: [
      "A Calathea orbifolia developing brown, crispy leaf margins in a room with thirty percent humidity.",
      "A Boston Fern thriving in a bright bathroom where showers keep humidity naturally high.",
      "Grouping a collection of Marantas and Philodendrons near a small humidifier during winter.",
    ],
    relatedConcepts: ["overwatering", "bright-indirect-light"],
  },
  {
    slug: "root-bound",
    name: "Root Bound Plants",
    description:
      "A plant becomes root bound when its root system has filled the entire pot and begins circling the container walls, leaving little room for soil or further growth. While a few species tolerate or even prefer snug pots, most houseplants will decline if left root bound for too long.",
    meaning:
      "When a plant is root bound, you will notice roots growing out of the drainage holes, circling densely at the bottom of the pot, or even pushing the plant upward out of the container. The soil dries out unusually fast because there is so little of it left relative to the root mass. Water may also run straight through the pot without being absorbed, as it simply follows channels between compacted roots.",
    whyItMatters:
      "A severely root-bound plant cannot access adequate water or nutrients because the soil volume is too small to hold them. Growth slows dramatically, leaves may become smaller or yellow, and the plant becomes stressed and more vulnerable to pests and disease. Circling roots can also strangle themselves over time, permanently damaging the root system.",
    howToApply:
      "Check for root-bound conditions annually by gently sliding the plant out of its pot and inspecting the root ball. If roots are tightly circling, repot into a container one to two inches larger in diameter and gently tease or score the outer roots to encourage outward growth. Some plants, like Hoyas and African Violets, bloom more readily when slightly root bound, so research your specific species before upsizing.",
    examples: [
      "A Snake Plant with roots cracking a plastic nursery pot after two years without repotting.",
      "A Pothos whose soil dries out within a day of watering due to an overwhelming root mass.",
      "An orchid with aerial roots cascading over the pot edges, signaling it has outgrown its container.",
    ],
    relatedConcepts: ["repotting", "fertilizing"],
  },
  {
    slug: "fertilizing",
    name: "Fertilizing Houseplants",
    description:
      "Fertilizing provides houseplants with essential macro- and micronutrients that are gradually depleted from potting soil over time. Unlike outdoor plants that benefit from natural nutrient cycling, container plants rely entirely on their grower to replenish these nutrients.",
    meaning:
      "Houseplant fertilizers supply three primary macronutrients, represented by the N-P-K ratio on the label: nitrogen for foliage growth, phosphorus for root development and flowering, and potassium for overall plant vigor and disease resistance. They also contain trace elements like iron, manganese, and magnesium that support chlorophyll production and enzymatic processes. Fertilizers come in liquid, granular, and slow-release forms.",
    whyItMatters:
      "Without regular feeding, potting mix nutrients become exhausted within a few months, leading to slow growth, pale or yellowing leaves, and reduced flowering. However, over-fertilizing is equally harmful: excess salts accumulate in the soil and burn root tips, causing brown leaf edges and potentially killing the plant. A balanced approach matched to the growing season produces the best results.",
    howToApply:
      "Feed most houseplants with a balanced liquid fertilizer diluted to half the label strength every two to four weeks during the active growing season from spring through early fall. Stop fertilizing in winter when growth naturally slows, as unused nutrients will build up in the soil. Flush the soil with plain water every few months to wash out accumulated salts, and always water the plant before fertilizing to protect roots from chemical burn.",
    examples: [
      "Using a 10-10-10 liquid fertilizer at half strength monthly on a Monstera during summer.",
      "Applying a high-phosphorus fertilizer to an African Violet to encourage blooming.",
      "Inserting slow-release granules into the soil of a large Ficus to provide steady nutrition over three months.",
    ],
    relatedConcepts: ["repotting", "dormancy", "well-draining-soil"],
  },
  {
    slug: "repotting",
    name: "Repotting",
    description:
      "Repotting is the process of moving a plant into a new container, typically with fresh soil, to give its roots more room to grow and to refresh the growing medium. It is one of the most impactful maintenance tasks a houseplant owner can perform.",
    meaning:
      "Repotting involves carefully removing the plant from its current pot, loosening compacted roots, trimming any dead or rotting roots, and placing the plant into a slightly larger container with fresh potting mix. It is not always about upsizing; sometimes a plant is repotted into the same size container simply to replace exhausted or compacted soil. The best time to repot most houseplants is in spring, when active growth resumes.",
    whyItMatters:
      "Over time, potting soil breaks down and compacts, reducing aeration and drainage. Nutrients become depleted, and salt buildup from fertilizers and tap water can reach harmful levels. Repotting restores a healthy root environment, gives roots room to expand, and often triggers a noticeable burst of new growth in the weeks that follow.",
    howToApply:
      "Choose a new pot that is only one to two inches larger in diameter than the current one, as oversizing creates excess soil that stays wet and invites root rot. Water the plant a day before repotting to reduce transplant stress, and use a fresh mix appropriate to the species. After repotting, water thoroughly and keep the plant in a shaded spot for a week to allow roots to recover before resuming normal light and feeding schedules.",
    examples: [
      "Moving a Rubber Plant from a six-inch pot to an eight-inch pot with fresh aroid mix in early spring.",
      "Refreshing the soil of a large Bird of Paradise in the same pot after scrubbing away salt deposits.",
      "Dividing an overgrown ZZ Plant into two pots during a spring repotting session.",
    ],
    relatedConcepts: ["root-bound", "well-draining-soil", "fertilizing"],
  },
  {
    slug: "low-light-tolerance",
    name: "Low Light Tolerance",
    description:
      "Low light tolerance describes a plant's ability to survive and grow in conditions with minimal natural light. Truly low-light environments receive less than one hundred foot-candles of illumination, such as interior rooms, north-facing windows, or offices far from windows.",
    meaning:
      "Low-light-tolerant plants have adapted to photosynthesize efficiently at lower light intensities, often by producing larger, thinner leaves with more chlorophyll. Examples include Pothos, ZZ Plants, Snake Plants, and Cast Iron Plants. It is important to note that low light tolerance does not mean no light: all plants require some light to survive, and even tolerant species will grow more slowly and produce less vibrant foliage in very dim conditions.",
    whyItMatters:
      "Choosing plants that match your available light is the single most important factor in long-term houseplant success. Placing a high-light plant in a dark corner will inevitably lead to decline, no matter how well you water and feed it. Low-light-tolerant species, on the other hand, can thrive in spaces that would be impossible for most plants, making them ideal for offices, bathrooms, and interior hallways.",
    howToApply:
      "Assess your space honestly before purchasing a plant by observing how much natural light it receives throughout the day. For genuinely dim areas, stick to proven low-light champions like Pothos, Aglaonema, or ZZ Plants. Even in low light, rotate the plant periodically so all sides receive some illumination, and reduce watering frequency since lower light means slower growth and less water consumption.",
    examples: [
      "A ZZ Plant thriving in a windowless office under fluorescent lighting for over a year.",
      "A Pothos trailing from a shelf in a north-facing room with only ambient light.",
      "A Cast Iron Plant growing steadily in a dimly lit hallway far from any window.",
    ],
    relatedConcepts: ["bright-indirect-light", "overwatering"],
  },
  {
    slug: "propagation",
    name: "Plant Propagation",
    description:
      "Propagation is the process of creating new plants from an existing parent plant. It is one of the most rewarding aspects of the houseplant hobby, allowing you to multiply your collection for free and share plants with friends.",
    meaning:
      "There are several common propagation methods for houseplants: stem cuttings placed in water or soil, leaf cuttings for succulents and certain tropicals, division of clumping plants, and air layering for woody-stemmed species. Each method exploits a plant's natural ability to regenerate from vegetative tissue. The key requirement is that the cutting or division includes a node or growth point from which new roots can emerge.",
    whyItMatters:
      "Propagation lets you preserve a beloved plant by creating genetic clones, rescue a plant that is declining by rooting healthy cuttings, and fill your home with greenery at no additional cost. It also allows you to manage plant size by taking cuttings from leggy or overgrown specimens, which often encourages the parent plant to branch out and become fuller as well.",
    howToApply:
      "For stem cuttings, use clean, sharp scissors to cut just below a node and remove the lowest leaves. Place the cutting in a jar of water or directly into moist perlite, keeping it warm and in bright indirect light until roots develop. For division, gently separate the root ball into sections ensuring each division has both roots and foliage. Most propagation is best done in spring or early summer when plants are actively growing and root fastest.",
    examples: [
      "Rooting a Pothos cutting in water by snipping below a node and waiting two to three weeks for roots.",
      "Dividing a large Peace Lily into three separate plants during spring repotting.",
      "Propagating a Monstera deliciosa by air layering a mature stem with aerial roots.",
    ],
    relatedConcepts: ["repotting", "fertilizing", "bright-indirect-light"],
  },
  {
    slug: "dormancy",
    name: "Winter Dormancy",
    description:
      "Winter dormancy is a natural slowdown in growth that most houseplants experience during the shorter, cooler days of late fall and winter. Understanding and respecting this period is essential for keeping plants healthy year-round.",
    meaning:
      "During dormancy, reduced daylight and lower temperatures signal plants to conserve energy. Growth slows or stops entirely, water uptake decreases, and the plant enters a resting phase. This is not a sign of illness but a normal biological rhythm inherited from their native environments, where seasonal changes in rainfall or temperature trigger rest periods even in tropical species.",
    whyItMatters:
      "Continuing to water and fertilize at summer rates during dormancy is a leading cause of winter root rot and salt buildup. The plant simply cannot use the resources being provided, so excess water sits in the soil and excess nutrients accumulate to toxic levels. Recognizing dormancy helps you adjust care appropriately and avoid unnecessary panic when growth pauses.",
    howToApply:
      "Reduce watering frequency significantly in winter, allowing the soil to dry out more between waterings than you would in summer. Stop fertilizing entirely from late fall through early spring for most houseplants. Keep plants away from cold drafts and heating vents, both of which cause stress, and consider supplementing light with a grow lamp if your home receives very little natural winter light.",
    examples: [
      "A Fiddle Leaf Fig producing no new leaves from November through February, then flushing with growth in spring.",
      "Reducing watering of a Snake Plant to once a month during winter when it shows no active growth.",
      "Moving a collection of tropicals away from a radiator that creates hot, dry air currents in winter.",
    ],
    relatedConcepts: [
      "overwatering",
      "fertilizing",
      "bright-indirect-light",
    ],
  },
];
