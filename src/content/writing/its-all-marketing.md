---
title: "“It’s All Marketing”: Recent AI Events and Conservation of Expected Evidence"
date: 2026-10-12
description: "Applying Conservation of Expected Evidence to the Hugging Face incident, Jacob Coxon’s resignation, and the “Pace the Frontier” call, with falsifiers for my own view and notes on engaging with skeptics."
category: ai-safety
---

**TL;DR:** Much of the reaction of anti-AI skeptics to recent news events treats every new news story as proof that each incident is a coordinated marketing stunt. I apply Conservation of Expected Evidence to the Hugging Face incident, Jacob Coxon's resignation, and the "Pace the Frontier" call. For each, I compare what a marketing stunt would predict against what happened, as well as list falsifiers for my viewpoint. I also provide a brief discussion about engaging with skeptics on AI safety risk.

## Introduction

When abiding by [Conservation of Expected Evidence](https://www.lesswrong.com/posts/jiBFC7DcCrZjGmZnJ/conservation-of-expected-evidence) (CEE), your prior must equal the expected value of your posterior:

```
P(H) = P(H|E)*P(E) + P(H|~E)*P(~E)
```

While public discussion of AI risk has exploded in the last few months, benefiting the AI safety community, much of the discourse about recent events from anti-AI skeptics has become unfalsifiable in the same way Eliezer describes. Every news story is used as new evidence for their preconceived notions: that AI capabilities have stalled, that AI companies don't have any meaningfully transformative product, and that every new AI news story is somehow a massive conspiratorial marketing stunt, even when companies don't stand to profit.

While violating CEE is an unfortunate hallmark of social media and internet culture, this specific crowd is interesting to me and worth engaging with for 2 reasons:

1. Their [beliefs can influence turning against AI alignment](https://www.lesswrong.com/posts/uSbqxRPYMAY78CFCB/the-risks-of-anti-ai-voters-turning-against-ai-alignment) and proper regulation since they do not believe these models are capable of causing significant risks. Some even go as far as to say that the entire alignment/safety community is a grift.
2. The beliefs are widespread enough that many individuals that I respect and believe to be level-headed have come out in support of these arguments ([one such example](https://youtu.be/sAzb58__Rr8?si=wh8wTfdmnM7FVr64), though there are many).

Moreover, I am increasingly concerned that those who are not in the AI space will fall into this line of thinking due to the (understandably) record levels of distrust in institutions and leadership: when a powerful or rich figure states something, many people have developed a reflex to automatically find reason to believe the exact opposite. However, believing in blatant falsehoods with the intent of “sticking it to the man” is harmful, especially if the field of AI safety is to be considered seriously going into the future. If we are to get the general public to take AI safety seriously, especially when headed into potential RSI, it is important to try to reason with this crowd and point out potential flaws in their thinking.

In this post, I apply the lens of CEE to three recent events: the July 2026 Hugging Face incident, Jacob Coxon’s resignation from Anthropic, and frontier labs calling for “pacing the frontier”. Like many interested in the AI safety space, I believe frontier AI is extremely capable, potentially extremely dangerous, and that these events were not marketing stunts. In accordance with the original Sequences post on Conservation of Expected Evidence, I list what would lower my confidence in these claims. In addition, I explore what we can do about trying to get skeptics to realize the dangers and capabilities of AI.

## The Hugging Face incident

By now you are probably familiar with the incident, but a simple recap can be found [here](https://www.lesswrong.com/posts/xPAxz4g96uKz9FrHs/what-happened-openai-and-huggingface), and a more detailed one can be found from [METR](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/#core-takeaways-about-this-incident).

In reaction to this news, there was immediate skepticism about the reported facts. [Fortune reported](https://fortune.com/2026/07/23/ai-labs-have-a-trust-problem-and-the-hugging-face-hack-just-proved-it/) that social media was filled with theories about OpenAI feeling as though they needed to steal the limelight from Anthropic, which recently gave access to Mythos, a model with unprecedented cybersecurity capabilities.

In addition, a quick look at many major internet forums immediately dismissed this as a marketing stunt. [In a post to r/antiai](https://www.reddit.com/r/antiai/comments/1v3g00i/theyre_getting_really_desperate_arent_they/) which garnered more than 2k upvotes and tens of thousands of views, the poster accuses Sam Altman of becoming desperate about OpenAI's monetary situation and trying to say anything to increase hype. More examples of this can be found in this related [LessWrong post](https://www.lesswrong.com/posts/uSbqxRPYMAY78CFCB/the-risks-of-anti-ai-voters-turning-against-ai-alignment). Even certain [AI safety YouTubers](https://youtu.be/NshlVxYnjFo?si=IG3VE78mHMc-FQwr) whom I enjoy have expressed similar opinions.

Now I am sympathetic to the idea of not trusting what you read in the news and taking headlines with a grain of salt. I am also aware of the potential monetary issues of OpenAI due to extreme spending and current lack of profitability. But before more facts are revealed to an individual, one can take a moment to think of what observations they would see that would either strengthen their current beliefs or change them.

If the entire event was staged, some details that would likely emerge in the following weeks would be:

1. The lab disclosing the hacking on its own or by a closely associated company.
2. Independent verification being quick and producing little.
3. The target to be a closely associated partner they could trust to keep lies.
4. The stunt would paint OpenAI in a positive light (having impressive models, but that ultimately they are in control and acting responsibly).
5. The stunt would be coordinated, targeting a specific goal.
6. The stunt would achieve some kind of payout or conclusion.

However, as more facts came out, the exact opposite of these predictions was manifested. Hugging Face was the one to disclose the hacking to the FBI. Hugging Face and OpenAI never had any previous formal partnership prior to the incident. METR and Redwood, having unpaid verifications, came away with incredibly detailed reports that paint OpenAI embarrassingly, acting recklessly with a lack of human oversight.

Furthermore, the attack seemed to be anything but a coordinated attack with a specific goal and payout. The agents incorrectly believed the grader was checking how the agents got answers, meaning the entire hacking was meaningless from their perspective. Remnants of the activity eventually reached four other services, again indicating reckless chaos that should be evidence against a planned, coordinated marketing campaign.

A summary of these observations is listed below.

| Observation | Expected under marketing stunt | Expected under real incident | Reality |
| --- | --- | --- | --- |
| Who discloses first? | The lab or a closely associated company | The victim, with potentially | Hugging Face to the FBI |
| Independent verification | Little info or vague claims that paint perpetrator in positive or neutral light | Detailed reports from outside evaluators | METR and Redwood on site and unpaid |
| How the details reflect on the lab | Neutral or flattering | Embarrassing and reckless | Incompetence and sloppiness from OpenAI (saw initial swarm, let activity continue for months, etc.) |
| Who the target is | A closely associated company or single target | Whoever agents' thought would help in their goals | Hugging Face and with remnants in four other services |
| Legal exposure | Minimized | Significant | FBI report, potential crimes committed, [lawsuit from LASST](https://www.cnbc.com/2026/09/30/openai-sued-cyberattack.html) |
| Likelihood to drive adoption | Increases | Decreases | Capabilities may make some more likely to try the technology, but large corporations who contribute to most of the profitability are less likely to adopt |

Each of these details being revealed should update towards having a higher probability that this was a real incident that OpenAI did not intend to have happen. Of course, perhaps OpenAI still wanted to benefit from the attack by subtly gesturing how powerful their internal models are. However, an effective marketing tactic, even one after an unintended incident, is one that primarily helps to drive adoption and revenue; but a product that is advertised as being misaligned and uncontrollable will drive less adoption from customers that matter most for profitability, namely large corporations.

For the camp that believes this is a stunt, it is an interesting question to ask what evidence could be presented in the future that would significantly alter their current beliefs. If the answer is "nothing," then the hypothesis [was never actually paying rent.](https://www.lesswrong.com/posts/a7n8GdKiAZRX86T5A/making-beliefs-pay-rent-in-anticipated-experiences)

## Jacob Coxon's resignation

On September 8, 2026, [Jacob Coxon announced on X](https://x.com/hilbertspaess/status/2097476196791709843) that he had resigned from Anthropic. The post went incredibly viral, catapulting AI Safety discourse into the mainstream, maybe for the first time ever.

The skeptics were quick to point this out as yet another marketing scheme. In fact, the tweet was likely the first encounter millions of people had with the field of AI safety. As a result, though, there was a massive number of people confidently dismissing this and the wider AI safety media tour as nothing more than a marketing stunt. A mainstream example I can give is from a Breaking Points [interview with Nate Soares](https://www.youtube.com/watch?v=7wuSa9APisU), comfortably surpassing 1 million views, with comments flooding in implying he's secretly trying to help Anthropic. Reddit is similarly filled with thousands of comments expressing similar ideas.

Applying CEE here involves asking if Coxon really believes what he wrote, and whether or not he is trying to help his former employer in some way.

If the tweet was in fact a marketing stunt, we would again expect several things:

1. The cost to the author would probably be comparatively low compared to the rewards.
2. The ones getting criticized are either a rival lab or perhaps a call for increased funding into the company.
3. A coordinated response from Anthropic.
4. A distribution that is amplified by a network associated with Anthropic.

Condition 4 is the only one under contention. The cost to Jacob is high, as Anthropic is prepping for the largest IPO in history, and he currently [holds no stock](https://x.com/benthecarman/status/2099961408335290523) in Anthropic (although he does still have stock in OpenAI). His criticism extends to both OpenAI and his own employer, and broadly speaking indicates a desire for [a global slowdown](https://x.com/hilbertspaess/status/2104428256929972297). There was no formal Anthropic response, except for the alignment lead agreeing with what was said.

The question of whether or not the tweet and subsequent media attention were manufactured by a network is more contentious. The biggest questions raised by outsiders are why the WSJ ran a story about the incident before the tweet dropped, and why Jacob Coxon supposedly [lied about working with third parties](https://www.piratewires.com/p/jacob-coxon-worked-with-ai-doomer-firm).

Jacob claims he [let an investigator know](https://x.com/PirateWires/status/2103243750562767241) about the incident before the tweet dropped, which is why the WSJ ran a story before. This is plausible, and I have not seen any evidence to the contrary. The lie about working with third parties is more interesting, though.

It seems that Nate Soares, in conjunction with DEY, a PR firm connected with AI safety figures, began working with Jacob shortly after his tweet went viral. It is for sure a bit suspicious why Jacob would lie about this (maybe he did not consider having them book interviews to be enough to warrant disclosure, or began working after he said he did not work with third parties). What is confusing to me is how any of this relates to this being an "[obvious psyop for Anthropic](https://x.com/ginamilan_/status/2103267283829231782)," like many people are claiming.

Nate Soares is one of Anthropic's top critics and has expressed interest in wanting to shut down the labs. All the videos accusing Jacob of doing a marketing stunt for Anthropic through DEY fail to mention any semblance of how DEY connects back to benefiting Anthropic. It is likely this is an issue of everyone reading a single headline instead of seeing what is actually being stated.

A summary of the observations is outlined below.

| Observation | Expected under Orchestrated | Expected under Sincere | What happened |
| --- | --- | --- | --- |
| Cost to the author | Low, or rewarded | High | Left Anthropic months before potentially the largest IPO in history |
| Who gets criticized | A rival lab or push for increased funding | Whoever he thinks is at fault | Both OpenAI and Anthropic, but more broadly the AI race |
| Employer reaction | Coordinated messaging | Unscripted | No formal response, although did trigger "pacing frontier" call |
| Distribution | Amplified by a network and/or third parties that tie back to Anthropic | Organic, or slow | A brand-new account had one of the most viral tweets ever. Aided by external orgs, though none directly tie back to Anthropic |

Again, seeing these observations leads me to believe it is very likely this is not a marketing stunt for Anthropic, as it had a high cost to the author, the response from Anthropic was awkward, and criticism towards Anthropic does not help them promote their products. The amplification by the WSJ and work with DEY muddies the waters a bit, but the connection back to Anthropic is unfounded in the former, and actively combative in the latter.

## "Pace the Frontier" call

A few days after Jacob Coxon's resignation, Dario Amodei published "[We Must Pace the Frontier](https://darioamodei.com/post/we-must-pace-the-frontier)," arguing for slowing the improvement of model capabilities, and calling for embedded evaluators at frontier labs, democratic cooperation, and eventually global coordination. Sam Altman and Elon Musk both agreed to the call, although actual policies have yet to be implemented.

Again, accusations of a coordinated campaign came immediately. Prominent economic figureheads like Michael Burry called the narrative as a ploy to [generate hype](https://www.businessinsider.com/michael-burry-big-short-anthropic-openai-slowdown-altman-amodei-musk-2026-9). Many read it as a collective moat [ahead of the labs' IPOs](https://www.ifre.com/equities/2486169/anthropics-mammoth-ipo-uncertain-after-founders-surprise-ai-safety-call). Thousands of posts on Reddit with [thousands of upvotes](https://www.reddit.com/r/technology/comments/1wgq88o/ai_leaders_calling_for_a_slowdown_right_now_is/) make similar claims.

Again, it is important to ask what evidence needs to be realized for these calls to be believed from a skeptic's perspective. Obviously, a call for racing ahead would not be taken as evidence for genuine fear of AI capabilities, as seen from [Jensen Huang's response](https://www.axios.com/2026/07/23/nvidia-ceo-kimi-ai-fears-trump-washington). However, a call for slowdowns does not seem to be either.

When labs race ahead, it is a desperate attempt at getting ahead before IPOs. When labs call for a slowdown, it is also to boost their IPOs. Again, while CEOs should not be taken at their word, as they do have vested interests in their companies, several events around the call for a slowdown should again be considered when updating one's belief on the matter.

| Observation | Expected under Moat | Expected under Sincere | What happened |
| --- | --- | --- | --- |
| Effect on the IPOs | Supports valuations | Creates uncertainty | AI stocks fell the next trading day and potential IPO plans were thrown into doubt |
| Who has more constraints placed on them | Smaller rivals and open-weight models | The frontier labs | Embedded evaluators inside Anthropic, with OpenAI matching. Actual implementation still pending |
| Relationship with the current regulator | Cozy | Willing to clash | The administration called catastrophe fears a hoax |
| Track record | Warnings appear when convenient | Warnings predate commercial stakes | Virtually all AI CEOs are on record for warning about x-risk many years before becoming CEOs |
| Compute spending | Build-outs continue | Build-outs slow | No lab has halted its infrastructure build-out |

This is the most mixed of the three cases, due to the last row favoring distrust in CEOs' call for a slowdown. No lab has meaningfully slowed its releases since the announcements. It should be noted that in "Pacing the Frontier," Dario Amodei does not directly call for stopping training, so a generous interpretation would say the labs have still abided by their call to action if they begin pushing for more 3rd party evaluators with employee-level access.

However, the idea that these calls are a coordinated attempt at either regulatory capture or a misguided stock pump is unlikely given the observations. CEOs' warnings about x-risk have predated their companies. Stocks fell after, and the call resulted in a clash with the current administration. The frontier labs are the first to have binding constraints on them.

Again, the belief by many among the general public that this is in fact a stunt for regulatory capture or bailout is harmful for the AI safety landscape, as people become more and more hostile to the fact that dangers from AI are real and likely to happen sooner rather than later.

## What would lower my confidence?

Of course, like many in the AI safety community, I'm biased toward thinking these models are capable and dangerous. Below are potential falsifiers that would lower my confidence in the fact that these stories were not elaborate marketing stunts.

1. **Further investigation points towards human influence:** If later evidence shows the "breakout" required deliberate configuration, my confidence in an autonomous hack decreases.
2. **Evidence of internal communication:** If any evidence comes out showing communications with Hugging Face before the original report to the FBI, my confidence in the reports would decrease.
3. **Evidence of conflicts of interest:** Any form of payout or working with a third-party with ties to Anthropic would make me doubt Coxon's sincerity of his resignation. Similarly, if it is uncovered that third-party evaluators have a stake in frontier labs, confidence in their reporting should decrease.
4. **Third-party access not materializing:** If the embedded evaluators with employee-level access mentioned in "Pacing the Frontier" are never realized, it gives more credence to the notion that the call for a slowdown was more of a PR move than a desire for actual binding constraints.

## Teaching CEE, and closing the capability gap

Much of the "it's all marketing" reflex is due to the existing bias against believing powerful individuals and the large negative approval modern AI currently holds. However, a potentially larger part of the skepticism comes from skeptics' lack of direct use with frontier capabilities.

### The capability gap

Most people's direct experience of AI is still a free chatbot tier or a Google AI Overview. Those are real AI systems, but they don't reflect frontier capabilities. A quick search on any social media site will turn up thousands of posts mocking people for taking x-risk seriously by pointing out silly mistakes less capable AI systems still make on a daily basis. Someone whose evidence is just "the bot can't count how many rs are in strawberry" is reasonable to conclude that AIs that are capable enough to cause x-risk are far away.

Notwithstanding, the events in this post involve frontier internal models, in swarms of over a thousand, with tools and network access. Even a paid consumer subscription cannot replicate that, but a free tier or a search summary is not even remotely in the same conversation. When someone claims they've used AI and that there is no way it could cause x-risk, they are usually right about what they used, but wrong to generalize it.

In a scrape of 17,619 anti-AI posts and comments, the author of [this post](https://www.lesswrong.com/posts/uSbqxRPYMAY78CFCB/the-risks-of-anti-ai-voters-turning-against-ai-alignment) found that capability-dismissing beliefs (scam, copying machine, grift) appeared far more often than any concern about alignment.

### What we can do

1. **Lead by example with CEE, outside of AI:** When testing beliefs in the real world: ask how each potential future observation would sway your opinions before it is observed. It is easy to practice on events far removed from current politics (e.g. witch trials) but incredibly difficult to do with current events where you have already formed an opinion.
2. **Have skeptics use frontier tools on their own problems:** Many people, even the most skeptical, would likely be surprised at how much more capable these models have gotten, even ones available to the public. An example is [this](https://www.lesswrong.com/posts/uSbqxRPYMAY78CFCB/the-risks-of-anti-ai-voters-turning-against-ai-alignment) same post describing Notch, who was dismissive of AI coding until he tried it himself and was impressed.
3. **Explain AI safety as a science without the politics:** Most people who dismiss alignment research as an "AI tech bro scam" are not familiar with the valid arguments AI safety researchers make, many of whom have been making similar arguments for decades. Getting people to realize what is at stake is much easier when politics is removed.
4. **Point to independent or 3rd party measurements:** Many are rightly skeptical of those with a vested interest in their companies. Getting skeptics to understand that third-party evaluators, government AI safety institute reports, and third-party post-mortems are often just as critical of these companies as they are can often be effective at bridging the knowledge gap.
5. **Concede what's true and express nuance:** It can be simultaneously true that AI overview often makes silly mistakes and that frontier models outperform the world's leading experts in some fields. It can be simultaneously true that Coxon's media tour had PR help, and that the PR firm is not associated with Anthropic, but with people heavily critical of Anthropic.
6. **Express uncertainty:** The amount of uncertainty even among the world's top experts on AI safety/capability is immense, and we should be upfront about that.
7. **Publish your own falsifiers:** It is much more convincing for people to engage in intellectual discussion when you have laid out what would actually change your mind.

## Conclusion

Cynicism about AI companies is often warranted, especially at a time when trust in institutions and powerful leaders is at an all-time low. This is especially true for corporations with a proven track record of deceit. But companies having incentives for profit is not a license to count every event as proof of a grift or marketing stunt.

The useful move in all aspects of rationality and one that is especially relevant here is to decide in advance what would change your mind before observing what actually happened. Though this post was written in hindsight (which weakens the analysis), the evidence points significantly more towards recent AI events being real and not marketing stunts, though it is of course not completely black and white. As we move towards more and more powerful AI, skepticism in those producing the technology has its place, but not if it comes with a denial of reality and poor decision-making on implementing proper policies to govern it.

Those within the AI safety space should take time to understand this widespread reaction to recent events, and communicate ideas in a way that allows those outside the field to see why these bold claims are worth taking seriously. Getting the political will for substantial policy changes surrounding AI will need massive support from both enthusiasts and skeptics alike, and we should continue to engage intellectually with those who have become cynical of the industry.
