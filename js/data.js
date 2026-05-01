// ============================================
// EXERCISE DATABASE
// Add new exercises here following the same structure
// ============================================

const EXERCISES = [
  {
    id: "the-hundred",
    method: "pilates-mat",
    nameEn: "The Hundred",
    nameFr: "Le Cent",
    level: "fundamental",
    duration: "1-2 min",
    reps: "100 arm beats (10 cycles of 5/5)",
    classicalOrder: 1,
    focus: ["core", "breathing"],
    objective: "A circulatory and respiratory opener for the session. It activates the Powerhouse, warms the cardio-pulmonary system through percussive breathing, and sets the transverse–diaphragm connection for the rest of class. This is not an abdominal exercise — it is a breathing exercise under abdominal load.",
    starting: "Supine, pelvis in neutral or light imprint (classical Romana = neutral, contemporary Stott = imprint). Legs in tabletop (90/90) for base version, or extended to 45° for the classical advanced version. Head and upper thorax lifted in cervico-thoracic flexion, gaze toward the navel, chin clear without cervical crushing. Arms long by the sides, palms down, ~10–15 cm above the mat.",
    breathing: "Lateral thoracic percussive breathing. Short inhale over 5 arm pulses, short exhale over 5 arm pulses. Diaphragm stays mobile despite the flexion hold. No breath-holding. The exhale is active, almost hissed, to empty residual air and recruit the expiratory abdominals.",
    execution: [
      "From starting position, check that the ribcage is not flaring",
      "Beat the arms up and down with moderate amplitude (~15 cm), brisk and controlled",
      "Sync 5 beats on the inhale, 5 on the exhale",
      "Keep the cervico-thoracic flexion stable — lower scapula lifts, not just the head",
      "10 full cycles = 100 beats",
      "Controlled return: lower head, legs, release"
    ],
    muscles: {
      prime: "Rectus abdominis (thoracic flexion), obliques",
      synergists: "Transverse abdominis, psoas (leg hold), anterior deltoid (arm beat)",
      stabilizers: "Transverse abdominis, pelvic floor, multifidus, serratus anterior",
      antagonists: "Spinal erectors (must not give up cervical length)"
    },
    cues: [
      { en: "Short sharp breaths, as if you're fogging up a mirror a hundred times.", fr: "Le souffle sort par petits coups, comme si tu soufflais sur cent bougies sans en allumer aucune." },
      { en: "Arms pulse like hummingbird wings, torso heavy as stone.", fr: "Les bras battent l'air, mais le tronc est une pierre." },
      { en: "Eyes to your thighs, not the ceiling — don't yank on your neck.", fr: "Regarde tes cuisses, pas le plafond — et ne tire pas sur ta nuque." }
    ],
    errors: [
      { title: "Pulling on the neck", detail: "Cervical tension, loss of real chest lift. Fix: imagine an orange under the chin, constant width." },
      { title: "Rib flare on inhale", detail: "Breathing becomes high and inefficient, loss of abdominal engagement. Fix: strict lateral breathing — ribs widen, they don't lift." },
      { title: "Legs dropping or rising", detail: "The Powerhouse is giving up, lumbar compensates. Fix: return to tabletop if the low back arches; never sacrifice pelvic neutrality for leg angle." },
      { title: "Arm beats from the whole shoulder", detail: "Noise, upper-trap tension, loss of precision. Fix: movement initiates from the tricep, shoulder stable, serratus engaged." },
      { title: "Holding the breath under effort", detail: "Counterproductive, creates tension. Fix: impose the 5/5 rhythm mentally and hold it even when uncomfortable." }
    ],
    variations: [
      { type: "Regression L1", detail: "Legs down, feet on mat, head down. Breath and arm beats only. For tired clients, late prenatal, post-op." },
      { type: "Regression L2", detail: "Head down, legs in tabletop, arm beats only." },
      { type: "Regression L3", detail: "Chest lift + legs in tabletop (modern standard version)." },
      { type: "Classical", detail: "Chest lift + legs extended to 45° (original repertoire)." },
      { type: "Progression", detail: "Legs extended lower (30°, then 20°) as long as lumbar stays neutral." },
      { type: "Advanced", detail: "Hundred with small ball between ankles, or Magic Circle between hands." }
    ],
    contraindications: [
      "Acute cervical disc herniation → avoid chest lift, keep head down",
      "Lumbar disc herniation → avoid low legs, stay strict tabletop",
      "Severe osteoporosis (T-score < -2.5) → classical contraindication to chest lift",
      "Glaucoma, uncontrolled hypertension, 2nd/3rd trimester pregnancy → head-down version",
      "Significant diastasis recti (> 2 fingers) → replace with transverse activation without flexion"
    ],
    note: "In Romana's classical style, the Hundred is done in neutral, legs at 45°, sustained rhythm, no pauses. In Stott contemporary, imprint is accepted to protect the lumbar, and tabletop is the default start. Both are defensible — the choice depends on the client, not the dogma."
  },
  {
    id: "the-roll-up",
    method: "pilates-mat",
    nameEn: "The Roll-Up",
    nameFr: "La Roulade",
    level: "fundamental",
    duration: "1-2 min",
    reps: "5-8 repetitions",
    classicalOrder: 2,
    focus: ["core", "spine"],
    objective: "Sequential articulation of the spine under abdominal control. Teaches the client to use deep core rather than hip flexors to come up. A diagnostic exercise — if it's ugly, the entire Matwork will be ugly.",
    starting: "Supine, legs extended long, inner thighs engaged, feet flexed or softly pointed (school-dependent). Arms extended overhead, shoulders down away from ears, ribs knitted. Pelvis neutral, full spine length on the mat.",
    breathing: "Inhale to prepare and reach arms toward the ceiling. Exhale to articulate up sequentially (chin, sternum, one vertebra at a time). Inhale at the top in the C-curve forward. Exhale to roll back down with equal control.",
    execution: [
      "Inhale, reach arms up to 12 o'clock, initiate head nod",
      "Exhale, peel the spine off the mat bone by bone, arms following at eye level",
      "Reach forward over the legs in a deep C-curve, without collapsing the chest",
      "Inhale at the top, lengthen through the crown",
      "Exhale, reverse the movement — tailbone first, unroll one vertebra at a time",
      "Arms return overhead only when the head touches the mat"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques",
      synergists: "Transverse abdominis, iliopsoas (controlled), rectus femoris",
      stabilizers: "Pelvic floor, adductors, serratus anterior",
      antagonists: "Spinal erectors (eccentric control on the way down)"
    },
    cues: [
      { en: "Peel off the mat one vertebra at a time, like lifting a strip of tape.", fr: "Décolle-toi du tapis vertèbre par vertèbre, comme si tu soulevais un ruban adhésif." },
      { en: "Scoop the belly away from the thighs as you come forward.", fr: "Creuse le ventre loin des cuisses en avançant." },
      { en: "Lead with the breastbone, not with the chin.", fr: "Avance avec le sternum, pas avec le menton." }
    ],
    errors: [
      { title: "Jackknife with hip flexors", detail: "Legs lift, heels pop off, abs collapse. Fix: press heels into the mat, weight the legs, come up only as far as abs can control." },
      { title: "Straight-back pull-up", detail: "No sequential articulation, no C-curve. Fix: chin-to-chest first, think 'roll a marble up the spine'." },
      { title: "Momentum throw", detail: "Arms fling, spine doesn't articulate. Fix: slow the whole thing down, make arms follow not lead." },
      { title: "Collapse on the way down", detail: "Drops instead of unrolls. Fix: find the hardest point and pause there, rebuild control." }
    ],
    variations: [
      { type: "Regression L1", detail: "Knees bent, feet flat, hands behind thighs to assist. Focus on articulation only." },
      { type: "Regression L2", detail: "Roll-up with a Magic Circle or ball between the hands to give feedback and reduce arm tension." },
      { type: "Regression L3", detail: "Half Roll-Back from sitting — reverse entry, easier for weak flexors." },
      { type: "Classical", detail: "Full Roll-Up as described, legs long, arms reaching." },
      { type: "Progression", detail: "Roll-Up with arms in Teaser position throughout." }
    ],
    contraindications: [
      "Lumbar disc herniation (acute or sub-acute)",
      "Osteoporosis with vertebral compression risk",
      "Diastasis recti > 2 fingers",
      "Post-abdominal surgery < 6 weeks",
      "Late pregnancy (2nd/3rd trimester)"
    ],
    note: "The Roll-Up is the exercise where most clients discover their abs don't actually work the way they thought. Use it as an assessment tool early in a series, not a warm-up."
  },
  {
    id: "single-leg-circles",
    method: "pilates-mat",
    nameEn: "Single Leg Circles",
    nameFr: "Les Cercles de Jambe",
    level: "fundamental",
    duration: "1 min",
    reps: "5 circles each direction, each leg",
    classicalOrder: 4,
    focus: ["hips", "core"],
    objective: "Hip joint mobility and dissociation of the femur from a stable pelvis. Teaches the core to resist the rotational pull of the moving leg. An essential stability check before any advanced supine work.",
    starting: "Supine, one leg extended long on the mat (or bent if tight hamstrings), the other leg extended toward the ceiling. Arms long by the sides, palms down for anchor. Pelvis stable and square, shoulders relaxed.",
    breathing: "Inhale on the first half of the circle (crossing the midline and down), exhale on the second half (out and up). Breathing supports the pelvis stability — not the leg movement.",
    execution: [
      "Extend the working leg toward the ceiling, hip at ~90°",
      "Draw a small controlled circle with the whole leg, crossing the midline first",
      "Keep the pelvis absolutely still — no rocking, no tipping",
      "5 circles in one direction, 5 in the other",
      "Switch legs"
    ],
    muscles: {
      prime: "Iliopsoas, adductors, abductors (depending on phase of circle)",
      synergists: "Quadriceps (knee extension), hamstrings",
      stabilizers: "Obliques (anti-rotation), transverse abdominis, opposite glute, pelvic floor",
      antagonists: "Contralateral hip flexors and obliques isometric"
    },
    cues: [
      { en: "The pelvis is a bowl of water — don't spill a drop.", fr: "Le bassin est un bol d'eau — ne renverse pas une goutte." },
      { en: "Draw the circle with the heel, not the knee.", fr: "Dessine le cercle avec le talon, pas avec le genou." },
      { en: "Anchor the opposite hip into the mat.", fr: "Ancre la hanche opposée dans le tapis." }
    ],
    errors: [
      { title: "Pelvis rocks with the leg", detail: "Loss of dissociation, lumbar stress. Fix: make the circle smaller until the pelvis stays still, then grow from there." },
      { title: "Bottom leg lifts", detail: "Sign that hip flexors are dominant and core isn't anchoring. Fix: press the bottom heel actively into the mat." },
      { title: "Circle drawn from the knee", detail: "Turns into a knee circle, not a hip circle. Fix: lock the knee softly, think 'femur in the socket'." },
      { title: "Shoulders tense up", detail: "Compensation pattern. Fix: slide shoulders down, arms relaxed." }
    ],
    variations: [
      { type: "Regression L1", detail: "Bottom knee bent, foot flat. Reduces hamstring pull and lumbar stress." },
      { type: "Regression L2", detail: "Working knee slightly bent for tight hamstrings." },
      { type: "Classical", detail: "Both legs long, full circles, crossing midline." },
      { type: "Progression", detail: "Larger circles, faster tempo, or add a light ankle weight." },
      { type: "Advanced", detail: "On the Reformer with leg in strap for assisted-resisted version." }
    ],
    contraindications: [
      "Acute SI joint instability → keep circles tiny or omit",
      "Hip labral tear → avoid crossing midline deeply",
      "Post-hip replacement → respect surgeon's ROM protocol",
      "Pregnancy → bottom leg bent is safer"
    ],
    note: "Small and perfect beats big and sloppy. Watch the opposite ASIS: if it lifts, the exercise is broken."
  },
  {
    id: "rolling-like-a-ball",
    method: "pilates-mat",
    nameEn: "Rolling Like a Ball",
    nameFr: "Rouler en Boule",
    level: "fundamental",
    duration: "1 min",
    reps: "6-8 repetitions",
    classicalOrder: 5,
    focus: ["core", "spine", "balance"],
    objective: "Massage the spine, develop balance control, and train the deep C-curve under momentum. Looks playful, reveals whether the client can maintain abdominal tone without gripping with the hip flexors.",
    starting: "Seated in a deep C-curve, knees drawn to chest, hands holding the ankles or shins, heels close to the seat. Balance on the sit bones just behind the tailbone. Head tucked forward, chin toward chest. Elbows wide, shoulders relaxed.",
    breathing: "Inhale to roll back, exhale to return. The exhale is what brings you back up — not momentum.",
    execution: [
      "Find the balance point just behind the sit bones",
      "Inhale, roll back onto the upper back (not the neck)",
      "Exhale, return to the balance point without touching the feet down",
      "Keep the shape of the ball constant — distance chest-to-knees never changes",
      "6-8 repetitions"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, transverse abdominis",
      synergists: "Hip flexors (isometric hold of the ball shape)",
      stabilizers: "Deep neck flexors, pelvic floor",
      antagonists: "Spinal erectors (lengthened under control)"
    },
    cues: [
      { en: "Stay round like a ball — don't let it become an egg.", fr: "Reste rond comme une balle — pas comme un œuf." },
      { en: "Come back up with your exhale, not your chin.", fr: "Reviens avec ton souffle, pas avec ton menton." },
      { en: "Don't roll onto your neck, stop at the shoulder blades.", fr: "Ne roule pas sur ta nuque, arrête-toi aux omoplates." }
    ],
    errors: [
      { title: "Rolling onto the neck", detail: "Cervical compression risk. Fix: stop the roll at T1-T2, use the abs to brake." },
      { title: "Losing the ball shape", detail: "Distance chest-to-knees changes, momentum takes over. Fix: hands actively hug the shins, ribs soft." },
      { title: "Using momentum to return", detail: "Throws the head to come back up. Fix: pause at the top, prove the exhale brought you back." },
      { title: "Feet touching down", detail: "Reveals loss of control. Fix: slow down, smaller range first." }
    ],
    variations: [
      { type: "Regression L1", detail: "Hands behind thighs instead of at ankles, smaller ball shape." },
      { type: "Regression L2", detail: "Roll just halfway and return." },
      { type: "Classical", detail: "Full roll to shoulder blades and return to balance point." },
      { type: "Progression", detail: "Hold a small ball between the knees to add adductor engagement." }
    ],
    contraindications: [
      "Cervical disc pathology → avoid",
      "Osteoporosis → avoid rolling on spine",
      "Pregnancy → avoid supine tipping after first trimester",
      "Acute low-back pain → regress or omit"
    ],
    note: "The exercise looks simple but it's a precision test. A client who 'rolls like a ball' well has core control. A client who crashes reveals everything about their abdominal strategy."
  },
  {
    id: "single-leg-stretch",
    method: "pilates-mat",
    nameEn: "Single Leg Stretch",
    nameFr: "Étirement d'une Jambe",
    level: "fundamental",
    duration: "1 min",
    reps: "5-10 each side",
    classicalOrder: 6,
    focus: ["core", "coordination"],
    objective: "First of the 'stomach series'. Trains lumbopelvic stability under moving legs and coordinated arm-leg work. Builds endurance in the deep core without neck strain if executed properly.",
    starting: "Supine, chest lift with shoulder blades off the mat, one knee drawn into the chest, the other leg extended long at 45°. Outside hand on the ankle of the bent knee, inside hand on the knee. Elbows wide, neck long.",
    breathing: "Inhale for 2 leg changes, exhale for 2 leg changes. Or inhale 1, exhale 1 for slower tempo. The breath rhythms the movement.",
    execution: [
      "Maintain chest lift throughout — it never drops",
      "Switch legs with control: pull one knee in, extend the other",
      "Hands switch at the same time (outside / inside grip)",
      "Keep the pelvis absolutely still — no rocking",
      "Extended leg stays at a height where the low back is neutral, not higher"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques",
      synergists: "Iliopsoas, rectus femoris",
      stabilizers: "Transverse abdominis, pelvic floor, deep neck flexors",
      antagonists: "Spinal erectors (long and quiet)"
    },
    cues: [
      { en: "Knees change, torso stays still — like a train on tracks.", fr: "Les genoux changent, le tronc reste immobile — comme un train sur ses rails." },
      { en: "Extended leg is long like an arrow pointing across the room.", fr: "La jambe tendue est longue comme une flèche vers l'autre bout de la pièce." },
      { en: "Elbows wide, no pulling with the hands.", fr: "Coudes larges, pas de tirage avec les mains." }
    ],
    errors: [
      { title: "Extended leg too low", detail: "Low back arches, abs disengage. Fix: raise the angle until the low back is quiet." },
      { title: "Pelvis rocking", detail: "No anti-rotation work. Fix: slow down, imagine a cup of coffee on the pelvis." },
      { title: "Neck crunch", detail: "Pulling with the hands on the knee. Fix: hands are placeholders only, no tension." },
      { title: "Chest lift dropping between reps", detail: "Wastes the exercise. Fix: commit to the lift for the whole set." }
    ],
    variations: [
      { type: "Regression L1", detail: "Head down, feet in tabletop, switch knees only." },
      { type: "Regression L2", detail: "Chest lift + tabletop switches without leg extension." },
      { type: "Classical", detail: "Full version as described, extended leg at 45°." },
      { type: "Progression", detail: "Lower extended leg angle (30°) while maintaining neutral lumbar." }
    ],
    contraindications: [
      "Acute lumbar disc issue → avoid low leg extension",
      "Cervical instability → head down version",
      "Diastasis recti → avoid or regress heavily",
      "Post-abdominal surgery → wait 8+ weeks"
    ],
    note: "The classical hand position (outside ankle, inside knee) is a coordination test as much as a muscular one. Clients often reveal their dominant side here."
  },
  {
    id: "footwork-reformer",
    method: "pilates-reformer",
    nameEn: "Footwork Series",
    nameFr: "Série des Pieds",
    level: "fundamental",
    duration: "5-8 min",
    reps: "10 reps per position",
    classicalOrder: 1,
    focus: ["legs", "alignment"],
    objective: "Opens every Reformer session. Warms the entire lower body, establishes alignment from feet to pelvis, and teaches the client to push evenly through the carriage. A diagnostic for foot-knee-hip tracking.",
    starting: "Supine on the carriage, head on headrest, pelvis neutral, feet on the footbar. Springs typically at 3 reds or 2 reds + 1 blue (adjust per client). Arms long by the sides, shoulders against the shoulder blocks gently.",
    breathing: "Inhale to press out, exhale to return — or reverse depending on school. Classical Romana: exhale out. Contemporary: often inhale out. Pick one and stay consistent.",
    execution: [
      "Pilates V (heels together, toes apart) — 10 reps",
      "Bird on perch (toes on bar, heels lifted) — 10 reps",
      "Heels parallel, hip-width — 10 reps",
      "Tendon stretch (heels drop below bar, then press back) — 10 reps",
      "Each position: push out with full leg extension (don't lock), return with resistance"
    ],
    muscles: {
      prime: "Quadriceps, gluteals, calves, hamstrings (eccentric return)",
      synergists: "Adductors (Pilates V), tibialis anterior (dorsiflexion)",
      stabilizers: "Transverse abdominis, pelvic floor, spinal erectors",
      antagonists: "Hip flexors (quiet on the return)"
    },
    cues: [
      { en: "Push the footbar away, don't pull yourself toward it.", fr: "Pousse la barre loin de toi, ne te tire pas vers elle." },
      { en: "Knees track over the second toe — every single rep.", fr: "Les genoux s'alignent sur le deuxième orteil — à chaque répétition." },
      { en: "Return with the same control as the push — don't let the carriage crash.", fr: "Reviens avec le même contrôle que la poussée — ne laisse pas le chariot claquer." }
    ],
    errors: [
      { title: "Hyperextending the knees", detail: "Loss of muscle engagement at lockout, joint stress. Fix: stop at full extension without locking." },
      { title: "Pelvis tucking under", detail: "Losing neutral, overworking hamstrings. Fix: maintain neutral pelvis throughout." },
      { title: "Knees collapse inward", detail: "Reveals weak glute medius and poor tracking. Fix: drive knees over toes, cue abduction." },
      { title: "Carriage crashing home", detail: "No eccentric control. Fix: slow the return to match the push." }
    ],
    variations: [
      { type: "Lighter springs", detail: "For deconditioned clients or rehab (1 red + 1 blue)." },
      { type: "Heavier springs", detail: "Strong clients, athletes (3-4 reds)." },
      { type: "Single leg", detail: "One foot on bar, other leg in tabletop — unilateral challenge." },
      { type: "With headrest down", detail: "For clients with kyphosis or forward head posture." }
    ],
    contraindications: [
      "Acute knee injury → reduce spring load and range",
      "Post-hip replacement → respect ROM, avoid deep flexion",
      "Severe osteoarthritis of the knee → lighter springs, partial range",
      "Acute lumbar issue → avoid heavy springs that pull the pelvis"
    ],
    note: "Footwork is never a warm-up to rush through. It's the session's alignment blueprint. If the footwork is sloppy, everything after will be too."
  },
  {
    id: "the-bear",
    method: "lagree",
    nameEn: "The Bear",
    nameFr: "L'Ours",
    level: "intermediate",
    duration: "60-90 sec per side",
    reps: "Slow tempo (4-count)",
    classicalOrder: null,
    focus: ["core", "shoulders", "legs"],
    objective: "A signature Lagree exercise. Full-body integration with extreme time-under-tension. Challenges shoulder stability, core anti-extension, and quadriceps endurance simultaneously. Builds the 'slow-twitch burn' the method is known for.",
    starting: "Quadruped position on the Megaformer, hands on the front platform, knees hovering 2-3 inches above the carriage, feet on the back platform. Neutral spine, shoulders stacked over wrists, core fully engaged. Springs typically heavy (2-3 red).",
    breathing: "Slow and continuous. No breath-holding. Usually 4-count inhale on the push-back, 4-count exhale on the return. Breathing supports the hold, not the movement.",
    execution: [
      "Find the hover position — knees off carriage, spine neutral",
      "Slowly push the carriage back by extending the hips and reaching through the heels",
      "4-count out, 4-count return",
      "Core stays braced the entire time — no arching, no sagging",
      "Shoulders stay stacked, don't creep forward",
      "Continue until failure or time cap"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, quadriceps, deltoids",
      synergists: "Serratus anterior, gluteals, hamstrings",
      stabilizers: "Transverse abdominis, rotator cuff, pelvic floor",
      antagonists: "Spinal erectors (anti-extension work)"
    },
    cues: [
      { en: "Knees are magnets hovering above the carriage — never touch down.", fr: "Les genoux sont des aimants suspendus au-dessus du chariot — ils ne touchent jamais." },
      { en: "Push through the heels like you're printing footprints into the platform.", fr: "Pousse dans les talons comme si tu imprimais tes empreintes dans la plateforme." },
      { en: "Four counts out, four counts in — no faster, no matter what.", fr: "Quatre temps dehors, quatre temps dedans — pas plus vite, quoi qu'il arrive." }
    ],
    errors: [
      { title: "Knees touching carriage", detail: "Loses the core work. Fix: drop to shorter sets rather than cheat the hover." },
      { title: "Shoulders creeping forward", detail: "Wrist and shoulder strain. Fix: push the floor away, keep shoulders stacked over wrists." },
      { title: "Back arching or sagging", detail: "Loss of neutral, lumbar stress. Fix: imagine a rod from crown to tailbone, rib-to-pelvis connection." },
      { title: "Going too fast", detail: "Defeats the whole purpose of Lagree. Fix: count out loud if needed, respect the 4-count tempo." },
      { title: "Holding the breath", detail: "Tension, dizziness, failure. Fix: steady continuous breath, never locked." }
    ],
    variations: [
      { type: "Regression", detail: "Knees stay in contact with the carriage — same tempo, less core demand." },
      { type: "Standard", detail: "Full hover version as described." },
      { type: "Progression", detail: "Add a pike movement at the end range — bring hips up toward ceiling." },
      { type: "Advanced", detail: "Single leg — one foot off the platform, maintain hover." }
    ],
    contraindications: [
      "Wrist injury or acute tendinopathy → avoid",
      "Shoulder impingement → modify or omit",
      "Diastasis recti → avoid anti-extension under load",
      "Late pregnancy → contraindicated",
      "Lumbar disc issue → avoid, too much load on anti-extension"
    ],
    note: "The Bear is the exercise that sells Lagree. It looks simple, feels brutal. Respect the 4-count — a sloppy fast Bear is just a bad plank. Count out loud for clients who want to rush."
  },

  // ========== MAT — continuing the classical order ==========
  {
    id: "double-leg-stretch",
    method: "pilates-mat",
    nameEn: "Double Leg Stretch",
    nameFr: "Étirement des Deux Jambes",
    level: "intermediate",
    duration: "1 min",
    reps: "6-10",
    classicalOrder: 7,
    focus: ["core", "coordination"],
    objective: "Second in the stomach series. Integrates full-body coordination under sustained chest lift. Trains the core to hold while the limbs move in opposition.",
    starting: "Supine, chest lift sustained, knees into chest, hands on ankles or shins, elbows wide. Pelvis neutral or imprint depending on school.",
    breathing: "Inhale to extend arms overhead and legs forward at 45°. Exhale to circle arms around and pull knees back in. Big breath circles mirror the limb circles.",
    execution: [
      "Start in the 'ball' position: knees in, hands on ankles, chest lifted",
      "Inhale — extend arms and legs simultaneously, reaching in opposition",
      "Exhale — circle arms wide and back in, pulling knees to chest",
      "Chest lift never drops",
      "Find the stretch in the extension phase, the flex in the return"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, transverse abdominis",
      synergists: "Iliopsoas, deltoid (arm circle), hamstrings",
      stabilizers: "Pelvic floor, deep neck flexors, serratus anterior",
      antagonists: "Spinal erectors (long and quiet)"
    },
    cues: [
      { en: "Stretch in two directions at once — fingers and toes to opposite walls.", fr: "Étire-toi dans deux directions en même temps — doigts et orteils vers les murs opposés." },
      { en: "Hug yourself smaller at the end of each exhale.", fr: "Serre-toi plus petit à la fin de chaque expiration." }
    ],
    errors: [
      { title: "Legs too low", detail: "Lumbar arches, abs lose. Fix: raise the legs until the back is quiet." },
      { title: "Losing chest lift", detail: "Neck drops between reps. Fix: sustain the lift through the whole set." },
      { title: "Rushed circles", detail: "Arms fling. Fix: match arm speed to leg speed, slow and wide." }
    ],
    variations: [
      { type: "Regression", detail: "Head down, hands behind thighs, extend one limb at a time." },
      { type: "Classical", detail: "Full version with arm circles and chest lift." },
      { type: "Progression", detail: "Legs lower (30°) + slower tempo for more core demand." }
    ],
    contraindications: [
      "Cervical disc issues → head down",
      "Lumbar disc herniation → avoid low leg extension",
      "Diastasis recti > 2 fingers → regress heavily"
    ]
  },
  {
    id: "single-straight-leg-stretch",
    method: "pilates-mat",
    nameEn: "Single Straight Leg Stretch",
    nameFr: "Les Ciseaux",
    level: "intermediate",
    duration: "1 min",
    reps: "8-10 each",
    classicalOrder: 8,
    focus: ["core", "hamstrings"],
    objective: "Also known as 'Scissors'. Dynamic hamstring stretch with core stability. Teaches leg dissociation under load.",
    starting: "Supine, chest lift, one leg straight toward the ceiling, the other extended forward just above the mat. Hands on the top leg (ankle, calf, or thigh — avoid pulling on the knee).",
    breathing: "Double pulse inhale on one leg, double pulse exhale on the switch. Rhythm: 'inhale-inhale, exhale-exhale'.",
    execution: [
      "Grab the top leg, draw it toward you with two small pulses",
      "Switch legs in mid-air, keeping both straight",
      "The 'scissor' is the switch — both legs long the whole time",
      "Low leg hovers, never touches"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques",
      synergists: "Iliopsoas, rectus femoris, hamstrings (stretch)",
      stabilizers: "Transverse abdominis, pelvic floor, shoulder stabilizers",
      antagonists: "Quadriceps (top leg lengthening)"
    },
    cues: [
      { en: "Legs scissor past each other, long like blades.", fr: "Les jambes se croisent comme des lames allongées." },
      { en: "Pull from your abs, not from your hands.", fr: "Tire avec tes abdos, pas avec tes mains." }
    ],
    errors: [
      { title: "Bending the legs", detail: "Loses the exercise's nature. Fix: keep both knees soft but extended." },
      { title: "Yanking the top leg", detail: "Hamstring strain. Fix: small pulses from the core." },
      { title: "Bottom leg on the mat", detail: "Too easy, no core work. Fix: hover 2 inches off." }
    ],
    variations: [
      { type: "Regression", detail: "Bent knee version, hands behind thigh." },
      { type: "Classical", detail: "Both legs straight, hover bottom leg." },
      { type: "Progression", detail: "Hands behind head (no pulling), just core pulses." }
    ],
    contraindications: [
      "Acute hamstring strain → avoid",
      "Cervical issues → head down",
      "Hypermobility → don't overpull top leg"
    ]
  },
  {
    id: "double-straight-leg-lower",
    method: "pilates-mat",
    nameEn: "Double Straight Leg Lower",
    nameFr: "Descente des Deux Jambes Tendues",
    level: "advanced",
    duration: "1 min",
    reps: "6-10",
    classicalOrder: 9,
    focus: ["core"],
    objective: "One of the hardest Mat core exercises. The controlled lowering of straight legs tests whether the transverse and rectus can stabilize the pelvis against lever load.",
    starting: "Supine, chest lift, hands clasped behind the head (no pulling), legs extended toward the ceiling, inner thighs engaged.",
    breathing: "Inhale to lower the legs, exhale to lift them back up. The exhale is where the abs contract hardest.",
    execution: [
      "Inhale — lower the legs slowly toward the mat, only as low as the lumbar stays flat",
      "Exhale — lift them back up with control",
      "Pelvis stays neutral/imprinted throughout",
      "Legs stay straight and together, no bending, no wobble"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, transverse abdominis",
      synergists: "Adductors, iliopsoas (eccentric)",
      stabilizers: "Pelvic floor, deep neck flexors",
      antagonists: "Hip flexors (resisting the drop)"
    },
    cues: [
      { en: "Anchor your back, then let the legs travel.", fr: "Ancre ton dos, puis laisse les jambes voyager." },
      { en: "Stop where your back wants to arch — not one degree further.", fr: "Arrête-toi là où ton dos veut se cambrer — pas un degré de plus." }
    ],
    errors: [
      { title: "Lower back arching", detail: "Pelvis tips. Fix: smaller range, smaller range, smaller range." },
      { title: "Legs splitting apart", detail: "Adductors off. Fix: glue inner thighs." },
      { title: "Chest lift dropping", detail: "Abs disengage. Fix: maintain the lift." }
    ],
    variations: [
      { type: "Regression", detail: "Bent knees, lower in tabletop range only." },
      { type: "Intermediate", detail: "Hands under the sacrum for support." },
      { type: "Classical", detail: "Hands behind head, straight legs, full range." }
    ],
    contraindications: [
      "Lumbar disc issues → avoid",
      "Diastasis recti → contraindicated",
      "Pregnancy → contraindicated",
      "Weak core → regress to dead bug first"
    ]
  },
  {
    id: "criss-cross",
    method: "pilates-mat",
    nameEn: "Criss-Cross",
    nameFr: "Croisé",
    level: "intermediate",
    duration: "1 min",
    reps: "8-10 each side",
    classicalOrder: 10,
    focus: ["core", "obliques"],
    objective: "Closes the stomach series. Rotational core work under sustained chest lift. Targets the obliques specifically and tests rotation without pelvic rocking.",
    starting: "Supine, chest lift, hands clasped behind the head, one knee pulled in, the other leg extended at 45°. Pelvis stable.",
    breathing: "Exhale on the rotation, inhale to switch. Slow tempo — no bouncing.",
    execution: [
      "Rotate the torso so opposite elbow reaches across to the bent knee",
      "It's the ribcage that rotates, not the elbow chasing the knee",
      "Hold briefly at the end range",
      "Switch with control, don't use momentum",
      "Both legs stay active: one in, one long"
    ],
    muscles: {
      prime: "Internal and external obliques, rectus abdominis",
      synergists: "Transverse abdominis, iliopsoas",
      stabilizers: "Pelvic floor, deep neck flexors, serratus",
      antagonists: "Contralateral obliques isometric"
    },
    cues: [
      { en: "Rotate from the rib cage, not the elbow.", fr: "Tourne depuis la cage thoracique, pas depuis le coude." },
      { en: "Both elbows stay wide — imagine a broomstick behind your neck.", fr: "Les deux coudes restent larges — imagine un manche à balai derrière ta nuque." }
    ],
    errors: [
      { title: "Elbow to knee cheat", detail: "Just flapping the arm. Fix: elbows wide, rotate the ribs." },
      { title: "Pelvis rocking", detail: "Loses anti-rotation. Fix: slow down, weight the low back." },
      { title: "Fast bouncing", detail: "Momentum cheats the obliques. Fix: 1-second hold at each side." }
    ],
    variations: [
      { type: "Regression", detail: "Head down, smaller range, just twist from the waist." },
      { type: "Classical", detail: "Full hands-behind-head, straight bottom leg." },
      { type: "Progression", detail: "Hold each end range for 3 seconds." }
    ],
    contraindications: [
      "Cervical spine issues → head down",
      "Diastasis recti → avoid rotation under flexion load"
    ]
  },
  {
    id: "spine-stretch-forward",
    method: "pilates-mat",
    nameEn: "Spine Stretch Forward",
    nameFr: "Étirement de la Colonne",
    level: "fundamental",
    duration: "1 min",
    reps: "3-5",
    classicalOrder: 11,
    focus: ["spine", "hamstrings"],
    objective: "Active flexion of the spine, deep C-curve practice, and hamstring length. First seated exercise of the classical order — a reset after the stomach series.",
    starting: "Seated tall, legs extended in front, feet flexed, legs slightly wider than hip-width. Arms extended forward at shoulder height. Sit on a cushion or towel if the pelvis rolls back.",
    breathing: "Inhale to grow tall, exhale to round forward articulating the spine.",
    execution: [
      "Inhale — grow tall through the crown, find your highest seated position",
      "Exhale — drop the head, peel forward vertebra by vertebra",
      "Reach forward between the legs with the arms",
      "Pelvis stays anchored, sit bones grounded",
      "Inhale to return, rebuilding the spine from the base"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, transverse abdominis",
      synergists: "Hip flexors (isometric), hamstrings (stretched)",
      stabilizers: "Pelvic floor, spinal erectors (eccentric)",
      antagonists: "Spinal erectors (lengthening)"
    },
    cues: [
      { en: "Imagine a wall behind your back — slide down it without losing contact.", fr: "Imagine un mur derrière ton dos — glisse contre lui sans le quitter." },
      { en: "The stretch is in the back, not in the reach forward.", fr: "L'étirement est dans le dos, pas dans le bras qui avance." }
    ],
    errors: [
      { title: "Collapsing instead of articulating", detail: "Whole torso drops as one. Fix: initiate with chin-to-chest, peel." },
      { title: "Pelvis rolling back", detail: "Hamstrings too tight. Fix: sit on a cushion." },
      { title: "Reaching with the arms", detail: "Turns into a stretch contest. Fix: arms parallel, not chasing." }
    ],
    variations: [
      { type: "Regression", detail: "Seated on a cushion, knees slightly bent." },
      { type: "Classical", detail: "Straight legs, arms forward, full flexion." },
      { type: "Progression", detail: "Arms overhead throughout, more demand on shoulder stability." }
    ],
    contraindications: [
      "Acute lumbar disc herniation → avoid full flexion",
      "Severe osteoporosis → avoid loaded spinal flexion"
    ]
  },
  {
    id: "open-leg-rocker",
    method: "pilates-mat",
    nameEn: "Open Leg Rocker",
    nameFr: "Balancier Jambes Ouvertes",
    level: "intermediate",
    duration: "1 min",
    reps: "6",
    classicalOrder: 12,
    focus: ["core", "balance", "hamstrings"],
    objective: "Balance, control, hamstring length and abdominal strength in one exercise. Tests whether the client can maintain a V-shape under momentum.",
    starting: "Balance on the sit bones, legs extended in a V toward the ceiling, hands holding the ankles (or calves for regression). Find the balance point, spine in deep C-curve.",
    breathing: "Inhale to roll back, exhale to return to balance.",
    execution: [
      "Find the V balance, legs and torso forming an open angle",
      "Inhale — roll back onto the shoulder blades (not the neck)",
      "Exhale — return to balance without letting the legs touch",
      "Shape of the V stays identical throughout",
      "No momentum — the exhale brings you back"
    ],
    muscles: {
      prime: "Rectus abdominis, transverse abdominis, obliques",
      synergists: "Iliopsoas, hamstrings (stretched isometrically)",
      stabilizers: "Adductors (legs apart), deep neck flexors",
      antagonists: "Spinal erectors (rolling)"
    },
    cues: [
      { en: "Think V, not L — the angle doesn't change.", fr: "Pense V, pas L — l'angle ne change pas." },
      { en: "Return with your breath, not your legs.", fr: "Reviens avec ton souffle, pas avec tes jambes." }
    ],
    errors: [
      { title: "Losing the V shape", detail: "Legs bend or close. Fix: commit to straight legs, wider stance if needed." },
      { title: "Rolling on the neck", detail: "Stops at T1. Fix: find the balance point higher on the sit bones." },
      { title: "Crashing down", detail: "No return control. Fix: start with a smaller range." }
    ],
    variations: [
      { type: "Regression", detail: "Hold behind the knees, bent legs, roll in tight shape." },
      { type: "Classical", detail: "Hands at ankles, legs straight, full roll." },
      { type: "Progression", detail: "Release the ankles, arms reach forward, balance only." }
    ],
    contraindications: [
      "Cervical issues → avoid",
      "Osteoporosis → avoid rolling on spine",
      "Acute low back pain → regress"
    ]
  },
  {
    id: "corkscrew",
    method: "pilates-mat",
    nameEn: "Corkscrew",
    nameFr: "Tire-Bouchon",
    level: "advanced",
    duration: "1 min",
    reps: "3 each direction",
    classicalOrder: 13,
    focus: ["core", "obliques"],
    objective: "Rotational core control with legs as a lever. Advanced anti-rotation training — the abs must prevent the pelvis from following the leg circles.",
    starting: "Supine, legs extended toward the ceiling, arms long by the sides, palms down for anchor. Pelvis neutral or slightly imprinted.",
    breathing: "Inhale through the first half of the circle, exhale through the second half.",
    execution: [
      "Keep the legs together, extended up",
      "Draw a slow circle with both legs to one side, down, around, and back up",
      "Pelvis stays as square as possible — anti-rotation work",
      "Complete 3 circles in each direction",
      "The circle size is dictated by pelvic control, not ambition"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, transverse abdominis",
      synergists: "Iliopsoas, adductors, hip rotators",
      stabilizers: "Pelvic floor, serratus anterior",
      antagonists: "Spinal erectors (controlling)"
    },
    cues: [
      { en: "The circle is drawn in space — your back stays printed on the mat.", fr: "Le cercle est dessiné dans l'espace — ton dos reste imprimé au sol." },
      { en: "Start tiny. Earn bigger.", fr: "Commence tout petit. Gagne plus grand." }
    ],
    errors: [
      { title: "Pelvis tipping", detail: "Abs overwhelmed. Fix: smaller circles." },
      { title: "Going too fast", detail: "Momentum cheats. Fix: 4 seconds per circle minimum." },
      { title: "Legs splitting", detail: "Adductors off. Fix: glue the inner thighs." }
    ],
    variations: [
      { type: "Regression", detail: "Bent knee Corkscrew in tabletop — small circles." },
      { type: "Intermediate", detail: "Legs straight, small circles, pelvis grounded." },
      { type: "Advanced", detail: "Larger circles with hips leaving the mat each rotation." }
    ],
    contraindications: [
      "Lumbar disc issues → avoid",
      "Cervical issues → keep head down only",
      "SI joint pain → omit"
    ]
  },
  {
    id: "the-saw",
    method: "pilates-mat",
    nameEn: "The Saw",
    nameFr: "La Scie",
    level: "fundamental",
    duration: "1 min",
    reps: "3-5 each side",
    classicalOrder: 14,
    focus: ["spine", "obliques", "hamstrings"],
    objective: "Seated rotation with forward flexion. Mobilizes the thoracic spine, stretches the posterior chain on one side, trains diagonal core patterns.",
    starting: "Seated tall, legs extended in a wide V, feet flexed. Arms out to the sides at shoulder height, palms down.",
    breathing: "Inhale to rotate, exhale to reach forward.",
    execution: [
      "Inhale — rotate the torso to one side from the waist",
      "Exhale — reach the opposite hand past the pinky toe, saw-like motion",
      "Back hand reaches behind for opposition, palm up",
      "Head follows the front hand, deep C-curve rotation",
      "Inhale to spiral back up tall",
      "Alternate sides"
    ],
    muscles: {
      prime: "Obliques, transverse abdominis",
      synergists: "Spinal rotators, hip flexors",
      stabilizers: "Pelvic floor, hamstrings (stretched)",
      antagonists: "Contralateral spinal muscles"
    },
    cues: [
      { en: "Saw off your little toe with your pinky finger — three strokes.", fr: "Scie ton petit orteil avec ton auriculaire — trois coups." },
      { en: "Hips stay square to the front, even as the ribs rotate.", fr: "Les hanches restent face à l'avant, même quand les côtes tournent." }
    ],
    errors: [
      { title: "Hips rotating with the torso", detail: "Loses the twist. Fix: anchor both sit bones." },
      { title: "Reaching with the arm only", detail: "No spinal rotation. Fix: rotate from the sternum first." },
      { title: "Collapsing forward", detail: "Drops instead of rounds. Fix: build the round from the top down." }
    ],
    variations: [
      { type: "Regression", detail: "Sit on a cushion, slightly bent legs." },
      { type: "Classical", detail: "Straight legs, full rotation and reach." },
      { type: "Progression", detail: "Add a pulse at the end range." }
    ],
    contraindications: [
      "Lumbar disc issues → avoid deep flexion + rotation combo",
      "Acute SI joint pain → keep it small"
    ]
  },
  {
    id: "swan-prep",
    method: "pilates-mat",
    nameEn: "Swan Prep",
    nameFr: "Le Cygne — Préparation",
    level: "fundamental",
    duration: "1 min",
    reps: "6-8",
    classicalOrder: 15,
    focus: ["back", "spine"],
    objective: "Prone extension. Counterbalance to all the flexion work. Strengthens the spinal erectors and opens the front line. Gateway to full Swan Dive.",
    starting: "Prone, hands under the shoulders, elbows close to the body, legs extended and slightly apart, tops of the feet on the mat. Forehead rests on the mat.",
    breathing: "Inhale to extend the spine, exhale to return.",
    execution: [
      "Inhale — press the hands lightly, lengthen the spine forward and up",
      "Lift the head, chest, and upper ribs off the mat",
      "Pubic bone stays on the mat, glutes engaged but not gripping",
      "Think long before high",
      "Exhale — return sequentially, ribs, chest, forehead"
    ],
    muscles: {
      prime: "Spinal erectors, multifidus, quadratus lumborum",
      synergists: "Gluteus maximus, hamstrings, triceps (light)",
      stabilizers: "Transverse abdominis, pelvic floor, serratus",
      antagonists: "Rectus abdominis (lengthened)"
    },
    cues: [
      { en: "Grow the spine long before you lift.", fr: "Allonge la colonne avant de soulever." },
      { en: "Triceps hug in toward the ribs — no chicken wings.", fr: "Les triceps se collent aux côtes — pas d'ailes de poulet." }
    ],
    errors: [
      { title: "Crunching the low back", detail: "No length. Fix: lengthen forward first, then lift." },
      { title: "Elbows flaring out", detail: "Scapular instability. Fix: elbows close, triceps active." },
      { title: "Gripping the glutes", detail: "Compensates for weak back extensors. Fix: let the back do the work." }
    ],
    variations: [
      { type: "Regression", detail: "Hands stay on the mat, lift just head and chest." },
      { type: "Classical Swan", detail: "Full Swan Dive — rock forward and back with straight arms." },
      { type: "Progression", detail: "Hands off the mat at the top for 2 seconds." }
    ],
    contraindications: [
      "Acute spondylolysis or spondylolisthesis → avoid extension",
      "Facet joint pain → small range only",
      "Cervical stenosis → keep head neutral, not lifted"
    ]
  },
  {
    id: "single-leg-kick",
    method: "pilates-mat",
    nameEn: "Single Leg Kick",
    nameFr: "Coup de Pied d'une Jambe",
    level: "fundamental",
    duration: "1 min",
    reps: "5 each",
    classicalOrder: 16,
    focus: ["hamstrings", "back"],
    objective: "Prone hamstring strengthener with spinal extension. Teaches dynamic work in an extended position. Good introduction to prone repertoire for most clients.",
    starting: "Prone, propped on forearms in sphinx position, elbows under shoulders, hands in fists (classical) or flat. Spine long, pubic bone on the mat, legs extended and zipped together.",
    breathing: "Continuous short breaths, one per kick pulse.",
    execution: [
      "Keep the upper body still, chest open, shoulders down",
      "Kick one heel toward the glute with a double pulse",
      "Switch legs, double pulse again",
      "Knees stay together, hips stay on the mat",
      "Focus on the quality of the kick, not the height"
    ],
    muscles: {
      prime: "Hamstrings, gluteus maximus",
      synergists: "Spinal erectors, shoulder stabilizers",
      stabilizers: "Transverse abdominis, serratus anterior, lats",
      antagonists: "Quadriceps, rectus abdominis"
    },
    cues: [
      { en: "Pubic bone glued to the mat.", fr: "Pubis collé au sol." },
      { en: "Kick your butt, don't launch your heel.", fr: "Frappe tes fesses, ne lance pas ton talon." }
    ],
    errors: [
      { title: "Hips rocking side to side", detail: "Pelvic instability. Fix: engage adductors, glue knees." },
      { title: "Shoulders creeping up", detail: "Neck tension. Fix: slide shoulder blades down the back." },
      { title: "Pubic bone lifting", detail: "Loss of abs. Fix: reconnect transverse before starting." }
    ],
    variations: [
      { type: "Regression", detail: "Forehead rests on hands, smaller kick range." },
      { type: "Classical", detail: "Sphinx position, double pulse kicks." },
      { type: "Progression", detail: "Add ankle weights for hamstring demand." }
    ],
    contraindications: [
      "Cervical issues → modify propped position",
      "Acute hamstring strain → avoid",
      "Wrist issues → forearms on mat is fine"
    ]
  },
  {
    id: "double-leg-kick",
    method: "pilates-mat",
    nameEn: "Double Leg Kick",
    nameFr: "Coup de Pied des Deux Jambes",
    level: "intermediate",
    duration: "1 min",
    reps: "5",
    classicalOrder: 17,
    focus: ["back", "legs", "shoulders"],
    objective: "Combines prone leg work with upper back extension and shoulder opening. One of the best counter-exercises to desk posture in the entire Mat repertoire.",
    starting: "Prone, one cheek on the mat, hands clasped behind the back (high on the back, not at the sacrum), elbows resting toward the mat. Legs extended, zipped together.",
    breathing: "Inhale to prepare, three quick exhales on the kick, inhale on the extension.",
    execution: [
      "Three quick pulses — kick both heels toward the glutes",
      "Extend the legs long, simultaneously lift chest and reach hands toward the feet",
      "Head lifts with the chest, eyes forward",
      "Place the other cheek on the mat for the next rep",
      "Alternate cheeks each rep"
    ],
    muscles: {
      prime: "Hamstrings, gluteals, spinal erectors, posterior deltoid",
      synergists: "Rhomboids, mid-trapezius, triceps",
      stabilizers: "Transverse abdominis, serratus",
      antagonists: "Hip flexors, pectorals, rectus abdominis"
    },
    cues: [
      { en: "Three kicks, then rise like a ship cresting a wave.", fr: "Trois coups de pied, puis monte comme un bateau sur la crête d'une vague." },
      { en: "Open the chest — imagine prying two heavy doors apart.", fr: "Ouvre la poitrine — imagine écarter deux portes lourdes." }
    ],
    errors: [
      { title: "Neck hyperextension", detail: "Looking at the ceiling. Fix: long neck, gaze slightly forward." },
      { title: "Hands too low", detail: "No thoracic work. Fix: clasp high between shoulder blades." },
      { title: "Rushing the kicks", detail: "Loses the pulse. Fix: count '1-2-3, up'." }
    ],
    variations: [
      { type: "Regression", detail: "Keep forehead down, just practice the three kicks." },
      { type: "Classical", detail: "Full version with chest lift and hand reach." },
      { type: "Progression", detail: "Lift legs off the mat during the kick phase." }
    ],
    contraindications: [
      "Shoulder pain → skip the hand clasp",
      "Lumbar extension pathology → omit the chest lift",
      "Cervical issues → don't lift the head"
    ]
  },
  {
    id: "swimming",
    method: "pilates-mat",
    nameEn: "Swimming",
    nameFr: "Nage",
    level: "fundamental",
    duration: "1 min",
    reps: "20-30 counts",
    classicalOrder: 18,
    focus: ["back", "coordination"],
    objective: "Prone contralateral coordination. Strengthens the entire posterior chain and trains gait-like cross-patterning. Energizing finisher or transition exercise.",
    starting: "Prone, legs extended and slightly apart, arms extended overhead shoulder-width. Lift both arms and both legs slightly off the mat to start.",
    breathing: "Short rhythmic breaths, inhale 5 counts, exhale 5 counts, while 'swimming'.",
    execution: [
      "Lift opposite arm and leg higher than the other",
      "Switch rapidly, as if swimming",
      "All four limbs stay off the mat the whole time",
      "Core engaged, pelvis quiet",
      "Maintain for 20 counts, then rest"
    ],
    muscles: {
      prime: "Spinal erectors, multifidus, gluteals, deltoids",
      synergists: "Hamstrings, rhomboids, triceps",
      stabilizers: "Transverse abdominis, obliques (anti-rotation), serratus",
      antagonists: "Rectus abdominis, pectorals, hip flexors"
    },
    cues: [
      { en: "Swim in thick water — reach long, don't flap.", fr: "Nage dans une eau épaisse — étire, ne bats pas." },
      { en: "Belly lifted off the mat — don't sink into the low back.", fr: "Ventre décollé du sol — ne t'effondre pas dans le bas du dos." }
    ],
    errors: [
      { title: "Limbs slapping the mat", detail: "No control. Fix: smaller range, lift the belly." },
      { title: "Sinking into the low back", detail: "Lumbar compression. Fix: engage transverse first." },
      { title: "Holding the breath", detail: "Tension. Fix: force the breath rhythm." }
    ],
    variations: [
      { type: "Regression", detail: "Slow swim, one limb at a time, stays on mat." },
      { type: "Classical", detail: "Fast swim, all limbs off, 20 counts." },
      { type: "Progression", detail: "Slower tempo with longer hold per lift." }
    ],
    contraindications: [
      "Acute low back pain → avoid",
      "Shoulder impingement → modify arm action",
      "Cervical issues → head in neutral only"
    ]
  },
  {
    id: "side-kick-series",
    method: "pilates-mat",
    nameEn: "Side Kick Series",
    nameFr: "Série des Coups de Pied Latéraux",
    level: "fundamental",
    duration: "5 min",
    reps: "10 each movement, each side",
    classicalOrder: 24,
    focus: ["hips", "legs", "core"],
    objective: "Lateral core stability and hip strengthening. A series of kicks, circles, and bicycles performed side-lying. Key exercise for hip health and glute medius strength.",
    starting: "Side-lying, body in one line, bottom arm extended under the head (or propped), top hand on the mat for support. Legs angled slightly forward from the hips for stability. Top leg at hip height.",
    breathing: "Varied by movement, but generally exhale on the effort phase.",
    execution: [
      "Front/Back kicks: swing the top leg forward (double pulse), then back (single)",
      "Up/Down: lift the top leg, resist on the way down",
      "Small circles: 10 each direction",
      "Bicycle: leg circles front to back, knee bends",
      "Big kicks: long leg swings with control",
      "Throughout: torso stays stacked, pelvis quiet"
    ],
    muscles: {
      prime: "Gluteus medius, gluteus maximus, adductors (bottom leg)",
      synergists: "Hip flexors, hamstrings, obliques",
      stabilizers: "Transverse abdominis, quadratus lumborum (bottom side)",
      antagonists: "Contralateral lateral chain"
    },
    cues: [
      { en: "Your waist is long — don't crush it into the mat.", fr: "Ta taille est longue — ne l'écrase pas dans le sol." },
      { en: "Top leg floats at hip height, not higher.", fr: "La jambe du haut flotte à hauteur de hanche, pas plus haut." }
    ],
    errors: [
      { title: "Rolling forward or backward", detail: "Core off. Fix: pelvis stacks, engage obliques." },
      { title: "Top leg too high", detail: "Loses glute med. Fix: hip-height ceiling." },
      { title: "Bottom side collapsing", detail: "QL shuts off. Fix: lift the waist actively." }
    ],
    variations: [
      { type: "Regression", detail: "Head on bottom arm, smaller range, fewer reps." },
      { type: "Classical", detail: "Hand behind head, full series with all kicks." },
      { type: "Progression", detail: "Ankle weights, slower tempo." }
    ],
    contraindications: [
      "Acute SI joint pain → regress or omit",
      "Hip labral tear → avoid large circles"
    ]
  },
  {
    id: "teaser",
    method: "pilates-mat",
    nameEn: "Teaser",
    nameFr: "Le Séducteur",
    level: "advanced",
    duration: "1 min",
    reps: "3-5",
    classicalOrder: 25,
    focus: ["core", "balance"],
    objective: "The signature Pilates exercise. Tests everything at once — core strength, control, balance, hip flexor endurance, spinal articulation. The goal of many Mat practitioners.",
    starting: "Supine, legs extended at 45° (or bent for regression), arms extended overhead.",
    breathing: "Inhale to prepare, exhale to roll up into the V, inhale at the top, exhale to roll back down.",
    execution: [
      "Inhale — reach arms up",
      "Exhale — roll up, articulating the spine, arms reaching past the toes",
      "Top position: V-sit, legs and torso forming an open angle, arms parallel to legs",
      "Inhale — hold the V",
      "Exhale — roll back down vertebra by vertebra, legs stay at 45°"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, iliopsoas",
      synergists: "Transverse abdominis, rectus femoris, deltoids",
      stabilizers: "Pelvic floor, adductors, spinal erectors (eccentric)",
      antagonists: "Hip extensors, spinal extensors"
    },
    cues: [
      { en: "Roll up like you're peeling off a magnet.", fr: "Monte comme si tu décollais d'un aimant." },
      { en: "The legs don't move — you move to meet them.", fr: "Les jambes ne bougent pas — c'est toi qui montes à leur rencontre." }
    ],
    errors: [
      { title: "Jackknife up from the hips", detail: "No articulation. Fix: chin first, peel the spine." },
      { title: "Legs rising during the roll", detail: "Hip flexors dominant. Fix: press legs into imaginary wall." },
      { title: "Momentum throw", detail: "Arms fling. Fix: slow everything, exhale longer." }
    ],
    variations: [
      { type: "Teaser Prep", detail: "Knees bent, hold behind thighs, roll up." },
      { type: "Teaser I", detail: "Classical — legs at 45°, roll up and down." },
      { type: "Teaser II", detail: "From top position, lower and lift legs only." },
      { type: "Teaser III", detail: "Roll up and down with legs lowering/lifting simultaneously." }
    ],
    contraindications: [
      "Lumbar disc issues → avoid",
      "Weak core → stay in Teaser Prep until solid",
      "Diastasis recti → avoid"
    ],
    note: "The Teaser is where ego meets reality. Clients will want the classical version before their body is ready — regress without apology. A perfect Teaser Prep is far more valuable than a crashed Teaser I."
  },
  {
    id: "seal",
    method: "pilates-mat",
    nameEn: "The Seal",
    nameFr: "Le Phoque",
    level: "fundamental",
    duration: "1 min",
    reps: "6-8",
    classicalOrder: 33,
    focus: ["core", "balance", "spine"],
    objective: "Closing exercise — playful, joyful, but controlled. Spinal massage, balance practice, and coordination. Joseph's way of ending on a smile.",
    starting: "Seated in a deep C-curve, hands reach inside the knees and grasp the outside of the ankles, feet together, balance just behind the sit bones.",
    breathing: "Inhale to roll back, exhale to return.",
    execution: [
      "Find the balance point in the C-curve",
      "Clap the feet together three times like a seal",
      "Inhale — roll back onto the shoulder blades",
      "At the top of the roll, clap the feet three more times",
      "Exhale — return to balance, clap again",
      "Continue the rhythm: balance-clap, roll-clap, return-clap"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, adductors",
      synergists: "Hip flexors, transverse abdominis",
      stabilizers: "Pelvic floor, spinal erectors (eccentric)",
      antagonists: "Spinal extensors during roll"
    },
    cues: [
      { en: "Stay round like a ball, clap like a seal.", fr: "Reste rond comme une balle, applaudis comme un phoque." },
      { en: "Don't let your feet touch the mat — ever.", fr: "Ne laisse jamais tes pieds toucher le tapis." }
    ],
    errors: [
      { title: "Feet touching down", detail: "Loses the continuous flow. Fix: smaller range first." },
      { title: "Rolling onto the neck", detail: "Cervical risk. Fix: stop at the shoulder blades." },
      { title: "Losing the ball shape", detail: "Body lengthens. Fix: hands deeper toward ankles." }
    ],
    variations: [
      { type: "Regression", detail: "Hands behind knees, no claps, just roll." },
      { type: "Classical", detail: "Full version with claps." },
      { type: "Progression", detail: "Roll up to stand from The Seal — advanced ending." }
    ],
    contraindications: [
      "Cervical disc issues → avoid",
      "Osteoporosis → avoid rolling on spine",
      "Pregnancy → avoid after first trimester"
    ]
  },

  // ========== REFORMER — new additions ==========
  {
    id: "reformer-hundred",
    method: "pilates-reformer",
    nameEn: "Hundred on Reformer",
    nameFr: "Le Cent au Reformer",
    level: "fundamental",
    duration: "2 min",
    reps: "100 arm beats",
    classicalOrder: 2,
    focus: ["core", "breathing"],
    objective: "The Hundred with strap resistance. The straps add scapular stability demand while the breathing and chest lift remain central. Deeper core engagement than Mat version.",
    starting: "Supine on the carriage, headrest up, straps in hands, arms extended toward the ceiling then pressed down to hip level. Chest lifted, legs in tabletop or at 45°. Springs: 1 red + 1 blue typically.",
    breathing: "Lateral thoracic percussive, 5 in / 5 out over 10 arm beats per cycle, 10 cycles total.",
    execution: [
      "Press arms down to hip level with the straps",
      "Lift chest into flexion, legs to chosen height",
      "Small rapid arm beats (5–10 cm amplitude)",
      "Keep shoulders stable, arms straight",
      "Continue for 100 beats"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, latissimus dorsi",
      synergists: "Triceps, iliopsoas, serratus anterior",
      stabilizers: "Transverse abdominis, pelvic floor, deep neck flexors",
      antagonists: "Shoulder flexors, spinal erectors"
    },
    cues: [
      { en: "The straps are your seatbelt — they pull you into the work.", fr: "Les sangles sont ta ceinture de sécurité — elles t'ancrent dans le travail." },
      { en: "Beat from the armpit, not the wrist.", fr: "Frappe depuis l'aisselle, pas depuis le poignet." }
    ],
    errors: [
      { title: "Shoulders shrugging up", detail: "Trap dominant. Fix: scapulae down, lats engaged." },
      { title: "Arms bending", detail: "Loses strap tension. Fix: long arms, think ski poles." },
      { title: "Chest lift dropping", detail: "Same as Mat. Fix: commit the lift the whole set." }
    ],
    variations: [
      { type: "Regression", detail: "Head down, legs in tabletop." },
      { type: "Classical", detail: "Chest lift, legs 45°, full strap tension." },
      { type: "Progression", detail: "Legs lower angle or single leg alternation." }
    ],
    contraindications: [
      "Shoulder injury → modify arm position",
      "Same as Mat Hundred otherwise"
    ]
  },
  {
    id: "short-spine",
    method: "pilates-reformer",
    nameEn: "Short Spine Massage",
    nameFr: "Massage Court de la Colonne",
    level: "intermediate",
    duration: "2 min",
    reps: "5",
    focus: ["spine", "mobility"],
    objective: "A spinal decompression exercise using the Reformer straps. Rolls the spine over like a necklace and places it back down vertebra by vertebra. One of the best Reformer exercises for spinal health.",
    starting: "Supine on carriage, feet in straps, legs extended toward the ceiling, heels together toes apart (Pilates V). Springs: 2 reds typically. Arms long by the sides.",
    breathing: "Inhale to roll over, exhale to roll down.",
    execution: [
      "Inhale — bring legs over the head toward the frame",
      "Roll the spine up until feet are above the head",
      "Exhale — bend the knees toward the ears",
      "Roll the spine down vertebra by vertebra, knees staying bent",
      "As the sacrum touches the carriage, legs extend back up to start"
    ],
    muscles: {
      prime: "Rectus abdominis, transverse abdominis, iliopsoas (controlled)",
      synergists: "Hamstrings, adductors, obliques",
      stabilizers: "Pelvic floor, serratus, deep neck flexors",
      antagonists: "Spinal erectors (lengthening)"
    },
    cues: [
      { en: "Place each vertebra down like laying pearls on a string.", fr: "Pose chaque vertèbre comme tu poserais des perles sur un collier." },
      { en: "The straps carry the legs — you carry the spine.", fr: "Les sangles portent les jambes — toi, tu portes la colonne." }
    ],
    errors: [
      { title: "Rolling with momentum", detail: "No articulation. Fix: slower, one vertebra at a time." },
      { title: "Weight on the neck", detail: "Cervical risk. Fix: stop at the shoulder blades, don't compress C-spine." },
      { title: "Legs pulling the body", detail: "Strap tension, not core. Fix: initiate from the abs." }
    ],
    variations: [
      { type: "Regression", detail: "Smaller range — only roll to mid-back." },
      { type: "Classical", detail: "Full roll-over and articulation back down." }
    ],
    contraindications: [
      "Cervical disc issues → avoid",
      "Osteoporosis → avoid loaded spinal flexion",
      "Retinal issues → avoid inverting"
    ]
  },
  {
    id: "elephant",
    method: "pilates-reformer",
    nameEn: "Elephant",
    nameFr: "L'Éléphant",
    level: "fundamental",
    duration: "1 min",
    reps: "10",
    focus: ["core", "hamstrings"],
    objective: "Standing on the carriage in an inverted V shape. Hamstring length, core endurance, and scapular stability in one move. Excellent for runners.",
    starting: "Standing on the carriage with hands on the footbar, feet parallel at the shoulder rests, body in inverted V (pike). Head between the arms, neutral spine. Springs: 2 reds.",
    breathing: "Inhale to prepare, exhale to push the carriage out.",
    execution: [
      "Round the lower back slightly — this is NOT a neutral spine position",
      "Press the carriage back using the core, not the legs",
      "Feet stay flat, heels stay down",
      "Return the carriage with control by reversing the core action",
      "The movement is small — maybe 15 cm of carriage travel"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, transverse abdominis",
      synergists: "Hamstrings, glutes, latissimus dorsi",
      stabilizers: "Serratus anterior, triceps, deep core",
      antagonists: "Hip flexors (inhibited), spinal erectors"
    },
    cues: [
      { en: "Tuck your tail and lift your belly — push with your abs.", fr: "Rentre le coccyx et soulève le ventre — pousse avec les abdos." },
      { en: "Heels heavy, crown long.", fr: "Talons lourds, couronne allongée." }
    ],
    errors: [
      { title: "Pushing from the legs", detail: "Defeats the purpose. Fix: soft knees, let the core do it." },
      { title: "Heels lifting", detail: "Hamstring cheat. Fix: feet flat, accept smaller range." },
      { title: "Looking up", detail: "Neck out of line. Fix: gaze between the feet." }
    ],
    variations: [
      { type: "Regression", detail: "Knees slightly bent if hamstrings very tight." },
      { type: "Classical", detail: "Straight legs, slight lumbar round." },
      { type: "Progression", detail: "Single leg version — one foot off the carriage." }
    ],
    contraindications: [
      "Wrist issues → modify grip or skip",
      "Acute lumbar disc → avoid lumbar flexion version",
      "High blood pressure → limit time head-down"
    ]
  },
  {
    id: "long-stretch",
    method: "pilates-reformer",
    nameEn: "Long Stretch",
    nameFr: "Grande Étirement",
    level: "intermediate",
    duration: "1 min",
    reps: "5",
    focus: ["core", "shoulders"],
    objective: "Plank position on the Reformer with the carriage moving. Tests full-body plank integrity under destabilization. One of the classical Reformer tests of core strength.",
    starting: "Plank on the Reformer — hands on the footbar, feet on the shoulder rests, body long like a plank. Springs: 1 red typically.",
    breathing: "Inhale to push back, exhale to return. Or the reverse — pick one and commit.",
    execution: [
      "Plank position: long body, shoulders over wrists (or slightly forward)",
      "Press the carriage back by hinging slightly from the shoulders",
      "Return without collapsing — the plank shape doesn't change",
      "Core braced throughout",
      "5 clean reps are better than 10 sloppy ones"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, serratus, pectoralis",
      synergists: "Deltoids, triceps, gluteals",
      stabilizers: "Transverse abdominis, rotator cuff, quadriceps",
      antagonists: "Hip flexors, spinal erectors"
    },
    cues: [
      { en: "The carriage moves, your shape doesn't.", fr: "Le chariot bouge, ta forme ne change pas." },
      { en: "Push the bar away from you with the full body.", fr: "Pousse la barre loin de toi avec tout le corps." }
    ],
    errors: [
      { title: "Hips dropping", detail: "Core off. Fix: reduce range, reengage abs." },
      { title: "Shoulders shrugging", detail: "Scapular instability. Fix: reach the floor away through the hands." },
      { title: "Pushing from the legs", detail: "No core work. Fix: body unit, moving as one." }
    ],
    variations: [
      { type: "Regression", detail: "Knees on carriage (modified plank)." },
      { type: "Classical", detail: "Full plank, 5 reps." },
      { type: "Progression", detail: "Single leg lifted throughout — Up Stretch variation." }
    ],
    contraindications: [
      "Wrist injuries → skip or modify",
      "Acute shoulder pain → omit",
      "Severe diastasis recti → avoid"
    ]
  },
  {
    id: "knee-stretch-round",
    method: "pilates-reformer",
    nameEn: "Knee Stretch Round",
    nameFr: "Étirement des Genoux — Dos Rond",
    level: "fundamental",
    duration: "1 min",
    reps: "10",
    focus: ["core", "hip-flexors"],
    objective: "Kneeling on the carriage with the spine rounded, pushing the carriage back using the core. Excellent transverse abdominis conditioning in a dynamic way.",
    starting: "Kneeling on the carriage, hands on the footbar, spine in deep C-curve (rounded). Knees on the front edge of the carriage, feet against the shoulder rests. Springs: 1.5–2 reds.",
    breathing: "Exhale to push the carriage back, inhale to return.",
    execution: [
      "Maintain the C-curve throughout — spine stays rounded",
      "Push the carriage back using the hip flexors and core",
      "Return with control, don't let the carriage slam back",
      "Small range, high rep count",
      "No bouncing"
    ],
    muscles: {
      prime: "Rectus abdominis, transverse abdominis, iliopsoas",
      synergists: "Quadriceps, hamstrings",
      stabilizers: "Pelvic floor, serratus, triceps",
      antagonists: "Spinal extensors"
    },
    cues: [
      { en: "Pull the navel to the spine to start each rep.", fr: "Tire le nombril vers la colonne pour démarrer chaque rep." },
      { en: "The round never loses its shape.", fr: "L'arrondi ne perd jamais sa forme." }
    ],
    errors: [
      { title: "Losing the C-curve", detail: "Back flattens. Fix: deepen the hollow, ribs to pelvis." },
      { title: "Pushing from the legs", detail: "Quads dominant. Fix: lead with the abs." },
      { title: "Hips swinging", detail: "Pelvis unstable. Fix: smaller range." }
    ],
    variations: [
      { type: "Regression", detail: "Lighter spring, slower tempo." },
      { type: "Classical", detail: "10 reps in round, then switch to Flat back version." },
      { type: "Progression", detail: "Knee Stretch 'Off' — knees hover just off the carriage." }
    ],
    contraindications: [
      "Knee pain → cushion under knees or skip",
      "Wrist issues → use fists or modified grip",
      "Acute low back pain → avoid flexed loaded position"
    ]
  },
  {
    id: "tendon-stretch",
    method: "pilates-reformer",
    nameEn: "Tendon Stretch",
    nameFr: "Étirement du Tendon",
    level: "advanced",
    duration: "1 min",
    reps: "5",
    focus: ["legs", "hamstrings", "core"],
    objective: "Advanced calf, ankle and hamstring work with core integration. Stands on the footbar in a pike, pressing heels down and back. Not for beginners.",
    starting: "Feet on the footbar, standing on it with heels elevated, in a pike position (inverted V). Hands on the frame or the carriage edge. Springs: 2 reds.",
    breathing: "Exhale to press the heels down, inhale to release.",
    execution: [
      "From pike position, press the heels toward the floor (below footbar level)",
      "Simultaneously, the carriage moves slightly",
      "Return to start with control",
      "Body stays in inverted V throughout",
      "Very small range — it's a stretch + control exercise, not a big movement"
    ],
    muscles: {
      prime: "Gastrocnemius, soleus, hamstrings",
      synergists: "Rectus abdominis, tibialis anterior (eccentric)",
      stabilizers: "Transverse, serratus, scapular stabilizers",
      antagonists: "Quadriceps, hip flexors"
    },
    cues: [
      { en: "The heels chase the floor.", fr: "Les talons cherchent le sol." },
      { en: "Core on the whole time — this is not a passive stretch.", fr: "Abdos actifs tout le temps — ce n'est pas un étirement passif." }
    ],
    errors: [
      { title: "Losing the pike", detail: "Hips drop. Fix: push the floor away, lift the sit bones." },
      { title: "Knees bending", detail: "Hamstring compensation. Fix: legs straight, accept smaller range." },
      { title: "Shoulder strain", detail: "Not set. Fix: scapulae engaged before starting." }
    ],
    variations: [
      { type: "Intermediate", detail: "Hands on footbar instead of frame — easier balance." },
      { type: "Classical", detail: "Hands on frame, advanced calf drop." }
    ],
    contraindications: [
      "Achilles tendinopathy → avoid",
      "Acute hamstring strain → avoid",
      "Wrist issues → modify hand position"
    ]
  },
  {
    id: "running-reformer",
    method: "pilates-reformer",
    nameEn: "Running",
    nameFr: "Course",
    level: "fundamental",
    duration: "2 min",
    reps: "20-30 alternations",
    focus: ["legs", "alignment"],
    objective: "Single-leg footwork alternations. Mimics a running pattern on the Reformer, building unilateral leg strength and ankle mobility. Often used to close the footwork series.",
    starting: "Supine on carriage, feet on the footbar in parallel position, legs extended (pressed out to full extension). Springs: 2-3 reds.",
    breathing: "Natural breathing, one breath per 2-4 alternations.",
    execution: [
      "Legs fully extended to start",
      "Lower one heel below the footbar while the other presses into full point",
      "Alternate heels rhythmically, like running in place",
      "Knees stay straight — the action is in the ankles",
      "Maintain neutral pelvis, no rocking"
    ],
    muscles: {
      prime: "Gastrocnemius, soleus, tibialis anterior",
      synergists: "Quadriceps, hamstrings (isometric)",
      stabilizers: "Transverse abdominis, pelvic floor, gluteals",
      antagonists: "Intrinsic foot muscles"
    },
    cues: [
      { en: "Ankles do the work, knees stay long.", fr: "Les chevilles travaillent, les genoux restent longs." },
      { en: "Run in place, but with control.", fr: "Cours sur place, mais avec contrôle." }
    ],
    errors: [
      { title: "Bending the knees", detail: "Loses the ankle isolation. Fix: lock knees soft, move from ankles only." },
      { title: "Rocking pelvis", detail: "Lateral instability. Fix: anchor the pelvis, slower tempo." },
      { title: "Hyperextending knees", detail: "Joint stress. Fix: straight but not locked." }
    ],
    variations: [
      { type: "Regression", detail: "Just one foot lower + lift, bilateral hold, no alternation." },
      { type: "Classical", detail: "Full alternation, rhythmic tempo." },
      { type: "Progression", detail: "Faster tempo with perfect alignment." }
    ],
    contraindications: [
      "Plantar fasciitis → avoid heel drop",
      "Achilles issues → reduce range",
      "Knee hyperextension tendency → monitor form"
    ]
  },

  // ========== LAGREE — new additions ==========
  {
    id: "lagree-lunge",
    method: "lagree",
    nameEn: "The Lunge",
    nameFr: "La Fente",
    level: "fundamental",
    duration: "60-90 sec per side",
    reps: "Slow 4-count tempo",
    focus: ["legs", "hips", "glutes"],
    objective: "The foundational Lagree move. Slow-tempo unilateral lunge with carriage destabilization. Builds glute and quad strength, balance, and time-under-tension endurance.",
    starting: "Front foot on the front platform, back foot on the carriage at the shoulder rest, body upright. Hands on the handles or on hips. Springs: 2-3 reds. Front knee stacked over the ankle.",
    breathing: "Slow and continuous — 4-count out, 4-count in. No breath holding.",
    execution: [
      "Slowly bend the front knee to lower the body, pushing the carriage back with the rear leg",
      "4-count descent — front knee tracks over second toe, back knee hovers above carriage",
      "4-count return to the start position",
      "The rear leg straightens fully at the top but the front leg stays slightly bent (no lockout)",
      "Continue for 60-90 seconds — to failure or tempo break"
    ],
    muscles: {
      prime: "Quadriceps, gluteus maximus, hamstrings",
      synergists: "Gluteus medius, adductors, core",
      stabilizers: "Transverse abdominis, obliques, intrinsic foot muscles",
      antagonists: "Hip flexors (stretch on rear leg)"
    },
    cues: [
      { en: "Four counts down, four counts up — never faster.", fr: "Quatre temps descente, quatre temps montée — jamais plus vite." },
      { en: "Drive the floor away through your front heel.", fr: "Pousse le sol avec ton talon avant." }
    ],
    errors: [
      { title: "Going too fast", detail: "Defeats the slow-burn principle. Fix: count out loud if needed." },
      { title: "Front knee collapsing inward", detail: "Valgus stress. Fix: drive knee over the second toe actively." },
      { title: "Losing pelvic neutral", detail: "Anterior tilt under load. Fix: engage deep core, pelvis tucked slightly." }
    ],
    variations: [
      { type: "Regression", detail: "Lighter springs, shorter hold time (45 sec), 6-count tempo." },
      { type: "Classical", detail: "2-3 reds, 60-90 sec, 4-count tempo." },
      { type: "Progression", detail: "Super Lunge — add an elevated rear foot or pulse at the bottom." }
    ],
    contraindications: [
      "Acute knee injury → avoid",
      "Hip labral tear → reduce range",
      "Post-hip replacement → respect surgeon's protocol"
    ]
  },
  {
    id: "lagree-wheelbarrow",
    method: "lagree",
    nameEn: "Wheelbarrow",
    nameFr: "La Brouette",
    level: "intermediate",
    duration: "60-90 sec per side",
    reps: "Slow tempo to failure",
    focus: ["glutes", "core", "legs"],
    objective: "A unilateral glute exercise performed in a hinged position. Targets glute max with extreme time-under-tension. Named for the posture it creates.",
    starting: "One foot on front platform, the other knee on the carriage (behind, shoulder rest). Hands gripping the front platform edges. Body hinged forward, spine long. Springs: 2 reds.",
    breathing: "Slow continuous breath, 4-count pace.",
    execution: [
      "Hinge at the hips, keeping the spine long",
      "Press the carriage back by extending the kneeling leg",
      "4-count out, 4-count in",
      "Glute does the work — not the lower back",
      "Keep pelvis level — no hip hike"
    ],
    muscles: {
      prime: "Gluteus maximus, hamstrings",
      synergists: "Quadriceps (front leg), core, lats",
      stabilizers: "Transverse, obliques, shoulder stabilizers",
      antagonists: "Hip flexors"
    },
    cues: [
      { en: "Squeeze the glute to push the carriage — not the quad.", fr: "Serre la fesse pour pousser le chariot — pas le quadriceps." },
      { en: "Spine long, hips level, slow tempo.", fr: "Colonne longue, hanches horizontales, tempo lent." }
    ],
    errors: [
      { title: "Arching the low back", detail: "Hyperextension under load. Fix: rib cage down, pelvis neutral." },
      { title: "Hip hiking", detail: "Uneven glute engagement. Fix: drop the working side down." },
      { title: "Using the arms to push", detail: "Skips the glute. Fix: arms are just braces." }
    ],
    variations: [
      { type: "Regression", detail: "Lighter spring (1 red), shorter hold, smaller range." },
      { type: "Classical", detail: "2 reds, 60-90 sec, 4-count tempo." },
      { type: "Progression", detail: "Add a pulse at the end range, or raise the rear foot off the carriage." }
    ],
    contraindications: [
      "Low back pain → avoid hinged loaded position",
      "Acute hamstring strain → avoid",
      "Wrist issues → modify grip"
    ]
  },
  {
    id: "lagree-spider-kick",
    method: "lagree",
    nameEn: "Spider Kick",
    nameFr: "Coup de Pied Araignée",
    level: "intermediate",
    duration: "60 sec per side",
    reps: "Slow 4-count",
    focus: ["core", "obliques", "shoulders"],
    objective: "A plank-based rotational core exercise with carriage destabilization. Targets obliques, shoulder stabilizers, and anti-rotation core. High coordination demand.",
    starting: "Plank position — hands on front platform, feet on the carriage at the shoulder rests. Springs: 2 reds. Body long, core braced.",
    breathing: "Exhale on the knee drive, inhale on the return.",
    execution: [
      "From plank, slowly draw one knee toward the opposite elbow diagonally",
      "4-count knee drive",
      "4-count return, carriage slides back to plank",
      "Pelvis stays level — no hip hike",
      "Switch to the other side"
    ],
    muscles: {
      prime: "Obliques, rectus abdominis, serratus anterior",
      synergists: "Hip flexors, pectoralis, deltoids",
      stabilizers: "Transverse, rotator cuff, quadriceps",
      antagonists: "Spinal erectors, hip extensors"
    },
    cues: [
      { en: "Rib to opposite hip, slow and deliberate.", fr: "Côtes vers la hanche opposée, lent et délibéré." },
      { en: "Plank never breaks, even as the knee moves.", fr: "Le plank ne se casse jamais, même quand le genou bouge." }
    ],
    errors: [
      { title: "Pike up instead of rotate", detail: "Uses hip flexors. Fix: think rotation, not elevation." },
      { title: "Hips dropping", detail: "Loses the plank. Fix: glutes on, core braced." },
      { title: "Fast tempo", detail: "No oblique time-under-tension. Fix: slow the return." }
    ],
    variations: [
      { type: "Regression", detail: "Knees on carriage version (kneeling plank)." },
      { type: "Classical", detail: "Full plank, 60 sec per side." },
      { type: "Progression", detail: "Single-leg hold — one foot elevated throughout." }
    ],
    contraindications: [
      "Wrist injury → avoid",
      "Shoulder impingement → modify or skip",
      "Diastasis recti → avoid"
    ]
  },
  {
    id: "lagree-french-twist",
    method: "lagree",
    nameEn: "French Twist",
    nameFr: "Torsion Française",
    level: "intermediate",
    duration: "60 sec per side",
    reps: "Slow tempo",
    focus: ["obliques", "shoulders"],
    objective: "A standing rotational exercise on the Megaformer. Targets obliques with shoulder integration. Unique to the Lagree method.",
    starting: "Standing on the front platform, one hand gripping the handle of the cable on the opposite side, body rotated toward the cable. Springs: 1-2 reds. Feet shoulder-width, core braced.",
    breathing: "Exhale on the rotation away, inhale on return.",
    execution: [
      "From the loaded position, rotate the torso away from the cable",
      "The cable hand extends away in the rotation direction",
      "4-count out, 4-count return",
      "Hips face forward throughout — the rotation is in the ribcage",
      "Feel the deep obliques loading"
    ],
    muscles: {
      prime: "Obliques (internal and external), serratus",
      synergists: "Latissimus, deltoids, rectus abdominis",
      stabilizers: "Transverse, gluteals, adductors",
      antagonists: "Contralateral obliques and lats"
    },
    cues: [
      { en: "Twist from the ribs, not from the arm.", fr: "Tourne depuis les côtes, pas depuis le bras." },
      { en: "Hips forward, eyes follow the hand.", fr: "Hanches vers l'avant, les yeux suivent la main." }
    ],
    errors: [
      { title: "Hip rotating with torso", detail: "Loses anti-rotation work. Fix: anchor the feet, rotate only above." },
      { title: "Jerky movement", detail: "Momentum. Fix: continuous slow tempo." },
      { title: "Shoulder shrugging", detail: "Trap dominant. Fix: scapula down before starting." }
    ],
    variations: [
      { type: "Regression", detail: "Lighter spring, shorter range." },
      { type: "Classical", detail: "2 reds, full rotation." },
      { type: "Progression", detail: "Add a squat as you rotate — full-body integration." }
    ],
    contraindications: [
      "Shoulder injury → avoid",
      "Acute low back pain → limit rotation"
    ]
  },
  {
    id: "lagree-scrambled-eggs",
    method: "lagree",
    nameEn: "Scrambled Eggs",
    nameFr: "Œufs Brouillés",
    level: "intermediate",
    duration: "90 sec",
    reps: "Continuous knee drives",
    focus: ["core", "coordination"],
    objective: "A signature Lagree core exercise — dynamic plank with alternating knee drives. High metabolic demand, core endurance, and coordination.",
    starting: "Plank on the Megaformer — hands on the front platform, feet on the carriage. Springs: 2 reds. Body braced in perfect plank.",
    breathing: "Rhythmic, one breath per 2-4 knee drives.",
    execution: [
      "From plank, slowly drive one knee toward the chest",
      "As that leg returns, the other knee drives forward",
      "Continuous alternation — the carriage moves slightly with each drive",
      "Tempo is slower than a mountain climber — 2-3 seconds per knee",
      "Plank shape never breaks"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, hip flexors",
      synergists: "Pectoralis, deltoids, quadriceps",
      stabilizers: "Transverse, rotator cuff, serratus",
      antagonists: "Spinal erectors, hip extensors"
    },
    cues: [
      { en: "Not a mountain climber — a slow, controlled scramble.", fr: "Pas un mountain climber — un scrambling lent et contrôlé." },
      { en: "Hips stay level, even as knees move.", fr: "Les hanches restent horizontales, même quand les genoux bougent." }
    ],
    errors: [
      { title: "Going too fast", detail: "Becomes cardio, loses core. Fix: slow it down." },
      { title: "Hip hiking", detail: "Lateral tilt. Fix: glutes on, pelvis level." },
      { title: "Shoulders collapsing forward", detail: "Plank breaks. Fix: push the floor away actively." }
    ],
    variations: [
      { type: "Regression", detail: "Knees on carriage version (modified plank)." },
      { type: "Classical", detail: "Full plank, continuous for 90 sec." },
      { type: "Progression", detail: "Cross-body drive — knee to opposite elbow." }
    ],
    contraindications: [
      "Wrist issues → avoid",
      "Shoulder pain → modify",
      "Diastasis recti → avoid"
    ]
  },
  {
    id: "lagree-catfish",
    method: "lagree",
    nameEn: "Catfish",
    nameFr: "Poisson-Chat",
    level: "intermediate",
    duration: "60 sec per side",
    reps: "Slow tempo",
    focus: ["glutes", "hamstrings"],
    objective: "A reverse lunge on the Megaformer targeting the posterior chain. Hamstrings and glutes are the prime focus. Named for the fluid backward slide.",
    starting: "Standing on the front platform, one foot planted, the other foot on the carriage. Hands on handles or on hips. Springs: 2 reds. Torso upright, pelvis neutral.",
    breathing: "4-count back, 4-count return.",
    execution: [
      "Slowly press the rear foot back on the carriage, lowering into a reverse lunge",
      "4-count descent — front knee bends, rear leg extends",
      "Front heel drives into the platform",
      "4-count return, pulling the carriage back with the glute and hamstring",
      "60 seconds per side"
    ],
    muscles: {
      prime: "Gluteus maximus, hamstrings, quadriceps (front leg)",
      synergists: "Gluteus medius, adductors, core",
      stabilizers: "Transverse, obliques, intrinsic foot",
      antagonists: "Hip flexors"
    },
    cues: [
      { en: "Pull the carriage home with your glute.", fr: "Ramène le chariot à toi avec ta fesse." },
      { en: "Slow and mean — no bouncing.", fr: "Lent et dur — pas de rebond." }
    ],
    errors: [
      { title: "Forward trunk lean", detail: "Loses glute. Fix: upright torso." },
      { title: "Knee caving in", detail: "Valgus. Fix: knee over toes." },
      { title: "Too fast", detail: "Misses the burn. Fix: count out loud." }
    ],
    variations: [
      { type: "Regression", detail: "Lighter spring, shorter range." },
      { type: "Classical", detail: "2 reds, 60 sec, 4-count." },
      { type: "Progression", detail: "Add a pulse at the end range." }
    ],
    contraindications: [
      "Knee pain → avoid",
      "Acute hamstring strain → omit"
    ]
  },

  // ========== MAT — additional common exercises ==========
  {
    id: "bridge",
    method: "pilates-mat",
    nameEn: "Bridge / Pelvic Curl",
    nameFr: "Le Pont",
    level: "fundamental",
    duration: "1 min",
    reps: "8-10",
    focus: ["back", "glutes", "spine"],
    objective: "Sequential spinal articulation with glute activation. One of the most commonly taught Pilates exercises because it teaches spinal mobility, glute engagement, and hip flexor release all at once.",
    starting: "Supine, knees bent, feet flat on the mat hip-width apart, heels close to the sit bones. Arms long by the sides, palms down. Pelvis neutral.",
    breathing: "Exhale to curl up, inhale at the top, exhale to roll down.",
    execution: [
      "Exhale — imprint the lumbar slightly, then peel the pelvis off the mat",
      "Articulate vertebra by vertebra up to a shoulder bridge",
      "At the top: straight line from shoulders to knees, ribs soft",
      "Inhale — hold the bridge",
      "Exhale — roll down one vertebra at a time, starting from the upper back"
    ],
    muscles: {
      prime: "Gluteus maximus, hamstrings, spinal erectors",
      synergists: "Adductors, quadriceps (knees), transverse abdominis",
      stabilizers: "Pelvic floor, deep neck flexors",
      antagonists: "Hip flexors (lengthening)"
    },
    cues: [
      { en: "Peel up like velcro, place down like pearls.", fr: "Décolle comme du velcro, pose comme des perles." },
      { en: "Glutes initiate, hamstrings finish.", fr: "Les fessiers démarrent, les ischios terminent." }
    ],
    errors: [
      { title: "Hyperextending at the top", detail: "Lumbar stress. Fix: ribs to pelvis connection at the top." },
      { title: "Rising as a block", detail: "No articulation. Fix: think vertebra by vertebra." },
      { title: "Gripping with the low back", detail: "No glute. Fix: squeeze glutes first, lift second." }
    ],
    variations: [
      { type: "Regression", detail: "Smaller lift, just the pelvis off the mat." },
      { type: "Classical", detail: "Full bridge with articulation up and down." },
      { type: "Single leg", detail: "Extend one leg at the top, hold, lower." },
      { type: "Progression", detail: "Shoulder bridge kick — classical exercise in original order." }
    ],
    contraindications: [
      "Acute disc issues → keep range small",
      "SI joint pain → parallel knees, check alignment",
      "Knee injury → avoid deep flexion start"
    ]
  },
  {
    id: "mermaid",
    method: "pilates-mat",
    nameEn: "Mermaid",
    nameFr: "La Sirène",
    level: "fundamental",
    duration: "1 min",
    reps: "3 each side",
    classicalOrder: 31,
    focus: ["spine", "shoulders"],
    objective: "Lateral spinal stretch and shoulder mobility. Opens the lateral fascial line, mobilizes the thoracic spine in side bending. Often used as a reset between more demanding exercises.",
    starting: "Seated side-sit (Z-sit) — one leg folded in front, the other leg folded behind. Outside hand on the mat for support, inside arm extended overhead.",
    breathing: "Inhale to lengthen up, exhale into the side bend.",
    execution: [
      "Inhale — grow tall, reach the top arm up toward the ceiling",
      "Exhale — side bend over, reaching the top arm to the opposite side",
      "Feel the stretch along the entire lateral line",
      "Inhale to return, exhale to reach overhead again",
      "Switch sides"
    ],
    muscles: {
      prime: "Obliques, quadratus lumborum, latissimus dorsi",
      synergists: "Serratus, intercostals, spinal rotators",
      stabilizers: "Transverse abdominis, gluteals",
      antagonists: "Contralateral lateral chain"
    },
    cues: [
      { en: "Reach longer before you bend deeper.", fr: "Allonge avant de plier." },
      { en: "Both sit bones stay anchored — no leaning.", fr: "Les deux ischions restent ancrés — pas d'appui." }
    ],
    errors: [
      { title: "Collapsing into the side", detail: "Shortening instead of stretching. Fix: lift up first, then over." },
      { title: "Lifting the bottom hip", detail: "Cheat. Fix: anchor both sit bones." },
      { title: "Crunching the waist", detail: "Side bend from the neck only. Fix: bend from the waist, not the neck." }
    ],
    variations: [
      { type: "Regression", detail: "Cross-legged seated instead of Z-sit." },
      { type: "Classical", detail: "Full Mermaid with overhead reach." },
      { type: "Progression", detail: "Add rotation at the end range — open to the ceiling." }
    ],
    contraindications: [
      "Knee pain → avoid Z-sit, use cross-legged",
      "Shoulder impingement → lower arm height",
      "Acute SI joint pain → limit range"
    ]
  },

  // ========== BATCH 2 — MAT additions ==========
  {
    id: "the-roll-over",
    method: "pilates-mat",
    nameEn: "The Roll-Over",
    nameFr: "Le Rouler en Arrière",
    level: "advanced",
    duration: "1 min",
    reps: "3-5",
    classicalOrder: 3,
    focus: ["core", "spine", "hamstrings"],
    objective: "Spinal articulation overhead, deep abdominal control, and posterior chain length. The third exercise of the classical order. Tests whether the abs can lift the legs over without using momentum.",
    starting: "Supine, legs together extended toward the ceiling, arms long by the sides palms down for anchor. Pelvis neutral.",
    breathing: "Exhale to roll over, inhale at the top, exhale to roll back down.",
    execution: [
      "Inhale to prepare",
      "Exhale — lift the legs over the head, articulating through the spine",
      "Stop when the toes touch the mat behind (or as low as the shoulders allow)",
      "Open legs to shoulder-width",
      "Roll down vertebra by vertebra, legs flexed in parallel",
      "Close legs at 90°, repeat opening on the way over"
    ],
    muscles: {
      prime: "Rectus abdominis, transverse abdominis, obliques",
      synergists: "Iliopsoas, hamstrings (stretch), adductors",
      stabilizers: "Pelvic floor, deep neck flexors, serratus",
      antagonists: "Spinal erectors (lengthening)"
    },
    cues: [
      { en: "Lift, don't throw — the abs do the work, not momentum.", fr: "Soulève, ne lance pas — les abdos travaillent, pas l'élan." },
      { en: "Place each vertebra back down like coins on a string.", fr: "Pose chaque vertèbre comme des pièces sur un fil." }
    ],
    errors: [
      { title: "Throwing the legs over", detail: "Momentum cheat. Fix: slow down, abs initiate." },
      { title: "Compressing the neck", detail: "Weight on cervical. Fix: weight stays on shoulder blades, never beyond." },
      { title: "Splayed legs on the way down", detail: "Loses control. Fix: legs parallel, close at 90°." }
    ],
    variations: [
      { type: "Regression", detail: "Bent knees Roll-Over — tabletop legs over." },
      { type: "Classical", detail: "Straight legs, parallel, full articulation." },
      { type: "Progression", detail: "Add a circle at the top before rolling down." }
    ],
    contraindications: [
      "Cervical disc issues → CONTRAINDICATED",
      "Osteoporosis → avoid",
      "Glaucoma, hypertension → avoid inverting",
      "Pregnancy → avoid"
    ]
  },
  {
    id: "neck-pull",
    method: "pilates-mat",
    nameEn: "Neck Pull",
    nameFr: "Tirage de la Nuque",
    level: "advanced",
    duration: "1 min",
    reps: "5-6",
    classicalOrder: 18,
    focus: ["core", "spine"],
    objective: "An advanced version of the Roll-Up with hands behind the head, removing arm momentum. Tests pure abdominal strength and spinal articulation. One of the hardest Mat exercises.",
    starting: "Supine, legs extended hip-width apart, feet flexed pressing into an imaginary wall. Hands clasped behind the head, elbows wide.",
    breathing: "Inhale to nod, exhale to roll up, inhale at the top, exhale to roll down.",
    execution: [
      "Inhale — initiate the head nod",
      "Exhale — roll up vertebra by vertebra without using arm momentum",
      "At the top, lengthen forward over the legs",
      "Inhale at the top, sit tall through a straight back",
      "Exhale — hinge from the hips and roll back down with full articulation"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, iliopsoas",
      synergists: "Transverse, hip flexors, deep neck flexors",
      stabilizers: "Pelvic floor, adductors, scapular stabilizers",
      antagonists: "Spinal erectors (eccentric)"
    },
    cues: [
      { en: "Press your heels into a wall — they anchor you.", fr: "Pousse les talons dans un mur — ils t'ancrent." },
      { en: "Elbows stay wide — no pulling on the head.", fr: "Coudes larges — pas de tirage sur la tête." }
    ],
    errors: [
      { title: "Pulling on the neck", detail: "Hands force the head. Fix: hands are placeholders, no pulling." },
      { title: "Legs lifting", detail: "Hip flexors dominant. Fix: weight the heels into the floor." },
      { title: "No articulation", detail: "Block roll. Fix: chin first, peel each vertebra." }
    ],
    variations: [
      { type: "Regression", detail: "Hands at temples or arms forward instead of behind head." },
      { type: "Classical", detail: "Hands behind head, full Neck Pull as described." },
      { type: "Progression", detail: "Slower tempo, pause halfway up and halfway down." }
    ],
    contraindications: [
      "Cervical disc issues → avoid hands behind head",
      "Lumbar disc herniation → avoid",
      "Weak core → regress to Roll-Up first"
    ]
  },
  {
    id: "spine-twist",
    method: "pilates-mat",
    nameEn: "Spine Twist",
    nameFr: "Torsion de la Colonne",
    level: "fundamental",
    duration: "1 min",
    reps: "3 each side",
    classicalOrder: 22,
    focus: ["spine", "obliques"],
    objective: "Pure spinal rotation in a seated position. Mobilizes the thoracic spine, trains rotation without flexion. Excellent for desk workers and athletes.",
    starting: "Seated tall, legs extended in front, feet flexed and zipped together. Arms extended out to the sides at shoulder height, palms forward.",
    breathing: "Inhale to grow tall, exhale on the rotation with two pulses.",
    execution: [
      "Inhale — lengthen the spine upward",
      "Exhale — rotate to one side with a double pulse from the waist",
      "Hips stay square, feet stay together",
      "Inhale to return to center",
      "Repeat to the other side",
      "The motion is a twist, not a side bend"
    ],
    muscles: {
      prime: "Internal and external obliques, multifidus",
      synergists: "Spinal rotators, transverse abdominis",
      stabilizers: "Adductors (legs together), hamstrings",
      antagonists: "Contralateral obliques"
    },
    cues: [
      { en: "Grow taller as you twist — never sink.", fr: "Grandis-toi en tournant — ne t'effondre jamais." },
      { en: "Hips face front, ribs face the side.", fr: "Hanches face avant, côtes face au côté." }
    ],
    errors: [
      { title: "Hips rotating with the torso", detail: "Loses isolation. Fix: anchor sit bones." },
      { title: "Slumping during the twist", detail: "Loses height. Fix: lift before you twist." },
      { title: "Reaching with the arms", detail: "Distorts shoulders. Fix: arms passive, ribs do the work." }
    ],
    variations: [
      { type: "Regression", detail: "Sit on a cushion, slightly bent knees." },
      { type: "Classical", detail: "Straight legs, double pulse rotation." },
      { type: "Progression", detail: "Add a third pulse at the end range." }
    ],
    contraindications: [
      "Acute facet pain → smaller range",
      "Pregnancy → modify (closed twists only)"
    ]
  },
  {
    id: "leg-pull-front",
    method: "pilates-mat",
    nameEn: "Leg Pull Front",
    nameFr: "Tirage de Jambe — Avant",
    level: "intermediate",
    duration: "1 min",
    reps: "5 each leg",
    classicalOrder: 28,
    focus: ["core", "shoulders", "glutes"],
    objective: "Plank position with alternating leg lifts. Tests full-body integration and anti-extension core. Builds shoulder stability and glute strength simultaneously.",
    starting: "Plank position — hands under shoulders, body in a straight line from heels to crown, legs together, feet flexed.",
    breathing: "Inhale to lift the leg, exhale to return.",
    execution: [
      "Establish a perfect plank — long body, ribs to pelvis",
      "Inhale — lift one leg straight up without losing the plank shape",
      "Pause briefly at the top",
      "Exhale — return the leg to the mat",
      "Switch sides, alternating",
      "Hips stay level — no side-to-side rocking"
    ],
    muscles: {
      prime: "Gluteus maximus, hamstrings, deltoids, rectus abdominis",
      synergists: "Serratus anterior, triceps, spinal erectors",
      stabilizers: "Transverse, obliques (anti-rotation), rotator cuff",
      antagonists: "Hip flexors, pectorals"
    },
    cues: [
      { en: "Lift from the glute, not from the lower back.", fr: "Soulève depuis la fesse, pas depuis le bas du dos." },
      { en: "Body stays straight — only the leg moves.", fr: "Le corps reste droit — seule la jambe bouge." }
    ],
    errors: [
      { title: "Hip lifting with the leg", detail: "Loses anti-rotation. Fix: smaller leg lift, anchor the opposite hip." },
      { title: "Shoulders shrugging", detail: "Trap dominant. Fix: push the floor away through the hands." },
      { title: "Sagging in the middle", detail: "Core off. Fix: re-establish the plank before each rep." }
    ],
    variations: [
      { type: "Regression", detail: "Forearm plank version with smaller leg lifts." },
      { type: "Classical", detail: "Full plank, alternating leg lifts." },
      { type: "Progression", detail: "Hold the leg lifted for 3 seconds." }
    ],
    contraindications: [
      "Wrist injury → forearm plank version",
      "Acute lumbar issues → keep range small",
      "Shoulder impingement → modify"
    ]
  },
  {
    id: "leg-pull-back",
    method: "pilates-mat",
    nameEn: "Leg Pull Back",
    nameFr: "Tirage de Jambe — Arrière",
    level: "intermediate",
    duration: "1 min",
    reps: "5 each leg",
    classicalOrder: 29,
    focus: ["glutes", "hamstrings", "shoulders"],
    objective: "Reverse plank with alternating leg lifts. Counter-balance to Leg Pull Front. Opens the chest, strengthens the posterior chain, and tests scapular stability.",
    starting: "Reverse plank — seated with hands behind the hips fingers pointing forward (or back), legs extended. Press the hips up to form a straight line from shoulders to feet.",
    breathing: "Inhale to lift, exhale to return.",
    execution: [
      "Press up into reverse plank — body straight",
      "Inhale — lift one leg toward the ceiling",
      "Don't let the hips drop",
      "Exhale — lower the leg back",
      "Alternate sides"
    ],
    muscles: {
      prime: "Gluteus maximus, hamstrings, posterior deltoid, triceps",
      synergists: "Spinal erectors, rhomboids, mid-traps",
      stabilizers: "Transverse, rotator cuff, quadriceps",
      antagonists: "Hip flexors, pectorals, rectus abdominis"
    },
    cues: [
      { en: "Lift the chest first, leg second.", fr: "Soulève la poitrine en premier, la jambe en second." },
      { en: "Don't sit back — push the hips to the ceiling.", fr: "Ne te rassieds pas — pousse les hanches au plafond." }
    ],
    errors: [
      { title: "Hips dropping", detail: "Glutes off. Fix: squeeze glutes before lifting leg." },
      { title: "Wrists overloaded", detail: "Painful. Fix: fingers forward or sideways, redistribute weight." },
      { title: "Neck dropping back", detail: "Cervical strain. Fix: gaze forward or slightly up, neck long." }
    ],
    variations: [
      { type: "Regression", detail: "Hold reverse plank, no leg lift." },
      { type: "Classical", detail: "Full version with leg lifts." },
      { type: "Progression", detail: "Add a small pulse at the top of the lift." }
    ],
    contraindications: [
      "Wrist injury → modify or skip",
      "Acute shoulder pain → omit",
      "Glaucoma → avoid head-back position"
    ]
  },
  {
    id: "side-bend-mermaid",
    method: "pilates-mat",
    nameEn: "Side Bend",
    nameFr: "Flexion Latérale",
    level: "intermediate",
    duration: "1 min",
    reps: "3 each side",
    classicalOrder: 31,
    focus: ["obliques", "shoulders"],
    objective: "Lateral plank with hip lift. Tests oblique strength, shoulder stability, and full-body control in side support. Different from the seated Mermaid stretch — this one is loaded.",
    starting: "Side seated position with knees bent, top hand on the mat, bottom hand on the mat with the support arm straight, body propped on one side.",
    breathing: "Inhale to lift, exhale to lower.",
    execution: [
      "Press the bottom hand into the mat",
      "Lift the hips off the mat into a side support",
      "Top arm reaches overhead in an arc",
      "Body forms a straight line from shoulder to feet",
      "Lower with control, switch sides"
    ],
    muscles: {
      prime: "Obliques, quadratus lumborum, gluteus medius, deltoid",
      synergists: "Serratus, latissimus, adductors",
      stabilizers: "Transverse, rotator cuff",
      antagonists: "Contralateral lateral chain"
    },
    cues: [
      { en: "Press the floor away to lift the hips.", fr: "Pousse le sol pour soulever les hanches." },
      { en: "Top arm draws an arc through space, like a sail.", fr: "Le bras du haut dessine un arc, comme une voile." }
    ],
    errors: [
      { title: "Sagging hips", detail: "Lateral chain off. Fix: lift the hip up, not just the chest." },
      { title: "Wrist pain", detail: "Overload. Fix: forearm version or skip." },
      { title: "Body twisting forward", detail: "Loses side plane. Fix: stack hips, stack shoulders." }
    ],
    variations: [
      { type: "Regression", detail: "Forearm side plank, knees bent." },
      { type: "Classical", detail: "Straight-arm side plank with overhead reach." },
      { type: "Progression", detail: "Side plank with top leg lifted." }
    ],
    contraindications: [
      "Wrist injury → forearm version",
      "Shoulder injury → skip",
      "Acute SI pain → omit"
    ]
  },
  {
    id: "swan-dive",
    method: "pilates-mat",
    nameEn: "Swan Dive",
    nameFr: "Le Plongeon du Cygne",
    level: "advanced",
    duration: "1 min",
    reps: "5",
    classicalOrder: 15,
    focus: ["back", "spine"],
    objective: "Advanced spinal extension with rocking momentum. Strengthens the entire posterior chain dynamically. Joseph's signature back exercise for advanced practitioners.",
    starting: "Prone, hands under shoulders, legs straight and slightly apart, tops of feet on the mat. Press up into a high Swan position.",
    breathing: "Continuous, slightly faster than typical Pilates breath.",
    execution: [
      "From the high Swan, release the hands and rock forward onto the chest",
      "As the chest lowers, the legs lift up behind",
      "Rock back — chest lifts, legs lower",
      "Arms stretch out in front like Superman",
      "Continue rocking like a rocking horse"
    ],
    muscles: {
      prime: "Spinal erectors, gluteus maximus, hamstrings, deltoids",
      synergists: "Rhomboids, mid-traps, triceps",
      stabilizers: "Transverse, serratus",
      antagonists: "Rectus abdominis, hip flexors, pecs"
    },
    cues: [
      { en: "Rock like a banana — chest down, feet up, then reverse.", fr: "Berce-toi comme une banane — poitrine vers le bas, pieds vers le haut, puis l'inverse." },
      { en: "The momentum is gentle — don't crash forward.", fr: "L'élan est doux — ne t'écrase pas en avant." }
    ],
    errors: [
      { title: "Crashing on the chest", detail: "No control. Fix: smaller rock first." },
      { title: "Bent knees", detail: "Loses the line. Fix: legs straight and engaged." },
      { title: "Cervical hyperextension", detail: "Looking up. Fix: gaze forward, neck in line." }
    ],
    variations: [
      { type: "Regression", detail: "Stay in Swan, no rocking — just hold." },
      { type: "Classical", detail: "Full rocking Swan Dive." },
      { type: "Progression", detail: "Larger rocks, longer holds at each end." }
    ],
    contraindications: [
      "Spondylolisthesis → CONTRAINDICATED",
      "Lumbar facet pathology → omit",
      "Acute back pain → avoid"
    ]
  },
  {
    id: "hip-circles-seated",
    method: "pilates-mat",
    nameEn: "Hip Circles",
    nameFr: "Cercles de Hanche",
    level: "advanced",
    duration: "1 min",
    reps: "3 each direction",
    classicalOrder: 26,
    focus: ["core", "obliques", "balance"],
    objective: "Seated balance with leg circles drawing in space. Tests deep abdominal control under hip flexor lever load. Looks elegant, demands precision.",
    starting: "Seated, leaning back on the hands fingers forward (or back), legs extended in a V toward the ceiling, balance just behind the sit bones.",
    breathing: "Continuous and even through the circles.",
    execution: [
      "Find balance with both legs lifted in a V",
      "Draw a slow circle with both legs together",
      "Pelvis stays anchored — the legs orbit",
      "3 circles in one direction, 3 in the other",
      "Maintain the lean and the lift throughout"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, iliopsoas",
      synergists: "Transverse, adductors, hip rotators",
      stabilizers: "Pelvic floor, triceps (support), serratus",
      antagonists: "Spinal erectors"
    },
    cues: [
      { en: "Draw a circle on the ceiling with your toes.", fr: "Dessine un cercle au plafond avec tes orteils." },
      { en: "Sit bones stay put, legs orbit.", fr: "Les ischions restent en place, les jambes orbitent." }
    ],
    errors: [
      { title: "Pelvis tipping", detail: "Loses isolation. Fix: smaller circles." },
      { title: "Wrists collapsing", detail: "Support fails. Fix: long arms, push the floor away." },
      { title: "Legs splitting", detail: "Adductors off. Fix: glue inner thighs." }
    ],
    variations: [
      { type: "Regression", detail: "Bent legs, smaller circles." },
      { type: "Classical", detail: "Straight legs in V, full circles." },
      { type: "Progression", detail: "Hands lifted off the mat — pure balance." }
    ],
    contraindications: [
      "Wrist issues → modify hand position",
      "Lumbar disc → avoid",
      "Weak core → regress significantly"
    ]
  },
  {
    id: "boomerang",
    method: "pilates-mat",
    nameEn: "Boomerang",
    nameFr: "Le Boomerang",
    level: "advanced",
    duration: "1 min",
    reps: "4-6",
    classicalOrder: 32,
    focus: ["core", "spine", "coordination"],
    objective: "An advanced flow exercise combining roll-over, teaser, and forward fold in one continuous sequence. The choreography of late Mat practice. Tests integration of everything learned.",
    starting: "Seated, legs extended forward, ankles crossed, hands by the sides.",
    breathing: "Long continuous breaths matching the phases.",
    execution: [
      "Inhale — roll back into a Roll-Over position, legs over head",
      "Cross the ankles the other way",
      "Exhale — roll up through the spine into a Teaser position",
      "Hold the Teaser, arms reach forward past the legs",
      "Lower the legs and fold forward over them",
      "Reach the arms behind in opposition",
      "Return to start, repeat"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, iliopsoas, hamstrings",
      synergists: "Transverse, adductors, deltoids, spinal extensors (eccentric)",
      stabilizers: "Pelvic floor, deep neck flexors, scapular stabilizers",
      antagonists: "Hip extensors, spinal extensors (during flexion)"
    },
    cues: [
      { en: "Flow like water — no stops, no hesitations.", fr: "Coule comme de l'eau — pas d'arrêts, pas d'hésitations." },
      { en: "The sequence is the point — beauty is the goal.", fr: "C'est l'enchaînement qui compte — la beauté est l'objectif." }
    ],
    errors: [
      { title: "Stopping mid-sequence", detail: "Breaks the flow. Fix: practice each piece, then chain them." },
      { title: "Cheating with momentum", detail: "Loses control. Fix: the abs initiate every transition." },
      { title: "Sloppy Teaser top", detail: "Just a bend. Fix: full V at the top." }
    ],
    variations: [
      { type: "Regression", detail: "Practice each component separately." },
      { type: "Classical", detail: "Full Boomerang as described." },
      { type: "Progression", detail: "Add a circle of the arms at the top of the Teaser." }
    ],
    contraindications: [
      "Anyone not yet doing Roll-Over and Teaser cleanly",
      "Cervical issues → CONTRAINDICATED (Roll-Over component)",
      "Lumbar disc → CONTRAINDICATED"
    ],
    note: "Don't rush this exercise. It's the late-stage flow that ties everything together. A messy Boomerang reveals exactly which earlier exercises need more work."
  },

  // ========== REFORMER additions ==========
  {
    id: "rowing-back-1",
    method: "pilates-reformer",
    nameEn: "Rowing Back I — Flat Back",
    nameFr: "Rowing Back 1 — Dos Plat",
    level: "intermediate",
    duration: "1 min",
    reps: "5",
    focus: ["back", "shoulders"],
    objective: "Seated rowing variation building upper back strength and scapular control. The first of the rowing series, and the foundation for the others.",
    starting: "Seated facing the back of the carriage (away from the footbar), legs extended in front, feet against the shoulder blocks. Straps in hands, arms extended forward at shoulder height. Springs: 1 red.",
    breathing: "Inhale to prepare, exhale to row, inhale to return.",
    execution: [
      "Sit tall, spine in flat back position (no rounding)",
      "Inhale — prepare",
      "Exhale — bend the elbows back, drawing the straps toward the ribs",
      "Elbows stay close to the body, scapulae draw down and back",
      "Inhale — extend the arms back to start with control"
    ],
    muscles: {
      prime: "Latissimus dorsi, mid-trapezius, rhomboids, biceps",
      synergists: "Posterior deltoid, rear delts",
      stabilizers: "Transverse abdominis, spinal erectors, hamstrings",
      antagonists: "Pectorals, anterior deltoid"
    },
    cues: [
      { en: "Draw your shoulder blades into your back pockets.", fr: "Glisse les omoplates dans tes poches arrière." },
      { en: "Sit tall — the row doesn't rock the spine.", fr: "Assieds-toi grand — le row ne berce pas la colonne." }
    ],
    errors: [
      { title: "Rocking back on the row", detail: "Spine drives the move. Fix: torso stays still, only arms move." },
      { title: "Elbows flaring out", detail: "Trap-dominant. Fix: elbows close to ribs." },
      { title: "Shoulders shrugging", detail: "Scapulae lift. Fix: depress scapulae before each rep." }
    ],
    variations: [
      { type: "Regression", detail: "Light spring, smaller range." },
      { type: "Classical", detail: "1 red, 5 reps in flat back." },
      { type: "Progression", detail: "Heavier spring, slower tempo." }
    ],
    contraindications: [
      "Acute shoulder pain → modify",
      "Wrist issues → padded grip"
    ]
  },
  {
    id: "chest-expansion",
    method: "pilates-reformer",
    nameEn: "Chest Expansion",
    nameFr: "Ouverture de Poitrine",
    level: "fundamental",
    duration: "1 min",
    reps: "8",
    focus: ["back", "shoulders"],
    objective: "Kneeling pull-back exercise that opens the chest, retracts the scapulae, and trains rotator cuff stability. The classic counter-pose to forward head posture.",
    starting: "Kneeling on the carriage facing the footbar, straps in hands, arms extended forward at shoulder height. Spine tall and neutral. Springs: 1 red.",
    breathing: "Inhale as the arms pull back, hold the breath at the back position turning the head, exhale to return.",
    execution: [
      "Kneeling tall, arms extended in front holding the straps",
      "Inhale — draw the arms straight down past the hips, palms facing back",
      "Hold the inhale: turn the head to one side, then to the other",
      "Exhale — return the arms to the start position",
      "Repeat alternating head turns"
    ],
    muscles: {
      prime: "Latissimus dorsi, posterior deltoid, mid-trapezius",
      synergists: "Triceps, rhomboids, serratus anterior",
      stabilizers: "Transverse, gluteals, quadriceps (kneeling)",
      antagonists: "Pectorals, anterior deltoid"
    },
    cues: [
      { en: "Open your chest like you're parting curtains.", fr: "Ouvre ta poitrine comme si tu écartais des rideaux." },
      { en: "Don't let your chest puff forward — open from the back.", fr: "Ne bombe pas la poitrine — ouvre depuis le dos." }
    ],
    errors: [
      { title: "Puffing the chest forward", detail: "Lumbar arches. Fix: ribs in, open from the upper back." },
      { title: "Sitting back on the heels", detail: "Loses kneeling tall. Fix: hips above the knees." },
      { title: "Holding the breath wrong", detail: "Forgets the head turn. Fix: hold breath at the back, turn head, then exhale." }
    ],
    variations: [
      { type: "Regression", detail: "Seated version on a box if knees are an issue." },
      { type: "Classical", detail: "Kneeling, 1 red, with head turns." },
      { type: "Progression", detail: "Heavier spring or add an arm pulse at the back." }
    ],
    contraindications: [
      "Knee pain → seated version",
      "Shoulder injury → modify range",
      "Cervical instability → no head turns"
    ]
  },
  {
    id: "pelvic-lift-reformer",
    method: "pilates-reformer",
    nameEn: "Pelvic Lift",
    nameFr: "Soulevé Pelvien",
    level: "fundamental",
    duration: "1 min",
    reps: "8-10",
    focus: ["glutes", "spine"],
    objective: "Bridge variation on the Reformer using the moving carriage to add an articulation and glute challenge. A staple Reformer exercise for spinal mobility and glute work.",
    starting: "Supine on the carriage, feet on the footbar in parallel hip-width, knees bent. Arms long by the sides. Springs: 1 red + 1 blue.",
    breathing: "Exhale to lift, inhale to lower.",
    execution: [
      "Press the carriage out to extend the legs partially",
      "Exhale — articulate the pelvis up into a bridge",
      "Press through the heels, glutes engaged",
      "Inhale — hold at the top",
      "Exhale — articulate down vertebra by vertebra",
      "Carriage and pelvis move together"
    ],
    muscles: {
      prime: "Gluteus maximus, hamstrings, spinal erectors",
      synergists: "Adductors, transverse abdominis",
      stabilizers: "Pelvic floor, deep neck flexors",
      antagonists: "Hip flexors"
    },
    cues: [
      { en: "Squeeze the glutes to push the carriage out.", fr: "Serre les fesses pour pousser le chariot." },
      { en: "Don't lock the knees at the bottom.", fr: "Ne verrouille pas les genoux en bas." }
    ],
    errors: [
      { title: "Hyperextending at the top", detail: "Lumbar stress. Fix: ribs to pelvis." },
      { title: "Pushing from the knees", detail: "Quad-dominant. Fix: glutes initiate." },
      { title: "Crashing the carriage home", detail: "No control. Fix: slow eccentric." }
    ],
    variations: [
      { type: "Regression", detail: "Smaller range, no carriage movement." },
      { type: "Classical", detail: "Full articulation with carriage." },
      { type: "Single leg", detail: "One leg extended throughout." }
    ],
    contraindications: [
      "Acute disc issues → keep range small",
      "Knee pain → check footbar position"
    ]
  },

  // ========== LAGREE additions ==========
  {
    id: "lagree-skater",
    method: "lagree",
    nameEn: "Skater",
    nameFr: "Le Patineur",
    level: "intermediate",
    duration: "60 sec per side",
    reps: "Slow tempo",
    focus: ["legs", "glutes", "balance"],
    objective: "A lateral lunge variation on the Megaformer. Targets the glute medius, adductors, and lateral chain. Builds single-leg stability and lateral power.",
    starting: "Standing on the front platform with one foot, the other foot on the carriage at the shoulder rest. Body upright, hands on handles or hips. Springs: 2 reds.",
    breathing: "4-count out, 4-count return, slow continuous.",
    execution: [
      "Slowly press the rear foot out laterally on the carriage",
      "Front knee bends as the body lowers",
      "4-count descent — like a slow lateral lunge",
      "4-count return, pulling the carriage back with the inner thigh + glute",
      "Front knee tracks over the toes throughout"
    ],
    muscles: {
      prime: "Gluteus medius, adductors, quadriceps",
      synergists: "Gluteus maximus, hamstrings, core",
      stabilizers: "Transverse, intrinsic foot, ankle stabilizers",
      antagonists: "Hip flexors of opposite side"
    },
    cues: [
      { en: "Sit into the standing leg, push the floor away.", fr: "Pose-toi sur la jambe d'appui, pousse le sol." },
      { en: "Pull the carriage in with your inner thigh.", fr: "Ramène le chariot avec ta cuisse interne." }
    ],
    errors: [
      { title: "Knee collapsing in", detail: "Valgus. Fix: track knee over second toe." },
      { title: "Forward lean", detail: "Glute off. Fix: chest tall, hips back." },
      { title: "Going too fast", detail: "Loses TUT. Fix: count out loud." }
    ],
    variations: [
      { type: "Regression", detail: "Lighter spring, smaller range." },
      { type: "Classical", detail: "2 reds, 60 sec per side." },
      { type: "Progression", detail: "Add a pulse at the bottom." }
    ],
    contraindications: [
      "Knee pain → reduce range",
      "Hip labral tear → modify"
    ]
  },
  {
    id: "lagree-newspaper",
    method: "lagree",
    nameEn: "Newspaper",
    nameFr: "Le Journal",
    level: "intermediate",
    duration: "60 sec",
    reps: "Slow 4-count",
    focus: ["shoulders", "core"],
    objective: "A kneeling chest press exercise on the Megaformer. Targets pectoralis, anterior deltoid, and triceps with simultaneous core engagement. Named for the position resembling holding open a newspaper.",
    starting: "Kneeling on the carriage facing forward, hands gripping the front platform handles, arms bent at chest height. Body upright. Springs: 1-2 reds depending on level.",
    breathing: "Slow 4-count out, 4-count in.",
    execution: [
      "From the kneeling position with arms bent at chest",
      "Slowly extend the arms forward against the spring",
      "4-count out — chest press",
      "4-count return — controlled retraction",
      "Body stays vertical throughout, no leaning"
    ],
    muscles: {
      prime: "Pectoralis major, anterior deltoid, triceps",
      synergists: "Serratus anterior, rectus abdominis",
      stabilizers: "Transverse, gluteals, quadriceps (kneeling)",
      antagonists: "Rhomboids, mid-traps"
    },
    cues: [
      { en: "Push the wall away from your chest.", fr: "Pousse le mur loin de ta poitrine." },
      { en: "Hips above the knees the whole time.", fr: "Hanches au-dessus des genoux tout le temps." }
    ],
    errors: [
      { title: "Sitting back on heels", detail: "Loses kneeling tall. Fix: hips forward, glutes engaged." },
      { title: "Arching back", detail: "Lumbar load. Fix: ribs in, brace core." },
      { title: "Locked elbows", detail: "Joint stress. Fix: full extension without lock." }
    ],
    variations: [
      { type: "Regression", detail: "Lighter spring, knees padded." },
      { type: "Classical", detail: "2 reds, 60 sec." },
      { type: "Progression", detail: "Single arm version." }
    ],
    contraindications: [
      "Wrist injury → modify grip",
      "Shoulder impingement → reduce range",
      "Knee pain → padding or skip"
    ]
  },
  {
    id: "lagree-plank-pulse",
    method: "lagree",
    nameEn: "Plank Pulse",
    nameFr: "Plank avec Pulsations",
    level: "intermediate",
    duration: "60 sec",
    reps: "Continuous",
    focus: ["core", "shoulders"],
    objective: "A plank with subtle carriage pulsing. Builds extreme core endurance and shoulder stability. Looks deceptively simple, becomes brutal after 30 seconds.",
    starting: "Plank on the Megaformer — hands on the front platform, feet on the carriage at the shoulder rests. Springs: 2 reds.",
    breathing: "Continuous, no holding.",
    execution: [
      "Establish a perfect plank — long body, ribs to pelvis",
      "Slowly pulse the carriage 1-2 inches back and forth",
      "Tiny range, continuous tension",
      "Do not break form — body shape doesn't change",
      "Breathe steadily throughout"
    ],
    muscles: {
      prime: "Rectus abdominis, obliques, transverse, serratus",
      synergists: "Pectorals, deltoids, triceps, gluteals",
      stabilizers: "Rotator cuff, quadriceps, intrinsic core",
      antagonists: "Spinal erectors (anti-extension)"
    },
    cues: [
      { en: "Tiny pulses, continuous breath.", fr: "Petites pulsations, respiration continue." },
      { en: "The body doesn't move — only the carriage.", fr: "Le corps ne bouge pas — seul le chariot bouge." }
    ],
    errors: [
      { title: "Hips dropping", detail: "Plank breaks. Fix: glutes on, core braced." },
      { title: "Shoulders forward of wrists", detail: "Wrist load. Fix: shoulders stack over hands." },
      { title: "Big range", detail: "Defeats the exercise. Fix: 1-inch pulses only." }
    ],
    variations: [
      { type: "Regression", detail: "Knees on carriage, kneeling plank pulse." },
      { type: "Classical", detail: "Full plank, continuous 60 sec." },
      { type: "Progression", detail: "Add a leg lift during the pulse." }
    ],
    contraindications: [
      "Wrist issues → forearm version or skip",
      "Diastasis recti → avoid",
      "Shoulder injury → modify"
    ]
  },

  // ========== Special / accessory exercises ==========
  {
    id: "magic-circle-inner-thigh",
    method: "pilates-mat",
    nameEn: "Magic Circle — Inner Thigh",
    nameFr: "Magic Circle — Cuisse Interne",
    level: "fundamental",
    duration: "1 min",
    reps: "10-15",
    focus: ["legs", "core", "pelvic-floor"],
    objective: "Adductor and pelvic floor activation with the Magic Circle. A simple but powerful exercise for clients needing inner thigh tone or pelvic floor connection. Common in post-natal work.",
    starting: "Supine, knees bent, feet flat hip-width apart, Magic Circle between the inner thighs just above the knees. Pelvis neutral.",
    breathing: "Exhale to squeeze, inhale to release.",
    execution: [
      "Place the Magic Circle between the thighs",
      "Exhale — press the thighs in toward the circle, simultaneously engage the pelvic floor",
      "Inhale — release the squeeze just slightly (don't drop the circle)",
      "Continue for 10-15 reps",
      "Maintain neutral pelvis throughout"
    ],
    muscles: {
      prime: "Adductors, pelvic floor",
      synergists: "Transverse abdominis, gluteus medius",
      stabilizers: "Pelvic floor, deep core",
      antagonists: "Hip abductors"
    },
    cues: [
      { en: "Squeeze and lift — adductors meet the pelvic floor.", fr: "Serre et soulève — les adducteurs rencontrent le plancher pelvien." },
      { en: "Don't tuck the pelvis — neutral throughout.", fr: "Ne rétroverse pas le bassin — neutre tout du long." }
    ],
    errors: [
      { title: "Tucking pelvis", detail: "Loses neutral. Fix: pubic bone down, ASIS up." },
      { title: "Holding breath", detail: "Tension. Fix: rhythmic exhale on the squeeze." },
      { title: "Squeezing only the thighs", detail: "Misses PF. Fix: cue the lift up through the perineum." }
    ],
    variations: [
      { type: "Regression", detail: "Smaller squeeze, less pressure." },
      { type: "Classical", detail: "Full squeeze, 15 reps." },
      { type: "Progression", detail: "Combine with bridge — squeeze on the way up." }
    ],
    contraindications: [
      "Pelvic pain → release-focused work first",
      "Acute SI joint pain → modify"
    ]
  },
  {
    id: "magic-circle-arms",
    method: "pilates-mat",
    nameEn: "Magic Circle — Arms",
    nameFr: "Magic Circle — Bras",
    level: "fundamental",
    duration: "1 min",
    reps: "10-15",
    focus: ["shoulders", "core"],
    objective: "Upper body activation with the Magic Circle. Builds isometric arm and chest strength while engaging the deep core through the connection. Ideal as a quick warm-up.",
    starting: "Standing or seated tall, Magic Circle between the palms at chest height, arms extended forward.",
    breathing: "Exhale to squeeze, inhale to release.",
    execution: [
      "Hold the circle at chest level",
      "Exhale — press the palms together, squeezing the circle",
      "Hold for 2 seconds",
      "Inhale — release the squeeze without dropping the circle",
      "Move the circle to different positions: chest height, overhead, behind the back"
    ],
    muscles: {
      prime: "Pectorals, anterior deltoid, triceps",
      synergists: "Serratus anterior, transverse abdominis",
      stabilizers: "Scapular stabilizers, core",
      antagonists: "Rhomboids, mid-traps"
    },
    cues: [
      { en: "Squeeze from the armpits, not the hands.", fr: "Serre depuis les aisselles, pas depuis les mains." },
      { en: "Shoulders down, even when working hard.", fr: "Épaules basses, même quand tu travailles fort." }
    ],
    errors: [
      { title: "Shoulders shrugging", detail: "Trap dominant. Fix: scapulae down." },
      { title: "Holding breath", detail: "Tension. Fix: exhale on each squeeze." },
      { title: "Locking elbows", detail: "Joint stress. Fix: soft elbows." }
    ],
    variations: [
      { type: "Regression", detail: "Lower position, lighter squeeze." },
      { type: "Classical", detail: "Standing tall, 3 positions: front, overhead, behind." },
      { type: "Progression", detail: "Add a body movement (squat, lunge)." }
    ],
    contraindications: [
      "Acute shoulder pain → modify",
      "Wrist injury → avoid overhead position"
    ]
  },
  {
    id: "foam-roller-thoracic",
    method: "pilates-mat",
    nameEn: "Foam Roller — Thoracic Extension",
    nameFr: "Rouleau — Extension Thoracique",
    level: "fundamental",
    duration: "2 min",
    reps: "5-8",
    focus: ["spine", "back"],
    objective: "Thoracic spine mobilization using a foam roller as a fulcrum. The single best exercise for desk workers to reverse upper back stiffness. Should be a daily practice.",
    starting: "Supine on the mat with a foam roller placed horizontally under the upper back. Knees bent, feet flat. Hands clasped behind the head, elbows wide.",
    breathing: "Inhale to extend over the roller, exhale to return.",
    execution: [
      "Position the roller at the mid-thoracic spine (just below the shoulder blades)",
      "Inhale — let the upper back extend over the roller, head falls back gently",
      "Exhale — return to neutral",
      "Move the roller up 1 inch and repeat",
      "Cover the entire thoracic region segmentally"
    ],
    muscles: {
      prime: "Spinal extensors (lengthening), thoracic erectors",
      synergists: "Mid-traps, rhomboids",
      stabilizers: "Transverse, gluteals",
      antagonists: "Rectus abdominis (stretched), pectorals"
    },
    cues: [
      { en: "Open like a book over the roller.", fr: "Ouvre-toi comme un livre sur le rouleau." },
      { en: "Stop just below the shoulder blades — never on the lumbar.", fr: "Arrête-toi juste sous les omoplates — jamais sur les lombaires." }
    ],
    errors: [
      { title: "Rolling onto the lumbar", detail: "Wrong region. Fix: roller stays in thoracic only." },
      { title: "Crunching the neck", detail: "No support. Fix: hands behind head, elbows wide." },
      { title: "Forcing the extension", detail: "Painful. Fix: gentle, breath-led, multiple passes." }
    ],
    variations: [
      { type: "Regression", detail: "Smaller extension, just breathe over the roller." },
      { type: "Classical", detail: "Segmental extension up the thoracic." },
      { type: "Progression", detail: "Add overhead arm reaches at each level." }
    ],
    contraindications: [
      "Severe osteoporosis → avoid",
      "Acute disc herniation → avoid",
      "Spinal fusion → check with physician"
    ]
  },
  {
    id: "foam-roller-it-band",
    method: "pilates-mat",
    nameEn: "Foam Roller — IT Band Release",
    nameFr: "Rouleau — Bandelette Iliotibiale",
    level: "fundamental",
    duration: "2 min",
    reps: "1-2 min each side",
    focus: ["legs", "hips", "mobility"],
    objective: "Self-myofascial release of the lateral thigh. Common need for runners, cyclists, and clients with hip or knee tracking issues.",
    starting: "Side-lying on the foam roller, with the roller placed under the lateral thigh between the hip and the knee. Top leg crossed in front for stability.",
    breathing: "Slow continuous breathing — exhale into trigger points.",
    execution: [
      "Start with the roller just below the hip joint",
      "Slowly roll down the lateral thigh toward the knee",
      "Pause on tender spots, breathe, allow the tissue to release",
      "Cover the full length of the IT band region",
      "1-2 minutes per side"
    ],
    muscles: {
      prime: "Iliotibial band, vastus lateralis (release)",
      synergists: "Tensor fasciae latae, gluteus maximus",
      stabilizers: "Core, supporting arm",
      antagonists: "None — this is release work"
    },
    cues: [
      { en: "Breathe into the tight spots — don't grit through them.", fr: "Respire dans les points tendus — ne serre pas les dents." },
      { en: "Slow rolling, not fast scrubbing.", fr: "Roule lentement, ne frotte pas vite." }
    ],
    errors: [
      { title: "Going too fast", detail: "No tissue release. Fix: slow it down, pause." },
      { title: "Holding breath", detail: "Increases tension. Fix: long exhales over tender spots." },
      { title: "Excessive pressure", detail: "Pain ≠ progress. Fix: lighter pressure if uncomfortable." }
    ],
    variations: [
      { type: "Regression", detail: "Less body weight on the roller." },
      { type: "Classical", detail: "Full body weight, slow roll." },
      { type: "Progression", detail: "Add knee bend/extend on tender spots for active release." }
    ],
    contraindications: [
      "Acute hip pain → avoid",
      "Skin issues → avoid",
      "Note: IT band rolling is debated — some research suggests focusing on TFL and glute medius release instead is more effective"
    ]
  },
  {
    id: "small-ball-pelvic-floor",
    method: "pilates-mat",
    nameEn: "Small Ball — Pelvic Floor Activation",
    nameFr: "Petite Balle — Activation Plancher Pelvien",
    level: "fundamental",
    duration: "5 min",
    reps: "10-15 contractions",
    focus: ["pelvic-floor", "core"],
    objective: "Pelvic floor connection using a small ball for proprioceptive feedback. Excellent for post-natal clients learning to feel and engage their PF.",
    starting: "Seated on a small inflatable ball (overball), feet flat, spine tall. Hands on knees or thighs.",
    breathing: "Inhale to release, exhale to contract.",
    execution: [
      "Sit tall on the ball — find the sit bones",
      "Inhale — feel the pelvic floor lower toward the ball",
      "Exhale — gently lift the pelvic floor away from the ball",
      "10 slow contractions, then 10 quick contractions for fast-twitch",
      "Add awareness of the front, middle, and back of the pelvic floor"
    ],
    muscles: {
      prime: "Pelvic floor (levator ani, coccygeus)",
      synergists: "Transverse abdominis, multifidus",
      stabilizers: "Diaphragm, deep core",
      antagonists: "None — purely activation work"
    },
    cues: [
      { en: "Lift the perineum away from the ball — gently, like an elevator.", fr: "Soulève le périnée loin de la balle — doucement, comme un ascenseur." },
      { en: "Don't squeeze the glutes or thighs.", fr: "Ne serre pas les fessiers ni les cuisses." }
    ],
    errors: [
      { title: "Recruiting the glutes", detail: "Cheats the PF. Fix: place hand on glute to ensure it stays soft." },
      { title: "Holding the breath", detail: "Tension. Fix: rhythmic breath." },
      { title: "Forcing the contraction", detail: "PF should be light, precise. Fix: gentler engagement." }
    ],
    variations: [
      { type: "Regression", detail: "Just breath awareness, no active contraction." },
      { type: "Classical", detail: "Slow + quick contractions sitting on ball." },
      { type: "Progression", detail: "Add arm or leg movement while maintaining PF connection." }
    ],
    contraindications: [
      "Pelvic pain syndrome → release work first, not contraction",
      "Hyperactive pelvic floor → avoid contractions, focus on release"
    ]
  }
];

