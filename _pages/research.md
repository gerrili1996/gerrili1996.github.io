---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

My research lies in the interface of **continuous optimization** and **machine learning**, with a primary focus on the theoretical foundations for solving **data-driven decision-making problems**. Recently, the growing availability of data and improvements in computing resources have enabled the use of automatic decision-making tools in a wide range of applied areas. What I have discovered to be both challenging and intriguing in this field is to balance the trade-off between computational effectiveness and statistical efficiency across various optimization algorithms and statistical models.  Optimizers typically focus on developing effective algorithms for a specific abstract optimization problem at hand. In contrast, as statisticians often prioritize the statistical properties of the global optimal solution, the resulting optimization problem may lack certain desirable optimization properties, such as smoothness and growth conditions. Consequently, existing iterative methods may face challenges such as slow convergence rates and heavy computational burden. The main thrust of my research is to understand how to optimally balance the aforementioned computational effectiveness and statistical efficiency for different data-driven decision-making problems. The following questions gradually became foundational to my research:

​	**Question 1**: How can we leverage problem-specific structures to effectively develop efficient algorithms tailored to the optimization problem at hand?

​	**Question 2**: Which problem properties can be effectively utilized to achieve faster convergence rates?

​	**Question 3**: Is it possible to perturb the current optimization problem in order to preserve statistical efficiency while improving or keeping the optimization properties discussed in **Question 1** and **Question 2**?



### Practically and Provably Efficient Algorithms for Distributional Robust Optimization

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



### Mathematical Foundation of Nonsmooth-Nonconvex Nonconcave Minimax Optimization

Nonsmooth Nonconvex-Nonconcave minimax optimization has gained traction in machine learning.  However, there are still several fundamental open problems that are under-explored:  (1) most existing works focus on the gradient-descent-ascent (GDA) variants that can only be applied when the objective function is smooth (gradient information is available); (2)  all existing algorithms for general nonconvex-nonconcave minimax problems, cannot be guaranteed to converge and even suffer from the *limit cycle* phenomenon. Their global convergence relies on uncheckable regularity conditions. My recent research works provide satisfactory answers to the above issues, which provide new algorithmic frameworks and novel analytic techniques in the context of minimax optimization.

