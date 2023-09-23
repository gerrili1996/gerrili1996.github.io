---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

My research resides at the intersection of **mathematical optimization** and **machine learning**. I primarily concentrate on the theoretical and computational underpinnings required to solve data-driven decision-making problems. My specific areas of focus include:

1. Theoretical foundations of nonsmooth, nonconvex-nonconcave minimax optimization:  Convergence analysis and algorithmic design;
2.  Distributionally robust optimization: Aiming for a  unified approach with computational tractability; 
3. Optimization within probability spaces employing Wasserstein geometry;
4. Large-scale computational challenges in optimal transport with applications to graph learning.  



### Theoretical and Computational Underpinnings of Nonsmooth-Nonconvex Nonconcave Minimax Optimization

Nonconvex-nonconcave minimax optimization has gained widespread interest in recent years in machine learning and data science. Most existing works focus on variants of gradient descent-ascent (GDA) algorithms due to their simplicity. However, these algorithms have several limitations: (1) They are only applicable to smooth problems. (2) They may not converge globally and can even suffer from **limit cycles**. (3) No universal algorithm can be applied to all minimax optimization problems.

My research gives an affirmative answer to these questions for a broad class of nonsmooth nonconvex-nonconcave problem. To be specific, we focus on the setting whether the primal or dual function possesses the KL property with an exponent $\theta\in(0,1)$ and enjoys the convex composite type nonsmooth structure. 
The key techinical novelty lies in a new convergence analysis framework, the key components of which are two newly developed nonsmooth/smooth primal error bound and dual error bound. These error bound shed light on both a conceptual and quantitative characterization of the optimal primal-dual balancing, which I believe serves as a new algorithm design principle  for minimax optimization problems in the future.