// ============================================
// CLASSES DATABASE
// Ready-to-teach single sessions
// Each class is a full session you can grab and run
// ============================================
const CLASSES = [
  // ========== PILATES MAT ==========
  {
    id: "mat-beginner-45",
    title: "Mat Essentials — Beginner",
    method: "pilates-mat",
    level: "fundamental",
    duration: 45,
    goal: "foundation",
    focus: ["core", "spine", "hips"],
    equipment: ["mat"],
    description: "A clean, safe, complete first Mat session. For clients new to Pilates or returning after a break. Focus on breath, alignment, and clean execution.",
    blocks: [
      {
        name: "Warm-up",
        duration: 8,
        items: [
          { name: "Breathing — lateral thoracic", reps: "10 breaths", notes: "Introduce the rib cage expansion" },
          { name: "Pelvic tilts", reps: "10", notes: "Neutral vs imprint awareness" },
          { name: "Cat-Cow", reps: "8", notes: "Slow spinal articulation" },
          { name: "Knee folds (single leg slides)", reps: "8 each", notes: "Stability check" }
        ]
      },
      {
        name: "Main work",
        duration: 30,
        items: [
          { name: "The Hundred — regression L2", reps: "50 beats", notes: "Head down if needed" },
          { name: "Half Roll-Back", reps: "6", notes: "Assisted version, reverse entry" },
          { name: "Single Leg Circles", reps: "5 each direction, each leg", notes: "Bottom knee bent if tight hamstrings" },
          { name: "Rolling Like a Ball — regression", reps: "6", notes: "Small ball shape, half range" },
          { name: "Single Leg Stretch — head down", reps: "8 each", notes: "Focus on pelvic stability" },
          { name: "Spine Stretch Forward", reps: "5", notes: "C-curve practice, legs apart" },
          { name: "Bridge", reps: "8", notes: "Sequential articulation" },
          { name: "Mermaid (side stretch)", reps: "3 each side", notes: "Lateral line opening" }
        ]
      },
      {
        name: "Cool-down",
        duration: 7,
        items: [
          { name: "Child's pose", reps: "1 min", notes: "Breath recovery" },
          { name: "Supine spinal twist", reps: "30 sec each side", notes: "Gentle rotation" },
          { name: "Savasana with breath awareness", reps: "2 min", notes: "Integration" }
        ]
      }
    ],
    contraindicationsNote: "Adapt all supine flexion work for cervical issues. Skip Rolling for osteoporosis."
  },
  {
    id: "mat-core-intensive-30",
    title: "Core Intensive — Express",
    method: "pilates-mat",
    level: "intermediate",
    duration: 30,
    goal: "strength",
    focus: ["core", "powerhouse"],
    equipment: ["mat"],
    description: "A tight 30-minute core-focused session. No frills, no long warm-up — for clients with some experience who want deep abdominal work.",
    blocks: [
      {
        name: "Quick activation",
        duration: 5,
        items: [
          { name: "Breathing + chest lift", reps: "8", notes: "Prime the core" },
          { name: "Dead bug — slow", reps: "6 each", notes: "Anti-extension prep" }
        ]
      },
      {
        name: "Core series",
        duration: 20,
        items: [
          { name: "The Hundred — classical", reps: "100 beats", notes: "Legs at 45°" },
          { name: "Single Leg Stretch", reps: "10 each", notes: "Chest lift sustained" },
          { name: "Double Leg Stretch", reps: "8", notes: "Full classical version" },
          { name: "Scissors (single straight leg)", reps: "8 each", notes: "No pulsing, control" },
          { name: "Double Straight Leg Lower", reps: "8", notes: "Lower as low as control allows" },
          { name: "Criss-Cross", reps: "10 each side", notes: "Elbow to opposite knee, ribs rotate" },
          { name: "Teaser prep", reps: "5", notes: "Knees bent if needed" }
        ]
      },
      {
        name: "Release",
        duration: 5,
        items: [
          { name: "Knees to chest", reps: "30 sec", notes: "Low back release" },
          { name: "Supine twist", reps: "30 sec each", notes: "Counter-rotation" },
          { name: "Legs up wall", reps: "2 min", notes: "Recovery" }
        ]
      }
    ]
  },
  {
    id: "mat-back-care-45",
    title: "Back Care & Mobility",
    method: "pilates-mat",
    level: "fundamental",
    duration: 45,
    goal: "mobility",
    focus: ["back", "spine", "posture"],
    equipment: ["mat", "small ball"],
    description: "For clients with tight backs, desk posture, or chronic mild lumbar discomfort. Mobilizes the full spine and opens the hip flexors. Gentle but thorough.",
    blocks: [
      {
        name: "Release & mobilize",
        duration: 10,
        items: [
          { name: "Constructive rest", reps: "2 min", notes: "Ball under sacrum optional" },
          { name: "Pelvic clocks", reps: "3 full clocks", notes: "Release pelvic tension" },
          { name: "Cat-Cow", reps: "10", notes: "Slow, every vertebra" },
          { name: "Thread the needle", reps: "5 each side", notes: "Thoracic rotation" }
        ]
      },
      {
        name: "Spine articulation",
        duration: 25,
        items: [
          { name: "Bridge with articulation", reps: "8", notes: "Vertebra by vertebra" },
          { name: "Pelvic curl with march", reps: "5", notes: "Hold bridge, march feet" },
          { name: "Spine Stretch Forward", reps: "6", notes: "Deep C-curve" },
          { name: "Saw", reps: "5 each side", notes: "Rotation + flexion" },
          { name: "Swan prep", reps: "8", notes: "Low back extension, ball under hips optional" },
          { name: "Swimming — slow", reps: "20 counts", notes: "Prone extension with opposite limbs" },
          { name: "Child's pose to Cat-Cow flow", reps: "6", notes: "Full spine in motion" }
        ]
      },
      {
        name: "Hip opener + release",
        duration: 10,
        items: [
          { name: "Figure-4 stretch", reps: "1 min each", notes: "External rotator release" },
          { name: "Hip flexor stretch (lunge)", reps: "1 min each", notes: "Posterior pelvic tilt to intensify" },
          { name: "Knees to chest rock", reps: "1 min", notes: "Massage the low back" }
        ]
      }
    ],
    contraindicationsNote: "For acute lumbar disc: avoid Spine Stretch and Saw, emphasize extension work only."
  },
  {
    id: "mat-full-classical-60",
    title: "Classical Mat — Full Order",
    method: "pilates-mat",
    level: "advanced",
    duration: 60,
    goal: "classical",
    focus: ["core", "spine", "hips", "legs", "shoulders"],
    equipment: ["mat"],
    description: "The full classical Mat repertoire in Joseph Pilates's original order. No modifications, no regressions. For advanced clients who know the work.",
    blocks: [
      {
        name: "Classical sequence",
        duration: 60,
        items: [
          { name: "The Hundred", reps: "100", notes: "Legs at 45°, classical" },
          { name: "The Roll-Up", reps: "6", notes: "Full articulation" },
          { name: "The Roll-Over", reps: "6", notes: "Overhead, control down" },
          { name: "Single Leg Circles", reps: "5 each direction each leg", notes: "Small, precise" },
          { name: "Rolling Like a Ball", reps: "8", notes: "Find the balance point" },
          { name: "Single Leg Stretch", reps: "10 each", notes: "Classical hand position" },
          { name: "Double Leg Stretch", reps: "8", notes: "Big breath circles" },
          { name: "Single Straight Leg Stretch", reps: "8 each", notes: "Scissors, reach through heels" },
          { name: "Double Straight Leg Lower", reps: "8", notes: "Hands behind head" },
          { name: "Criss-Cross", reps: "10 each", notes: "Full rotation" },
          { name: "Spine Stretch Forward", reps: "5", notes: "Hinge + round" },
          { name: "Open Leg Rocker", reps: "6", notes: "Balance + roll" },
          { name: "Corkscrew", reps: "3 each direction", notes: "Controlled" },
          { name: "The Saw", reps: "5 each side", notes: "Rotation + forward reach" },
          { name: "Swan Dive", reps: "6", notes: "Full extension + rocking" },
          { name: "Single Leg Kick", reps: "5 each", notes: "Prone, elbow support" },
          { name: "Double Leg Kick", reps: "5", notes: "Hand clasp, kick + extend" },
          { name: "Neck Pull", reps: "5", notes: "Hands behind head" },
          { name: "Shoulder Bridge", reps: "3 each leg", notes: "Kick from bridge hold" },
          { name: "Spine Twist", reps: "3 each side", notes: "Seated, no momentum" },
          { name: "Jack Knife", reps: "3", notes: "Advanced overhead" },
          { name: "Side Kick Series", reps: "10 each move, each side", notes: "Front/back, up/down, circles" },
          { name: "Teaser (I, II, III)", reps: "3 of each", notes: "Full progression" },
          { name: "Hip Circles", reps: "3 each direction", notes: "Seated, arms back" },
          { name: "Swimming", reps: "20 counts", notes: "Prone, fast tempo" },
          { name: "Leg Pull Front", reps: "5 each leg", notes: "Plank with leg lift" },
          { name: "Leg Pull Back", reps: "5 each leg", notes: "Reverse plank" },
          { name: "Side Kick Kneeling", reps: "5 each", notes: "Lateral stability" },
          { name: "Side Bend / Mermaid", reps: "3 each side", notes: "Full side plank variation" },
          { name: "Boomerang", reps: "4", notes: "Classical flow sequence" },
          { name: "The Seal", reps: "6", notes: "Rolling with clap" },
          { name: "Push-Up", reps: "3", notes: "Walk out + push-up + roll up" }
        ]
      }
    ],
    contraindicationsNote: "Advanced only. Skip Roll-Over and Jack Knife for any cervical or osteoporosis concern."
  },
  {
    id: "mat-prenatal-45",
    title: "Prenatal — 2nd Trimester",
    method: "pilates-mat",
    level: "fundamental",
    duration: 45,
    goal: "prenatal",
    focus: ["core", "pelvic-floor", "posture"],
    equipment: ["mat", "small ball", "wall"],
    description: "A safe, thoughtful prenatal session for the 2nd trimester. Supports posture, prevents diastasis, preserves core connection through transverse work. No supine work beyond brief moments.",
    blocks: [
      {
        name: "Grounding",
        duration: 8,
        items: [
          { name: "Seated breath awareness", reps: "2 min", notes: "On a cushion or ball" },
          { name: "Pelvic floor contractions", reps: "10 slow + 10 quick", notes: "Introduce both fiber types" },
          { name: "Seated cat-cow", reps: "8", notes: "Spine mobility upright" }
        ]
      },
      {
        name: "Standing + side-lying",
        duration: 27,
        items: [
          { name: "Wall roll-down", reps: "5", notes: "Spine against wall" },
          { name: "Wall squat with ball hug", reps: "8", notes: "Leg strength upright" },
          { name: "Standing side bends with ball", reps: "5 each side", notes: "Lateral mobility" },
          { name: "Standing hip circles", reps: "5 each direction", notes: "Pelvis mobility" },
          { name: "All-fours cat-cow", reps: "8", notes: "Spine + diaphragm" },
          { name: "All-fours opposite arm/leg", reps: "5 each", notes: "Anti-rotation core" },
          { name: "Side-lying leg lifts", reps: "10 each", notes: "Glute med, pillow under belly" },
          { name: "Side-lying clams", reps: "10 each", notes: "External rotators" },
          { name: "Side-lying inner thigh", reps: "10 each", notes: "Adductors" }
        ]
      },
      {
        name: "Release + visualization",
        duration: 10,
        items: [
          { name: "Child's pose with wide knees", reps: "2 min", notes: "Space for the belly" },
          { name: "Seated hip opener (butterfly)", reps: "2 min", notes: "Adductor release" },
          { name: "Seated breath + visualization", reps: "3 min", notes: "Connection to baby, pelvic floor awareness" }
        ]
      }
    ],
    contraindicationsNote: "No supine work beyond 1 min. No flexion under load. Stop if diastasis doming appears. Always clear with OB first."
  },

  // ========== REFORMER ==========
  {
    id: "reformer-classic-order-50",
    title: "Reformer — Classical Flow",
    method: "pilates-reformer",
    level: "intermediate",
    duration: 50,
    goal: "classical",
    focus: ["core", "legs", "spine"],
    equipment: ["reformer"],
    description: "A classical Reformer sequence in the original order. Smooth transitions, minimal spring changes. For intermediate clients comfortable on the apparatus.",
    blocks: [
      {
        name: "Footwork series",
        duration: 10,
        items: [
          { name: "Pilates V", reps: "10", notes: "3 reds" },
          { name: "Bird on perch", reps: "10", notes: "Same springs" },
          { name: "Heels parallel", reps: "10", notes: "Hip-width" },
          { name: "Tendon stretch", reps: "10", notes: "Heels drop below bar" }
        ]
      },
      {
        name: "Supine core",
        duration: 10,
        items: [
          { name: "Hundred on Reformer", reps: "100", notes: "Straps in hands" },
          { name: "Overhead", reps: "5", notes: "Straps, roll over" },
          { name: "Coordination", reps: "5", notes: "Full sequence" }
        ]
      },
      {
        name: "Rowing series",
        duration: 10,
        items: [
          { name: "Rowing Back 1 — Flat Back", reps: "5", notes: "1 red" },
          { name: "Rowing Back 2 — Round Back", reps: "5", notes: "Same" },
          { name: "Rowing Front 1 — From the Hips", reps: "5", notes: "Same" },
          { name: "Rowing Front 2 — From the Chest", reps: "5", notes: "Same" }
        ]
      },
      {
        name: "Long box",
        duration: 10,
        items: [
          { name: "Pulling Straps", reps: "5", notes: "Prone on box" },
          { name: "T-pulls", reps: "5", notes: "Scapular work" },
          { name: "Backstroke", reps: "5", notes: "Supine on box" },
          { name: "Teaser on box", reps: "3", notes: "Advanced" }
        ]
      },
      {
        name: "Knee stretches + running",
        duration: 10,
        items: [
          { name: "Knee Stretch Round", reps: "10", notes: "2 reds" },
          { name: "Knee Stretch Flat", reps: "10", notes: "Same" },
          { name: "Knee Stretch Off", reps: "10", notes: "Advanced" },
          { name: "Running", reps: "20", notes: "3 reds" },
          { name: "Pelvic Lift", reps: "10", notes: "Cool-down bridge" }
        ]
      }
    ]
  },
  {
    id: "reformer-legs-glutes-45",
    title: "Reformer — Legs & Glutes",
    method: "pilates-reformer",
    level: "intermediate",
    duration: 45,
    goal: "strength",
    focus: ["legs", "hips"],
    equipment: ["reformer"],
    description: "A lower-body intensive Reformer session. Builds glute and quad strength with classical and contemporary variations. Great for runners, cyclists, or clients wanting defined legs.",
    blocks: [
      {
        name: "Warm-up",
        duration: 8,
        items: [
          { name: "Footwork — all 4 positions", reps: "10 each", notes: "3 reds" },
          { name: "Bridge on foot bar", reps: "10", notes: "Glute activation" }
        ]
      },
      {
        name: "Lower body strength",
        duration: 25,
        items: [
          { name: "Single leg footwork", reps: "8 each", notes: "Unilateral quad/glute" },
          { name: "Skater (single leg press side)", reps: "10 each", notes: "Kneeling, one foot in strap" },
          { name: "Jump board — both legs", reps: "20", notes: "1 red, plyo" },
          { name: "Jump board — single leg", reps: "10 each", notes: "Unilateral plyo" },
          { name: "Side-lying leg press", reps: "10 each", notes: "Abductor + quad" },
          { name: "Long Stretch", reps: "5", notes: "Core + posterior chain" },
          { name: "Down Stretch", reps: "5", notes: "Quad + hip flexor stretch" },
          { name: "Up Stretch", reps: "5", notes: "Pike control" },
          { name: "Elephant", reps: "10", notes: "Hamstring + abs" }
        ]
      },
      {
        name: "Glute isolation + stretch",
        duration: 12,
        items: [
          { name: "Bridge with heels on bar", reps: "10", notes: "Glute peak hold" },
          { name: "Single leg bridge", reps: "8 each", notes: "Unilateral glute" },
          { name: "Frog (supine, feet in straps)", reps: "10", notes: "Inner thigh + stretch" },
          { name: "Leg circles in straps", reps: "5 each direction", notes: "Hip mobility" },
          { name: "Short Spine Massage", reps: "5", notes: "Full spine decompression" }
        ]
      }
    ]
  },
  {
    id: "reformer-express-morning-30",
    title: "Reformer — Morning Express",
    method: "pilates-reformer",
    level: "fundamental",
    duration: 30,
    goal: "wake-up",
    focus: ["core", "spine", "mobility"],
    equipment: ["reformer"],
    description: "A quick 30-min Reformer session to wake up the body. Balanced across core, spine, and legs without draining energy. Perfect for a morning client slot.",
    blocks: [
      {
        name: "Full body warm-up",
        duration: 10,
        items: [
          { name: "Footwork — Pilates V + parallel", reps: "10 each", notes: "3 reds" },
          { name: "Hundred", reps: "100", notes: "Straps in hands" },
          { name: "Short Spine prep", reps: "5", notes: "Spine mobility" }
        ]
      },
      {
        name: "Main sequence",
        duration: 15,
        items: [
          { name: "Rowing — From Hips", reps: "5", notes: "1 red" },
          { name: "Rowing — Flat Back", reps: "5", notes: "Same" },
          { name: "Long Stretch", reps: "5", notes: "Core + shoulders" },
          { name: "Elephant", reps: "10", notes: "Hamstring wake-up" },
          { name: "Knee stretch Round", reps: "10", notes: "2 reds" },
          { name: "Running", reps: "20", notes: "Finishing cardio touch" }
        ]
      },
      {
        name: "Close",
        duration: 5,
        items: [
          { name: "Pelvic Lift", reps: "8", notes: "Gentle articulation" },
          { name: "Mermaid on box", reps: "3 each side", notes: "Side body opening" }
        ]
      }
    ]
  },
  {
    id: "reformer-posture-desk-worker-45",
    title: "Reformer — The Desk Worker",
    method: "pilates-reformer",
    level: "fundamental",
    duration: 45,
    goal: "posture",
    focus: ["back", "shoulders", "hips"],
    equipment: ["reformer"],
    description: "Designed for clients who sit 8+ hours a day. Opens the chest, mobilizes the thoracic spine, strengthens the upper back, releases the hip flexors. Counter-medicine for desk posture.",
    blocks: [
      {
        name: "Release + activation",
        duration: 10,
        items: [
          { name: "Breathing on carriage", reps: "10 breaths", notes: "Chest expansion" },
          { name: "Pelvic tilts supine", reps: "10", notes: "Re-find neutral" },
          { name: "Footwork — parallel", reps: "15", notes: "3 reds, focus on heel press" }
        ]
      },
      {
        name: "Upper back + chest opening",
        duration: 25,
        items: [
          { name: "Chest Expansion (kneeling)", reps: "8", notes: "1 red, retract scapulae" },
          { name: "Rowing Front 1 (From the Hips)", reps: "5", notes: "Upper back focus" },
          { name: "Rowing Front 2 (From the Chest)", reps: "5", notes: "Deep retraction" },
          { name: "Hug-a-Tree", reps: "8", notes: "Opposite of desk posture" },
          { name: "Salute", reps: "8", notes: "Serratus + shoulder stability" },
          { name: "Pulling Straps (prone on box)", reps: "8", notes: "Thoracic extension" },
          { name: "T-pulls", reps: "8", notes: "Mid-trap + rhomboids" },
          { name: "Swan on long box", reps: "5", notes: "Full back extension" }
        ]
      },
      {
        name: "Hip flexor release",
        duration: 10,
        items: [
          { name: "Thigh Stretch (kneeling)", reps: "5", notes: "Hip flexor + quad" },
          { name: "Hip flexor stretch in straps", reps: "1 min each", notes: "Supine, one foot in strap" },
          { name: "Short Spine", reps: "5", notes: "Full spine decompression" }
        ]
      }
    ]
  },

  // ========== LAGREE ==========
  {
    id: "lagree-full-body-45",
    title: "Lagree — Full Body Classic",
    method: "lagree",
    level: "intermediate",
    duration: 45,
    goal: "strength",
    focus: ["core", "legs", "shoulders"],
    equipment: ["megaformer"],
    description: "A balanced 45-min Lagree session. Classic Megaformer flow with upper body, lower body, and core. Slow tempo, deep burn, no rest.",
    blocks: [
      {
        name: "Lower body block",
        duration: 15,
        items: [
          { name: "Lunge (front foot on platform)", reps: "60 sec each side", notes: "4-count tempo, heavy red" },
          { name: "Wheelbarrow", reps: "60 sec each side", notes: "Slow push, maintain pelvis stability" },
          { name: "Skater", reps: "60 sec each side", notes: "Lateral lunge, glute focus" },
          { name: "Catfish (reverse lunge)", reps: "60 sec each side", notes: "Posterior chain" }
        ]
      },
      {
        name: "Core block",
        duration: 15,
        items: [
          { name: "The Bear", reps: "90 sec", notes: "Hover position, 4-count tempo" },
          { name: "Spider Kick", reps: "60 sec each side", notes: "From plank, knee to elbow slow" },
          { name: "Megabear (pike version)", reps: "60 sec", notes: "Advanced core anti-extension" },
          { name: "Scrambled Eggs", reps: "90 sec", notes: "Cross-body knee drives, slow" }
        ]
      },
      {
        name: "Upper body + finisher",
        duration: 15,
        items: [
          { name: "French Twist", reps: "60 sec each side", notes: "Obliques + shoulders" },
          { name: "Plank Scapula Push", reps: "60 sec", notes: "Serratus work, slow tempo" },
          { name: "Newspaper (chest press)", reps: "60 sec", notes: "Kneeling" },
          { name: "Super Lunge", reps: "60 sec each side", notes: "Finisher, full burn" }
        ]
      }
    ],
    contraindicationsNote: "High shoulder and wrist demand. Modify for any acute joint issue. Never sacrifice tempo for range."
  },
  {
    id: "lagree-lower-body-30",
    title: "Lagree — Lower Body Burn",
    method: "lagree",
    level: "intermediate",
    duration: 30,
    goal: "strength",
    focus: ["legs", "hips"],
    equipment: ["megaformer"],
    description: "A fast 30-min Lagree session targeting legs and glutes. High intensity, slow tempo, minimal transitions. Best for clients with time constraints who want results.",
    blocks: [
      {
        name: "Quad + glute",
        duration: 20,
        items: [
          { name: "Lunge both sides", reps: "60 sec each", notes: "4-count, red spring" },
          { name: "Skater both sides", reps: "60 sec each", notes: "Lateral power" },
          { name: "Wheelbarrow both sides", reps: "60 sec each", notes: "Unilateral glute" },
          { name: "Catfish both sides", reps: "60 sec each", notes: "Posterior chain" },
          { name: "Inner Thigh both sides", reps: "45 sec each", notes: "Adductor isolation" }
        ]
      },
      {
        name: "Finisher",
        duration: 10,
        items: [
          { name: "Carriage Kick — glute", reps: "60 sec each", notes: "Kneeling on carriage" },
          { name: "Super Lunge", reps: "60 sec each", notes: "Final burn" },
          { name: "Seated glute stretch", reps: "30 sec each", notes: "Quick release" }
        ]
      }
    ]
  },
  {
    id: "lagree-core-only-25",
    title: "Lagree — Core Obliteration",
    method: "lagree",
    level: "advanced",
    duration: 25,
    goal: "strength",
    focus: ["core"],
    equipment: ["megaformer"],
    description: "25 minutes of pure core work on the Megaformer. Not for beginners. Extreme time-under-tension abdominal work. Clients will feel it for 3 days.",
    blocks: [
      {
        name: "Core assault",
        duration: 25,
        items: [
          { name: "The Bear", reps: "90 sec", notes: "Full hover, 4-count" },
          { name: "Megabear (pike)", reps: "60 sec", notes: "Advanced variant" },
          { name: "Spider Kick", reps: "60 sec each", notes: "Cross-body, slow" },
          { name: "Scrambled Eggs", reps: "90 sec", notes: "Continuous knee drives" },
          { name: "French Twist", reps: "60 sec each", notes: "Oblique focus" },
          { name: "Teaser Hold on platform", reps: "45 sec × 2", notes: "Static V-sit" },
          { name: "Plank with Carriage Pulse", reps: "60 sec", notes: "Anti-extension" },
          { name: "Side Plank Oblique Pulse", reps: "60 sec each", notes: "Finisher" }
        ]
      }
    ],
    contraindicationsNote: "Advanced only. Not suitable for diastasis, disc issues, pregnancy, or acute back pain."
  },
  {
    id: "lagree-beginner-40",
    title: "Lagree — First Session",
    method: "lagree",
    level: "fundamental",
    duration: 40,
    goal: "foundation",
    focus: ["core", "legs", "shoulders"],
    equipment: ["megaformer"],
    description: "A complete beginner's first Lagree class. Introduces the machine, the tempo, and the core principles without overwhelming. Extensive cueing, more rest between moves.",
    blocks: [
      {
        name: "Intro + warm-up",
        duration: 10,
        items: [
          { name: "Megaformer orientation", reps: "3 min", notes: "Platform names, spring system, safety" },
          { name: "Basic Lunge — modified", reps: "45 sec each", notes: "4-count intro, red spring" },
          { name: "Basic Plank hold", reps: "30 sec", notes: "Find neutral" }
        ]
      },
      {
        name: "Foundation moves",
        duration: 22,
        items: [
          { name: "Lunge — both sides", reps: "45 sec each", notes: "Teach the 4-count tempo" },
          { name: "Skater", reps: "45 sec each", notes: "Modified, knee down option" },
          { name: "Bear (knees down)", reps: "45 sec", notes: "Regression version" },
          { name: "Spider Kick (modified)", reps: "45 sec each", notes: "Knees on platform" },
          { name: "Scrambled Eggs (slower)", reps: "45 sec", notes: "6-count instead of 4" },
          { name: "French Twist (modified)", reps: "45 sec each", notes: "Short range" },
          { name: "Chest Press", reps: "45 sec", notes: "Introduction to upper body" }
        ]
      },
      {
        name: "Close + stretch",
        duration: 8,
        items: [
          { name: "Forward fold on platform", reps: "1 min", notes: "Hamstring release" },
          { name: "Seated quad stretch", reps: "30 sec each", notes: "Recovery" },
          { name: "Debrief", reps: "3 min", notes: "Q&A, what to expect tomorrow" }
        ]
      }
    ]
  },

  // ========== HYBRID / SPECIAL ==========
  {
    id: "hybrid-pilates-lagree-60",
    title: "Hybrid — Pilates Precision + Lagree Burn",
    method: "hybrid",
    level: "intermediate",
    duration: 60,
    goal: "strength",
    focus: ["core", "legs", "spine"],
    equipment: ["reformer", "megaformer"],
    description: "A creative hybrid class combining Reformer precision work with Megaformer intensity. Start with articulate Pilates flow, finish with slow-burn Lagree. For clients who want both.",
    blocks: [
      {
        name: "Reformer — precision",
        duration: 25,
        items: [
          { name: "Footwork (all 4)", reps: "10 each", notes: "Alignment focus" },
          { name: "Hundred", reps: "100", notes: "Straps in hands" },
          { name: "Short Spine", reps: "5", notes: "Articulation" },
          { name: "Long Stretch series", reps: "5 each", notes: "Core integration" },
          { name: "Knee Stretches", reps: "10", notes: "Core endurance" }
        ]
      },
      {
        name: "Transition",
        duration: 5,
        items: [
          { name: "Change to Megaformer + hydration", reps: "5 min", notes: "Mental reset for different tempo" }
        ]
      },
      {
        name: "Lagree — burn",
        duration: 30,
        items: [
          { name: "Lunge", reps: "60 sec each", notes: "Establish 4-count" },
          { name: "Wheelbarrow", reps: "60 sec each", notes: "Lower body" },
          { name: "Bear", reps: "90 sec", notes: "Core" },
          { name: "Spider Kick", reps: "60 sec each", notes: "Core + shoulder" },
          { name: "French Twist", reps: "60 sec each", notes: "Obliques" },
          { name: "Super Lunge finisher", reps: "45 sec each", notes: "Final burn" }
        ]
      }
    ],
    contraindicationsNote: "Only for clients comfortable on both apparatus. Long session — monitor fatigue."
  },
  {
    id: "recovery-mobility-30",
    title: "Active Recovery & Mobility",
    method: "pilates-mat",
    level: "fundamental",
    duration: 30,
    goal: "recovery",
    focus: ["mobility", "spine", "hips"],
    equipment: ["mat", "foam roller", "small ball"],
    description: "A pure recovery session. For clients after a hard training day, after travel, or just stressed. Zero intensity, maximum release. Can be taught as a regular slot or added to a heavier week.",
    blocks: [
      {
        name: "Release",
        duration: 12,
        items: [
          { name: "Foam roll thoracic spine", reps: "2 min", notes: "Open the upper back" },
          { name: "Foam roll IT band", reps: "1 min each", notes: "Lateral release" },
          { name: "Foam roll calves", reps: "1 min each", notes: "Lower leg" },
          { name: "Ball under glute", reps: "1 min each", notes: "Piriformis release" }
        ]
      },
      {
        name: "Gentle mobility",
        duration: 13,
        items: [
          { name: "Cat-Cow (slow)", reps: "10", notes: "Deep breath each rep" },
          { name: "Thread the needle", reps: "5 each", notes: "Thoracic rotation" },
          { name: "Child's pose with side reach", reps: "5 each side", notes: "Lateral line" },
          { name: "Figure-4 supine", reps: "1 min each", notes: "Glute stretch" },
          { name: "Happy baby", reps: "1 min", notes: "Hip opener" }
        ]
      },
      {
        name: "Restorative close",
        duration: 5,
        items: [
          { name: "Legs up the wall", reps: "3 min", notes: "Lymphatic drainage, nervous system reset" },
          { name: "Savasana with slow breathing", reps: "2 min", notes: "4-7-8 breath pattern" }
        ]
      }
    ]
  },

  // ========== ADDITIONAL CLASSES ==========
  {
    id: "mat-mobility-morning-30",
    title: "Morning Mobility Flow",
    method: "pilates-mat",
    level: "fundamental",
    duration: 30,
    goal: "mobility",
    focus: ["spine", "hips", "shoulders"],
    equipment: ["mat"],
    description: "A gentle 30-minute flow to open the body first thing in the morning. Moves through all planes of motion — flexion, extension, rotation, side bending. No intensity, pure movement quality.",
    blocks: [
      {
        name: "Wake up the spine",
        duration: 10,
        items: [
          { name: "Breath awareness supine", reps: "10 breaths", notes: "Lateral thoracic" },
          { name: "Pelvic tilts", reps: "10", notes: "Re-find neutral" },
          { name: "Knee folds", reps: "8 each", notes: "Hip joint warm-up" },
          { name: "Cat-Cow", reps: "8", notes: "Slow articulation" }
        ]
      },
      {
        name: "Full-body flow",
        duration: 15,
        items: [
          { name: "Thread the needle", reps: "5 each side", notes: "Thoracic rotation" },
          { name: "Child's pose to downdog flow", reps: "5", notes: "Posterior chain" },
          { name: "Spine Stretch Forward", reps: "5", notes: "C-curve practice" },
          { name: "Saw", reps: "3 each side", notes: "Rotation + flexion" },
          { name: "Mermaid", reps: "3 each side", notes: "Lateral line" },
          { name: "Bridge with arm reach", reps: "8", notes: "Extension + shoulder" }
        ]
      },
      {
        name: "Close",
        duration: 5,
        items: [
          { name: "Supine spinal twist", reps: "30 sec each", notes: "Integration" },
          { name: "Knees to chest", reps: "1 min", notes: "Decompression" },
          { name: "Seated breath", reps: "2 min", notes: "Set intention for the day" }
        ]
      }
    ]
  },
  {
    id: "mat-standing-balance-30",
    title: "Standing Balance & Strength",
    method: "pilates-mat",
    level: "fundamental",
    duration: 30,
    goal: "foundation",
    focus: ["legs", "balance", "core"],
    equipment: ["mat", "wall"],
    description: "An upright Pilates class for clients who don't love the floor. Great for seniors, pregnancy, or anyone with floor discomfort. Builds lower body strength, balance, and postural awareness.",
    blocks: [
      {
        name: "Standing warm-up",
        duration: 8,
        items: [
          { name: "Roll down standing", reps: "5", notes: "Spine articulation upright" },
          { name: "Standing breath + arm circles", reps: "10", notes: "Shoulder mobility" },
          { name: "Calf raises", reps: "15", notes: "Ankle strength" }
        ]
      },
      {
        name: "Lower body + balance",
        duration: 15,
        items: [
          { name: "Wall squat", reps: "10", notes: "Hip-width, track knees over toes" },
          { name: "Standing single leg balance", reps: "30 sec each", notes: "Eyes open, then closed" },
          { name: "Standing hip circles", reps: "5 each direction, each leg", notes: "Hip mobility upright" },
          { name: "Side leg lifts", reps: "10 each", notes: "Glute medius" },
          { name: "Pilates stance heel raises", reps: "15", notes: "V-position calf work" },
          { name: "Standing lunges", reps: "8 each", notes: "Lower body strength" }
        ]
      },
      {
        name: "Upper body + close",
        duration: 7,
        items: [
          { name: "Wall push-ups", reps: "10", notes: "Scapular stability" },
          { name: "Chest expansion arms back", reps: "10", notes: "Posterior deltoid" },
          { name: "Standing side bends", reps: "5 each side", notes: "Lateral line" },
          { name: "Tree pose (or modified)", reps: "30 sec each", notes: "Final balance challenge" }
        ]
      }
    ]
  },
  {
    id: "reformer-back-care-50",
    title: "Reformer — Back Care",
    method: "pilates-reformer",
    level: "fundamental",
    duration: 50,
    goal: "mobility",
    focus: ["back", "spine", "hips"],
    equipment: ["reformer"],
    description: "A therapeutic Reformer session for clients with tight or mildly painful backs. Uses the spring support to decompress and mobilize the spine safely. No loaded flexion.",
    blocks: [
      {
        name: "Decompression warm-up",
        duration: 12,
        items: [
          { name: "Breathing on the carriage", reps: "10 breaths", notes: "Nervous system reset" },
          { name: "Pelvic tilts", reps: "10", notes: "Neutral awareness" },
          { name: "Footwork parallel", reps: "10", notes: "2 reds, gentle" },
          { name: "Leg circles in straps", reps: "5 each direction", notes: "Hip decompression" }
        ]
      },
      {
        name: "Spinal mobility",
        duration: 25,
        items: [
          { name: "Short Spine (modified)", reps: "5", notes: "Light springs, smaller range" },
          { name: "Pelvic Lift", reps: "10", notes: "Articulation bridge" },
          { name: "Bridging on foot bar", reps: "8", notes: "Glute engagement" },
          { name: "Kneeling Chest Expansion", reps: "8", notes: "1 red, upper back" },
          { name: "Swan on long box (easy)", reps: "5", notes: "Gentle extension" },
          { name: "Mermaid on box", reps: "3 each side", notes: "Lateral opening" }
        ]
      },
      {
        name: "Release",
        duration: 13,
        items: [
          { name: "Hamstring stretch in straps", reps: "1 min each", notes: "Posterior chain" },
          { name: "Hip flexor stretch in straps", reps: "1 min each", notes: "Anterior chain" },
          { name: "Figure-4 stretch in straps", reps: "1 min each", notes: "Glute release" },
          { name: "Child's pose on mat", reps: "2 min", notes: "Spine decompression" }
        ]
      }
    ],
    contraindicationsNote: "For acute lumbar disc herniation: skip flexion elements (Short Spine, anything loaded forward). Emphasize extension and neutral spine work only."
  },
  {
    id: "reformer-advanced-flow-60",
    title: "Reformer — Advanced Flow",
    method: "pilates-reformer",
    level: "advanced",
    duration: 60,
    goal: "classical",
    focus: ["core", "legs", "spine", "shoulders"],
    equipment: ["reformer"],
    description: "An advanced Reformer sequence combining classical exercises with progressive variations. For intermediate-to-advanced clients who know the repertoire and want challenge.",
    blocks: [
      {
        name: "Footwork + Hundred",
        duration: 12,
        items: [
          { name: "Full footwork series", reps: "10 each position", notes: "3 reds" },
          { name: "Hundred with leg extension", reps: "100", notes: "Straps, legs 45°" }
        ]
      },
      {
        name: "Overhead + coordination",
        duration: 10,
        items: [
          { name: "Overhead", reps: "5", notes: "Straps, full roll over" },
          { name: "Coordination", reps: "8", notes: "Full sequence" },
          { name: "Short Spine", reps: "5", notes: "Full spine articulation" }
        ]
      },
      {
        name: "Long box work",
        duration: 15,
        items: [
          { name: "Pulling Straps", reps: "8", notes: "Back extension" },
          { name: "T-Pulls", reps: "8", notes: "Scapular retraction" },
          { name: "Backstroke", reps: "5", notes: "Advanced core" },
          { name: "Teaser on box", reps: "5", notes: "Ultimate core test" },
          { name: "Swan on long box", reps: "5", notes: "Full back extension" }
        ]
      },
      {
        name: "Standing + jumping",
        duration: 15,
        items: [
          { name: "Long Stretch", reps: "5", notes: "Plank carriage push" },
          { name: "Elephant", reps: "10", notes: "Hamstring + abs" },
          { name: "Knee Stretch series", reps: "10 each", notes: "Round, Flat, Off" },
          { name: "Running", reps: "30", notes: "Finisher" },
          { name: "Jump Board (if available)", reps: "30", notes: "Plyo cool-down" }
        ]
      },
      {
        name: "Close",
        duration: 8,
        items: [
          { name: "Mermaid on box", reps: "3 each side", notes: "Side body" },
          { name: "Semi-Circle", reps: "3", notes: "Spine decompression finale" }
        ]
      }
    ]
  },
  {
    id: "lagree-upper-body-35",
    title: "Lagree — Upper Body Focus",
    method: "lagree",
    level: "intermediate",
    duration: 35,
    goal: "strength",
    focus: ["shoulders", "core"],
    objective: "A 35-minute Lagree session with heavy upper body emphasis. Great for clients who want arm tone and shoulder definition without neglecting the core.",
    equipment: ["megaformer"],
    description: "A 35-min Lagree session focused on shoulders, arms, and upper-body core integration. Slow tempo, continuous tension, minimal rest.",
    blocks: [
      {
        name: "Warm-up",
        duration: 8,
        items: [
          { name: "Plank hold", reps: "60 sec", notes: "Find the baseline" },
          { name: "Scapular push-ups in plank", reps: "10", notes: "Serratus activation" }
        ]
      },
      {
        name: "Upper body work",
        duration: 20,
        items: [
          { name: "The Bear", reps: "90 sec", notes: "Core + shoulders" },
          { name: "French Twist", reps: "60 sec each", notes: "Obliques + shoulders" },
          { name: "Newspaper (chest press)", reps: "60 sec", notes: "Chest + triceps" },
          { name: "Plank to Pike", reps: "60 sec", notes: "Dynamic core + shoulders" },
          { name: "Triceps press kneeling", reps: "60 sec", notes: "Isolated triceps" },
          { name: "Chest Fly", reps: "60 sec", notes: "Pectoral focus" }
        ]
      },
      {
        name: "Core finisher",
        duration: 7,
        items: [
          { name: "Plank hold to failure", reps: "max", notes: "Endurance test" },
          { name: "Side plank each side", reps: "45 sec each", notes: "Obliques burn" }
        ]
      }
    ]
  },
  {
    id: "lagree-express-20",
    title: "Lagree — 20 Minute Express",
    method: "lagree",
    level: "intermediate",
    duration: 20,
    goal: "strength",
    focus: ["core", "legs"],
    equipment: ["megaformer"],
    description: "The shortest possible Lagree session that still delivers results. For days when time is critical. Full-body hit, no warm-up. Assumes the client is warm.",
    blocks: [
      {
        name: "Full-body hit",
        duration: 20,
        items: [
          { name: "Lunge", reps: "60 sec each side", notes: "Established tempo from the start" },
          { name: "Wheelbarrow", reps: "60 sec each side", notes: "Glute focus" },
          { name: "The Bear", reps: "90 sec", notes: "Core" },
          { name: "French Twist", reps: "60 sec each side", notes: "Obliques" },
          { name: "Scrambled Eggs", reps: "90 sec", notes: "Core endurance" },
          { name: "Super Lunge finisher", reps: "45 sec each side", notes: "Final burn" }
        ]
      }
    ],
    contraindicationsNote: "Only for clients already warm or physically active that day. Not a first session."
  },
  {
    id: "mat-obliques-focus-40",
    title: "Obliques & Rotation Focus",
    method: "pilates-mat",
    level: "intermediate",
    duration: 40,
    goal: "strength",
    focus: ["core", "obliques", "spine"],
    equipment: ["mat"],
    description: "A Mat session focused on the oblique muscles and rotational core work. Ideal for clients who want to address love handles, improve rotation for sports, or rehab after a rotation limitation.",
    blocks: [
      {
        name: "Warm-up",
        duration: 8,
        items: [
          { name: "Breathing + pelvic tilts", reps: "10", notes: "Prep the core" },
          { name: "Supine knee drops", reps: "10 each side", notes: "Gentle rotation" },
          { name: "Dead bug", reps: "8 each side", notes: "Anti-extension" }
        ]
      },
      {
        name: "Oblique intensive",
        duration: 25,
        items: [
          { name: "The Hundred", reps: "100", notes: "Activation" },
          { name: "Criss-Cross", reps: "10 each side", notes: "Classic oblique" },
          { name: "Single Leg Stretch", reps: "10 each", notes: "With slight rotation" },
          { name: "The Saw", reps: "5 each side", notes: "Rotation + flexion" },
          { name: "Spine Twist seated", reps: "3 each side", notes: "Rotation isolation" },
          { name: "Side Bend / Mermaid", reps: "3 each side", notes: "Lateral + rotation" },
          { name: "Side Kick Kneeling", reps: "8 each side", notes: "Lateral stability" },
          { name: "Side Plank with hip drop", reps: "8 each side", notes: "Quadratus + obliques" }
        ]
      },
      {
        name: "Release",
        duration: 7,
        items: [
          { name: "Supine spinal twist", reps: "1 min each side", notes: "Decompression" },
          { name: "Child's pose with side reach", reps: "30 sec each side", notes: "Lateral release" }
        ]
      }
    ]
  },
  {
    id: "mat-pelvic-floor-30",
    title: "Pelvic Floor Foundations",
    method: "pilates-mat",
    level: "fundamental",
    duration: 30,
    goal: "foundation",
    focus: ["core", "pelvic-floor", "breathing"],
    equipment: ["mat", "small ball"],
    description: "A specific session for pelvic floor connection — post-partum, menopausal, or anyone wanting to strengthen this often-neglected area. Works both slow-twitch endurance and fast-twitch fibers.",
    blocks: [
      {
        name: "Awareness",
        duration: 10,
        items: [
          { name: "Breath + pelvic floor awareness", reps: "5 min", notes: "Teach the connection diaphragm-PF" },
          { name: "Ball between knees squeezes", reps: "15", notes: "Adductor + PF" },
          { name: "Slow PF contractions", reps: "10", notes: "5-count hold each" },
          { name: "Fast PF contractions", reps: "15", notes: "Fast-twitch recruitment" }
        ]
      },
      {
        name: "Integrated work",
        duration: 15,
        items: [
          { name: "Bridge with PF engagement", reps: "10", notes: "Lift on exhale + PF" },
          { name: "Heel slides", reps: "8 each", notes: "PF + transverse coordination" },
          { name: "Tabletop with PF hold", reps: "8 each side", notes: "Single leg lower" },
          { name: "Clam with PF cue", reps: "10 each side", notes: "Glute + PF" },
          { name: "Side-lying leg lifts", reps: "10 each side", notes: "Integrated lateral" }
        ]
      },
      {
        name: "Release + integration",
        duration: 5,
        items: [
          { name: "Child's pose breath", reps: "2 min", notes: "PF release on inhale" },
          { name: "Supported bridge (block)", reps: "2 min", notes: "Passive decompression" },
          { name: "Seated breath", reps: "1 min", notes: "Integration" }
        ]
      }
    ],
    contraindicationsNote: "If pelvic pain is present (vulvodynia, vaginismus, pudendal neuralgia), emphasize release not contraction. Always cue downward breath as well as upward."
  },
  {
    id: "recovery-foam-roller-20",
    title: "Foam Roller Release",
    method: "pilates-mat",
    level: "fundamental",
    duration: 20,
    goal: "recovery",
    focus: ["mobility", "back", "hips"],
    equipment: ["mat", "foam roller"],
    description: "A quick 20-minute foam roller session. Pure myofascial release and self-massage. Can be taught as a standalone session or as a warm-up/cool-down for something else.",
    blocks: [
      {
        name: "Lower body release",
        duration: 8,
        items: [
          { name: "Calves", reps: "1 min each", notes: "Slow roll, pause on trigger points" },
          { name: "Hamstrings", reps: "1 min each", notes: "Posterior thigh" },
          { name: "IT band", reps: "1 min each", notes: "Lateral thigh, gentle" },
          { name: "Glutes", reps: "1 min each", notes: "Piriformis focus" }
        ]
      },
      {
        name: "Upper body release",
        duration: 8,
        items: [
          { name: "Thoracic spine", reps: "2 min", notes: "Arch over the roller" },
          { name: "Lats", reps: "1 min each", notes: "Side-lying roll" },
          { name: "Shoulder release", reps: "1 min each", notes: "Upper trap + rhomboids" }
        ]
      },
      {
        name: "Integration",
        duration: 4,
        items: [
          { name: "Supine breath over roller", reps: "2 min", notes: "Thoracic opening + breath" },
          { name: "Gentle twist", reps: "1 min each side", notes: "Reset" }
        ]
      }
    ]
  },
  {
    id: "prenatal-3rd-trimester-40",
    title: "Prenatal — 3rd Trimester",
    method: "pilates-mat",
    level: "fundamental",
    duration: 40,
    goal: "prenatal",
    focus: ["pelvic-floor", "posture", "hips"],
    equipment: ["mat", "ball", "wall", "bolster"],
    description: "A gentle session for the 3rd trimester. Prepares for birth, maintains strength safely, opens the hips. Almost all work is upright or side-lying — no supine, no prone.",
    blocks: [
      {
        name: "Seated + breath",
        duration: 10,
        items: [
          { name: "Seated breath with pelvic floor", reps: "3 min", notes: "Downward breath awareness" },
          { name: "Seated cat-cow", reps: "10", notes: "Spine mobility" },
          { name: "Seated side bends", reps: "5 each side", notes: "Lateral line" },
          { name: "Seated hip circles", reps: "5 each direction", notes: "Pelvis mobility" }
        ]
      },
      {
        name: "Standing + side-lying",
        duration: 22,
        items: [
          { name: "Wall squat", reps: "8", notes: "Preparing for labor positions" },
          { name: "Wall birds (posterior shoulder)", reps: "10", notes: "Counter the forward pull" },
          { name: "Standing side bend with wall", reps: "5 each side", notes: "Lateral release" },
          { name: "All-fours gentle cat-cow", reps: "8", notes: "Decompress the back" },
          { name: "Side-lying hip opener", reps: "1 min each side", notes: "Glute med release" },
          { name: "Side-lying leg lifts", reps: "10 each side", notes: "Glute strengthening" }
        ]
      },
      {
        name: "Birth prep + close",
        duration: 8,
        items: [
          { name: "Deep squat with support", reps: "1 min", notes: "Pelvic opening" },
          { name: "Butterfly seated", reps: "2 min", notes: "Adductor release" },
          { name: "Supported side-lying savasana", reps: "3 min", notes: "Integration" }
        ]
      }
    ],
    contraindicationsNote: "Absolutely no supine work. Watch for any sign of discomfort. Stop if contractions begin or if the client feels unwell. Clear with OB for any specific concerns."
  },

  // ========== BATCH 2 — ADDITIONAL CLASSES ==========
  {
    id: "mat-runners-recovery-40",
    title: "Mat — Runner's Recovery",
    method: "pilates-mat",
    level: "fundamental",
    duration: 40,
    goal: "recovery",
    focus: ["legs", "hips", "back"],
    equipment: ["mat", "foam roller"],
    description: "Specifically designed for clients who run regularly. Releases the IT band and lateral chain, opens the hips, mobilizes the spine. Can be taught after a long run or as a recovery day session.",
    blocks: [
      {
        name: "Release",
        duration: 12,
        items: [
          { name: "Foam roller IT band", reps: "1 min each", notes: "Slow release" },
          { name: "Foam roller calves", reps: "1 min each", notes: "Soleus and gastroc" },
          { name: "Foam roller hamstrings", reps: "1 min each", notes: "Posterior chain" },
          { name: "Foam roller glutes", reps: "1 min each", notes: "Piriformis trigger points" }
        ]
      },
      {
        name: "Hip mobility",
        duration: 18,
        items: [
          { name: "Pelvic tilts supine", reps: "10", notes: "Reset" },
          { name: "Single leg circles", reps: "5 each direction, each leg", notes: "Hip joint mobility" },
          { name: "Bridge with marching", reps: "5", notes: "Glute symmetry" },
          { name: "Figure-4 stretch supine", reps: "1 min each side", notes: "External rotators" },
          { name: "Hip flexor stretch (lunge)", reps: "1 min each", notes: "Iliopsoas release" },
          { name: "Pigeon pose", reps: "1 min each", notes: "Deep glute opening" }
        ]
      },
      {
        name: "Spine + close",
        duration: 10,
        items: [
          { name: "Cat-Cow", reps: "8", notes: "Spine mobility" },
          { name: "Thread the needle", reps: "5 each", notes: "Thoracic rotation" },
          { name: "Child's pose", reps: "1 min", notes: "Posterior decompression" },
          { name: "Legs up the wall", reps: "3 min", notes: "Lymphatic drainage" }
        ]
      }
    ]
  },
  {
    id: "mat-osteoporosis-safe-40",
    title: "Mat — Osteoporosis Safe",
    method: "pilates-mat",
    level: "fundamental",
    duration: 40,
    goal: "foundation",
    focus: ["back", "balance", "posture"],
    equipment: ["mat", "wall"],
    description: "A bone-density-conscious session for clients with osteoporosis or osteopenia. Strict avoidance of loaded flexion and rotation. Emphasis on extension, weight-bearing, and balance — the three things bone needs.",
    blocks: [
      {
        name: "Standing warm-up",
        duration: 10,
        items: [
          { name: "Standing breath", reps: "10 breaths", notes: "Tall posture" },
          { name: "Wall roll-down — to mid-back only", reps: "5", notes: "No deep flexion" },
          { name: "Calf raises", reps: "15", notes: "Bone loading through impact" },
          { name: "Wall push-ups", reps: "10", notes: "Upper body load" }
        ]
      },
      {
        name: "Extension + balance",
        duration: 22,
        items: [
          { name: "Prone breathing", reps: "5 breaths", notes: "Spine in extension" },
          { name: "Sphinx prep", reps: "8", notes: "Gentle thoracic extension" },
          { name: "Swimming (slow)", reps: "20 counts", notes: "Posterior chain" },
          { name: "Standing single leg balance", reps: "30 sec each", notes: "Fall prevention" },
          { name: "Standing side leg lifts", reps: "10 each", notes: "Glute med, hip strength" },
          { name: "Standing chest expansion", reps: "10", notes: "Posture" },
          { name: "Wall angels", reps: "8", notes: "Thoracic mobility, no flexion" }
        ]
      },
      {
        name: "Hips + close",
        duration: 8,
        items: [
          { name: "Side-lying clams", reps: "10 each", notes: "External rotators" },
          { name: "Side-lying leg lifts", reps: "10 each", notes: "Glute medius" },
          { name: "Bridge (small range)", reps: "8", notes: "Glute strengthening" },
          { name: "Wall-supported standing rest", reps: "1 min", notes: "Tall posture integration" }
        ]
      }
    ],
    contraindicationsNote: "ABSOLUTE: no Roll-Up, no Spine Stretch Forward, no Saw, no Roll-Over, no Jack Knife, no Hundred with chest lift if T-score is severe. Stick to extension, weight-bearing standing work, and balance."
  },
  {
    id: "reformer-postpartum-45",
    title: "Reformer — Postpartum Return",
    method: "pilates-reformer",
    level: "fundamental",
    duration: 45,
    goal: "foundation",
    focus: ["pelvic-floor", "core"],
    equipment: ["reformer"],
    description: "A Reformer session for clients returning post-partum (after the 6-week clearance). Focuses on rebuilding deep core function, pelvic floor connection, and posture without aggravating diastasis.",
    blocks: [
      {
        name: "Reconnection",
        duration: 12,
        items: [
          { name: "Breathing on the carriage", reps: "10 breaths", notes: "Diaphragm-PF connection" },
          { name: "Pelvic tilts", reps: "10", notes: "Re-find neutral" },
          { name: "Footwork parallel — light", reps: "10", notes: "1 red + 1 blue" },
          { name: "Frog (feet in straps)", reps: "8", notes: "Adductor + PF" }
        ]
      },
      {
        name: "Deep core rebuild",
        duration: 23,
        items: [
          { name: "Heel slides supine", reps: "8 each", notes: "TA activation under load" },
          { name: "Single leg lifts in straps", reps: "8 each", notes: "Hip dissociation" },
          { name: "Bridge with hold", reps: "8", notes: "Glute + PF" },
          { name: "Single arm strap series", reps: "8 each", notes: "Anti-rotation core" },
          { name: "Mermaid on box (gentle)", reps: "3 each side", notes: "Lateral line" },
          { name: "Quadruped on long box", reps: "5 each", notes: "Bird-dog, anti-extension" }
        ]
      },
      {
        name: "Release + integration",
        duration: 10,
        items: [
          { name: "Hamstring stretch in straps", reps: "1 min each", notes: "Posterior chain" },
          { name: "Hip flexor stretch in straps", reps: "1 min each", notes: "Anterior chain" },
          { name: "Seated breath integration", reps: "2 min", notes: "PF + diaphragm" }
        ]
      }
    ],
    contraindicationsNote: "Diastasis check before each session. Avoid forward flexion under load until DR is closed (typically 4-6 months minimum). No rotation under load early. Always cue downward breath as well as upward."
  },
  {
    id: "reformer-shoulders-arms-40",
    title: "Reformer — Shoulders & Arms",
    method: "pilates-reformer",
    level: "intermediate",
    duration: 40,
    goal: "strength",
    focus: ["shoulders", "back", "core"],
    equipment: ["reformer"],
    description: "Upper body focused Reformer session. Excellent for clients who want arm tone, shoulder stability, and posture improvement. Builds the rotator cuff and scapular stabilizers.",
    blocks: [
      {
        name: "Warm-up",
        duration: 8,
        items: [
          { name: "Footwork series", reps: "10 each", notes: "Quick warm-up" },
          { name: "Hundred on Reformer", reps: "100", notes: "Strap activation" }
        ]
      },
      {
        name: "Upper body intensive",
        duration: 25,
        items: [
          { name: "Rowing Back I — Flat Back", reps: "5", notes: "Upper back" },
          { name: "Rowing Back II — Round Back", reps: "5", notes: "Lats" },
          { name: "Rowing Front I — From the Hips", reps: "5", notes: "Mid-back" },
          { name: "Rowing Front II — From the Chest", reps: "5", notes: "Deep retraction" },
          { name: "Hug-a-Tree", reps: "8", notes: "Pectoral + serratus" },
          { name: "Salute", reps: "8", notes: "Shoulder stability" },
          { name: "Chest Expansion (kneeling)", reps: "8", notes: "Posture corrector" },
          { name: "Pulling Straps on long box", reps: "8", notes: "Thoracic extension" },
          { name: "T-pulls on long box", reps: "8", notes: "Rhomboid burn" }
        ]
      },
      {
        name: "Cool-down",
        duration: 7,
        items: [
          { name: "Mermaid on box", reps: "3 each side", notes: "Lateral release" },
          { name: "Standing roll-down", reps: "5", notes: "Spine reset" }
        ]
      }
    ]
  },
  {
    id: "lagree-glute-burn-30",
    title: "Lagree — Glute Burn",
    method: "lagree",
    level: "intermediate",
    duration: 30,
    goal: "strength",
    focus: ["glutes", "hips"],
    equipment: ["megaformer"],
    description: "A 30-min Lagree session laser-focused on the glutes. Great for clients wanting maximum results in minimum time on the posterior chain.",
    blocks: [
      {
        name: "Warm-up",
        duration: 5,
        items: [
          { name: "Bridge hold on platform", reps: "60 sec", notes: "Glute activation" },
          { name: "Plank to find baseline", reps: "30 sec", notes: "Set the body" }
        ]
      },
      {
        name: "Glute work",
        duration: 22,
        items: [
          { name: "Wheelbarrow", reps: "60 sec each side", notes: "Unilateral glute" },
          { name: "Catfish (reverse lunge)", reps: "60 sec each side", notes: "Glute + hamstring" },
          { name: "Carriage Kick", reps: "60 sec each side", notes: "Glute max isolation" },
          { name: "Bridge with carriage push", reps: "60 sec", notes: "Hip thrust style" },
          { name: "Lunge (Super Lunge)", reps: "60 sec each side", notes: "Front leg burn" },
          { name: "Skater", reps: "45 sec each side", notes: "Lateral glute" }
        ]
      },
      {
        name: "Stretch",
        duration: 3,
        items: [
          { name: "Pigeon stretch on platform", reps: "60 sec each", notes: "External rotator release" },
          { name: "Quick hamstring stretch", reps: "30 sec each", notes: "Recovery" }
        ]
      }
    ]
  },
  {
    id: "lagree-arms-shoulders-30",
    title: "Lagree — Arms & Shoulders Quick",
    method: "lagree",
    level: "intermediate",
    duration: 30,
    goal: "strength",
    focus: ["shoulders", "core"],
    equipment: ["megaformer"],
    description: "A focused 30-min upper body Lagree session. Tones arms and shoulders while keeping core engaged throughout. Ideal as a complement to lower-body days.",
    blocks: [
      {
        name: "Warm-up",
        duration: 5,
        items: [
          { name: "Plank hold", reps: "45 sec", notes: "Find baseline" },
          { name: "Scapular push-ups", reps: "10", notes: "Serratus prep" }
        ]
      },
      {
        name: "Upper body sequence",
        duration: 22,
        items: [
          { name: "Newspaper (chest press)", reps: "60 sec", notes: "Chest + triceps" },
          { name: "The Bear", reps: "90 sec", notes: "Core + shoulder integration" },
          { name: "Spider Kick", reps: "60 sec each side", notes: "Anti-rotation core" },
          { name: "French Twist", reps: "60 sec each side", notes: "Obliques + delts" },
          { name: "Plank Pulse", reps: "60 sec", notes: "Endurance" },
          { name: "Triceps press kneeling", reps: "60 sec", notes: "Triceps isolation" }
        ]
      },
      {
        name: "Stretch",
        duration: 3,
        items: [
          { name: "Chest opener stretch", reps: "30 sec each", notes: "Pectoral release" },
          { name: "Shoulder cross-body stretch", reps: "30 sec each", notes: "Posterior delt" }
        ]
      }
    ]
  },
  {
    id: "mat-stress-relief-25",
    title: "Mat — Stress Relief & Calm",
    method: "pilates-mat",
    level: "fundamental",
    duration: 25,
    goal: "recovery",
    focus: ["breathing", "spine", "mobility"],
    equipment: ["mat"],
    description: "A short evening session designed to release tension and prepare for sleep. Slow, gentle, breath-focused. Almost more restorative than Pilates, but uses Pilates principles.",
    blocks: [
      {
        name: "Breath",
        duration: 8,
        items: [
          { name: "Constructive rest", reps: "3 min", notes: "Knees bent, soft body" },
          { name: "4-7-8 breath", reps: "10 cycles", notes: "Parasympathetic activation" },
          { name: "Breath into the side ribs", reps: "10 breaths", notes: "Lateral expansion" }
        ]
      },
      {
        name: "Gentle movement",
        duration: 12,
        items: [
          { name: "Pelvic tilts", reps: "10", notes: "Slow, breath-led" },
          { name: "Knee folds", reps: "5 each", notes: "Hip release" },
          { name: "Cat-Cow", reps: "8", notes: "Slow articulation" },
          { name: "Thread the needle", reps: "5 each side", notes: "Gentle rotation" },
          { name: "Child's pose breaths", reps: "1 min", notes: "Decompression" },
          { name: "Supine spinal twist", reps: "1 min each side", notes: "Release" }
        ]
      },
      {
        name: "Restorative close",
        duration: 5,
        items: [
          { name: "Legs up the wall", reps: "3 min", notes: "Nervous system reset" },
          { name: "Savasana with body scan", reps: "2 min", notes: "Release tension head to toe" }
        ]
      }
    ]
  },
  {
    id: "hybrid-strength-mobility-50",
    title: "Hybrid — Strength + Mobility",
    method: "hybrid",
    level: "intermediate",
    duration: 50,
    goal: "strength",
    focus: ["core", "spine", "legs"],
    equipment: ["mat", "reformer"],
    description: "A balanced session combining Mat mobility work with Reformer strength. Perfect for clients who want a complete experience but need both freedom and resistance.",
    blocks: [
      {
        name: "Mat mobility opener",
        duration: 15,
        items: [
          { name: "Breathing + pelvic tilts", reps: "10", notes: "Activation" },
          { name: "Cat-Cow", reps: "8", notes: "Spine warm-up" },
          { name: "Roll-Up assisted", reps: "5", notes: "Articulation" },
          { name: "Single leg circles", reps: "5 each direction each leg", notes: "Hip mobility" },
          { name: "Spine stretch forward", reps: "5", notes: "C-curve" },
          { name: "Saw", reps: "3 each side", notes: "Rotation" }
        ]
      },
      {
        name: "Reformer strength",
        duration: 25,
        items: [
          { name: "Footwork all 4 positions", reps: "10 each", notes: "Lower body warm-up" },
          { name: "Hundred", reps: "100", notes: "Core" },
          { name: "Rowing series (front + back)", reps: "5 each", notes: "Upper body" },
          { name: "Long Stretch", reps: "5", notes: "Core integration" },
          { name: "Knee Stretch series", reps: "10 each", notes: "Core endurance" },
          { name: "Footwork single leg", reps: "8 each", notes: "Unilateral lower body" }
        ]
      },
      {
        name: "Cool-down",
        duration: 10,
        items: [
          { name: "Hamstring stretch in straps", reps: "1 min each", notes: "Decompression" },
          { name: "Hip flexor stretch", reps: "1 min each", notes: "Release" },
          { name: "Mermaid on box", reps: "3 each side", notes: "Lateral line" }
        ]
      }
    ]
  }
];

