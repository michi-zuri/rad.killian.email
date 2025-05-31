---
status: draft
title: Maintaining software could be anyone's job
description: "Reflections on what Luis Pedro Coelho wrote in 2024 about the need to maintain software in bioinformatics."
authors: [michi]
published: "2025-06-01"
tags:
  - software
  - sustainability
  - bioinformatics
---


> Research software has become essential in science, including in the life sciences [1,2]. Most of this software is designed and built by research groups funded by short-term research grants. The coding is performed by trainees who move on to other jobs once the project is completed. This can result in dead software tools, whereby a tool described in a manuscript no longer works after publication [3,4].

_Full paper_: [For long-term sustainable software in bioinformatics](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011920)  \
[doi:10.1371/journal.pcbi.1011920](https://doi.org/10.1371/journal.pcbi.1011920)

Coelho proposes to work against this by following these principles:

- We employ the methods of reproducible research
- We eat our own dogfood
- We follow the principle of least astonishment in design
- We provide support in public
- We aim to have our software produce high-quality error messages
- We provide bioconda packages [24] for all our tools
- We make our software available prior to publication

For detailed descriptions of these principles, see the full paper linked above.

This paper shows me that writing software has become an important part of doing research in 2024 and that maintenance of software developed for research has become a necessity.

Let's elaborate on this.
