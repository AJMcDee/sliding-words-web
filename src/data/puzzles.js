/**
 * Array of 100 themed word puzzles
 * Each puzzle has:
 * - id: Puzzle number (1-100)
 * - theme: Category/theme name
 * - words: Array of 4 words [word1, word2, word3, word4]
 *   - First 3 words: 4 letters each
 *   - Last word: 3 letters
 *
 * All puzzles use UK English spelling
 */
export const PUZZLES = [
  { id: 1, theme: 'Playing Cards', words: ['CARD', 'JACK', 'KING', 'ACE'] },
  { id: 2, theme: 'Metallurgy', words: ['FIRE', 'IRON', 'MELT', 'HIT'] },
  { id: 3, theme: 'Baby Care', words: ['BABY', 'NAPS', 'PRAM', 'CRY'] },
  { id: 4, theme: 'Ocean', words: ['POOL', 'SWIM', 'DIVE', 'SEA'] },
  { id: 5, theme: 'Weather', words: ['RAIN', 'WIND', 'HAIL', 'FOG'] },
  { id: 6, theme: 'Kitchen', words: ['OVEN', 'DISH', 'FORK', 'POT'] },
  { id: 7, theme: 'Garden', words: ['ROSE', 'SEED', 'SOIL', 'DIG'] },
  { id: 8, theme: 'Music', words: ['DRUM', 'SONG', 'BEAT', 'HUM'] },
  { id: 9, theme: 'School', words: ['DESK', 'BOOK', 'TEST', 'PEN'] },
  { id: 10, theme: 'Sports', words: ['GOAL', 'KICK', 'BALL', 'WIN'] },
  { id: 11, theme: 'Cooking', words: ['BAKE', 'STIR', 'BOIL', 'FRY'] },
  { id: 12, theme: 'Travel', words: ['TRIP', 'ROAD', 'TOUR', 'FLY'] },
  { id: 13, theme: 'Home', words: ['DOOR', 'WALL', 'ROOF', 'BED'] },
  { id: 14, theme: 'Colours', words: ['BLUE', 'PINK', 'GREY', 'RED'] },
  { id: 15, theme: 'Birds', words: ['DUCK', 'CROW', 'SWAN', 'OWL'] },
  { id: 16, theme: 'Farm', words: ['BARN', 'PIGS', 'COWS', 'HEN'] },
  { id: 17, theme: 'Beach', words: ['SAND', 'WAVE', 'TIDE', 'SUN'] },
  { id: 18, theme: 'Winter', words: ['SNOW', 'COLD', 'CHILL', 'ICE'] },
  { id: 19, theme: 'Theatre', words: ['PLAY', 'CAST', 'ROLE', 'ACT'] },
  { id: 20, theme: 'Tea Time', words: ['CAKE', 'BREW', 'SCONE', 'TEA'] },
  { id: 21, theme: 'Computers', words: ['CODE', 'CHIP', 'DATA', 'NET'] },
  { id: 22, theme: 'Mobile Phones', words: ['TEXT', 'RING', 'CALL', 'APP'] },
  { id: 23, theme: 'Internet', words: ['LINK', 'SITE', 'BLOG', 'WEB'] },
  { id: 24, theme: 'Photography', words: ['LENS', 'SNAP', 'FILM', 'ART'] },
  { id: 25, theme: 'Television', words: ['SHOW', 'TUNE', 'PLAY', 'BOX'] },
  { id: 26, theme: 'Dresses', words: ['GOWN', 'COAT', 'SILK', 'HEM'] },
  { id: 27, theme: 'Shoes', words: ['BOOT', 'HEEL', 'LACE', 'TOE'] },
  { id: 28, theme: 'Hats', words: ['CAPS', 'FELT', 'BRIM', 'HAT'] },
  { id: 29, theme: 'Jewellery', words: ['RING', 'GEMS', 'GOLD', 'ORE'] },
  { id: 30, theme: 'Belts', words: ['KNOT', 'LOOP', 'HANG', 'TIE'] },
  { id: 31, theme: 'Socks', words: ['WOOL', 'KNIT', 'SEAM', 'TOE'] },
  { id: 32, theme: 'Fabrics', words: ['WOOL', 'SILK', 'LACE', 'DYE'] },
  { id: 33, theme: 'Buttons', words: ['STUD', 'SNAP', 'HOLE', 'SEW'] },
  { id: 34, theme: 'Zips', words: ['PULL', 'LOCK', 'SLIP', 'ZIP'] },
  { id: 35, theme: 'Heart', words: ['BEAT', 'PUMP', 'VEIN', 'HUM'] },
  { id: 36, theme: 'Brain', words: ['MIND', 'IDEA', 'CELL', 'WIT'] },
  { id: 37, theme: 'Muscles', words: ['FLEX', 'TONE', 'ACHE', 'ARM'] },
  { id: 38, theme: 'Bones', words: ['HEEL', 'KNEE', 'SHIN', 'RIB'] },
  { id: 39, theme: 'Teeth', words: ['BITE', 'GNAW', 'BACK', 'GUM'] },
  { id: 40, theme: 'Eyes', words: ['LENS', 'LASH', 'BROW', 'SEE'] },
  { id: 41, theme: 'Ears', words: ['LOBE', 'HEAR', 'LOUD', 'EAR'] },
  { id: 42, theme: 'Nose', words: ['SNOT', 'PUFF', 'BLOW', 'RUN'] },
  { id: 43, theme: 'Mouth', words: ['LIPS', 'TALK', 'BITE', 'JAW'] },
  { id: 44, theme: 'Skin', words: ['RASH', 'PORE', 'HAIR', 'TAN'] },
  { id: 45, theme: 'Nails', words: ['FILE', 'CLIP', 'TRIM', 'CUT'] },
  { id: 46, theme: 'Hair', words: ['COMB', 'TRIM', 'CURL', 'BOB'] },
  { id: 47, theme: 'Hammers', words: ['NAIL', 'BANG', 'CLAW', 'HIT'] },
  { id: 48, theme: 'Saws', words: ['WOOD', 'TRIM', 'EDGE', 'CUT'] },
  { id: 49, theme: 'Drills', words: ['BORE', 'SPIN', 'HOLE', 'BIT'] },
  { id: 50, theme: 'Screws', words: ['TURN', 'SLOT', 'HEAD', 'NUT'] },
  { id: 51, theme: 'Wrenches', words: ['BOLT', 'GRIP', 'TURN', 'NUT'] },
  { id: 52, theme: 'Plumbing', words: ['PIPE', 'LEAK', 'TRAP', 'TUB'] },
  { id: 53, theme: 'Electric', words: ['PLUG', 'WIRE', 'BULB', 'ZAP'] },
  { id: 54, theme: 'Carpentry', words: ['NAIL', 'WOOD', 'GLUE', 'SAW'] },
  { id: 55, theme: 'Paint', words: ['WASH', 'COAT', 'TONE', 'DYE'] },
  { id: 56, theme: 'Gardens', words: ['RAKE', 'HOSE', 'WEED', 'DIG'] },
  { id: 57, theme: 'Cars', words: ['TYRE', 'GEAR', 'DOOR', 'CAR'] },
  { id: 58, theme: 'Lorries', words: ['LOAD', 'HAUL', 'AXLE', 'VAN'] },
  { id: 59, theme: 'Vans', words: ['CAGE', 'BACK', 'SEAT', 'BOX'] },
  { id: 60, theme: 'Bikes', words: ['PEDAL', 'BELL', 'TYRE', 'RIM'] },
  { id: 61, theme: 'Trains', words: ['RAIL', 'TRAM', 'LOCO', 'HUB'] },
  { id: 62, theme: 'Buses', words: ['STOP', 'FARE', 'TRIP', 'RUN'] },
  { id: 63, theme: 'Taxis', words: ['FARE', 'RIDE', 'PICK', 'CAB'] },
  { id: 64, theme: 'Planes', words: ['WING', 'TAIL', 'LAND', 'FLY'] },
  { id: 65, theme: 'Ships', words: ['SAIL', 'ROPE', 'DECK', 'BOW'] },
  { id: 66, theme: 'Boats', words: ['SAIL', 'OARS', 'DOCK', 'ROW'] },
  { id: 67, theme: 'Subs', words: ['DEEP', 'DIVE', 'HULL', 'DIP'] },
  { id: 68, theme: 'Happy', words: ['GRIN', 'GLAD', 'GLEE', 'JOY'] },
  { id: 69, theme: 'Sad', words: ['TEAR', 'GLUM', 'WEEP', 'WOE'] },
  { id: 70, theme: 'Angry', words: ['RAGE', 'FUME', 'SORE', 'IRE'] },
  { id: 71, theme: 'Fear', words: ['JOLT', 'PALE', 'HIDE', 'AWE'] },
  { id: 72, theme: 'Love', words: ['KISS', 'WARM', 'CARE', 'HUG'] },
  { id: 73, theme: 'Surprise', words: ['GASP', 'JOLT', 'OOPS', 'OOH'] },
  { id: 74, theme: 'Confused', words: ['DAZE', 'LOST', 'BLUR', 'ERR'] },
  { id: 75, theme: 'Proud', words: ['SMUG', 'VAIN', 'PUFF', 'EGO'] },
  { id: 76, theme: 'Spring', words: ['BUDS', 'MILD', 'NEST', 'NEW'] },
  { id: 77, theme: 'Summer', words: ['HEAT', 'SWIM', 'WARM', 'SUN'] },
  { id: 78, theme: 'Autumn', words: ['FALL', 'REAP', 'LEAF', 'OAK'] },
  { id: 79, theme: 'Months', words: ['JUNE', 'JULY', 'MAY', 'DAY'] },
  { id: 80, theme: 'Days', words: ['WEEK', 'DAWN', 'DUSK', 'SUN'] },
  { id: 81, theme: 'Hours', words: ['PAST', 'NOON', 'LATE', 'DAY'] },
  { id: 82, theme: 'Time', words: ['TICK', 'PASS', 'FAST', 'SEC'] },
  { id: 83, theme: 'Stars', words: ['GLOW', 'TWIN', 'BEAM', 'SUN'] },
  { id: 84, theme: 'Moon', words: ['FULL', 'GREY', 'TIDE', 'ORB'] },
  { id: 85, theme: 'Planets', words: ['MARS', 'SOIL', 'LUNA', 'SUN'] },
  { id: 86, theme: 'Galaxy', words: ['VOID', 'STAR', 'DUST', 'SKY'] },
  { id: 87, theme: 'Comets', words: ['TAIL', 'ROCK', 'DUST', 'ORB'] },
  { id: 88, theme: 'Eclipse', words: ['DARK', 'GREY', 'MASK', 'SUN'] },
  { id: 89, theme: 'Sculpture', words: ['ROCK', 'CLAY', 'FORM', 'ART'] },
  { id: 90, theme: 'Drawing', words: ['DRAW', 'LINE', 'TONE', 'PEN'] },
  { id: 91, theme: 'Dance', words: ['MOVE', 'SPIN', 'LEAP', 'JIG'] },
  { id: 92, theme: 'Poetry', words: ['POEM', 'HYMN', 'ODES', 'ODE'] },
  { id: 93, theme: 'Writing', words: ['WORD', 'PLOT', 'TALE', 'PEN'] },
  { id: 94, theme: 'Novels', words: ['PAGE', 'PLOT', 'HERO', 'ARC'] },
  { id: 95, theme: 'Library', words: ['BOOK', 'CARD', 'LOAN', 'ROW'] },
  { id: 96, theme: 'News', words: ['COPY', 'LEAD', 'EDIT', 'INK'] },
  { id: 97, theme: 'Chess', words: ['PAWN', 'ROOK', 'MOVE', 'WIN'] },
  { id: 98, theme: 'Cards', words: ['SUIT', 'DEAL', 'HAND', 'ACE'] },
  { id: 99, theme: 'Dice', words: ['ROLL', 'CUBE', 'ODDS', 'SIX'] },
  { id: 100, theme: 'Pets', words: ['CATS', 'DOGS', 'FISH', 'PET'] }
];

/**
 * Helper to get puzzle by ID
 * @param {number} id - Puzzle ID (1-100)
 * @returns {Object} Puzzle object
 */
export function getPuzzleById(id) {
  return PUZZLES.find(p => p.id === id) || PUZZLES[0];
}

/**
 * Helper to get total puzzle count
 * @returns {number} Total number of puzzles
 */
export function getTotalPuzzles() {
  return PUZZLES.length;
}