// ============================================
// GLOSSARY DATABASE
// Bilingual technical vocabulary
// ============================================
const GLOSSARY = [
  // ANATOMY
  { category: "anatomy", term: "Transverse abdominis", fr: "Transverse de l'abdomen", def: "The deepest abdominal muscle, wrapping around the trunk like a corset. Primary role in core stabilization and intra-abdominal pressure regulation. Engaged in almost every Pilates exercise through the 'scoop' or 'navel to spine' cue." },
  { category: "anatomy", term: "Rectus abdominis", fr: "Grand droit de l'abdomen", def: "The superficial 'six-pack' muscle running vertically from the sternum to the pubic bone. Primary function: trunk flexion." },
  { category: "anatomy", term: "Obliques (internal / external)", fr: "Obliques (interne / externe)", def: "Lateral abdominal muscles responsible for rotation and side bending. Internal obliques engage on the same side of rotation, externals on the opposite side." },
  { category: "anatomy", term: "Pelvic floor", fr: "Plancher pelvien", def: "A group of muscles spanning the base of the pelvis, forming the floor of the abdominal canister. Key for continence, core stability, sexual function, and birth." },
  { category: "anatomy", term: "Diaphragm", fr: "Diaphragme", def: "The primary respiratory muscle, forming the ceiling of the abdominal canister. Descends on the inhale, rises on the exhale." },
  { category: "anatomy", term: "Multifidus", fr: "Multifides", def: "Small deep spinal muscles running along the vertebral column. Provide segmental spinal stability. Often undertrained in sedentary populations." },
  { category: "anatomy", term: "Iliopsoas", fr: "Ilio-psoas", def: "The combined psoas major and iliacus. Primary hip flexor, but also a key player in spinal stability and hip external rotation." },
  { category: "anatomy", term: "Gluteus maximus", fr: "Grand fessier", def: "The largest and most superficial glute muscle. Primary hip extensor and external rotator." },
  { category: "anatomy", term: "Gluteus medius", fr: "Moyen fessier", def: "Lateral hip muscle. Primary hip abductor and pelvic stabilizer during gait. Key target in side-lying Pilates work." },
  { category: "anatomy", term: "Quadratus lumborum", fr: "Carré des lombes", def: "Deep lateral low back muscle. Side bends the trunk, stabilizes the pelvis. Often tight in people with postural imbalances." },
  { category: "anatomy", term: "Erector spinae", fr: "Érecteurs du rachis", def: "The group of long muscles running along the spine. Responsible for spinal extension and anti-flexion control." },
  { category: "anatomy", term: "Latissimus dorsi", fr: "Grand dorsal", def: "Large back muscle extending from the pelvis to the humerus. Key in shoulder extension, adduction, and internal rotation. Connects the upper body to the pelvis." },
  { category: "anatomy", term: "Serratus anterior", fr: "Dentelé antérieur", def: "Lateral chest/rib muscle that protracts and stabilizes the scapula. Essential for overhead and plank work." },
  { category: "anatomy", term: "Rotator cuff", fr: "Coiffe des rotateurs", def: "Four muscles stabilizing the shoulder joint: supraspinatus, infraspinatus, teres minor, subscapularis." },
  { category: "anatomy", term: "Hamstrings", fr: "Ischio-jambiers", def: "Three muscles on the back of the thigh: biceps femoris, semitendinosus, semimembranosus. Knee flexors and hip extensors." },
  { category: "anatomy", term: "Quadriceps", fr: "Quadriceps", def: "Four muscles on the front of the thigh. Primary knee extensors; rectus femoris also flexes the hip." },
  { category: "anatomy", term: "Adductors", fr: "Adducteurs", def: "Inner thigh muscles. Pull the leg toward the midline. Key stabilizers in single-leg work." },
  { category: "anatomy", term: "Deltoid", fr: "Deltoïde", def: "The main shoulder muscle, with three heads: anterior, lateral, posterior. Lifts the arm in various planes." },
  { category: "anatomy", term: "Rhomboids", fr: "Rhomboïdes", def: "Mid-back muscles that retract the scapula toward the spine. Key for posture correction." },
  { category: "anatomy", term: "Trapezius", fr: "Trapèze", def: "Large kite-shaped back muscle with three functional parts: upper (elevation), middle (retraction), lower (depression)." },
  { category: "anatomy", term: "Sacroiliac joint (SI)", fr: "Articulation sacro-iliaque (SI)", def: "The joint between the sacrum and iliac bone. Often a source of lower back pain, particularly post-partum." },
  { category: "anatomy", term: "Thoracolumbar fascia", fr: "Fascia thoracolombaire", def: "A large diamond-shaped sheet of connective tissue connecting the lats, glutes, and spinal erectors. A key force transmitter in core work." },

  // PRINCIPLES & CONCEPTS
  { category: "principles", term: "Powerhouse", fr: "Powerhouse", def: "Joseph Pilates's term for the center of the body — the area between the ribs and the hips, front and back. In modern terms: the deep core canister (transverse, pelvic floor, diaphragm, multifidus). The term is kept in English even in French Pilates." },
  { category: "principles", term: "Core", fr: "Centre / Sangle abdominale", def: "The group of muscles that stabilizes the trunk. In modern practice, the term overlaps with Powerhouse but extends to include deeper spinal and pelvic musculature." },
  { category: "principles", term: "Neutral spine", fr: "Colonne neutre / Position neutre", def: "The natural curves of the spine: cervical and lumbar lordosis, thoracic kyphosis. Contrast with imprint. Classical Pilates often works in neutral; contemporary often works in imprint." },
  { category: "principles", term: "Imprint", fr: "Empreinte / Bassin imprimé", def: "A slight posterior pelvic tilt where the lumbar spine gently contacts the mat. Used in contemporary Pilates to protect the low back during supine abdominal work." },
  { category: "principles", term: "C-curve", fr: "C-curve / Dos arrondi", def: "A deep rounding of the spine forming a letter C shape. Key position for the Roll-Up, Rolling Like a Ball, Teaser." },
  { category: "principles", term: "Axial elongation", fr: "Allongement axial", def: "Active lengthening of the spine along its long axis. The cue 'grow taller' belongs here. Creates decompression." },
  { category: "principles", term: "Opposition", fr: "Opposition", def: "The principle of reaching in two directions at once — crown up while sit bones down, for example. Creates stability and length simultaneously." },
  { category: "principles", term: "Dissociation", fr: "Dissociation", def: "The ability to move one body part while keeping another completely still. Hip dissociation = moving the femur without moving the pelvis." },
  { category: "principles", term: "Articulation", fr: "Articulation", def: "Moving the spine one vertebra at a time. Key in the Roll-Up and Bridge." },
  { category: "principles", term: "Control", fr: "Contrôle", def: "One of Joseph's original principles. Every movement is intentional, no momentum, no wasted effort." },
  { category: "principles", term: "Precision", fr: "Précision", def: "Another core principle. Small details matter — foot placement, breath timing, gaze direction." },
  { category: "principles", term: "Flow", fr: "Fluidité", def: "Smooth continuous motion without stops or jerks. Characterizes well-executed Pilates." },
  { category: "principles", term: "Breath", fr: "Respiration", def: "One of Joseph's six principles. Breath coordinates movement and deepens core engagement." },
  { category: "principles", term: "Concentration", fr: "Concentration", def: "Mental focus on the body and the exercise. Foundational to the Pilates method." },
  { category: "principles", term: "Centering", fr: "Centrage", def: "Initiating every movement from the center (Powerhouse)." },
  { category: "principles", term: "Tensegrity", fr: "Tenségrité", def: "A structural principle where compression elements (bones) float in a continuous tension network (fascia/myofascia). Modern framework for understanding biomechanics." },
  { category: "principles", term: "Time under tension (TUT)", fr: "Temps sous tension (TUT)", def: "The duration a muscle is actively loaded during an exercise. Lagree uses extreme TUT through slow tempo. Builds slow-twitch endurance." },
  { category: "principles", term: "Proprioception", fr: "Proprioception", def: "The body's sense of its own position in space. Developed through precise and varied Pilates movement." },
  { category: "principles", term: "Kinetic chain", fr: "Chaîne cinétique", def: "The interconnected sequence of joints and muscles that transmit force. Pilates trains both closed-chain (fixed end) and open-chain (free end) patterns." },

  // ACTIONS & MOVEMENTS
  { category: "actions", term: "Scoop", fr: "Creuser / Ancrer le nombril", def: "The action of drawing the lower abdomen in and up, engaging the transverse abdominis. A key instruction in classical Pilates." },
  { category: "actions", term: "Hollow", fr: "Creuser (version profonde)", def: "Similar to scoop but emphasizing the deeper hollowing of the lower belly, often used in Reformer roll-down work." },
  { category: "actions", term: "Navel to spine", fr: "Nombril vers la colonne", def: "Classical cue for transverse engagement. Romana Kryzanowska's signature instruction." },
  { category: "actions", term: "Zipping up", fr: "Remonter la fermeture éclair", def: "Metaphor for pelvic floor and lower abdominal engagement, drawing up from the pubic bone." },
  { category: "actions", term: "Rib knitting / Ribs in", fr: "Rapprocher les côtes", def: "Drawing the lower ribs down toward the hips to avoid flaring during supine work." },
  { category: "actions", term: "Tucking", fr: "Rétroversion", def: "Posterior pelvic tilt — the pubic bone rises toward the navel. Often used to initiate a Roll-Up." },
  { category: "actions", term: "Anterior pelvic tilt", fr: "Antéversion du bassin", def: "The top of the pelvis tips forward, creating lumbar extension. Common postural pattern." },
  { category: "actions", term: "Posterior pelvic tilt", fr: "Rétroversion du bassin", def: "The top of the pelvis tips backward, flattening the lumbar curve. Used in imprint." },
  { category: "actions", term: "Plantar flexion", fr: "Flexion plantaire", def: "Pointing the toes away from the shin. The action in a Pilates V foot position." },
  { category: "actions", term: "Dorsiflexion", fr: "Flexion dorsale", def: "Pulling the toes toward the shin. Heel-first flexed foot." },
  { category: "actions", term: "Abduction", fr: "Abduction", def: "Moving a limb away from the midline." },
  { category: "actions", term: "Adduction", fr: "Adduction", def: "Moving a limb toward the midline." },
  { category: "actions", term: "External rotation", fr: "Rotation externe", def: "Rotating a limb outward around its long axis. Turnout in ballet." },
  { category: "actions", term: "Internal rotation", fr: "Rotation interne", def: "Rotating a limb inward around its long axis." },
  { category: "actions", term: "Flexion", fr: "Flexion", def: "Bending at a joint, decreasing the angle." },
  { category: "actions", term: "Extension", fr: "Extension", def: "Straightening at a joint, increasing the angle. Or beyond neutral (hyperextension)." },
  { category: "actions", term: "Protraction", fr: "Protraction", def: "Moving the scapulae forward around the rib cage. Serratus dominant." },
  { category: "actions", term: "Retraction", fr: "Rétraction", def: "Drawing the scapulae back toward the spine. Rhomboid dominant." },
  { category: "actions", term: "Depression (scapular)", fr: "Abaissement des omoplates", def: "Sliding the scapulae down the back." },
  { category: "actions", term: "Elevation (scapular)", fr: "Élévation des omoplates", def: "Lifting the scapulae (shrug). Usually a compensation to avoid." },

  // CUEING & PEDAGOGY
  { category: "cueing", term: "Cueing", fr: "Cueing", def: "Verbal, tactile, or visual instructions that guide a client's movement. Term kept in English in French practice." },
  { category: "cueing", term: "Tactile cueing", fr: "Cueing tactile", def: "Using touch to guide the client — a hand on a shoulder, a press on the abdomen. Requires consent." },
  { category: "cueing", term: "Imagery / visualization", fr: "Visualisation", def: "Using mental images to produce movement — 'pearls on a string', 'water in a bowl', 'printing your spine into the mat'." },
  { category: "cueing", term: "External focus", fr: "Focus externe", def: "Directing attention outside the body (e.g., 'push the wall away') rather than internal (e.g., 'contract your glute'). Research shows external cues often produce better motor learning." },
  { category: "cueing", term: "Regression", fr: "Régression", def: "A simplified version of an exercise for clients who can't yet execute the full version." },
  { category: "cueing", term: "Progression", fr: "Progression", def: "A more demanding version of an exercise for clients ready for more challenge." },
  { category: "cueing", term: "Modification", fr: "Modification", def: "An adaptation of an exercise for a specific condition or contraindication." },

  // EQUIPMENT
  { category: "equipment", term: "Reformer", fr: "Reformer", def: "A Pilates apparatus with a sliding carriage, springs, straps, footbar, and shoulder rests. The most versatile piece of equipment in the method." },
  { category: "equipment", term: "Cadillac / Trapeze Table", fr: "Cadillac / Table Trapèze", def: "A raised table with a frame above, supporting springs, trapeze bar, and push-through bar. Joseph's first major invention." },
  { category: "equipment", term: "Wunda Chair", fr: "Wunda Chair", def: "A small square apparatus with a pedal and springs. Intense, unstable, advanced." },
  { category: "equipment", term: "High Chair / Electric Chair", fr: "High Chair", def: "A taller version of the Wunda Chair with an upright back. Used for standing and seated work." },
  { category: "equipment", term: "Ladder Barrel", fr: "Ladder Barrel", def: "A wooden apparatus combining a ladder and a curved barrel, used primarily for stretching and spinal extension." },
  { category: "equipment", term: "Spine Corrector", fr: "Spine Corrector", def: "A small barrel on a base. Used for back extension, core work, and decompression." },
  { category: "equipment", term: "Magic Circle / Ring", fr: "Magic Circle / Cercle Magique", def: "A flexible ring used for adduction, inner thigh, and arm work. Joseph's invention." },
  { category: "equipment", term: "Foam roller", fr: "Rouleau en mousse", def: "A cylindrical foam tool for myofascial release, balance work, and proprioception." },
  { category: "equipment", term: "Megaformer", fr: "Megaformer", def: "The signature Lagree apparatus. Similar to a Reformer but with different spring configurations, two platforms, and cables." },
  { category: "equipment", term: "Footbar", fr: "Barre de pieds", def: "The bar at the end of the Reformer where feet push during footwork." },
  { category: "equipment", term: "Carriage", fr: "Chariot", def: "The sliding platform of the Reformer or Megaformer." },
  { category: "equipment", term: "Spring", fr: "Ressort", def: "The source of resistance (or assistance) on Pilates apparatus. Different colors denote different tensions — red is typically heavy, blue lighter, yellow lightest (varies by brand)." },
  { category: "equipment", term: "Headrest", fr: "Appui-tête", def: "The adjustable support at the head of the Reformer." },
  { category: "equipment", term: "Shoulder rests / Blocks", fr: "Blocs d'épaule", def: "Padded blocks on the Reformer to prevent sliding during strap work." },
  { category: "equipment", term: "Pedi-Pole", fr: "Pedi-Pole", def: "A floor-standing apparatus with springs attached to a vertical pole. One of Joseph's original inventions, now rarely used." },
  { category: "equipment", term: "Toe Corrector / Foot Corrector", fr: "Toe Corrector / Foot Corrector", def: "Small spring-loaded devices for foot and toe strengthening. Joseph's inventions." },

  // LAGREE-SPECIFIC
  { category: "lagree", term: "Slow-twitch burnout", fr: "Épuisement à contraction lente", def: "The Lagree method's core principle — slow tempo under heavy load to recruit and exhaust slow-twitch (type I) muscle fibers for endurance and lean definition." },
  { category: "lagree", term: "4-count tempo", fr: "Tempo 4 temps", def: "The standard Lagree pace: 4 seconds per phase of movement. Non-negotiable in traditional Lagree." },
  { category: "lagree", term: "The Bear", fr: "L'Ours (The Bear)", def: "Signature Lagree exercise — a hovering quadruped with core integration." },
  { category: "lagree", term: "Wheelbarrow", fr: "Brouette (Wheelbarrow)", def: "A hinged glute exercise unique to Lagree." },
  { category: "lagree", term: "Platform", fr: "Plateforme", def: "The fixed platforms at each end of the Megaformer." },

  // CONDITIONS & PATHOLOGIES
  { category: "conditions", term: "Diastasis recti", fr: "Diastasis recti / Diastasis des grands droits", def: "A separation of the rectus abdominis along the linea alba, commonly post-partum. Requires avoiding full flexion under load until healed." },
  { category: "conditions", term: "Lumbar disc herniation", fr: "Hernie discale lombaire", def: "A bulging or herniation of an intervertebral disc in the lower back. Typically contraindicates loaded forward flexion." },
  { category: "conditions", term: "Osteoporosis", fr: "Ostéoporose", def: "Low bone density. Contraindicates loaded spinal flexion and rotation under load. Emphasizes extension and weight-bearing work." },
  { category: "conditions", term: "Scoliosis", fr: "Scoliose", def: "Lateral curvature of the spine. Pilates programs are often asymmetrical to address it — stretching the concave side and strengthening the convex side." },
  { category: "conditions", term: "Kyphosis", fr: "Cyphose", def: "Excessive rounding of the thoracic spine. Addressed with extension work and thoracic mobility." },
  { category: "conditions", term: "Hyperlordosis", fr: "Hyperlordose", def: "Excessive arching of the lumbar spine. Addressed with hip flexor release and abdominal strengthening." },
  { category: "conditions", term: "Spondylolisthesis", fr: "Spondylolisthésis", def: "A forward slip of one vertebra over another. Contraindicates repeated loaded extension." },
  { category: "conditions", term: "SI joint dysfunction", fr: "Dysfonction sacro-iliaque", def: "Pain or instability at the SI joint. Addressed with symmetric work and avoiding asymmetric loading." },
  { category: "conditions", term: "Hypermobility", fr: "Hypermobilité", def: "Excessive joint range of motion. Requires focus on stability and control rather than stretching." },
  { category: "conditions", term: "Frozen shoulder / Adhesive capsulitis", fr: "Capsulite rétractile / Épaule gelée", def: "A progressive loss of shoulder range due to capsular adhesion. Pilates can help with the rehabilitation in later phases." },
  { category: "conditions", term: "Piriformis syndrome", fr: "Syndrome du piriforme", def: "Sciatic nerve compression by a tight piriformis muscle. Addressed with external rotator release and glute strengthening." },

  // BATCH 2 — additional anatomy
  { category: "anatomy", term: "Tensor fasciae latae (TFL)", fr: "Tenseur du fascia lata", def: "Small muscle on the lateral hip. Hip flexor and abductor. Often tight in runners and contributes to IT band tension." },
  { category: "anatomy", term: "Iliotibial band (IT band)", fr: "Bandelette iliotibiale", def: "Thick fascial band running along the lateral thigh from the hip to the knee. Not a contractile tissue — its tension comes from TFL and glute max." },
  { category: "anatomy", term: "Gluteus minimus", fr: "Petit fessier", def: "The deepest of the three glute muscles. Hip abductor and stabilizer. Often weak in clients with hip pain." },
  { category: "anatomy", term: "Piriformis", fr: "Piriforme", def: "Deep external rotator of the hip. Lies near the sciatic nerve — when tight, can compress it (piriformis syndrome)." },
  { category: "anatomy", term: "Vastus medialis", fr: "Vaste médial", def: "Inner head of the quadriceps. Critical for patellar tracking and knee stability." },
  { category: "anatomy", term: "Pectoralis major", fr: "Grand pectoral", def: "Large chest muscle. Adducts and internally rotates the arm. Often tight in clients with rounded shoulders." },
  { category: "anatomy", term: "Pectoralis minor", fr: "Petit pectoral", def: "Small chest muscle beneath pec major. Tilts the scapula forward. Key target in chest opening work." },
  { category: "anatomy", term: "Levator scapulae", fr: "Élévateur de la scapula", def: "Neck muscle that elevates the scapula. Often tight from desk work, contributes to neck pain." },
  { category: "anatomy", term: "Sternocleidomastoid (SCM)", fr: "Sterno-cléido-mastoïdien (SCM)", def: "Prominent neck muscle running from the sternum and clavicle to the mastoid. Flexes and rotates the neck." },
  { category: "anatomy", term: "Deep neck flexors", fr: "Fléchisseurs profonds du cou", def: "Longus colli and longus capitis. Stabilize the cervical spine and counter forward head posture. Trained in chin tucks." },
  { category: "anatomy", term: "Linea alba", fr: "Linea alba (ligne blanche)", def: "The fibrous midline structure of the abdominal wall, where the rectus sheaths meet. Site of diastasis recti." },
  { category: "anatomy", term: "Coccyx", fr: "Coccyx", def: "The tailbone, the lowest segment of the spine. Site of pelvic floor attachment." },
  { category: "anatomy", term: "Sacrum", fr: "Sacrum", def: "Triangular bone at the base of the spine, formed of 5 fused vertebrae. Articulates with the iliac bones at the SI joints." },
  { category: "anatomy", term: "Lumbar spine (L1–L5)", fr: "Rachis lombaire (L1–L5)", def: "Five vertebrae in the lower back. Prone to disc issues due to bearing the most load. Natural lordotic curve." },
  { category: "anatomy", term: "Thoracic spine (T1–T12)", fr: "Rachis thoracique (T1–T12)", def: "Twelve vertebrae in the mid-back, articulating with the ribs. Naturally kyphotic. Often stiff in modern populations." },
  { category: "anatomy", term: "Cervical spine (C1–C7)", fr: "Rachis cervical (C1–C7)", def: "Seven vertebrae in the neck. Most mobile region of the spine. Naturally lordotic." },

  // additional principles
  { category: "principles", term: "Eccentric contraction", fr: "Contraction excentrique", def: "A muscle lengthens while contracting (e.g., the abdominals during the descent of a Roll-Up). Builds strength and length simultaneously — central to Pilates." },
  { category: "principles", term: "Concentric contraction", fr: "Contraction concentrique", def: "A muscle shortens while contracting. The classic 'lifting' phase of an exercise." },
  { category: "principles", term: "Isometric contraction", fr: "Contraction isométrique", def: "Muscle contracts without changing length. Central to plank work, holds, and stabilization training." },
  { category: "principles", term: "Range of motion (ROM)", fr: "Amplitude de mouvement", def: "The full extent of movement available at a joint. Pilates often works at the end-range to build control." },
  { category: "principles", term: "Closed kinetic chain", fr: "Chaîne cinétique fermée", def: "An exercise where the distal end (hand or foot) is fixed (e.g., footwork on the Reformer, push-up). Generally safer for joints, more functional." },
  { category: "principles", term: "Open kinetic chain", fr: "Chaîne cinétique ouverte", def: "An exercise where the distal end is free (e.g., leg circles in the air). More isolated muscle work." },
  { category: "principles", term: "Reciprocal inhibition", fr: "Inhibition réciproque", def: "When one muscle contracts, its antagonist relaxes. The neurophysiological basis of stretching agonists by contracting antagonists." },
  { category: "principles", term: "Motor learning", fr: "Apprentissage moteur", def: "The neurological process of acquiring a new movement pattern. Goes through cognitive, associative, and autonomous phases." },
  { category: "principles", term: "Bracing", fr: "Verrouillage / Gainage", def: "A 360° core engagement (front, sides, back) before loading. Used in heavy lifting and Lagree work, distinct from the more selective Pilates 'scoop'." },
  { category: "principles", term: "Hollowing", fr: "Creusement / Hollowing", def: "Drawing the navel inward to selectively engage the transverse abdominis. Classical Pilates approach. Recent debate exists vs bracing." },

  // additional actions
  { category: "actions", term: "Spinal articulation", fr: "Articulation de la colonne", def: "Moving the spine one vertebra at a time, sequentially, like pearls on a string." },
  { category: "actions", term: "Hinge", fr: "Charnière (hinge)", def: "Folding forward at the hips while keeping the spine straight. Distinct from spinal flexion. Foundation of squats, deadlifts, and many Reformer exercises." },
  { category: "actions", term: "Roll-down", fr: "Roll-down / Déroulement", def: "Slowly rolling the spine forward from standing or seated, vertebra by vertebra. Common warm-up exercise." },
  { category: "actions", term: "Roll-up", fr: "Roll-up / Enroulement", def: "The reverse — articulating the spine up from the mat or from a forward fold." },
  { category: "actions", term: "Lateral flexion", fr: "Flexion latérale", def: "Side bending of the spine." },
  { category: "actions", term: "Spinal rotation", fr: "Rotation vertébrale", def: "Twisting motion around the long axis of the spine. Most rotation happens in the thoracic region." },
  { category: "actions", term: "Hip hinge", fr: "Charnière de hanche", def: "Movement initiated from the hip joint with the spine staying neutral. Foundation of many Reformer exercises." },
  { category: "actions", term: "Pelvic rocking", fr: "Bercement pelvien", def: "Tipping the pelvis forward and back rhythmically. Used as a warm-up to find neutral and explore pelvic mobility." },
  { category: "actions", term: "Chin nod", fr: "Hochement du menton", def: "A subtle nodding of the chin to engage the deep neck flexors. Used to initiate any chest lift." },
  { category: "actions", term: "Eccentric loading", fr: "Charge excentrique", def: "Loading the muscle during its lengthening phase. Builds connective tissue and slow-twitch endurance." },
  { category: "actions", term: "Bilateral", fr: "Bilatéral", def: "Both sides of the body working simultaneously. E.g., standard Hundred." },
  { category: "actions", term: "Unilateral", fr: "Unilatéral", def: "One side of the body working independently. E.g., Single Leg Stretch." },
  { category: "actions", term: "Contralateral", fr: "Controlatéral", def: "Opposite limb pairs working together (e.g., right arm + left leg in Swimming). Trains gait-like cross-patterns." },

  // additional cueing
  { category: "cueing", term: "Internal focus", fr: "Focus interne", def: "Directing attention inward — what muscle is working, what bone is moving. Useful for new clients learning anatomy." },
  { category: "cueing", term: "Verbal cue", fr: "Cueing verbal", def: "Spoken instruction — directive, metaphorical, anatomical, or imagistic." },
  { category: "cueing", term: "Visual cue", fr: "Cueing visuel", def: "Demonstration or showing a visual reference." },
  { category: "cueing", term: "Kinesthetic cue", fr: "Cueing kinesthésique", def: "Tactile or movement-based feedback to guide the client." },
  { category: "cueing", term: "Adaptation", fr: "Adaptation", def: "Modifying an exercise for an individual's needs — distinct from a generic regression." },
  { category: "cueing", term: "Assessment", fr: "Évaluation", def: "The process of observing and testing a client to design appropriate work. Should happen before any session with a new client." },
  { category: "cueing", term: "Contraindication", fr: "Contre-indication", def: "A condition that makes a particular exercise inadvisable or unsafe." },

  // additional equipment
  { category: "equipment", term: "Jump board", fr: "Jump board", def: "A flat board attached to the Reformer in place of the footbar, allowing for plyometric jumping in a low-impact horizontal position." },
  { category: "equipment", term: "Long box", fr: "Long box", def: "A padded box used on the Reformer for prone and supine work like Pulling Straps and Backstroke." },
  { category: "equipment", term: "Short box", fr: "Short box", def: "A smaller box used on the Reformer for seated work like Side-to-Side, Around the World, Tree." },
  { category: "equipment", term: "Sticky pad / Knee pad", fr: "Tapis antidérapant / Genouillère", def: "Padding for the knees during kneeling Reformer or Megaformer work." },
  { category: "equipment", term: "Half barrel", fr: "Demi-barrel", def: "A small curved barrel used for spine extension, hip flexor stretches, and core work." },
  { category: "equipment", term: "Theraband / Resistance band", fr: "Theraband / Élastique", def: "An elastic band providing variable resistance. Used as a substitute for springs or for supplementary work." },
  { category: "equipment", term: "BOSU", fr: "BOSU", def: "A half-ball balance trainer. Sometimes integrated into contemporary Pilates for proprioception and balance work." },
  { category: "equipment", term: "Swiss ball", fr: "Swiss ball / Ballon de gym", def: "A large inflatable ball. Used for instability work, often with Pilates principles applied." },
  { category: "equipment", term: "Overball", fr: "Overball", def: "A small (~25 cm) inflatable ball. Used for proprioceptive feedback, support, and pelvic floor work." },

  // additional Lagree
  { category: "lagree", term: "Catfish", fr: "Catfish", def: "Lagree reverse lunge variation targeting the posterior chain." },
  { category: "lagree", term: "Plank Pulse", fr: "Plank Pulse", def: "A plank with subtle carriage pulsing. Builds extreme core endurance." },
  { category: "lagree", term: "Newspaper", fr: "Newspaper", def: "Kneeling chest press exercise unique to Lagree. Named for the position resembling holding a newspaper." },
  { category: "lagree", term: "Megaformer M3 / M3S / EVO", fr: "Megaformer M3 / M3S / EVO", def: "Different generations of the Lagree apparatus. The EVO is the latest, with refinements over the M3 and M3S." },
  { category: "lagree", term: "Microformer", fr: "Microformer", def: "A smaller, home-friendly version of the Megaformer designed for residential use." },

  // additional conditions
  { category: "conditions", term: "Disc bulge", fr: "Bombement discal", def: "A less severe disc protrusion than a herniation. Generally responds well to extension-based work and core stabilization." },
  { category: "conditions", term: "Sciatica", fr: "Sciatique", def: "Pain radiating along the sciatic nerve, usually from a disc, piriformis compression, or stenosis. Treatment depends on the cause." },
  { category: "conditions", term: "Stenosis", fr: "Sténose", def: "Narrowing of the spinal canal. Typically benefits from flexion-based work (the opposite of disc rules)." },
  { category: "conditions", term: "Plantar fasciitis", fr: "Fasciite plantaire", def: "Inflammation of the plantar fascia of the foot. Pilates foot work and calf release can help." },
  { category: "conditions", term: "Hallux valgus", fr: "Hallux valgus", def: "Big toe deformity (bunion). Foot work and toe spreading can help in early stages." },
  { category: "conditions", term: "Carpal tunnel syndrome", fr: "Syndrome du canal carpien", def: "Median nerve compression at the wrist. Pilates exercises with wrist loading must be modified." },
  { category: "conditions", term: "Tennis elbow / Lateral epicondylitis", fr: "Épicondylite latérale", def: "Inflammation at the lateral elbow from overuse. Modify any gripping work." },
  { category: "conditions", term: "Pelvic organ prolapse", fr: "Prolapsus génital", def: "Descent of pelvic organs through the vaginal canal. Pelvic floor work is essential, but high-impact and heavy lifting are contraindicated." },
  { category: "conditions", term: "Endometriosis", fr: "Endométriose", def: "A condition where uterine-like tissue grows outside the uterus. Pilates can help with pelvic pain management through breath, gentle mobility, and PF release." },
  { category: "conditions", term: "Chronic fatigue syndrome", fr: "Syndrome de fatigue chronique", def: "Persistent unexplained fatigue. Pilates programs must respect energy envelopes and avoid post-exertional malaise." }
];

