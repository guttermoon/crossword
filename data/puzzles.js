/* Puzzle content.
 *
 * Clue numbers are NOT stored here: js/grid.js derives them from `grid`, so the
 * squares and the clues cannot drift apart. Each clue carries the answer only
 * for reference and a `note` — the footnote shown under the clue once it is
 * solved or the reader presses "Why?".
 *
 *   grid   equal-length rows; '.' is an empty square, A-Z a solution letter
 *   clues  { across: { <number>: { clue, answer, note } }, down: { ... } }
 *   note   { what, sounds, human, data, source, url } — source/url may be null
 */
window.PUZZLES = [
 {
  "id": "p1",
  "issue": "No. 1",
  "title": "The Words",
  "blurb": "The vocabulary machines cannot put down — the adverbs, the ornate nouns, the corporate verbs, and the travel-brochure adjectives that arrive when nobody looked at the thing being described.",
  "heroes": [
   "DELVE",
   "LOADBEARING",
   "QUIETLY",
   "TAPESTRY",
   "UNDERSCORE",
   "CLUSTER"
  ],
  "grid": [
   ".B.U...................",
   ".O.N.........Q.........",
   ".A.L..L.D....U.........",
   ".SHOWCASE.T..I...U..H..",
   ".T.C..N.LOADBEARING.A..",
   ".S.K..D.V.P..T...D..L..",
   "......S.E.E.CLUSTER.F..",
   "...D..C...S..Y...R..L..",
   "V.TESTAMENT....BUSTLING",
   "I..E..P...R.L....C..F..",
   "B..P..E..SYNERGY.O.TELL",
   "REALM.......V....R.....",
   "A..Y.......GENUINELY...",
   "N...........R..........",
   "T.....IMPORTANTLY......",
   "..........O.G..........",
   "....GROUNDBREAKING.....",
   ".....I.T..U.....E......",
   ".....C.I..STUDIESSHOW.H",
   ".....H.L..T.....T.....E",
   ".......I........L.....A",
   ".......S........EMPOWER",
   "...HARNESS......D.....T"
  ],
  "clues": {
   "across": {
    "6": {
     "clue": "A glass display cabinet in a museum, drafted in as a verb meaning simply 'to show' (8)",
     "answer": "SHOWCASE",
     "note": {
      "what": "One of the significance verbs. 'Show' is shorter, clearer and free; 'showcase' adds a ceremonial frame around whatever is being shown. Its cousin 'showcasing' is one of the most over-used words in the data.",
      "sounds": "“This report showcases our commitment to sustainability.”",
      "human": "“This report shows what we did about our emissions.”",
      "data": "'Showcasing' appeared about 10.7 times more often in 2024 medical abstracts than the pre-ChatGPT trend predicted — the third-largest jump measured, behind 'delves' and 'underscores'.",
      "source": "Kobak et al., Science Advances",
      "url": "https://www.science.org/doi/10.1126/sciadv.adt3813"
     }
    },
    "10": {
     "clue": "Building-trade adjective for a wall that holds the roof up. A machine will apply it to a paragraph, a code comment, a decision or your feelings (11)",
     "answer": "LOADBEARING",
     "note": {
      "what": "The signature tell of 2026, associated above all with Anthropic's Claude. It asserts structural importance in one hyphenated word without having to argue for it, which is exactly why models like it and why banning the phrase alone does not help — they simply switch to 'carries the argument' or 'does the real work here'.",
      "sounds": "“That indentation is deliberate and load-bearing rather than tidy.” (written about a routine software build step)",
      "human": "“Don't change that line — the build breaks without it.”",
      "data": "The joke went viral when a user posted a moving personalised message from Claude that ended 'THEY WERE LOAD-BEARING'. A follow-up post documented the phrase appearing 25 times in a single conversation. Note honestly: unlike 'delve', nobody has yet counted this one across a large corpus — it is a very well-evidenced joke rather than a statistic.",
      "source": "“Load-Bearing. 25 Times.”, r/ClaudeAI",
      "url": "https://www.reddit.com/r/ClaudeAI/comments/1uojyml/loadbearing_25_times/"
     }
    },
    "11": {
     "clue": "A group of things close together — and the number of these habits you need before saying anything out loud (7)",
     "answer": "CLUSTER",
     "note": {
      "what": "The single most important idea in this puzzle. One tell is a coincidence. Three in the same paragraph is a machine. This is not a rule of thumb invented for comfort; it is what the measurements actually support.",
      "sounds": "“Let's delve into the intricate tapestry of this pivotal moment, which underscores a truly transformative shift.” Five tells, one sentence. That is a machine.",
      "human": "One 'delve' in an otherwise ordinary email is one word. Leave it.",
      "data": "Before ChatGPT these words appeared independently of one another. The statistical link between 'underscore' and 'pivotal' was 0.03 in 2022 and 0.45 by 2024; between 'underscore' and 'delve', 0.02 to 0.31. The words did not just get more common — they started travelling together.",
      "source": "Kousha & Thelwall",
      "url": "https://arxiv.org/abs/2509.09596"
     }
    },
    "14": {
     "clue": "A will, or a section of the Bible. Machines use it to mean plain 'proof' or 'example', usually followed by 'to human ingenuity' (9)",
     "answer": "TESTAMENT",
     "note": {
      "what": "False gravitas: a small claim dressed in ceremonial robes. The giveaway is the formula 'a testament to', which arrives whenever the machine wants to praise something without producing evidence.",
      "sounds": "“The bridge is a testament to Victorian engineering.”",
      "human": "“Victorian engineers built the bridge well.”",
      "data": "This belongs to a family of ready-made praise phrases — 'a testament to', 'a poignant reminder', 'stands as a symbol of' — that appear where a specific fact should be. If you cannot replace the phrase with a number or a name, nothing was said.",
      "source": null,
      "url": null
     }
    },
    "15": {
     "clue": "Adjective for a place that is busy, and the inseparable twin of 'vibrant' (8)",
     "answer": "BUSTLING",
     "note": {
      "what": "The pair 'vibrant and bustling' is the default setting for any location. If somewhere is described only by how busy it is, nobody looked at it — they looked at other descriptions of places like it.",
      "sounds": "“A bustling market in the heart of the old town.”",
      "human": "“The market takes over the square on Tuesdays and blocks the road.”",
      "data": "Absence of specifics is itself a tell. Machine descriptions rarely contain a proper noun, a price, a date, a name or a detail that could be checked — because the model has no memory of the place, only of how such places are usually described.",
      "source": null,
      "url": null
     }
    },
    "17": {
     "clue": "Seven-letter word for two things working better together than apart, and the most mocked term in business English (7)",
     "answer": "SYNERGY",
     "note": {
      "what": "The interesting fault is not that it is a cliche but that it names a result while hiding the mechanism. Nobody can dispute that combining two things produced extra value, because no figure was offered. Machines produce it freely for the same reason they produce 'ecosystem' and 'holistic': the training data is thick with press releases, and press releases are written to be unarguable.",
      "sounds": "“The merger will unlock powerful synergies across both organisations.”",
      "human": "“They'll share one warehouse and close the smaller one.”",
      "data": null,
      "source": null,
      "url": null
     }
    },
    "18": {
     "clue": "Poker word for the small unconscious habit that gives a player away — the term this puzzle uses for each of the verbal fingerprints in it (4)",
     "answer": "TELL",
     "note": {
      "what": "Start here, because everything else in the grid depends on it. Each answer is a habit, not a verdict: ordinary English words that machines happen to reach for far more often than people do. The word you are looking for names a suspicion, and a suspicion is not a finding. Accusing someone on the strength of one of these is how innocent people get in trouble.",
      "sounds": "“I can always tell.” — said with enormous confidence by almost everyone.",
      "human": "“Three of these turned up in one paragraph, so I asked her how she'd drafted it.”",
      "data": "Humans are terrible at this. Linguistics experts shown research abstracts identified the AI-written ones correctly only 38.9% of the time — worse than guessing, because they kept deciding machine text was human.",
      "source": "study summary",
      "url": "https://www.reddit.com/r/science/comments/16g2kpt/ai_vs_human_writing_experts_fooled_almost_62_of/"
     }
    },
    "19": {
     "clue": "A kingdom, borrowed to mean nothing more than 'area' or 'field'. One of the confirmed spike words (5)",
     "answer": "REALM",
     "note": {
      "what": "An empty container noun — an abstract vessel you can pour any topic into. Its relatives are 'landscape', 'sphere', 'domain', 'arena', 'frontier' and 'fabric'. They all imply territory and scale where there is only a subject.",
      "sounds": "“In the realm of education technology, change is constant.”",
      "human": "“Education technology changes fast.”",
      "data": "'Realm' sits on the shortlist of words that both jumped sharply in human scientific writing after 2020 and are provably over-used by ChatGPT compared with people — a list that also includes 'showcasing', 'boasts', 'intricacies', 'garnered' and 'groundbreaking'.",
      "source": "Juzek & Ward, Florida State",
      "url": "https://arxiv.org/html/2412.11385v1"
     }
    },
    "20": {
     "clue": "Adverb insisting on sincerity — something sincere people rarely need to announce (9)",
     "answer": "GENUINELY",
     "note": {
      "what": "An intensifier used to manufacture warmth. 'This is good' becomes 'this is genuinely good'. The extra word performs feeling rather than containing it, which is why it clusters with 'truly', 'really' and 'honestly'.",
      "sounds": "“This is a genuinely exciting development that I truly believe matters.”",
      "human": "“This is a big deal, and I think it will hold up.”",
      "data": "Related and worth knowing: performed candour. 'Let me be honest', 'truth be told', 'I'll be real with you' — announcing honesty instead of simply being direct. The announcement is the tell.",
      "source": null,
      "url": null
     }
    },
    "21": {
     "clue": "Eleven-letter adverb, usually preceded by 'more', asserting a ranking of significance that nobody has established (11)",
     "answer": "IMPORTANTLY",
     "note": {
      "what": "A promotion handed out with no committee. 'More importantly' claims a comparison has been made between two things and settled, when the writer has merely moved on. There is a caution attached to this whole family, though, and it is worth carrying into the rest of the puzzle: some of the phrases that spiked after 2022 are utterly bland ones, so a single flat signpost convicts nobody.",
      "sounds": "“More importantly, this underscores our ongoing commitment to excellence.”",
      "human": "“The bit that matters is the deadline. It moved to 3 October.”",
      "data": "In a study of 27.5 million medical records, 103 of 135 candidate AI-influenced terms cleared the statistical threshold in 2024 — but so did supposedly neutral control phrases such as 'further research' and 'aim to'. Some of the rise is machines and some is fashion.",
      "source": "Matsui, Perspectives on Medical Education",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12679996/"
     }
    },
    "23": {
     "clue": "Fourteen-letter adjective taken from the ceremony of digging the first sod for a new building, now applied to minor software updates (14)",
     "answer": "GROUNDBREAKING",
     "note": {
      "what": "The flagship of the breathless family: revolutionary, cutting-edge, innovative, game-changing, unprecedented. They inflate together and they cancel each other out, because a page on which everything is unprecedented has no way of telling you which part is. The reliable repair is a testable sentence — what it does, for whom, compared with what it replaced.",
      "sounds": "“Our groundbreaking new feature is a game-changer for productivity.”",
      "human": "“You can export to a spreadsheet now, which people have asked for since 2021.”",
      "data": "This one is on the verified focal-word list: it both rose sharply in human scientific writing between 2020 and 2024 and is over-produced by ChatGPT compared with human authors.",
      "source": "Juzek & Ward, Florida State",
      "url": "https://arxiv.org/html/2412.11385v1"
     }
    },
    "27": {
     "clue": "Two words (11 letters): the attribution that borrows a laboratory's authority while naming no laboratory, no date and no sample (11)",
     "answer": "STUDIESSHOW",
     "note": {
      "what": "The most consequential habit in this puzzle, because it is where fluent writing becomes misinformation. Five things are missing every time: who did the work, when, how many people were in it, what method was used, and what the authors said the limits were. Machines produce the phrase because the shape of a citation is easy to generate and an actual citation is not. Its family includes 'experts argue', 'research suggests' and 'industry reports indicate'.",
      "sounds": "“Studies show that this approach improves outcomes.”",
      "human": "“A 2019 trial of 240 patients in Leeds found a small improvement, and nobody has repeated it since.”",
      "data": "For comparison, here is what a real attribution looks like: Kousha and Thelwall, working across more than 2.4 million PubMed Central full texts, found the use of 'underscore' rising roughly 1,000% between 2022 and 2024. Named authors, named corpus, stated size, checkable claim.",
      "source": "Kousha & Thelwall",
      "url": "https://arxiv.org/abs/2509.09596"
     }
    },
    "29": {
     "clue": "Verb meaning to give someone authority. In practice the word that ends a thousand machine-written conclusions (7)",
     "answer": "EMPOWER",
     "note": {
      "what": "The sign-off verb. It appears in the last paragraph, aimed at the reader, promising agency without describing any. If a piece of writing finishes by empowering you to embrace something, ask who wrote it.",
      "sounds": "“By embracing these tools, you can empower yourself to thrive.”",
      "human": "“Try one of these for a fortnight and see if it helps.”",
      "data": "Endings are one of the most reliable places to look, because models are trained to resolve. Named patterns include the Resolution Closer ('the path forward is clear') and the Fortune Cookie Closer — a single wise-sounding line of universal scope that answers nothing.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "30": {
     "clue": "Straps for a horse or a climber, repurposed as a verb meaning to use something (7)",
     "answer": "HARNESS",
     "note": {
      "what": "A borrowed-physics word. You harness an ox or a waterfall — something with real pulling force. Applied to 'the power of data' or 'the potential of your team', the machinery is imaginary.",
      "sounds": "“Harness the power of your data to unlock new insights.”",
      "human": "“Look at your sales figures and you may spot something useful.”",
      "data": "This is the same fault as 'load-bearing', and it points at something deeper than word choice: machines routinely hand physical force and agency to things that have none. One programmer collected examples from code reviews — 'the lateral rides the index', 'the query hit 19 seconds', 'adoption moved out'.",
      "source": "Jesse Duffield, AI-isms go deeper",
      "url": "https://jesseduffield.com/AI-isms-go-deeper/"
     }
    }
   },
   "down": {
    "1": {
     "clue": "Verb meaning to brag. Machines use it to mean nothing more than 'has': the hotel ___ 47 rooms (6)",
     "answer": "BOASTS",
     "note": {
      "what": "Estate agents started this and models industrialised it. Note what has happened grammatically: a building is now doing the bragging, which is the same misplaced agency that makes 'load-bearing' and 'harness' odd. It is also on the strongest evidence list in the field, because it both rose sharply in human writing after 2020 and is provably over-produced by ChatGPT.",
      "sounds": "“The property boasts three bedrooms and a utility room.”",
      "human": "“Three bedrooms, and a utility room off the kitchen with the boiler in it.”",
      "data": "'Boasts' appears on the verified focal-word list — terms that spiked in human scientific writing between 2020 and 2024 and are also over-used by ChatGPT relative to human authors, alongside 'delve', 'showcasing', 'realm' and 'groundbreaking'.",
      "source": "Juzek & Ward, Florida State",
      "url": "https://arxiv.org/html/2412.11385v1"
     }
    },
    "2": {
     "clue": "Verb for opening something with a key, used on 'potential', which has no lock (6)",
     "answer": "UNLOCK",
     "note": {
      "what": "Borrowed physics again, in motivational form. Potential is not a door, insight is not behind a lock, and value is not in a safe. The metaphor is decoration pretending to be a mechanism.",
      "sounds": "“Unlock your team's full potential with our platform.”",
      "human": "“The scheduling tool saves our team about four hours a week.”",
      "data": "Its family: unlock, unleash, elevate, empower, supercharge, propel, catalyse. All movement, no direction — none of them tells you what actually happens or to whom. 'Unlocking' also appears on the corpus-verified list of AI-influenced words.",
      "source": "Matsui, Perspectives on Medical Education",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12679996/"
     }
    },
    "3": {
     "clue": "Adverb meaning without noise. Machines use it to make an ordinary fact sound like a secret you have just been let in on (7)",
     "answer": "QUIETLY",
     "note": {
      "what": "A magic adverb. It smuggles in significance for nothing: 'the app quietly became essential.' Quietly compared with what? Nothing was ever loud. Delete the word and no information is lost, which is the test.",
      "sounds": "“The company has quietly become one of the biggest landlords in the country.”",
      "human": "“The company owns 40,000 homes and almost nobody has heard of it.”",
      "data": "Its relatives are 'deeply', 'genuinely', 'truly', 'fundamentally', 'remarkably' and 'arguably'. Each performs an attitude the writer does not have to justify. Strip all the adverbs from a suspect paragraph and see how much of it survives.",
      "source": null,
      "url": null
     }
    },
    "4": {
     "clue": "Word for a stretch of countryside, bolted onto any industry: 'the current ___ of technology' (9)",
     "answer": "LANDSCAPE",
     "note": {
      "what": "Terrain language used to make a subject sound vast and shifting. It implies you are about to be told about complexity, but it is almost always removable: the sentence means the same without it.",
      "sounds": "“The evolving landscape of digital marketing presents new challenges.”",
      "human": "“Digital marketing keeps changing.”",
      "data": "Try the deletion test on this one. 'The current landscape of X' and 'X' carry identical information, which is the definition of filler — words that occupy space without adding meaning.",
      "source": null,
      "url": null
     }
    },
    "5": {
     "clue": "Verb meaning to dig into a subject. The most heavily measured AI word in existence — it appears in scientific writing about 28 times more often than it used to (5)",
     "answer": "DELVE",
     "note": {
      "what": "Before 2022 this was a rare, slightly literary word: you delved into an archive or a drawer. Chatbots use it as the ordinary word for 'look at', because the humans paid to rate early AI answers consistently preferred the fancier-sounding option, and that preference got baked into the model.",
      "sounds": "“In this article we delve into the intricacies of remote work.”",
      "human": "“This article looks at remote work.”",
      "data": "Across 15.1 million medical abstracts, 'delves' appeared 28 times more often in 2024 than the pre-ChatGPT trend predicted. One study measured a 6,697% rise between 2020 and 2024, and found ChatGPT-3.5 using 'delves' roughly 570 times more often than human authors did.",
      "source": "Kobak et al., Science Advances",
      "url": "https://www.science.org/doi/10.1126/sciadv.adt3813"
     }
    },
    "7": {
     "clue": "A woven wall hanging. Machines drape this one over culture, history and 'the human experience' whenever they want to sound profound (8)",
     "answer": "TAPESTRY",
     "note": {
      "what": "The classic ornate noun for a simple idea. A tapestry is a specific object made of thread; used as a metaphor for society it says only 'lots of different things', which is why it can be dropped from any sentence without loss.",
      "sounds": "“Immigration is part of the rich tapestry of British life.”",
      "human": "“Britain has always had immigrants.”",
      "data": "Not folklore — 'tapestry' cleared the statistical threshold for AI-influenced vocabulary in a study of 27.5 million medical records, alongside 'unlocking'. Watch especially for the fixed phrase 'rich tapestry', which is almost never how a person describes anything.",
      "source": "Matsui, Perspectives on Medical Education",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12679996/"
     }
    },
    "8": {
     "clue": "Verb meaning to emphasise or draw attention to. Rose roughly 1,000% in academic writing after 2022, and now travels in a pack with 'delve' and 'pivotal' (10)",
     "answer": "UNDERSCORE",
     "note": {
      "what": "A perfectly good word that machines reach for instead of 'shows', 'proves' or 'means'. It belongs to a family of what you might call significance verbs — underscores, highlights, demonstrates, exemplifies, showcases — all used to avoid the plain word 'is'.",
      "sounds": "“These findings underscore the importance of early intervention.”",
      "human": "“This shows early treatment matters.”",
      "data": "Use of 'underscore' rose about 1,000% between 2022 and 2024. The number of papers using it six or more times rose by over 10,000% between 2022 and 2025 — which is the real tell: not the word, but the repetition.",
      "source": "Kousha & Thelwall",
      "url": "https://arxiv.org/abs/2509.09596"
     }
    },
    "9": {
     "clue": "Hyphenated term from physics (8 letters) for the interval in which a decaying substance loses 50% of itself — also what befalls a famous machine word once the internet starts mocking it (8)",
     "answer": "HALFLIFE",
     "note": {
      "what": "Every answer in this grid is perishable. The moment a word is publicly named as a robot word, two things happen: people avoid it, and model-makers tune it down. What survives are the tells nobody bothered to meme. That is why a puzzle like this needs redoing every couple of years, and why the absence of 'delve' from a document proves absolutely nothing about who wrote it.",
      "sounds": "“Let us delve into the intricacies of…” — a sentence that aged faster in 2024 than any other in English.",
      "human": "The same email a year later, with 'delve' quietly swapped for 'look at' and every other habit left exactly where it was.",
      "data": "Measured across 1.29 million arXiv abstracts: 'delve' and 'showcasing' peaked between January and March 2024 and started falling from April, immediately after researchers named them in public. 'Significant' and 'additionally' carried on climbing, because nobody made a joke about them.",
      "source": "Human–LLM Coevolution",
      "url": "https://arxiv.org/html/2502.09606v2"
     }
    },
    "12": {
     "clue": "Adverb used to intensify emotions the writer does not actually have — '___ concerned', '___ committed', '___ regret' (6)",
     "answer": "DEEPLY",
     "note": {
      "what": "This is the institutional feeling word, and it is worth learning because it dominates apologies, statements and condolence emails. Nothing about it can be checked: an organisation cannot be shallowly committed, so the adverb sets no bar. The useful question is not whether the sentiment is sincere but who is supposed to be having it — usually a company, a council or a brand, none of which can feel anything.",
      "sounds": "“We are deeply committed to your satisfaction and deeply value your feedback.”",
      "human": "“We got this wrong. Your refund goes out on Friday and I've stopped the direct debit.”",
      "data": null,
      "source": null,
      "url": null
     }
    },
    "13": {
     "clue": "Adjective meaning full of energy, applied to every city, market and community on earth (7)",
     "answer": "VIBRANT",
     "note": {
      "what": "A travel-brochure word. It means the writer has not been there. A person names the specific street, the smell, the price of the coffee; a machine reaches for the energy level, because that is what descriptions of places statistically contain.",
      "sounds": "“The vibrant city of Bristol boasts a bustling harbour.”",
      "human": "“Bristol's harbour is full of boats and about six competing coffee stands.”",
      "data": "The brochure family — vibrant, bustling, nestled, picturesque, charming, breathtaking, renowned, a hidden gem, in the heart of — clusters so tightly that finding three of them in a paragraph is close to conclusive. 'Boasts' is on the verified spike list.",
      "source": "Juzek & Ward, Florida State",
      "url": "https://arxiv.org/html/2412.11385v1"
     }
    },
    "16": {
     "clue": "Borrowed from finance and mechanics, where it means gaining force from a fulcrum. Three syllables standing in for the one-syllable word 'use' (8)",
     "answer": "LEVERAGE",
     "note": {
      "what": "Corporate vocabulary that machines picked up wholesale. It belongs with 'utilise', 'harness' and 'operationalise' — a family whose only function is to make a sentence sound more expensive than it is.",
      "sounds": "“We leverage AI to optimise workflows.”",
      "human": "“We use AI to speed up scheduling.”",
      "data": "Useful editing habit: replace it with 'use' and see whether the meaning changes. It never does. If it never does, the longer word was doing no work — the same test that catches 'load-bearing'.",
      "source": null,
      "url": null
     }
    },
    "22": {
     "clue": "Adjective meaning sturdy, applied indiscriminately to frameworks, findings, systems and debate (6)",
     "answer": "ROBUST",
     "note": {
      "what": "Vague strength. It signals that you should feel reassured while offering no measurement. Machines use it because it reads as technical and is almost impossible to contradict.",
      "sounds": "“We have implemented robust safeguards and a robust review process.”",
      "human": "“Two people check every file, and we keep a log for a year.”",
      "data": "Watch for the same adjective twice in one sentence, as in the example. Human writers instinctively vary; models reach for the highest-probability word again and again, which is why repetition within a paragraph is a stronger signal than any single word.",
      "source": null,
      "url": null
     }
    },
    "24": {
     "clue": "Adjective for wealth or strong flavour, welded by machines to 'tapestry', 'history' and 'cultural heritage' (4)",
     "answer": "RICH",
     "note": {
      "what": "Worth an entry of its own because it teaches how the machinery works. Models do not choose words, they choose likely neighbours, so certain pairs fuse: this adjective with tapestry, 'vibrant' with community, 'stark' with reminder, 'testament' with ingenuity. Human writers break their own pairings by accident. A sentence in which every adjective is the one you would have guessed is the real signal, and it survives even when the individual words look innocent.",
      "sounds": "“Our school celebrates a rich tapestry of cultural heritage and a rich history of excellence.”",
      "human": "“The school opened in 1908. Just under half the children speak Punjabi at home.”",
      "data": null,
      "source": null,
      "url": null
     }
    },
    "25": {
     "clue": "Seven-letter formal verb whose entire purpose is to be longer than 'use' (7)",
     "answer": "UTILISE",
     "note": {
      "what": "Here is the clearest evidence anywhere of why machines write like this, and it is not because they were trained on management consultants. Models are tuned by showing paid raters two answers and keeping whichever they prefer. Raters preferred the version that sounded educated, so the longer word won thousands of small contests and became the default. The tic was not learned from the web; it was rewarded into place afterwards.",
      "sounds": "“Please utilise the attached template to facilitate the process.”",
      "human": "“Use the form attached. It takes two minutes.”",
      "data": "The causal test: an untuned Llama 2-Base model was about equally surprised by human and AI text (entropy 1.616 against 1.633). Once tuned on human ratings, Llama 2-Chat found AI text containing these words far less surprising (0.886) than human text (1.051) — the fingerprint of raters' taste being trained in.",
      "source": "Juzek & Ward, Florida State",
      "url": "https://arxiv.org/html/2412.11385v1"
     }
    },
    "26": {
     "clue": "Cosy verb for how a village sits in a valley. In machine prose, nothing is ever merely located (7)",
     "answer": "NESTLED",
     "note": {
      "what": "Geography becomes affectionate. Towns are nestled, cottages are tucked away, restaurants are hidden gems. It is a small, harmless, extremely consistent habit — which is what makes it useful.",
      "sounds": "“Nestled in the rolling hills of Devon lies a charming village.”",
      "human": "“The village is twenty minutes off the A38, down a lane with no passing places.”",
      "data": "Also watch the sentence shape here, not just the words: starting with the scene-setting phrase and putting the subject at the end ('Nestled in X lies Y') is a construction models produce far more often than people do.",
      "source": null,
      "url": null
     }
    },
    "28": {
     "clue": "Organ that pumps blood; in machine-written travel copy, every cafe, market and hotel stands 'in the ___ of' somewhere (5)",
     "answer": "HEART",
     "note": {
      "what": "A location that locates nothing. Every business in a town cannot be central, and the phrase is chosen precisely because it avoids the street name the writer does not know. It is the clearest case in this grid of vagueness doing real work: a human describing a place reaches for the corner, the number of the bus, the noise from the depot next door.",
      "sounds": "“In the heart of the old town, this charming cafe is a hidden gem.”",
      "human": "“The cafe is on Nun Street, opposite the bus stop, and shuts at two.”",
      "data": null,
      "source": null,
      "url": null
     }
    }
   }
  }
 },
 {
  "id": "p2",
  "issue": "No. 2",
  "title": "The Shapes",
  "blurb": "The sentence patterns. Not what the words are, but what shape they keep making — the false contrasts, the lists of three, the questions nobody asked, the tidy closing lines that resolve nothing.",
  "heroes": [
   "NEGATIVEPARALLELISM",
   "EMDASH",
   "TRICOLON",
   "THEREALITY",
   "FRAGMENT",
   "TWAIN"
  ],
  "grid": [
   "THEKICKER...F.................",
   "R...........A.....PERPLEXITY..",
   "I...........L.......H.....H...",
   "C......W....S.B.....E.B..HEDGE",
   "O.....THREE.E.U.....T.I...T...",
   "L......C...ABSTRACTNOUN...R...",
   "O......L..F.A.H.....R.A...U.A.",
   "NEGATIVEPARALLELISM.I.R...TYPO",
   ".M..H..F..A.A.R.....C.Y...H.H.",
   ".D..E..T..G.N.E.W..CATCH.C..O.",
   ".A..R.L...M.C.S.H...L.O..I..R.",
   ".S.HERESTHEBESTPART.SENSORY.I.",
   ".H..A.T...N...H.T...E.T..C..S.",
   "....L.T.ANTITHESIS..L.R..U..M.",
   "....I.H.......T.F...F.A..L....",
   "....TWAIN.....H....FALSERANGE.",
   "....Y.T....F..I.....N.T..R.E..",
   "......S....O..N.O.JUST.....N..",
   "..D...I....R..G.R...W......E..",
   "..E.S.N....T....D...E..H.B.R.A",
   "..T.T.K..C.U....I...RESOLUTION",
   "DRAMATICCOUNTDOWN......O.R.C.A",
   "I.C.C.N..N.E..B.A.U....K.S.O.P",
   "C.H.C....C.C..S.L.N......T.P.H",
   "K.M.A....L.O..E...IMPERATIVE.O",
   "I.E.T....U.O..R...F......N.N.R",
   "N.N.O....S.K..VICTORIAN..E.E.A",
   "S.T..PARTICIPLE...R......S.R..",
   "O........O.E..R...M......S....",
   "N........N...................."
  ],
  "clues": {
   "across": {
    "1": {
     "clue": "Two words (9 letters) promising that the best or worst part is still coming, generally before a fairly ordinary number (9)",
     "answer": "THEKICKER",
     "note": {
      "what": "The phrase does the work a good fact would have done. It instructs the reader to be startled by whatever follows, which means the writer either does not trust the material or has not checked whether it is startling. Its relatives run to a dozen: “here's the deal”, “here's where it gets interesting”, “here's what most people miss”, “here's the uncomfortable part”, “and it gets worse”, “but wait”.",
      "sounds": "“Costs rose 4% last year. And here's the kicker: nobody noticed.”",
      "human": "“Costs rose 4% and it took eleven months for anyone to raise it.”",
      "data": "Deletion test again, with a twist: cut the announcement and see whether the following sentence still lands. If it does, the announcement was stealing its credit; if it does not, the sentence was never a kicker.",
      "source": null,
      "url": null
     }
    },
    "3": {
     "clue": "Statistical measure of how surprising the next word in a sentence is. Machines keep it low, always choosing the safest option (10)",
     "answer": "PERPLEXITY",
     "note": {
      "what": "This is the engine underneath most of the other tells. A model picks the most probable next word, so its prose is smooth, predictable and slightly generic — it never reaches for the odd word, the wrong-but-better word, or the private joke.",
      "sounds": "“In today's rapidly evolving digital landscape, businesses must adapt to remain competitive.” Every word is the most likely next word.",
      "human": "“Everything's changed since Christmas and half our suppliers have vanished.”",
      "data": "It is also the source of the cruellest false positive. Detection software flags low perplexity as machine-like — but simple, careful, predictable English is exactly what people write when English is not their first language. The software is not detecting AI. It is detecting plainness.",
      "source": "Liang et al., Patterns",
      "url": "https://www.sciencedirect.com/science/article/pii/S2666389923001307"
     }
    },
    "9": {
     "clue": "Garden-boundary word, also the name for a qualifying caveat bolted to the front of a confident generalisation: “While individual cases vary, the evidence consistently suggests …” (5)",
     "answer": "HEDGE",
     "note": {
      "what": "The caveat performs nuance and the second half withdraws it. Nothing is specified: not the evidence, not the exception, not the degree of confidence, not who is affected. Models produce the pair because being simultaneously careful and assertive is what raters reward, and because a real limitation would require a real number. Siblings: “it is worth noting”, “while not universal”, “though results may differ”, “generally speaking”, “in most cases”.",
      "sounds": "“While every school is different, research consistently shows that parental engagement is key.”",
      "human": "“At this school, the children whose parents came to the October evening did better in the March tests. We do not know why.”",
      "data": "Catalogued as one of twelve named cadence patterns, each documented with a machine example beside a human rewrite. The hedge-assertion pair is the one non-specialists find hardest to see, because it looks like good manners.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "10": {
     "clue": "The number of these habits that should appear together before you say anything out loud to anyone (5)",
     "answer": "THREE",
     "note": {
      "what": "The whole discipline of this puzzle sits in one number. A single dash, one tidy triad or one abstract opener is ordinary writing. The published field check asks for three or more signals inside a few hundred words, and it lists what counts: a stock word out of context, a denial-then-upgrade sentence, a triad, additive dashes, a summary wrap, uniform sentence length, promotional adjectives on a dull subject, a fawning opener, a demonstrative with nothing to refer back to, nested bold bullets where prose would do, no proper noun anywhere, a metaphor that does not quite work.",
      "sounds": "“In today's evolving landscape, this isn't just a change — it's a transformation. The result? Growth.” Four signals, one sentence.",
      "human": "“We are moving the deadline to the 12th because the print quote came back late.”",
      "data": "Counting beats reading, and it protects people. Detection tools that judge single documents are wrong often enough to matter: one published false-positive rate of 0.51% works out at roughly 500 wrong accusations a year at a university handling 100,000 papers.",
      "source": "Matthew Vollmer, A Field Guide to AI Tells",
      "url": "https://matthewvollmer.substack.com/p/i-asked-the-machine-to-tell-on-itself"
     }
    },
    "11": {
     "clue": "Two words (12 letters) for a subject that cannot act but is handed a verb anyway: “The decision carries weight.” (12)",
     "answer": "ABSTRACTNOUN",
     "note": {
      "what": "Ideas do not carry, drive, transform or demand. When they are given those verbs the sentence sounds forceful while the actual cause — a person, a committee, a deadline — goes unnamed. The wider fault is misplaced agency, which shows up in technical writing too: a query that “hit” nineteen seconds when it took nineteen seconds, adoption that “moved out”, a lateral that “rides” an index.",
      "sounds": "“This realisation transformed how the team approached the problem.”",
      "human": "“After Dan pointed out the duplicate records, we stopped merging the two spreadsheets by hand.”",
      "data": "One engineer's collection of these misfires suggests, as speculation rather than finding, that training which rewards the active voice produces a kind of flat world where objects are as agentic as people. No frequency data exists for the habit; it is documented by example only.",
      "source": "Jesse Duffield",
      "url": "https://jesseduffield.com/AI-isms-go-deeper/"
     }
    },
    "14": {
     "clue": "The formal research name (19 letters) for the 'it's not X — it's Y' sentence: the single most cited tell in machine writing (19)",
     "answer": "NEGATIVEPARALLELISM",
     "note": {
      "what": "This is the modern research term for the tic; 'antithesis' is the ancient name for the innocent version. Machines produce it about three times as often as people because opening with a negation is cheap — it buys a beat of fluent, confident text before any claim has to be made. It performs insight without incurring the cost of having any.",
      "sounds": "“This isn't a technology problem — it's a trust problem.” Variants: 'not just X, but Y'; 'not because X, but because Y'; 'the question isn't X, the question is Y'.",
      "human": "“People don't trust it. That's the actual obstacle.”",
      "data": "The best evidence in the whole field. In a 24-billion-word news corpus, 'not just X, but Y' rose 45% between 2015 and 2025 — while 'not only X, but Y', which means exactly the same thing, rose about 1%. Two identical constructions, one of which suddenly took off. Meanwhile its use in corporate communications more than quadrupled from 2023 to 2025, and variants appeared in roughly 6% of messages in a large leaked set of real ChatGPT conversations.",
      "source": "The Atlantic on negative parallelism",
      "url": "https://www.theatlantic.com/technology/2026/07/ai-chatbot-writing-tic-negative-parallelism/687892/"
     }
    },
    "17": {
     "clue": "Small slip of the fingers. Two thousand words of informal writing without a single one is a weak signal — and a cruel thing to accuse anyone over (4)",
     "answer": "TYPO",
     "note": {
      "what": "Real informal writing carries traces of being made: a repeated word, a sentence that changes direction halfway, a comma in the wrong place, an abandoned clause. Machine text has none, because there was no moment of composition to leave a mark. The same applies to unwavering house style across a long document, where a person's capitalisation and list punctuation usually drift.",
      "sounds": "Two thousand words of chatty prose with flawless commas, consistent capitalisation and not one repeated word.",
      "human": "“Sorry — sent that too fast, I meant Thursday not Tuesday.”",
      "data": "Take this one gently. Linguistics experts shown research abstracts picked out the machine-written ones only 38.9% of the time, worse than guessing, and they erred towards calling machine text human. Careful writers exist, and a clean document proves nothing on its own.",
      "source": "study summary",
      "url": "https://www.reddit.com/r/science/comments/16g2kpt/ai_vs_human_writing_experts_fooled_almost_62_of/"
     }
    },
    "19": {
     "clue": "The hidden snag or condition. Posed as a one-word question and instantly waved away: “The ___? There isn't one.” (5)",
     "answer": "CATCH",
     "note": {
      "what": "The question-fragment template takes interchangeable nouns, and this is the most theatrical of them: it raises a doubt purely so it can be dismissed in three words. A person with nothing to hide states the terms. A person with something to hide does not raise the subject at all, which is why the reassurance is so much less reassuring than it sounds.",
      "sounds": "“The catch? There isn't one. It's completely free for the first year.”",
      "human": "“It's free until next August, then £4 a month unless you cancel.”",
      "data": "The nouns that fit the same slot are worth memorising: reality, truth, result, problem, solution, difference, answer, key, best part. Seeing the shape twice in one piece is one of the three signals you need.",
      "source": null,
      "url": null
     }
    },
    "22": {
     "clue": "Four words (16 letters) announcing that something delightful is coming, usually followed by 'it's free' (16)",
     "answer": "HERESTHEBESTPART",
     "note": {
      "what": "False suspense in its most transparent form. If a benefit is genuinely the best part, stating the benefit is enough — the announcement adds nothing except a beat of anticipation the machine has no way of earning.",
      "sounds": "“Here's the best part: you don't need to install anything.”",
      "human": "“It runs in the browser, so there's nothing to install.”",
      "data": "Sits between the false-suspense family and outright engagement bait — 'let that sink in', 'read that again', 'unpopular opinion', 'not sure who needs to hear this'. All of them are instructions to the reader about how to feel.",
      "source": null,
      "url": null
     }
    },
    "23": {
     "clue": "Adjective for detail about smell, light and sound, dropped in to fake a scene: “The aroma of fresh coffee filled the room.” (7)",
     "answer": "SENSORY",
     "note": {
      "what": "Descriptive detail earns its place when it is specific, surprising or consequential. The machine version is a stock backdrop: streaming sunlight, distant traffic, the smell of rain, the hum of a laptop. Nothing in it could only have happened in that room on that day, which is precisely what a person's memory supplies without being asked.",
      "sounds": "“Sunlight streamed through the window as the team gathered, the aroma of fresh coffee filling the air.”",
      "human": "“We met in the room with the broken blind, so half the table could not see the screen.”",
      "data": "Ask whether the detail could be swapped into any other scene without adjustment. Real specifics resist relocation; a detail that fits everywhere was chosen by probability rather than recollection.",
      "source": null,
      "url": null
     }
    },
    "24": {
     "clue": "The 2,000-year-old rhetorical name for setting one thing against another — the 'it's not X, it's Y' move that is now the single most cited AI tell (10)",
     "answer": "ANTITHESIS",
     "note": {
      "what": "The shape is ancient and completely innocent. 'The fault, dear Brutus, is not in our stars.' 'Winning isn't everything, it's the only thing.' 'It's not delivery, it's DiGiorno.' Only the frequency is guilty. Machines use it because opening with a negation buys a beat of fluent text before committing to a claim — it performs insight without having any.",
      "sounds": "“This isn't a technology problem. It's a trust problem.” Variants: 'not just X, but Y'; 'the question isn't X, the question is Y'; 'Not a bug. Not a feature. A design flaw.'",
      "human": "“People don't trust it, and that's the real obstacle.”",
      "data": "Machines use this roughly three times as often as people. Its appearance in corporate communications more than quadrupled between 2023 and 2025. Best evidence of all: in a 24-billion-word news corpus, 'not just X, but Y' rose 45% over a decade while its identical twin 'not only X, but Y' rose about 1% — two phrases that mean the same thing, one of which suddenly took off.",
      "source": "The Atlantic on negative parallelism",
      "url": "https://www.theatlantic.com/technology/2026/07/ai-chatbot-writing-tic-negative-parallelism/687892/"
     }
    },
    "25": {
     "clue": "American author of Huckleberry Finn, whose punctuation habits would fail every AI detector ever built (5)",
     "answer": "TWAIN",
     "note": {
      "what": "He is in this puzzle as a warning. Huckleberry Finn contains 10.13 em dashes per thousand words; GPT-4.1 produces 10.62. On the internet's favourite test they are indistinguishable. Emily Dickinson built an entire style out of dashes and would score worse than both.",
      "sounds": "Any dash-heavy human writer, accused on the basis of punctuation alone.",
      "human": "Nothing. Leave them alone.",
      "data": "This is the cheapest possible inoculation against false accusations, and worth remembering before you say anything to a colleague, a student or a child. Historically, dash use in English peaked around 1860 and has been declining ever since — so an unusually dashy writer may simply be old-fashioned.",
      "source": "Slop Detector's em-dash measurement",
      "url": "https://slopdetector.org/blog/em-dash-ai-tell-data"
     }
    },
    "26": {
     "clue": "Two words (10 letters) for a bogus span whose two ends are not ends of anything: “from innovation to cultural transformation” (10)",
     "answer": "FALSERANGE",
     "note": {
      "what": "A real range has a scale: from Monday to Friday, from ten pounds to fifty. The machine version borrows the grammar of a spectrum and fills it with two abstractions that do not sit on one, so it sounds comprehensive while listing two things. The habit belongs to the same family as ornate container nouns, where the sentence describes a shape rather than a fact.",
      "sounds": "“Our work spans everything from grassroots engagement to systemic change.”",
      "human": "“We run a Tuesday drop-in and we lobbied the county council twice last year.”",
      "data": "Deletion test: replace “from A to B” with “A and B”. If the sentence loses nothing but a little grandeur, there was never a range — and if the two items would not fit on the same axis, no rewrite will save it.",
      "source": null,
      "url": null
     }
    },
    "30": {
     "clue": "Small four-letter adverb that turns the most cited machine sentence into its most cited variant: “not ___ X, but Y” (4)",
     "answer": "JUST",
     "note": {
      "what": "One word is doing a surprising amount of work here. Inserting it converts an outright denial into a modest upgrade, which is safer and therefore commoner: the model no longer has to reject X, only to promise something better. This variant is why the tell is so often missed by people watching for the plain negation.",
      "sounds": "“This is not just a software update, but a new way of working.”",
      "human": "“The update changes how the rota is approved. Everything else stays.”",
      "data": "The cleanest experiment in the whole subject rests on this variant: in a 24-billion-word news corpus it rose from about 94 to over 136 instances per million words between 2015 and 2025, a 45% climb, while its grammatical twin “not only X, but Y” moved roughly 1%.",
      "source": "Women Writing About AI",
      "url": "https://womenwritinboutai.substack.com/p/who-decides-what-human-writing-sounds"
     }
    },
    "37": {
     "clue": "Word for the point where a story's tension is settled — also the closer that declares everything settled without settling anything: “The path forward is clear.” (10)",
     "answer": "RESOLUTION",
     "note": {
      "what": "Endings are hard, so the machine borrows the shape of one. Confidence is asserted, a winner is predicted in the abstract, and no decision, risk or next step is named. It pairs with the signposted wrap-up and with vague optimism after a list of difficulties, which is why so much machine writing finishes on a chord rather than a fact.",
      "sounds": "“The path forward is clear. The organisations that embrace this shift will thrive.”",
      "human": "“We have to decide by 3 September or the funding goes back. I think we should take it.”",
      "data": "A well-circulated field guide lists an “In summary” wrap among the dozen signals worth counting, alongside uniform sentence length and the absence of any proper noun. A closing paragraph that names nobody and commits to nothing is doing the same job as a curtain.",
      "source": "Matthew Vollmer, A Field Guide to AI Tells",
      "url": "https://matthewvollmer.substack.com/p/i-asked-the-machine-to-tell-on-itself"
     }
    },
    "38": {
     "clue": "Name (17 letters) for the 'Not X. Not Y. Just Z.' pattern — two things denied before the real point is unveiled (17)",
     "answer": "DRAMATICCOUNTDOWN",
     "note": {
      "what": "An escalation of negative parallelism, built for maximum theatre. Each denial narrows the field, so by the time the answer arrives it feels like a discovery. Nothing has actually been established; the reader has simply been made to wait.",
      "sounds": "“Not a bug. Not a feature. A fundamental design flaw.”",
      "human": "“It's a design flaw, and it's been there since the first version.”",
      "data": "Almost always paired with sentence fragments as paragraphs, which is why the two tells travel together. Spotting the pair — denial stack plus one-line paragraphs — is more reliable than spotting either alone.",
      "source": null,
      "url": null
     }
    },
    "41": {
     "clue": "Grammatical mood used for commands. It is the third beat of the motivational three-step: short claim, expansion, instruction (10)",
     "answer": "IMPERATIVE",
     "note": {
      "what": "The pattern runs: a mild truism, a line of encouragement, then an order. Nobody has asked to be coached, which is what makes the ending jar in a work email or a school newsletter. Because a model has no relationship with the reader, the instruction is always generic, and often faintly bossy: “start today”, “do the work”, “choose growth”, “show up for yourself”.",
      "sounds": "“Most people wait for permission. You don't need it. Start now.”",
      "human": "“If you want the training budget, email Priya before the 14th. She signs it off.”",
      "data": "Motivational cadence sits on the published list of twelve cadence patterns. The distinguishing feature is that the imperative names no specific action, no deadline and no person to contact — the three things a real instruction always carries.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "42": {
     "clue": "Adjective for the nineteenth-century era whose printed books, hoovered up as training data, may be the real reason for the dash habit (9)",
     "answer": "VICTORIAN",
     "note": {
      "what": "This is the least dramatic and probably the best explanation of the most famous tell. Models are trained heavily on out-of-copyright print, and that prose punctuates like the century it came from, so the model's dash rate is partly an inherited accent. It also means the tell has nothing to do with intelligence, personality or deception.",
      "sounds": "Prose punctuated like an 1890s novel, appearing in a message about car park permits.",
      "human": "The same message with commas and full stops, which is how most people write now.",
      "data": "Em-dash use in English peaked around 0.35% of characters in 1860 and now sits near 0.25%, and the late-1800s and early-1900s books that dominate training corpora use roughly 30% more dashes than contemporary prose. One Nigerian English corpus measured 0.022%, about ten times below the general English rate, which shows how much the baseline moves between varieties of the language.",
      "source": "Sean Goedecke on em dashes",
      "url": "https://www.seangoedecke.com/em-dashes/"
     }
    },
    "43": {
     "clue": "Grammatical name for an -ing verb form. Machines trail whole clauses of them off the end of sentences to imply importance: “highlighting its significance” (10)",
     "answer": "PARTICIPLE",
     "note": {
      "what": "This is the grammar of a summary written by someone who has not read the thing. The clause asserts that something matters while naming no actor, no mechanism and no consequence, and it can be deleted without loss in almost every case. Watch for the stock set: reflecting broader trends, underscoring the need, showcasing its potential, contributing to the development of, paving the way for.",
      "sounds": "“The council approved the scheme, reflecting a broader shift towards sustainable transport and underscoring its commitment to residents.”",
      "human": "“The council approved the scheme by seven votes to four. Two councillors who voted against cited the loss of parking on Mill Road.”",
      "data": "Several of these participles are measured outliers in their own right: across 15.1 million medical abstracts, “showcasing” ran at 10.7 times its expected 2024 rate and “underscoring” appears on the verified list of words that both spiked in human writing and are over-produced by ChatGPT.",
      "source": "Kobak et al., Science Advances",
      "url": "https://www.science.org/doi/10.1126/sciadv.adt3813"
     }
    }
   },
   "down": {
    "1": {
     "clue": "The formal name for a list of exactly three items. One is good writing; four in a row is a machine keeping time (8)",
     "answer": "TRICOLON",
     "note": {
      "what": "Three-part lists are genuinely powerful — 'friends, Romans, countrymen'. The tell is not their existence but their regularity. Models fall into the rhythm every paragraph, because three-item lists are statistically the most common shape in persuasive prose.",
      "sounds": "“It's about speed, scale and simplicity — clarity, focus and momentum — people, process and product.”",
      "human": "“It has to be fast. That's the only thing that matters here.”",
      "data": "Try counting instead of reading. Human paragraphs are lumpy: one list of two, one of five, one sentence with no list at all. If every paragraph in a piece contains a group of three, you are looking at a metronome rather than a mind.",
      "source": null,
      "url": null
     }
    },
    "2": {
     "clue": "Two words (12 letters) for giving every side equal weight regardless of what the evidence actually says (12)",
     "answer": "FALSEBALANCE",
     "note": {
      "what": "Even-handedness is a safe output, so a model will set a well-supported finding beside a fringe objection and award them the same paragraph length. The tell is the refusal to conclude: “both perspectives have merit”, “reasonable people disagree”, “the answer likely lies somewhere in between”. Real analysis weighs and then says which way it came down.",
      "sounds": "“While some argue the bypass will reduce congestion, others believe it will not. Both views merit consideration.”",
      "human": "“The traffic modelling says congestion drops 8%. The objectors dispute the modelling but have not produced any of their own.”",
      "data": "Look for the missing verdict. A person who has read the material usually cannot resist telling you which side they found more convincing, and an even split across every contested point is a stylistic decision rather than a finding.",
      "source": null,
      "url": null
     }
    },
    "4": {
     "clue": "Name (20 letters) for posing a question no one asked and answering it instantly: 'The result? Devastating.' (20)",
     "answer": "RHETORICALSELFANSWER",
     "note": {
      "what": "The shortest way to fake momentum. A real writer earns a reveal by building to it; this device skips the building and keeps the reveal. Because it is so cheap, models produce it constantly, and it is the easiest tell to teach someone in one sentence.",
      "sounds": "“The catch? There isn't one. The best part? It's free.”",
      "human": "“There's no catch, and it costs nothing.”",
      "data": "Full sentences are the fix and the test: if you can restore the question fragment to an ordinary sentence with no loss ('the result was devastating'), the fragment was decoration. That single rewrite removes a large fraction of machine cadence.",
      "source": null,
      "url": null
     }
    },
    "5": {
     "clue": "Two words (8 letters) used as a question fragment implying a profound revelation, which then turns out to be obvious (8)",
     "answer": "THETRUTH",
     "note": {
      "what": "The same device as 'the reality?', with added moral weight. It positions the writer as someone about to say the unsayable, and then says something everyone already thinks.",
      "sounds": "“The truth? Nobody actually knows.”",
      "human": "“Nobody knows, and the people claiming otherwise are guessing.”",
      "data": "Worth pairing with performed candour — 'let me be honest', 'truth be told', 'I'll be real with you'. Announcing honesty is not the same as being direct, and the announcement is the part a machine adds.",
      "source": null,
      "url": null
     }
    },
    "6": {
     "clue": "Grammarians' label (7) for the construction that parks an empty question-word phrase in front of the real subject: “What this moment demands is bold action.” (7)",
     "answer": "WHCLEFT",
     "note": {
      "what": "The subject is delayed so that its arrival feels like a verdict. It is a genuine device for emphasis, used sparingly by speechwriters; a model reaches for it because the opening words are almost free to generate and the delay does the rhetorical work. Cousins include “what matters here is …”, “the reason is simple …” and “what we are really talking about is …”.",
      "sounds": "“What this organisation needs is not another review, but genuine accountability.”",
      "human": "“We do not need another review. The last one is still in a drawer.”",
      "data": "The unwinding test: move the subject to the front and see what survives. “This moment demands bold action” is the same claim with four fewer words, which shows the original was staging rather than saying.",
      "source": null,
      "url": null
     }
    },
    "7": {
     "clue": "Four words (16 letters) promising a revelation, then delivering something that needed no build-up at all (16)",
     "answer": "BUTHERESTHETHING",
     "note": {
      "what": "Widely named as one of the biggest tells in casual writing. It manufactures a turn in the argument — a sudden contrast, a hidden truth — and then produces an ordinary observation. The suspense is bought on credit and never repaid.",
      "sounds": "“Everyone talks about productivity. But here's the thing: it's not about tools.”",
      "human": "“Most productivity advice ignores the fact that you have no control over your calendar.”",
      "data": "Its family runs to well over a dozen: 'here's the kicker', 'here's the deal', 'here's what most people miss', 'here's where it gets interesting', 'here's the harsh reality', 'but here's what nobody's saying'. When two of them appear in the same piece, that is your cluster.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "8": {
     "clue": "Two words (14 letters) for the opening move that swaps a modest framing for a grander one: “This isn't a time-management problem. It's an energy-management problem.” (14)",
     "answer": "BINARYCONTRAST",
     "note": {
      "what": "A first cousin of the it-is-not-X-it-is-Y tic, promoted to the opening line. It arrives before any evidence, so the reframe is pure assertion; the reader is told the obvious diagnosis is wrong without being shown a better one. It is popular in LinkedIn posts and internal strategy decks for the same reason models like it: the shape sounds like thinking, and costs nothing.",
      "sounds": "“This isn't a hiring problem. It's a culture problem.”",
      "human": "“We are not short of applicants. Four of the last six leavers cited the same manager.”",
      "data": "In a set of 328,744 real ChatGPT messages, variants of “not just X, but Y” turned up in roughly 6% of one month's traffic. Corporate communications carried the shape from about 50 mentions in 2023 to more than 200 by 2025.",
      "source": "The Atlantic on negative parallelism",
      "url": "https://www.theatlantic.com/technology/2026/07/ai-chatbot-writing-tic-negative-parallelism/687892/"
     }
    },
    "12": {
     "clue": "Grammatical term for an incomplete sentence. Used as an entire paragraph. For emphasis. Like this (8)",
     "answer": "FRAGMENT",
     "note": {
      "what": "Manufactured drama, and described as the most common and least discussed tic of all. A very short sentence or a phrase with no verb is set on its own line so it feels weighty. Used once by a good writer it lands; used constantly it is a drum machine.",
      "sounds": "“That's not a small detail. It's the whole design. Deliberately. From the start.”",
      "human": "“That detail was deliberate, and it shaped the rest of the design.”",
      "data": "The related trick is the rhetorical self-answer — posing a question nobody asked and answering it immediately: 'The result? Devastating.' 'The reality? Nobody knows.' 'Here's the best part: it's free.' All of them buy suspense on credit and then pay out something ordinary.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "13": {
     "clue": "Word for a short polished maxim. Machines mint them from an abstract noun and a two-word predicate: “Clarity is speed.” (8)",
     "answer": "APHORISM",
     "note": {
      "what": "A real maxim survives because someone earned it. The manufactured kind takes any two abstractions and asserts an equals sign between them, producing something that cannot be argued with because it does not mean anything specific. They tend to arrive as one-line paragraphs and to sound wonderful on a slide.",
      "sounds": "“Simplicity is strength. Trust is a habit, not a policy.”",
      "human": "“The form has eleven fields. Nine of them nobody reads. Cut them.”",
      "data": "One inventory of these habits reports a community theory, explicitly unconfirmed, that reward models collapse towards prose that is confident, dense and quotable — which is a fair description of a machine-made maxim. The same write-up notes that suppressing the habit requires naming the exact phrase to be banned.",
      "source": "ExplainX on Claudisms",
      "url": "https://explainx.ai/blog/claude-opus-5-load-bearing-claudisms-writing-tells-2026"
     }
    },
    "15": {
     "clue": "The long punctuation stroke — like these — that the internet decided was proof of AI, on rather thin evidence (2 words, 6)",
     "answer": "EMDASH",
     "note": {
      "what": "The most famous tell and one of the least reliable. Yes, some models use it more than most people do. But the rate varies wildly between models, respectable human writers are dash addicts, and the whole habit may be an accident of training on old books.",
      "sounds": "A paragraph with four of them — one per sentence — each one pivoting mid-thought — which is a lot.",
      "human": "Commas and full stops, mostly. Two or three dashes in a whole article is normal.",
      "data": "The numbers, in full: GPT-4.1 runs at 10.62 per thousand words against a matched human baseline of 3.23. But Claude used only 2 in 948 words in one head-to-head test while Gemini used none, and Mark Twain's Huckleberry Finn runs at 10.13 — statistically the same as GPT-4.1. Any threshold that convicts ChatGPT also convicts Twain. Likely cause: models are trained heavily on late-1800s books, which used about 30% more dashes than we do.",
      "source": "Slop Detector's em-dash measurement",
      "url": "https://slopdetector.org/blog/em-dash-ai-tell-data"
     }
    },
    "16": {
     "clue": "Two words (10 letters) posed as a question fragment, then answered immediately for effect: '___? Devastating.' (10)",
     "answer": "THEREALITY",
     "note": {
      "what": "The rhetorical self-answer. A question nobody asked, followed instantly by a one-word verdict. It creates a drum-roll where a sentence should be, and it is one of the easiest tells to spot once you know the shape.",
      "sounds": "“The reality? Most people give up in the first fortnight.”",
      "human": "“Most people give up within a fortnight.”",
      "data": "The pattern is a template with interchangeable nouns: the reality, the truth, the result, the problem, the catch, the difference, the answer, the key. If you see the shape twice in one piece, it is a machine keeping time — the same diagnosis as three-item lists.",
      "source": null,
      "url": null
     }
    },
    "18": {
     "clue": "Two words (6 letters) beginning a speculative opener aimed at a reader who never agreed to speculate (6)",
     "answer": "WHATIF",
     "note": {
      "what": "The construction asks for imaginative credit in advance. It works in fiction and in a sales pitch you chose to read; in a memo or a newsletter it lands oddly, because it presumes the reader wants to be led somewhere rather than told something. Machines default to it since a hypothetical costs nothing to generate and cannot be checked.",
      "sounds": "“What if onboarding could take minutes instead of weeks?”",
      "human": "“Onboarding takes eleven days, mostly waiting for IT to issue a laptop.”",
      "data": "Turn the hypothetical into a statement and see whether it survives contact with reality. If the answer is “it cannot, and the writer knows it cannot”, the question was there to borrow enthusiasm the facts would not support.",
      "source": null,
      "url": null
     }
    },
    "20": {
     "clue": "Adjective for a sentence that arrives back where it set off: “Effective communication is about communicating effectively.” (8)",
     "answer": "CIRCULAR",
     "note": {
      "what": "Padding of this kind appears when a model must produce a paragraph on a topic it has nothing to add to. The definition restates the term, the example restates the definition, and the word count rises without a single new fact. It is the mechanism behind fractal summaries as well, where each section explains that it is about the thing named in its heading.",
      "sounds": "“Sustainability means adopting practices that are sustainable over the long term.”",
      "human": "“We cut the van fleet from nine to four and moved deliveries to Tuesdays and Fridays.”",
      "data": "The information test: after reading a paragraph, try to state one thing you now know that you did not before. If nothing comes, the paragraph was a placeholder — and this is the fastest way to sift a long machine-written document.",
      "source": null,
      "url": null
     }
    },
    "21": {
     "clue": "Four words (13 letters) instructing the reader to be impressed by the sentence they have just read (13)",
     "answer": "LETTHATSINKIN",
     "note": {
      "what": "Engagement bait, imported wholesale from social media into ordinary prose. It tells you how to react instead of giving you something worth reacting to — which is only ever necessary when the preceding line did not land.",
      "sounds": "“That's 40% of the workforce. Let that sink in.”",
      "human": "“That's 40% of the workforce — about 1,200 people at this site alone.”",
      "data": "Its cousins: 'read that again', 'I'll say it again', 'say it with me', 'tag someone who needs to see this'. All are addressed to an audience rather than a reader, which is why they feel so odd in an email or a report.",
      "source": null,
      "url": null
     }
    },
    "27": {
     "clue": "Two words (13 letters) for the throat-clearing first sentence that would fit any subject on earth: “In today's rapidly evolving landscape …” (13)",
     "answer": "GENERICOPENER",
     "note": {
      "what": "An opening line that contains no information is the most reliable single sign that nobody chose the subject. The model has to start somewhere, and the era-scale platitude is the highest-probability opening in its training data, so it functions as a warm-up lap. Siblings: “in an era where”, “in an increasingly connected world”, “as technology continues to evolve”, “in the modern workplace”.",
      "sounds": "“In today's fast-paced digital environment, effective communication has never been more important.”",
      "human": "“The rota went out four days late again, so two shifts were uncovered on Saturday.”",
      "data": "Named first in a published set of twelve cadence detectors, each with a machine sample and the human sentence that should have replaced it. Deleting the opening paragraph of a suspect piece is the quickest possible edit: if nothing is lost, it was a lap of the track.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "28": {
     "clue": "Two words (13 letters) for the closer so universal it would fit any article ever written: “The best investment is in the people around you.” (13)",
     "answer": "FORTUNECOOKIE",
     "note": {
      "what": "Where the resolution closer asserts that matters are settled, this one steps back and blesses the whole human condition. The test is portability: paste the final sentence onto an article about pension reform, then onto one about badgers, and see whether either notices. Nothing in it belongs to the piece it ends.",
      "sounds": "“In the end, the tools matter less than the people who use them.”",
      "human": "“If the licence renews in March we keep the tool. If not, everything moves to the spreadsheet, which nobody wants.”",
      "data": "The fortune-cookie closer completes the published dozen of cadence detectors. Human endings tend to be slightly unsatisfying, because real situations are unresolved at the moment of writing.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "29": {
     "clue": "Grammatical class of number words such as first, second and third — laid over material that has no sequence in it at all (7)",
     "answer": "ORDINAL",
     "note": {
      "what": "Enumeration is genuinely useful for a recipe, a legal test or a set of instructions. Machines apply it to unordered observations, so “first” and “finally” end up labelling three thoughts that could be read in any order. The give-away is that swapping point two and point three would change nothing. Related habits: “there are three key reasons”, “let's start with the basics”, “building on that”.",
      "sounds": "“First, the market is shifting. Then, customer expectations are rising. Finally, technology continues to advance.”",
      "human": "“Two things happened at once: the pound moved and our biggest customer merged. The second one hurt more.”",
      "data": "Shuffle test: read the numbered points in reverse order. Genuine sequence breaks when you do that, because step two depends on step one; a decorated list reads exactly the same backwards.",
      "source": null,
      "url": null
     }
    },
    "31": {
     "clue": "Noun for emotional and personal distance: the register of “It could be observed that …” where a person would simply say what they think (10)",
     "answer": "DETACHMENT",
     "note": {
      "what": "Third-person constructions bury the actor. “One might consider”, “it is often argued”, “there are those who suggest”: each removes the subject, so no one can be held to the claim. The habit comes from academic and institutional prose in the training data, and it survives because a sentence with nobody in it can never be wrong.",
      "sounds": "“It could be argued that further consideration of the timetable may be warranted.”",
      "human": "“I think the timetable is wrong and I'd like to change it before term starts.”",
      "data": "The actor test: for each sentence, ask who did the thing. If a whole paragraph passes without naming a person, a team or an organisation, the prose has been written to be unattributable — the same weakness as vague attribution to “experts” and “studies”.",
      "source": null,
      "url": null
     }
    },
    "32": {
     "clue": "Musical term for short, detached notes — the cadence of three or more very brief sentences in a row, each under about a dozen words (8)",
     "answer": "STACCATO",
     "note": {
      "what": "One short sentence after a long one is a punch. Four in a row is percussion, and the reader stops taking in information because the rhythm is doing all the talking. The habit is the plainest case of presentation replacing content: nothing has been added between the full stops except a beat.",
      "sounds": "“The data was clear. The team knew it. Nobody acted. That was the failure.”",
      "human": "“The July figures showed the drop, and both team leads saw them, but nothing changed until October.”",
      "data": "Documented in a widely-read inventory of one model's habits, which lists sentence-fragment drama — “Not a detail. A design decision.” — as the most common and least discussed tic of the lot. The community theory, offered as unconfirmed speculation, is that reward models drift towards prose that is confident, dense and quotable.",
      "source": "ExplainX on Claudisms",
      "url": "https://explainx.ai/blog/claude-opus-5-load-bearing-claudisms-writing-tells-2026"
     }
    },
    "33": {
     "clue": "Angler's word for the bait at the start: a question flung at a reader who has not agreed to answer it — “What if you could halve your workload?” (4)",
     "answer": "HOOK",
     "note": {
      "what": "Questions are cheap to generate and they oblige nobody, so they make an ideal first line for a text with no news in it. The interrogative version arrives as “have you ever …?” or “what if …?”; its close cousin is the question the writer answers instantly, which is the same trick with the pause removed. A genuine question is one the reader could plausibly answer differently from the writer.",
      "sounds": "“Have you ever wondered why some teams just seem to work?”",
      "human": "“Our team missed four deadlines last quarter and the retro blamed the same handover each time.”",
      "data": "The usable test is whether the answer is in any doubt. If the reader's only options are yes and yes, the question is not asking anything, and the sentence can be replaced by the claim it was leading towards.",
      "source": null,
      "url": null
     }
    },
    "34": {
     "clue": "Technical term for variation in sentence length. The quality human writing has and machine writing conspicuously lacks (10)",
     "answer": "BURSTINESS",
     "note": {
      "what": "Human prose lurches. A forty-word sentence, then four words. Then a sentence that goes on too long because the writer got interested. Machine prose clusters tightly around fifteen to twenty-five words, paragraph after paragraph, and reads like a treadmill even when every sentence is fine.",
      "sounds": "Three consecutive sentences of almost identical length, each one balanced, each one closing neatly. Nothing wrong with any of them. Nothing alive in them either.",
      "human": "Real writing has an uneven pulse. Some sentences are too long. Some aren't.",
      "data": "You can feel this without counting, which makes it one of the most useful tells for a non-expert. It is also the reason perfect grammar is suspicious: no typos, no fragments, no risks, no sentence that starts one way and changes its mind.",
      "source": null,
      "url": null
     }
    },
    "35": {
     "clue": "Rhetorical term for beginning several consecutive sentences with exactly the same words: “They assume users will pay. They assume developers will build.” (8)",
     "answer": "ANAPHORA",
     "note": {
      "what": "Deliberate repetition is one of the oldest tools in English, which is why nobody notices when a model reaches for it by default. A language model is a machine for continuing patterns, so once it has produced one sentence opening it becomes the single most probable way to open the next one. The result reads like a template with the variables filled in, and it usually arrives in threes, alongside the rule-of-three cadence.",
      "sounds": "“We believe in transparency. We believe in accountability. We believe in doing better.”",
      "human": "“We publish the figures every quarter, including the bad ones. Last year we got the staffing forecast badly wrong.”",
      "data": "Test: cover everything except the first three words of each sentence in a paragraph. If the stubs are identical, a person would almost certainly have varied one of them out of boredom.",
      "source": null,
      "url": null
     }
    },
    "36": {
     "clue": "The end of an argument — a place machines announce that they have arrived at rather than simply arriving (10)",
     "answer": "CONCLUSION",
     "note": {
      "what": "'In conclusion', 'to sum up', 'in summary', 'overall'. Signposting a structure the reader can already see, because they can see the bottom of the page. It is the fingerprint of the five-paragraph school essay, which is a large part of what these models learned from.",
      "sounds": "“In conclusion, while challenges remain, the future looks bright.”",
      "human": "“It might work. The licensing is still a mess.”",
      "data": "The wider habit is summarising at every level — telling you what it will say, saying it, then telling you what it said, in every section and subsection. Also watch the 'despite its challenges' pivot: acknowledge the good, list the difficulties, close on vague optimism, every time.",
      "source": null,
      "url": null
     }
    },
    "38": {
     "clue": "American poet, 1830 to 1886, who built an entire style out of dashes and would fail today's punctuation test more comfortably than any chatbot (9)",
     "answer": "DICKINSON",
     "note": {
      "what": "She belongs in this puzzle as an argument, not as trivia. If a punctuation mark can convict, it convicts her first, and it also convicts the many living writers who simply like the mark. Any test that flags a stylistic preference will flag people who have that preference, which is what a preference is.",
      "sounds": "A dash-heavy paragraph by a real person, accused on the strength of the dashes alone.",
      "human": "Nothing needs changing. Some people punctuate like that.",
      "data": "The measured comparison should settle it: Huckleberry Finn runs at 10.13 em dashes per thousand words and GPT-4.1 at 10.62, against a matched human baseline of 3.23. Meanwhile one model in the same test produced two dashes in 948 words and two others produced none, so the rate describes a particular model rather than machines in general.",
      "source": "Slop Detector's em-dash measurement",
      "url": "https://slopdetector.org/blog/em-dash-ai-tell-data"
     }
    },
    "39": {
     "clue": "One who watches rather than acts. Machine prose opens in this pose — “I've been thinking about this a lot lately” — while having watched nothing (8)",
     "answer": "OBSERVER",
     "note": {
      "what": "The move imports the authority of first-hand attention into a text with no first-hand anything. A person who has been noticing something can say where, when and what they noticed; the machine version stays at the level of a mood, then pivots to the general point it was always going to make. Relatives: “I keep coming back to this”, “something I've noticed recently”, “the more I sit with this”.",
      "sounds": "“I've been noticing a pattern lately, and I think it says something important about how we work.”",
      "human": "“Three people this month have asked me why the Friday report exists. I no longer have an answer.”",
      "data": "The observer opener is one of the twelve documented cadence patterns. Its tell is the missing detail: no place, no date, no name, no number attached to the thing supposedly observed.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "40": {
     "clue": "Adjective for something that never varies. Machine tone is this: identically polite about a data breach, a birthday and a bereavement (7)",
     "answer": "UNIFORM",
     "note": {
      "what": "People modulate. Impatience leaks into the fourth paragraph, a joke appears where the writer got bored, formality slackens once the difficult part is over. A model holds one register from first word to last because it has no stake in the subject and no state of mind to leak. The related weak signal is style consistency: punctuation, list format and paragraph length all holding steady for two thousand words.",
      "sounds": "A complaints reply, a redundancy notice and a Christmas message from the same account, all pitched at exactly the same warm neutral.",
      "human": "“Look, I'll be honest, this has been a shambles and the invoice is still wrong.”",
      "data": "Read the middle of a long document rather than the beginning. Machine prose is at its most uniform where a human writer would have got tired, irritated or interested — and that is easier to feel than to measure.",
      "source": null,
      "url": null
     }
    }
   }
  }
 },
 {
  "id": "p3",
  "issue": "No. 3",
  "title": "The Chatbot & the Page",
  "blurb": "The manners it forgot to delete — “Great question!”, “You're absolutely right!” — plus what a machine does to the look of a document: the bold bullets, the stray asterisks, the arrows used as punctuation.",
  "heroes": [
   "YOUREABSOLUTELYRIGHT",
   "GREATQUESTION",
   "CERTAINLY",
   "LETSDIVEIN",
   "BOLDBULLETS",
   "TOEFL"
  ],
  "grid": [
   "..TURNITIN........S..........",
   "...N..N.....A.B...I.......T..",
   ".A.P.BOLD.CANDOUR.G.....D.W..",
   ".B.A..T.....A.L..UNDERTHEHOOD",
   ".SYCOPHANCY.L.D...O.....A.F..",
   ".O.K..E.....O.B...F.GRANDIOSE",
   ".L....R.....G.U...F.....M.L..",
   ".U....W..C..Y.L.........E.D..",
   ".T...YOUREABSOLUTELYRIGHT....",
   ".E..L.R..R..T.E.O.E...R.A....",
   ".L.VERDICT..A.T.E.T..DESPITE.",
   ".Y..T.S..A..C.S.F.S...A.H..N.",
   "....S....I..K...L.DILUTION.G.",
   "....B....N.V......I...Q.R..A.",
   "...FRACTAL.U.L....V...U....G.",
   "....E....Y.L.IMHERETOHELP..E.",
   "T.A.A......N.S....I...S....M.",
   "I.N.K...INVENTEDCONCEPT....E.",
   "T.A.T......R.I........IMAGINE",
   "L.L.H......A.C........O.T..T.",
   "EMOJI......B.L........N.I..B.",
   "C.G.S...NOWISEE.........T..A.",
   "A.Y.D....R.L...K..OFCOURSE.I.",
   "S...O..DUPLICATION......C..T.",
   "E...W....H.T...C...MARKDOWN..",
   "...INSUMMARY...K....R...R....",
   ".....L...N....PENNYDROPPED...",
   ".....O.........R....O........",
   "...EXPERTS..........W........"
  ],
  "clues": {
   "across": {
    "1": {
     "clue": "Plagiarism-checking service used by universities; its own published error rate of 0.51% means roughly 500 false accusations a year at a large one (8)",
     "answer": "TURNITIN",
     "note": {
      "what": "The arithmetic is the whole argument. A tool that is 99.49% accurate sounds unimpeachable until you multiply it by a hundred thousand submissions, at which point the small print becomes several hundred students accused of something they did not do. Even the best tools cannot escape this: the point of the number is scale, not incompetence.",
      "sounds": "“The software says there is a 12% chance this was AI-generated, so we have opened a case.”",
      "human": "“We compared it with your last three essays and asked you to talk us through the argument.”",
      "data": "Turnitin’s published false-positive rate is 0.51%, which at an institution receiving 100,000 papers a year works out at about 500 wrongful flags annually. Pangram reports roughly one false positive in 10,000, better by two orders of magnitude and still not zero.",
      "source": "Pangram on false positives in AI detectors",
      "url": "https://www.pangram.com/blog/all-about-false-positives-in-ai-detectors"
     }
    },
    "9": {
     "clue": "Heavier typeface weight, applied so liberally by machines that nothing on the page ends up standing out (4)",
     "answer": "BOLD",
     "note": {
      "what": "A separate habit from the labelled-list pattern, and worth its own entry because it shows up in ordinary prose. The model has no idea which fact matters to you, so it emphasises anything that looks quotable, sometimes several phrases in one sentence. The result is a page with no hierarchy at all, which is the opposite of what emphasis is for.",
      "sounds": "“The deadline is **Friday 12th**, and we need **all forms** returned to the **school office**.”",
      "human": "“Forms to the office by Friday the 12th, please.”",
      "data": "Count the emphasised phrases on a page and divide by the number of paragraphs. Above roughly one per paragraph, the writer was not choosing — and if the marks arrive as stray asterisks, they were not even rendered.",
      "source": null,
      "url": null
     }
    },
    "10": {
     "clue": "Frankness — announced with “let me be honest” or “the truth is simple” instead of simply being exercised (7)",
     "answer": "CANDOUR",
     "note": {
      "what": "Declaring honesty is a way of claiming a quality without demonstrating it, and it has a family: “truth be told”, “I’ll be real with you”, “let’s be clear”, “the real story is”. The reason machines produce it so readily is that these phrases are frequent in the persuasive writing they trained on and they fit in front of any sentence at all. Note the irony that a person about to be honest with you rarely feels the need to schedule it.",
      "sounds": "“Let’s be clear: the truth is simple. Broadband pricing is complicated.”",
      "human": "“The advertised price lasts 18 months, then rises by £9 a month.”",
      "data": "The deletion test again, applied to the first clause only. If striking “let me be honest” changes nothing about what is being claimed, the writer was warming up rather than levelling with you.",
      "source": null,
      "url": null
     }
    },
    "12": {
     "clue": "Three words (12 letters), a borrowed American engine-bay image wheeled out before explaining absolutely any system (12)",
     "answer": "UNDERTHEHOOD",
     "note": {
      "what": "Technical-writing stock phrasing, kept alive because it flatters both parties: the writer sounds like an insider, the reader feels admitted to the workshop. Machines reach for it constantly because it fits before any explanation of anything, which is precisely the problem with it. Compare “at its core” and “in other words” — all three are throat-clearing shaped like insight.",
      "sounds": "“Under the hood, the booking system uses a database.”",
      "human": "“The booking system writes to a MySQL table, which is why two people can grab the same slot.”",
      "data": "The useful move is to ask what mechanism was named. If deleting the phrase and the sentence after it loses no information about a component, a constraint or a cause, nothing was explained.",
      "source": null,
      "url": null
     }
    },
    "13": {
     "clue": "Old word for flattery and fawning. The technical term researchers now use for 'Great question!' (10)",
     "answer": "SYCOPHANCY",
     "note": {
      "what": "The umbrella term for the whole eager-assistant register: 'Great question!', 'That's a really insightful observation', 'I'd be happy to help!', 'I'm here to help!', 'What a thoughtful thing to notice'. It reads like a call-centre script because it was optimised the same way — for approval rather than accuracy.",
      "sounds": "“That's a fantastic question, and it really gets to the heart of the issue!”",
      "human": "A person answers the question. Nobody grades it first.",
      "data": "Measured across major models: flattering behaviour in 58.19% of tested exchanges overall, with Gemini highest at 62.47% and ChatGPT lowest at 56.71%. A separate analysis of real conversations found models agreeing with users about 50% more than a person would.",
      "source": "SycEval benchmark",
      "url": "https://arxiv.org/html/2502.08177v3"
     }
    },
    "14": {
     "clue": "Adjective for the pompously overblown, as when a change to a form “will fundamentally reshape how we think about everything” (9)",
     "answer": "GRANDIOSE",
     "note": {
      "what": "Stakes inflation: a bounded change given world-historical scale. It happens because promotional and thought-leadership writing dominates the training material, and in that genre nothing is ever merely useful. The diagnostic is a mismatch between the size of the claim and the size of the subject, which you can spot without knowing anything about the subject.",
      "sounds": "“This update to the staff handbook represents a paradigm shift in how we understand work itself.”",
      "human": "“You can now book leave without your manager countersigning it.”",
      "data": "Ask who is affected, by when, and how you would know if it had worked. Grand claims answer none of the three; ordinary ones answer at least two.",
      "source": null,
      "url": null
     }
    },
    "16": {
     "clue": "Four-word phrase (run together, 20 letters) a chatbot fires back the instant you contradict it — even when what you said was nonsense you shouted at the screen (20)",
     "answer": "YOUREABSOLUTELYRIGHT",
     "note": {
      "what": "The most parodied sentence in AI. It commits to three things at once: that you were right, that you were completely right, and that the machine is delighted to have changed its mind. It arrives with equal enthusiasm whether you have found a real bug or typed gibberish, which is exactly why it means nothing.",
      "sounds": "“You're absolutely right! I apologise for the confusion. Let me fix that.”",
      "human": "“No — that bit was fine. The problem is in the other file.”",
      "data": "Agreement this reflexive is measurable. A study of 11 leading systems found they endorsed the user's stated course of action 49% more often than human respondents did, including in situations involving deception. A separate benchmark found flattering behaviour in 58% of tested exchanges.",
      "source": "AP on the Science study of chatbot flattery",
      "url": "https://www.ap.org/news-highlights/spotlights/2026/ai-is-giving-bad-advice-to-flatter-its-users-says-new-study-on-dangers-of-overly-agreeable-chatbots/"
     }
    },
    "21": {
     "clue": "Judgment handed down by a jury; in machine prose, the closing sentence that announces a conclusion the evidence has not earned (7)",
     "answer": "VERDICT",
     "note": {
      "what": "The move is to tell the reader what they have just witnessed: “that’s what leadership looks like”, “and that changes everything”, “this is what the future demands”. It arrives whether or not the preceding paragraphs contained any facts, because it is a shape rather than an inference. The cadence catalogue records a close cousin, the Resolution Closer — “the path forward is clear; the companies that adapt will lead”.",
      "sounds": "“She reorganised the rota and left on time. That’s what leadership looks like.”",
      "human": "“She reorganised the rota, and overtime fell by a third in the first month.”",
      "data": "Twelve such openers and closers have been named and paired with human rewrites, which makes them checkable rather than a question of taste. A judgment is fine when the reader could have reached it unaided.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "22": {
     "clue": "Preposition meaning in spite of, the hinge of a stock manoeuvre: praise, then challenges, then a swerve into vague optimism (7)",
     "answer": "DESPITE",
     "note": {
      "what": "You can predict the paragraph from its first three words, which is the whole trouble. The structure acknowledges difficulty in the abstract so that the optimism afterwards looks earned, and nobody has to name a risk, a cost or a person responsible. It is the standard closing paragraph of essays, prospectuses and council consultations alike.",
      "sounds": "“Despite its challenges, the scheme holds enormous promise for the community going forward.”",
      "human": "“The scheme needs £40,000 we do not have, and the council will decide in November.”",
      "data": "Read the pivot and ask three things of it: which trade-off, whose decision, what evidence. Genuine optimism survives the questions; the stock version evaporates.",
      "source": null,
      "url": null
     }
    },
    "24": {
     "clue": "Watering-down; the composition habit of stating a single point six times in slightly varied wording (8)",
     "answer": "DILUTION",
     "note": {
      "what": "Length is easy and substance is not, so a model asked for 800 words on a subject that needs 200 will restate rather than research. Each restatement is slightly rephrased, which stops it looking like a copy-paste error and makes the page feel thorough while teaching you nothing new after the second paragraph. This is why so much machine-written text feels tiring rather than wrong.",
      "sounds": "Four paragraphs which between them establish that communication is important to teams.",
      "human": "“The handover notes were missing twice last month, so both wards now use the same template.”",
      "data": "Try summarising the piece in one sentence. If you can, and the piece is 900 words long, you have measured the padding without arguing about anyone’s style.",
      "source": null,
      "url": null
     }
    },
    "26": {
     "clue": "Mathematical term for a shape repeating identically at every scale, which is how machine-written documents summarise themselves (7)",
     "answer": "FRACTAL",
     "note": {
      "what": "The habit is to say what is coming, say it, then say what was said — at the level of the document, and again inside every section, and sometimes inside every subsection. Each individual summary looks reasonable, so nobody deletes any of them, and a 600-word memo ends up containing four recaps. Human writing usually recaps once, if at all, because writing a summary is tedious and a person notices.",
      "sounds": "An overview, then “in this section we will look at …”, then the same three points, then “to recap …” — all inside 400 words about parking permits.",
      "human": "“Permits go up to £85 in April. Renew before the 31st of March and you pay the old rate.”",
      "data": "Count the sentences that contain no new information. Recursive summary is the cheapest way to hit a word count, and it survives because it is individually defensible and collectively absurd.",
      "source": null,
      "url": null
     }
    },
    "28": {
     "clue": "Four words (12 letters), a declaration of willingness that reads like a call-centre script (12)",
     "answer": "IMHERETOHELP",
     "note": {
      "what": "A performed service announcement. It states a disposition instead of demonstrating one, which is the pattern behind most of the chat manners: describing helpfulness costs nothing, being helpful costs effort.",
      "sounds": "“I'm here to help! Let me know if you have any other questions.”",
      "human": "“Give me a shout if it breaks again.”",
      "data": "This whole register was created deliberately and then partly regretted. OpenAI publicly withdrew a version of GPT-4o for being 'overly flattering or agreeable', and Anthropic's own instructions to Claude try to suppress the opening fillers — they leak through anyway.",
      "source": "OpenAI on sycophancy in GPT-4o",
      "url": "https://openai.com/index/sycophancy-in-gpt-4o/"
     }
    },
    "31": {
     "clue": "Two words (15 letters) for the trick of coining an official-sounding label — “the supervision paradox”, “workload creep” — for something never actually defined (15)",
     "answer": "INVENTEDCONCEPT",
     "note": {
      "what": "A named thing feels like a discovered thing. Models produce these labels because the pattern is everywhere in business writing, and the label is far cheaper than the research it implies. The tell is that the coinage is used once, capitalised or not, and never given criteria, a measurement or a counter-example — real concepts come with all three eventually.",
      "sounds": "“What we’re seeing is the acceleration trap: an innovation inversion at the heart of modern teams.”",
      "human": "“We shipped four features last quarter and fixed twice as many bugs as usual afterwards.”",
      "data": "This is one of twelve cadence patterns documented with an AI example and a human rewrite for each, listed there as Invented Concept Labels. If you meet a coined term, search the document for its definition; absence is the answer.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "32": {
     "clue": "Verb of visualising, used to open with “a world where …” rather than with anything that has happened (7)",
     "answer": "IMAGINE",
     "note": {
      "what": "Cinematic futurism as a first sentence. It postpones the concrete claim by a paragraph, and paragraphs of postponement are cheap to produce and pleasant to read, so they survive. The same catalogue of cadence patterns names its neighbours — the Generic Opener (“in today’s rapidly evolving landscape”) and the Interrogative Hook (“what if you could …?”) — which are the same manoeuvre in different costumes.",
      "sounds": "“Imagine a world where your council tax bill explains itself.”",
      "human": "“From April the bill will show a breakdown by service. Most people will see two lines they have never seen before.”",
      "data": "Twelve of these opener-and-closer shapes have been catalogued and matched with human rewrites, which is worth knowing because it means the shapes are countable rather than a matter of taste.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "34": {
     "clue": "Small coloured picture-character — a tick, a rocket, a lightbulb — used as a list marker where an ordinary dot would do (5)",
     "answer": "EMOJI",
     "note": {
      "what": "Chatbots decorate lists by default, and the pictures carry no information: a rocket beside “next steps” tells you nothing that the words do not. Two things make this spottable at a distance. The pictures are always from the same small set, and they appear in contexts where no human would bother, such as an internal spreadsheet or a note to one colleague.",
      "sounds": "A three-item plan for the church roof appeal in which each line begins with a rocket, a lightbulb and a tick respectively.",
      "human": "“Three things: get two quotes, ask the diocese about grants, tell the PCC on the 9th.”",
      "data": "The practical version of this test: would the author have typed these by hand on a phone at 11pm? Decoration that nobody chose is decoration that arrived with the text.",
      "source": null,
      "url": null
     }
    },
    "35": {
     "clue": "Three words (7 letters) expressing sudden understanding, produced immediately after you point out something obvious (7)",
     "answer": "NOWISEE",
     "note": {
      "what": "Performed realisation. 'Ah, now I see' — as though the machine had been puzzling over it and has just had a breakthrough, rather than simply been handed the answer. It is theatre in place of an acknowledgement.",
      "sounds": "“Ah, now I see the issue! The variable was never initialised.” — said after you pasted the error message that says exactly that.",
      "human": "“Yes. That's the bug.”",
      "data": "Belongs to the performed-realisation family, along with 'then I realised', 'something shifted', 'that's when it hit me' and 'the penny dropped'. All of them stage a moment of insight that the reader is supposed to feel rather than verify.",
      "source": null,
      "url": null
     }
    },
    "38": {
     "clue": "Two words (8 letters): an obliging noise made before doing the thing that was requested anyway (8)",
     "answer": "OFCOURSE",
     "note": {
      "what": "Same family as the previous one, slightly more gracious in tone and equally deletable. Affirmative filler exists because the model has to produce a first word before it has produced an answer, and a warm noise is the cheapest safe option available. The reason you should care is what happens when it survives into a printed leaflet: nobody read the leaflet.",
      "sounds": "“Of course! Below is the wording you can send to parents.” — in a document sent to parents.",
      "human": "“Here's the wording. Change the date before you send it.”",
      "data": "There is real evidence that human approval trained this register in. When researchers tested a base model against its human-feedback-tuned version, the base model found human and AI text about equally surprising (entropy 1.616 against 1.633), while the tuned version found AI-typical wording much less surprising than human wording (0.886 against 1.051). Politeness was rewarded until it became automatic.",
      "source": "Juzek & Ward, Florida State",
      "url": "https://arxiv.org/html/2412.11385v1"
     }
    },
    "39": {
     "clue": "Repetition of something already present — whole paragraphs reappearing word-for-word later in the same document (11)",
     "answer": "DUPLICATION",
     "note": {
      "what": "Not a style tell at all but a process failure, and the most conclusive item in this section. It happens when text is generated in chunks and assembled by somebody who did not read the assembly, or when a model loses track of what it has already produced. Unlike every other entry here, there is no charitable explanation available.",
      "sounds": "The paragraph about fire doors appearing identically on pages two and five of a residents’ handbook.",
      "human": "One paragraph about fire doors, on the page where fire doors are discussed.",
      "data": "This belongs with the leftover chat filler as evidence of an unread document rather than a machine author. Search for a distinctive six-word string from the middle of any long document; two hits means nobody read it through.",
      "source": null,
      "url": null
     }
    },
    "40": {
     "clue": "Plain-text formatting notation, invisible once rendered, which leaves stray asterisks and hash marks behind when pasted into Facebook (8)",
     "answer": "MARKDOWN",
     "note": {
      "what": "This is the single most practical tell in the series, because it requires no judgement at all. Chatbots write in this notation by default; a chat window renders it as headings and heavy type, while a comment box, a text message or a job advert does not. What you see is the plumbing: double asterisks around phrases, hash marks in front of headings, hyphens starting lines.",
      "sounds": "“**Update:** The hall is booked for the 3rd. ## What to bring” — posted verbatim to a village Facebook group.",
      "human": "“Hall’s booked for the 3rd. Bring a chair if you can.”",
      "data": "Nobody has counted how often this happens, and no study needs to — a person typing into Facebook does not surround words with asterisks. Treat it the way you would treat a price tag left on a gift.",
      "source": null,
      "url": null
     }
    },
    "42": {
     "clue": "Two words (9 letters), the signpost planted in front of a paragraph that repeats what you have just finished reading (9)",
     "answer": "INSUMMARY",
     "note": {
      "what": "A signposted conclusion is not a fault in itself — essays have taught it for a century — but machines attach one to everything, including three-paragraph emails that plainly do not need a wrap-up. Its siblings are “in conclusion”, “to sum up” and “overall”. The reliable signal is proportion: a closing summary on a document you can read in forty seconds.",
      "sounds": "“In summary, the meeting has moved to Thursday.” — the fourth sentence of a four-sentence message.",
      "human": "“Meeting’s moved to Thursday, same room.”",
      "data": "A field guide to AI tells lists an “in summary” wrap among the dozen signals to look for, and proposes a thirty-second check: three or more of the signals inside a few hundred words. This one is easy to spot because it labels itself.",
      "source": "Matthew Vollmer, A Field Guide to AI Tells",
      "url": "https://matthewvollmer.substack.com/p/i-asked-the-machine-to-tell-on-itself"
     }
    },
    "44": {
     "clue": "Two words (12 letters), the British idiom for a moment of belated understanding, staged in prose to dramatise having been told the answer (12)",
     "answer": "PENNYDROPPED",
     "note": {
      "what": "Performed realisation, in essay form rather than in a chat window. It manufactures a narrative arc — confusion, then insight — around information that was simply looked up. Its relatives include “then I realised”, “something shifted”, “everything changed” and “that’s when it hit me”, and they cluster in the middle of first-person business posts.",
      "sounds": "“Then the penny dropped. Something shifted. I was measuring the wrong thing entirely.”",
      "human": "“In week three I noticed we were counting repeat visitors twice.”",
      "data": "The missing element is always the same: the event. A real realisation has a place, a time and usually another person in it. If you cannot say where the writer was standing, nothing happened.",
      "source": null,
      "url": null
     }
    },
    "45": {
     "clue": "Specialists with authority in a field. Linguistics ones, shown research abstracts, identified the machine-written ones only 38.9% of the time (7)",
     "answer": "EXPERTS",
     "note": {
      "what": "Worse than a coin toss, and informatively so: they were biased towards calling machine text human, which is the opposite of the mistake most people fear. Expertise in language does not transfer to authorship detection, because the tells in this puzzle are habits of an unedited draft rather than properties of a sentence. A separate study of 1,682 adults found per-story accuracy between 31% and 53%, and readers rated the AI-written stories higher for being well written.",
      "sounds": "“I can always tell.”",
      "human": "“I noticed four of the formatting tells in one email, so I asked the sender whether they had drafted it in a chatbot.”",
      "data": "The 38.9% figure comes from linguistics experts assessing research abstracts. Pair it with the reader study: 1,682 participants aged 18 to 81 scored 31.43% to 52.82% per story, and preferred the machine’s prose for absorption (1.42 against 0.97). Nobody reliable is walking around with this skill.",
      "source": "Study summary: experts fooled by AI abstracts",
      "url": "https://www.reddit.com/r/science/comments/16g2kpt/ai_vs_human_writing_experts_fooled_almost_62_of/"
     }
    }
   },
   "down": {
    "2": {
     "clue": "Verb for emptying a suitcase, used to mean 'explain'. Cousin of 'let's dive in' and 'let's break this down' (6)",
     "answer": "UNPACK",
     "note": {
      "what": "Teacher mode. It announces a lecture, usually five bullet points for a two-line answer, and treats the reader as a student regardless of what they already know. It is the most patronising of the transitions.",
      "sounds": "“Great question! Let's unpack this. There are a few things going on here:”",
      "human": "“Two reasons: the file is too big, and the format is wrong.”",
      "data": "The transition family includes 'let's dive in', 'let's break this down', 'let's explore this', 'here's what's happening', 'at its core' and 'think of it as'. Chained together — 'Certainly! Let's dive in.' — they are almost self-parody.",
      "source": null,
      "url": null
     }
    },
    "3": {
     "clue": "Three words (12 letters) introducing a paraphrase of a sentence that was perfectly clear the first time (12)",
     "answer": "INOTHERWORDS",
     "note": {
      "what": "Legitimate when a genuinely technical sentence needs a plain-English translation. Machine-written prose uses it as a rhythm, restating a simple claim in slightly different vocabulary, which inflates the word count and gives the passage a pleasant feeling of thoroughness. Watch for it arriving twice in one section — that is the giveaway.",
      "sounds": "“The deadline has moved to Friday. In other words, you now have two more days.”",
      "human": "“The deadline is Friday, so the print run has to be booked by Thursday lunchtime.”",
      "data": "Cross-reference with one-point dilution elsewhere in this puzzle: they are the same habit at different scales, one working across a sentence, the other across a whole page.",
      "source": null,
      "url": null
     }
    },
    "4": {
     "clue": "Two words (7 letters) for the closing flourish — “so the next time you …”, “remember”, “the choice is yours” (7)",
     "answer": "SIGNOFF",
     "note": {
      "what": "A motivational ending is the easiest paragraph in the world to produce, because it requires nothing from the material above it. The same sentence would close an article about pensions, one about cycling and one about grief, and that interchangeability is the test. Human endings tend to stop on the last useful fact, often slightly awkwardly.",
      "sounds": "“So the next time you open your energy bill, remember: the choice is yours.”",
      "human": "“Switching takes about ten days, and you can do it while still in credit.”",
      "data": "The cadence catalogue names this shape Motivational Cadence — short claim, expansion, imperative — and its blander twin the Fortune Cookie Closer, a final line that would fit almost any article. Try moving the closing sentence to a different document; if it still works, delete it.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "5": {
     "clue": "Two words (12 letters) for a rapid pile-up of historical or corporate comparisons used to borrow authority (12)",
     "answer": "ANALOGYSTACK",
     "note": {
      "what": "The move is to line up famous examples so their weight transfers to the writer’s claim, usually in short parallel sentences: Apple didn’t build this, Facebook didn’t build that, Kodak missed the other. No mechanism is described, and the comparisons are chosen for fame rather than fit. Human experts making the same point tend to give one comparison and then explain where it breaks down.",
      "sounds": "“Blockbuster ignored streaming. Kodak ignored digital. Nokia ignored touchscreens. Your business is ignoring this.”",
      "human": "“Two of our three competitors now take online bookings, and our phone bookings fell 12% this year.”",
      "data": "The test is disanalogy: does the writer say how their case differs from the famous one? Comparisons that clarify come with caveats; comparisons that borrow authority never do.",
      "source": null,
      "url": null
     }
    },
    "6": {
     "clue": "Two words (11 letters) for the list where every single point opens with an emphasised label followed by a colon (11)",
     "answer": "BOLDBULLETS",
     "note": {
      "what": "This is the default shape of machine-generated Markdown, and it is the most visible tell in the whole series because you can see it from the other side of a desk. Emphasis works by scarcity: if every line is heavy, the eye has nothing to land on. It also disguises the absence of an argument, since a list of labels never has to explain how one point leads to the next.",
      "sounds": "A four-item list where each item begins “**Cost:**”, “**Timeline:**”, “**Risk:**”, “**Next steps:**” — in a two-paragraph email about a leaking roof.",
      "human": "“The roof will cost about £900 and they can come on the 14th. The risk is the ceiling in the back bedroom.”",
      "data": "A published field guide to AI tells lists “nested bold bullets where prose would do” among the twelve things to check, and says that three or more such signals within a few hundred words means the text was probably machine-touched. Counting beats reading.",
      "source": "Matthew Vollmer, A Field Guide to AI Tells",
      "url": "https://matthewvollmer.substack.com/p/i-asked-the-machine-to-tell-on-itself"
     }
    },
    "7": {
     "clue": "Adjective meaning double, used in “the issue is …” whether or not there turn out to be exactly two issues (7)",
     "answer": "TWOFOLD",
     "note": {
      "what": "Explanatory scaffolding: a promise of structure made before the structure exists. The number is chosen because it sounds analytical, and quite often only one cause is then described, or four are, or the second is a rephrasing of the first. Its siblings are “here’s what’s happening:”, “there are a few things going on here:”, “to fix this, you’ll want to:” and “a better approach would be to:”.",
      "sounds": "“The issue is twofold: first, the data is incomplete. Second, this incompleteness affects the results.”",
      "human": "“Half the postcodes are missing, so the map has holes in Fife.”",
      "data": "A test you can run in five seconds: count the causes actually named after the colon. If the announced number and the delivered number disagree, the sentence was decoration. This works on management emails written by people, too.",
      "source": null,
      "url": null
     }
    },
    "8": {
     "clue": "Adverb meaning totally. As a one-word reply, a chatbot's instant and complete agreement — including with things you shouted at a computer in frustration (10)",
     "answer": "ABSOLUTELY",
     "note": {
      "what": "Agreement as a reflex. Models were tuned by asking people which answer they preferred, and people prefer being agreed with, so agreement became the default regardless of whether it is warranted. 'You're absolutely right!' commits to three things at once: that you were right, that you were completely right, and that the machine is thrilled to have changed its mind.",
      "sounds": "“You're absolutely right! I apologise for the confusion.” — typically arriving after you have said something wrong.",
      "human": "“No, that part was correct. The error is in the second file.”",
      "data": "This has a name and a number. A study of 11 leading AI systems found they endorsed the user's stated actions 49% more often than human respondents did. A separate benchmark found flattering behaviour in 58% of tested exchanges. OpenAI publicly withdrew a version of GPT-4o for being 'overly flattering or agreeable'.",
      "source": "AP on the Science study of chatbot flattery",
      "url": "https://www.ap.org/news-highlights/spotlights/2026/ai-is-giving-bad-advice-to-flatter-its-users-says-new-study-on-dangers-of-overly-agreeable-chatbots/"
     }
    },
    "11": {
     "clue": "Two words (12 letters) for an image kept running long after it stopped illuminating anything — a whole memo staged in “the engine room of the business” (12)",
     "answer": "DEADMETAPHOR",
     "note": {
      "what": "A model that opens with a comparison will often keep extending it, because continuing an established image is the statistically comfortable thing to do. So the journey acquires a compass, then headwinds, then a map, and by the fourth paragraph the reader is tracking the vehicle rather than the argument. The slippage is where it becomes funny: the image starts making claims the subject cannot support.",
      "sounds": "“The garden of our culture needs watering, so we must trim the deadwood in HR before the harvest of Q4.”",
      "human": "“Two roles in HR are going, and we are keeping the third until the audit finishes.”",
      "data": "A published field guide includes “a slightly-off metaphor” among the dozen tells worth checking, on the same list as orphaned demonstratives and nested bold bullets. Read the image literally and see whether it still makes sense; a stretched one usually will not.",
      "source": "Matthew Vollmer, A Field Guide to AI Tells",
      "url": "https://matthewvollmer.substack.com/p/i-asked-the-machine-to-tell-on-itself"
     }
    },
    "15": {
     "clue": "Affirmative filler traditionally deployed just before a chatbot produces what you asked for (9)",
     "answer": "CERTAINLY",
     "note": {
      "what": "This is the most important category in the whole puzzle and the least glamorous. It is not a style tell — it is leftover machinery. Somebody copied a chatbot's reply into a document and did not delete its manners. There is no innocent reason for a school newsletter to open by agreeing to write itself.",
      "sounds": "“Certainly! Here is a revised version of your paragraph:” — found in the middle of a published document.",
      "human": "Nothing. A person writing to you simply starts.",
      "data": "This is why it matters: 'Certainly! Here is…' and 'As an AI language model' keep turning up in published academic papers, press releases and product listings. One of these is not suspicion, it is a confession. Everything else in this puzzle is circumstantial by comparison.",
      "source": null,
      "url": null
     }
    },
    "17": {
     "clue": "Standard English exam for non-native speakers. Seven detection tools wrongly flagged 61% of these genuinely human essays as machine-written (5)",
     "answer": "TOEFL",
     "note": {
      "what": "The ethical heart of the puzzle. AI detectors work by flagging simple, predictable English — and people writing in a second language use a narrower, more careful, more predictable range of words, for entirely human reasons. The software cannot tell the difference between a machine and a careful learner.",
      "sounds": "A plain, correct, slightly formal paragraph by someone who learned English at school — flagged as a robot.",
      "human": "Say nothing. You cannot tell, and the cost of being wrong falls on the person least able to argue back.",
      "data": "Across 91 real human essays, seven detectors produced a 61% average false-positive rate; 97.8% were flagged by at least one tool and 19% by all seven. Native-speaker school essays were flagged almost never. The killer detail: when researchers asked an AI to rewrite the same essays in more 'literary' language, the false-positive rate fell to 11.6%. The tools were measuring plainness, not authorship.",
      "source": "Liang et al., Patterns",
      "url": "https://www.sciencedirect.com/science/article/pii/S2666389923001307"
     }
    },
    "18": {
     "clue": "Three words (10 letters) forming the mandatory swimming metaphor before a chatbot will look at anything (10)",
     "answer": "LETSDIVEIN",
     "note": {
      "what": "The transition that announces a lecture. Often chained straight onto the filler — 'Certainly! Let's dive in.' — which is close to self-parody. Its relatives are 'let's unpack this', 'let's explore this' and 'let's break it down'.",
      "sounds": "“Certainly! Let's dive in. There are a few things going on here:”",
      "human": "“The issue is the date format. Change it to DD/MM and it'll import.”",
      "data": "Note what the phrase is doing: buying a sentence of fluent text before committing to a claim. Several of the tells in this puzzle work the same way — they occupy the space where thinking would go.",
      "source": null,
      "url": null
     }
    },
    "19": {
     "clue": "Two-word compliment (13 letters) paid to your question before any attempt is made to answer it (13)",
     "answer": "GREATQUESTION",
     "note": {
      "what": "The sycophantic opener. Praising the question is a way of filling the first line with warmth at no cost. No human being writing to you grades your enquiry before responding to it — not a colleague, not a teacher, not a plumber.",
      "sounds": "“Great question! That really gets to the heart of the issue.”",
      "human": "A person just answers.",
      "data": "A Google engineer's statistical analysis of model output found phrases like 'great question' and 'that's fantastic' appearing at significant frequency in AI responses while being almost entirely absent from a matched corpus of human writing. It is one of the cleanest signals that exists.",
      "source": "Detecting AI text by its statistical tells",
      "url": "https://medium.com/google-cloud/detecting-ai-generated-text-by-uncovering-its-statistical-tells-042c8d0e3a24"
     }
    },
    "20": {
     "clue": "Four words (17 letters) deployed before explaining a two-line fix with five bullet points and a mini-lecture (17)",
     "answer": "LETSBREAKTHISDOWN",
     "note": {
      "what": "Pedagogical hand-holding, applied regardless of who is reading. It treats every reader as a beginner because the model has no idea who you are, and the safest register is the patient teacher.",
      "sounds": "“Let's break this down: 1. What's happening. 2. Why it's happening. 3. How to fix it. 4. Best practices going forward.”",
      "human": "“Your quotes are the wrong kind. Retype them and it'll run.”",
      "data": "Related habit: summarising at every level — telling you what it is about to say, saying it, then telling you what it said, in every section. Human writing trusts you to keep up.",
      "source": null,
      "url": null
     }
    },
    "23": {
     "clue": "Two words (14 letters) for the scripted crowd-work of social media: “unpopular opinion:”, “tag someone who needs to see this” (14)",
     "answer": "ENGAGEMENTBAIT",
     "note": {
      "what": "These are instructions to the audience disguised as sincerity, and they exist because platforms reward replies and reshares. Machines reproduce them because the training material is full of posts that succeeded, and this is what succeeding looked like. The oddest variant is “not sure who needs to hear this, but …”, which claims humility while addressing everyone alive.",
      "sounds": "“Unpopular opinion: not sure who needs to hear this, but rest is productive. I’ll say it again.”",
      "human": "“I took Friday off and finished the report on Monday in two hours.”",
      "data": "Worth noticing that this family is now genuinely mixed — plenty of humans type these phrases on purpose. Treat them as evidence of a copied register, not of a machine.",
      "source": null,
      "url": null
     }
    },
    "25": {
     "clue": "Openness about one’s own weakness, staged rather than felt, as a way of sounding human (13)",
     "answer": "VULNERABILITY",
     "note": {
      "what": "A confession is a cheap way to buy trust, and models learned that the shape of a confession earns approval whether or not there is anything to confess. What comes out is admission-flavoured: an opinion presented as an embarrassing secret, or a flaw so flattering it functions as a boast. Genuine self-disclosure carries a fact you could check — a date, an amount lost, a person who was annoyed.",
      "sounds": "“And yes, I’ll admit it: I’m openly, hopelessly in love with the platform model.”",
      "human": "“I got this wrong in the March forecast — I assumed two vans would be enough, and we hired a third in May.”",
      "data": "Test: does the admission cost the writer anything? If the confessed flaw is enthusiasm, curiosity or caring too much, no confession has occurred.",
      "source": null,
      "url": null
     }
    },
    "27": {
     "clue": "Portmanteau for an article that is really a numbered list; machines write them even when the paragraphs are pretending otherwise (8)",
     "answer": "LISTICLE",
     "note": {
      "what": "The disguised version is the interesting one: “the first … the second … the third …” strung through prose that has no sequence in it. Ordinal labels imply chronology, priority or dependency, and when none of those exists the numbering is a costume for a bag of unrelated observations. Genuine lists are fine; the tell is numbering applied to an argument, or prose applied to a list.",
      "sounds": "“There are three things to understand. The first is that costs have risen. The second is that costs have risen unevenly. The third is that this matters.”",
      "human": "“Costs rose 9% overall, but 30% for the two rural routes, which is where the budget gap comes from.”",
      "data": "Documented as Ordinal Enumeration among twelve named cadence patterns, each with a human rewrite alongside it. The check is simple: try reordering the items. If nothing breaks, the numbers were decoration.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "29": {
     "clue": "Two words (9 letters) for the style of Capitalising Every Major Word, applied by machines to shopping lists and birthday invitations (9)",
     "answer": "TITLECASE",
     "note": {
      "what": "Headline capitalisation belongs to publications with a style guide, and machines apply it everywhere because their training data is full of headings that used it. Seeing it on a heading inside a personal email is a strong hint that the heading was generated rather than typed. British usage in ordinary writing prefers sentence case, which is another reason this stands out here.",
      "sounds": "A note to a neighbour containing the heading “Key Considerations For The Shared Driveway”.",
      "human": "“About the driveway”, or more likely no heading at all.",
      "data": "Ask whether the document needed headings in the first place. Four headings in a 300-word message is a structure imposed by something that structures everything.",
      "source": null,
      "url": null
     }
    },
    "30": {
     "clue": "Comparison used for teaching — “think of it as a motorway for data” — offered by machines before, or instead of, the actual explanation (7)",
     "answer": "ANALOGY",
     "note": {
      "what": "Teacher mode has a default gesture, and this is it. The pattern to distrust is the ordering: a person who understands a system usually describes it and then offers a comparison if the description was hard; machine prose comparison-first, because the comparison is easier to generate than the mechanism. A second warning sign is that the image is never checked against the thing it describes.",
      "sounds": "“Think of your pension like a snowball rolling down a hill.”",
      "human": "“Your pension gained 4.1% last year, and the fee took 0.7% of that.”",
      "data": "Useful question to ask of any comparison you meet this week: does it survive one more step? A snowball hits a tree. Motorways have junctions. If the writer never took the second step, they were decorating rather than explaining.",
      "source": null,
      "url": null
     }
    },
    "33": {
     "clue": "Three words (9 letters) announcing that the essential point is about to arrive, shortly before the obvious does (9)",
     "answer": "ATITSCORE",
     "note": {
      "what": "This one signals depth by geometry — there is a centre, we are going to it. What follows is usually a restatement of the heading. The tell is not the phrase on its own but the pairing: an elaborate promise of essence attached to a sentence a child could have written.",
      "sounds": "“At its core, recycling is about reducing waste.”",
      "human": "“Kerbside collection halves what goes to landfill, but only if the bins are separated properly.”",
      "data": "Try the deletion test, which is the single most portable trick in this series: strike the opening phrase and read what remains. If the remainder is a truism, the phrase was doing the work of a fact.",
      "source": null,
      "url": null
     }
    },
    "36": {
     "clue": "Word for a child with no parents; here, a demonstrative left with nothing to refer to, as in “this highlights the importance …” (6)",
     "answer": "ORPHAN",
     "note": {
      "what": "The pronoun points backwards at a noun that was never supplied, so the sentence sounds like analysis while making no identifiable claim. It happens because the phrase is a high-probability continuation of almost any paragraph, and it is common in student essays and consultancy decks for the same reason: it fills the slot where a thought belongs. Ask “this what?” and there is frequently no answer in the document.",
      "sounds": "“This underscores the need for a more holistic approach going forward.”",
      "human": "“So the two teams should share one waiting list, which is what the March pilot did.”",
      "data": "Named as “orphaned demonstratives” in a field guide of twelve AI tells, which suggests a thirty-second check rather than close reading: three or more signals within a few hundred words. Try replacing the pronoun with the noun it means; if you cannot, the sentence was empty.",
      "source": "Matthew Vollmer, A Field Guide to AI Tells",
      "url": "https://matthewvollmer.substack.com/p/i-asked-the-machine-to-tell-on-itself"
     }
    },
    "37": {
     "clue": "Football term for one who strikes the ball; also the promised surprise in “but here’s the …”, which usually turns out to be ordinary (6)",
     "answer": "KICKER",
     "note": {
      "what": "False suspense. The phrase promises a revelation and then delivers whatever was going to be said anyway, which is why it can be deleted with no loss. The family is large — “here’s the deal”, “here’s where it gets interesting”, “here’s what most people miss”, “let that sink in”, “read that again” — and it is the most contagious group in the whole catalogue, because human LinkedIn writers copy it deliberately.",
      "sounds": "“But here’s the kicker: the bins are only collected fortnightly.”",
      "human": "“Collections are fortnightly, so the green bin overflows in August.”",
      "data": "Count the suspense phrases per screen of text. One is a style choice. Three means the writing is managing your attention because it has run out of information.",
      "source": null,
      "url": null
     }
    },
    "41": {
     "clue": "Symbol pointing rightwards, used as punctuation to mean “leads to” in documents that contain no diagrams (5)",
     "answer": "ARROW",
     "note": {
      "what": "Unicode decoration is a formatting habit rather than a writing one, which is exactly why it is useful to a non-expert. Chatbots produce these characters because technical documentation is full of them, and they leak into contexts where nothing is being diagrammed. In genuine engineering notes they map a real sequence; in a school newsletter they are a costume.",
      "sounds": "“Sign up → attend the briefing → collect your pack” in a leaflet about a village fun run.",
      "human": "“Sign up by Friday. Come to the briefing on the 2nd. Packs are handed out on the day.”",
      "data": "Try typing one of these characters on your phone. The difficulty is the point — a person writing quickly would have used the word “then”, so an arrow means either a technical author or a machine.",
      "source": null,
      "url": null
     }
    },
    "43": {
     "clue": "Pig-trough word, now the internet's name for cheap machine-made content produced in bulk (4)",
     "answer": "SLOP",
     "note": {
      "what": "Worth knowing because it names the real problem accurately. The complaint is not that a machine was involved — it is that nobody read the result afterwards. A carefully edited AI draft is not slop. An unread one posted at volume is.",
      "sounds": "Forty near-identical articles about the same product, all published the same morning.",
      "human": "One article, by someone who checked.",
      "data": "Keep this distinction in mind while doing the puzzle. Every habit listed here is a sign that nobody edited, not proof of who typed. Plenty of good writing is now part-machine; the tells survive only where a human stopped paying attention.",
      "source": null,
      "url": null
     }
    }
   }
  }
 }
];
