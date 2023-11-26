---
title: Notebook
meta_description: Welcome to my public ML/AI Safety notebook!
meta_image: https://lh3.google.com/u/0/d/10qRLt5785FRn6IBo-LaDxcz3dhfjYtaK=w2880-h1528-iv1
---

This page serves as my **machine learning/AI safety** notebook, I hope for this page to serve as a more unstructured knowledge hub of all that I have discovered in ML/AIS!

## Learning

### What I'm Learning

- Feb-March 2024: Re-building a large language model (such as GPT-2) and self-stidying LLMs more generally during this time
- Jan 2024: Final month of interpretability self-studying (shifting focus to more recent work)
- Nov-Dec 2023: Applications + Interpretability (focus on Neel Nanda's work and lectures)

### What I Want To Learn

#### Interpretability

- Sparse Coding

#### Evaluation and Analysis

- Independent Component Analysis

#### General

- How Gato by DeepMind truly works

### What I've learnt thus far

#### Interpretability

- Variational Autoencoders

#### Policy

- UAE's AIS Space (or at least the most recent parts of it)

#### General

- Principal Component Analysis
- The underlying principle behind transformers

### Achievements

#### Nov 2023

- Applied to OpenAI's Red Teaming Network!
- Applied to GovAI's blog editor post!
- Applied to AGISF 2024!
- Applied to AI Safety Camp 2024!

#### Summer 2023

- Taught high school seniors about machine learning and AI safety!
- Worked with my brother on variational auto-encoders and mechanistic interpretability while he was setting up BAISC.
- Research Assistant Tenureship - got to learn a lot about transformers!

## Papers + Notes (if open access)

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

- [Attention is all you need](https://arxiv.org/abs/1706.03762):

  ![Transformer](/transformer.png)

## Terms and Concepts

(in decreasing order of "high-levelness", these terms tend to get updated as I learn more!)

- [Pareto frontier](https://www.baeldung.com/cs/defining-multiobjective-algorithms-and-pareto-frontiers#:~:text=The%20Pareto%20frontier%20is%20a,be%20on%20the%20Pareto%20frontier.): In mathematics, it's just a set of solutions that represents the best trade-off between all the objective functions. Need to learn more about this 'Pareto' guy.

- [The AI Pause Debate](https://www.astralcodexten.com/p/pause-for-thought-the-ai-pause-debate):

![AI Pause Debate](https://substackcdn.com/image/fetch/w_728,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffa96d51f-aa6c-4699-a057-a179ca12b3c9_834x694.png)

- Risk Awareness Moment: Risk Awareness Moments are more retroactive in nature: they are moments in our history where major national and/or international bodies come together to get their head straight on a non-partisan issue (e.g.: the ozone layer hole of Antarctica) ([this article](https://forum.effectivealtruism.org/posts/hybGfBnkrtL9E3EcS/how-long-will-reaching-a-risk-awareness-moment-and-charts) does a great job explaining RAMs for AI).

- Mechanistic Interpretability: Essentially, it's a series of techniques that one can employ to try to reverse engineer a neural network: the inner workings of a neural network are something that, on paper, may seem decipherable: but are typically obfuscated by a lot of factors (the main one being dimensionality) ([Anthropic](https://transformer-circuits.pub/2022/mech-interp-essay/index.html))

- Generative Adversarial Network: A GAN consists of both an encoder and decoder that essentially battle it out for the encoder to generate more convincing fake images. See an example [here](https://colab.research.google.com/drive/1hPVDell0IZTNNQULTO9Kb0VCi3vg0cmH?usp=sharing).

- Sparse Coding: A technique to set an encoding function in such a way that it can exploit a high-dimensional space to model a large number of possible features, while being encouraged to use a small subset of non-zero elements to describe each individual observation.

- Variational auto-encoder (VAE): A VAE is an autoencoder whose encodings distribution is regularised during the training in order to ensure that its latent space has "good" properties allowing us to generate some new data (in a sense, visualize it in a better manner).

  It does this via **having a layer that splits the encoder's result into mean and standard deviation, and a latent vector with a separate episilon value for backpropagation to happen properly**.

  If you wish to see a VAE in action, check out [this repository](https://github.com/lyeoni/pytorch-mnist-VAE).

  [Credit for below image](https://www.youtube.com/watch?v=d0W_Ab-aZGo).

  ![VAE](/vae.png)

- Auto-encoder: An autoencoder is a type of convolutional neural network (CNN) that converts a high-dimensional input into a low-dimensional one (i.e. a latent vector), and later reconstructs the original input with the highest quality possible. It consists of both an encoder and decoder. An example of its use is removing noise from a dataset (Paperspace Blog).

## People I've Met in AI Safety

(anonymized - of course)

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

- [Arjun's AI Escapades Class](/projects#aaeclass)

- [AI Safety Studying/Research](/projects#aissr)

- [AUS CSE Research Assistant](/projects#ausresearch)

- [Introduction to Machine Learning](/projects#mathforml)

- [ML Safety Course](/projects#mlsafetycourse)

- [Introduction to Machine Learning](/projects#introml)
