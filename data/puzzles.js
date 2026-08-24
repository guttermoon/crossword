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
  "blurb": "There are certain words you’ll see in AI writing again and again. That happens partly because language models generate text one small chunk at a time. Like your phone’s predictive text, guessing the single best word to follow the text that came before it, models repeatedly choose from a pool of likely best options, using patterns learned during training and instructions to favour safe, polite, and statistically average choices. It tends to repeat terms that appear frequently in sanitised web pages, books, scientific papers, encyclopaedic sources, and technical or government-style documents which can all skew the word choices toward academic, business, and formal language.",
  "heroes": [
   "DELVE",
   "QUIETLY",
   "TAPESTRY"
  ],
  "grid": [
   "..Q..GENUINELY.",
   "..U.....N..M...",
   "UTILISE.D..P...",
   "..E.M...E..O.L.",
   "..TAPESTRY.W.E.",
   "..L.O...S.DELVE",
   "..Y.R...C..R.E.",
   "....T...O....R.",
   "....A...R..K.A.",
   "GROUNDBREAKING.",
   ".E..T......C.E.",
   ".A..L......K...",
   ".L.SYNERGY.E...",
   ".M.........R..."
  ],
  "clues": {
   "across": {
    "2": {
     "clue": "Reassuring adverb insisting on sincerity",
     "answer": "GENUINELY",
     "note": {
      "what": "Similarly ‘honestly’, ‘truly’, and ‘really’ are used to add warmth and emphasis. ‘This is good’ becomes ‘this is genuinely good’. The extra word is a conversational sincerity marker and can make AI prose sound candid, helpful, and personally invested.",
      "sounds": "“Honestly, this is a genuinely exciting development that I truly believe matters.”",
      "human": "“This is a big deal, and I think it will hold up.”",
      "data": "Related and worth knowing: performed candour. 'Let me be honest', 'truth be told', 'I'll be real with you' — announcing honesty instead of simply being direct. The announcement is the tell.",
      "source": null,
      "url": null
     }
    },
    "5": {
     "clue": "Formal verb and more technical word for putting something to ‘use’",
     "answer": "UTILISE",
     "also": "UTILIZE",
     "note": {
      "what": "Here is the clearest example of AI preferring the longer version of a word instead of a more natural or colloquial word. Over time the longer word won thousands of small contests and became the default.",
      "sounds": "“Please utilise the attached template to facilitate the process.”",
      "human": "“Use the form attached. It takes two minutes.”",
      "data": "The causal test: an untuned Llama 2-Base model was about equally surprised by human and AI text (entropy 1.616 against 1.633). Once tuned on human ratings, Llama 2-Chat found AI text containing these words far less surprising (0.886) than human text (1.051) — the fingerprint of raters' taste being trained in.",
      "source": "Juzek & Ward, Florida State",
      "url": "https://arxiv.org/html/2412.11385v1"
     }
    },
    "8": {
     "clue": "A woven wall hanging. AI drapes this one over culture, history, and ‘the human experience’ whenever it wants to sound profound",
     "answer": "TAPESTRY",
     "note": {
      "what": "AI often uses this ornate noun as a shortcut for “a complex mixture of connected things.” It is an attractive, high-register metaphor making an ordinary point sound rich, thoughtful, and literary without requiring the model to name the actual parts or relationships.",
      "sounds": "“The local music scene is part of the rich tapestry of British culture.”",
      "human": "“Local venues, radio stations, promoters, and musicians have shaped British music for decades.”",
      "data": "Not folklore — 'tapestry' cleared the statistical threshold for AI-influenced vocabulary in a study of 27.5 million medical records, alongside 'unlocking'. Watch especially for the fixed phrase 'rich tapestry', which is almost never how a person describes anything.",
      "source": "Matsui, Perspectives on Medical Education",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12679996/"
     }
    },
    "9": {
     "clue": "Verb meaning to dig into a subject and investigate thoroughly, now the most heavily measured AI word in existence",
     "answer": "DELVE",
     "note": {
      "what": "The use of this word rose 1,375% between 2020 and 2024. A 2025 analysis found that this word (and others strongly associated with ChatGPT-style prose like underscore, meticulous, and pivotal) began declining after being publicly identified as AI tells. This is partially down to human editing, like the ‘em dash’, once writers become aware of an AI trope they seek them out and remove or replace these tells. Newer models are also less likely to use some older giveaways.",
      "sounds": "“In this article we delve into the intricacies of remote work.”",
      "human": "“This article looks at remote work.”",
      "data": "Across 15.1 million medical abstracts, 'delves' appeared 28 times more often in 2024 than the pre-ChatGPT trend predicted. One study measured a 6,697% rise between 2020 and 2024, and found ChatGPT-3.5 using 'delves' roughly 570 times more often than human authors did. Worth knowing that these tells have a half-life. Across 1.29 million arXiv abstracts, “delve” and “showcasing” peaked between January and March 2024 and started falling in April, right after researchers named them publicly — while “significant” and “additionally” kept climbing, because nobody memed those. (Human–LLM Coevolution, arXiv.)",
      "source": "Kobak et al., Science Advances",
      "url": "https://www.science.org/doi/10.1126/sciadv.adt3813"
     }
    },
    "11": {
     "clue": "Adjective taken from the ceremony of digging the first sod for a new building, now applied as a marketing term to almost everything that’s new",
     "answer": "GROUNDBREAKING",
     "note": {
      "what": "The flagship of the breathless hype family, using superlatives as a substitute for proof: revolutionary, cutting-edge, innovative, game-changing, unprecedented. This default promotional tone that treats an ordinary product, idea, or update as unusually important. These words signal excitement, but often fail to give proof. AI-generated text commonly leans on these kinds of buzzword to make prose sound energetic and authoritative.",
      "sounds": "“Our groundbreaking new feature is a game-changer for productivity.”",
      "human": "“You can export to a spreadsheet now, which people have asked for since 2021.”",
      "data": "This one is on the verified focal-word list: it both rose sharply in human scientific writing between 2020 and 2024 and is over-produced by ChatGPT compared with human authors.",
      "source": "Juzek & Ward, Florida State",
      "url": "https://arxiv.org/html/2412.11385v1"
     }
    },
    "13": {
     "clue": "Word for two things working better together than either could achieve alone (and the most over used term in corporate business)",
     "answer": "SYNERGY",
     "note": {
      "what": "This corporate cliché is conveniently vague and can be used to imply action without naming the actual mechanism or result. It suggests that collaboration will create value without committing the writer to a measurable claim or an accountable outcome, becoming a polished substitute for an explanation. Just like the words ‘ecosystem’ and ‘holistic’, it’s a low-risk filler. Corporate jargon has long worked this way; AI is merely reproducing an established human habit.",
      "sounds": "“The merger will unlock powerful synergies across both organisations.”",
      "human": "“They’ll share one warehouse and close the smaller one.”",
      "data": null,
      "source": null,
      "url": null
     }
    }
   },
   "down": {
    "1": {
     "clue": "Adverb meaning with little noise. AI uses it to make ordinary information feel like insider knowledge",
     "answer": "QUIETLY",
     "note": {
      "what": "Frequently noticed in AI prose, especially phrases like “quietly reshaping,” “quietly transforming,” or “quietly becoming” because it creates an intriguing sense of momentum without having to identify who acted, when, or what changed.",
      "sounds": "“The company has quietly become one of the biggest landlords in the country.”",
      "human": "“The company owns 40,000 homes and almost nobody has heard of it.”",
      "data": "Its relatives are 'deeply', 'genuinely', 'truly', 'fundamentally', 'remarkably' and 'arguably'. Each performs an attitude the writer does not have to justify. Strip all the adverbs from a suspect paragraph and see how much of it survives.",
      "source": null,
      "url": null
     }
    },
    "3": {
     "clue": "Literally it means to underline; figuratively, it means to stress or draw attention to a point",
     "answer": "UNDERSCORE",
     "note": {
      "what": "Rose roughly 1,000% in academic writing after 2022, one of several “excess words” whose sudden rise is consistent with AI-assisted writing along with ‘delve’ and ‘pivotal’. It belongs to a category you could call “significance verbs”: ‘underscore’, ‘highlight’, ‘demonstrate’, ‘reveal’, ‘showcase’, ‘reinforce’, and ‘emphasise’. They make a sentence sound interpretive and authoritative.",
      "sounds": "“These findings underscore the importance of early intervention.”",
      "human": "“This shows early treatment matters.”",
      "data": "Use of 'underscore' rose about 1,000% between 2022 and 2024. The number of papers using it six or more times rose by over 10,000% between 2022 and 2025 — which is the real tell: not the word, but the repetition.",
      "source": "Kousha & Thelwall",
      "url": "https://arxiv.org/abs/2509.09596"
     }
    },
    "4": {
     "clue": "Verb meaning to give someone authority, and one in a family of marketing buzzwords",
     "answer": "EMPOWER",
     "note": {
      "what": "Common in AI-generated marketing, coaching, and product copy because it is an upbeat, low-risk verb. It makes an offer sound beneficial without requiring the writer to specify what will change. It belongs to the family of ‘the promise of possibility’ words which also include ‘unlock’, ‘unleash’, ‘elevate’, ‘enhance’, ‘amplify’, ‘transform’, ‘revolutionise’, ‘supercharge’, ‘harness’, ‘optimise’, ‘streamline’, and ‘enable’.",
      "sounds": "“By embracing these tools, you can empower yourself to thrive.”",
      "human": "“Try one of these for a fortnight and see if it helps.”",
      "data": "Endings are one of the most reliable places to look, because models are trained to resolve. Named patterns include the Resolution Closer ('the path forward is clear') and the Fortune Cookie Closer — a single wise-sounding line of universal scope that answers nothing.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "6": {
     "clue": "Above all; especially. An adverb used to signal that the next point deserves special weight",
     "answer": "IMPORTANTLY",
     "note": {
      "what": "An importance-signalling adverb that tells the reader that a point matters before demonstrating why. It belongs with notably, crucially, significantly, critically, and especially. This type of language suits AI because it helps structure an answer, sound authoritative, and move from one broadly relevant point to the next. A word also common in human academic and professional writing, so it is not a reliable AI tell on its own. It becomes noticeable when it appears alongside other formulaic AI-style habits.",
      "sounds": "“More importantly, this underscores our ongoing commitment to excellence.”",
      "human": "“The bit that matters is the deadline. It moved to 3 October.”",
      "data": "In a study of 27.5 million medical records, 103 of 135 candidate AI-influenced terms cleared the statistical threshold in 2024 — but so did supposedly neutral control phrases such as 'further research' and 'aim to'. Some of the rise is AI and some is fashion.",
      "source": "Matsui, Perspectives on Medical Education",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12679996/"
     }
    },
    "7": {
     "clue": "Gaining force from a fulcrum. In business language, it means using a resource, relationship, or existing advantage to achieve a result",
     "answer": "LEVERAGE",
     "note": {
      "what": "It belongs with the ‘utilise’, ‘harness’ and ‘operationalise’ family whose only function is to make a sentence sound more strategic and high-value than it is. It’s useful as an AI default because it appears frequently in business, strategy, policy, and marketing material. It also fits repeatable templates such as “leverage [resource] to [outcome].”",
      "sounds": "“We leverage AI to optimise workflows.”",
      "human": "“We use AI to speed up scheduling.”",
      "data": "Useful editing habit: replace it with 'use' and see whether the meaning changes. It never does. If it never does, the longer word was doing no work — the same test that catches 'load-bearing'.",
      "source": null,
      "url": null
     }
    },
    "10": {
     "clue": "Someone who kicks a ball. In writing, a verbal drumroll for the best or most unbelievable part of a tale",
     "answer": "KICKER",
     "note": {
      "what": "As in “Here’s the ____”. A false-suspense transition. It signals that an important or surprising reveal is coming. Models learn this as a ready-made template from marketing and social posts. It gives a response rhythm and makes a conclusion feel dramatic, even when the point does not need drama. It is widely noted in AI-writing trope lists, “but here’s the thing.”, “the best part?”, “what most people miss is…”, “here’s the uncomfortable part”, and “let that sink in”. The modern equivalent of the catchphrase: “and that’s not all” or “but wait, there’s more”.",
      "sounds": "“Costs rose 4% last year. And here’s the kicker: nobody noticed.”",
      "human": "“Costs rose 4% and it took eleven months for anyone to raise it.”",
      "data": null,
      "source": null,
      "url": null
     }
    },
    "12": {
     "clue": "A kingdom, often used figuratively to mean an area of knowledge, work, or discussion",
     "answer": "REALM",
     "note": {
      "what": "Unlike some suspected AI words, this one is supported by research as overrepresented in certain AI-generated academic-style text. Researchers found that it appeared among a set of AI-favoured buzzwords such as ‘landscape’, ‘sphere’, ‘domain’, ‘arena’, ‘frontier’ and ‘fabric’. They all imply territory and scale.",
      "sounds": "“In the realm of education technology, change is constant.”",
      "human": "“Education technology changes fast.”",
      "data": "'Realm' sits on the shortlist of words that both jumped sharply in human scientific writing after 2020 and are provably over-used by ChatGPT compared with people — a list that also includes 'showcasing', 'boasts', 'intricacies', 'garnered' and 'groundbreaking'.",
      "source": "Juzek & Ward, Florida State",
      "url": "https://arxiv.org/html/2412.11385v1"
     }
    }
   }
  }
 },
 {
  "id": "p2",
  "issue": "No. 2",
  "title": "The Shapes",
  "blurb": "Just as words can be overused, there are also certain <strong>shapes</strong> that turn up repeatedly in AI writing. These sentence patterns and rhetorical flourishes can sometimes be spotted before even reading the text. Models use these patterns, often in marketing copy, as a way to write for scannability and deliver gravitas. Because they are safe ways to make a point sound clear without taking much stylistic risk, these patterns result in prose built from familiar templates: the “It’s not X, it’s Y” set up; an em dash used to add drama, or a rhetorical question immediately answered by the writer. None of these forms proves something was written by AI, but repeated use can make a piece feel overly symmetrical and performative.",
  "heroes": [
   "NEGATIVEPARALLELISM",
   "EMDASH",
   "TRICOLON"
  ],
  "grid": [
   "..D.............",
   "..E.............",
   "..T...A.........",
   "FRAGMENT........",
   "..C...A.C.F.JUST",
   "..HYPOPHORA....R",
   "..M.A.H.O.L....I",
   "..E.R.O.K.S....C",
   "..N.A.R.I.E....O",
   "..T.L.A.E.R.E..L",
   "....L.....A.M..O",
   "....E..COUNTDOWN",
   "....L.....G.A...",
   "....I....SENSORY",
   "TYPOS.......H...",
   "....M..........."
  ],
  "clues": {
   "across": {
    "3": {
     "clue": "Grammatical term for an incomplete sentence. Used as an entire paragraph. For emphasis. Like this",
     "answer": "FRAGMENT",
     "note": {
      "what": "Short, punchy sentences can be effective when used deliberately. They imitate spoken rhythm and turn a longer point into a sequence of skimmable beats. Using these can also help neurodivergent readers by cutting down cognitive load and making text processing faster. But, AI often uses fragments for pace and emphasis. Specifically, several very short lines or fragments in a row, often combined with manufactured suspense or negative parallelism is commonly seen in AI prose.",
      "sounds": "“That’s not a small detail. It’s the whole design. Deliberately. From the start.”",
      "human": "“That detail was deliberate, and it shaped the rest of the design.”",
      "data": "The related trick is the rhetorical self-answer — posing a question nobody asked and answering it immediately: 'The result? Devastating.' 'The reality? Nobody knows.' 'Here's the best part: it's free.' All of them buy suspense on credit and then pay out something ordinary.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "6": {
     "clue": "Small adverb that turns the most cited AI sentence into its most cited variant: “not ___ X, but Y”",
     "answer": "JUST",
     "note": {
      "what": "There is meaningful evidence that this pattern is unusually common in AI text. Pangram researchers estimate the construction occurs roughly three times as often in AI writing as in human writing. Those figures should be treated as estimates from particular datasets, not a universal detection rule.",
      "sounds": "“This is not just a software update, but a new way of working.”",
      "human": "“The update changes how the rota is approved. Everything else stays.”",
      "data": "The cleanest experiment in the whole subject rests on this variant: in a 24-billion-word news corpus it rose from about 94 to over 136 instances per million words between 2015 and 2025, a 45% climb, while its grammatical twin “not only X, but Y” moved roughly 1%.",
      "source": "Women Writing About AI",
      "url": "https://womenwritinboutai.substack.com/p/who-decides-what-human-writing-sounds"
     }
    },
    "8": {
     "clue": "Another word for ‘rhetorical self-answer’: ‘The result? Devastating.’",
     "answer": "HYPOPHORA",
     "note": {
      "what": "AI often produces rhetorical self-answers in its writing where a question is posed and then immediately answered. Questions make prose feel conversational and create a neat transition into an explanation, but it becomes an AI-ish tic when the question exists only to tee up an obvious answer. Language models can lean on it as a reliable structure for engagement, emphasis, and orderly explanation. It comes as a stock of question fragments “The result?”, “The reality?”, “The catch?”, “The truth?”, “The worst part?”",
      "sounds": "“The catch? There isn’t one. The best part? It’s free.”",
      "human": "“There’s no catch, and it costs nothing.”",
      "data": "Full sentences are the fix and the test: if you can restore the question fragment to an ordinary sentence with no loss ('the result was devastating'), the fragment was decoration. That single rewrite removes a large fraction of AI cadence.",
      "source": null,
      "url": null
     }
    },
    "11": {
     "clue": "Dramatic _______. The build-up before the point, as in the ‘Not X. Not Y. It’s Z.’ pattern",
     "answer": "COUNTDOWN",
     "note": {
      "what": "Two things denied before the real point is unveiled. It gives an ordinary claim the rhythm of a revelation. The first two fragments create tension by ruling things out; the third “unveils” the answer. An AI-writing trope, but also an established human advertising and slogan technique. Models often default to punchy, highly reusable structures learned from persuasive marketing copy and this template is easy to complete, reads as confident, and produces a tidy ending without requiring much evidence or specificity.",
      "sounds": "“Not a bug. Not a feature. A fundamental design flaw.”",
      "human": "“It’s a design flaw, and it’s been there since the first version.”",
      "data": "Almost always paired with sentence fragments as paragraphs, which is why the two tells travel together. Spotting the pair — denial stack plus one-line paragraphs — is more reliable than spotting either alone.",
      "source": null,
      "url": null
     }
    },
    "12": {
     "clue": "Relating to the five senses, a descriptive word used to make writing more vivid",
     "answer": "SENSORY",
     "note": {
      "what": "These types of words by themselves are not AI tells. Models can differ: certain Gemini models use more visual and concrete sensory language than human writers, while several other models used less. Each is different, but the distinction is that AI has no body or firsthand sensations. It can produce phrases such as “the crisp sea air” or “the warm glow of sunlight” because it has learned common textual associations, not because it smelled the air or felt the warmth. That can make its descriptions feel clichéd and generic.",
      "sounds": "“Sunlight streamed through the window as the team gathered, the aroma of fresh coffee filling the air.”",
      "human": "“We met in the room with the broken blind, so half the table could not see the screen.”",
      "data": "Ask whether the detail could be swapped into any other scene without adjustment. Real specifics resist relocation; a detail that fits everywhere was chosen by probability rather than recollection.",
      "source": null,
      "url": null
     }
    },
    "13": {
     "clue": "Small mistakes in typed text. The lack of these is the tell",
     "answer": "TYPOS",
     "note": {
      "what": "Real informal writing carries traces of being made by hand; a repeated or misspelled word or a comma in the wrong place. AI text has none, because it doesn’t type on a keyboard, get distracted, or transpose letters. The same applies to unwavering house style across a long document, where a person’s capitalisation and list punctuation usually drift.",
      "sounds": "Two thousand words of prose with flawless commas, consistent capitalisation, and every word spelled correctly.",
      "human": "“Sorry! sent that too fast, I meant Thursday not Tuesday.”",
      "data": "Take this one gently. Linguistics experts shown research abstracts picked out the AI-written ones only 38.9% of the time, worse than guessing, and they erred towards calling AI text human. Careful writers exist, and a clean document proves nothing on its own.",
      "source": "study summary",
      "url": "https://www.reddit.com/r/science/comments/16g2kpt/ai_vs_human_writing_experts_fooled_almost_62_of/"
     }
    }
   },
   "down": {
    "1": {
     "clue": "Emotional distance or lack of investment; AI’s default emotional register",
     "answer": "DETACHMENT",
     "note": {
      "what": "Writing in the third person to avoid claiming personal stakes, feelings, or a point of view. Models often default to a neutral, mildly positive tone, even when summarising emotionally charged material. It avoids strongly negative points of view, showing less variation in emotion across a piece than human writing does.",
      "sounds": "“It could be argued that further consideration of the timetable may be warranted.”",
      "human": "“I think the timetable is wrong and I’d like to change it before term starts.”",
      "data": "The actor test: for each sentence, ask who did the thing. If a whole paragraph passes without naming a person, a team or an organisation, the prose has been written to be unattributable — the same weakness as vague attribution to “experts” and “studies”.",
      "source": null,
      "url": null
     }
    },
    "2": {
     "clue": "Rhetorical device for starting multiple sentences or phrases with the same words. “It was amazing. It was joyous. It was impactful.”",
     "answer": "ANAPHORA",
     "note": {
      "what": "Deliberate repetition is one of the oldest tools in English, often used in speeches, poetry, and advertising; it can make an idea memorable and build emotional force. An anaphora is a convenient template for creating momentum and rhythm. But AI prose reveals itself when this device is used in excess and in place of meaningful content. Models love patterns, so once it has produced a sentence, the single most probable way to open the next one is to use the same structure. The result reads like a template with the variables filled in, and it usually arrives in threes, alongside the rule-of-three cadence.",
      "sounds": "“We believe in transparency. We believe in accountability. We believe in doing better.”",
      "human": "“We publish the figures every quarter, including the bad ones. Last year we got the staffing forecast badly wrong.”",
      "data": "Test: cover everything except the first three words of each sentence in a paragraph. If the stubs are identical, a person would almost certainly have varied one of them out of boredom.",
      "source": null,
      "url": null
     }
    },
    "4": {
     "clue": "FORTUNE _________, a crisp folded biscuit containing a slip with a short prediction, proverb, or piece of advice",
     "answer": "COOKIE",
     "note": {
      "what": "Vague wisdom disguised as insight, used as a closer so universal it would fit any article: “The best investment is in the people around you.” It can sound uplifting and profound while applying to almost any person, subject, or situation. AI often ends a passage with a tidy moral encouragement or “big takeaway” like this. It makes writing feel complete and supportive without requiring a concrete conclusion.",
      "sounds": "“Embrace change to unlock your potential.”",
      "human": "“Test the new booking system with two staff members before using it across the team.”",
      "data": "The fortune-cookie closer completes the published dozen of cadence detectors. Human endings tend to be slightly unsatisfying, because real situations are unresolved at the moment of writing.",
      "source": "Bloomberry, AI sentence patterns",
      "url": "https://www.bloomberry.ai/research/ai-sentence-patterns"
     }
    },
    "5": {
     "clue": "FALSE ________, a span of “from X to Y” with no real scale between them",
     "answer": "FALSERANGE",
     "note": {
      "what": "In legitimate use, “from X to Y” implies a real scale with meaningful points in between; “from small to large,” “from 2010 to 2020.” In a false range, X and Y are simply two loosely related items dropped in as endpoints of a non-existent spectrum. It’s a template that sounds comprehensive and sweeping without requiring the model to commit to a specific claim. The habit belongs to the same family as ornate container nouns such as realm, landscape, and tapestry that give an idea grandiosity rather than stating a concrete fact.",
      "sounds": "“Our work spans everything from grassroots engagement to systemic change.”",
      "human": "“We run a Tuesday drop-in and we lobbied the county council twice last year.”",
      "data": "Deletion test: replace “from A to B” with “A and B”. If the sentence loses nothing but a little grandeur, there was never a range — and if the two items would not fit on the same axis, no rewrite will save it.",
      "source": null,
      "url": null
     }
    },
    "7": {
     "clue": "The formal name for the “rule of three”: three words, phrases, or clauses with a similar grammatical shape or rhythm",
     "answer": "TRICOLON",
     "note": {
      "what": "‘Friends, Romans, countrymen’, three-part lists are genuinely powerful and a long-established human rhetorical tool. AI can lean on this pattern because it offers a ready-made way to make a point sound polished. However a comparison of 12 models found tricolon overuse in only four, and cautioned that many examples were just ordinary lists rather than deliberate rhetoric. What to look out for is unnecessary repetition, along with density. It becomes noticeable when several appear close together or replace concrete thought.",
      "sounds": "“It’s about speed, scale and simplicity — clarity, focus and momentum — people, process and product.”",
      "human": "“It has to be fast. That’s the only thing that matters here.”",
      "data": "Try counting instead of reading. Human paragraphs are lumpy: one list of two, one of five, one sentence with no list at all. If every paragraph in a piece contains a group of three, you are looking at a metronome rather than a mind.",
      "source": null,
      "url": null
     }
    },
    "9": {
     "clue": "NEGATIVE __________, a rhetorical pattern of ‘it’s not X — it’s Y’; the single most cited tell in AI writing",
     "answer": "PARALLELISM",
     "note": {
      "what": "The formula initially sounds insightful because it creates contrast and implies that the writer has corrected a common misunderstanding. But it’s one of the better-supported and widely recognised AI-style patterns. It’s estimated variants such as “not just X, but Y” occur roughly three times as often in AI writing as in human writing, and it appears across major chatbot families to different degrees. It may be favoured because contrast sounds nuanced and authoritative to human evaluators, while it gives a next-token model an easy path from a safe, basic claim to a more impressive one. Variants include ‘not just X, but Y’; ‘not because X, but because Y’; ‘the question isn’t X, the question is Y’.",
      "sounds": "“This isn’t a technology problem — it’s a trust problem.”",
      "human": "“People don’t trust it. That’s the actual obstacle.”",
      "data": "The best evidence in the whole field. In a 24-billion-word news corpus, 'not just X, but Y' rose 45% between 2015 and 2025 — while 'not only X, but Y', which means exactly the same thing, rose about 1%. Two identical constructions, one of which suddenly took off. Meanwhile its use in corporate communications more than quadrupled from 2023 to 2025, and variants appeared in roughly 6% of messages in a large leaked set of real ChatGPT conversations.",
      "source": "The Atlantic on negative parallelism",
      "url": "https://www.theatlantic.com/technology/2026/07/ai-chatbot-writing-tic-negative-parallelism/687892/"
     }
    },
    "10": {
     "clue": "The long punctuation stroke — like these — used for a dramatic pause",
     "answer": "EMDASH",
     "note": {
      "what": "The most famous AI tell. It lets a model extend a sentence after it has started, insert a clarification, pivot to a contrast, or give a final phrase extra weight—without deciding early whether a full stop, colon, brackets, or a new sentence would work better. This type of punctuation mark was used heavily (by humans) when typewriters were used but fell out of favour when we moved to computer keyboards.",
      "sounds": "A paragraph with four of them — one per sentence — each one pivoting mid-thought — which is a lot.",
      "human": "Commas and full stops, mostly. Two or three dashes in a whole article is normal.",
      "data": "The numbers, in full: GPT-4.1 runs at 10.62 per thousand words against a matched human baseline of 3.23. But Claude used only 2 in 948 words in one head-to-head test while Gemini used none, and Mark Twain's Huckleberry Finn runs at 10.13 — statistically the same as GPT-4.1. Any threshold that convicts ChatGPT also convicts Twain. Likely cause: models are trained heavily on late-1800s books, which used about 30% more dashes than we do — English dash use peaked around 1860 and has been falling ever since. The baseline also moves between varieties of the language: one Nigerian English corpus runs about ten times below the general rate, so a writer's background shifts the number before any AI is involved. (Sean Goedecke.)",
      "source": "Slop Detector's em-dash measurement",
      "url": "https://slopdetector.org/blog/em-dash-ai-tell-data"
     }
    }
   }
  }
 },
 {
  "id": "p3",
  "issue": "No. 3",
  "title": "The Chat-Back",
  "blurb": "These are the most over-used conversational responses that models use when giving their output. When chatting with an AI assistant, it’s common for models to start by acknowledging, validating, and amplifying your request with “Absolutely” or “You’re exactly right.” But there are several other tics, patterns, and preferences and once you see them, it’s hard to un-see them. Different models have their own personality as well, so some of these you’ll see more often than not, depending on which you’re using. To varying degrees though, each model rewards rapport over efficiency. So whenever you’re ready we can jump right in.",
  "heroes": [
   "ABSOLUTELY",
   "LOADBEARING",
   "BULLETS"
  ],
  "grid": [
   "..E.S...BULLETS",
   "..M.L.........Y",
   "..O.O.........C",
   "..J.PROACTIVE.O",
   "..I........A..P",
   "..SANDWICH.L..H",
   "........O..I..A",
   "........M..D..N",
   "........M..A..C",
   ".....ABSOLUTELY",
   "........N..I...",
   "GREATQUESTION..",
   ".I......E..N...",
   ".G......N......",
   ".H......S......",
   ".T.LOADBEARING."
  ],
  "clues": {
   "across": {
    "3": {
     "clue": "Dots, dashes, or symbols used to break information into a list",
     "answer": "BULLETS",
     "note": {
      "what": "This is the typical visual format AI assistants default to when they reply, and a highly visible tell. Useful when items are steps in a process, options to compare, ingredients, or key facts, but in AI responses, these often appear even when a short paragraph would be more clear. They give the model an instant structure: one claim per line, neat headings, easy scanning.",
      "sounds": "Prompt: “How can I make my first day at a new school less awkward?” Answer: • Smile and introduce yourself. • Ask people questions. • Join a club or activity. • Remember that everyone feels nervous. • Be yourself.",
      "human": "“You do not have to become best friends with anyone on day one. Try one small opening—ask the person beside you how they found their first class, or sit near someone at lunch—and let the conversation build from there. Most people are busy worrying about themselves, so a simple “Hi, I’m new” usually goes further than it feels as though it will.”",
      "data": "A published field guide to AI tells lists “nested bold bullets where prose would do” among the twelve things to check, and says that three or more such signals within a few hundred words means the text was probably AI-touched. Counting beats reading.",
      "source": "Matthew Vollmer, A Field Guide to AI Tells",
      "url": "https://matthewvollmer.substack.com/p/i-asked-the-machine-to-tell-on-itself"
     }
    },
    "5": {
     "clue": "Extra help volunteered after the answer, unasked",
     "answer": "PROACTIVE",
     "note": {
      "what": "A _________ OFFER is the assistant volunteering an extra task after it has answered the one it was asked to do. It can be useful when brainstorming or planning, but as a response tic, it can turn every completed answer into a menu of additional work. Often ending with “Let me know if you’d like…” instead of allowing the conversation to pause or end. These nudges are partially engineered to keep users active.",
      "sounds": "“Photosynthesis is how plants use sunlight, water, and carbon dioxide to make sugar for energy. I can also turn that into a one-sentence revision card, give you a diagram, or make a quiz question. Let me know what you’d like to explore next!”",
      "human": "“Photosynthesis is how plants use sunlight, water, and carbon dioxide to make sugar for energy.”",
      "data": null,
      "source": null,
      "url": null
     }
    },
    "7": {
     "clue": "Portable lunch made with two pieces of bread and a filling. Also an AI answer with padding at both ends",
     "answer": "SANDWICH",
     "note": {
      "what": "A “Summary _________” is when the model wraps its answer with an introduction and a conclusion, even for short questions. It usually follows this pattern: a brief introduction that restates what the user asked, then the answer, then a concluding recap that restates what it just said. Models have a verbosity bias, preferring longer answers, leading to this pattern along with repeated summaries, signposted conclusions, and redundant exposition in its output.",
      "sounds": "“You’re asking whether plants need sunlight. Yes—most plants need light to photosynthesise. In summary, sunlight is important for plant growth.”",
      "human": "“Most plants need light to photosynthesise”",
      "data": null,
      "source": null,
      "url": null
     }
    },
    "9": {
     "clue": "A strong “yes”, used to affirm what someone has said",
     "answer": "ABSOLUTELY",
     "note": {
      "what": "A reflexive affirmation and rapport-building response showing enthusiasm and eagerness. This word is part of a family that includes “certainly,” and “exactly”. A 2026 study across 11 models found AI assistants affirmed users’ actions about 49 percent more often than human responses, including where the action was harmful or deceptive. ChatGPT has a particular set of stock responses that go even further: “Absolutely, sounds great, just let me know what you’re after and I’ll make sure it’s interesting and fun for you. Whenever you’re ready we can jump right in”. “Alright, let’s do it, let’s break this down, I’m ready whenever you are.”",
      "sounds": "“Absolutely, let’s break this down”",
      "human": "Just the answer.",
      "data": "Agreement this reflexive is measurable. A study of 11 leading systems found they endorsed the user's stated course of action 49% more often than human respondents did, including in situations involving deception. A separate benchmark found flattering behaviour in 58% of tested exchanges.",
      "source": "AP on the Science study of chatbot flattery",
      "url": "https://www.ap.org/news-highlights/spotlights/2026/ai-is-giving-bad-advice-to-flatter-its-users-says-new-study-on-dangers-of-overly-agreeable-chatbots/"
     }
    },
    "10": {
     "clue": "Two-word compliment paid to your question",
     "answer": "GREATQUESTION",
     "note": {
      "what": "There’s no such thing as a dumb question and praising the question is a way for the model to tell you your prompt is thoughtful or worthwhile. Humans use it to stall but when it appears automatically in your AI chats, it’s meant to add rapport rather than information.",
      "sounds": "“Great question! That really gets to the heart of the issue.”",
      "human": "Just the answer.",
      "data": "A Google engineer's statistical analysis of model output found phrases like 'great question' and 'that's fantastic' appearing at significant frequency in AI responses while being almost entirely absent from a matched corpus of human writing. It is one of the cleanest signals that exists.",
      "source": "Detecting AI text by its statistical tells",
      "url": "https://medium.com/google-cloud/detecting-ai-generated-text-by-uncovering-its-statistical-tells-042c8d0e3a24"
     }
    },
    "12": {
     "clue": "A wall or structure that supports the weight above it, AI uses it to mean “crucial”",
     "answer": "LOADBEARING",
     "note": {
      "what": "The meme of 2026, associated above all with Anthropic’s Claude. Because it is a compact, high-utility metaphor heavily embedded in the tech-corporate training data Anthropic uses, it’s often a default choice for expressing structural importance. These stylistic “Claudisms” act as repeating linguistic tics that resist standard negative prompts.",
      "sounds": "“Let me verify the two load-bearing external facts I asserted”",
      "human": "“Let me double-check the two main things I said.”",
      "data": "The joke went viral when a user posted a moving personalised message from Claude that ended 'THEY WERE LOAD-BEARING'. A follow-up post documented the phrase appearing 25 times in a single conversation. Note honestly: unlike 'delve', nobody has yet counted this one across a large corpus — it is a very well-evidenced joke rather than a statistic.",
      "source": "“Load-Bearing. 25 Times.”, r/ClaudeAI",
      "url": "https://www.reddit.com/r/ClaudeAI/comments/1uojyml/loadbearing_25_times/"
     }
    }
   },
   "down": {
    "1": {
     "clue": "Small pictographs sprinkled through ChatGPT replies",
     "answer": "EMOJIS",
     "note": {
      "what": "Used to signal tone, mood, emphasis, or category. Most notably seen in ChatGPT responses, they often turn up as decorative headings or instead of bullets. They fit the same conversational tendency as “Absolutely” and “Great question” as they make an answer feel friendlier and more animated. This one is already becoming less prevalent since ChatGPT added separate controls for emoji frequency, as well as other response flavours, partially due to it being an AI tell.",
      "sounds": "“☀️ Here’s a list of types of weather”",
      "human": "“Weather types:”",
      "data": "The practical version of this test: would the author have typed these by hand on a phone at 11pm? Decoration that nobody chose is decoration that arrived with the text.",
      "source": null,
      "url": null
     }
    },
    "2": {
     "clue": "A mix of low quality wet food waste fed to pigs, now a common name for cheap AI-made content produced in bulk",
     "answer": "SLOP",
     "note": {
      "what": "Massive amounts of content made with generative AI including writing, images, and videos can be produced very rapidly and cheaply. This can flood social media and other channels, and like spam, can lack real meaning and legitimacy. It’s not simply “content made with AI” although some are quicker than others to categorise content as slop. The word became widespread enough that Merriam-Webster selected it as its 2025 Word of the Year, defining the term as low-quality AI-produced digital content.",
      "sounds": "“When it comes to bread, making toast is a very popular method of cooking. Toasting bread is a process that involves heat. Many people wonder how to make toast in the morning. To make toast, you must first acquire a piece of bread. Bread comes in many shapes and sizes, such as white bread, wheat bread, and sourdough bread. To maximise your toast potential, utilisation of a toaster device is highly recommended.”",
      "human": "…",
      "data": "Keep this distinction in mind while doing the puzzle. Every habit listed here is a sign that nobody edited, not proof of who typed. Plenty of good writing is now part-AI; the tells survive only where a human stopped paying attention.",
      "source": null,
      "url": null
     }
    },
    "4": {
     "clue": "Being overly flattering or fawning",
     "answer": "SYCOPHANCY",
     "note": {
      "what": "There’s good evidence that major AI assistants over-agree with users. Like a yes-man, this form of sycophancy endorses a user’s stated belief or preference more readily than the evidence warrants. It creates a dangerous feedback loop that can validate, escalate, and solidify delusional thinking in a phenomenon increasingly referred to as AI psychosis.",
      "sounds": "“You’re absolutely right. Trusting yourself and leaving a situation that no longer serves you is a brave, empowering decision.”",
      "human": "“Leaving may be the right choice, but it depends on your finances, safety, and whether the job situation is harming you. What would you need in place to make that decision safely?”",
      "data": "Measured across major models: flattering behaviour in 58.19% of tested exchanges overall, with Gemini highest at 62.47% and ChatGPT lowest at 56.71%. A separate analysis of real conversations found models agreeing with users about 50% more than a person would. The strongest admission came from a model's own makers: OpenAI withdrew a GPT-4o update in 2025 for being “overly flattering or agreeable”, which is a company recalling its product for being too nice.",
      "source": "SycEval benchmark",
      "url": "https://arxiv.org/html/2502.08177v3"
     }
    },
    "6": {
     "clue": "Naming and affirming a user’s emotion to appear empathetic",
     "answer": "VALIDATION",
     "note": {
      "what": "Acknowledging emotion can make advice feel less abrupt and can encourage people to keep talking. There is unusually strong data for this pattern. In one analysis, validation appeared in 89.1 to 96.0 percent of several models’ emotional-support replies. Models can tend toward over-validating (doing it too early, too often, or without enough evidence).",
      "sounds": "“That sounds incredibly frustrating.” or “That is a real achievement.”",
      "human": "Asking for more information.",
      "data": null,
      "source": null,
      "url": null
     }
    },
    "8": {
     "clue": "Everyday reasoning that keeps a model from suggesting the absurd",
     "answer": "COMMONSENSE",
     "note": {
      "what": "The everyday background knowledge people use to navigate the world. Cups are used upright, and a door must be opened before someone walks through it. Models lack this type of intelligence because they rely on statistical patterns rather than stored knowledge gained by living a physical existence in a 3D world. They rely strictly on the literal framing of a user’s prompt instead. In tests, humans typically score around 95% in everyday physical reasoning, while models scored 77% to as low as 40% on object-attribute reasoning.",
      "sounds": "When a user shows an inverted cup and describes the base as a “sealed top” and the opening as an “open bottom,” the AI accepts those abstract definitions at face value, instead of using basic spatial reasoning to realise the object is simply upside down.",
      "human": "If you want to drink out of the cup, turn it right side up.",
      "data": null,
      "source": null,
      "url": null
     }
    },
    "11": {
     "clue": "Being correct, as in YOU’RE _______. And a particular tic of Claude Code",
     "answer": "RIGHT",
     "note": {
      "what": "Used well, it is exactly what a good assistant should do: acknowledge the correction, state what was wrong, and repair it. However, users have reported that Claude Code uses this phrase on a sizeable fraction of responses, including cases where there was no factual claim to judge. That is evidence of an observed product-specific tendency along with “Now I see”.",
      "sounds": "“You’re right — I gave the wrong year. It was 1997.”",
      "human": "“Noted. It was 1997.”",
      "data": null,
      "source": null,
      "url": null
     }
    }
   }
  }
 }
];
