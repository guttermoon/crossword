/* Placeholder puzzle content.
 *
 * Replace the objects below with real puzzles — nothing else in the project
 * needs to change. Clue numbers are NOT written here: they are derived from
 * `grid` at load time, so a grid edit can never fall out of sync with the clues.
 *
 * Schema
 *   id       unique string; also the localStorage key
 *   title    display title for the article
 *   heading  red section heading above the note box
 *   note     instruction paragraph inside the ruled box
 *   credit   small rotated line running up the side of the grid
 *   story    array of paragraphs for the mini-mystery column
 *   riddle   { question, scramble, answer }
 *   grid     array of equal-length rows; '.' is a black square, A-Z is a solution letter
 *   clues    { across: { <number>: 'clue' }, down: { <number>: 'clue' } }
 */
window.PUZZLES = [
  {
    id: 'sc-ps',
    title: 'Mini Mystery',
    heading: 'SC and PS Combinations',
    note:
      'When "s" is combined with "c" or "p," the "c" and the "p" go silent. ' +
      'Examples: scenery and psychology. Nine answers in this puzzle hide an ' +
      '"sc" or a "ps" of that kind. Those answers are starred (*).',
    credit: 'By L. Zabo — Puzzle No. 1',
    story: [
      'Ken Coe, a gambler, was found slumped in the hotel telephone booth. The ' +
        'receiver was still swinging on its cord.',
      'The night clerk had plenty to say. "I heard him dial," he told Sam Sleuth. ' +
        '"Three clicks, no more. Then a shot, and a man in a gray coat went out ' +
        'through the lobby and around the corner."',
      '"Three clicks," said Sam. He looked at the booth a long while. Then he ' +
        'looked at the register, and then he looked at the clerk.',
      '"Nobody in this town has a three-click number," Sam said. "You never heard ' +
        'him dial at all. You were the one holding the phone."',
    ],
    riddle: {
      question: 'How did Sam Sleuth know the night clerk was lying?',
      scramble: 'EHT TNUOC FO SKCILC',
      answer: 'THE COUNT OF CLICKS',
    },
    grid: [
      '.SUSPECT......E',
      '.H.C..O....S..S',
      '.A.I..R.PSYCHIC',
      '.DESCEND...E..A',
      '.O.S..E.C..N..P',
      '.W.O.PROOF.E..E',
      '...R....L..R.W.',
      '..PSYCHOLOGY.I.',
      '..E..R..A....T.',
      '.ANSWER.P.S..N.',
      'P.C..S..SCEPTER',
      'SCIENCE.E.C..S.',
      'A.L..E...ARREST',
      'L....N....E....',
      'M.MYSTERY.TRAIL',
    ],
    clues: {
      across: {
        1: 'The one the police keep an eye on',
        6: 'Claims to read your mind (*)',
        7: 'Go down the stairs (*)',
        9: 'What the district attorney needs',
        11: 'The study of the mind (*)',
        13: 'Every riddle has one',
        16: 'Rod a king carries (*)',
        17: 'Chemistry or biology, for one (*)',
        18: 'Take into custody',
        19: 'This whole page, in a word',
        20: 'The path a sleuth follows',
      },
      down: {
        1: 'It follows you at noon',
        2: 'Cutting tool with two blades (*)',
        3: 'The gray coat went around one',
        4: 'Slip away from the law',
        5: 'Hills and trees out the train window (*)',
        8: 'Fall in a heap',
        10: 'The one who saw the whole thing',
        11: 'Fill in this puzzle with one',
        12: 'Shape of a new moon (*)',
        14: 'What the night clerk was keeping',
        15: 'Song from the hymnbook (*)',
      },
    },
  },

  {
    id: 'silent-partners',
    title: 'Silent Partners',
    heading: 'Letters You Never Say',
    note:
      'Every answer below hides a letter you write but never pronounce. Say each ' +
      'answer out loud, then listen for the letter that disappears. The silent ' +
      'letter is named at the end of each clue.',
    credit: 'By L. Zabo — Puzzle No. 2',
    story: [
      'The crown was gone from the castle case, and the guard had heard nothing at ' +
        'all — no glass, no footsteps, not one sound the whole night.',
      '"Nothing?" said Sam Sleuth. "That case sits on a marble floor. A thief in ' +
        'boots on marble is a parade."',
      'The guard shrugged. "I told you. Silence."',
      'Sam knelt by the case and lifted a thin gray thread from the hinge. "Wool," ' +
        'he said. "Somebody wrapped his feet. And somebody told him which switch to ' +
        'throw on the way in."',
    ],
    riddle: {
      question: 'Why did the guard hear nothing at the castle?',
      scramble: 'EHT TNELIS MRALA',
      answer: 'THE SILENT ALARM',
    },
    grid: [
      'LISTEN..D..',
      '..I...WRECK',
      '..G..W..S.N',
      '.KNIGHT.I.O',
      'F....I..G.T',
      'O.P.ISLAND.',
      'L.L..T...O.',
      'KNUCKLE..U.',
      '..M..E.W.B.',
      '..B...WRITE',
      'WRENCH.E...',
      '..R.R.TALK.',
      '....U..T...',
      '.CLIMB.HALF',
      '....B......',
    ],
    clues: {
      across: {
        1: 'Lend an ear (silent T)',
        4: 'What the tow truck hauls away (silent W)',
        7: 'Rider in armor (silent K, and GH)',
        10: 'Land with water all around it (silent S)',
        12: 'Joint in your finger (silent K)',
        14: 'Put it down on paper (silent W)',
        15: "A plumber's tool (silent W)",
        17: 'Chatter away (silent L)',
        18: 'Go up the ladder (silent B)',
        19: 'Fifty cents of a dollar (silent L)',
      },
      down: {
        2: 'The one at the corner says STOP (silent G)',
        3: 'A plan or a pattern (silent G)',
        5: 'Tie one in the rope (silent K)',
        6: 'The referee blows it (silent T)',
        8: 'Plain people, or a kind of song (silent L)',
        9: 'He fixes the pipes (silent B)',
        11: 'A nagging uncertainty (silent B)',
        13: 'Ring of holly on the door (silent W)',
        16: 'What a careless thief leaves behind (silent B)',
      },
    },
  },

  {
    id: 'double-trouble',
    title: 'Double Trouble',
    heading: 'Two of Every Letter',
    note:
      'Every answer in this puzzle carries at least one pair of double letters, ' +
      'and exactly two of them carry two pairs apiece. Count as you go — the twins ' +
      'in the story were not the only things that came in twos.',
    credit: 'By L. Zabo — Puzzle No. 3',
    story: [
      'The bakery was robbed at dawn, and the twins swore they had been home in bed ' +
        'the entire time. One of them, anyway.',
      '"We were together all night," said the first twin. The second twin nodded ' +
        'along a beat too late.',
      'Sam Sleuth walked around to the back step and pointed at the flour dust. Two ' +
        'sets of prints went in. Two sets came out.',
      '"Together all night," Sam agreed. "That is exactly the trouble. Nobody said ' +
        'a word about together where."',
    ],
    riddle: {
      question: 'What gave the twins away behind the bakery?',
      scramble: 'OWT STES FO SBMURC',
      answer: 'TWO SETS OF CRUMBS',
    },
    grid: [
      'K...P......B',
      'E.BLIZZARD.U',
      'T...L...I..T',
      'T...L.RABBIT',
      'LESSON..B..E',
      'E.U.W...O..R',
      '..C..M..N...',
      'ACCIDENT....',
      'D.E..S.O..T.',
      'D.S..SUMMER.',
      'R.S..A.O..A.',
      'E....G.R..F.',
      'SADDLE.R..F.',
      'S......O..I.',
      '..YELLOW..C.',
    ],
    clues: {
      across: {
        4: 'A storm that closes the school (double Z)',
        6: 'It hops (double B)',
        7: 'What the teacher gives (double S)',
        10: 'Nobody meant for it to happen (double C)',
        13: 'Vacation season (double M)',
        14: 'It goes on the horse (double D)',
        15: 'The color of the school bus (double L)',
      },
      down: {
        1: 'It whistles on the stove (double T)',
        2: 'Rest your head on it (double L)',
        3: 'It melts into the toast (double T)',
        5: 'It ties up the package (double B)',
        8: 'Winning at long last (two pairs)',
        9: 'A note left behind (double S)',
        10: 'Number, street, and town (two pairs)',
        11: 'The day after this one (double R)',
        12: 'Bumper to bumper at five o clock (double F)',
      },
    },
  },
];
