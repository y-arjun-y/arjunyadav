---
title: Make a neural network in ~10 minutes
publish_date: Apr 25, 2022
meta_description: For this post, we're going to create a neural network to classify three types of bears - grizzly, black and teddy.
meta_image: https://lh3.google.com/u/0/d/1sKV4CjiKQmDxb71iJZJghdjoKyYqC9Bf=w2880-h1528-iv1
---

![Neural Network - Chris Olah](https://lh3.google.com/u/0/d/1sKV4CjiKQmDxb71iJZJghdjoKyYqC9Bf=w2880-h1528-iv1)

[Credit for the image above](https://distill.pub/2020/circuits/zoom-in/#:~:text=editing%20the%20weights.-,Circuit%203%3A%20Cars%20in%20Superposition,-In%20mixed4c%2C%20a).

<small>Note: This post was last edited on Aug 15, 2022.</small>

## Prerequisites and Introduction

This post assumes you know Python decently well (though I do explain a good chunk of the code, so it shouldn't be a big issue if you don't) and that you know how neural networks work.

If you would like to learn how neural networks work, I highly recommend [this roughly 20-minute video by 3Blue1Brown](https://www.youtube.com/watch?v=aircAruvnKk).

Most of my knowledge for this post came from the first two lessons of [Practical Deep Learning for Coders by fast.ai](https://course.fast.ai/) and this post intends to be a gentle introduction to programming A.I. and is intentionally surface level.

## Jupyter Notebook

[Jupyter Notebook](https://jupyter.org/) is an integrated development environment (IDE) that **allows us to write Python code in smaller chunks (called cells) and see the output any time we run one of these cells**.

Not only does this lead to regularly "sanity checking" our code (which is a good habit in programming as we catch silly errors quickly before they become a major issue), **but we also regularly get the output, which is useful in conjunction with other packages, such as [matplotlib](https://matplotlib.org/)**.

**Our notebooks can also turn into a simple app within the notebook using [widgets](https://ipywidgets.readthedocs.io/en/latest/)** ([and you can even deploy them](https://mybinder.org/), but that isn't discussed in this post).

We'll be using [Google Colab](https://colab.research.google.com/), an online Jupyter Notebook environment that's simple to use. Open up a fresh notebook via File > New Notebook and let's get started.

## fast.ai

[fast.ai](https://github.com/fastai/fastai) is a deep learning library that provides high-level tools that make making models much simpler (as we cut through a lot of the boilerplate).

We'll be using the [fastbook](https://github.com/fastai/fastbook) package (since it's bundled with fastai and a few extra tools, such as the previously mentioned widgets), copy and paste the code snippets (one cell for each snippet) and hit Ctrl/Cmd + Enter to run the cell.

```
!pip install fastbook==0.0.17
!pip uninstall tornado -y
!yes | pip install tornado==5.1.0
```

```py
from fastbook import *
from fastai.vision.widgets import *
```

## Getting our data

I recommend using the [Bing Image Search](https://www.microsoft.com/en-us/bing/apis/bing-image-search-api) API (it's free for 1,000 calls per month and you can use it later to make your own classifier for other types of images)[^1] as fastai allows us to use it to easily get about 150 images of different types.

For this example, **we're going to train our neural network to classify three types of bears: grizzly, black and teddy**.

We provide our API key:

```py
key = os.environ.get('AZURE_SEARCH_KEY', 'ENTER_THE_API_KEY_HERE')
```

And set the types and the path name (where the images and their folders will be):

```py
bear_types = 'grizzly', 'black', 'teddy'
path = Path('bears')
```

Here's the main loop to get the images from Bing, which checks if the directory at the path we supplied exists (if not, it creates it) and, for each type, it creates a folder with about 150 results from Bing Images:

```py
if not path.exists():
    path.mkdir()
    for o in bear_types:
        dest = (path/o)
        dest.mkdir(exist_ok=True)
        results = search_images_bing(key, f'{o} bear')
        download_images(dest, urls=results.attrgot('contentUrl'))
```

We now have our dataset organized into folders, **however, there is a reasonable chance that some of the downloads failed**, so we do a bit of data cleaning by unlinking any images that failed the `verify_images` test provided by fastai.

```py
failed = verify_images(get_image_files(path))
failed.map(Path.unlink)
```

## Setting up our neural network

To get our data into the neural network, we use fast.ai's DataBlock and DataLoaders classes that **enable us to split the images into two branches, the training set** (which will be used to actually train the neural network) **and the validation set** (where `valid_pct` of the images will not be shown for training and will instead be used to prevent overfitting by showing it images it's never seen during training)

```py
bears = DataBlock(
    blocks=(ImageBlock, CategoryBlock),
    get_items=get_image_files,
    splitter=RandomSplitter(valid_pct=0.2, seed=42),
    get_y=parent_label,
    item_tfms=Resize(128)
)
```

```py
bears = bears.new(
    item_tfms=RandomResizedCrop(224, min_scale=0.5),
    batch_tfms=aug_transforms()
)
dls = bears.dataloaders(path)
```

[ResNet](https://pytorch.org/hub/pytorch_vision_resnet/) is a pre-trained model from PyTorch that **takes advantage of a powerful learning method called transfer learning** where a model with predefined weights is used, and the weights update slightly to adapt to the new data.

The reason this works is because the initial hidden layers search for really general features (simple lines, polygons and circles) that can be applied almost everywhere. This saves us a lot of compute as we only have to change a few weights in the higher hidden layers to work on our new data. (Note: This is an oversimplification and this would be a great stopping point to do some further reading. [Here's a paper](https://arxiv.org/pdf/2007.07628.pdf) to get you started with this fascinating topic.)

We call cnn_learner (CNN stands for convolutional neural network. As an oversimplified explanation, the CNN continuously apply filters to search for specific pixel gradients, and the CNN finally spits out the classification result like a regular neural network) and fine_tune it with the number of epochs as a parameter to train our model:

```
learn = cnn_learner(dls, resnet18, metrics=error_rate)
learn.fine_tune(1)
```

## Exporting and getting a prediction

We export our model to a [pickle file](https://pythonnumericalmethods.berkeley.edu/notebooks/chapter11.03-Pickle-Files.html#:~:text=Pickle%20can%20be%20used%20to,back%20to%20a%20Python%20object.):

```py
learn.export()

path = Path()
path.ls(file_exts='.pkl')
```

With this, we can more easily create an "inference" variable that is referenced any time we want to call the model to make a prediction for a new image that it hasn't seen before (called an inference):

```py
learn_inf = load_learner(path/'export.pkl')
```

With widgets, we can supply our image by creating a simple upload button with its own state:

```py
btn_upload = widgets.FileUpload()
btn_upload
```

We save the image uploaded to a variable:

```py
img = PILImage.create(btn_upload.data[-1])
```

```py
out_pl = widgets.Output()
```

And we get our prediction and probability from the inference variable we created earlier:

```py
pred, pred_idx, probs = learn_inf.predict(img)
```

Finally, we print out the last cell and get our prediction!:

```py
lbl_pred = widgets.Label()
lbl_pred.value = f'Prediction: {pred}; Probability: {probs[pred_idx]:.04f}'
lbl_pred
```

## A slight warning on making a classifier for a human attribute

I encourage you to make your own classifier for any object or animal you fancy. I don't recommend making a classifier on some human attribute.

For example: Say we wanted to classify whether a skin tumour is malignant or benign. If we go over to Bing and search for "malignant skin tumour" (which I won't show here) **we find that the first page mainly consists of fair skin tones**, making it much more difficult for a person of colour to use the classifier.

Obviously, your model isn't going to be used by oncologists, but this serves as a reminder that we need to be careful with data for models, powerful or not.

## Footnotes

```
!npx degit y-arjun-y/bears -f
```

[^1]: As an alternative, you can download the dataset we'll be using via the above command and you should run the `bear_types` cell and skip to the "Setting up our neural network" heading.
