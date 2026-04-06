/* ============================================================
   BAHAY KUBO — DATA FILE
   Contains: PREMADE_DLLS array, MODULE_DATA object
   Used by: js/app.js (index.html) and each /modules/*.html
   ============================================================ */
 
/* ────────────────────────────────────────
   DAILY LESSON LOGS
   Teacher names are INTENTIONALLY OMITTED per spec.
   Content is kept exactly as written in the working docs.
   ──────────────────────────────────────── */
const PREMADE_DLLS = [
  {
    id: 'dll-foundation',
    title: 'Foundation & Framing',
    subject: 'Industrial Arts – Carpentry Works in Residential Structure',
    grade: 'Grade 9 – 1st/3rd Quarter',
    quarter: '1st/3rd Quarter',
    contentStandards: 'The learner demonstrates an understanding of the concepts and principles of carpentry works in residential structures, specifically residential construction foundation and framing.',
    perfStandards: 'The learner independently constructs a miniature foundation and framing model using appropriate materials, tools, and techniques following safety and quality standards.',
    objectives: `A. Foundation (Masonry)
- (Cognitive) Identify the two types of footings: Continuous (strip) and Isolated (pad), including their parts: footing, foundation wall/pedestal, and anchor bolts.
- (Psychomotor) Construct a miniature foundation model using simulated concrete materials.
 
B. Floor Framing (Carpentry)
- (Cognitive) Identify the components of a floor framing system: sill plate, floor joists, subfloor.
- (Psychomotor) Install a sill plate on the foundation anchors; lay out and install floor joists at proper spacing; install subflooring on the joists.
 
C. Wall Framing (Carpentry)
- (Cognitive) Identify the components of a wall frame: bottom plate, studs, top plates, headers, cripples, and sheathing.
- (Psychomotor) Assemble a miniature wall frame with proper spacing and connections; erect and brace the wall frame on the floor system.
 
D. Integration
- (Affective) Appreciate the importance of proper foundation-to-frame connections for structural integrity and safety.`,
    subjectMatter: 'Residential Construction: Foundation and Framing',
    references: 'DepEd MATATAG CG pp. 169-172',
    materials: 'Sand, cement, gravel, water; #8 G.I. wire; anchor nails; 12"x12" plywood base; wooden form strips; basswood strips (1/8"x1/4"); small nails/pins; wood glue; thin cardboard; ruler; square; utility knife; TV; Laptop; Slide Presentation',
    review: `The teacher introduces the new lesson on Carpentry Works in Residential Structures, explaining that it is now time to look at how we build the most important parts of a house — the foundation and frame.
 
"To start our new topic, try to answer these two simple questions:
1. What holds the house up?
2. After the foundation, what's next?"`,
    purpose: `Scenario: "You've poured the foundation. Now you build the floor and walls. How do you connect wood to concrete? What if the frame is poorly built?" Students share ideas.`,
    examples: `Using slides, show the "big picture" diagram: Foundation → sill plate → floor joists → subfloor → wall frame (bottom plate, studs, top plates, headers).`,
    discuss1: `Two footing types:
• Continuous footing – under walls (long strip).
• Isolated footing – under posts (square pad).
Anchor bolts: embedded in concrete to hold sill plate.`,
    discuss2: `• Sill plate: treated wood bolted to foundation.
• Floor joists: spaced 16" or 24" O.C., support subfloor.
• Subfloor: plywood on joists.`,
    mastery: `• Bottom plate, studs, top plates (double top plate ties walls).
• Headers over openings supported by trimmers.
• Rough openings: door/window dimensions.`,
    application: `Objective: Construct miniature foundation + floor + wall section.
 
Part 1 – Foundation (10 min):
1. On plywood base, arrange forms: rectangle (continuous) + small square (isolated). Glue/nail forms.
2. Place #8 wire pieces inside forms.
3. Mix small concrete batch (1:2:3).
4. Pour into forms (1/2" deep).
5. Embed anchor nails at marked spots.
 
Part 2 – Framing (10 min):
1. Cut sill plate strips, press onto anchor nails.
2. Mark joist locations (every 2" scale). Cut/glue joists.
3. Glue thin cardboard subfloor.
4. Cut bottom plate, mark studs (every 2"). Glue studs.
5. Add top plate. Create simple rough opening (optional).
 
Safety: Goggles/gloves for concrete; knives teacher-use only.`,
    generalization: `Teacher asks:
• "How does load travel from roof to ground?" (Roof → walls → floor → foundation → soil).
• "Why bolt sill plate to foundation?" (Anchors house; prevents sliding/lifting).
• "What if studs are too far apart?" (Weak walls, may fail).`,
    evaluation: `Quiz (5 items):
1. Name two types of footings and their uses. (Continuous – walls; Isolated – posts)
2. What is the purpose of anchor bolts? (Secure sill plate to foundation)
3. What is a sill plate made of? (Treated wood)
4. Studs are typically spaced at ___ inches on center. (16 or 24)
5. True or False: Headers are used over doors and windows to support weight above. (True)`,
    remarks: 'Due to time constraints, the performance task will be done the following meeting.',
    ref1:'', ref2:'', ref3:'', ref4:'', refE:'', refF:'', refG:''
  },
  {
    id: 'dll-partitions',
    title: 'Partitions',
    subject: 'Industrial Arts – Carpentry Works in Residential Structure',
    grade: 'Grade 9 – 1st/3rd Quarter',
    quarter: '1st/3rd Quarter',
    contentStandards: 'The learner demonstrates an understanding of the concepts and principles of carpentry works in residential structures, specifically the purpose, types, materials, and installation techniques of interior and exterior partitions.',
    perfStandards: 'The learner independently plans and constructs a model or diagram of a partition system in a residential structure using appropriate materials, tools, and carpentry techniques following safety and quality standards.',
    objectives: `At the end of the lesson, the learners will be able to:
1. Compare the advantages and limitations of different partition types and materials based on cost, durability, ease of construction, and suitability for Philippine residential settings. (ANALYZE)
2. Demonstrate the correct process of planning and laying out a basic partition, selecting suitable materials for a given residential context using appropriate tools. (APPLY)
3. Assess a given floor plan and justify which type of partition is most appropriate for specific areas (e.g., bedroom, bathroom, kitchen, living area). (EVALUATE)`,
    subjectMatter: 'Carpentry Works in Residential Structure - Partitions',
    references: 'MATATAG CG pp. 169-170; Anderson & Krathwohl (2001); Fajardo (2012); Mercado (2018); NSCP C101-15; Santos (2020)',
    materials: 'Miniature House Model; Self-paced Quiz (OER Website); TV; Laptop; Slide Presentation; Popsicle sticks/balsa wood; cardboard base; sintra board',
    review: `The teacher shows 5–8 photos of Filipino home interiors on the TV/projector — rooms with visible partition walls (bedroom, bathroom, sala, kitchen). Students observe silently for 1 minute, then the teacher asks:
- "What do you notice about the walls in these rooms?"
- "Do you think all these walls are made of the same material?"
The teacher collects 2–3 student responses and uses them to transition into the new lesson.`,
    purpose: `The teacher presents the three lesson objectives clearly and poses the essential question: "How do the walls inside a house do more than just separate rooms?"
 
The teacher briefly shows the mini house model, points to the partition section, and scans the QR code to show the OER website module page on the TV.`,
    examples: `Discuss Types of Partition:
- Solid Partition — constructed of concrete hollow blocks (CHB) or brick; permanent, durable, provides good sound and fire resistance; most common in Philippine residential construction
- Wood-Frame (Stud Wall) Partition — vertical wooden studs with panel cladding; lightweight, economical, and easy to construct; common in low-cost housing
- Drywall / Gypsum Board Partition — metal or wood frame with gypsum board panels; smooth finish, quick to install, ideal for interior spaces not exposed to moisture
- Movable / Operable Partition — sliding or folding panels; used in multi-function rooms and commercial spaces
- Glass Partition — framed or frameless glass panels; allows light transmission while defining boundaries`,
    discuss1: `The teacher briefly discusses what makes a good partition choice by introducing three key factors:
- Cost — CHB is more expensive to build but lasts longer; wood-frame is cheaper but less durable
- Durability — solid partitions last longer; movable/glass partitions require more maintenance
- Suitability — the right partition depends on the room's purpose (wet areas need water-resistant materials; bedrooms need sound control)
 
The teacher connects this back to Objective 1: "By the end of this lesson, you should be able to compare these types and decide which works best for a given situation."`,
    discuss2: `Activity: "Partition Station" — Jigsaw Expert Groups
1. Divide the class into 4 expert groups.
2. Each group examines a partition type:
   a. Group 1 — Solid Partitions - Concrete Hollow Blocks (CHB)
   b. Group 2 — Wood-Frame Partitions
   c. Group 3 — Drywall / Gypsum Partitions
   d. Group 4 — Movable / Glass Partitions
3. Leaders pick from printed learning materials for the info sheet.
4. Groups answer: (a) Physical Attributes, (b) Components/materials, (c) Best room use, (d) Advantages, (e) Limitations.
5. After 10 minutes, each group presents by posting findings on manila paper.
6. The teacher processes their output.`,
    mastery: `Activity: "Construct It!" — Guided Demonstration + Mini-Build
 
The teacher demonstrates the basic steps of laying out a wood-frame partition using popsicle sticks/balsa wood on a cardboard base. Students build alongside:
- Mark the floor plan layout on the cardboard base (pencil line or chalk line)
- Cut and position vertical studs at regular intervals
- Install horizontal blocking/nogging between studs
- Attach panel material (cut sintra board or cardboard) to one face
 
Safety Reminder: Before beginning, review the safe use of cutters, glue guns, and small saws.
 
Rubric (20 points): Accuracy of Layout (4) | Correct Sequence (4) | Structural Integrity (4) | Neatness (4) | Safety Practices (4)`,
    application: `Application + Generalization (Combined Activity):
- "If you were to design a room for your family, what partition would you choose and why?"
- "How does the type of partition affect the cost of building a house?"
- "How does your mini-build reflect the concepts we learned today?"
 
Synthesis: Partitions do more than divide — they define privacy, manage sound, ensure safety, and reflect thoughtful home design. Choosing the right partition means balancing cost, function, and context.`,
    generalization: `The teacher asks: "Based on what you built and what you compared today — what should you think about before choosing a partition for a room?"
 
Students respond. Teacher summarizes: Choosing the right partition means balancing cost, function, durability, and the needs of the people living in the home.`,
    evaluation: `Partition Planner Task (may be used as stand-alone evaluation if not completed during class)
 
Summative Pointer — For the module website, students will complete the embedded online assessment after the lesson. The assessment includes:
- Multiple-choice questions on partition types and materials
- A drag-and-drop floor plan labeling activity (match partition type to room)
- Short reflection: "Which partition would you use for a bedroom wall in a low-cost Filipino home? Why?"`,
    remarks: 'Due to time constraints, the performance task will be done the following meeting.',
    ref1:'', ref2:'', ref3:'', ref4:'', refE:'', refF:'', refG:''
  },
  {
    id: 'dll-roofing',
    title: 'Roofing',
    subject: 'Industrial Arts – Carpentry Works in Residential Structure',
    grade: 'Grade 9 – 1st/3rd Quarter',
    quarter: '1st/3rd Quarter',
    contentStandards: 'The learners demonstrate an understanding of the concepts and principles of carpentry works in residential structures.',
    perfStandards: 'The learner independently plans and constructs a model or diagram of a roofing system in a residential structure using appropriate materials, tools, and carpentry techniques following safety and quality standards.',
    objectives: `At the end of the lesson, the learner should be able to:
1. Explain the legal restrictions for roof structures according to Section 1210 of the National Building Code of the Philippines.
2. Analyze various roof design and framing parts based on their structural functions and resistance to environmental elements like wind and rain.
3. Construct a miniature roof model that demonstrates the assembly of basic carpentry components using the most appropriate roof design and materials for Philippine residential structure.
4. Value the importance of precise framing and high quality materials in maintaining a safe and comfortable living environment for the family.`,
    subjectMatter: 'Carpentry Works in Residential Structure - Roofing',
    references: `MATATAG-EPP TLE CG Grades 4-10: Page 169; DPWH National Building Code P.D. 1096; BusinessMirror (2021) Typhoon Odette photos; Union Galvasteel (2025) Best roofing materials for Philippine climate; EdrawMax (2026) Roof Framing Plan guide`,
    materials: 'Miniature House Model; OER Website; TV; Laptop; Slide Presentation; PPT: https://canva.link/carpentryworksinresidentialstructure-roofing; Padlet: https://padlet.com/godiloemb/carpentry-works-in-residential-structure-roofing-hyi22d70cinlelma; Softwood strips or balsa wood; Wood glue or rapid-set adhesive; Mini-back saw/utility cutter; Steel square and ruler; Plywood or heavy cardstock base',
    review: `The teacher introduces the new lesson on Carpentry Works in Residential Structures — it is now time to look at how we build the most important part of a house: the roof.
 
"To start our new topic, try to answer these two simple questions based on the houses you see every day:
1. When you look at a house from the outside, how many slopes or sides does the roof usually have?
2. What do you think is the most important 'job' of a roof when there is a very strong typhoon?"`,
    purpose: `Structural Case Analysis — The teacher presents an aerial image of the destruction caused by Typhoon Odette in Barangay Punta Bilar, Surigao City, to stimulate critical thinking.
 
Instruction: Act as a junior building inspector. Examine the provided image and answer:
1. Based on your observation, what could be the possible cause of this roof failure?
2. Looking at this image, have your family ever experienced a similar situation where your roof was damaged by a strong storm?
3. How did you and your family deal with that situation at the moment it happened?
 
Transition: "The damage we see highlights why understanding the 'how' and 'why' of roof construction is important. Before we learn how to build a roof that stays strong during a storm, we must first master the technical vocabulary of its parts."`,
    examples: `Activity: Roof Vocabulary Word Search — The teacher distributes a printed word search to small groups to collaboratively identify 12 key terms as pre-exposure to roof framing vocabulary.
 
Hidden terms: AsphaltShingles, CeilingJoist, Ceramic, CollarTie, Gable, Hip, Rafters, RidgeBoard, Roof, Shed, Tail, Valley`,
    discuss1: `Legal Standard in Roofing (National Building Code Section 1210):
- Height Limit: Roof structures like water tank enclosures generally must not exceed 3.60 meters in height.
- Area Coverage: Combined structures on the roof must not occupy more than 1/3 of the total roof area.
- Usage Restriction: For equipment only (AC units, elevators/tanks); if intended for living spaces, must follow "New Storey" rules.
 
Roof Framing Components:
- Rafters – extend from ridge down to wall plate; support roof covering
- Ridge Board – horizontal member at the top; connects upper ends of rafters; forms the peak
- Collar Tie – connects opposing rafters; prevents spreading; increases structural stability
- Ceiling Joist – transfers load to vertical supports; prevents structural collapse
- Tail (Rafter Tail) – extended part beyond the wall, forming the eaves
 
Activity: Framing Identification & Legal Check — Students label a blank framing diagram (5 parts with functions) and answer a legal scenario about a roof exceeding the 3.60m height limit.
Answer Key — Part 1: 1-Ridge Board, 2-Rafters, 3-Ceiling Joist, 4-Tail, 5-Collar Tie
Answer Key — Part 2: The Rafters and Collar Ties would experience the most stress. Rafters act as the main support for the roof's surface area, and collar ties are responsible for preventing the frame from spreading apart under heavy wind loads.`,
    discuss2: `Types of Roof Design:
- Hip Roof (Quatro Aguas): 4 slopes in all directions; most wind-resistant; excellent drainage with multiple gutters
- Gable Roof: 2 slopes; good drainage but prone to wind uplift from triangular overhangs
- Butterfly/Valley Roof: V-shaped; aerodynamic but single central gutter prone to overflow and blockage
- Shed/Skillion Roof: Single slope; simple; prone to wind uplift if underside is exposed
 
Types of Roofing Materials:
- Galvanized Iron (G.I.) Sheets: Zinc-coated metal; low-cost, lightweight; conducts heat and noise; prone to corrosion if coating is lost
- Ceramic Roof: Baked clay; durable, water-resistant; heavier than other materials, requires stronger support
- Banawe Design Panels: Horizontally aligned; heat insulation layer; efficient water runoff; corrosion-resistant
- Asphalt Shingles: Fiberglass/organic base; waterproof, wind-resistant; requires underlayment
 
Activity: The Carpentry Consultant — Students receive case scenarios (windy hilltop, V-shaped modern house, cheap lightweight extension) and recommend roof design + material combinations.`,
    mastery: `Class discussion of "Carpentry Consultant" results. Multiple groups with the same scenario compare findings. One group per case volunteers to present; others with the same case must defend if they chose differently.`,
    application: `Miniature Roof Construction — Working in groups, construct a miniature roof frame optimized for Philippine weather.
 
Materials per group: Softwood strips or balsa wood; wood glue or rapid-set adhesive; mini-back saw/utility cutter; steel square and ruler; plywood or heavy cardstock base.
 
Instructions:
1. Plan Your Design: Choose a roof design (Hip or Gable) that prioritizes wind resistance and steep drainage.
2. Build the Skeleton: Assemble your model ensuring it includes all 5 major parts: Ridge, Rafters, Ties, Joists, and Tails.
3. Secure the Joints: Ensure all joints are firmly bonded with glue to prevent spreading or lifting.
4. Check the Law: Verify your frame follows the height and area rules of the National Building Code.
 
Rubric (20 pts): Technical Accuracy (5) | Structural Stability (5) | Workmanship (5) | Safety & Habits (5)`,
    generalization: `KWL Chart — Students complete a table:
K (What I Know) | W (What I Want to Know) | L (What I Learned)
 
Teacher concludes: "A roof is not just a cover; it is an engineered system. To build a house that lasts, a carpenter must balance the Technical Framing (Ridge, Rafters, Ties) with the Legal Standards (National Building Code) to ensure the safety of every person living under that roof."`,
    evaluation: `Part I: Multiple Choice (10 items)
Answer Key: 1-B, 2-C, 3-B, 4-C, 5-C, 6-B, 7-C, 8-A, 9-B, 10-B
 
Part II: Identification (5 items, 2 pts each)
Answer Key: 1-Ridge Board, 2-Banawe Design, 3-Gable (or Gable Roof), 4-Tail/Rafter Tail, 5-Galvanization`,
    remarks: '',
    ref1:'', ref2:'', ref3:'', ref4:'', refE:'', refF:'', refG:''
  },
  {
    id: 'dll-ceiling',
    title: 'Ceiling',
    subject: 'Industrial Arts – Carpentry Works in Residential Structure',
    grade: 'Grade 9 – 1st/3rd Quarter',
    quarter: '1st/3rd Quarter',
    contentStandards: 'The learners must demonstrate an understanding of the concepts and principles of carpentry works in applying and installing Ceiling.',
    perfStandards: '',
    objectives: `Learning Competency: Discuss the importance of carpentry works in residential structures.
 
By the end of the lesson, the learners should be able to:
1. Know how to install and apply ceilings.
2. Identify the different types of ceiling.
3. Describe the parts and functions of a ceiling structure (e.g., ceiling joists, furring strips, ceiling boards, trusses).
4. Demonstrate understanding by interpreting a simple reflected ceiling plan or layout.`,
    subjectMatter: 'Carpentry Works in Residential Structure - Ceiling',
    references: 'MATATAG-EPP TLE CG Grades 4-10: pp. 169-170',
    materials: 'Miniature House Model; Self-paced Quiz (OER Website); TV; Laptop; Slide Presentation',
    review: `Activity: Complete the statements — Students complete sentences to recall the importance of ceiling construction:
- "Ceilings are installed to ___."
- "A properly constructed ceiling ensures ___."
 
Transition: "While ceilings provide a finished interior appearance and conceal overhead structures, the selection of appropriate ceiling materials and design directly affects the room's comfort, acoustics, and overall visual appeal."`,
    purpose: `Activity: Structural Case Analysis — Study and examine the provided image of a ceiling collapse and answer:
1. What could be the possible cause of the ceiling failure?
2. Looking at this image of the ceiling collapse, have you or your family ever experienced a similar situation where a ceiling was damaged (e.g., due to a leak, old materials, or improper installation)?
3. How did you and your family deal with that situation at the moment it happened?`,
    examples: '',
    discuss1: '',
    discuss2: '',
    mastery: '',
    application: '',
    generalization: '',
    evaluation: '',
    remarks: '',
    ref1:'', ref2:'', ref3:'', ref4:'', refE:'', refF:'', refG:''
  },
  {
    id: 'dll-flooring',
    title: 'Flooring',
    subject: 'Industrial Arts – Carpentry Works in Residential Structure',
    grade: 'Grade 9 – 1st/3rd Quarter',
    quarter: '1st/3rd Quarter',
    contentStandards: 'Demonstrate an understanding of the concepts, design principles, and safety standards in constructing floors within residential structures.',
    perfStandards: '',
    objectives: `Learning Competency: Discuss the importance of carpentry works in residential structure.
 
By the end of the lesson, the learners should be able to:
1. Identify the parts of a floor system and different types of floors.
2. Describe the parts and functions of a floor structure (e.g., joists, girders, subfloors, beams).
3. Interpret a simple floor plan or layout.`,
    subjectMatter: 'Carpentry Works in Residential Structure - Flooring',
    references: 'Singh, K. (2021) Types of Floor Finishes — engineeringcivil.com; Wesbeam (2024) Main Components of a Floor System — wesbeam.com',
    materials: 'Miniature House Model; 6 envelopes (floor plan + floor texture samples: wood, concrete, ceramic, laminate, rubber); TV; Laptop; Slide Presentation',
    review: 'The teacher will prompt the learners to recall the different parts of a house and their accompanying definitions and functions discussed so far.',
    purpose: `1. Present the objectives of the lesson.
2. Present different types of floor finishes.
3. Ask students: (a) Which of these floor finishes have they seen? (b) Where did they see them? (c) Which floors would you like in your dream house? Why?
4. Elicit responses and pique student interest in the different types of floor finishes.`,
    examples: `A floor is a flat surface in a building used for walking and supporting loads. Good flooring must be strong (can carry weight), level (even surface), and durable (long-lasting). Proper floor construction ensures safety, comfort, and stability.
 
Parts of a Floor System:
- Floor Joist – supports the entire floor
- Floor Bearers – provides direct support to the floor joists
- Floor Girders – provides support to smaller joists
- Subfloors – sits on top of the floor system to help support loads
- Floor Finish – the final part, decorative top layer
 
Types of Floors:
- Concrete Floor – very strong, used in ground floors
- Wooden Floor – lighter, common in elevated houses
- Laminates – board made of fibre, compressed to make a thin flat plate
- Ceramic Floor – commonly tiles made of sand; extensively used in kitchens and bathrooms
- Rubber Floor – offers great elasticity; mainly used for domestic use`,
    discuss1: `Group Activity: Teacher distributes learning materials in envelopes — each contains a simple floor plan and different floor textures (wood, concrete, ceramic, laminate, rubber). Learners must choose textures and paste them over different rooms of the floor plan.
 
Groups present their outputs and answer:
1. Why did you choose this specific floor finish for this specific room?
2. What factors influenced your decision to choose this specific floor finish?`,
    discuss2: '',
    mastery: 'Add questions based on the floor systems and types of floors.',
    application: 'The teacher will emphasize how floors are essential in residential carpentry. Learning the process behind creating and choosing these floors will help us in maintaining and repairing the floors in our own house.',
    generalization: `1. Ask the learners to summarize the lesson.
2. Ask them if the type of floor they chose changed after the discussion of the lesson.
 
The class will review the five (5) different parts of a floor system, and the five (5) types of floor finish. Then, the teacher will ask:
"Referring to your answers to the question in the beginning, do you still want those floors present in your dream house? Did your opinions change? Why?"`,
    evaluation: `10-item assessment on a ¼ sheet of paper.
 
A. LABEL: Label each part of a floor system. Then give a short description of each part.
1. Joist  2. Bearer  3. Girder  4. Subfloor  5. Finish
 
B. IDENTIFICATION: Identify which floor finish is being explained.
6. Very strong, used in ground floors → Concrete Floor
7. Offers a great amount of elasticity, is mainly used for domestic use → Rubber Floor
8. Board made of fibre, compressed to make a thin flat plate → Laminates
9. Lighter, common in elevated houses → Wooden Floor
10. Commonly tiles made of sand, extensively used in kitchens and bathrooms → Ceramic Floor`,
    remarks: '',
    ref1:'', ref2:'', ref3:'', ref4:'', refE:'', refF:'', refG:''
  },
  {
    id: 'dll-stairs',
    title: 'Stairs & Railings',
    subject: 'Industrial Arts – Carpentry Works in Residential Structure',
    grade: 'Grade 9 – 1st/3rd Quarter',
    quarter: '1st/3rd Quarter',
    contentStandards: 'The students demonstrate an understanding of the concepts and principles of carpentry works in residential structures.',
    perfStandards: '',
    objectives: `Learning Competency: Discuss the importance of carpentry works in residential structure.
 
Cognitive:
- Explain the purpose of stairs and railings in residential structures.
- Identify the common parts and types of stairs (straight, L-shaped, U-shaped, spiral) and railing materials (wood, metal, glass).
- Interpret basic stair and railing plans or reference layouts.
 
Psychomotor:
- Measure stair dimensions such as rise, run, tread, and width.
- Construct or simulate a miniature stair and railing model using basic materials and tools, following proper carpentry techniques.
 
Affective:
- Demonstrate appreciation for the role of stairs and railings in creating safe and functional homes.
- Value careful planning and proper execution in carpentry work to ensure safety and aesthetics.`,
    subjectMatter: 'Carpentry Works in Residential Structure - Stairs and Railings',
    references: `PD 1096 (National Building Code); BP 344 (Accessibility Law 2024 Revised IRR); Lapeyre Stair (2021); Pelletier (2024) Alpha Building Inspections; Nikki's Plate (2024)`,
    materials: 'Miniature House Model; Self-paced Quiz (OER Website); TV; Laptop; Slide Presentation; 2 sheets A4 foam board/illustration board; 10-12 bamboo skewers; hot glue gun; steel ruler; utility cutter; pencil; protractor; sandpaper scraps',
    review: `SHORT REVIEW:
- Ask learners to recall parts of a house (roof, walls, floor, etc.).
- Show a simple house illustration and ask:
  - "Where do we usually use stairs?"
  - "What helps us stay safe when using stairs?"`,
    purpose: `Lesson Purpose: The learners will identify and understand the parts, types, and functions of stairs and railings.
 
The teacher asks:
- Have you seen different types of stairs in your home or school?
- Why do we need railings when using stairs?
- What might happen if stairs or railings are not properly designed?
 
The teacher briefly processes answers and relates them to the importance of safety and proper construction.`,
    examples: `The teacher introduces stairs and railings as parts of a house, including their basic concepts and types. The teacher presents images of different stairs and railings. Learners identify the type shown and describe where they commonly see them.`,
    discuss1: `Activity: Jumbled Words — Teacher presents staircase diagram; students arrange jumbled words to identify parts:
DRETA (Tread) | RESIR (Riser) | SINGON (Nosing) | TUBSLERA (Baluster) | LRHANDIA (Handrail) | RGSERTIN (Stringer) | LENWE OSTP (Newel Post)
 
Teacher then presents a matrix with: Parts of the staircase | Description | Commonly Used Materials.
 
Types of Stairs: Straight, L-shaped, U-shaped, Spiral
Types of Railings: Wood, Metal, Glass, Cable, Stone and Concrete`,
    discuss2: `National Building Code Standards (P.D. 1096 & B.P. 344):
 
Riser Height: Maximum 200mm — prevents steep incline that causes overexertion and loss of balance.
Tread Width: Minimum 250mm — ensures sufficient area to support the average human foot; prevents slipping during descent.
Uniformity Rule: Variation between adjacent risers/treads must not exceed 5mm — prevents disruption of muscle memory and gait.
Handrail Height (B.P. 344): 800mm–900mm — allows comfortable "elbow-flex" position for stable grip.
Grip Diameter: 30–50mm; Wall Clearance: minimum 38mm.
Handrail Extension (B.P. 344): Extend 300mm past the top and bottom steps.
 
Activity: The Home Audit — Students measure a staircase at home and complete a "Code vs. Reality" table:
Feature | My Measurement | Legal Standard (PD 1096/BP 344) | Status (Pass/Fail)
Max Riser | __ | 200mm Max | __
Min Tread | __ | 250mm Min | __
Rail Height | __ | 800–900mm | __
Step Uniformity | __ | 5mm Max Variation | __
 
Reflection questions:
- If a senior citizen were to use this staircase, what specific feature would pose the greatest risk?
- Did you notice any 'uneven' steps? How does this affect your own 'muscle memory' when you walk up these stairs in the dark?`,
    mastery: '',
    application: `Activity: "Building for Safety: The Miniature Stair Challenge"
 
Scale: 1:10 | The teacher acts as Project Supervisor.
 
Materials per team: 2 sheets A4 foam board or thick illustration board; 10-12 bamboo skewers; hot glue gun; steel ruler; utility cutter; pencil; protractor; sandpaper scraps; cutting mat.
 
Step-by-Step Instructions:
1. Scaling Phase: Max Riser 200mm → 20mm; Min Tread 250mm → 25mm; Rail Height 800–900mm → 80–90mm; Handrail Extension 300mm → 30mm.
2. Layout & Marking: Draw the "zigzag" pattern on the stringer board; ensure uniformity (max 0.5mm variation at scale).
3. The Master Cut: Cut two identical stringers.
4. Tread Attachment: Cut treads to scaled width; glue horizontally to stringers, ensure each step is level.
5. Safety Install (B.P. 344): Mount newel posts; attach handrail at 80–90mm; extend 30mm past top/bottom; glue tactile warning blocks (sandpaper) at top/bottom, 60mm deep.
6. Final Audit: Measure finished model against Code vs. Reality table.
 
Rubric (20 pts): Technical Accuracy (5) | Safety Features (5) | Structural Stability (5) | Workmanship (5)`,
    generalization: `Think-Pair-Share: Synthesize understanding of stair parts and types of railings.
 
Reflective Question: "Imagine you are helping build a staircase in your home. How will your knowledge about the parts and types of stairs and railings help you in making it safe and functional?"
 
Teacher emphasizes: Understanding components and types of stairs and railings is essential for proper planning, accurate measurements, and adherence to safety standards.`,
    evaluation: `Identification (10 items):
1. Tread
2. Riser
3. Nosing
4. Straight Stairs
5. Glass Railing
6. 200mm
7. 250mm
8. Headroom Clearance
9. Handrail
10. 800mm–900mm`,
    remarks: '',
    ref1:'', ref2:'', ref3:'', ref4:'', refE:'', refF:'', refG:''
  },
  {
    id: 'dll-doors',
    title: 'Doors',
    subject: 'Industrial Arts – Carpentry Works in Residential Structure',
    grade: 'Grade 9 – 1st/3rd Quarter',
    quarter: '1st/3rd Quarter',
    contentStandards: 'The Learners demonstrate an understanding of the concepts and principles of carpentry works in residential structures.',
    perfStandards: '',
    objectives: `Learning Competency: Discuss the importance of carpentry works in residential structure.
 
- (Cognitive) Explain the importance of proper installing of doors and identify the different types of a door used in residential structures.
- (Psychomotor) Demonstrate the correct process of installing a door for a specific room of a residential structure.
- (Affective) Demonstrate appreciation for the proper choice of door type and its proper installation in constructing safe, functional, and well-designed residential homes.`,
    subjectMatter: 'Carpentry Works in Residential Structure - Doors',
    references: 'Civil Today (types of doors); Salisbury Joinery (parts of a door); wikiHow (how to install a door); PD 1096 (National Building Code); RA 9514 (Fire Code of the Philippines 2008)',
    materials: 'Miniature House Model; Self-paced Quiz (OER Website); TV; Laptop; Slide Presentation',
    review: `Preliminaries:
a. Checking of Attendance
b. Reviewing class rules
c. Checking of Assigned Activity Materials
 
The teacher asks:
- What component was tackled from the last session?
- What topics or terms can they recall from the last session?
- How did you feel about the previous lesson and activities? Do you feel the instructional pace was too fast or too slow?`,
    purpose: `Motivational Activity: "What am I?"
 
Riddle: "I have a handle, but I cannot hold. I have a frame, but I am not a picture. I stand between two worlds, granting passage to the welcome and silence to the weary. I am strongest when I am locked, but most useful when I am forgotten and left open. What am I?"
 
Answer: Door
 
The teacher now presents the definition of the Door.`,
    examples: `Activity: "Which Door Fits?" — Students choose the most suitable door for each Filipino residential scenario:
1. Main Entrance of a Street-Side House
2. The Common Toilet and Bath
3. Main Kitchen leading to the "Outside Dirty Kitchen" (Service Area)
4. The Bedroom (Second Floor of a Townhouse)
5. Small Studio Unit or Tight Hallway Closet
6. The Sari-Sari Store Front (Integrated into the Residence)
7. The "Balkonahe" (High-Rise Condo or 2nd Floor Balcony)
8. The Residential Garage (One-Car Parking)
9. Access to the Roof Deck (Roof-Top Laundry/Hang-out)
10. Storage Space Under the Stairs (Bodega)
 
Closing Thought: "In the Philippines, why do we rarely use 100% solid wood for our bathroom doors?" (Water damage and termites)`,
    discuss1: `Types of Doors — students guess from 2 choices per picture before teacher explains:
 
Based on Materials Used:
- Wooden Door — premium, customizable; soundproof and waterproof options; requires high maintenance; must be sealed before installation to prevent moisture absorption
- Metal Door — durable, corrosion-resistant; windstorm and fire-rated options; prone to rusting without protective coatings
- UPVC Door — maintenance-free, lightweight, won't warp or rot; features multipoint locking; not recommended for main front entries due to lightweight nature
 
Based on Mechanism and Usage:
- Sliding Doors (Patio Doors) — move horizontally; space-saving; floor tracks easily collect dirt
- Composite Door — blend of PVC, wood, insulating foam, and GRP/fiberglass; extremely secure and energy-efficient
- Swinging Door — swings on hinges in one or both directions; convenient for kitchens and laundry rooms
- Folding Door (Bi-fold) — fold back in sections; can open up to 90% of a space; installation is complex`,
    discuss2: `Parts of a Door: Top Rail, Freeze Rail, Middle Rail, Bottom Rail, Stiles, Lock Stile, Panel, Top Mullion, Mid Mullion, Lower Mullion, Moulding, Frame or Lining
 
Parts of a Door Frame: Head, Legs or Jambs, Stops, Architrave, Cill or Threshold
 
Installing a Door Frame:
Step 1: Prepare the Opening → Step 2: Check for Level → Step 3: Position the Frame → Step 4: Perfect Vertical Plumb → Step 5: Perfect 90° corners → Step 6: Anchor the Frame
 
Installing a Door:
Step 1: Measure and Trim → Step 2: Cut Hinge Recesses → Step 3: Drill Pilot Holes → Step 4: Seal for Moisture → Step 5: Position and Level → Step 6: Attach Hinges → Step 7: Final Test
 
National Building Code & Fire Code Standards (P.D. 1096 & R.A. 9514):
- Minimum Clear Width: Main door min. 0.90m; Bedrooms 0.70–0.80m; Bathrooms 0.60m; Height min. 2.00m
- Direction of Swing: Residential may swing inward (must not obstruct stairs/hallways); public/high-occupancy must swing outward
- Locking Hardware: Must open from inside without key/tool (Fire Code) — use thumb-turn deadbolts
- Accessibility: Max threshold height 25mm for wheelchairs; lever-type handles legally preferred over round *****`,
    mastery: '',
    application: 'The teacher will emphasize how doors are essential in residential carpentry. Learning the process behind creating and choosing these doors will help us in maintaining and installing the doors in our own house.',
    generalization: `The class reviews: types of doors, parts of a door and its frame, how to install a door and door frame, and the required key areas of the National Building Code and Fire Code.
 
Teacher asks: Do you think, from today's residential homes, fully follows the requirements of the law? How would they change or solve different scenarios faced by the residential building? Why do they need to consider changing it according to the law?`,
    evaluation: `2-part activity on 1 whole sheet of paper:
Part A: Label each missing part of the door and door frame (from provided diagram).
Part B: Write down the missing steps in installing a door and door frame (from provided sequence).`,
    remarks: '',
    ref1:'', ref2:'', ref3:'', ref4:'', refE:'', refF:'', refG:''
  },
  {
    id: 'dll-windows',
    title: 'Windows',
    subject: 'Industrial Arts – Carpentry Works in Residential Structure',
    grade: 'Grade 9 – 1st/3rd Quarter',
    quarter: '1st/3rd Quarter',
    contentStandards: 'The learners demonstrate an understanding of the concepts, principles, and skills in constructing and installing windows for residential structures. (Based on MATATAG Curriculum, pp. 169-170)',
    perfStandards: 'The learners, based on carpentry job requirements, shall be able to construct a miniature, operable window and install it on a model residential structure, observing safety precautions.',
    objectives: `At the end of the lesson, the learners should be able to:
1. Identify the different types of windows (by operation and material), their parts, and interpret window schedules. (Cognitive)
2. Assemble a miniature window from pre-cut parts, demonstrating proper joinery and hardware installation. (Psychomotor)
3. Appreciate the importance of choosing the right window for safety, ventilation, and aesthetics. (Affective)`,
    subjectMatter: 'Residential Carpentry: Windows — Types by Operation and Material, Parts of a Window, Window Plans and Specifications, Installation Principles, National Building Code Requirements (Section 808)',
    references: 'MATATAG CG pp. 169-170; Philippine National Building Code (P.D. 1096) Rule VIII Section 808; The Constructor (2020) 16 Types of Windows',
    materials: 'Miniature House Model; Basswood/balsa wood strips; Clear acetate sheets; Small hinges, hooks, and eyelets; Wood glue; Small nails/pins; Sandpaper; Self-paced Quiz (OER Website); TV; Laptop; Slide Presentation',
    review: `The teacher shows the partition model and asks: "What did we build last time?" "What comes after walls?" "Today we'll learn about windows — how they are built, what types exist, and how to choose the right one."`,
    purpose: `Motivational Activity: "The Architect & The Contractor" — Pairs are split into Architects (scenarios) and Contractors (window types). Without looking at each other's lists, they must match:
- "A room that only needs light, no opening." → Fixed
- "A kitchen that needs ventilation even during light rain." → Awning
- "A traditional house with two sashes that slide up and down." → Double-hung
- "A narrow hallway that can't have a swinging window." → Sliding
Pairs check their matches together before the teacher explains the logic.`,
    examples: `Activity: "The Plan Check" (Split into 2 Groups)
Each group receives a sample architectural plan and window schedule. Students identify:
• How many windows are in the plan?
• What is the type and size of Window W-1?
"Every window is specified in the schedule. Today you'll create your own window specification."`,
    discuss1: `Types of Windows (with pictures):
By operation: casement, awning, sliding, double-hung, jalousie, fixed.
By material: wood, aluminum, uPVC.
The teacher emphasizes that the choice affects durability, maintenance, and cost.`,
    discuss2: `Parts of a Window (using a diagram):
• Frame: head (top horizontal), jamb (side verticals), sill (bottom horizontal).
• Sash: stiles (vertical), rails (horizontal), glass (glazing).
• Hardware: hinges, locks, cranks.
• Weatherstripping: seals gaps between sash and frame against air/water leakage.
• Muntins: small bars separating individual panes of glass.
 
Installation Reminders: Leveling, flashing, anchoring, and rough opening dimensions.
Code reminder: Minimum window area = 10% of floor area for natural light (National Building Code, Section 808); openable area = 5% for ventilation; bedroom egress min. 0.60m × 0.60m.`,
    mastery: `Activity: "Label the Window" — Individually, students are given a printed diagram of a window (frame and sash) with numbered arrows. They write the names of the parts (head, jamb, sill, stile, rail, glass).`,
    application: `Hands-on: Design a Window for a Miniature House
 
Objective: Each group will design a window appropriate for a given room (bedroom, bathroom, kitchen) in the miniature house.
 
Steps:
1. Select window type based on room function (e.g., awning for kitchen, fixed for storage).
2. Calculate minimum area (10% of floor area) and propose dimensions.
3. Sketch the window (front view) and label its key parts (head, jamb, sill, sash).
4. Specify material (wood, aluminum, or uPVC) and any hardware.
5. Present one design to the class (optional).`,
    generalization: `Ask: "Why do we need different window types?" (Different needs: ventilation, privacy, space)
"Why is it important to calculate window area based on the room?" (Ensures enough light and ventilation; complies with code)
"How does the window type affect the house's safety and comfort?" (Emergency exit, energy efficiency, air quality)`,
    evaluation: `Quick Quiz (paper or self-paced website):
1. A window that swings outward from the side is called ___. (casement)
2. The horizontal top part of the window frame is the ___. (head)
3. What is weatherstripping used for? (Seals gaps against air/water)
4. Name one window type that does not open. (fixed)
5. According to the National Building Code, the minimum window area for natural light is ___% of the floor area. (10)`,
    remarks: '',
    ref1:'', ref2:'', ref3:'', ref4:'', refE:'', refF:'', refG:''
  },
  {
    id: 'dll-cabinets',
    title: 'Cabinets',
    subject: 'Industrial Arts – Carpentry Works in Residential Structure',
    grade: 'Grade 9 – 1st/3rd Quarter',
    quarter: '1st/3rd Quarter',
    contentStandards: 'The students demonstrate an understanding of the concepts and principles of carpentry works in residential structures.',
    perfStandards: 'The students independently perform residential carpentry repairs following safety precautions.',
    objectives: `Learning Competency: Discuss the importance of carpentry works in residential structure.
 
Learning Objectives:
- Identify and explain the different types of cabinets, their parts, importance, and materials used in residential structures.
- Sketch a simple cabinet design, label its parts, and identify appropriate tools and materials.
- Appreciate the value of cabinets in organizing the home, promoting safety, and improving living conditions.`,
    subjectMatter: 'Residential Carpentry - Cabinets: Types (Kitchen, Wall, Base, Storage), Parts (Frame, Door, Shelves, Hinges, Handles/*****), Importance, Materials Used, Safety Precautions',
    references: 'MATATAG-EPP TLE CG Grades 4-10: Page 169',
    materials: 'Miniature House Model (including cabinet section); Self-paced Quiz (OER Website); TV; Laptop; Slide Presentation',
    review: `The teacher asks students:
- What are the different parts of a residential structure?
- What is the function of doors and windows?
- Aside from doors and windows, what else helps organize things inside the house?`,
    purpose: `The teacher presents images of cabinets and asks:
- Do you have cabinets at home?
- What items do you store inside?
- What will happen if there are no cabinets?
 
Expected Answers: Storage of clothes, tools, kitchen items; house becomes messy/disorganized.
The teacher explains why learning about cabinets is important.`,
    examples: `Types of Cabinets: Kitchen Cabinets, Wall Cabinets, Base Cabinets, Storage Cabinets
 
Parts of a Cabinet: Frame, Door, Shelves, Hinges, Handles/*****
 
Importance of Cabinets:
- Organization of items
- Protection of materials
- Cleanliness and safety
- Improves house appearance
 
Materials Used: Wood and plywood; Nails and screws; Hinges and handles; Finishing materials (paint, varnish)
 
Safety Precautions: Wear protective equipment; Handle tools properly; Keep work area clean; Follow proper procedures`,
    discuss1: `Guided Practice: Learners sketch a simple cabinet design and label its parts and identify tools/materials used.
 
Group Activity — Each group:
- Draws a cabinet
- Labels its parts
- Presents their work
 
Guide Questions: What type of cabinet did you draw? What are its parts?`,
    discuss2: '', mastery: '', application: '', generalization: '',
    evaluation: `A. Enumerate:
1. Name four types of cabinets used in residential structures.
(Kitchen Cabinets, Wall Cabinets, Base Cabinets, Storage Cabinets)
 
2. Name five parts of cabinets used in residential structures.
(Frame, Door, Shelves, Hinges, Handles/*****)
 
B. Essay: In your own words, explain the importance of cabinets in a residential structure.`,
    remarks: '',
    ref1:'', ref2:'', ref3:'', ref4:'', refE:'', refF:'', refG:''
  }
];
 
