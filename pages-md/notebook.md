---
title: Notebook
meta_description: Welcome to my public ML/AI Safety notebook!
meta_image: https://lh3.google.com/u/0/d/10qRLt5785FRn6IBo-LaDxcz3dhfjYtaK=w2880-h1528-iv1
---

This page serves as my **machine learning/AI safety** notebook, I hope for this page to serve as a more unstructured knowledge hub of all that I have discovered in ML/AIS!

## Learning

### What I'm Learning Currently

- Mechanistic Interpretability
  - Sparse Coding
  - Variational Auto-encoders
- Vision Transformers

### What I Want To Learn

- Component Analysis
  - Principal Component Analysis (through a course)
  - Independent Component Analysis

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

Background: While the Transformer architecture has become the de-facto standard for natural
language processing tasks, its applications to computer vision remain limited. In vision, attention is either applied in conjunction with convolutional networks, or used to replace certain components of convolutional networks while keeping their overall structure in place.

Purpose: How can we use a transformer more solely to achieve great results in CV?

Enter, ViT - obtaining results similar to CNNs by slightly tweaking the original transformer model presented in "Attention Is All You Need" and pre-training on large datasets and later fine-tuning to suit smaller, downstream tasks.

An important aspect of this paper was inspecting how the attention can be visualized and how the positional embeddings appear once visualized.

- [EfficientFormer: Vision Transformers at MobileNet](https://arxiv.org/abs/2206.01191):

Purpose: Can transformers (specifically Vision Transformers - ViT) run as fast as MobileNet while obtaining high performance?

Introduction: Dosovitskiy et al. adapt the attention mechanism to 2D images and propose Vision Transformer (ViT): the input image is divided into non-overlapping patches, and the inter-patch representations are learned through MHSA (multi-head self-attention) without inductive bias. However, many bottlenecks exist when using transformers for computer vision applications - and this is the focus of the paper: using latency analysis to see what's bottlenecking their performance and hence, deliver a model that addresses these issues.

Observation 1: Patch embedding with large kernel and stride is a speed bottleneck on mobile devices.

Observation 2: Consistent feature dimension is important for the choice of token mixer. MHSA is
not necessarily a speed bottleneck.

Observation 3: CONV-BN is more latency-favorable than LN (GN)-Linear and the accuracy drawback is generally acceptable.

Observation 4: The latency of nonlinearity is hardware and compiler dependent.

The rest of the paper is the implementation (and hairy) mathematics behind the EfficientFormer in PyTorch 1.11 using the Timm library that addresses each of the bottlenecks. This is done mainly through latency driven slimming for their supernet by using a MetaPath and a different Softmax (Gumbel Softmax) implementatoin for their searching when it comes to get the importance score ofr th blocks within each MP for (I believe) the self-attention aspect of the model.

- [Attention is all you need](https://arxiv.org/abs/1706.03762):

![Transformer](/transformer.png)

## Terms and Concepts

(in decreasing order of "high-levelness")

- Sparse Coding: A technique to set an encoding function in such a way that it can exploit a high-dimensional space to model a large number of possible features, while being encouraged to use a small subset of non-zero elements to describe each individual observation.

- Variational auto-encoder (VAE): A VAE is an autoencoder whose encodings distribution is regularised during the training in order to ensure that its latent space has "good" properties allowing us to generate some new data (in a sense, visualize it in a better manner).

It does this via **having a layer that splits the encoder's result into mean and standard deviation, and a latent vector with a separate episilon value for backpropagation to happen properly**.

- Auto-encoder: An autoencoder is a type of convolutional neural network (CNN) that converts a high-dimensional input into a low-dimensional one (i.e. a latent vector), and later reconstructs the original input with the highest quality possible. It consists of both an encoder and decoder. An example of its use is removing noise from a dataset (Paperspace Blog).

## Related Projects and Posts

### Posts

- [The Busy Person's Introduction to AI Safety](/blog/the-busy-persons-introduction-to-ai-safety)
- [Linear algebra in ~10 minutes](blog/linear-algebra-in-10-minutes)
- [Distillation of The Offense-Defense Balance of Scientific Knowledge](/blog/distillation-of-the-offense-defense-balance-of-scientific-knowledge)

### Projects

- [AI Safety Studying/Research](/projects#aissr)

- [AUS CSE Research Assistant](/projects#ausresearch)

- [ML Safety Course](/projects#mlsafetycourse)
