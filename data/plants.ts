import { PlantData } from "@/lib/types";

export const plants: PlantData[] = [
  {
    slug: "pothos",
    name: "Pothos",
    scientificName: "Epipremnum aureum",
    description:
      "Pothos is one of the most beginner-friendly houseplants, prized for its trailing vines and heart-shaped leaves that come in a range of variegation patterns including golden, marble queen, and neon. It thrives in a wide variety of indoor conditions and can tolerate neglect remarkably well. Pothos is also recognized by NASA as an effective air-purifying plant, helping to remove formaldehyde and xylene from indoor environments. Its fast growth and easy propagation from stem cuttings make it a rewarding choice for new plant owners.",
    difficulty: "Easy",
    light:
      "Pothos adapts to a broad spectrum of lighting conditions, from low indirect light to bright indirect light. Variegated varieties like Marble Queen need brighter light to maintain their white and green patterning, while solid green varieties tolerate dimmer corners. Avoid prolonged direct sunlight, which will scorch the leaves and cause them to turn pale or yellow. A north- or east-facing window provides ideal consistent light without harsh afternoon rays.",
    water:
      "Allow the top inch or two of soil to dry out completely between waterings, then water thoroughly until it drains from the bottom of the pot. Pothos is far more tolerant of underwatering than overwatering, so when in doubt, wait another day. In winter, reduce watering frequency as the plant's growth slows and the soil retains moisture longer. Yellowing leaves are typically the first sign of overwatering, while wilting and curling leaves indicate the plant is thirsty.",
    soil:
      "A standard well-draining indoor potting mix works perfectly for pothos. You can improve drainage by mixing in perlite or orchid bark at roughly a 3:1 ratio of potting soil to amendment. Pothos also grows happily in plain water indefinitely, making it a popular choice for hydroponic setups and propagation jars. Avoid heavy garden soil or mixes that retain excessive moisture, as these promote root rot.",
    humidity:
      "Pothos tolerates average household humidity levels of 30-50% without issue, making it well suited to most indoor environments. While it appreciates occasional misting or higher humidity, it does not require it the way tropical ferns or calatheas do. If you notice brown leaf tips, it may be a sign that the air is excessively dry, particularly during winter when heating systems run. Placing the pot on a pebble tray with water can provide a gentle humidity boost.",
    temperature:
      "Pothos prefers temperatures between 65-85°F (18-29°C) and will grow most actively in the warmer end of that range. It can tolerate brief dips to 50°F (10°C) but sustained cold exposure will cause stunted growth and blackened leaves. Keep it away from cold drafts near windows and exterior doors during winter months. Avoid placing it near heating vents or radiators, which can cause rapid moisture loss from the foliage.",
    commonMistakes: [
      "Overwatering is the most frequent killer of pothos. The plant's tolerance for drought means it is much safer to underwater than to keep the soil constantly moist, which leads to root rot.",
      "Placing highly variegated pothos varieties in low light causes them to lose their variegation and revert to solid green as the plant compensates for reduced photosynthesis.",
      "Allowing the plant to sit in a saucer of standing water after watering traps moisture around the roots and creates ideal conditions for fungal infections.",
      "Neglecting to prune leggy vines results in sparse, stretched-out growth. Regular trimming encourages the plant to branch and produce fuller, bushier foliage.",
    ],
    relatedProblems: [
      "yellow-leaves",
      "root-rot",
      "leggy-growth",
      "brown-tips",
    ],
  },
  {
    slug: "snake-plant",
    name: "Snake Plant",
    scientificName: "Dracaena trifasciata",
    description:
      "The snake plant, formerly classified as Sansevieria, is an architectural succulent known for its stiff, upright sword-shaped leaves with striking green and yellow banding. It is one of the hardiest houseplants available, tolerating low light, infrequent watering, and a wide range of temperatures. Snake plants are exceptional air purifiers, notably producing oxygen at night through a specialized form of photosynthesis called CAM (Crassulacean Acid Metabolism). They are an excellent choice for bedrooms and offices where minimal maintenance is desired.",
    difficulty: "Easy",
    light:
      "Snake plants are remarkably adaptable and can survive in low-light conditions, though they grow fastest in bright indirect light. They can also handle a few hours of direct morning sunlight without issue. In very low light, growth will slow dramatically and the leaves may become darker green and slightly thinner. Avoid intense afternoon direct sun, which can bleach or scorch the leaf margins.",
    water:
      "Water sparingly, allowing the soil to dry out completely between waterings. During the growing season (spring and summer), watering every two to three weeks is typically sufficient, while in winter you may only need to water once a month. Overwatering is the primary cause of death in snake plants, leading rapidly to root rot and mushy stems. Always err on the side of underwatering with this drought-tolerant succulent.",
    soil:
      "Use a fast-draining cactus or succulent potting mix, or amend standard potting soil with a generous amount of perlite and coarse sand. The soil should feel gritty and drain water quickly when poured through. A terracotta pot with a drainage hole is ideal, as the porous material wicks away excess moisture. Avoid moisture-retaining additives like vermiculite or water-absorbing crystals that keep the root zone too wet.",
    humidity:
      "Snake plants are unfazed by dry air and thrive in the low humidity typical of heated or air-conditioned homes. They actually prefer drier conditions and can develop fungal issues in environments that are too humid. There is no need to mist snake plants; in fact, water sitting in the tight leaf rosettes can cause rot. They are one of the few houseplants that perform perfectly well in arid climates without any humidity supplementation.",
    temperature:
      "Snake plants grow well in temperatures between 60-85°F (16-29°C) and can tolerate brief exposures down to about 50°F (10°C). Prolonged cold below 50°F causes cell damage that manifests as mushy, water-soaked patches on the leaves. Keep them away from cold windowsills and drafty entryways during winter. They handle warm conditions easily and are comfortable in the typical temperature range of most homes and offices.",
    commonMistakes: [
      "Watering on a fixed schedule regardless of soil moisture is the most common mistake. Snake plants should only be watered when the soil is thoroughly dry, which varies greatly by season and environment.",
      "Using pots without drainage holes traps water at the bottom and almost guarantees root rot over time, even with careful watering habits.",
      "Placing them in direct hot afternoon sunlight for extended periods can cause sunburn, manifesting as pale, bleached patches on the leaves.",
      "Repotting too frequently or into oversized pots gives the roots too much moist soil to sit in, increasing rot risk. Snake plants actually prefer being slightly root-bound.",
    ],
    relatedProblems: [
      "root-rot",
      "mushy-stems",
      "yellow-leaves",
      "drooping",
    ],
  },
  {
    slug: "monstera",
    name: "Monstera",
    scientificName: "Monstera deliciosa",
    description:
      "Monstera deliciosa, commonly known as the Swiss cheese plant, is a tropical climber beloved for its large, dramatically split and fenestrated leaves. In its native Central American rainforests, it uses aerial roots to climb trees toward the canopy, and it retains this climbing habit indoors when given a moss pole or trellis. Juvenile leaves start out small and heart-shaped without splits, developing their iconic fenestrations as the plant matures. A well-cared-for monstera can produce leaves over two feet wide, making it a stunning architectural statement in any room.",
    difficulty: "Moderate",
    light:
      "Bright indirect light is ideal for monstera, mimicking the dappled sunlight of the forest understory. An east-facing window or a spot a few feet from a south- or west-facing window works well. Too little light will result in smaller leaves with fewer or no fenestrations and slower overall growth. Direct sunlight, particularly harsh afternoon sun, will scorch the leaves and create brown, papery patches.",
    water:
      "Water when the top two inches of soil feel dry, typically every one to two weeks depending on light and temperature. Monstera prefers consistently moist but never waterlogged soil, so thorough watering followed by good drainage is the best approach. Yellowing lower leaves often indicate overwatering, while curling or crispy leaf edges suggest underwatering. Reduce watering frequency in winter when growth slows and evaporation decreases.",
    soil:
      "A chunky, well-aerated potting mix is essential for monstera's thick aerial roots. Combine standard potting soil with perlite, orchid bark, and a small amount of activated charcoal in roughly equal parts for an ideal mix. The bark provides air pockets that mimic the loose, organic debris the plant roots through in nature. Avoid dense, compacted soil that holds too much water around the roots.",
    humidity:
      "Monstera appreciates humidity levels of 50-60%, though it adapts reasonably well to average household humidity around 40%. In dry conditions, you may notice slower growth and occasional brown leaf edges. Grouping it with other plants, using a humidifier, or placing it in a naturally humid room like a bright bathroom can help. Misting provides only temporary relief and can promote fungal spots if done excessively.",
    temperature:
      "Monstera thrives in temperatures between 65-85°F (18-29°C), growing most vigorously in warmer conditions with good humidity. It will not tolerate temperatures below 55°F (13°C) and should never be exposed to frost. Cold drafts from windows or air conditioning vents can cause brown spots and leaf curling. Consistent warmth throughout the year encourages continuous production of new leaves.",
    commonMistakes: [
      "Not providing a support structure like a moss pole prevents the plant from producing its largest, most fenestrated leaves. Climbing triggers the transition to mature leaf forms.",
      "Overwatering in winter when the plant is semi-dormant is a common cause of root rot. Always check soil moisture rather than watering on a schedule.",
      "Expecting fenestrations on a young plant leads to frustration. Monstera must reach a certain maturity before leaves develop splits, which can take several years from a small cutting.",
      "Placing the plant in a dark corner results in leggy growth with long internodes and small, unfenestrated leaves as it stretches toward light.",
    ],
    relatedProblems: [
      "yellow-leaves",
      "brown-spots",
      "root-rot",
      "leggy-growth",
      "drooping",
    ],
  },
  {
    slug: "zz-plant",
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    description:
      "The ZZ plant is a nearly indestructible houseplant native to eastern Africa, where it survives long periods of drought thanks to its thick, potato-like rhizomes that store water underground. Its glossy, dark green pinnate leaves grow in a graceful, arching pattern and have a naturally waxy sheen that looks almost artificial. ZZ plants are extremely slow growers, but their low demands make them perfect for offices, apartments, and spaces where plants are frequently forgotten. The 'Raven' cultivar offers dramatic, near-black foliage that adds a bold contrast to any collection.",
    difficulty: "Easy",
    light:
      "ZZ plants are exceptionally tolerant of low light and can even survive in rooms with only fluorescent lighting, making them ideal office plants. They grow faster in bright indirect light but should be kept out of direct sunlight, which can scald their leaves. A sudden move from low light to bright conditions should be done gradually over a few weeks to prevent sunburn. Even in near-darkness, a ZZ plant will survive for months, though it will produce virtually no new growth.",
    water:
      "The ZZ plant's rhizomes store significant water reserves, so it should be watered very infrequently, only when the soil is completely dry throughout the pot. In typical indoor conditions, this means watering every three to four weeks in summer and even less often in winter. Overwatering is by far the greatest threat to this plant, quickly causing the rhizomes and stems to rot. If you forget to water for a month or two, the plant will simply stop growing rather than dying.",
    soil:
      "A well-draining potting mix is critical for ZZ plant health. Use a standard potting soil amended heavily with perlite, pumice, or coarse sand to ensure rapid drainage. A cactus and succulent mix also works well straight out of the bag. The pot must have drainage holes, as standing water around the rhizomes is the fastest path to plant failure.",
    humidity:
      "ZZ plants are completely indifferent to humidity levels and perform well in the dry air of heated homes and air-conditioned offices. They do not need misting, pebble trays, or humidifiers. This tolerance for dry conditions is one of their greatest advantages as low-maintenance houseplants. Even in arid climates with humidity below 20%, ZZ plants show no signs of stress.",
    temperature:
      "ZZ plants are comfortable in normal room temperatures between 60-80°F (16-27°C). They can tolerate brief dips to 45°F (7°C) but prolonged cold will damage the foliage and halt growth entirely. Avoid placing them near cold drafts, exterior doors, or heating vents that create temperature fluctuations. Warm, stable conditions promote the best growth, though even in cool rooms the plant will survive with minimal attention.",
    commonMistakes: [
      "Watering too frequently is the most common and fatal mistake with ZZ plants. Their rhizomes rot quickly in soggy soil, and once rot sets in it spreads rapidly through the entire root system.",
      "Exposing a ZZ plant that has been in low light directly to bright sunlight causes severe leaf scorch. Transition it gradually over two to three weeks.",
      "Repotting into a much larger container gives the soil too much volume to retain moisture, increasing rot risk. Only go up one pot size when repotting.",
      "Panicking when old stems yellow and die back naturally. ZZ plants periodically shed their oldest stems as part of normal growth, redirecting energy to new shoots.",
    ],
    relatedProblems: [
      "root-rot",
      "mushy-stems",
      "yellow-leaves",
      "brown-spots",
    ],
  },
  {
    slug: "spider-plant",
    name: "Spider Plant",
    scientificName: "Chlorophytum comosum",
    description:
      "The spider plant is a classic houseplant that has been a staple of indoor gardening since the Victorian era, valued for its arching, grass-like foliage and prolific production of baby plantlets on long runners. It comes in solid green and variegated forms, with the white-striped 'Vittatum' and 'Variegatum' varieties being most popular. Spider plants are exceptionally easy to propagate, as the small plantlets can be rooted in water or soil with minimal effort. They are also excellent air purifiers and are non-toxic to cats and dogs, making them a safe choice for pet-owning households.",
    difficulty: "Easy",
    light:
      "Spider plants prefer bright indirect light but adapt well to moderate light conditions. Variegated varieties need more light to maintain their striping; in low light they may revert to solid green. Avoid direct afternoon sunlight, which causes the leaf tips to burn and the foliage to fade. An east-facing window or a spot near a bright window with a sheer curtain is ideal for robust, colorful growth.",
    water:
      "Water spider plants when the top inch of soil is dry, keeping the soil lightly moist but never soggy. They have thick, tuberous roots that store water, giving them moderate drought tolerance. Spider plants are sensitive to fluoride and chlorine in tap water, which causes characteristic brown leaf tips. Using filtered, distilled, or rainwater, or letting tap water sit out overnight before use, helps prevent tip burn.",
    soil:
      "A standard well-draining potting mix works well for spider plants. Adding perlite improves drainage and prevents the compaction that can occur as peat-based mixes age. Spider plants are not fussy about soil and will grow in most general-purpose houseplant mixes. Repot every one to two years when the fleshy roots start pushing the plant out of its pot.",
    humidity:
      "Spider plants tolerate average household humidity but appreciate levels above 40%, especially during dry winter months. Brown leaf tips can be caused by low humidity in combination with chemical sensitivity to tap water. Light misting or a nearby humidifier can help during the driest months. They thrive in kitchens and bathrooms where ambient humidity is naturally higher.",
    temperature:
      "Spider plants grow best in temperatures between 55-80°F (13-27°C) and can handle brief cold snaps down to 35°F (2°C) without dying, though growth stops below 50°F. They are among the more cold-tolerant tropical houseplants, which contributed to their Victorian-era popularity in drafty homes. Extreme heat above 90°F (32°C) can stress the plant and cause wilting. Moderate, consistent temperatures produce the healthiest growth and most prolific plantlet production.",
    commonMistakes: [
      "Using unfiltered tap water containing fluoride and chlorine is the primary cause of the brown leaf tips that plague spider plants. Switching to distilled or filtered water usually resolves the issue within a few weeks of new growth.",
      "Keeping the plant in too small a pot for too long causes the thick roots to crack the container and restricts water uptake. Repot when roots are visible at the drainage holes or pushing the plant upward.",
      "Overfertilizing causes salt buildup in the soil, which also leads to brown tips and edges. Feed sparingly, at half strength, once a month during the growing season only.",
      "Removing plantlets too early before they develop their own root nubs reduces propagation success. Wait until the baby plants have visible root bumps before detaching them.",
    ],
    relatedProblems: [
      "brown-tips",
      "crispy-edges",
      "pale-leaves",
      "yellow-leaves",
    ],
  },
  {
    slug: "peace-lily",
    name: "Peace Lily",
    scientificName: "Spathiphyllum wallisii",
    description:
      "The peace lily is an elegant tropical plant cherished for its glossy, deep green leaves and distinctive white spathes that are often mistaken for flowers but are actually modified leaves surrounding a true flower spike. It is one of the few houseplants that blooms reliably in low-light conditions, making it a popular choice for offices and dim apartments. Peace lilies are powerful air purifiers, ranked among the top performers in NASA's Clean Air Study for removing benzene, formaldehyde, and trichloroethylene. They communicate their water needs clearly by dramatically drooping when thirsty, then perking up within hours of being watered.",
    difficulty: "Easy",
    light:
      "Peace lilies are exceptional low-light houseplants, thriving in conditions that would be too dim for most flowering plants. They prefer bright indirect light for optimal growth and blooming, but will survive in north-facing windows and interior rooms with moderate ambient light. Direct sunlight will quickly scorch their thin, delicate leaves, causing yellow or brown patches. If your peace lily is growing healthy foliage but not blooming, it likely needs slightly more light.",
    water:
      "Peace lilies prefer consistently moist soil and will wilt dramatically when they need water, providing a clear visual signal. Water thoroughly when the top inch of soil feels dry, or when the leaves just begin to droop slightly. While they recover well from occasional wilting, repeated severe drooping stresses the plant and can lead to yellowing leaves over time. They are sensitive to chlorine and fluoride in tap water, so filtered or distilled water is recommended.",
    soil:
      "A rich, well-draining potting mix with plenty of organic matter suits peace lilies well. A blend of standard potting soil with perlite and a small amount of peat or coco coir maintains the consistent moisture they prefer while preventing waterlogging. The soil should hold moisture without becoming soggy or compacted. Refresh the potting mix every two years, as it breaks down and loses structure over time.",
    humidity:
      "As tropical plants, peace lilies love high humidity and thrive at 50% or above. Low humidity causes brown leaf edges and tips, particularly during winter when indoor heating dries the air. Regular misting, a pebble tray, or a nearby humidifier significantly improves their appearance and health. Bathrooms with natural light are often ideal locations because of the consistently elevated humidity.",
    temperature:
      "Peace lilies prefer warm, stable temperatures between 65-80°F (18-27°C) and are sensitive to cold. Temperatures below 55°F (13°C) can cause chilling injury, manifesting as blackened or yellowed leaves. Keep them away from cold drafts, air conditioning vents, and single-pane windows in winter. Sudden temperature drops are more damaging than consistently cool conditions, so avoid placing them where temperatures fluctuate widely.",
    commonMistakes: [
      "Allowing the plant to wilt repeatedly as a watering strategy stresses it significantly. While peace lilies recover from occasional wilting, chronic drought stress leads to yellow leaves and reduced blooming.",
      "Placing a peace lily in direct sunlight burns the leaves rapidly. Their naturally thin foliage has no defense against intense UV exposure.",
      "Expecting continuous blooming without adequate light is unrealistic. Peace lilies need at least moderate indirect light to produce spathes, and many bloom primarily in spring and early summer.",
      "Ignoring dust buildup on the large leaves reduces photosynthesis efficiency. Wipe leaves monthly with a damp cloth to keep them clean and healthy.",
    ],
    relatedProblems: [
      "brown-tips",
      "yellow-leaves",
      "drooping",
      "wilting",
      "crispy-edges",
    ],
  },
  {
    slug: "rubber-plant",
    name: "Rubber Plant",
    scientificName: "Ficus elastica",
    description:
      "The rubber plant is a striking tropical tree that makes a bold indoor statement with its large, thick, glossy leaves in shades of deep green, burgundy, or variegated cream and pink. In its native Southeast Asian habitat, it grows into a massive tree exceeding 100 feet, but indoors it is easily maintained at a manageable six to ten feet with regular pruning. Its robust, upright growth habit and substantial leaves give it a strong architectural presence that works well in modern and minimalist interiors. The milky latex sap it produces when cut is a natural rubber precursor, giving the plant its common name.",
    difficulty: "Moderate",
    light:
      "Rubber plants perform best in bright indirect light, which promotes compact growth and maintains the richness of their leaf color. Darker-leaved varieties like 'Burgundy' tolerate lower light better than variegated types like 'Tineke' or 'Ruby,' which need bright light to maintain their coloring. Insufficient light causes leggy growth with elongated internodes and smaller leaves. Some direct morning sunlight is beneficial, but prolonged afternoon sun can burn the leaves.",
    water:
      "Water your rubber plant when the top two inches of soil are dry, which typically translates to once a week in summer and every two weeks in winter. They prefer thorough watering followed by complete drainage rather than frequent light waterings. Overwatering leads to yellowing and dropping of lower leaves, while chronic underwatering causes leaves to curl and lose their glossy sheen. Wipe the large leaves with a damp cloth periodically, as dust accumulation hampers photosynthesis.",
    soil:
      "A well-draining potting mix is important, as rubber plants dislike sitting in soggy soil. Mix standard potting soil with perlite and pine bark in roughly equal parts for ideal drainage and aeration. Rubber plants have moderately vigorous root systems and benefit from repotting every one to two years into a slightly larger container. Ensure the pot has adequate drainage holes, as these ficus species are prone to root rot in standing water.",
    humidity:
      "Rubber plants tolerate average household humidity but look their best with humidity levels around 40-50%. In very dry conditions, leaf edges may brown slightly, and the plant may become more susceptible to spider mites. Misting is less effective for these large-leaved plants; a humidifier or pebble tray provides more consistent moisture. Wiping leaves with a damp cloth serves the dual purpose of cleaning and providing brief humidity.",
    temperature:
      "Rubber plants prefer temperatures between 60-80°F (16-27°C) and do not tolerate cold well. Temperatures below 55°F (13°C) cause leaf drop and can permanently damage the plant. They are also sensitive to sudden temperature changes, so avoid placing them near drafty windows, exterior doors, or heating and cooling vents. Consistent warmth encourages steady growth and helps the plant maintain its full, attractive canopy.",
    commonMistakes: [
      "Neglecting the plant's light needs leads to stretched, leggy growth that is difficult to correct without hard pruning. Rotate the plant quarterly to ensure even light exposure on all sides.",
      "Moving the plant frequently between different environments triggers stress-related leaf drop. Choose a good permanent location and let it acclimate.",
      "Failing to prune results in a single tall stem with few branches. Cutting the top encourages lateral branching and a fuller, more attractive shape.",
      "Not wearing gloves when pruning exposes skin to the irritating latex sap, which can cause contact dermatitis in sensitive individuals.",
    ],
    relatedProblems: [
      "leaf-drop",
      "leggy-growth",
      "yellow-leaves",
      "drooping",
    ],
  },
  {
    slug: "philodendron",
    name: "Philodendron",
    scientificName: "Philodendron hederaceum",
    description:
      "The heartleaf philodendron is a versatile and forgiving tropical vine with soft, heart-shaped leaves in a rich emerald green. It is often confused with pothos but can be distinguished by its thinner, more matte leaves and the way new foliage emerges with a bronze or reddish tint before maturing to green. Philodendrons are vigorous growers that can trail from hanging baskets, climb a moss pole, or cascade over a shelf with equal grace. The genus Philodendron contains hundreds of species, but the heartleaf variety remains the most popular due to its reliability and adaptability.",
    difficulty: "Easy",
    light:
      "Heartleaf philodendrons thrive in medium to bright indirect light and tolerate lower light conditions better than many houseplants. In low light they will survive but grow slowly and produce smaller, more widely spaced leaves. Avoid direct sunlight, which causes the delicate leaves to yellow and develop brown, bleached patches. A spot near a north or east window, or several feet from a brighter window, provides ideal conditions for lush growth.",
    water:
      "Water when the top inch of soil feels dry, keeping the soil lightly and evenly moist during the growing season. Philodendrons are moderately forgiving of both over- and underwatering but perform best with consistent moisture. Overwatering manifests as yellowing leaves, particularly at the base of the plant, while underwatering causes wilting and curling. Reduce watering in fall and winter when growth naturally slows.",
    soil:
      "A lightweight, well-draining potting mix rich in organic matter is ideal for philodendrons. A blend of peat or coco coir, perlite, and orchid bark provides the right balance of moisture retention and aeration. The mix should feel loose and fluffy rather than dense and heavy. Philodendrons benefit from fresh soil every one to two years, as decomposing organic matter compacts and reduces drainage over time.",
    humidity:
      "Philodendrons are native to tropical forests and prefer humidity levels of 50-60%, though they adapt well to average household conditions around 40%. Higher humidity promotes larger leaves and more vigorous growth. In dry winter air, the leaf tips and margins may brown slightly. Grouping plants together, using a humidifier, or placing the pot on a pebble tray helps maintain adequate moisture in the air.",
    temperature:
      "Philodendrons prefer warm temperatures between 65-80°F (18-27°C) and are sensitive to cold. Growth slows significantly below 60°F (16°C), and temperatures below 50°F (10°C) can cause leaf damage and stem dieback. Avoid cold drafts and proximity to exterior walls or single-pane windows in winter. They respond well to consistent warmth and will produce new leaves year-round if temperatures remain favorable.",
    commonMistakes: [
      "Allowing long vines to grow unchecked without pruning results in bare, leggy stems with leaves only at the tips. Regular pinching and trimming encourages branching and a bushier appearance.",
      "Confusing this plant with pothos and treating them identically can be problematic, as philodendrons prefer slightly more consistent moisture and are somewhat less drought-tolerant.",
      "Using cold water directly from the tap can shock the roots and cause leaf spotting. Let water reach room temperature before applying.",
      "Neglecting to provide climbing support for plants that are reaching upward. When given a moss pole, philodendrons produce significantly larger leaves than when trailing.",
    ],
    relatedProblems: [
      "yellow-leaves",
      "leggy-growth",
      "wilting",
      "brown-tips",
    ],
  },
  {
    slug: "aloe-vera",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    description:
      "Aloe vera is a succulent plant with thick, fleshy, lance-shaped leaves that contain a clear gel long used in traditional medicine for soothing burns, cuts, and skin irritation. It forms a rosette of gray-green leaves, often with subtle white spots and small teeth along the margins. While it is valued for its medicinal properties, aloe vera is also an attractive and low-maintenance houseplant that thrives with minimal attention. Mature plants produce offsets (pups) freely around their base, making it easy to share with friends or expand your collection.",
    difficulty: "Easy",
    light:
      "Aloe vera needs bright light and benefits from several hours of direct sunlight daily, making a south- or west-facing windowsill ideal. Plants grown in insufficient light become etiolated, with leaves stretching outward and losing their compact rosette form. If moving an aloe from low light to direct sun, do so gradually over two weeks to prevent sunburn. In summer, outdoor placement in a lightly shaded spot can accelerate growth significantly.",
    water:
      "Water deeply but infrequently, allowing the soil to dry out completely between waterings. In the growing season this typically means watering every two to three weeks, and in winter every four to six weeks or even less. Aloe vera stores abundant water in its thick leaves and is far more likely to be killed by overwatering than underwatering. If the leaves feel soft, thin, or start to curl inward, the plant is thirsty; if they turn translucent or mushy, it has been overwatered.",
    soil:
      "A fast-draining cactus and succulent mix is essential for aloe vera, or create your own by mixing standard potting soil with coarse sand and perlite in a 1:1:1 ratio. The soil should dry quickly and not retain moisture for more than a few days. Terracotta pots are strongly recommended as they are porous and wick away excess moisture. Never use regular garden soil or moisture-retentive mixes, as these keep roots wet far too long.",
    humidity:
      "Aloe vera is a desert succulent that thrives in dry air and requires no humidity supplementation. Standard household humidity of 30-40% is perfectly adequate. High humidity environments like bathrooms are actually detrimental, as the combination of moisture in the air and soil promotes fungal disease. This plant is ideal for dry climates and homes where other tropicals struggle with low humidity.",
    temperature:
      "Aloe vera prefers warm conditions between 55-80°F (13-27°C) and can tolerate heat well above that range. It is not cold-hardy and should never be exposed to temperatures below 40°F (4°C), as frost will destroy the water-filled leaves. Indoor aloe plants should be kept away from cold windows in winter. A warm, sunny windowsill with good air circulation provides ideal year-round conditions.",
    commonMistakes: [
      "Overwatering is the number one killer of aloe vera plants. The thick leaves store enough water to sustain the plant for weeks, so frequent watering leads to root and stem rot.",
      "Using pots without drainage holes or pots that are too large relative to the root ball keeps the soil wet too long and invites root rot.",
      "Keeping aloe in low-light conditions causes it to stretch and lose its attractive compact form. This etiolation is irreversible in affected leaves.",
      "Harvesting gel from too many leaves at once weakens the plant significantly. Never remove more than one-third of the leaves at a time, and always take from the outermost, oldest leaves.",
    ],
    relatedProblems: [
      "root-rot",
      "mushy-stems",
      "brown-spots",
      "leggy-growth",
    ],
  },
  {
    slug: "jade-plant",
    name: "Jade Plant",
    scientificName: "Crassula ovata",
    description:
      "The jade plant is a long-lived succulent native to South Africa that develops a thick, woody trunk and plump, oval leaves, giving it the appearance of a miniature tree. Often called the money plant or lucky plant, it is traditionally associated with prosperity and is a popular housewarming gift. Jade plants are remarkably long-lived, with specimens known to survive for decades and even be passed down through generations. With proper care and pruning, they develop a beautiful bonsai-like structure that becomes more impressive with age.",
    difficulty: "Easy",
    light:
      "Jade plants need at least four to six hours of bright light daily, with some direct sunlight being highly beneficial. A south- or west-facing window is ideal, and the leaves may develop attractive red edges when exposed to adequate direct sun. In low light, jade plants become leggy and top-heavy, with elongated stems and widely spaced leaves. Young plants should be introduced to direct sun gradually to avoid leaf scorch.",
    water:
      "Allow the soil to dry completely between waterings, then water deeply until it runs from the drainage holes. In summer this typically means watering every two to three weeks, and in winter only once a month or less. Jade plants store water in their thick leaves, which will appear plump and firm when adequately hydrated and slightly wrinkled when thirsty. Overwatering causes leaf drop, stem rot, and edema (corky brown spots on the undersides of leaves).",
    soil:
      "Use a well-draining succulent or cactus mix, or amend regular potting soil with equal parts perlite or coarse sand. The soil must dry out quickly to prevent root rot in this drought-adapted plant. Unglazed terracotta pots are the best choice, as they allow soil to dry evenly through the porous walls. Jade plants have relatively shallow root systems, so a wider, shallower pot is preferable to a deep, narrow one.",
    humidity:
      "Jade plants prefer dry air and thrive at typical indoor humidity levels of 30-50%. They require no misting or humidity supplementation and may develop fungal issues in overly humid environments. Good air circulation helps keep foliage healthy and prevents moisture-related disease. These South African natives are perfectly at home in the dry air produced by central heating and air conditioning.",
    temperature:
      "Jade plants grow well in temperatures between 55-75°F (13-24°C) during the day and can tolerate slightly cooler nighttime temperatures. A winter rest period with cooler temperatures around 55°F (13°C) can actually encourage blooming in mature specimens. They are not frost-tolerant and will suffer cold damage below 40°F (4°C). Avoid placing them near cold drafts, though they are somewhat more cold-tolerant than many other succulents.",
    commonMistakes: [
      "Overwatering during winter dormancy is the most common cause of jade plant death. The plant requires much less water when it is not actively growing, and soggy winter soil quickly leads to root rot.",
      "Using a pot without drainage or a pot that is too large relative to the root system retains excess moisture and rots the roots.",
      "Neglecting to rotate the plant causes it to grow lopsided toward the light. Rotate it a quarter turn every few weeks for even, balanced growth.",
      "Not pruning to encourage a strong structure results in a top-heavy plant that falls over. Strategic pruning develops a sturdy, tree-like form that supports the heavy leaves.",
    ],
    relatedProblems: [
      "leaf-drop",
      "root-rot",
      "mushy-stems",
      "leggy-growth",
      "brown-spots",
    ],
  },
  {
    slug: "chinese-evergreen",
    name: "Chinese Evergreen",
    scientificName: "Aglaonema commutatum",
    description:
      "The Chinese evergreen is one of the most decorative and durable foliage plants available, with broad, lance-shaped leaves featuring intricate patterns of silver, green, pink, and red depending on the cultivar. It has been cultivated as a houseplant in Asia for centuries and is considered a symbol of good fortune. Aglaonemas are slow to moderate growers that maintain a compact, bushy form without much pruning. Modern cultivars like 'Silver Bay,' 'Red Valentine,' and 'Pink Dalmatian' offer stunning color variations that brighten any low-light space.",
    difficulty: "Easy",
    light:
      "Chinese evergreens are outstanding low-light plants, particularly the darker green varieties which tolerate dim conditions that would kill most houseplants. Newer cultivars with pink, red, or heavily variegated foliage require brighter indirect light to maintain their coloring. Direct sunlight should always be avoided, as it bleaches and scorches the delicate, patterned leaves. A north-facing window or the interior of a well-lit room provides ideal conditions.",
    water:
      "Allow the top inch or two of soil to dry between waterings, then water thoroughly. Chinese evergreens prefer consistent, moderate moisture and are less drought-tolerant than many other easy-care houseplants. Overwatering causes yellowing lower leaves and can lead to stem rot, especially in cool conditions. In winter, reduce watering to match the plant's slower growth rate and the soil's reduced evaporation.",
    soil:
      "A standard peat-based or coco coir-based potting mix with added perlite provides the right balance of moisture retention and drainage. The soil should remain lightly moist but never waterlogged. Chinese evergreens have relatively shallow root systems and do not need deep pots. Repot every two to three years or when roots circle the bottom of the pot, moving up just one pot size.",
    humidity:
      "As tropical understory plants, Chinese evergreens appreciate moderate to high humidity levels of 50-60%. They tolerate average household humidity but may develop brown leaf edges in very dry conditions, particularly during winter. A humidifier or pebble tray is beneficial in heated homes. Avoid misting, as water sitting on the broad leaves can cause fungal leaf spots.",
    temperature:
      "Chinese evergreens are cold-sensitive and prefer temperatures between 65-80°F (18-27°C) at all times. Temperatures below 60°F (16°C) cause growth to stall, and exposure below 55°F (13°C) can cause dark, greasy-looking patches on the leaves from cold damage. They are particularly sensitive to cold drafts, so keep them away from exterior doors, drafty windows, and air conditioning vents. Consistent warmth is key to keeping this plant healthy and producing new growth.",
    commonMistakes: [
      "Exposing the plant to cold drafts or temperatures below 60°F causes dark, water-soaked damage on the leaves that does not recover. Always keep this tropical plant warm.",
      "Placing highly colored cultivars in low light causes them to revert toward green, losing the pink, red, or silver variegation that makes them attractive.",
      "Watering with cold water shocks the roots and can cause leaf spotting. Always use room-temperature water for this cold-sensitive species.",
      "Ignoring lower leaf yellowing as the plant ages is fine if it is occasional, but rapid yellowing of multiple leaves usually signals overwatering or root problems that need attention.",
    ],
    relatedProblems: [
      "yellow-leaves",
      "brown-tips",
      "crispy-edges",
      "brown-spots",
      "drooping",
    ],
  },
  {
    slug: "boston-fern",
    name: "Boston Fern",
    scientificName: "Nephrolepis exaltata",
    description:
      "The Boston fern is a lush, arching fern with graceful, sword-shaped fronds made up of dozens of small, delicate leaflets. It has been one of the most popular indoor plants since the Victorian era, when it was a staple of parlor decor, and it remains a classic choice for hanging baskets and pedestals. Boston ferns are vigorous growers under the right conditions, producing a cascading mound of bright green foliage that can span several feet. While more demanding than some houseplants regarding humidity, the visual impact of a well-grown Boston fern is unmatched.",
    difficulty: "Moderate",
    light:
      "Boston ferns prefer bright indirect or filtered light, similar to the dappled sunlight of the forest floor where they grow naturally. Direct sunlight scorches their delicate fronds, causing them to turn brown and crispy. A north-facing window or a position near an east-facing window with morning light works well. They also grow beautifully under fluorescent lighting, making them suitable for well-lit offices and bathrooms.",
    water:
      "Keep the soil consistently moist but not waterlogged, as Boston ferns are not drought-tolerant and will drop leaflets rapidly when they dry out. Water when the surface of the soil just begins to feel dry, and water thoroughly until it drains from the bottom. In warm weather or dry indoor environments, this may mean watering every two to three days. Never let the root ball dry out completely, as severe wilting can be difficult to reverse fully.",
    soil:
      "A rich, moisture-retentive potting mix with good aeration is ideal for Boston ferns. A blend of peat moss or coco coir with perlite and a small amount of compost provides both the moisture retention and drainage ferns require. The soil should feel consistently damp like a wrung-out sponge, never dry or saturated. Adding a thin layer of sphagnum moss on top of the soil can help maintain surface moisture.",
    humidity:
      "High humidity is the single most important factor for growing a healthy Boston fern indoors. They need 50-80% humidity, which is significantly higher than most homes provide, especially in winter. A humidifier running near the plant, daily misting, or placement in a naturally humid bathroom or kitchen is essential. Brown, crispy leaflet tips and excessive shedding are almost always caused by insufficient humidity.",
    temperature:
      "Boston ferns prefer cool to moderate temperatures between 60-75°F (16-24°C) and do not enjoy hot conditions above 85°F (29°C). They appreciate cooler nighttime temperatures and benefit from good air circulation. Temperatures below 55°F (13°C) will damage the fronds and trigger dormancy. Avoid placing them near heating vents, radiators, or fireplaces, as the hot, dry air is particularly harmful.",
    commonMistakes: [
      "Underestimating the humidity requirements is the most common reason Boston ferns fail indoors. Without supplemental humidity, the fronds shed leaflets constantly, creating a mess and eventually leaving bare stems.",
      "Allowing the soil to dry out even briefly causes rapid leaflet drop that takes weeks to recover from. Consistent moisture monitoring is essential.",
      "Placing the fern in direct sunlight or near a heat source dries out the fronds and causes irreversible browning. They need cool, bright, indirect light.",
      "Not removing dead or yellowing fronds regularly encourages fungal growth and prevents light from reaching new growth at the plant's center.",
    ],
    relatedProblems: [
      "crispy-edges",
      "brown-tips",
      "leaf-drop",
      "yellow-leaves",
      "wilting",
    ],
  },
  {
    slug: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    description:
      "The fiddle leaf fig is a dramatic statement plant renowned for its enormous, violin-shaped leaves with prominent veining and a leathery texture. Native to the tropical rainforests of West Africa, it has become one of the most sought-after interior plants in modern home design. Despite its popularity, it is notoriously finicky and responds poorly to changes in environment, making it one of the more challenging common houseplants to maintain. When well cared for, however, it grows into a stunning indoor tree that can reach ceiling height with leaves up to 18 inches long.",
    difficulty: "Advanced",
    light:
      "Fiddle leaf figs require abundant bright indirect light and benefit from a few hours of direct morning sunlight. A large east-facing window or a south-facing window with sheer curtains provides the ideal light level. Insufficient light causes small, sparse leaves, leggy growth, and eventually leaf drop. These plants do not adapt well to low-light conditions, and moving them to a darker spot almost always results in decline.",
    water:
      "Water thoroughly when the top two inches of soil feel dry, then allow the pot to drain completely. Fiddle leaf figs are extremely sensitive to both overwatering and underwatering, making consistent watering one of the biggest challenges. Overwatering causes brown spots that start at the base of leaves and eventually spread, while underwatering causes leaves to curl, develop brown edges, and drop. Establishing a regular watering routine based on soil moisture rather than a fixed schedule is essential.",
    soil:
      "A well-draining, nutrient-rich potting mix is critical for fiddle leaf figs. Combine indoor potting soil with perlite and bark chips for improved drainage and aeration. The mix should retain some moisture without staying soggy, as these plants dislike both bone-dry and waterlogged conditions. Good drainage is non-negotiable; root rot from poor drainage is one of the most common causes of fiddle leaf fig death.",
    humidity:
      "Fiddle leaf figs prefer humidity levels of 40-65%, which is slightly above the average in many homes. In dry environments, they develop brown, crispy leaf edges and may become more susceptible to pest problems. A humidifier is the most effective solution, particularly during winter months when indoor heating drastically reduces humidity. Misting provides minimal benefit and can promote fungal leaf spots if done excessively.",
    temperature:
      "Fiddle leaf figs are sensitive to temperature fluctuations and prefer consistent warmth between 65-75°F (18-24°C). Cold drafts, even brief ones from opening a door in winter, can cause sudden leaf drop that takes months to recover from. They are also sensitive to hot, dry air from heating vents and should not be placed near radiators. The key to temperature management is consistency; these plants dislike any rapid environmental change.",
    commonMistakes: [
      "Moving the plant around trying to find the perfect spot causes repeated stress and leaf drop. Choose the best location available and leave the plant there permanently.",
      "Inconsistent watering is the primary cause of the brown spots that plague fiddle leaf figs. Alternating between drought and flooding damages roots and leads to characteristic leaf browning.",
      "Failing to rotate the plant causes it to lean dramatically toward the light and develop a lopsided canopy. Rotate it a quarter turn every week or two.",
      "Not cleaning the large leaves allows dust to accumulate, reducing light absorption and making the plant more vulnerable to pest infestations, particularly spider mites.",
    ],
    relatedProblems: [
      "brown-spots",
      "leaf-drop",
      "root-rot",
      "yellow-leaves",
      "drooping",
      "crispy-edges",
    ],
  },
  {
    slug: "dracaena",
    name: "Dracaena",
    scientificName: "Dracaena marginata",
    description:
      "Dracaena marginata, commonly known as the dragon tree, is an elegant, slow-growing plant with slender, arching leaves edged in red or pink atop thin, woody canes that develop attractive character as the plant ages. Native to Madagascar, it brings a tropical, palm-like aesthetic to indoor spaces without the demanding care requirements of most palms. Dragon trees are effective air purifiers, shown to remove benzene, formaldehyde, and trichloroethylene from indoor environments. They are low-maintenance, drought-tolerant, and available in several appealing varieties including 'Tricolor' with green, cream, and pink striping.",
    difficulty: "Easy",
    light:
      "Dracaena marginata adapts to a range of light conditions from low to bright indirect light. Varieties with more colorful striping, like 'Tricolor' and 'Colorama,' need brighter light to maintain their vibrant leaf colors. Direct afternoon sunlight can burn the thin leaves, causing bleached or brown patches. A spot with bright, filtered light produces the best growth and coloring, though the plant will survive in dimmer areas with slower growth.",
    water:
      "Allow the top half of the soil to dry between waterings, as dracaenas are moderately drought-tolerant and much more sensitive to overwatering than underwatering. Water thoroughly and let the excess drain completely; never let the plant sit in standing water. Dracaenas are notably sensitive to fluoride in tap water, which causes distinctive dark brown tips and leaf margin damage. Using distilled, filtered, or rainwater prevents this common and frustrating issue.",
    soil:
      "A loose, well-draining potting mix is suitable for dracaenas. Standard indoor potting soil amended with perlite or pumice for improved drainage works well. Avoid mixes heavy in peat, which can compact over time and hold too much moisture around the roots. Dracaenas are relatively slow growers and only need repotting every two to three years when roots begin to crowd the container.",
    humidity:
      "Dracaenas prefer moderate humidity of 40-50% and may develop brown leaf tips in very dry environments. While they tolerate average household humidity better than many tropicals, some supplemental humidity during dry winter months helps maintain clean leaf tips. Occasional misting is fine, but a humidifier or pebble tray provides more consistent results. Good air circulation around the plant helps prevent the fungal issues that can arise in stagnant, humid conditions.",
    temperature:
      "Dracaenas are comfortable in temperatures between 60-80°F (16-27°C) and should not be exposed to temperatures below 55°F (13°C). Cold damage manifests as soft, mushy patches on the leaves and stems. They prefer consistent temperatures and should be kept away from drafty windows, exterior doors, and heating or cooling vents. In their ideal temperature range, dracaenas grow steadily and reliably with minimal intervention.",
    commonMistakes: [
      "Using fluoridated tap water causes persistent brown leaf tips that frustrate many dracaena owners. Switching to distilled or filtered water and flushing the soil periodically resolves this issue over time.",
      "Overwatering is the most common cause of dracaena death. The canes rot from the inside, and by the time the damage is externally visible, it is often too late to save the affected stem.",
      "Not pruning leggy or overgrown canes leads to a top-heavy, unattractive plant. Dracaenas respond well to being cut back and will sprout new heads below the cut point.",
      "Placing the plant in a dark corner leads to thin, sparse growth and loss of the colorful leaf margins that make it attractive. Provide at least moderate indirect light for best results.",
    ],
    relatedProblems: [
      "brown-tips",
      "yellow-leaves",
      "leaf-drop",
      "leggy-growth",
      "stunted-growth",
    ],
  },
];
