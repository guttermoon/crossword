/* Front matter for the page — headings, standfirst, the two intro panels and
 * the source list. These strings carry inline markup (<em>, <strong>, <a>) and
 * are inserted as HTML, so treat this file as first-party content: do not paste
 * anything here that you did not write.
 */
window.GAZETTE = {
  "brand": "The Slop Gazette",
  "kicker": "Saturday Edition &middot; Three puzzles &middot; 76 clues",
  "title": "How to Spot a Robot",
  "standfirst": "Three crosswords, because one could not hold it all. Every answer is a word, phrase or named pattern that machines cannot stop producing. Every clue carries a footnote: what the habit is, what it sounds like, what a person would have written instead, and &mdash; where the research exists &mdash; the number and the study. <em>Fill them in, or press for the answers. Nobody is marking this.</em>",
  "brief": {
    "heading": "Read this first (it's short)",
    "paragraphs": [
      "These puzzles won't turn you into a lie detector. Nothing can prove a computer wrote something. What you <em>can</em> learn is the sound of it &mdash; the same way you can hear that someone is Australian without being able to explain which vowels gave them away.",
      "And everybody is bad at this. When researchers asked language experts to pick out the machine-written science summaries, they got it right <strong>39%</strong> of the time &mdash; worse than guessing. In another test, 1,682 ordinary people scored somewhere between <strong>31% and 52%</strong>, and most of them thought the computer's writing was the <em>better</em> writing. So if you get fooled, you are in excellent company.",
      "Please also be kind about it. Software built to catch AI wrongly accused <strong>61%</strong> of real essays written by people who had learned English as a second language. Plain, simple, careful English looks robotic to a machine. It isn't.",
      "<strong>The one rule:</strong> any single habit in these puzzles means nothing on its own. Lots of good writers say &ldquo;delve&rdquo;. It's when you notice three or four of them crowded into the same paragraph that something is up."
    ]
  },
  "tells": {
    "heading": "Three things to look for",
    "items": [
      "<span class=\"tell-name\">It forgot to delete the chatty bit.</span> Someone pasted a chatbot's answer straight into an email or a school newsletter and left its manners in: <em>&ldquo;Great question!&rdquo;</em>, <em>&ldquo;Certainly! Here's a draft:&rdquo;</em>, <em>&ldquo;Would you like me to expand on any section?&rdquo;</em> Nobody writes to you like that. This one is proof rather than suspicion. <span class=\"tell-ref\">Puzzle 3</span>",
      "<span class=\"tell-name\">Everything is the same shape.</span> Sentences that tell you what a thing <em>isn't</em> before saying what it is (<em>&ldquo;this isn't about speed, it's about trust&rdquo;</em>). Lists that are always exactly three items long. Paragraphs all the same size, like paving slabs. And a neat closing line that sounds wise but doesn't actually say anything. <span class=\"tell-ref\">Puzzle 2</span>",
      "<span class=\"tell-name\">Metaphors that aren't holding anything up.</span> Machines love borrowing words from the world of heavy objects: a sentence is <em>load-bearing</em>, a company will <em>harness</em> data, a course will <em>unlock your potential</em>. Try deleting the word. If nothing falls over, it was never doing any work. <span class=\"tell-ref\">Puzzle 1</span>"
    ],
    "footnote": "Mark Twain used more dashes than ChatGPT does, so dashes alone prove nothing. Leave him alone.",
    "selfaware": "Full disclosure: the first version of this box was written in short, punchy, identical little sentences with a snappy ending. It has been sent back for rewriting."
  },
  "sources": {
    "heading": "Where the numbers come from",
    "items": [
      "<a href=\"https://www.science.org/doi/10.1126/sciadv.adt3813\">Kobak et al., <em>Science Advances</em></a> &mdash; 15.1m PubMed abstracts; &ldquo;delves&rdquo; at 28&times; its expected rate; at least 13.5% of 2024 abstracts LLM-processed.",
      "<a href=\"https://arxiv.org/html/2412.11385v1\">Juzek &amp; Ward, Florida State</a> &mdash; a 6,697% rise in &ldquo;delves&rdquo; 2020&ndash;2024, and the entropy experiment showing human raters trained the tic in.",
      "<a href=\"https://arxiv.org/abs/2509.09596\">Kousha &amp; Thelwall</a> &mdash; &ldquo;underscore&rdquo; +1,000%, &ldquo;intricate&rdquo; +700%, and the co-occurrence jump from 0.03 to 0.45 behind the three-tell rule.",
      "<a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC12679996/\">Matsui, <em>Perspectives on Medical Education</em></a> &mdash; 103 of 135 candidate terms past the threshold across 27.5m records, including &ldquo;tapestry&rdquo;.",
      "<a href=\"https://arxiv.org/html/2502.09606v2\">Human&ndash;LLM coevolution</a> &mdash; &ldquo;delve&rdquo; peaked in early 2024 and fell once it was named. Tells have a half-life; these puzzles will age.",
      "<a href=\"https://www.theatlantic.com/technology/2026/07/ai-chatbot-writing-tic-negative-parallelism/687892/\">The Atlantic on negative parallelism</a> &mdash; the &ldquo;it's not X, it's Y&rdquo; tic at roughly 3&times; the human rate.",
      "<a href=\"https://womenwritinboutai.substack.com/p/who-decides-what-human-writing-sounds\">Women Writing About AI</a> &mdash; the control experiment: &ldquo;not just X, but Y&rdquo; +45% while its twin &ldquo;not only X, but Y&rdquo; rose 1%.",
      "<a href=\"https://slopdetector.org/blog/em-dash-ai-tell-data\">Slop Detector's em-dash measurement</a> &mdash; GPT-4.1 at 10.62 per 1,000 words, humans at 3.23, <em>Huckleberry Finn</em> at 10.13.",
      "<a href=\"https://www.seangoedecke.com/em-dashes/\">Sean Goedecke on em dashes</a> &mdash; the Victorian-training-data explanation, and Nigerian English at a tenth of the general rate.",
      "<a href=\"https://www.sciencedirect.com/science/article/pii/S2666389923001307\">Liang et al., <em>Patterns</em></a> &mdash; seven detectors, 91 human TOEFL essays, 61% falsely flagged.",
      "<a href=\"https://arxiv.org/html/2502.08177v3\">SycEval</a> and the <a href=\"https://www.ap.org/news-highlights/spotlights/2026/ai-is-giving-bad-advice-to-flatter-its-users-says-new-study-on-dangers-of-overly-agreeable-chatbots/\">AP report on chatbot flattery</a> &mdash; sycophancy in 58% of exchanges; 49% more agreeable than people.",
      "<a href=\"https://openai.com/index/sycophancy-in-gpt-4o/\">OpenAI on sycophancy</a> &mdash; the company withdrawing its own update for being &ldquo;overly flattering or agreeable&rdquo;.",
      "<a href=\"https://www.bloomberry.ai/research/ai-sentence-patterns\">Bloomberry's twelve cadence patterns</a> and <a href=\"https://matthewvollmer.substack.com/p/i-asked-the-machine-to-tell-on-itself\">Vollmer's field guide</a> &mdash; the named shapes and the thirty-second check.",
      "<a href=\"https://www.reddit.com/r/ClaudeAI/comments/1uojyml/loadbearing_25_times/\">&ldquo;Load-Bearing. 25 Times.&rdquo;</a> and <a href=\"https://jesseduffield.com/AI-isms-go-deeper/\">Jesse Duffield on AI-isms</a> &mdash; the load-bearing meme, and why machines hand agency to inert things.",
      "<a href=\"https://www.pangram.com/blog/all-about-false-positives-in-ai-detectors\">Pangram on false positives</a> &mdash; Turnitin's published 0.51% error rate, and what that means at scale."
    ],
    "colophon": "Set by hand, footnoted by research. Print it, argue with it, send it to your mother."
  }
};
