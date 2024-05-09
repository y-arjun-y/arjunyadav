---
title: Notebook
meta_description: Welcome to my public ML/AI Safety notebook!
meta_image: https://lh3.google.com/u/0/d/10qRLt5785FRn6IBo-LaDxcz3dhfjYtaK=w2880-h1528-iv1
---

This page serves as my **machine learning/AI safety** notebook, I hope for this page to serve as a more unstructured knowledge hub of all that I have discovered in ML/AIS in the future! For all the interesting thoughts and posts I've discovered, see my [X.com](https://x.com/y_arjun_y) profile.

## Learning

### What I'm Learning

Concurrently working on [this levelling up guide](https://docs.google.com/document/d/1b83_-eo9NEaKDKc9R3P5h5xkLImqMw8ADLmi__rkLo4/edit#heading=h.fke682cxqkxr) - currently at Level 4.

- [Mar 2024 - May 2024: AI Safety Fundamentals (Alignment + Governance) + Re-building a large language model (GPT-2)](#mar-2024-may-2024)
- [Nov 2023 - Feb 2024: Steering and Evaluation Research + Large Language Models (LLMs)](#nov-2023-feb-2024)

### What I've learnt thus far

#### Interpretability

- Variational Autoencoders

#### Policy

- More about the EU's AI policy
- UAE's AIS Space (or at least the most recent parts of it)

#### General

- Principal Component Analysis
- The underlying principle behind transformers

### What I'm planning to learn/do

- Apply to [SERI Mats](https://www.matsprogram.org/).
- Completing CS50 and [this](https://www.cloudskillsboost.google/paths/17) course by Google.
- Either with a course or independently, finishing this [notebook](https://www.aisafetybook.com/).
- Seeing [this](https://github.com/rasbt/LLMs-from-scratch/tree/main) repository.
- Re-building a large language model (GPT-2) - Got in touch with a person who was interested in following [Neel Nanda's video](https://www.youtube.com/watch?v=dsjUDacBw8o), will be getting started with this soon and writing anything interesting here!

#### Notebook

#### <span id="mar-2024-may-2024">AI Safety Fundamentals (Alignment + Governance) + Re-building a large language model (GPT-2)</span>

##### AI Safety Fundamentals - Governance

- Session 4: Obstacles to Controlling AI: Great session (finally!) and thoroughly enjoyed the debate!

- Session 3: The Perils of AI: Didn't enjoy this session as much, but again - still valuable.

- Session 2: The Promise of AI: A bit more slow, but still really valuable.

- Session 1: Introduction to Artificial Intelligence: Figure 01 and Palantir were wild, also, [we made a song](https://suno.com/song/febf3882-5b82-4015-8f65-ee8bdf0bf463)!

##### AI Safety Fundamentals - Alignment

- Session 7: Contributing to AI Alignment: Gained a lot of clarity in career and a great coincidence happened today!

- Session 6: Technical governance approaches: Some lovely one-on-ones!

- Session 5: Mechanistic Interpretability: [Dictionary Learning is incredible](https://transformer-circuits.pub/2023/monosemantic-features/index.html).

- Session 4: Scalable Oversight: This session made me feel that I actually know what I'm talking about, a rare feeling.

- Session 3: Reinforcement learning from human (or AI) feedback: Lovely.

- Session 2: What is AI Safety?: The gaps are definitely getting filled. (x2)

- Session 1: AI and the Years Ahead: The gaps are definitely getting filled.

#### <span id="nov-2023-feb-2024">Steering and Evaluation Research + Large Language Models (LLMs)</span>

##### Articles, Lectures and Thoughts

- [Steering GPT-2-XL by adding an activation vector](https://www.lesswrong.com/posts/5spBue2z2tw4JuDCx/steering-gpt-2-xl-by-adding-an-activation-vector) - LessWrong

- [Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g&list=WL&index=10) - Andrej Karpathy

###### The full scoop: how do LLMs work?

A large language model consists of two things: a _massive_ file of parameters (llama-2-70b's is almost 140 GB) and a simple C file used to run the architecture that permits the user to input text and get an output back.

The C file isn't interesting, the interesting part is the parameters: which you can think of as a _compressed form of the internet_, an expensive (think in the millions of dollars) and hard process.

The architecture used to get the parameters is called a <a href="#transformers">transformer</a>, and the first thing we do with transformers is called _pre-training_, where, from the ~10TB of text, we obtain our base model.

The above process is only done maybe once a year as it's really expensive. But the next step is making _the assistant to our large language model_ which is the interesting part: the part _where we can give a prompt and get a response_. The process of obtaining this helper model is called _fine-tuning_ and typically requires much less resources.

![Summary - LLM](/summary-llm.png)

Currently, closed source models (ones where we can only interact through a web interface or an API at best - no access to the weights) [outperform open sources one by a fair amount](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard). The rest of the video dives into scaling laws and an excellent summary of some of the core fundamentals of AI safety, highly recommend watching the last 15 minutes in its entirety!

###### What is Steering?

Put simply, steering is the idea that _we can change the course of what a model generates_ by somehow manipulating its activation vectors, whether that involves changing individual neurons or adding activation vectors.

### Achievements

#### Apr-May 2024

- Applied for [SPAR 2024](https://supervisedprogramforalignment.org/)!
- Applied for the [AI Safety Careers Course](https://impactacademy.org/aiscc/)!
- Part of the [Horizon Omega team](/projects#horizonomega)!
- Applied for the AI Safety, Ethics and Society course!
- Got accepted to AI Safety Fundamentals: Governance course!

#### Jan-Mar 2024

- Finished with my work for Dioptra!
- Got accepted to AI Safety Fundamentals!
- Got accepted to AI Safety Camp 2024: VAISU project!

#### Dec 2023

- Became a part of the [ai-plans](https://ai-plans.com) dev team!
- Became a part of the Dioptra research team!

#### Nov 2023

- Applied to the Inspirit AI Program for Summer 2024 (July 15 - July 26, 5-7:30 PT)!
- Applied to OpenAI's Red Teaming Network!
- Applied to GovAI's blog editor post!
- Applied to AI Safety Fundamentals!
- Applied to AI Safety Camp 2024!

#### Summer 2023

- Taught high school seniors about machine learning and AI safety!
- Worked with my brother on variational auto-encoders and mechanistic interpretability while he was setting up BAISC.
- Research Assistant Tenureship - got to learn a lot about transformers!

## Papers, Notes and Reports

### Governance and Policy

- [Positive AI Economic Futures](https://www3.weforum.org/docs/WEF_Positive_AI_Economic_Futures_2021.pdf)

#### Misalignment and Potential Solutions

- [Weak-to-Strong Generalization: Eliciting Strong Capabilities with Weak Supervision](https://arxiv.org/pdf/2312.09390.pdf)
- [Supervising strong learners by amplifying weak experts](https://arxiv.org/pdf/1810.08575.pdf)
- [AI Safety via Debate](https://arxiv.org/pdf/1805.00899.pdf)
- [Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/pdf/2212.08073.pdf)
- [CycleGAN: a Master of Steganography](https://arxiv.org/pdf/1712.02950.pdf)

### Evaluation Research

- [On the Measure of Intelligence](https://arxiv.org/pdf/1911.01547.pdf):

> We note that in practice, the contemporary AI community still gravitates towards benchmarking intelligence by comparing the skill exhibited by AIs and humans at specific tasks, such as board games and video games. We argue that solely measuring skill at any given task falls short of measuring intelligence, because skill is heavily modulated by prior knowledge and experience: unlimited priors or unlimited training data allow experimenters to “buy” arbitrary levels of skills for a system, in a way that masks the system’s own generalization power. We then articulate a new formal definition of intelligence based on Algorithmic Information Theory, describing intelligence as skill-acquisition efficiency and highlighting the concepts of scope, generalization difficulty, priors, and experience, as critical pieces to be accounted for in characterizing intelligent systems.

### Mechanistic Interpretability

- [Variational Sparse Coding](https://openreview.net/forum?id=SkeJ6iR9Km):

  The Problem: Unsupervised discovery of interpretable features and controllable generation with high-dimensional data are currently major challenges in machine learning.

  Proposal: A model based on variational auto-encoders (VAEs) in which interpretation is induced through latent space sparsity with a mixture of Spike and Slab distributions as prior.

### Practical Applications of Transformers

- [Exploring Semi-Supervised Learning for Camera Trap Images from the Wild](https://dl.acm.org/doi/abs/10.1145/3582099.3582122)

- [Evaluating the FixMatch Semi-Supervised Algorithm for Unbalanced Image Data](https://dl.acm.org/doi/abs/10.1145/3529399.3529419)

- [Towards an IoT-based Deep Learning Architecture for Camera Trap Image Classification](https://ieeexplore.ieee.org/document/9345858)

### Multi-headed Attention and Transformers

- [Vision Transformers - Origin](https://arxiv.org/abs/2010.11929v2):

  Background: While the Transformer architecture has become the de-facto standard for natural language processing tasks, its applications to computer vision remain limited. In vision, attention is either applied in conjunction with convolutional networks, or used to replace certain components of convolutional networks while keeping their overall structure in place.

  Purpose: How can we use a transformer more solely to achieve great results in CV?

  Enter, ViT - obtaining results similar to CNNs by slightly tweaking the original transformer model presented in "Attention Is All You Need" and pre-training on large datasets and later fine-tuning to suit smaller, downstream tasks.

  An important aspect of this paper was inspecting how the attention can be visualized and how the positional embeddings appear once visualized.

- [EfficientFormer: Vision Transformers at MobileNet](https://arxiv.org/abs/2206.01191):

  Purpose: Can transformers (specifically Vision Transformers - ViT) run as fast as MobileNet while obtaining high performance?

  Introduction: Dosovitskiy et al. adapt the attention mechanism to 2D images and propose Vision Transformer (ViT): the input image is divided into non-overlapping patches, and the inter-patch representations are learned through MHSA (multi-head self-attention) without inductive bias. However, many bottlenecks exist when using transformers for computer vision applications - and this is the focus of the paper: using latency analysis to see what's bottlenecking their performance and hence, deliver a model that addresses these issues.

  Observation 1: Patch embedding with large kernel and stride is a speed bottleneck on mobile devices.

  Observation 2: Consistent feature dimension is important for the choice of token mixer. MHSA is not necessarily a speed bottleneck.

  Observation 3: CONV-BN is more latency-favorable than LN (GN)-Linear and the accuracy drawback is generally acceptable.

  Observation 4: The latency of nonlinearity is hardware and compiler dependent.

  The rest of the paper is the implementation (and hairy) mathematics behind the EfficientFormer in PyTorch 1.11 using the Timm library that addresses each of the bottlenecks. This is done mainly through latency driven slimming for their supernet by using a MetaPath and a different Softmax (Gumbel Softmax) implementatoin for their searching when it comes to get the importance score ofr th blocks within each MP for (I believe) the self-attention aspect of the model.

- <span id="transformers"><a href="https://arxiv.org/abs/1706.03762">Attention is all you need</a><span>:

  ![Transformer](/transformer.png)

## Terms and Concepts

(in a rough decreasing order of "high-levelness", these terms tend to get updated as I learn more!)

- Dictionary Learning - [Anthropic's tool](https://transformer-circuits.pub/2023/monosemantic-features/index.html) for this is great, see [this guide](https://transformer-circuits.pub/2023/monosemantic-features/index.html#setup-interface) as well.

- Features, Circuit and Universality - [This](https://distill.pub/2020/circuits/zoom-in/) distillation is basically canon at this point.

- Deceit and Honesty - See [this](https://www.lesswrong.com/posts/FbSAuJfCxizZGpcHc/interpreting-the-learning-of-deceit) post on LessWrong - really interesting!

- Reinforcement learning from human feedback - See [this](https://openai.com/research/learning-from-human-preferences) post by OpenAI.

- Mistral's 8x7B and Uncensored Models: Now this, [this is interesting](https://www.youtube.com/watch?v=GyllRd2E6fg). The uncensored models aspect is however, very scary.

- The Reversal Curse: Ask ChatGPT who is Tom Cruise's mother: you'll get Mary Lee Pfeiffer. Ask ChatGPT who is Mary Lee Pfeiffer's §, it'll say it doesn't know.

- Gemini by Google: See this [post](https://www.lesswrong.com/posts/9Xh2PyMzNDu3yEHqR/google-gemini-announced) (linkpost of [the announcement post](https://blog.google/technology/ai/google-gemini-ai/), see it for the comments).

- [Monosemanticity](https://www.astralcodexten.com/p/god-help-us-lets-try-to-understand): The fact that _some_ neurons only do one thing, making them easier to interpret. Check [this](https://www.monosemanticity.com/) out!

- [Pareto frontier](https://www.baeldung.com/cs/defining-multiobjective-algorithms-and-pareto-frontiers#:~:text=The%20Pareto%20frontier%20is%20a,be%20on%20the%20Pareto%20frontier.): In mathematics, it's just a set of solutions that represents the best trade-off between all the objective functions. Need to learn more about this 'Pareto' guy.

- [Multimodal interface](https://en.wikipedia.org/wiki/Multimodal_interaction) - "Multimodal interaction provides the user with multiple modes of interacting with a system. A multimodal interface provides several distinct tools for input and output of data."

- Risk Awareness Moment: Risk Awareness Moments are more retroactive in nature: they are moments in our history where major national and/or international bodies come together to get their head straight on a non-partisan issue (e.g.: the ozone layer hole of Antarctica) ([this article](https://forum.effectivealtruism.org/posts/hybGfBnkrtL9E3EcS/how-long-will-reaching-a-risk-awareness-moment-and-charts) does a great job explaining RAMs for AI).

- Mechanistic Interpretability: Essentially, it's a series of techniques that one can employ to try to reverse engineer a neural network: the inner workings of a neural network are something that, on paper, may seem decipherable: but are typically obfuscated by a lot of factors (the main one being dimensionality) ([Anthropic](https://transformer-circuits.pub/2022/mech-interp-essay/index.html))

- AI Plans and Strategies: A collection of compilations of AI plans and strategies for alignment: [1](https://ai-plans.com/), [2](https://www.lesswrong.com/posts/Kwb29ye3qsvPzoof8/20-strategies-for-avoiding-deceptive-alignment-1)

- [The AI Pause Debate](https://www.astralcodexten.com/p/pause-for-thought-the-ai-pause-debate):

![AI Pause Debate](https://substackcdn.com/image/fetch/w_728,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffa96d51f-aa6c-4699-a057-a179ca12b3c9_834x694.png)

- Generative Adversarial Network: A GAN consists of both an encoder and decoder that essentially battle it out for the encoder to generate more convincing fake images. See an example [here](https://colab.research.google.com/drive/1hPVDell0IZTNNQULTO9Kb0VCi3vg0cmH?usp=sharing).

- Sparse Coding: A technique to set an encoding function in such a way that it can exploit a high-dimensional space to model a large number of possible features, while being encouraged to use a small subset of non-zero elements to describe each individual observation.

- Variational auto-encoder (VAE): A VAE is an autoencoder whose encodings distribution is regularised during the training in order to ensure that its latent space has "good" properties allowing us to generate some new data (in a sense, visualize it in a better manner).

  It does this via **having a layer that splits the encoder's result into mean and standard deviation, and a latent vector with a separate episilon value for backpropagation to happen properly**.

  If you wish to see a VAE in action, check out [this repository](https://github.com/lyeoni/pytorch-mnist-VAE).

  [Credit for below image](https://www.youtube.com/watch?v=d0W_Ab-aZGo).

  ![VAE](/vae.png)

- Auto-encoder: An autoencoder is a type of convolutional neural network (CNN) that converts a high-dimensional input into a low-dimensional one (i.e. a latent vector), and later reconstructs the original input with the highest quality possible. It consists of both an encoder and decoder. An example of its use is removing noise from a dataset (Paperspace Blog).

## People I've Met in AI Safety
Note that these are outside of formal projects.

### Meeting with a co-worker at Dioptra

- Interesting chat with someone who is very similar to me: learnt a lot, but a lot more self-reflecting to be done.

### Meeting with a former EA VP fellow

- Great to connect with him after a long time! Glad we're both doing well and gave some really great advice on meeting my goals for independent AI safety learning. I also really like the practice he has before every meeting with his pre-email: "Imagine we're done with the call, and it went fantastic. What happened? What did we attend to and resolve?"

### Meeting with an eval researcher

- Incredibly useful and provided a lot of clarity, couldn't have asked for a better meeting from the Slack message I had posted in an AI safety workspace.

### Meeting with a (former) Berkeley Ph.D. student

- "Honesty is everything" is what I remember most vividly, I wonder if they still hold that opinion...

## Related Projects and Posts

### Posts

- [The Busy Person's Introduction to AI Safety](/blog/the-busy-persons-introduction-to-ai-safety)
- [Linear algebra in ~10 minutes](blog/linear-algebra-in-10-minutes)
- [Distillation of The Offense-Defense Balance of Scientific Knowledge](/blog/distillation-of-the-offense-defense-balance-of-scientific-knowledge)

### Projects

- [AI Safety Fundamentals: Governance Course](/projects#aisfg)
- [AI Safety Fundamentals: Alignment Course](/projects#aisfa)
- [AI Safety Camp](/projects#aisc2024)
- [AI Plans](/projects#ai-plans)
- [Dioptra](/projects#dioptra)
- [Arjun's AI Escapades Class](/projects#aaeclass)
- [AI Safety Studying/Research](/projects#aissr)
- [AUS CSE Research Assistant](/projects#ausresearch)
- [Introduction to Machine Learning](/projects#mathforml)
- [ML Safety Course](/projects#mlsafetycourse)
- [Introduction to Machine Learning](/projects#introml)