/* ────────────────────────────────────────
   MODULE CONTENT DATA
   Each module has:
     key      — matches the filename (e.g. "partitions" → modules/partitions.html)
     num      — display number
     title    — display title
     subtitle — short description
     content  — full HTML string rendered inside the module page
   ──────────────────────────────────────── */
/* ============================================================
   REPLACEMENT for const MODULE_DATA in data.js
   Replace everything from "const MODULE_DATA = {" through
   its closing "};" with this entire block.
   ============================================================ */

const MODULE_DATA = {

  roofs: {
    key: 'roofs', num: '02', title: 'Roofs',
    subtitle: 'Roofing systems, framing, materials, and construction techniques',
    quarter: 'QUARTER NO. II/IV',
    topic: 'Carpentry Works in Residential Structure - Roofing',
    competencies: `<ul>
      <li>The learners discuss the importance of carpentry works in residential structure.</li>
    </ul>`,
    objectives: `<p>At the end of the lesson, the learners will be able to:</p>
    <ul>
      <li>Explain the legal restrictions for roof structures according to Section 1210 of the National Building Code of the Philippines.</li>
      <li>Analyze various roof design and framing parts based on their structural functions and resistance to environmental elements like wind and rain.</li>
      <li>Construct a miniature roof model that demonstrates the assembly of basic carpentry components using the most appropriate roof design and materials for Philippine residential structure.</li>
      <li>Value the importance of precise framing and high quality materials in maintaining a safe and comfortable living environment for the family.</li>
    </ul>`,
    recall: `<p>Before we dive into the technical "skeleton" of a house, let us look back at what you already know about the structures around you. A roof is more than just a cover; it is a shield that protects a family from the elements.</p>
    <p><strong>A. Quick Check</strong></p>
    <p>Reflect on the houses in your community and answer the following questions.</p>
    <ol>
      <li>When you look at a house from the outside, how many slopes or sides does the roof usually have?<br><em>(Write your answer on the line provided.)</em></li>
      <li>What do you think is the most important 'job' of a roof when there is a very strong typhoon?<br><em>(Write your answer on the line provided.)</em></li>
    </ol>
    <p><strong>B. Structural Case Analysis</strong></p>
    <p>Act as a junior building inspector. Examine the aerial view of the destruction caused by <strong>Typhoon Odette in Barangay Punta Bilar, Surigao City</strong> and answer:</p>
    <ol>
      <li>Based on your observation, what could be the possible cause of this roof failure?</li>
      <li>Looking at this image, have your family ever experienced a similar situation where your roof was damaged by a strong storm?</li>
      <li>How did you and your family deal with that situation at the moment it happened?</li>
    </ol>
    <p><em>"The damage we see highlights why understanding the 'how' and 'why' of roof construction is important. Before we learn how to build a roof that stays strong during a storm, we must first master the technical vocabulary of its parts."</em></p>`,
    understand: `<p>Before we dive deep into the technical principles of roofing, let's see how many essential carpentry terms you can identify.</p>
    <p><strong>Activity 1: Roof Vocabulary Word Search</strong></p>
    <p><strong>Direction:</strong> Act as technical scout. Scan the grid to find and circle the 12 key terms related to roof framing and design. These words are hidden horizontally, vertically, and diagonally.</p>
    <p><strong>HIDDEN TERMS TO FIND:</strong></p>
    <p>AsphaltShingles &nbsp; CeilingJoist &nbsp; Ceramic &nbsp; CollarTie &nbsp; Gable &nbsp; Hip &nbsp; Rafters &nbsp; RidgeBoard &nbsp; Roof &nbsp; Shed &nbsp; Tail &nbsp; Valley</p>
    <hr>
    <p><strong>Legal Standards in Roofing (National Building Code Section 1210)</strong></p>
    <ol>
      <li><strong>Height Limit:</strong> Structures on top of the roof should generally not exceed <strong>3.60 meters</strong> unless they are for elevators/tanks in specific builds.</li>
      <li><strong>Area Coverage:</strong> All structures on the roof combined should not take up more than <strong>1/3 (one-third)</strong> of the total roof area.</li>
      <li><strong>Usage:</strong> Roof structures are for shelter of equipment (AC units or elevator shafts) only. If intended as a living space, it must follow the rules of a "New Storey."</li>
    </ol>
    <p><strong>Roof Framing Parts</strong></p>
    <ul>
      <li><strong>Rafters</strong> — Structural members that extend from the ridge or hip down to the wall plate; support the roof covering.</li>
      <li><strong>Ridge Board</strong> — Horizontal member at the very top of the roof connecting the upper ends of the rafters, forming the peak.</li>
      <li><strong>Collar Tie</strong> — Horizontal members connecting opposing rafters near the ridge; prevent the roof from spreading and increase structural stability.</li>
      <li><strong>Ceiling Joist</strong> — Horizontal members that transfer the load of the roof to vertical supports; essential in preventing structural collapse.</li>
      <li><strong>Tail (Rafter Tail)</strong> — The extended part of the rafter beyond the wall, forming the eaves of the house.</li>
    </ul>
    <p><strong>Types of Roof Design</strong></p>
    <ol>
      <li><strong>Hip Roof (Quatro Aguas)</strong> — Four slopes in all directions; most wind-resistant; excellent drainage with multiple gutters.</li>
      <li><strong>Gable Roof</strong> — Two planes meeting at a ridge; good drainage but most prone to wind uplift due to exposed triangular overhangs.</li>
      <li><strong>Valley/Butterfly Roof</strong> — V-shape; highly aerodynamic; single central gutter prone to overflow and blockage.</li>
      <li><strong>Shed/Skillion Roof</strong> — Single slope; smooth wind flow but prone to uplift if underside is exposed.</li>
    </ol>
    <p><strong>Roofing Materials and Their Properties</strong></p>
    <ol>
      <li><strong>Galvanized Iron (G.I.) Sheets</strong> — Metal base coated with zinc for rust protection; low-cost and lightweight; conducts heat and noise; prone to corrosion if coating is lost.</li>
      <li><strong>Ceramic Roof</strong> — Made from dried and baked clay; durable, water-resistant; heavier than metal, requiring stronger support structure.</li>
      <li><strong>Banawe Design</strong> — Horizontally aligned panels with heat insulation underneath; efficient water runoff; heat-resistant; corrosion-resistant.</li>
      <li><strong>Asphalt Shingles</strong> — Fiberglass or organic base; waterproof and wind-resistant; effective heat barrier; requires underlayment for proper installation.</li>
    </ol>`,
    apply: `<p><strong>Activity 2: Framing Identification &amp; Legal Check</strong></p>
    <p>In this activity, you will apply what you have learned about the "skeleton" of a roof.</p>
    <p><strong>Part 1: Identifying the Roof Frame</strong></p>
    <p><strong>Direction:</strong> On your activity sheet, identify the five (5) major parts of the roof frame. Beside each name, write a short sentence describing that part's specific function.</p>
    <table style="width:100%;border-collapse:collapse;margin-top:8px">
      <tr style="background:var(--comp-bg)"><th style="border:1px solid var(--comp-border);padding:8px">No.</th><th style="border:1px solid var(--comp-border);padding:8px">Roof Framing Parts</th><th style="border:1px solid var(--comp-border);padding:8px">Structural Function</th></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:8px">1</td><td style="border:1px solid var(--comp-border);padding:8px"></td><td style="border:1px solid var(--comp-border);padding:8px"></td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:8px">2</td><td style="border:1px solid var(--comp-border);padding:8px"></td><td style="border:1px solid var(--comp-border);padding:8px"></td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:8px">3</td><td style="border:1px solid var(--comp-border);padding:8px"></td><td style="border:1px solid var(--comp-border);padding:8px"></td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:8px">4</td><td style="border:1px solid var(--comp-border);padding:8px"></td><td style="border:1px solid var(--comp-border);padding:8px"></td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:8px">5</td><td style="border:1px solid var(--comp-border);padding:8px"></td><td style="border:1px solid var(--comp-border);padding:8px"></td></tr>
    </table>
    <p style="margin-top:16px"><strong>Part 2: Legal Case Analysis</strong></p>
    <p><em>"A carpenter builds a new roof structure that is 4.50 meters tall. This exceeds the 3.60-meter height limit allowed by Section 1210 of the National Building Code."</em></p>
    <p><strong>Question:</strong> Because of the extra, illegal height, the roof will face much stronger wind pressure during a typhoon. Which specific parts of the roof frame (e.g., Ridge Board, Rafters, etc.) would experience the most stress? Explain why these parts are most at risk.</p>
    <p><strong>Answer Key (Teacher Reference):</strong> The Rafters and Collar Ties would experience the most stress. Rafters act as the main support for the roof's surface area, and collar ties are responsible for preventing the frame from spreading apart under heavy wind loads.</p>`,
    analyze: `<p><strong>Activity 3: The Carpentry Consultant</strong></p>
    <p>You will act as a <strong>Carpentry Consultant</strong>. Select the most appropriate roof design and material for different families based on their specific needs.</p>
    <p><strong>Case 1.</strong> The house is on an open hill where strong winds blow from all directions. The owners want the most wind-resistant roof possible.</p>
    <ul>
      <li>Your Recommendation: _______________</li>
      <li>Technical Question: Why is your chosen design better for high-wind areas compared to a standard Gable roof?</li>
    </ul>
    <p><strong>Case 2.</strong> The owner wants a modern "Butterfly" or V-shaped look. They also want a material that is already insulated to keep the house cool.</p>
    <ul>
      <li>Your Recommendation: _______________</li>
      <li>Technical Question: What is the main structural problem or maintenance issue commonly associated with a "V-shaped" roof gutter?</li>
    </ul>
    <p><strong>Case 3.</strong> A homeowner needs a simple, single-slope roof for a small back room extension. It must be very cheap and lightweight.</p>
    <ul>
      <li>Your Recommendation: _______________</li>
      <li>Technical Question: What specifically happens to metal roofing materials (like G.I. sheets) if they lose their protective paint or zinc coating?</li>
    </ul>`,
    letsCreate: `<p><strong>Activity 4: Miniature Roof Construction</strong></p>
    <p><strong>Goal:</strong> Construct a sturdy miniature roof frame that includes all essential framing parts while following the safety proportions of the National Building Code.</p>
    <p><strong>Materials Needed:</strong></p>
    <ul>
      <li>Framing: Softwood strips or balsa wood</li>
      <li>Adhesives: Wood glue or rapid-set adhesive</li>
      <li>Tools: Mini-back saw/utility cutter, steel square, and ruler</li>
      <li>Base: Plywood or heavy cardstock (simulating wall plates)</li>
    </ul>
    <p><strong>Instructions:</strong></p>
    <ol>
      <li><strong>Plan Your Design:</strong> Choose a roof design (Hip or Gable) that prioritizes wind resistance and steep drainage for heavy rain.</li>
      <li><strong>Build the Skeleton:</strong> Assemble your model ensuring it includes the 5 major parts: Ridge, Rafters, Ties, Joists, and Tails.</li>
      <li><strong>Secure the Joints:</strong> Ensure all joints are firmly bonded with glue to prevent the structure from spreading or lifting.</li>
      <li><strong>Check the Law:</strong> Verify that your frame follows the height and area rules of the National Building Code (keeping structures under the equivalent of 3.60 meters).</li>
    </ol>
    <p><strong>Rubric for Grading (20 points):</strong></p>
    <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:.88rem">
      <tr style="background:var(--comp-bg)"><th style="border:1px solid var(--comp-border);padding:6px">Criteria</th><th style="border:1px solid var(--comp-border);padding:6px">Excellent (5)</th><th style="border:1px solid var(--comp-border);padding:6px">Satisfactory (3-4)</th><th style="border:1px solid var(--comp-border);padding:6px">Needs Improvement (1-2)</th></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px"><strong>Technical Accuracy</strong></td><td style="border:1px solid var(--comp-border);padding:6px">All 5 framing parts correctly placed and proportional</td><td style="border:1px solid var(--comp-border);padding:6px">3-4 framing parts present with minor placement errors</td><td style="border:1px solid var(--comp-border);padding:6px">Only 1-2 major framing components present</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px"><strong>Structural Stability</strong></td><td style="border:1px solid var(--comp-border);padding:6px">Sturdy; all joints firmly connected</td><td style="border:1px solid var(--comp-border);padding:6px">Generally stable but 1-2 loose connections</td><td style="border:1px solid var(--comp-border);padding:6px">3+ loose joints; collapses easily</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px"><strong>Workmanship</strong></td><td style="border:1px solid var(--comp-border);padding:6px">Clean cuts, no excess adhesive, perfectly aligned</td><td style="border:1px solid var(--comp-border);padding:6px">Generally neat but 1-3 visible glue or uneven cuts</td><td style="border:1px solid var(--comp-border);padding:6px">Untidy with 4+ poorly handled cuts</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px"><strong>Cleanliness &amp; Organization</strong></td><td style="border:1px solid var(--comp-border);padding:6px">Work area kept 100% clean; tools neatly returned</td><td style="border:1px solid var(--comp-border);padding:6px">Mostly clean but 1-2 scraps/tools left out</td><td style="border:1px solid var(--comp-border);padding:6px">Work area messy with multiple scraps scattered</td></tr>
    </table>`,
    letsTry: `<p><strong>Instruction:</strong> Read each section carefully. This assessment will check how well you understand roof designs, framing parts, and materials used in Philippine carpentry.</p>
    <p><strong>Part 1: Multiple Choice (10 Items)</strong></p>
    <p>Direction: Read each question carefully and write the answer in the space provided.</p>
    <ol>
      <li>What is the primary purpose of a roof framing plan for contractors?<br>A. To decide the color of the paint<br><strong>B. To determine the feasibility and material needs of the project</strong><br>C. To design the interior furniture layout<br>D. To calculate the distance to the nearest hardware store</li>
      <li>Which structural member extends from the ridge down to the wall plate to support the roof covering?<br>A. Ceiling Joist &nbsp; B. Ridge Board &nbsp; <strong>C. Rafters</strong> &nbsp; D. Collar Tie</li>
      <li>Which roof design is known as "Quatro Aguas" and is considered the most wind-resistant?<br>A. Gable Roof &nbsp; <strong>B. Hip Roof</strong> &nbsp; C. Shed Roof &nbsp; D. Butterfly Roof</li>
      <li>What is a common disadvantage of the Valley or Butterfly roof design?<br>A. It is too heavy for small houses. &nbsp; B. It cannot withstand any wind.<br><strong>C. The single central gutter is prone to blockage and overflow.</strong> &nbsp; D. It uses too many G.I. sheets.</li>
      <li>Which material is made from dried and baked clay and is commonly found in heritage or colonial houses?<br>A. Asphalt Shingles &nbsp; B. Banawe Design &nbsp; <strong>C. Ceramic Roof</strong> &nbsp; D. G.I. Sheets</li>
      <li>Why do Galvanized Iron (G.I.) sheets require zinc coating?<br>A. To make them heavier &nbsp; <strong>B. To provide rust protection</strong> &nbsp; C. To change the color to silver &nbsp; D. To increase heat conduction</li>
      <li>Which roof part prevents the roof from "spreading" and increases structural stability?<br>A. Rafter Tail &nbsp; B. Ridge Board &nbsp; <strong>C. Collar Tie</strong> &nbsp; D. Gutter</li>
      <li>This material consists of fiberglass or organic base and requires an "underlayment" for proper installation:<br><strong>A. Asphalt Shingles</strong> &nbsp; B. Ceramic Tiles &nbsp; C. Banawe Panels &nbsp; D. Corrugated Iron</li>
      <li>Which roof design features a single slope and is often used for simple extensions or sheds?<br>A. Hip Roof &nbsp; <strong>B. Skillion/Shed Roof</strong> &nbsp; C. Gable Roof &nbsp; D. Butterfly Roof</li>
      <li>What is the main structural concern when choosing a Ceramic Roof?<br>A. It is too thin and may fly away. &nbsp; <strong>B. It is heavier than metal, requiring a stronger support structure.</strong><br>C. It cannot be used with rafters. &nbsp; D. It is made of wood and may rot.</li>
    </ol>
    <p><strong>Part 2: Identification (2 points each)</strong></p>
    <ol>
      <li>_____________: The horizontal member at the very top of the roof where rafters meet. <em>(Answer: Ridge Board)</em></li>
      <li>_____________: A type of roofing material that is metal-based and comes with a built-in heat insulation layer underneath. <em>(Answer: Banawe Design)</em></li>
      <li>_____________: The triangular overhangs formed by two roof planes meeting at a ridge. <em>(Answer: Gable)</em></li>
      <li>_____________: The part of the rafter that extends beyond the wall to form the eaves. <em>(Answer: Tail / Rafter Tail)</em></li>
      <li>_____________: The process of coating iron with zinc to prevent corrosion. <em>(Answer: Galvanization)</em></li>
    </ol>`
  },

  ceilings: {
    key: 'ceilings', num: '03', title: 'Ceilings',
    subtitle: 'Ceiling types, key components, installation, and finishing',
    quarter: 'QUARTER NO. II/IV',
    topic: 'Carpentry Works in Residential Structure - Ceilings',
    competencies: `<ul>
      <li>The learners discuss the importance of carpentry works in residential structures.</li>
      <li>The learners identify the key components of a ceiling system (framing, ceiling boards, fasteners, finishing) and explain their functions in ensuring a safe and durable ceiling.</li>
    </ul>`,
    objectives: `<p>At the end of the lesson the student should be able to:</p>
    <ul>
      <li>Identify the key components of a ceiling system and explain their functions. (knowledge)</li>
      <li>Create a simple inspection report identifying ceiling issues and recommending appropriate carpentry solutions. (skills)</li>
      <li>Appreciate the importance of proper ceiling installation by sharing personal experiences and applying carpentry principles. (appreciation of the lesson)</li>
    </ul>`,
    recall: `<p><strong>Type of Assessment (True or False)</strong> Write <u>T</u> if the statement is true, otherwise <u>F</u> if the statement is false.</p>
    <ol>
      <li>Roofings are essential for setting the home as a safe area.</li>
      <li>Ceilings are only for decoration and do not provide protection. (Ceilings act as a second shield against environmental elements.)</li>
      <li>Ceilings are only for decoration and do not provide protection. (Ceilings act as a second shield against environmental elements.)</li>
      <li>Water stains on a ceiling are always caused by poor painting. (Water stains are usually caused by roof leaks or moisture problems.)</li>
      <li>Ceiling maintenance is important to prevent damage like sagging and cracks.</li>
    </ol>`,
    understand: `<p>Before we go with our concepts, try to be familiarized with the following terms in order to fully understand the lesson.</p>
    <p><strong>Terms to Remember:</strong></p>
    <ol>
      <li><strong>Framing</strong> — The skeleton of the ceiling, usually made of wooden joists or metal furring, that supports the entire structure.</li>
      <li><strong>Ceiling Boards</strong> — The main covering material such as plywood, gypsum board, or ceiling tiles that form the visible surface.</li>
      <li><strong>Fasteners</strong> — Nails or screws used to attach ceiling boards securely to the framing.</li>
      <li><strong>Finishing</strong> — The final layer including putty, tape, and paint that gives the ceiling a smooth and polished look.</li>
      <li><strong>Sagging</strong> — A common ceiling problem where the ceiling bends downward due to weak framing or improper installation.</li>
    </ol>
    <hr>
    <p><strong>Key Components of a Ceiling System</strong></p>
    <ol>
      <li><strong>Framing</strong> (Wooden Joists or Metal Furring) — Serves as the skeleton or support structure of the ceiling. Wooden joists are commonly used in residential homes, while metal furring is lightweight and resistant to moisture. Proper spacing prevents sagging and ensures the ceiling can carry its own weight.</li>
      <li><strong>Ceiling Boards</strong> (Plywood, Gypsum Board, or Ceiling Tiles) — The main covering materials attached to the framing. Plywood is strong and durable but heavier. Gypsum board is lightweight and fire-resistant. Ceiling tiles are easy to install and replace.</li>
      <li><strong>Fasteners</strong> (Nails and Screws) — Secure the ceiling boards to the framing. Using the correct type and spacing prevents boards from loosening or sagging over time. Rust-resistant fasteners are recommended for areas prone to moisture.</li>
      <li><strong>Finishing</strong> (Putty, Tape, and Paint) — Covers seams, joints, and fastener heads to create a smooth, seamless surface. Paint adds the final color and provides an extra layer of protection against moisture and stains.</li>
    </ol>`,
    apply: `<p><strong>Directions:</strong> Read each situation carefully. Write the correct ceiling component (Framing, Ceiling Boards, Fasteners, or Finishing) that is being described. (5 points)</p>
    <ol>
      <li>A homeowner notices the ceiling is sagging in the middle. This component was installed with improper spacing.</li>
      <li>A carpenter chooses gypsum board for a living room because it is lightweight and fire-resistant.</li>
      <li>During inspection, rusted nails were found, causing some ceiling boards to loosen.</li>
      <li>Cracks appear along the seams where putty and tape were not applied properly.</li>
      <li>A fresh coat of paint hides minor imperfections and protects the ceiling from moisture.</li>
    </ol>
    <p><strong>Answer Key:</strong> 1-Framing &nbsp; 2-Ceiling Boards &nbsp; 3-Fasteners &nbsp; 4-Finishing &nbsp; 5-Finishing</p>`,
    analyze: `<p><strong>Directions:</strong> Read the scenario below and answer the questions that follow. (5 points each)</p>
    <p><strong>Scenario:</strong> A homeowner wants to install a ceiling in a newly built bedroom. The room has a concrete slab roof with no existing leaks, and the budget is limited. The homeowner is considering using cheap plywood and spacing the furring strips too far apart to save money.</p>
    <ol>
      <li>What problems might arise from this approach?</li>
      <li>What materials and techniques would you recommend instead?</li>
      <li>Explain how your recommendation ensures durability and safety.</li>
    </ol>`,
    letsCreate: `<p><strong>Direction:</strong> Imagine you are a carpenter inspecting a damaged ceiling. Write a brief inspection report using the format below. <strong>(20 points)</strong></p>
    <p><strong>Situation:</strong> You are called to inspect a ceiling in a residential home. You observe water stains, bubbling paint, and small cracks near the seams.</p>
    <hr>
    <p><strong>Inspection Report</strong></p>
    <p><strong>Observed Issues:</strong> (List at least 2 issues)</p>
    <p><em>_____________________________________________</em></p>
    <p><strong>Possible Causes:</strong> (List at least 2 causes)</p>
    <p><em>_____________________________________________</em></p>
    <p><strong>Recommended Solutions:</strong> (List at least 2 carpentry solutions)</p>
    <p><em>_____________________________________________</em></p>
    <hr>
    <p><strong>Rubric (20 points):</strong></p>
    <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:.88rem">
      <tr style="background:var(--comp-bg)"><th style="border:1px solid var(--comp-border);padding:6px">Criteria</th><th style="border:1px solid var(--comp-border);padding:6px">Excellent (5)</th><th style="border:1px solid var(--comp-border);padding:6px">Good (4)</th><th style="border:1px solid var(--comp-border);padding:6px">Fair (3)</th><th style="border:1px solid var(--comp-border);padding:6px">Needs Improvement (1-2)</th></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Observed Issues</td><td style="border:1px solid var(--comp-border);padding:6px">2+ issues with details</td><td style="border:1px solid var(--comp-border);padding:6px">Describes 2 issues</td><td style="border:1px solid var(--comp-border);padding:6px">Describes 1 issue</td><td style="border:1px solid var(--comp-border);padding:6px">Unclear or missing</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Possible Causes</td><td style="border:1px solid var(--comp-border);padding:6px">2+ causes with reasoning</td><td style="border:1px solid var(--comp-border);padding:6px">Identifies 2 causes</td><td style="border:1px solid var(--comp-border);padding:6px">Identifies 1 cause</td><td style="border:1px solid var(--comp-border);padding:6px">Unclear or missing</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Recommended Solutions</td><td style="border:1px solid var(--comp-border);padding:6px">2+ practical solutions with explanation</td><td style="border:1px solid var(--comp-border);padding:6px">Provides 2 solutions</td><td style="border:1px solid var(--comp-border);padding:6px">Provides 1 solution</td><td style="border:1px solid var(--comp-border);padding:6px">Unclear or missing</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Organization &amp; Clarity</td><td style="border:1px solid var(--comp-border);padding:6px">Neat, organized, easy to understand</td><td style="border:1px solid var(--comp-border);padding:6px">Mostly organized</td><td style="border:1px solid var(--comp-border);padding:6px">Somewhat organized</td><td style="border:1px solid var(--comp-border);padding:6px">Messy or difficult to follow</td></tr>
    </table>`,
    letsTry: `<p><strong>Directions:</strong> Read each question carefully. Choose the correct answer from the options below. (5 points)</p>
    <ol>
      <li>Which component serves as the skeleton or support structure of the ceiling?<br>A. Ceiling Boards &nbsp; B. Fastener &nbsp; <strong>C. Framing</strong> &nbsp; D. Finishing</li>
      <li>What is the main function of fasteners in a ceiling system?<br>A. To add color and protection &nbsp; <strong>B. To secure ceiling boards to the framing</strong> &nbsp; C. To cover seams and joints &nbsp; D. To provide insulation</li>
    </ol>`
  },

  doors: {
    key: 'doors', num: '04', title: 'Doors',
    subtitle: 'Door types, frames, parts, and hardware installation',
    quarter: 'QUARTER NO. II/IV',
    topic: 'Carpentry Works in Residential Structure - Doors',
    competencies: `<ul>
      <li>The learners discuss the importance of carpentry works in residential structure.</li>
    </ul>`,
    objectives: `<p>At the end of the lesson the student should be able to:</p>
    <ul>
      <li>Classify door components, material types, and mechanisms based on their structural functions and performance. (Cognitive)</li>
      <li>Draft a technical illustration that applies the standard dimensions and anatomical labeling. (Psychomotor)</li>
      <li>Value the application of safety codes and accessibility laws by prioritizing legal requirements. (Affective)</li>
    </ul>`,
    recall: `<p>Before we tackle a new component, let's try to recall a few things from our last lesson.</p>
    <ol>
      <li>What component was tackled from the last session?</li>
      <li>What topics or terms can you recall from the last session?</li>
    </ol>
    <p>Now that we have established what we have learned so far, here's a riddle to introduce you to our new lesson:</p>
    <blockquote><em>"I have a handle, but I cannot hold. I have a frame, but I am not a picture. I stand between two worlds, granting passage to the welcome and silence to the weary. I am strongest when I am locked, but unhelpful when I am forgotten and left open. What am I?"</em></blockquote>
    <p><strong>What is the answer to this riddle?</strong></p>`,
    understand: `<p>Let's now internalize the definitions of the Door to give us a clearer view of today's lesson.</p>
    <ul>
      <li>A door is an <em>openable barrier</em> secured in a wall opening. It is provided to give access to the inside of a room of a building. (Proxima Class Room, 2022)</li>
      <li>A door is a flat object used for closing an entrance of a room or building, or the entrance itself. (Cambridge Dictionary)</li>
      <li>Doors commonly swing on hinges and include furniture or ironmongery that allows them to open, close, stay closed, and sometimes to lock. (Designing Buildings, 2023)</li>
    </ul>
    <hr>
    <p><strong>Activity: Which Door Fits?</strong></p>
    <p>Choose the most suitable door for each residential scenario. Consider the climate, security needs, and space constraints typical of a Filipino urban home.</p>
    <ol>
      <li>Main Entrance of a Street-Side House — A. Flush Door &nbsp; <strong>B. Steel Door</strong> &nbsp; C. Glass Door</li>
      <li>The Toilet and Bath — A. Timber Door &nbsp; <strong>B. PVC Door with Louvers</strong> &nbsp; C. Revolving Door</li>
      <li>Main Kitchen to Outside Dirty Kitchen — <strong>A. Wire Gauged Door</strong> &nbsp; B. Panel Door &nbsp; C. Fire-Rated Door</li>
      <li>The Bedroom (2nd Floor Townhouse) — A. Collapsible Steel Door &nbsp; <strong>B. Flush Door</strong> &nbsp; C. Glass Door</li>
      <li>Small Studio/Tight Hallway Closet — A. Hinged Door &nbsp; B. Pivot Door &nbsp; <strong>C. Folding Door</strong></li>
      <li>Sari-Sari Store Front — A. Glazed Door &nbsp; <strong>B. Rolling Shutter Door</strong> &nbsp; C. Sliding Screen Mesh</li>
      <li>The "Balkonahe" (High-Rise Balcony) — <strong>A. Sliding Glass Door</strong> &nbsp; B. Inward-Swinging Door &nbsp; C. Dutch Door</li>
      <li>Residential Garage — A. Wire Gauged Door &nbsp; B. Battened Door &nbsp; <strong>C. Rolling Shutter or Sectional Door</strong></li>
      <li>Access to Roof Deck — <strong>A. Aluminum Door</strong> &nbsp; B. PVC Door &nbsp; C. Flush Door</li>
      <li>Storage Under Stairs (Bodega) — <strong>A. Louvered Door</strong> &nbsp; B. Steel Door &nbsp; C. Glazed Door</li>
    </ol>
    <hr>
    <p><strong>Types of Doors — Based on Materials:</strong></p>
    <ul>
      <li><strong>Wooden Door</strong> — Premium, customizable; soundproof and waterproof options; requires high maintenance; must be sealed before installation.</li>
      <li><strong>Metal Door</strong> — Durable, corrosion-resistant; windstorm and fire-rated options; prone to rusting without protective coatings.</li>
      <li><strong>UPVC Door</strong> — Maintenance-free, lightweight, won't warp or rot; features multipoint locking; not recommended for main front entries due to lightweight nature.</li>
    </ul>
    <p><strong>Types of Doors — Based on Mechanism and Usage:</strong></p>
    <ul>
      <li><strong>Sliding Doors (Patio Doors)</strong> — Move horizontally parallel to the wall; space-saving; floor tracks easily collect dirt.</li>
      <li><strong>Composite Doors</strong> — Blend of PVC, wood, insulating foam, and GRP/fiberglass; extremely secure and energy-efficient.</li>
      <li><strong>Swinging Doors</strong> — Swing on hinges in one or both directions; convenient for kitchens and laundry rooms.</li>
      <li><strong>Folding Doors (Bi-fold)</strong> — Fold back in sections; can open up to 90% of a space; installation is complex.</li>
    </ul>
    <hr>
    <p><strong>Parts of a Door:</strong></p>
    <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:.88rem">
      <tr style="background:var(--comp-bg)"><th style="border:1px solid var(--comp-border);padding:6px">Part</th><th style="border:1px solid var(--comp-border);padding:6px">Description</th></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Top Rail</td><td style="border:1px solid var(--comp-border);padding:6px">The horizontal piece that sits across the very top of the door</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Freeze Rail</td><td style="border:1px solid var(--comp-border);padding:6px">Sits horizontally across the next divide down between the panels (also called cross rail)</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Middle Rail</td><td style="border:1px solid var(--comp-border);padding:6px">Sits horizontally across the middle of the door</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Bottom Rail</td><td style="border:1px solid var(--comp-border);padding:6px">Sits horizontally across the very bottom of the door</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Stiles</td><td style="border:1px solid var(--comp-border);padding:6px">The collective name for the vertical components on the outside edge of a door</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Lock Stile</td><td style="border:1px solid var(--comp-border);padding:6px">The vertical edge opposite the hinges, containing the lock or latch</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Panel</td><td style="border:1px solid var(--comp-border);padding:6px">Timber or glass filling the frame formed by stiles and rails</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Moulding</td><td style="border:1px solid var(--comp-border);padding:6px">Decorative detailing around the edge of stiles, rails, and mullions</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Frame or Lining</td><td style="border:1px solid var(--comp-border);padding:6px">What the door fits within; covers the walls</td></tr>
    </table>`,
    apply: `<p>Using your activity sheet, match the numbered arrows on the door diagram to the Door Parts Word Bank.</p>
    <p><strong>Word Bank:</strong> Top Rail, Freeze Rail, Middle Rail, Bottom Rail, Stiles, Lock Stile, Top Mullion, Mid Mullion, Lower Mullion, Panel, Moulding, Frame or Lining</p>
    <p>After completing the word bank activity, answer:</p>
    <ol>
      <li>If we removed the Moulding, would the door still function?</li>
      <li>What if we removed the Stiles?</li>
    </ol>
    <p><em>This distinguishes structural parts (Rails/Stiles) from decorative parts (Moulding).</em></p>`,
    analyze: `<p><strong>Part I: Anatomy and Mechanism Analysis</strong></p>
    <p>Select the correct primary function and characteristic for each door type:</p>
    <ul>
      <li><strong>Louvered PVC Door</strong> — Primary function: Ventilation / Characteristic: Moisture Proof</li>
      <li><strong>Steel Door</strong> — Primary function: Security / Characteristic: Weather Resistant</li>
      <li><strong>Folding Door</strong> — Primary function: Transition / Characteristic: Zero Swing Space</li>
    </ul>
    <p><strong>Part II: Sketch a Flush Door</strong></p>
    <p>Sketch a Flush Door for a small bedroom. Label the Stiles and Rails, and specify NBC-compliant dimensions (minimum 0.70m–0.80m width; minimum 2.00m height).</p>`,
    letsCreate: `<p><strong>Activity: Architectural Consultant Group Activity</strong></p>
    <p>3 groups act as Architectural Consultants. Each group draws, analyzes, and justifies a door for a specific problem area:</p>
    <ul>
      <li><strong>Scenario 1 — Street-Side Main Entrance:</strong> Security + weather resistance + NBC width compliance (minimum 0.90m clear width)</li>
      <li><strong>Scenario 2 — Wet Zone Bathroom/Laundry Corridor:</strong> Water resistance + space saving + accessibility (max 25mm threshold; lever handles)</li>
      <li><strong>Scenario 3 — Second-Floor Balcony/Bedroom Transition:</strong> Ventilation + typhoon safety + fire egress (must open from inside without key; R.A. 9514)</li>
    </ul>
    <p><strong>Design Worksheet (for each group):</strong></p>
    <ol>
      <li>Material chosen and why</li>
      <li>Mechanical system (swing, slide, fold)</li>
      <li>Technical dimensions (width, height)</li>
      <li>Visual blueprint (sketch with labels)</li>
      <li>Design justification (why this door for this scenario)</li>
    </ol>
    <p><strong>Rubric:</strong> Technical Accuracy 40% · Drafting &amp; Illustration 30% · Design Justification 30%</p>`,
    letsTry: `<p><strong>2-part activity on 1 whole sheet of paper:</strong></p>
    <p><strong>Part A:</strong> Label each missing part of the door and door frame from the provided diagram.</p>
    <p><strong>Part B:</strong> Write down the missing steps in installing a door and door frame from the provided sequence.</p>
    <hr>
    <p><strong>Installing a Door — Steps:</strong></p>
    <ol>
      <li>Measure and trim — measure the frame accurately; double-check fit and trim edges if needed</li>
      <li>Cut hinge recesses — mark hinge spots on door and frame; chisel out wood to required depth</li>
      <li>Drill pilot holes — align hinges in recesses and drill small holes for screws</li>
      <li>Seal for moisture — use caulk to seal the frame for bathroom or damp areas</li>
      <li>Position and level — wedge door into frame with a small gap at top and sides</li>
      <li>Attach hinges — ***** in top hinge first, verify level, then attach bottom hinge</li>
      <li>Final test — remove wedges and test the swing; adjust as needed before painting</li>
    </ol>
    <p><strong>NBC &amp; Fire Code Requirements (P.D. 1096 &amp; R.A. 9514):</strong></p>
    <ul>
      <li>Min. clear width: Main door 0.90m; Bedroom 0.70–0.80m; Bathroom 0.60m; Min. height 2.00m</li>
      <li>Locking hardware must allow the door to open from inside without a key (Fire Code)</li>
      <li>Max. threshold height: 25mm for wheelchair access; lever handles preferred over round *****</li>
    </ul>`
  },

  windows: {
    key: 'windows', num: '05', title: 'Windows',
    subtitle: 'Window types, parts, glazing, and installation standards',
    quarter: 'QUARTER NO. II/IV',
    topic: 'Carpentry Works in Residential Structure - Windows',
    competencies: `<ul>
      <li>The learners demonstrate an understanding of the concepts and principles of carpentry works in residential structures.</li>
    </ul>`,
    objectives: `<p>At the end of the lesson the student should be able to:</p>
    <ul>
      <li>Identify the different types of windows (by operation and material), their parts, and interpret window schedules. (Cognitive)</li>
      <li>Assemble a miniature window from pre-cut parts, demonstrating proper joinery and hardware installation. (Psychomotor)</li>
      <li>Appreciate the importance of choosing the right window for safety, ventilation, and aesthetics. (Affective)</li>
    </ul>`,
    recall: `<p>Before we tackle a new component, let's try to recall a few things from our last lesson.</p>
    <ul>
      <li>What component was tackled from the last session?</li>
      <li>What topics or terms can you recall regarding Doors?</li>
    </ul>
    <p><strong>Riddle Me This:</strong> <em>"I am the eyes of the house, yet I never blink. I let the sun visit without letting the rain stay. I can be slid, swung, or tilted, but I always stay in my frame. What am I?"</em></p>`,
    understand: `<p>Before we dive into the technical principles of windows, let's see how many essential carpentry terms you can identify.</p>
    <p><strong>The Challenge:</strong> In your groups, match the window type (Casement, Awning, Sliding, Double-hung, Jalousie, or Fixed) to the "Correct Fit" for these scenarios:</p>
    <ul>
      <li>Scenario 1: A room that only needs light, no opening or ventilation. → <strong>Fixed</strong></li>
      <li>Scenario 2: A kitchen that needs ventilation even during light rain. → <strong>Awning</strong></li>
      <li>Scenario 3: A traditional house with sashes that slide up and down. → <strong>Double-hung</strong></li>
      <li>Scenario 4: A narrow hallway where a swinging window would block the path. → <strong>Sliding</strong></li>
    </ul>
    <hr>
    <p><strong>A. Classification by Operation</strong></p>
    <ul>
      <li><strong>Fixed</strong> — Non-opening; designed for light and views only.</li>
      <li><strong>Casement</strong> — Side-hinged; swings outward like a door for maximum airflow.</li>
      <li><strong>Awning</strong> — Hinged at the top; opens outward from the bottom.</li>
      <li><strong>Jalousie</strong> — Horizontal glass/wood slats that tilt; common in tropical climates.</li>
      <li><strong>Sliding</strong> — Moves horizontally on tracks; excellent for space-saving.</li>
      <li><strong>Double-hung</strong> — Two sashes that slide vertically.</li>
    </ul>
    <p><strong>B. Classification by Material</strong></p>
    <ul>
      <li><strong>Wood</strong> — Classic and insulating; requires maintenance against rot/termites.</li>
      <li><strong>Vinyl (uPVC)</strong> — Modern, maintenance-free, and energy-efficient.</li>
      <li><strong>Aluminum</strong> — Durable and slim-profiled; resistant to extreme weather.</li>
    </ul>
    <p><strong>C. Window Anatomy (Key Parts)</strong></p>
    <ul>
      <li><strong>Frame</strong> — Fixed outer structure of the window: <em>Head</em> (top), <em>Sill</em> (bottom), <em>Jambs</em> (sides).</li>
      <li><strong>Sash</strong> — Moveable or fixed part that holds the glass in place.</li>
      <li><strong>Glazing (Glass)</strong> — Transparent material held within the sash.</li>
      <li><strong>Muntins</strong> — Small bars that separate individual panes of glass within a single sash.</li>
      <li><strong>Hardware</strong> — Hinges, locks, latches, or cranks used to operate or secure the window.</li>
      <li><strong>Weatherstripping</strong> — Material sealing gaps between sash and frame to prevent air and water leakage.</li>
    </ul>
    <p><strong>D. Regulatory and Safety Standards (National Building Code)</strong></p>
    <ul>
      <li><strong>Natural Lighting (10% Rule)</strong> — Total glass area must be at least 10% of the floor area of the room.</li>
      <li><strong>Ventilation (5% Rule)</strong> — Total openable area must be at least 5% of the floor area.</li>
      <li><strong>Egress</strong> — Bedrooms must have at least one window for emergency escape (min. 0.60m × 0.60m opening).</li>
    </ul>`,
    apply: `<p><strong>The Plan Check</strong></p>
    <p>Using the provided architectural plan and window schedule, practice interpreting real construction documents by identifying and verifying window details.</p>
    <p><strong>Instructions:</strong> Each group will examine the architectural drawings and complete the following:</p>
    <ul>
      <li>Count the total number of windows shown in the floor plan</li>
      <li>Cross-check each window with the window schedule</li>
      <li>Identify window labels (e.g., W1, W2, etc.) and their locations</li>
      <li>Verify if the number of windows in the drawing matches the schedule</li>
    </ul>
    <p><strong>Guided Questions:</strong></p>
    <ol>
      <li>How many windows are present in the plan?</li>
      <li>Are all windows labeled correctly?</li>
      <li>What is the type and size of Window W-1?</li>
      <li>Do the quantities match the window schedule?</li>
      <li>Are there any missing or extra windows?</li>
    </ol>`,
    analyze: `<p><strong>Label the Window</strong></p>
    <p>On your activity sheet, given a diagram of a window (frame and sash) with numbered arrows, write the names of the parts:</p>
    <p>Head · Jamb · Sill · Stile · Rail · Glass/Glazing · Muntins · Weatherstripping · Hardware</p>
    <p><strong>Reflection Questions:</strong></p>
    <ol>
      <li>Why do we need different window types? (Different needs: ventilation, privacy, space)</li>
      <li>Why is it important to calculate window area based on the room? (Ensures enough light and ventilation; complies with code)</li>
      <li>How does the window type affect the house's safety and comfort? (Emergency exit, energy efficiency, air quality)</li>
    </ol>`,
    letsCreate: `<p><strong>Activity: Assemble a Miniature Window</strong></p>
    <p>Construct a 1:10 scale model window. <strong>Scale:</strong> 1:10</p>
    <p><strong>Materials:</strong> Basswood/balsa wood strips, clear acetate sheet, small hinges/hooks, wood glue, craft knife, ruler, sandpaper</p>
    <p><strong>Steps:</strong></p>
    <ol>
      <li><strong>NBC Compliance Check</strong> — Verify your window design: glass area ≥10% of room floor area; openable area ≥5%</li>
      <li><strong>Cut Frame</strong> — Cut head, sill, and jambs to the rough opening dimensions</li>
      <li><strong>Assemble Frame</strong> — Join the frame parts at 90° angles; allow to dry</li>
      <li><strong>Build Sash</strong> — Cut sash stiles and rails; attach clear acetate as the glazing</li>
      <li><strong>Insert Sash</strong> — Insert the sash into the frame; mark the drip cap direction</li>
    </ol>
    <p><strong>Evaluation Criteria:</strong> Accuracy of dimensions · Completeness of parts · Craftsmanship · NBC code compliance</p>`,
    letsTry: `<p><strong>Quick Quiz:</strong></p>
    <ol>
      <li>A window that swings outward from the side is called ___. <em>(Answer: Casement)</em></li>
      <li>The horizontal top part of the window frame is the ___. <em>(Answer: Head)</em></li>
      <li>What is weatherstripping used for? <em>(Answer: Seals gaps between sash and frame against air/water)</em></li>
      <li>Name one window type that does not open. <em>(Answer: Fixed)</em></li>
      <li>According to the National Building Code, the minimum window area for natural light is ___% of the floor area. <em>(Answer: 10)</em></li>
    </ol>`
  },

  floors: {
    key: 'floors', num: '06', title: 'Floors',
    subtitle: 'Floor system parts, types of floor finishes, and installation',
    quarter: 'QUARTER NO. 2ND/4TH',
    topic: 'Carpentry Works in Residential Structures - Flooring',
    competencies: `<ul>
      <li>The learners discuss the importance of carpentry works in residential structure.</li>
    </ul>`,
    objectives: `<p>At the end of the lesson the student should be able to:</p>
    <ul>
      <li>Identify the parts and functions of a floor system (e.g., joists, girders, subfloors, beams), as well as the different types of floor finish. (knowledge)</li>
      <li>Design a simple floor plan with the appropriate floor types. (skills)</li>
      <li>Appreciate the importance of proper floor construction in ensuring safety and durability. (appreciation)</li>
    </ul>`,
    recall: `<p>Before we proceed with a new topic, let's try to recall a few things from our previous lessons.</p>
    <ol>
      <li>What house parts have we discussed so far?</li>
      <li>What are the main functions of each part?</li>
    </ol>`,
    understand: `<p>A floor is a flat surface in a building used for walking and supporting loads. Good flooring must be <strong>strong</strong> (can carry weight), <strong>level</strong> (even surface), and <strong>durable</strong> (long-lasting). Proper floor construction ensures safety, comfort, and stability.</p>
    <p><strong>Parts of a Floor System:</strong></p>
    <ul>
      <li><strong>Floor Joist</strong> — Horizontal members making up the bottom-most support of the floor. Primary purpose is to support floor loads and may also support ceilings and load-bearing walls.</li>
      <li><strong>Floor Bearers</strong> — Beams that help provide direct support for the floor joists; located below the joists.</li>
      <li><strong>Floor Girders</strong> — Provide support to smaller joists; often required when an opening or void is created in the floor.</li>
      <li><strong>Subfloors</strong> — Sits on top of the floor system framework to help support floor loads; creates a base for floor covering.</li>
      <li><strong>Floor Finish</strong> — The decorative top layer of the floor; includes tiles, hardwood, carpet, and more.</li>
    </ul>
    <p><strong>Types of Floors:</strong></p>
    <ul>
      <li><strong>Concrete Floor</strong> — Very strong; commonly used in the ground floors of a house.</li>
      <li><strong>Wooden Floor</strong> — Lighter; commonly used in elevated houses.</li>
      <li><strong>Laminates</strong> — Made of fibre, compressed to make a thin flat plate.</li>
      <li><strong>Ceramic Floor</strong> — Tiles made of sand; extensively used in kitchens and bathrooms due to their slippery texture.</li>
      <li><strong>Rubber Floor</strong> — Offers a great amount of elasticity; mainly used for domestic use.</li>
    </ul>`,
    apply: `<p><strong>Directions:</strong> You are an architect assigned to design a floor system for a house. Based on the given floor layout, draw over the given floor plan and assign the appropriate floor finish for each room from the given textures below and explain your answer. (20 pts.)</p>
    <p><em>Floor texture options: Wood, Concrete, Ceramic, Laminate, Rubber</em></p>
    <p><strong>Guide Questions:</strong></p>
    <ol>
      <li>Why did you choose this specific floor finish for this specific room?</li>
      <li>What factors influenced your decision to choose this specific floor finish?</li>
    </ol>
    <p><strong>Rubric:</strong></p>
    <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:.88rem">
      <tr style="background:var(--comp-bg)"><th style="border:1px solid var(--comp-border);padding:6px">Criteria</th><th style="border:1px solid var(--comp-border);padding:6px">4 – Excellent</th><th style="border:1px solid var(--comp-border);padding:6px">3 – Good</th><th style="border:1px solid var(--comp-border);padding:6px">2 – Fair</th><th style="border:1px solid var(--comp-border);padding:6px">1 – Needs Improvement</th></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Appropriateness of Floor Finish</td><td style="border:1px solid var(--comp-border);padding:6px">All finishes highly suitable for each room</td><td style="border:1px solid var(--comp-border);padding:6px">Most finishes appropriate</td><td style="border:1px solid var(--comp-border);padding:6px">Some finishes appropriate</td><td style="border:1px solid var(--comp-border);padding:6px">Mostly inappropriate</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Creativity &amp; Presentation</td><td style="border:1px solid var(--comp-border);padding:6px">Very neat, creative, well-arranged</td><td style="border:1px solid var(--comp-border);padding:6px">Neat and organized</td><td style="border:1px solid var(--comp-border);padding:6px">Somewhat neat</td><td style="border:1px solid var(--comp-border);padding:6px">Messy and poorly arranged</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Reasoning &amp; Explanation</td><td style="border:1px solid var(--comp-border);padding:6px">Clear, logical, and detailed explanation</td><td style="border:1px solid var(--comp-border);padding:6px">Clear but lacks detail</td><td style="border:1px solid var(--comp-border);padding:6px">Somewhat unclear</td><td style="border:1px solid var(--comp-border);padding:6px">Unclear or missing</td></tr>
    </table>`,
    analyze: `<p><strong>Group Activity:</strong> Teacher distributes envelopes containing a floor plan and different floor textures (wood, concrete, ceramic, laminate, rubber). Groups choose textures and paste them over different rooms.</p>
    <p>Groups present their outputs and answer:</p>
    <ol>
      <li>Why did you choose this specific floor finish for this specific room?</li>
      <li>What factors influenced your decision?</li>
    </ol>`,
    letsCreate: `<p><strong>Generalization Activity</strong></p>
    <p>Summarize the lesson and reflect on whether your dream floor choices changed after the discussion.</p>
    <p>The class will review the <strong>5 parts of a floor system</strong> and the <strong>5 types of floor finish</strong>. Then the teacher asks:</p>
    <blockquote><em>"Referring to your answers at the beginning, do you still want those floors in your dream house? Did your opinions change? Why?"</em></blockquote>`,
    letsTry: `<p><strong>Part I: Label each part of a floor system. Then give a short description of each part.</strong></p>
    <ol>
      <li>Joist — ___________________</li>
      <li>Bearer — ___________________</li>
      <li>Girder — ___________________</li>
      <li>Subfloor — ___________________</li>
      <li>Finish — ___________________</li>
    </ol>
    <p><strong>Part II: Identify which floor finish is being described.</strong></p>
    <ol>
      <li>This type of floor finish is lighter; it is commonly used in elevated houses. <em>(Answer: Wooden Floor)</em></li>
      <li>This floor finish is commonly tiles made of sand; extensively used in kitchens and bathrooms. <em>(Answer: Ceramic Floor)</em></li>
      <li>This floor finish offers a great amount of elasticity; mainly used for domestic use. <em>(Answer: Rubber Floor)</em></li>
      <li>This type of floor finish is made of fibre, compressed to make a thin flat plate. <em>(Answer: Laminates)</em></li>
      <li>This type of floor finish is very strong; commonly used in the ground floors of a house. <em>(Answer: Concrete Floor)</em></li>
    </ol>`
  },

  partitions: {
    key: 'partitions', num: '01', title: 'Partitions',
    subtitle: 'Types, materials, and installation of interior partitions',
    quarter: 'QUARTER NO. II/IV',
    topic: 'Carpentry Works in Residential Structure - Partitions',
    competencies: `<ul>
      <li>The learners discuss the importance of carpentry works in residential structure.</li>
    </ul>`,
    objectives: `<p>At the end of the lesson the student should be able to:</p>
    <ul>
      <li>Compare the advantages and limitations of different partition types and materials based on cost, durability, ease of construction, and suitability for Philippine residential settings. (ANALYZE)</li>
      <li>Demonstrate the correct process of planning and laying out a basic partition, selecting suitable materials for a given residential context. (APPLY)</li>
      <li>Assess a given floor plan and justify which type of partition is most appropriate for specific areas. (EVALUATE)</li>
    </ul>`,
    recall: `<p><strong>Type of Assessment (True or False)</strong> Write <u>T</u> if the statement is true, otherwise <u>F</u> if the statement is false.</p>
    <ol>
      <li>All interior walls in a Filipino home are made of the same materials.</li>
      <li>A partition wall is used to divide or separate interior spaces.</li>
      <li>CHB is the only wall material used in the Philippines.</li>
      <li>Cost and Durability are important factors when choosing a partition.</li>
      <li>Safety is not a priority when laying out a partition wall.</li>
    </ol>
<p></p>`,

    understand: `<p><strong>Terms to Remember:</strong></p>
    <ol>
      <li><strong>Partition</strong> — An interior, non-load-bearing wall that divides the interior space of a structure into rooms.</li>
      <li><strong>Stud</strong> — A vertical framing member in a wood-frame partition.</li>
      <li><strong>Nogging/Blocking</strong> — Horizontal members installed between studs for rigidity.</li>
      <li><strong>CHB</strong> — Concrete Hollow Block; standard masonry unit used in solid partitions.</li>
      <li><strong>Drywall</strong> — Gypsum board panels used in lightweight partitions.</li>
    </ol>
    <hr>
    <p><strong>Types of Partitions:</strong></p>
    <ul>
      <li><strong>Solid Partition</strong> — Constructed of Concrete Hollow Blocks (CHB) or brick; permanent, durable, provides good sound and fire resistance; most common in Philippine residential construction.</li>
      <li><strong>Wood-Frame (Stud Wall) Partition</strong> — Vertical wooden studs with panel cladding (plywood, hardiflex, or gypsum board); lightweight, economical, and easy to construct; common in low-cost housing.</li>
      <li><strong>Drywall/Gypsum Board Partition</strong> — Metal or wood frame with gypsum board panels; smooth finish, quick to install, ideal for interior spaces not exposed to moisture.</li>
      <li><strong>Movable/Operable Partition</strong> — Sliding or folding panels that can open or close to combine or divide spaces; used in multi-function rooms.</li>
      <li><strong>Glass Partition</strong> — Framed or frameless glass panels; allows light transmission while defining boundaries.</li>
    </ul>
    <p><strong>Selection Criteria:</strong> Cost · Durability · Suitability</p>`,
    apply: `<p><strong>Activity: Partition Station — Jigsaw Expert Groups (15 pts., 20 min.)</strong></p>
    <p>4 expert groups each investigate a partition type:</p>
    <ul>
      <li>Group 1 — Solid Partitions (CHB)</li>
      <li>Group 2 — Wood-Frame Partitions</li>
      <li>Group 3 — Drywall/Gypsum Partitions</li>
      <li>Group 4 — Movable/Glass Partitions</li>
    </ul>
    <p>Each group fills in Manila Paper using this format:</p>
    <ul>
      <li><strong>Materials:</strong> (List of materials used)</li>
      <li><strong>Best Used In:</strong> (Specific part of the house)</li>
      <li><strong>Advantages:</strong> (At least two)</li>
      <li><strong>Limitations:</strong> (At least two)</li>
    </ul>
    <p>After 10 minutes: Gallery Walk rotation, then return to original seats and submit Manila Paper.</p>
    <p><strong>Guide Questions:</strong></p>
    <ol>
      <li>If a family is on a tight budget, is your assigned partition a good choice? Why?</li>
      <li>How effective is this partition in terms of soundproofing or fire safety?</li>
      <li>How fast is the installation process compared to other types?</li>
    </ol>`,
    analyze: `<p><strong>Directions: Critical Thinking Reflection (10 pts.)</strong> Based on our discussion, answer the following:</p>
    <ol>
      <li>Why is a wood-frame partition more common in low-cost housing than a glass partition?</li>
      <li>If you are building a bathroom wall, why is a standard gypsum board (drywall) a poor choice?</li>
      <li>How does the choice of partition affect the safety (fire/structural) of a Filipino home?</li>
      <li>What is the importance of "suitability" in carpentry works?</li>
      <li>How does a movable partition maximize space in a small residential structure?</li>
    </ol>`,
    letsCreate: `<p><strong>Goal:</strong> Demonstrate the correct process of planning and laying out a basic wood-frame partition using scale models.</p>
    <p><strong>Materials Needed:</strong></p>
    <ul>
      <li>Base: Corrugated cardboard or flat wooden board (approx. 8×10 inches)</li>
      <li>Framing: Popsicle sticks or Balsa wood strips (to represent wooden studs)</li>
      <li>Cladding: Sintra board, scrap cardboard, or thick paper (to represent plywood/hardiflex)</li>
      <li>Tools: Small cutter or craft saw, Ruler, Pencil, Glue gun (with glue sticks)</li>
      <li>Safety Gear: Working gloves or caution in handling sharp tools</li>
    </ul>
    <p><strong>Step-by-Step Procedure:</strong></p>
    <ol>
      <li><strong>Safety First:</strong> Ensure workspace is clean. Be careful with cutter and hot glue gun.</li>
      <li><strong>Layout Marking:</strong> Draw the floor plan on base — mark the partition line.</li>
      <li><strong>Cut Studs:</strong> Cut studs to equal height.</li>
      <li><strong>Install Bottom Plate:</strong> Glue bottom plate along the layout line.</li>
      <li><strong>Position Studs:</strong> Place studs at evenly spaced intervals.</li>
      <li><strong>Install Nogging:</strong> Add horizontal blocking between studs for rigidity.</li>
      <li><strong>Attach Cladding:</strong> Attach the cladding panel to one face of the frame.</li>
      <li><strong>Final Check:</strong> Ensure studs are plumb and the structure is stable.</li>
    </ol>
    <p><strong>Rubric (20 points): 4 pts. each —</strong> Accuracy of Layout · Correct Sequence · Structural Integrity · Neatness · Safety Practices</p>`,
    letsTry: `<p><strong>Multiple Choice:</strong> Choose the letter of the correct answer.</p>
    <ol>
      <li>It is a partition type made of Concrete Hollow Blocks (CHB), known for being permanent and durable.<br>A. Glass Partition &nbsp; B. Movable Partition &nbsp; <strong>C. Solid Partition</strong> &nbsp; D. Wood-Frame Partition</li>
      <li>It refers to the vertical framing members used in a wood-frame or drywall partition.<br>A. Nogging &nbsp; <strong>B. Studs</strong> &nbsp; C. Panels &nbsp; D. Adapters</li>
      <li>Which material is best for a partition that needs to be moved to combine two rooms?<br>A. CHB &nbsp; <strong>B. Sliding Panels</strong> &nbsp; C. Plywood &nbsp; D. Glass</li>
      <li>What factor is being considered when a carpenter chooses water-resistant materials for a laundry area?<br>A. Cost &nbsp; B. Sustainability &nbsp; <strong>C. Suitability</strong> &nbsp; D. Neatness</li>
      <li>This is a lightweight and economical partition commonly used in low-cost Philippine housing.<br>A. Solid Partition &nbsp; B. Glass Partition &nbsp; <strong>C. Wood-Frame Partition</strong> &nbsp; D. Brick Partition</li>
    </ol>`
  },

  stairs: {
    key: 'stairs', num: '07', title: 'Stairs & Railings',
    subtitle: 'Stair parts, types, railing systems, and safety standards',
    quarter: 'QUARTER NO. II/IV',
    topic: 'Carpentry Works in Residential Structure - Stairs and Railings',
    competencies: `<ul>
      <li>The learners discuss the importance of carpentry works in residential structure.</li>
    </ul>`,
    objectives: `<p>At the end of the lesson the student should be able to:</p>
    <ul>
      <li>Explain the purpose of stairs and railings; identify common parts and types of stairs (straight, L-shaped, U-shaped, spiral) and railing materials; interpret basic stair and railing plans. (Cognitive)</li>
      <li>Measure stair dimensions such as rise, run, tread, and width; construct or simulate a miniature stair and railing model. (Psychomotor)</li>
      <li>Demonstrate appreciation for the role of stairs and railings in creating safe and functional homes; value careful planning and proper execution. (Affective)</li>
    </ul>`,
    recall: `<p>Ask learners to recall parts of a house (roof, walls, floor, etc.). Show a simple house illustration and ask:</p>
    <ul>
      <li>Where do we usually use stairs?</li>
      <li>What helps us stay safe when using stairs?</li>
    </ul>`,
    understand: `<p><strong>Why do we need railings?</strong> What might happen if stairs or railings are not properly designed?</p>
    <hr>
    <p><strong>Activity 1: Jumbled Words</strong></p>
    <p>Arrange the jumbled words to identify each staircase part:</p>
    <ul>
      <li>DTERA → <strong>Tread</strong></li>
      <li>RESIR → <strong>Riser</strong></li>
      <li>SINGON → <strong>Nosing</strong></li>
      <li>TUBSLERA → <strong>Baluster</strong></li>
      <li>LRHANDIA → <strong>Handrail</strong></li>
      <li>RGSERTIN → <strong>Stringer</strong></li>
      <li>LENWE OSTP → <strong>Newel Post</strong></li>
    </ul>
    <hr>
    <p><strong>Parts of a Staircase:</strong></p>
    <ul>
      <li><strong>Tread</strong> — Horizontal part where the foot is placed; minimum depth of 250mm.</li>
      <li><strong>Riser</strong> — Vertical piece connecting each tread; maximum height 200mm, minimum 102mm.</li>
      <li><strong>Nosing</strong> — Part of the tread extending beyond the riser; helps prevent slips.</li>
      <li><strong>Baluster (Spindles)</strong> — Vertical posts supporting the handrail; max. 4-inch gap.</li>
      <li><strong>Handrail</strong> — The top rail you grip for support; required by building codes.</li>
      <li><strong>Stringer</strong> — Structural backbone supporting treads and risers; runs both sides.</li>
      <li><strong>Newel Post</strong> — Sturdy vertical posts anchoring the handrail; at top, bottom, and landings.</li>
    </ul>
    <p><strong>Types of Stairs:</strong> Straight · L-shaped · U-shaped · Spiral</p>
    <p><strong>Types of Railings:</strong> Wood · Metal · Glass · Cable · Stone and Concrete</p>
    <hr>
    <p><strong>Safety Standards — P.D. 1096 &amp; B.P. 344:</strong></p>
    <ul>
      <li><strong>Maximum Riser Height:</strong> 200mm — prevents steep incline causing loss of balance</li>
      <li><strong>Minimum Tread Depth:</strong> 250mm — ensures sufficient area to support the foot</li>
      <li><strong>Uniformity Rule:</strong> Max. 5mm variation between adjacent risers/treads</li>
      <li><strong>Handrail Height (B.P. 344):</strong> 800mm–900mm from stair nosing</li>
      <li><strong>Handrail Extension:</strong> Extend 300mm past top and bottom steps</li>
      <li><strong>Grip Diameter:</strong> 30–50mm; Wall Clearance: minimum 38mm</li>
    </ul>`,
    apply: `<p><strong>Activity 2: The Home Audit</strong></p>
    <p>Find a staircase at home, school, or community. Measure one step and the handrail. Fill in the Code vs. Reality table:</p>
    <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:.88rem">
      <tr style="background:var(--comp-bg)"><th style="border:1px solid var(--comp-border);padding:6px">Feature</th><th style="border:1px solid var(--comp-border);padding:6px">My Measurement</th><th style="border:1px solid var(--comp-border);padding:6px">Legal Standard</th><th style="border:1px solid var(--comp-border);padding:6px">Status (Pass/Fail)</th></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Max Riser Height</td><td style="border:1px solid var(--comp-border);padding:6px">___</td><td style="border:1px solid var(--comp-border);padding:6px">200mm Max</td><td style="border:1px solid var(--comp-border);padding:6px">___</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Min Tread Depth</td><td style="border:1px solid var(--comp-border);padding:6px">___</td><td style="border:1px solid var(--comp-border);padding:6px">250mm Min</td><td style="border:1px solid var(--comp-border);padding:6px">___</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Rail Height</td><td style="border:1px solid var(--comp-border);padding:6px">___</td><td style="border:1px solid var(--comp-border);padding:6px">800–900mm</td><td style="border:1px solid var(--comp-border);padding:6px">___</td></tr>
      <tr><td style="border:1px solid var(--comp-border);padding:6px">Step Uniformity</td><td style="border:1px solid var(--comp-border);padding:6px">___</td><td style="border:1px solid var(--comp-border);padding:6px">5mm Max Variation</td><td style="border:1px solid var(--comp-border);padding:6px">___</td></tr>
    </table>`,
    analyze: `<p>Based on your Home Audit data, answer:</p>
    <ol>
      <li>If a senior citizen were to use this staircase, what specific feature would pose the greatest risk?</li>
      <li>Did you notice any uneven steps? How does this affect your own "muscle memory" when you walk up these stairs in the dark?</li>
    </ol>`,
    letsCreate: `<p><strong>Activity: "Building for Safety: The Miniature Stair Challenge"</strong></p>
    <p><strong>Scale:</strong> 1:10 — Teacher acts as Project Supervisor.</p>
    <p><strong>Materials per team:</strong> 2 sheets A4 foam board or thick illustration board · 10-12 bamboo skewers · hot glue gun · steel ruler · utility cutter · pencil · protractor · sandpaper scraps (for tactile markers)</p>
    <p><strong>Scaled Dimensions:</strong></p>
    <ul>
      <li>Max Riser 200mm → <strong>20mm at scale</strong></li>
      <li>Min Tread 250mm → <strong>25mm at scale</strong></li>
      <li>Rail Height 800–900mm → <strong>80–90mm at scale</strong></li>
      <li>Handrail Extension 300mm → <strong>30mm at scale</strong></li>
    </ul>
    <p><strong>Step-by-Step Instructions:</strong></p>
    <ol>
      <li><strong>Scaling Phase:</strong> Calculate all scaled dimensions from the list above.</li>
      <li><strong>Layout &amp; Marking:</strong> Draw the "zigzag" pattern on the stringer board; ensure uniformity (max 0.5mm variation at scale).</li>
      <li><strong>The Master Cut:</strong> Cut two identical stringers.</li>
      <li><strong>Tread Attachment:</strong> Cut treads to scaled width; glue horizontally to stringers; ensure each step is level.</li>
      <li><strong>Safety Install (B.P. 344):</strong> Mount newel posts; attach handrail at 80–90mm; extend 30mm past top/bottom; glue tactile warning blocks (sandpaper) at top/bottom, 60mm deep.</li>
      <li><strong>Final Audit:</strong> Measure finished model against the Code vs. Reality table.</li>
    </ol>
    <p><strong>Rubric (20 pts.):</strong> Technical Accuracy · Safety Features · Structural Stability · Workmanship — 5 pts. each</p>`,
    letsTry: `<p><strong>Identification Quiz (10 items):</strong></p>
    <ol>
      <li>_____________: Horizontal part of a step where the foot is placed. <em>(Answer: Tread)</em></li>
      <li>_____________: Vertical piece connecting each step. <em>(Answer: Riser)</em></li>
      <li>_____________: The part of the tread that extends beyond the riser. <em>(Answer: Nosing)</em></li>
      <li>_____________: A stair that goes in one direction without turns. <em>(Answer: Straight Stairs)</em></li>
      <li>_____________: A modern railing type that allows visibility while maintaining safety. <em>(Answer: Glass Railing)</em></li>
      <li>_____________: The maximum riser height allowed by P.D. 1096. <em>(Answer: 200mm)</em></li>
      <li>_____________: The minimum tread depth required by P.D. 1096. <em>(Answer: 250mm)</em></li>
      <li>_____________: The clear vertical space above a stair tread to the ceiling. <em>(Answer: Headroom Clearance)</em></li>
      <li>_____________: The rail you hold onto for balance and safety. <em>(Answer: Handrail)</em></li>
      <li>_____________: The required height range for a handrail per B.P. 344. <em>(Answer: 800mm–900mm)</em></li>
    </ol>`
  },

  cabinets: {
    key: 'cabinets', num: '08', title: 'Cabinets',
    subtitle: 'Cabinet types, parts, importance, materials, and safety',
    quarter: 'QUARTER NO. II/IV',
    topic: 'Residential Carpentry - Cabinets',
    competencies: `<ul>
      <li>The learners discuss the importance of carpentry works in residential structure.</li>
    </ul>`,
    objectives: `<p>At the end of the lesson the student should be able to:</p>
    <ul>
      <li>Identify and explain the different types of cabinets, their parts, importance, and materials used in residential structures. (knowledge)</li>
      <li>Sketch a simple cabinet design, label its parts, and identify appropriate tools and materials. (skills)</li>
      <li>Appreciate the value of cabinets in organizing the home, promoting safety, and improving living conditions. (appreciation)</li>
    </ul>`,
    recall: `<p>Review questions:</p>
    <ol>
      <li>What are the different parts of a residential structure?</li>
      <li>What is the function of doors and windows?</li>
      <li>Aside from doors and windows, what else helps organize things inside the house?</li>
    </ol>
    <p>The teacher presents images of cabinets and asks:</p>
    <ul>
      <li>Do you have cabinets at home?</li>
      <li>What items do you store inside?</li>
      <li>What will happen if there are no cabinets?</li>
    </ul>`,
    understand: `<p><strong>Types of Cabinets:</strong></p>
    <ul>
      <li><strong>Kitchen Cabinets</strong> — Installed in the kitchen for storing utensils, food items, and appliances.</li>
      <li><strong>Wall Cabinets</strong> — Mounted on walls to save floor space; used in kitchens, bathrooms, and living areas.</li>
      <li><strong>Base Cabinets</strong> — Floor-mounted; serve as the base for countertops.</li>
      <li><strong>Storage Cabinets</strong> — Freestanding or built-in for general storage in any room.</li>
    </ul>
    <p><strong>Parts of a Cabinet:</strong></p>
    <ul>
      <li><strong>Frame</strong> — The structural skeleton; provides shape and rigidity.</li>
      <li><strong>Door</strong> — The movable front panel providing access and concealing contents.</li>
      <li><strong>Shelves</strong> — Horizontal surfaces inside for storing items.</li>
      <li><strong>Hinges</strong> — Hardware attaching the door to the frame, allowing it to swing.</li>
      <li><strong>Handles/*****</strong> — Hardware for gripping and operating the door or drawer.</li>
    </ul>
    <p><strong>Importance of Cabinets:</strong></p>
    <ul>
      <li>Organization of items — keeps household items neat and easily accessible</li>
      <li>Protection of materials — shields stored items from dust, moisture, and damage</li>
      <li>Cleanliness and safety — keeps sharp tools and hazardous items out of reach</li>
      <li>Improves house appearance — enhances the aesthetic of a room</li>
    </ul>
    <p><strong>Materials Used:</strong></p>
    <ul>
      <li>Wood and Plywood — primary structural material</li>
      <li>Nails and Screws — fasteners for joining parts securely</li>
      <li>Hinges and Handles — hardware for functional operation</li>
      <li>Finishing Materials (Paint, Varnish) — protect the wood and provide aesthetic finish</li>
    </ul>
    <p><strong>Safety Precautions:</strong></p>
    <ul>
      <li>Always wear protective equipment (gloves, safety glasses) when cutting or assembling</li>
      <li>Handle tools properly — use the right tool for each task</li>
      <li>Keep the work area clean and free of sawdust and debris</li>
      <li>Ensure cabinets are properly anchored to walls to prevent tipping</li>
    </ul>`,
    apply: `<p><strong>Individual Activity:</strong> Choose a room in your home and describe one type of cabinet that would improve its organization, safety, or appearance.</p>
    <p>Answer the following:</p>
    <ol>
      <li>Which room are you choosing?</li>
      <li>What type of cabinet would you add, and what will you store in it?</li>
      <li>How will this cabinet help the room?</li>
    </ol>`,
    analyze: `<p><strong>Group Activity — Guided Practice:</strong></p>
    <p>Each group draws a cabinet, labels its parts, and presents their work.</p>
    <p><strong>Follow-up questions:</strong></p>
    <ol>
      <li>What type of cabinet did you draw?</li>
      <li>What are its parts?</li>
    </ol>
    <p><strong>Individual mastery check:</strong></p>
    <ol>
      <li>What are the 4 main types of cabinets?</li>
      <li>Why are cabinets important?</li>
      <li>List 2 materials and 2 tools used in making cabinets.</li>
    </ol>`,
    letsCreate: `<p><strong>Group Activity:</strong> Collaborate to sketch and label the parts of your cabinet design, then present to the class explaining your choice of materials and safety measures.</p>
    <p><strong>Draw the group's cabinet in the space provided.</strong></p>
    <p><strong>Discussion guide (teacher facilitates):</strong></p>
    <ul>
      <li>Why did you choose this type of cabinet?</li>
      <li>How do the parts contribute to its function?</li>
      <li>What safety measures should be observed when making a real cabinet?</li>
    </ul>`,
    letsTry: `<p><strong>A. Enumerate:</strong></p>
    <ol>
      <li>Name four (4) types of cabinets used in residential structures.<br><em>Answer: Kitchen Cabinets, Wall Cabinets, Base Cabinets, Storage Cabinets</em></li>
      <li>Name five (5) parts of cabinets used in residential structures.<br><em>Answer: Frame, Door, Shelves, Hinges, Handles/*****</em></li>
    </ol>
    <p><strong>B. Essay:</strong> In your own words, explain the importance of cabinets in a residential structure.</p>`
  }

}; // end MODULE_DATA




 