# Phoneme Generator

An experimental tool for generating brand names (WIP)

## Idea

Theoretically by combining random phonemes/graphemes together, we can produce realistic-sounding collections of letters. I am considering using a list of english words to find phoneme match probabilities, but this may result in words that are too close to real ones (And may be already in use on various platforms). This could possibly be resolved by using other languages.

## Usage

You must have the [bun](https://bun.sh/) runtime installed. As of `2/15/2025` make sure you are using the (canary build)[https://bun.sh/docs/installation#canary-builds] for HMR support; you can upgrade using `bun upgrade --canary`. Clone the repo and run `bun dev`, then navigate to localhost:3000.