// ============================================
// PROGRAMS DATABASE
// ============================================
const PROGRAMS = [
  {
    id: "foundation-8-weeks",
    title: "Foundation — 8 Weeks",
    method: "pilates-mat",
    goal: "foundation",
    level: "fundamental",
    duration: "8 weeks",
    frequency: "3 sessions/week",
    description: "A complete onboarding program for clients new to Pilates. Builds breath, core awareness, spinal articulation, and hip dissociation before introducing any advanced work.",
    weeks: [
      { week: 1, theme: "Breath & pelvic awareness", intensity: "Low", focus: "Lateral breathing, neutral vs imprint, pelvic tilts" },
      { week: 2, theme: "Core activation", intensity: "Low", focus: "Chest lift, Hundred (regression L2), single leg slides" },
      { week: 3, theme: "Spinal articulation", intensity: "Low-Mod", focus: "Half Roll-Back, Pelvic Curl, Cat-Cow" },
      { week: 4, theme: "Hip dissociation", intensity: "Moderate", focus: "Single Leg Circles, Leg Lifts, Toe Taps" },
      { week: 5, theme: "Integration I", intensity: "Moderate", focus: "Full Hundred, Roll-Up (assisted), Rolling Like a Ball" },
      { week: 6, theme: "Extension introduction", intensity: "Moderate", focus: "Swan Prep, Swimming prep, Saw" },
      { week: 7, theme: "Full repertoire sampling", intensity: "Mod-High", focus: "First 10 classical exercises in order" },
      { week: 8, theme: "Consolidation", intensity: "Moderate", focus: "Clean execution of foundation repertoire, self-awareness" }
    ]
  }
];