- Nonsmooth Nonconvex-Nonconcave Minimax Optimization: Primal-Dual Balancing and Iteration Complexity Analysis [[arxiv]](https://arxiv.org/abs/2209.10825) <br>
  **Jiajin Li**, Linglingzhi Zhu, Anthony Man-Cho So. <br>The preliminary version has been accepted by NeurIPS 2022 Workshop on Optimization for Machine Learning (**OPT 2022**), **Oral**.<br>Submitted to **Mathematical Programming**. 

- Doubly Smoothed GDA: Global Convergent Algorithm for Constrained Nonconvex-Nonconcave Minimax Optimization [[arxiv]](https://arxiv.org/abs/2212.12978) <br>Taoli Zheng, Linglingzhi Zhu, Anthony Man-Cho So, Jose Blanchet, **Jiajin Li**. <br>Submitted. 

- Understanding Notions of Stationarity in Nonsmooth Optimization [[paper]](https://ieeexplore.ieee.org/document/9186389) <br>
  **Jiajin Li**, Anthony Man-Cho So, Wing-Kin Ma. <br>IEEE Signal Processing Magazine (**SPM**), 2020. 

  

### Optimization Methods in Probability Space

Optimization of infinite-dimensional functionals of probability measures arises naturally in a wide range of areas including statistical learning and artificial intelligence (e.g. generative adversarial networks). The proposed modified Frank-Wolfe procedure takes advantage of Wasserstein space (Riemannian geometry) and strong duality results recently developed in Distributionally Robust Optimization (DRO) so that gradient steps in the Wasserstein space can be efficiently computed using finite-dimensional convex optimization methods. Our works give the first non-asymptotic convergence rate and further provide the sample complexity. I believe this is the first practically implementable algorithm in the literature.

- Modified Frank Wolfe in Probability Space [[paper]](https://proceedings.neurips.cc/paper/2021/hash/79121bb953a3bd47c076f20234bafd2e-Abstract.html) [[code]]() <br>
  Carson Kent, **Jiajin Li**, Jose Blanchet, Peter Glynn. <br>
  Neural Information Processing Systems (**NeurIPS**), 2021. 

  

### Towards a Unified View of Distributional Robust Decision-Making with Optimal Transport

The objective of distributionally robust decision-making is to enable informed decisions in uncertain circumstances when the assumed model or training environment does not align with the actual context in which the decision will be implemented. This situation often arises in scenarios with highly dynamic or non-stationary environments, or when training is limited to a simulated environment due to various constraints. Distributionally robust optimization (DRO) formulations rely on min-max games, where a manager engages in a game against a fictitious adversary to analyze the potential consequences of model inaccuracies. This methodology has a well-established history in the economics literature and control theory. Inaccuracies in probabilistic models can stem from incorrect likelihoods, misspecified actual outcomes, or both. Traditionally, these types of model inaccuracies have been addressed separately.  My research aims to provide a **unified** perspective by incorporating the theory of **optimal transport with martingale constraints**. We try to encompass and extend existing DRO formulations while also introducing new ones. Moreover, our findings have also revealed that the incorporation of martingale constraints in conventional DRO models has far-reaching implications.

- Unifying Distributionally Robust Optimization via Optimal Transport Theory  [arxiv] <br>
  Jose Blanchet, Daniel Kuhn,  **Jiajin Li**$^\star$, Bahar Taskesen. <br>

- Tikhonov Regularization is Optimal Transport Robust under Martingale Constraints [[arxiv]](https://arxiv.org/abs/2210.01413) <br>
   **Jiajin Li**, Sirui Lin, Jose Blanchet, Viet Anh Nguyen. <br>
  Neural Information Processing Systems (**NeurIPS**), 2022. 

- Wasserstein Distributionally Robust Linear-Quadratic Estimation under Martingale Constraints [[paper]](https://proceedings.mlr.press/v206/lotidis23a/lotidis23a.pdf) <br>Kyriakos Lotidis, Nicholas Bambos, Jose Blanche,  **Jiajin Li**. <br>International Conference on Artificial Intelligence and Statistics (**AISTATS**), 2023.



### Optimal Transport Meets Graph Learning (Incorporating the modeling and algorithm design)

The Gromov-Wasserstein (GW) distance provides a flexible way to compare and couple probability distributions supported on different metric spaces. As such, we have witnessed a fast-growing body of literature that applies the GW distance to various structural data analysis tasks, e.g., Cross-lingual knowledge graph (KG)  alignment in natural language processing (NLP) for the machine translation task. In this line of research, we first study the design and analysis of the first practically provable single-loop algorithms for computing the GW distance. The main technical observation is that the GW distance computation satisfies a so-called Luo-Tseng error-bound condition.  Upon this, we further develop an unsupervised graph alignment framework that jointly performs Structure Learning and GW-based graph Alignment. The whole method achieves *state-of-the-art performance* on the DBP15K KG alignment benchmark dataset. 

- Fast Provably Convergent Algorithms for Gromov-Wasserstein in Graph Data [[arxiv]](https://arxiv.org/abs/2205.08115) <br>
  **Jiajin Li**,  Jianheng Tang, Lemin Kong, Huikang Liu,  Jia Li, Anthony Man-Cho So, Jose Blanchet. <br>
- A Convergent Single-Loop Algorithm for Gromov-Wasserstein in Graph Data  <br>
  **Jiajin Li**,  Jianheng Tang, Lemin Kong, Huikang Liu,  Jia Li, Anthony Man-Cho So, Jose Blanchet. <br>International Conference on Learning Representation (**ICLR**), 2023.
- Robust Attributed Graph Alignment via Joint Structure Learning and Optimal Transport [[code]](https://github.com/squareRoot3/SLOTAlign)<br>
  Jianheng Tang, Weiqi Zhang,  **Jiajin Li**,  Kangfei Zhao, Fugee Tsung, Jia Li. <br>
  International Conference on Data Engineering  (**ICDE**), 2023.

- Outlier-Robust Gromov Wasserstein for Graph Data [[arxiv]](https://arxiv.org/abs/2302.04610) <br>
  Lemin Kong, **Jiajin Li**, Anthony Man-Cho So. <br>Submitted. 



