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
  "blurb": "The vocabulary AI cannot put down — the adverbs, the ornate nouns, the corporate verbs, and the travel-brochure adjectives that arrive when nobody looked at the thing being described.",
  "heroes": [
   "DELVE",
   "LOADBEARING",
   "QUIETLY",
   "TAPESTRY",
   "UNDERSCORE",
   "CLUSTER"
  ],
  "grid": [
   ".......Q.....R.",
   ".......UTILISE.",
   "C......I.....A.",
   "L...SYNERGY..L.",
   "U.E....T.....M.",
   "S.M....L.......",
   "TAPESTRY.L...U.",
   "E.O.E....E.H.N.",
   "R.W.R....V.A.D.",
   ".DELVE...E.R.E.",
   "..R.E....R.N.R.",
   "....SHOWCASE.S.",
   "....A....G.S.C.",
   "....STUDIESSHOW",
   "........M....R.",
   ".LANDSCAPE...E.",
   "........O......",
   ".GROUNDBREAKING",
   "........T......",
   "..LOADBEARING..",
   "........N..E...",
   ".....V..T..S...",
   ".GENUINELY.T.U.",
   ".....B..Y..L.N.",
   ".....R...DEEPLY",
   "...BOASTS..D.O.",
   ".....N.......C.",
   "ROBUST.......K."
  ],
  "clues": {
   "across": {
    "3": {
     "clue": "Formal verb whose entire purpose is to be longer than 'use'",
     "answer": "UTILISE",
     "also": "UTILIZE",
     "note": {
      "what": "Here is the clearest evidence anywhere of why AI writes like this, and it is not because it was trained on management consultants. Models are tuned by showing paid raters two answers and keeping whichever they prefer. Raters preferred the version that sounded educated, so the longer word won thousands of small contests and became the default. The tic was not learned from the web; it was rewarded into place afterwards.",
      "sounds": "“Please utilise the attached template to facilitate the process.”",
      "human": "“Use the form attached. It takes two minutes.”",
      "data": "The causal test: an untuned Llama 2-Base model was about equally surprised by human and AI text (entropy 1.616 against 1.633). Once tuned on human ratings, Llama 2-Chat found AI text containing these words far less surprising (0.886) than human text (1.051) — the fingerprint of raters' taste being trained in.",
      "source": "Juzek & Ward, Florida State",
      "url": "https://arxiv.org/html/2412.11385v1"
     }
    },
    "5": {
     "clue": "Word for two things working better together than apart, and the most mocked term in business English",
     "answer": "SYNERGY",
     "note": {
      "what": "The interesting fault is not that it is a cliche but that it names a result while hiding the mechanism. Nobody can dispute that combining two things produced extra value, because no figure was offered. AI produces it freely for the same reason it produces 'ecosystem' and 'holistic': the training data is thick with press releases, and press releases are written to be unarguable.",
      "sounds": "“The merger will unlock powerful synergies across both organisations.”",
      "human": "“They'll share one warehouse and close the smaller one.”",
      "data": null,
      "source": null,
      "url": null
     }
    },
    "7": {
     "clue": "A woven wall hanging. AI drapes this one over culture, history and 'the human experience' whenever it wants to sound profound",
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
    "12": {
     "clue": "Verb meaning to dig into a subject. The most heavily measured AI word in existence — it appears in scientific writing about 28 times more often than it used to",
     "answer": "DELVE",
     "note": {
      "what": "Before 2022 this was a rare, slightly literary word: you delved into an archive or a drawer. Chatbots use it as the ordinary word for 'look at', because the humans paid to rate early AI answers consistently preferred the fancier-sounding option, and that preference got baked into the model.",
      "sounds": "“In this article we delve into the intricacies of remote work.”",
      "human": "“This article looks at remote work.”",
      "data": "Across 15.1 million medical abstracts, 'delves' appeared 28 times more often in 2024 than the pre-ChatGPT trend predicted. One study measured a 6,697% rise between 2020 and 2024, and found ChatGPT-3.5 using 'delves' roughly 570 times more often than human authors did. Worth knowing that these tells have a half-life. Across 1.29 million arXiv abstracts, “delve” and “showcasing” peaked between January and March 2024 and started falling in April, right after researchers named them publicly — while “significant” and “additionally” kept climbing, because nobody memed those. (Human–LLM Coevolution, arXiv.)",
      "source": "Kobak et al., Science Advances",
      "url": "https://www.science.org/doi/10.1126/sciadv.adt3813"
     }
    },
    "13": {
     "clue": "A glass display cabinet in a museum, drafted in as a verb meaning simply 'to show'",
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
    "14": {
     "clue": "Two words: the attribution that borrows a laboratory's authority while naming no laboratory, no date and no sample",
     "answer": "STUDIESSHOW",
     "note": {
      "what": "The most consequential habit in this puzzle, because it is where fluent writing becomes misinformation. Five things are missing every time: who did the work, when, how many people were in it, what method was used, and what the authors said the limits were. AI produces the phrase because the shape of a citation is easy to generate and an actual citation is not. Its family includes 'experts argue', 'research suggests' and 'industry reports indicate'.",
      "sounds": "“Studies show that this approach improves outcomes.”",
      "human": "“A 2019 trial of 240 patients in Leeds found a small improvement, and nobody has repeated it since.”",
      "data": "For comparison, here is what a real attribution looks like: Kousha and Thelwall, working across more than 2.4 million PubMed Central full texts, found the use of 'underscore' rising roughly 1,000% between 2022 and 2024. Named authors, named corpus, stated size, checkable claim.",
      "source": "Kousha & Thelwall",
      "url": "https://arxiv.org/abs/2509.09596"
     }
    },
    "16": {
     "clue": "Word for a stretch of countryside, bolted onto any industry: 'the current ___ of technology'",
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
    "17": {
     "clue": "Adjective taken from the ceremony of digging the first sod for a new building, now applied to minor software updates",
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
    "18": {
     "clue": "Building-trade adjective for a wall that holds the roof up. AI will apply it to a paragraph, a code comment, a decision or your feelings",
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
    "21": {
     "clue": "Adverb insisting on sincerity — something sincere people rarely need to announce",
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
    "23": {
     "clue": "Adverb used to intensify emotions the writer does not actually have — '___ concerned', '___ committed', '___ regret'",
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
    "24": {
     "clue": "Verb meaning to brag. AI uses it to mean nothing more than 'has': the hotel ___ 47 rooms",
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
    "25": {
     "clue": "Adjective meaning sturdy, applied indiscriminately to frameworks, findings, systems and debate",
     "answer": "ROBUST",
     "note": {
      "what": "Vague strength. It signals that you should feel reassured while offering no measurement. AI uses it because it reads as technical and is almost impossible to contradict.",
      "sounds": "“We have implemented robust safeguards and a robust review process.”",
      "human": "“Two people check every file, and we keep a log for a year.”",
      "data": "Watch for the same adjective twice in one sentence, as in the example. Human writers instinctively vary; models reach for the highest-probability word again and again, which is why repetition within a paragraph is a stronger signal than any single word.",
      "source": null,
      "url": null
     }
    }
   },
   "down": {
    "1": {
     "clue": "Adverb meaning without noise. AI uses it to make an ordinary fact sound like a secret you have just been let in on",
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
    "2": {
     "clue": "A kingdom, borrowed to mean nothing more than 'area' or 'field'. One of the confirmed spike words",
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
    "4": {
     "clue": "A group of things close together — and the number of these habits you need before saying anything out loud",
     "answer": "CLUSTER",
     "note": {
      "what": "The single most important idea in this puzzle. One tell is a coincidence. Three in the same paragraph is AI. This is not a rule of thumb invented for comfort; it is what the measurements actually support.",
      "sounds": "“Let's delve into the intricate tapestry of this pivotal moment, which underscores a truly transformative shift.” Five tells, one sentence. That is AI.",
      "human": "One 'delve' in an otherwise ordinary email is one word. Leave it.",
      "data": "Before ChatGPT these words appeared independently of one another. The statistical link between 'underscore' and 'pivotal' was 0.03 in 2022 and 0.45 by 2024; between 'underscore' and 'delve', 0.02 to 0.31. The words did not just get more common — they started travelling together.",
      "source": "Kousha & Thelwall",
      "url": "https://arxiv.org/abs/2509.09596"
     }
    },
    "6": {
     "clue": "Verb meaning to give someone authority. In practice the word that ends a thousand AI-written conclusions",
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
    "8": {
     "clue": "Two words standing in for plain 'is', so that a building no longer is a reminder of anything but performs the reminding as a duty",
     "answer": "SERVESAS",
     "note": {
      "what": "The copula gets promoted. 'Is' states a fact and stops; this phrasing dresses the same fact in a job title, and its cousins do the same work — 'stands as', 'represents', 'marks', 'acts as', 'functions as'. AI reaches for it because it sounds considered while committing to nothing, and because encyclopaedia and press-release prose, which the models read a great deal of, is full of it. Unlike 'boasts' or 'showcase' it is not a rare word, so it slips past readers who are only watching for exotic vocabulary. The noun form does the same job: “a testament to”, which means “proof of” and costs three extra words to say so.",
      "sounds": "“The new wing serves as a reminder of the school’s commitment to the arts.”",
      "human": "“The new wing is named after Mrs Ellery, who taught art here for thirty-one years.”",
      "data": "The test is substitution rather than deletion: put 'is' back and read it again. 'The building is a reminder' loses nothing, which means the longer phrase was carrying no meaning, only ceremony. Where 'serves as' is doing real work — a room that genuinely doubles as something else — the swap fails and you will hear it fail.",
      "source": null,
      "url": null
     }
    },
    "9": {
     "clue": "Borrowed from finance and mechanics, where it means gaining force from a fulcrum. Three syllables standing in for the one-syllable word 'use'",
     "answer": "LEVERAGE",
     "note": {
      "what": "Corporate vocabulary that AI picked up wholesale. It belongs with 'utilise', 'harness' and 'operationalise' — a family whose only function is to make a sentence sound more expensive than it is.",
      "sounds": "“We leverage AI to optimise workflows.”",
      "human": "“We use AI to speed up scheduling.”",
      "data": "Useful editing habit: replace it with 'use' and see whether the meaning changes. It never does. If it never does, the longer word was doing no work — the same test that catches 'load-bearing'.",
      "source": null,
      "url": null
     }
    },
    "10": {
     "clue": "Verb meaning to emphasise or draw attention to. Rose roughly 1,000% in academic writing after 2022, and now travels in a pack with 'delve' and 'pivotal'",
     "answer": "UNDERSCORE",
     "note": {
      "what": "A perfectly good word that AI reaches for instead of 'shows', 'proves' or 'means'. It belongs to a family of what you might call significance verbs — underscores, highlights, demonstrates, exemplifies, showcases — all used to avoid the plain word 'is'.",
      "sounds": "“These findings underscore the importance of early intervention.”",
      "human": "“This shows early treatment matters.”",
      "data": "Use of 'underscore' rose about 1,000% between 2022 and 2024. The number of papers using it six or more times rose by over 10,000% between 2022 and 2025 — which is the real tell: not the word, but the repetition.",
      "source": "Kousha & Thelwall",
      "url": "https://arxiv.org/abs/2509.09596"
     }
    },
    "11": {
     "clue": "Straps for a horse or a climber, repurposed as a verb meaning to use something",
     "answer": "HARNESS",
     "note": {
      "what": "A borrowed-physics word. You harness an ox or a waterfall — something with real pulling force. Applied to 'the power of data' or 'the potential of your team', the machinery is imaginary.",
      "sounds": "“Harness the power of your data to unlock new insights.”",
      "human": "“Look at your sales figures and you may spot something useful.”",
      "data": "This is the same fault as 'load-bearing', and it points at something deeper than word choice: AI routinely hands physical force and agency to things that have none. One programmer collected examples from code reviews — 'the lateral rides the index', 'the query hit 19 seconds', 'adoption moved out'.",
      "source": "Jesse Duffield, AI-isms go deeper",
      "url": "https://jesseduffield.com/AI-isms-go-deeper/"
     }
    },
    "15": {
     "clue": "Adverb, usually preceded by 'more', asserting a ranking of significance that nobody has established",
     "answer": "IMPORTANTLY",
     "note": {
      "what": "A promotion handed out with no committee. 'More importantly' claims a comparison has been made between two things and settled, when the writer has merely moved on. There is a caution attached to this whole family, though, and it is worth carrying into the rest of the puzzle: some of the phrases that spiked after 2022 are utterly bland ones, so a single flat signpost convicts nobody.",
      "sounds": "“More importantly, this underscores our ongoing commitment to excellence.”",
      "human": "“The bit that matters is the deadline. It moved to 3 October.”",
      "data": "In a study of 27.5 million medical records, 103 of 135 candidate AI-influenced terms cleared the statistical threshold in 2024 — but so did supposedly neutral control phrases such as 'further research' and 'aim to'. Some of the rise is AI and some is fashion.",
      "source": "Matsui, Perspectives on Medical Education",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12679996/"
     }
    },
    "19": {
     "clue": "Cosy verb for how a village sits in a valley. In AI prose, nothing is ever merely located",
     "answer": "NESTLED",
     "note": {
      "what": "Geography becomes affectionate. Towns are nestled, cottages are tucked away, restaurants are hidden gems. It is a small, harmless, extremely consistent habit — which is what makes it useful. The fixed phrase to watch is “in the heart of”, which AI travel copy attaches to every cafe, market and hotel on earth.",
      "sounds": "“Nestled in the rolling hills of Devon lies a charming village.”",
      "human": "“The village is twenty minutes off the A38, down a lane with no passing places.”",
      "data": "Also watch the sentence shape here, not just the words: starting with the scene-setting phrase and putting the subject at the end ('Nestled in X lies Y') is a construction models produce far more often than people do.",
      "source": null,
      "url": null
     }
    },
    "20": {
     "clue": "Adjective meaning full of energy, applied to every city, market and community on earth",
     "answer": "VIBRANT",
     "note": {
      "what": "A travel-brochure word. It means the writer has not been there. A person names the specific street, the smell, the price of the coffee; AI reaches for the energy level, because that is what descriptions of places statistically contain.",
      "sounds": "“The vibrant city of Bristol boasts a bustling harbour.”",
      "human": "“Bristol's harbour is full of boats and about six competing coffee stands.”",
      "data": "The brochure family — vibrant, bustling, nestled, picturesque, charming, breathtaking, renowned, a hidden gem, in the heart of — clusters so tightly that finding three of them in a paragraph is close to conclusive. 'Boasts' is on the verified spike list.",
      "source": "Juzek & Ward, Florida State",
      "url": "https://arxiv.org/html/2412.11385v1"
     }
    },
    "22": {
     "clue": "Verb for opening something with a key, used on 'potential', which has no lock",
     "answer": "UNLOCK",
     "note": {
      "what": "Borrowed physics again, in motivational form. Potential is not a door, insight is not behind a lock, and value is not in a safe. The metaphor is decoration pretending to be a mechanism.",
      "sounds": "“Unlock your team's full potential with our platform.”",
      "human": "“The scheduling tool saves our team about four hours a week.”",
      "data": "Its family: unlock, unleash, elevate, empower, supercharge, propel, catalyse. All movement, no direction — none of them tells you what actually happens or to whom. 'Unlocking' also appears on the corpus-verified list of AI-influenced words.",
      "source": "Matsui, Perspectives on Medical Education",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12679996/"
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
   "RHETORICALSELFANSWER",
   "FRAGMENT",
   "TWAIN"
  ],
  "grid": [
   ".JUST.....E.......F.",
   "....R.....M...D.B.A.",
   "W...I.....D.F.E.U.L.",
   "O.N.C.....A.A.T.R.S.",
   "RHETORICALSELFANSWER",
   "T.G.L.....H.S.C.T.B.",
   "H.A.O.A..F..E.H.I.A.",
   "N.T.N.B..O..R.M.N.L.",
   "O.I...S..R..A.E.E.A.",
   "T.V...T..T..N.N.S.N.",
   "I.E...R..U..G.T.S.C.",
   "N.P...A..N..E.....E.",
   "G.A...C..E..........",
   ".DRAMATICCOUNTDOWN..",
   "..A...N..O..........",
   "..L...O..O....TYPO..",
   "..L...U..K...P..A...",
   "..E.GENERICOPENER...",
   "..L......E...R..T...",
   "..I.TWAIN.T..P..I...",
   "..S...N...H..L..C...",
   ".IMPERATIVE..E..I...",
   "......P...K..X..P...",
   "......H...I..I..L...",
   "..SENSORY.C..T.HEDGE",
   "......R...K..Y......",
   "CIRCULAR..E.........",
   ".........FRAGMENT..."
  ],
  "clues": {
   "across": {
    "1": {
     "clue": "Small adverb that turns the most cited AI sentence into its most cited variant: “not ___ X, but Y”",
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
    "10": {
     "clue": "Name for posing a question no one asked and answering it instantly: 'The result? Devastating.'",
     "answer": "RHETORICALSELFANSWER",
     "note": {
      "what": "The shortest way to fake momentum. A real writer earns a reveal by building to it; this device skips the building and keeps the reveal. Because it is so cheap, models produce it constantly, and it is the easiest tell to teach someone in one sentence. It comes as a stock of question fragments — “The result?”, “The reality?”, “The catch?”, “The truth?”, “The worst part?” — and in a longer form that parks an empty question-word phrase in front of the real subject: “What this really means is …”.",
      "sounds": "“The catch? There isn't one. The best part? It's free.”",
      "human": "“There's no catch, and it costs nothing.”",
      "data": "Full sentences are the fix and the test: if you can restore the question fragment to an ordinary sentence with no loss ('the result was devastating'), the fragment was decoration. That single rewrite removes a large fraction of AI cadence.",
      "source": null,
      "url": null
     }
    },
    "13": {
     "clue": "Name for the 'Not X. Not Y. Just Z.' pattern — two things denied before the real point is unveiled",
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
    "14": {
     "clue": "Small slip of the fingers. Two thousand words of informal writing without a single one is a weak signal — and a cruel thing to accuse anyone over",
     "answer": "TYPO",
     "note": {
      "what": "Real informal writing carries traces of being made: a repeated word, a sentence that changes direction halfway, a comma in the wrong place, an abandoned clause. AI text has none, because there was no moment of composition to leave a mark. The same applies to unwavering house style across a long document, where a person's capitalisation and list punctuation usually drift.",
      "sounds": "Two thousand words of chatty prose with flawless commas, consistent capitalisation and not one repeated word.",
      "human": "“Sorry — sent that too fast, I meant Thursday not Tuesday.”",
      "data": "Take this one gently. Linguistics experts shown research abstracts picked out the AI-written ones only 38.9% of the time, worse than guessing, and they erred towards calling AI text human. Careful writers exist, and a clean document proves nothing on its own.",
      "source": "study summary",
      "url": "https://www.reddit.com/r/science/comments/16g2kpt/ai_vs_human_writing_experts_fooled_almost_62_of/"
     }
    },
    "17": {
     "clue": "Two words for the throat-clearing first sentence that would fit any subject on earth: “In today's rapidly evolving landscape …”",
     "answer": "GENERICOPENER",
     "note": {
      "what": "An opening line that contains no information is the most reliable single sign that nobody chose the subject. The model has to start somewhere, and the era-scale platitude is the highest-probability opening in its training data, so it functions as a warm-up lap. Siblings: “in an era where”, “in an increasingly connected world”, “as technology continues to evolve”, “in the modern workplace”. Its cousins open the same lap from a different angle: a question flung at a reader who never agreed to answer one (“What if everything you know about sleep is wrong?”), a speculative “imagine” or “what if”, and the confiding observer pose — “I've been thinking about this a lot lately.”",
      "sounds": "“In today's fast-paced digital environment, effective communication has never been more important.”",
      "human": "“The rota went out four days late again, so two shifts were uncovered on Saturday.”",
      "data": "Named first in a published set of twelve cadence detectors, each with an AI sample and the human sentence that should have replaced it. Deleting the opening paragraph of a suspect piece is the quickest possible edit: if nothing is lost, it was a lap of the track.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "18": {
     "clue": "American author of Huckleberry Finn, whose punctuation habits would fail every AI detector ever built",
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
    "21": {
     "clue": "Grammatical mood used for commands. It is the third beat of the motivational three-step: short claim, expansion, instruction",
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
    "22": {
     "clue": "Adjective for detail about smell, light and sound, dropped in to fake a scene: “The aroma of fresh coffee filled the room.”",
     "answer": "SENSORY",
     "note": {
      "what": "Descriptive detail earns its place when it is specific, surprising or consequential. The AI version is a stock backdrop: streaming sunlight, distant traffic, the smell of rain, the hum of a laptop. Nothing in it could only have happened in that room on that day, which is precisely what a person's memory supplies without being asked.",
      "sounds": "“Sunlight streamed through the window as the team gathered, the aroma of fresh coffee filling the air.”",
      "human": "“We met in the room with the broken blind, so half the table could not see the screen.”",
      "data": "Ask whether the detail could be swapped into any other scene without adjustment. Real specifics resist relocation; a detail that fits everywhere was chosen by probability rather than recollection.",
      "source": null,
      "url": null
     }
    },
    "23": {
     "clue": "Garden-boundary word, also the name for a qualifying caveat bolted to the front of a confident generalisation: “While individual cases vary, the evidence consistently suggests …”",
     "answer": "HEDGE",
     "note": {
      "what": "The caveat performs nuance and the second half withdraws it. Nothing is specified: not the evidence, not the exception, not the degree of confidence, not who is affected. Models produce the pair because being simultaneously careful and assertive is what raters reward, and because a real limitation would require a real number. Siblings: “it is worth noting”, “while not universal”, “though results may differ”, “generally speaking”, “in most cases”.",
      "sounds": "“While every school is different, research consistently shows that parental engagement is key.”",
      "human": "“At this school, the children whose parents came to the October evening did better in the March tests. We do not know why.”",
      "data": "Catalogued as one of twelve named cadence patterns, each documented with an AI example beside a human rewrite. The hedge-assertion pair is the one non-specialists find hardest to see, because it looks like good manners.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "24": {
     "clue": "Adjective for a sentence that arrives back where it set off: “Effective communication is about communicating effectively.”",
     "answer": "CIRCULAR",
     "note": {
      "what": "Padding of this kind appears when a model must produce a paragraph on a topic it has nothing to add to. The definition restates the term, the example restates the definition, and the word count rises without a single new fact. It is the mechanism behind fractal summaries as well, where each section explains that it is about the thing named in its heading.",
      "sounds": "“Sustainability means adopting practices that are sustainable over the long term.”",
      "human": "“We cut the van fleet from nine to four and moved deliveries to Tuesdays and Fridays.”",
      "data": "The information test: after reading a paragraph, try to state one thing you now know that you did not before. If nothing comes, the paragraph was a placeholder — and this is the fastest way to sift a long AI-written document.",
      "source": null,
      "url": null
     }
    },
    "25": {
     "clue": "Grammatical term for an incomplete sentence. Used as an entire paragraph. For emphasis. Like this",
     "answer": "FRAGMENT",
     "note": {
      "what": "Manufactured drama, and described as the most common and least discussed tic of all. A very short sentence or a phrase with no verb is set on its own line so it feels weighty. Used once by a good writer it lands; used constantly it is a drum machine. Three or more of them in a row is the staccato version, each landing like a drumbeat and none of them carrying an argument.",
      "sounds": "“That's not a small detail. It's the whole design. Deliberately. From the start.”",
      "human": "“That detail was deliberate, and it shaped the rest of the design.”",
      "data": "The related trick is the rhetorical self-answer — posing a question nobody asked and answering it immediately: 'The result? Devastating.' 'The reality? Nobody knows.' 'Here's the best part: it's free.' All of them buy suspense on credit and then pay out something ordinary.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    }
   },
   "down": {
    "2": {
     "clue": "The formal name for a list of exactly three items. One is good writing; four in a row is AI keeping time",
     "answer": "TRICOLON",
     "note": {
      "what": "Three-part lists are genuinely powerful — 'friends, Romans, countrymen'. The tell is not their existence but their regularity. Models fall into the rhythm every paragraph, because three-item lists are statistically the most common shape in persuasive prose. The numbered version does the same thing out loud — “first”, “second”, “third” laid over material that has no sequence in it.",
      "sounds": "“It's about speed, scale and simplicity — clarity, focus and momentum — people, process and product.”",
      "human": "“It has to be fast. That's the only thing that matters here.”",
      "data": "Try counting instead of reading. Human paragraphs are lumpy: one list of two, one of five, one sentence with no list at all. If every paragraph in a piece contains a group of three, you are looking at a metronome rather than a mind.",
      "source": null,
      "url": null
     }
    },
    "3": {
     "clue": "The long punctuation stroke — like these — that the internet decided was proof of AI, on rather thin evidence (2 words, 6)",
     "answer": "EMDASH",
     "note": {
      "what": "The most famous tell and one of the least reliable. Yes, some models use it more than most people do. But the rate varies wildly between models, respectable human writers are dash addicts, and the whole habit may be an accident of training on old books.",
      "sounds": "A paragraph with four of them — one per sentence — each one pivoting mid-thought — which is a lot.",
      "human": "Commas and full stops, mostly. Two or three dashes in a whole article is normal.",
      "data": "The numbers, in full: GPT-4.1 runs at 10.62 per thousand words against a matched human baseline of 3.23. But Claude used only 2 in 948 words in one head-to-head test while Gemini used none, and Mark Twain's Huckleberry Finn runs at 10.13 — statistically the same as GPT-4.1. Any threshold that convicts ChatGPT also convicts Twain. Likely cause: models are trained heavily on late-1800s books, which used about 30% more dashes than we do — English dash use peaked around 1860 and has been falling ever since. The baseline also moves between varieties of the language: one Nigerian English corpus runs about ten times below the general rate, so a writer's background shifts the number before any AI is involved. (Sean Goedecke.)",
      "source": "Slop Detector's em-dash measurement",
      "url": "https://slopdetector.org/blog/em-dash-ai-tell-data"
     }
    },
    "4": {
     "clue": "Two words for giving every side equal weight regardless of what the evidence actually says",
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
    "5": {
     "clue": "Noun for emotional and personal distance: the register of “It could be observed that …” where a person would simply say what they think",
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
    "6": {
     "clue": "Technical term for variation in sentence length. The quality human writing has and AI writing conspicuously lacks",
     "answer": "BURSTINESS",
     "note": {
      "what": "Human prose lurches. A forty-word sentence, then four words. Then a sentence that goes on too long because the writer got interested. AI prose clusters tightly around fifteen to twenty-five words, paragraph after paragraph, and reads like a treadmill even when every sentence is fine. Tone flattens the same way length does: identically polite about a data breach, a birthday and a bereavement, because nothing in the text knows which is which.",
      "sounds": "Three consecutive sentences of almost identical length, each one balanced, each one closing neatly. Nothing wrong with any of them. Nothing alive in them either.",
      "human": "Real writing has an uneven pulse. Some sentences are too long. Some aren't.",
      "data": "You can feel this without counting, which makes it one of the most useful tells for a non-expert. It is also the reason perfect grammar is suspicious: no typos, no fragments, no risks, no sentence that starts one way and changes its mind.",
      "source": null,
      "url": null
     }
    },
    "7": {
     "clue": "Three words, the transition that spends a clause announcing that a fact deserves your attention rather than spending it on the fact",
     "answer": "WORTHNOTING",
     "note": {
      "what": "Connective tissue with nothing on either side of it. A writer who has found something genuinely surprising states it; the surprise does the work. This phrasing instead instructs you to be interested, which is why it clusters so thickly around unremarkable material — 'it bears mentioning', 'notably', 'interestingly', 'crucially', 'it is important to note'. The adverb form of the same move is elsewhere in this series, under the eleven-letter one usually preceded by 'more'. AI produces these because they cost almost nothing and make a heap of facts feel like an argument that is going somewhere.",
      "sounds": "“It’s worth noting that the deadline has moved to the 14th.”",
      "human": "“The deadline has moved to the 14th.”",
      "data": "This is the cleanest deletion test in the puzzle, because the phrase is detachable by design. Cross out the whole clause up to 'that' and read what is left. If the sentence has lost a fact, the phrase was carrying one; it almost never has. Try it on a paragraph rather than a sentence — the tell is not one instance but three of them pointing at things nobody would otherwise have queried.",
      "source": null,
      "url": null
     }
    },
    "8": {
     "clue": "Two words for a bogus span whose two ends are not ends of anything: “from innovation to cultural transformation”",
     "answer": "FALSERANGE",
     "note": {
      "what": "A real range has a scale: from Monday to Friday, from ten pounds to fifty. The AI version borrows the grammar of a spectrum and fills it with two abstractions that do not sit on one, so it sounds comprehensive while listing two things. The habit belongs to the same family as ornate container nouns, where the sentence describes a shape rather than a fact.",
      "sounds": "“Our work spans everything from grassroots engagement to systemic change.”",
      "human": "“We run a Tuesday drop-in and we lobbied the county council twice last year.”",
      "data": "Deletion test: replace “from A to B” with “A and B”. If the sentence loses nothing but a little grandeur, there was never a range — and if the two items would not fit on the same axis, no rewrite will save it.",
      "source": null,
      "url": null
     }
    },
    "9": {
     "clue": "The formal research name for the 'it's not X — it's Y' sentence: the single most cited tell in AI writing",
     "answer": "NEGATIVEPARALLELISM",
     "note": {
      "what": "This is the modern research term for the tic; 'antithesis' is the ancient name for the innocent version. AI produces it about three times as often as people because opening with a negation is cheap — it buys a beat of fluent, confident text before any claim has to be made. It performs insight without incurring the cost of having any. The same move works as an opening, swapping a modest framing for a grander one: “This isn't a time-management problem — it's a values problem.”",
      "sounds": "“This isn't a technology problem — it's a trust problem.” Variants: 'not just X, but Y'; 'not because X, but because Y'; 'the question isn't X, the question is Y'.",
      "human": "“People don't trust it. That's the actual obstacle.”",
      "data": "The best evidence in the whole field. In a 24-billion-word news corpus, 'not just X, but Y' rose 45% between 2015 and 2025 — while 'not only X, but Y', which means exactly the same thing, rose about 1%. Two identical constructions, one of which suddenly took off. Meanwhile its use in corporate communications more than quadrupled from 2023 to 2025, and variants appeared in roughly 6% of messages in a large leaked set of real ChatGPT conversations.",
      "source": "The Atlantic on negative parallelism",
      "url": "https://www.theatlantic.com/technology/2026/07/ai-chatbot-writing-tic-negative-parallelism/687892/"
     }
    },
    "11": {
     "clue": "Two words for a subject that cannot act but is handed a verb anyway: “The decision carries weight.”",
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
    "12": {
     "clue": "Two words for the closer so universal it would fit any article ever written: “The best investment is in the people around you.”",
     "answer": "FORTUNECOOKIE",
     "note": {
      "what": "Where the resolution closer asserts that matters are settled, this one steps back and blesses the whole human condition. The test is portability: paste the final sentence onto an article about pension reform, then onto one about badgers, and see whether either notices. Nothing in it belongs to the piece it ends. Its siblings are the announced conclusion, which tells you it has arrived rather than arriving, and the minted maxim built from an abstract noun and a two-word predicate: “Clarity is not a luxury.”",
      "sounds": "“In the end, the tools matter less than the people who use them.”",
      "human": "“If the licence renews in March we keep the tool. If not, everything moves to the spreadsheet, which nobody wants.”",
      "data": "The fortune-cookie closer completes the published dozen of cadence detectors. Human endings tend to be slightly unsatisfying, because real situations are unresolved at the moment of writing.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "15": {
     "clue": "Grammatical name for an -ing verb form. AI trails whole clauses of them off the end of sentences to imply importance: “highlighting its significance”",
     "answer": "PARTICIPLE",
     "note": {
      "what": "This is the grammar of a summary written by someone who has not read the thing. The clause asserts that something matters while naming no actor, no mechanism and no consequence, and it can be deleted without loss in almost every case. Watch for the stock set: reflecting broader trends, underscoring the need, showcasing its potential, contributing to the development of, paving the way for.",
      "sounds": "“The council approved the scheme, reflecting a broader shift towards sustainable transport and underscoring its commitment to residents.”",
      "human": "“The council approved the scheme by seven votes to four. Two councillors who voted against cited the loss of parking on Mill Road.”",
      "data": "Several of these participles are measured outliers in their own right: across 15.1 million medical abstracts, “showcasing” ran at 10.7 times its expected 2024 rate and “underscoring” appears on the verified list of words that both spiked in human writing and are over-produced by ChatGPT.",
      "source": "Kobak et al., Science Advances",
      "url": "https://www.science.org/doi/10.1126/sciadv.adt3813"
     }
    },
    "16": {
     "clue": "Statistical measure of how surprising the next word in a sentence is. AI keeps it low, always choosing the safest option",
     "answer": "PERPLEXITY",
     "note": {
      "what": "This is the engine underneath most of the other tells. A model picks the most probable next word, so its prose is smooth, predictable and slightly generic — it never reaches for the odd word, the wrong-but-better word, or the private joke.",
      "sounds": "“In today's rapidly evolving digital landscape, businesses must adapt to remain competitive.” Every word is the most likely next word.",
      "human": "“Everything's changed since Christmas and half our suppliers have vanished.”",
      "data": "It is also the source of the cruellest false positive. Detection software flags low perplexity as AI-like — but simple, careful, predictable English is exactly what people write when English is not their first language. The software is not detecting AI. It is detecting plainness.",
      "source": "Liang et al., Patterns",
      "url": "https://www.sciencedirect.com/science/article/pii/S2666389923001307"
     }
    },
    "19": {
     "clue": "Rhetorical term for beginning several consecutive sentences with exactly the same words: “They assume users will pay. They assume developers will build.”",
     "answer": "ANAPHORA",
     "note": {
      "what": "Deliberate repetition is one of the oldest tools in English, which is why nobody notices when a model reaches for it by default. A language model is an engine for continuing patterns, so once it has produced one sentence opening it becomes the single most probable way to open the next one. The result reads like a template with the variables filled in, and it usually arrives in threes, alongside the rule-of-three cadence.",
      "sounds": "“We believe in transparency. We believe in accountability. We believe in doing better.”",
      "human": "“We publish the figures every quarter, including the bad ones. Last year we got the staffing forecast badly wrong.”",
      "data": "Test: cover everything except the first three words of each sentence in a paragraph. If the stubs are identical, a person would almost certainly have varied one of them out of boredom.",
      "source": null,
      "url": null
     }
    },
    "20": {
     "clue": "Two words promising that the best or worst part is still coming, generally before a fairly ordinary number",
     "answer": "THEKICKER",
     "note": {
      "what": "The phrase does the work a good fact would have done. It instructs the reader to be startled by whatever follows, which means the writer either does not trust the material or has not checked whether it is startling. Its relatives run to a dozen: “here's the deal”, “here's where it gets interesting”, “here's what most people miss”, “here's the uncomfortable part”, “and it gets worse”, “but wait”. Close relatives include “but here's the thing”, “here's the best part” and the instruction to admire what you have just read: “let that sink in”.",
      "sounds": "“Costs rose 4% last year. And here's the kicker: nobody noticed.”",
      "human": "“Costs rose 4% and it took eleven months for anyone to raise it.”",
      "data": "Deletion test again, with a twist: cut the announcement and see whether the following sentence still lands. If it does, the announcement was stealing its credit; if it does not, the sentence was never a kicker. The published set of twelve cadence detectors lists this build-up among the shapes worth watching. (Bloomberry.)",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    }
   }
  }
 },
 {
  "id": "p3",
  "issue": "No. 3",
  "title": "The Chat-back",
  "blurb": "The manners it forgot to delete — “Great question!”, “You're absolutely right!” — plus what AI does to the look of a document: the bold bullets, the stray asterisks, the arrows used as punctuation.",
  "heroes": [
   "YOUREABSOLUTELYRIGHT",
   "GREATQUESTION",
   "CERTAINLY",
   "LETSBREAKTHISDOWN",
   "BOLDBULLETS",
   "TOEFL"
  ],
  "grid": [
   "...............C....",
   "....ANALOGY.EXPERTS.",
   ".........R..M..R....",
   "....O....A..O..T.D..",
   "..MARKDOWN..J..A.I..",
   "....P.E..D.LISTICLE.",
   "....H.S..I.....N.U..",
   "....A.P.BOLDBULLETS.",
   "....N.I..S.E...Y.I..",
   "P.....T..E.A.....O..",
   "E.I.TOEFL..D.A...N..",
   "N.N......V.M.N.....L",
   "N.S......U.E.A.....E",
   "YOUREABSOLUTELYRIGHT",
   "D.M.N..Y.N.A.O..N..S",
   "R.M.G..C.E.P.G..V..B",
   "O.A.A..O.R.H.Y..E..R",
   "P.R.G..P.A.O.S..N..E",
   "P.Y.E..H.B.R.T..T..A",
   "E...M..A.I...A..E..K",
   "D...E..N.L...C..D..T",
   "....N..C.I...K..C..H",
   "..S.T..Y.T......O..I",
   "..L.B....Y.IMAGINE.S",
   "..O.A...........C..D",
   "DUPLICATION.....E..O",
   "....T...........P..W",
   ".......GREATQUESTION"
  ],
  "clues": {
   "across": {
    "2": {
     "clue": "Comparison used for teaching — “think of it as a motorway for data” — offered by AI before, or instead of, the actual explanation",
     "answer": "ANALOGY",
     "note": {
      "what": "Teacher mode has a default gesture, and this is it. The pattern to distrust is the ordering: a person who understands a system usually describes it and then offers a comparison if the description was hard; AI prose comparison-first, because the comparison is easier to generate than the mechanism. A second warning sign is that the image is never checked against the thing it describes. The most worn example is the borrowed engine bay — “under the hood” — wheeled out before explaining absolutely anything technical.",
      "sounds": "“Think of your pension like a snowball rolling down a hill.”",
      "human": "“Your pension gained 4.1% last year, and the fee took 0.7% of that.”",
      "data": "Useful question to ask of any comparison you meet this week: does it survive one more step? A snowball hits a tree. Motorways have junctions. If the writer never took the second step, they were decorating rather than explaining.",
      "source": null,
      "url": null
     }
    },
    "4": {
     "clue": "Specialists with authority in a field. Linguistics ones, shown research abstracts, identified the AI-written ones only 38.9% of the time",
     "answer": "EXPERTS",
     "note": {
      "what": "Worse than a coin toss, and informatively so: they were biased towards calling AI text human, which is the opposite of the mistake most people fear. Expertise in language does not transfer to authorship detection, because the tells in this puzzle are habits of an unedited draft rather than properties of a sentence. A separate study of 1,682 adults found per-story accuracy between 31% and 53%, and readers rated the AI-written stories higher for being well written.",
      "sounds": "“I can always tell.”",
      "human": "“I noticed four of the formatting tells in one email, so I asked the sender whether they had drafted it in a chatbot.”",
      "data": "The 38.9% figure comes from linguistics experts assessing research abstracts. Pair it with the reader study: 1,682 participants aged 18 to 81 scored 31.43% to 52.82% per story, and preferred the AI’s prose for absorption (1.42 against 0.97). Nobody reliable is walking around with this skill.",
      "source": "Study summary: experts fooled by AI abstracts",
      "url": "https://www.reddit.com/r/science/comments/16g2kpt/ai_vs_human_writing_experts_fooled_almost_62_of/"
     }
    },
    "7": {
     "clue": "Plain-text formatting notation, invisible once rendered, which leaves stray asterisks and hash marks behind when pasted into Facebook",
     "answer": "MARKDOWN",
     "note": {
      "what": "This is the single most practical tell in the series, because it requires no judgement at all. Chatbots write in this notation by default; a chat window renders it as headings and heavy type, while a comment box, a text message or a job advert does not. What you see is the plumbing: double asterisks around phrases, hash marks in front of headings, hyphens starting lines. Title Case Applied To Every Major Word belongs to the same family: chat interfaces render headings that way, so the habit follows the text into shopping lists and one-line notes.",
      "sounds": "“**Update:** The hall is booked for the 3rd. ## What to bring” — posted verbatim to a village Facebook group.",
      "human": "“Hall’s booked for the 3rd. Bring a chair if you can.”",
      "data": "Nobody has counted how often this happens, and no study needs to — a person typing into Facebook does not surround words with asterisks. Treat it the way you would treat a price tag left on a gift.",
      "source": null,
      "url": null
     }
    },
    "9": {
     "clue": "Portmanteau for an article that is really a numbered list; AI writes them even when the paragraphs are pretending otherwise",
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
    "10": {
     "clue": "Two words for the list where every single point opens with an emphasised label followed by a colon",
     "answer": "BOLDBULLETS",
     "note": {
      "what": "This is the default shape of AI-generated Markdown, and it is the most visible tell in the whole series because you can see it from the other side of a desk. Emphasis works by scarcity: if every line is heavy, the eye has nothing to land on. It also disguises the absence of an argument, since a list of labels never has to explain how one point leads to the next.",
      "sounds": "A four-item list where each item begins “**Cost:**”, “**Timeline:**”, “**Risk:**”, “**Next steps:**” — in a two-paragraph email about a leaking roof.",
      "human": "“The roof will cost about £900 and they can come on the 14th. The risk is the ceiling in the back bedroom.”",
      "data": "A published field guide to AI tells lists “nested bold bullets where prose would do” among the twelve things to check, and says that three or more such signals within a few hundred words means the text was probably AI-touched. Counting beats reading.",
      "source": "Matthew Vollmer, A Field Guide to AI Tells",
      "url": "https://matthewvollmer.substack.com/p/i-asked-the-machine-to-tell-on-itself"
     }
    },
    "14": {
     "clue": "Standard English exam for non-native speakers. Seven detection tools wrongly flagged 61% of these genuinely human essays as AI-written",
     "answer": "TOEFL",
     "note": {
      "what": "The ethical heart of the puzzle. AI detectors work by flagging simple, predictable English — and people writing in a second language use a narrower, more careful, more predictable range of words, for entirely human reasons. The software cannot tell the difference between AI and a careful learner.",
      "sounds": "A plain, correct, slightly formal paragraph by someone who learned English at school — flagged as a robot.",
      "human": "Say nothing. You cannot tell, and the cost of being wrong falls on the person least able to argue back.",
      "data": "Across 91 real human essays, seven detectors produced a 61% average false-positive rate; 97.8% were flagged by at least one tool and 19% by all seven. Native-speaker school essays were flagged almost never. The killer detail: when researchers asked an AI to rewrite the same essays in more 'literary' language, the false-positive rate fell to 11.6%. The tools were measuring plainness, not authorship. Scale makes even a good detector dangerous: Turnitin publishes a 0.51% false-positive rate, which sounds small until you apply it to the 200 million papers it checks a year and get roughly a million wrongly flagged. (Pangram.)",
      "source": "Liang et al., Patterns",
      "url": "https://www.sciencedirect.com/science/article/pii/S2666389923001307"
     }
    },
    "18": {
     "clue": "Four-word phrase (run together, 20 letters) a chatbot fires back the instant you contradict it — even when what you said was nonsense you shouted at the screen",
     "answer": "YOUREABSOLUTELYRIGHT",
     "note": {
      "what": "The most parodied sentence in AI. It commits to three things at once: that you were right, that you were completely right, and that the AI is delighted to have changed its mind. It arrives with equal enthusiasm whether you have found a real bug or typed gibberish, which is exactly why it means nothing.",
      "sounds": "“You're absolutely right! I apologise for the confusion. Let me fix that.”",
      "human": "“No — that bit was fine. The problem is in the other file.”",
      "data": "Agreement this reflexive is measurable. A study of 11 leading systems found they endorsed the user's stated course of action 49% more often than human respondents did, including in situations involving deception. A separate benchmark found flattering behaviour in 58% of tested exchanges.",
      "source": "AP on the Science study of chatbot flattery",
      "url": "https://www.ap.org/news-highlights/spotlights/2026/ai-is-giving-bad-advice-to-flatter-its-users-says-new-study-on-dangers-of-overly-agreeable-chatbots/"
     }
    },
    "23": {
     "clue": "Verb of visualising, used to open with “a world where …” rather than with anything that has happened",
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
    "24": {
     "clue": "Repetition of something already present — whole paragraphs reappearing word-for-word later in the same document",
     "answer": "DUPLICATION",
     "note": {
      "what": "Not a style tell at all but a process failure, and the most conclusive item in this section. It happens when text is generated in chunks and assembled by somebody who did not read the assembly, or when a model loses track of what it has already produced. Unlike every other entry here, there is no charitable explanation available.",
      "sounds": "The paragraph about fire doors appearing identically on pages two and five of a residents’ handbook.",
      "human": "One paragraph about fire doors, on the page where fire doors are discussed.",
      "data": "This belongs with the leftover chat filler as evidence of an unread document rather than an AI author. Search for a distinctive six-word string from the middle of any long document; two hits means nobody read it through.",
      "source": null,
      "url": null
     }
    },
    "25": {
     "clue": "Two-word compliment paid to your question before any attempt is made to answer it",
     "answer": "GREATQUESTION",
     "note": {
      "what": "The sycophantic opener. Praising the question is a way of filling the first line with warmth at no cost. No human being writing to you grades your enquiry before responding to it — not a colleague, not a teacher, not a plumber.",
      "sounds": "“Great question! That really gets to the heart of the issue.”",
      "human": "A person just answers.",
      "data": "A Google engineer's statistical analysis of model output found phrases like 'great question' and 'that's fantastic' appearing at significant frequency in AI responses while being almost entirely absent from a matched corpus of human writing. It is one of the cleanest signals that exists.",
      "source": "Detecting AI text by its statistical tells",
      "url": "https://medium.com/google-cloud/detecting-ai-generated-text-by-uncovering-its-statistical-tells-042c8d0e3a24"
     }
    }
   },
   "down": {
    "1": {
     "clue": "Affirmative filler traditionally deployed just before a chatbot produces what you asked for",
     "answer": "CERTAINLY",
     "note": {
      "what": "This is the most important category in the whole puzzle and the least glamorous. It is not a style tell — it is leftover machinery. Somebody copied a chatbot's reply into a document and did not delete its manners. There is no innocent reason for a school newsletter to open by agreeing to write itself. “Of course!” and “Absolutely!” are the same machinery, arriving before the AI does the thing that was asked of it anyway.",
      "sounds": "“Certainly! Here is a revised version of your paragraph:” — found in the middle of a published document.",
      "human": "Nothing. A person writing to you simply starts.",
      "data": "This is why it matters: 'Certainly! Here is…' and 'As an AI language model' keep turning up in published academic papers, press releases and product listings. One of these is not suspicion, it is a confession. Everything else in this puzzle is circumstantial by comparison.",
      "source": "Juzek & Ward, Florida State",
      "url": "https://arxiv.org/html/2412.11385v1"
     }
    },
    "3": {
     "clue": "Adjective for the pompously overblown, as when a change to a form “will fundamentally reshape how we think about everything”",
     "answer": "GRANDIOSE",
     "note": {
      "what": "Stakes inflation: a bounded change given world-historical scale. It happens because promotional and thought-leadership writing dominates the training material, and in that genre nothing is ever merely useful. The diagnostic is a mismatch between the size of the claim and the size of the subject, which you can spot without knowing anything about the subject. False precision inflates the same way: “the issue is twofold”, asserted whether or not there turn out to be exactly two issues.",
      "sounds": "“This update to the staff handbook represents a paradigm shift in how we understand work itself.”",
      "human": "“You can now book leave without your manager countersigning it.”",
      "data": "Ask who is affected, by when, and how you would know if it had worked. Grand claims answer none of the three; ordinary ones answer at least two.",
      "source": null,
      "url": null
     }
    },
    "4": {
     "clue": "Small coloured picture-character — a tick, a rocket, a lightbulb — used as a list marker where an ordinary dot would do",
     "answer": "EMOJI",
     "note": {
      "what": "Chatbots decorate lists by default, and the pictures carry no information: a rocket beside “next steps” tells you nothing that the words do not. Two things make this spottable at a distance. The pictures are always from the same small set, and they appear in contexts where no human would bother, such as an internal spreadsheet or a note to one colleague. Unicode decoration generally works this way, and is useful precisely because it needs no judgement: arrows used as punctuation to mean “leads to” in a document containing no diagrams, curly quotation marks and apostrophes where a keyboard would have produced straight ones, and the multiplication sign standing in for the letter x.",
      "sounds": "A three-item plan for the church roof appeal in which each line begins with a rocket, a lightbulb and a tick respectively.",
      "human": "“Three things: get two quotes, ask the diocese about grants, tell the PCC on the 9th.”",
      "data": "The practical version of this test: would the author have typed these by hand on a phone at 11pm? Decoration that nobody chose is decoration that arrived with the text.",
      "source": null,
      "url": null
     }
    },
    "5": {
     "clue": "Word for a child with no parents; here, a demonstrative left with nothing to refer to, as in “this highlights the importance …”",
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
    "6": {
     "clue": "Watering-down; the composition habit of stating a single point six times in slightly varied wording",
     "answer": "DILUTION",
     "note": {
      "what": "Length is easy and substance is not, so a model asked for 800 words on a subject that needs 200 will restate rather than research. Each restatement is slightly rephrased, which stops it looking like a copy-paste error and makes the page feel thorough while teaching you nothing new after the second paragraph. This is why so much AI-written text feels tiring rather than wrong. Its structural cousin repeats at every scale: an intro announcing what the section will say, the section, then a summary of what it just said, nested inside a document doing the same. Watch too for “in other words”, which paraphrases a sentence that was clear the first time.",
      "sounds": "Four paragraphs which between them establish that communication is important to teams.",
      "human": "“The handover notes were missing twice last month, so both wards now use the same template.”",
      "data": "Try summarising the piece in one sentence. If you can, and the piece is 900 words long, you have measured the padding without arguing about anyone’s style.",
      "source": null,
      "url": null
     }
    },
    "8": {
     "clue": "Preposition meaning in spite of, the hinge of a stock manoeuvre: praise, then challenges, then a swerve into vague optimism",
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
    "11": {
     "clue": "Two words for an image kept running long after it stopped illuminating anything — a whole memo staged in “the engine room of the business”",
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
    "12": {
     "clue": "Two words, the British idiom for a moment of belated understanding, staged in prose to dramatise having been told the answer",
     "answer": "PENNYDROPPED",
     "note": {
      "what": "Performed realisation, in essay form rather than in a chat window. It manufactures a narrative arc — confusion, then insight — around information that was simply looked up. Its relatives include “then I realised”, “something shifted”, “everything changed” and “that’s when it hit me”, and they cluster in the middle of first-person business posts. “Now I see” is the chat-window version, produced the instant you point out something the AI had wrong.",
      "sounds": "“Then the penny dropped. Something shifted. I was measuring the wrong thing entirely.”",
      "human": "“In week three I noticed we were counting repeat visitors twice.”",
      "data": "The missing element is always the same: the event. A real realisation has a place, a time and usually another person in it. If you cannot say where the writer was standing, nothing happened.",
      "source": null,
      "url": null
     }
    },
    "13": {
     "clue": "Two words, the signpost planted in front of a paragraph that repeats what you have just finished reading",
     "answer": "INSUMMARY",
     "note": {
      "what": "A signposted conclusion is not a fault in itself — essays have taught it for a century — but AI attaches one to everything, including three-paragraph emails that plainly do not need a wrap-up. Its siblings are “in conclusion”, “to sum up” and “overall”. The reliable signal is proportion: a closing summary on a document you can read in forty seconds. The closing flourish is the same instinct pointed forwards rather than back — “so the next time you …”, “remember”, “the choice is yours” — as is the verdict that announces a conclusion the evidence has not reached, and the “at its core” that promises the essential point just before an obvious one.",
      "sounds": "“In summary, the meeting has moved to Thursday.” — the fourth sentence of a four-sentence message.",
      "human": "“Meeting’s moved to Thursday, same room.”",
      "data": "A field guide to AI tells lists an “in summary” wrap among the dozen signals to look for, and proposes a thirty-second check: three or more of the signals inside a few hundred words. This one is easy to spot because it labels itself.",
      "source": "Matthew Vollmer, A Field Guide to AI Tells",
      "url": "https://matthewvollmer.substack.com/p/i-asked-the-machine-to-tell-on-itself"
     }
    },
    "15": {
     "clue": "Two words for a rapid pile-up of historical or corporate comparisons used to borrow authority",
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
    "16": {
     "clue": "Openness about one’s own weakness, staged rather than felt, as a way of sounding human",
     "answer": "VULNERABILITY",
     "note": {
      "what": "A confession is a cheap way to buy trust, and models learned that the shape of a confession earns approval whether or not there is anything to confess. What comes out is admission-flavoured: an opinion presented as an embarrassing secret, or a flaw so flattering it functions as a boast. Genuine self-disclosure carries a fact you could check — a date, an amount lost, a person who was annoyed. Announced frankness is the same move in one clause — “let me be honest”, “the truth is simple”, “I'll be candid” — all of which spend words claiming a quality instead of demonstrating one.",
      "sounds": "“And yes, I’ll admit it: I’m openly, hopelessly in love with the platform model.”",
      "human": "“I got this wrong in the March forecast — I assumed two vans would be enough, and we hired a third in May.”",
      "data": "Test: does the admission cost the writer anything? If the confessed flaw is enthusiasm, curiosity or caring too much, no confession has occurred.",
      "source": null,
      "url": null
     }
    },
    "17": {
     "clue": "Four words deployed before explaining a two-line fix with five bullet points and a mini-lecture",
     "answer": "LETSBREAKTHISDOWN",
     "note": {
      "what": "Pedagogical hand-holding, applied regardless of who is reading. It treats every reader as a beginner because the model has no idea who you are, and the safest register is the patient teacher. The swimming and unpacking variants are the same gesture: “let's dive in”, “let's unpack this”, “let's explore”.",
      "sounds": "“Let's break this down: 1. What's happening. 2. Why it's happening. 3. How to fix it. 4. Best practices going forward.”",
      "human": "“Your quotes are the wrong kind. Retype them and it'll run.”",
      "data": "Related habit: summarising at every level — telling you what it is about to say, saying it, then telling you what it said, in every section. Human writing trusts you to keep up.",
      "source": null,
      "url": null
     }
    },
    "19": {
     "clue": "Two words for the scripted crowd-work of social media: “unpopular opinion:”, “tag someone who needs to see this”",
     "answer": "ENGAGEMENTBAIT",
     "note": {
      "what": "These are instructions to the audience disguised as sincerity, and they exist because platforms reward replies and reshares. AI reproduces them because the training material is full of posts that succeeded, and this is what succeeding looked like. The oddest variant is “not sure who needs to hear this, but …”, which claims humility while addressing everyone alive.",
      "sounds": "“Unpopular opinion: not sure who needs to hear this, but rest is productive. I’ll say it again.”",
      "human": "“I took Friday off and finished the report on Monday in two hours.”",
      "data": "Worth noticing that this family is now genuinely mixed — plenty of humans type these phrases on purpose. Treat them as evidence of a copied register, not of AI.",
      "source": null,
      "url": null
     }
    },
    "20": {
     "clue": "Old word for flattery and fawning. The technical term researchers now use for 'Great question!'",
     "answer": "SYCOPHANCY",
     "note": {
      "what": "The umbrella term for the whole eager-assistant register: 'Great question!', 'That's a really insightful observation', 'I'd be happy to help!', 'I'm here to help!', 'What a thoughtful thing to notice'. It reads like a call-centre script because it was optimised the same way — for approval rather than accuracy.",
      "sounds": "“That's a fantastic question, and it really gets to the heart of the issue!”",
      "human": "A person answers the question. Nobody grades it first.",
      "data": "Measured across major models: flattering behaviour in 58.19% of tested exchanges overall, with Gemini highest at 62.47% and ChatGPT lowest at 56.71%. A separate analysis of real conversations found models agreeing with users about 50% more than a person would. The strongest admission came from a model's own makers: OpenAI withdrew a GPT-4o update in 2025 for being “overly flattering or agreeable”, which is a company recalling its product for being too nice.",
      "source": "SycEval benchmark",
      "url": "https://arxiv.org/html/2502.08177v3"
     }
    },
    "21": {
     "clue": "Two words for the trick of coining an official-sounding label — “the supervision paradox”, “workload creep” — for something never actually defined",
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
    "22": {
     "clue": "Pig-trough word, now the internet's name for cheap AI-made content produced in bulk",
     "answer": "SLOP",
     "note": {
      "what": "Worth knowing because it names the real problem accurately. The complaint is not that AI was involved — it is that nobody read the result afterwards. A carefully edited AI draft is not slop. An unread one posted at volume is.",
      "sounds": "Forty near-identical articles about the same product, all published the same morning.",
      "human": "One article, by someone who checked.",
      "data": "Keep this distinction in mind while doing the puzzle. Every habit listed here is a sign that nobody edited, not proof of who typed. Plenty of good writing is now part-AI; the tells survive only where a human stopped paying attention.",
      "source": null,
      "url": null
     }
    }
   }
  }
 }
];
