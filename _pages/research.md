---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

My research lies in the interface of **continuous optimization** and **machine learning**, with a primary focus on the algorithmic and theoretical foundations for solving data-driven decision-making problems. Recently, the growing availability of data and improvements in computing resources have enabled the use of automatic decision-making tools in a wide range of applied areas. Of these areas, graph learning, finance, insurance, and reliability have informed most of my research; a significant portion of my research is inspired by in-depth collaboration and discussion with researchers in these areas. As an optimizer, I not only care about developing general-purpose algorithms for abstract optimization problems, but I  strive to design specific application-driven optimization models and develop computational tools for them. 

The following four steps constitute my  *bottom-up* research philosophy: 

(1) identify the modeling difficulties in  applications via interdisciplinary collaboration; 

(2) design data-driven optimization models with  computational tractability in mind;

(3) develop practically and provably efficient algorithms specifically designed for the applications;

(4) construct novel theoretical and algorithmic frameworks that are generally applicable across a wide range of problems. 



### Algorithmic Foundation of Nonsmooth Nonconvex (Non)-concave Minimax Optimization

Nonsmooth Nonconvex (Non)concave minimax optimization has gained traction in machine learning.  However, there are still several fundamental open problems that are under-explored:  (1) most existing works focus on the gradient-descent-ascent (GDA) variants that can only be applied when the objective function is smooth (gradient information is available);(2)  all existing algorithms for general nonconvex nonconcave minimax problems, cannot be guaranteed to converge and even suffer from the *limit cycle* phenomenon. Their global convergence relies on uncheckable regularity conditions. My recent research works provide satisfactory answers to the above issues, which provide new algorithmic frameworks and novel analytic techniques in the minimax community. 

- Nonsmooth Composite Nonconvex-Concave Minimax Optimization [[arxiv]](https://arxiv.org/abs/2209.10825) <br>
  **Jiajin Li**, Linglingzhi Zhu, Anthony Man-Cho So. <br>
  NeurIPS 2022 Workshop on Optimization for Machine Learning (**OPT 2022**), **Oral**.

- Understanding Notions of Stationarity in Nonsmooth Optimization [[paper]](https://ieeexplore.ieee.org/document/9186389) <br>
   **Jiajin Li**, Anthony Man-Cho So, Wing-Kin Ma. <br>IEEE Signal Processing Magazine (**SPM**), 2020. 

  

### Optimization Methods in Probability Space

Optimization of infinite-dimensional functionals of probability measures arises naturally in a wide range of areas including statistical learning and artificial intelligence (e.g. generative adversarial networks). The proposed modified Frank-Wolfe procedure takes advantage of Wasserstein space (Riemannian geometry) and strong duality results recently developed in Distributionally Robust Optimization (DRO) so that gradient steps in the Wasserstein space can be efficiently computed using finite-dimensional convex optimization methods. Our works give the first non-asymptotic convergence rate and further provide the sample complexity. I believe this is the first practically implementable algorithm in the literature.

- Modified Frank Wolfe in Probability Space [[paper]](https://proceedings.neurips.cc/paper/2021/hash/79121bb953a3bd47c076f20234bafd2e-Abstract.html) [[code]]() <br>
  Carson Kent, **Jiajin Li**, Jose Blanchet, Peter Glynn. <br>
  Neural Information Processing Systems (**NeurIPS**), 2021. 
  
  

### Practically and Provably Efficient Algorithms for DRO

Many representative optimal transport-based DRO models in machine learning admit equivalent reformulations as tractable conic programs via the strong duality technique and can be further solved by general-purpose off-the-shelf solvers. Nevertheless, these solvers do not scale well with problem size and result in slow algorithms in practice, as they do not exploit any useful structures from the problem itself. 
By identifying and further exploiting these useful structures from the dual formulation of DRO problems, I proposed several exceptionally efficient algorithmic frameworks. Armed with their local error-bound conditions, we can achieve faster convergence rates in theory, and in practice, a wall-clock time that is  **1000+** times faster than the standard off-the-shelf solver.

- Towards a first-order algorithmic framework for distributionally robust risk minimization <br>
  **Jiajin Li**, Caihua Chen, Anthony Man-Cho So, Huang Sen. <br>
  To be submitted *(preprint available upon request)*.

- Fast Epigraphical Projection-based Incremental Algorithms for Wasserstein Distributionally Robust SVM [[paper]](https://arxiv.org/abs/2010.12865) [[code]]() <br>
  **Jiajin Li**, Caihua Chen, Anthony Man-Cho So. <br>
  Neural Information Processing Systems (**NeurIPS**), 2020.
  
- A First-Order Algorithmic Framework for  Distributionally Robust Logistic Regression  [[paper]](https://arxiv.org/abs/1910.12778) [[code]](https://github.com/gerrili1996/DRLR_NIPS2019_exp)<br>
  **Jiajin Li**, Sen Huang, Anthony Man-Cho So. <br>
  Neural Information Processing Systems (**NeurIPS**), 2019. 
  
  

### Optimal Transport Meets Graph Learning (Incorporating the modeling and algorithm design)

The Gromov-Wasserstein (GW) distance provides a flexible way to compare and couple probability distributions supported on different metric spaces. As such, we have witnessed a fast-growing body of literature that applies the GW distance to various structural data analysis tasks, e.g., Cross-lingual knowledge graph (KG)  alignment in natural language processing (NLP) for the machine translation task. In this line of research, we first study the design and analysis of the first practically provable single-loop algorithms for computing the GW distance. The main technical observation is that the GW distance computation satisfies a so-called Luo-Tseng error-bound condition.  Upon this, we further develop an unsupervised graph alignment framework that jointly performs Structure Learning and GW-based graph Alignment. The whole method achieves *state-of-the-art performance* on the DBP15K KG alignment benchmark dataset. 

- Fast Provably Convergent Algorithms for Gromov-Wasserstein in Graph Data [[arxiv]](https://arxiv.org/abs/2205.08115) <br>
  **Jiajin Li**,  Jianheng Tang, Lemin Kong, Huikang Liu,  Jia Li, Anthony Man-Cho So, Jose Blanchet. <br>
  
- A Convergent Single-Loop Algorithm for Gromov-Wasserstein in Graph Data  <br>
  **Jiajin Li**,  Jianheng Tang, Lemin Kong, Huikang Liu,  Jia Li, Anthony Man-Cho So, Jose Blanchet. <br>
  Submitted. 

- Robust Attributed Graph Alignment via Joint Structure Learning and Optimal Transport [[code]](https://github.com/squareRoot3/SLOTAlign)<br>
  Jianheng Tang, Weiqi Zhang,  **Jiajin Li**,  Kangfei Zhao, Fugee Tsung, Jia Li. <br>
  International Conference on Data Engineering  (**ICDE**), 2023.



### (MSCI) Automatic Outlier Detection Mechanism for Option Volatility Surface Modeling

*To be continued...*