- Nonsmooth Nonconvex-Nonconcave Minimax Optimization: Primal-Dual Balancing and Iteration Complexity Analysis [[arxiv]](https://arxiv.org/abs/2209.10825) <br>
  **Jiajin Li**, Linglingzhi Zhu, Anthony Man-Cho So. <br>The preliminary version has been accepted by NeurIPS 2022 Workshop on Optimization for Machine Learning (**OPT 2022**), **Oral**.<br>Under review at **Mathematical Programming**. 

- Doubly Smoothed GDA: Global Convergent Algorithm for Constrained Nonconvex-Nonconcave Minimax Optimization [[arxiv]](https://arxiv.org/abs/2212.12978) <br>Taoli Zheng, Linglingzhi Zhu, Anthony Man-Cho So, Jose Blanchet, **Jiajin Li**. <br>
Neural Information Processing Systems (**NeurIPS**), 2023. 
- Understanding Notions of Stationarity in Nonsmooth Optimization [[paper]](https://ieeexplore.ieee.org/document/9186389) <br>
  **Jiajin Li**, Anthony Man-Cho So, Wing-Kin Ma. <br>IEEE Signal Processing Magazine (**SPM**), 2020. 

  


### Practically and Provably Efficient Algorithms for Distributional Robust Optimization

Many representative optimal transport-based DRO models in machine learning admit equivalent reformulations as tractable conic programs via the strong duality technique and can be further solved by general-purpose off-the-shelf solvers. Nevertheless, these solvers do not scale well with problem size and result in slow algorithms in practice, as they do not exploit any useful structures from the problem itself. 
By identifying and further exploiting these useful structures from the dual formulation of DRO problems, I proposed several exceptionally efficient algorithmic frameworks. Armed with their local error-bound conditions, we can achieve faster convergence rates in theory, and in practice, a wall-clock time that is  **1000+** times faster than the standard off-the-shelf solver.

- Towards a First-order Algorithmic Framework for Distributionally Robust Optimization<br>
  **Jiajin Li**, Caihua Chen, Anthony Man-Cho So. <br>
  To be submitted to **Mathematical Programming** *(preprint available upon request)*.

- Fast Epigraphical Projection-based Incremental Algorithms for Wasserstein Distributionally Robust SVM [[paper]](https://arxiv.org/abs/2010.12865) [[code]]() <br>
  **Jiajin Li**, Caihua Chen, Anthony Man-Cho So. <br>
  Neural Information Processing Systems (**NeurIPS**), 2020.

- A First-Order Algorithmic Framework for  Distributionally Robust Logistic Regression  [[paper]](https://arxiv.org/abs/1910.12778) [[code]](https://github.com/gerrili1996/DRLR_NIPS2019_exp)<br>
  **Jiajin Li**, Sen Huang, Anthony Man-Cho So. <br>
  Neural Information Processing Systems (**NeurIPS**), 2019. 


### Towards a Unified View of Distributional Robust Decision-Making with Optimal Transport

The objective of distributionally robust decision-making is to enable informed decisions in uncertain circumstances when the assumed model or training environment does not align with the actual context in which the decision will be implemented. This situation often arises in scenarios with highly dynamic or non-stationary environments, or when training is limited to a simulated environment due to various constraints. Distributionally robust optimization (DRO) formulations rely on min-max games, where a manager engages in a game against a fictitious adversary to analyze the potential consequences of model inaccuracies. This methodology has a well-established history in the economics literature and control theory. Inaccuracies in probabilistic models can stem from incorrect likelihoods, misspecified actual outcomes, or both. Traditionally, these types of model inaccuracies have been addressed separately.  My research aims to provide a **unified** perspective by incorporating the theory of **optimal transport with martingale constraints**. We try to encompass and extend existing DRO formulations while also introducing new ones. Moreover, our findings have also revealed that the incorporation of martingale constraints in conventional DRO models has far-reaching implications.

- Unifying Distributionally Robust Optimization via Optimal Transport Theory  [[arxiv]](https://arxiv.org/abs/2308.05414) <br>($\alpha$-$\beta$ order) Jose Blanchet, Daniel Kuhn,  **Jiajin Li**$^\star$, Bahar Taskesen. <br>
To be submitted to **SIAM Journal on Optimization**. 

- Tikhonov Regularization is Optimal Transport Robust under Martingale Constraints [[arxiv]](https://arxiv.org/abs/2210.01413) <br>
   **Jiajin Li**, Sirui Lin, Jose Blanchet, Viet Anh Nguyen. <br>
  Neural Information Processing Systems (**NeurIPS**), 2022. 

- Wasserstein Distributionally Robust Linear-Quadratic Estimation under Martingale Constraints [[paper]](https://proceedings.mlr.press/v206/lotidis23a/lotidis23a.pdf) <br>Kyriakos Lotidis, Nicholas Bambos, Jose Blanche,  **Jiajin Li**. <br>International Conference on Artificial Intelligence and Statistics (**AISTATS**), 2023.



### Optimization Methods in Probability Space

Optimization of infinite-dimensional functionals of probability measures arises naturally in a wide range of areas including statistical learning and artificial intelligence (e.g. generative adversarial networks). The proposed modified Frank-Wolfe procedure takes advantage of Wasserstein space (Riemannian geometry) and strong duality results recently developed in Distributionally Robust Optimization (DRO) so that gradient steps in the Wasserstein space can be efficiently computed using finite-dimensional convex optimization methods. Our works give the first non-asymptotic convergence rate and further provide the sample complexity. I believe this is the first practically implementable algorithm in the literature.

- Modified Frank Wolfe in Probability Space [[paper]](https://proceedings.neurips.cc/paper/2021/hash/79121bb953a3bd47c076f20234bafd2e-Abstract.html) [[code]]() <br>
  Carson Kent, **Jiajin Li**, Jose Blanchet, Peter Glynn. <br>
  Neural Information Processing Systems (**NeurIPS**), 2021. <br>
  Journal version to be submitted to **Mathematics of Operations Research**. 

  


### Optimal Transport Meets Graph Learning 
The Gromov-Wasserstein (GW) distance provides a flexible way to compare and couple probability distributions supported on different metric spaces. It has been applied to various structural data analysis tasks, such as cross-lingual knowledge graph (KG) alignment in natural language processing (NLP) for machine translation.
In this line of research, we first designed and analyzed the first practically provable single-loop algorithms for computing the GW distance. We then developed an unsupervised graph alignment framework that jointly performs structure learning and GW-based graph alignment. This method achieves state-of-the-art performance on the DBP15K KG alignment benchmark dataset. We also fully investigated a robust version of the GW distance, which also achieves state-of-the-art results on several well-known graph learning tasks.

- Trade-off among Infeasibility, Efficiency and Accuracy for Gromov-Wasserstein Computation [[arxiv]](https://arxiv.org/abs/2205.08115) <br>
  **Jiajin Li**,  Jianheng Tang, Lemin Kong, Huikang Liu,  Jia Li, Anthony Man-Cho So, Jose 
  Blanchet. <br>
  To be submitted to **Journal of Machine Learning Research**. 
- A Convergent Single-Loop Algorithm for Gromov-Wasserstein in Graph Data  <br>
  **Jiajin Li**,  Jianheng Tang, Lemin Kong, Huikang Liu,  Jia Li, Anthony Man-Cho So, Jose Blanchet. <br>International Conference on Learning Representation (**ICLR**), 2023.
- Robust Attributed Graph Alignment via Joint Structure Learning and Optimal Transport [[code]](https://github.com/squareRoot3/SLOTAlign)<br>
  Jianheng Tang, Weiqi Zhang,  **Jiajin Li**,  Kangfei Zhao, Fugee Tsung, Jia Li. <br>
  International Conference on Data Engineering  (**ICDE**), 2023.
- Outlier-Robust Gromov Wasserstein for Graph Data [[arxiv]](https://arxiv.org/abs/2302.04610) <br>
  Lemin Kong, **Jiajin Li**, Anthony Man-Cho So. <br>
  Neural Information Processing Systems (**NeurIPS**), 2023. [**Spotlight presentation.**]



