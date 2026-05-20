window.PAGE_DATA = {
  "teaser": {
    "dynamic": [
      {
        "id": "01_shuttle",
        "model": "CogVideoX",
        "files": {
          "baseline": "assets/videos/teaser/dynamic/01_shuttle/baseline.mp4",
          "ours": "assets/videos/teaser/dynamic/01_shuttle/ours.mp4"
        },
        "prompt": "A space shuttle taking off into the sky."
      },
      {
        "id": "02_wetdog",
        "model": "Wan 2.2",
        "files": {
          "baseline": "assets/videos/teaser/dynamic/02_wetdog/baseline.mp4",
          "ours": "assets/videos/teaser/dynamic/02_wetdog/ours.mp4"
        },
        "prompt": "A wet dog close-up portrait, water droplets on its happy face."
      }
    ],
    "continuous": {
      "id": "whitehorse",
      "model": "Wan 2.2",
      "prompt": "Beauty, dusk, riding a white horse from a distance.",
      "rows": [
        {
          "label": "g = -2.0",
          "file": "assets/videos/teaser/continuous/whitehorse/g-2.0.mp4"
        },
        {
          "label": "g = -1.0",
          "file": "assets/videos/teaser/continuous/whitehorse/g-1.0.mp4"
        },
        {
          "label": "g = 0.6",
          "file": "assets/videos/teaser/continuous/whitehorse/g0.6.mp4"
        },
        {
          "label": "g = +1.0",
          "file": "assets/videos/teaser/continuous/whitehorse/g+1.0.mp4"
        }
      ]
    }
  },
  "dynamic": [
    {
      "figure": "Figure 4",
      "label": "Example 1",
      "model": "Wan 2.2",
      "dataset": "VidProM",
      "vid": "",
      "prompt": "Cyclists cycling at Burning Man festival.",
      "id": "fig4_01_cyclists",
      "files": {
        "base": "assets/videos/dynamic/fig4_01_cyclists/base.mp4",
        "alg": "assets/videos/dynamic/fig4_01_cyclists/alg.mp4",
        "ours": "assets/videos/dynamic/fig4_01_cyclists/ours.mp4"
      }
    },
    {
      "figure": "Figure 4",
      "label": "Example 2",
      "model": "Wan 2.2",
      "dataset": "VBench-I2V",
      "vid": "",
      "prompt": "A young boy is jumping in the mud.",
      "id": "fig4_02_boy_mud",
      "files": {
        "base": "assets/videos/dynamic/fig4_02_boy_mud/base.mp4",
        "alg": "assets/videos/dynamic/fig4_02_boy_mud/alg.mp4",
        "ours": "assets/videos/dynamic/fig4_02_boy_mud/ours.mp4"
      }
    },
    {
      "figure": "Figure 4",
      "label": "Example 3",
      "model": "Wan 2.1",
      "dataset": "VBench-I2V",
      "vid": "",
      "prompt": "A train traveling down tracks through the woods with leaves on the ground.",
      "id": "fig4_03_train",
      "files": {
        "base": "assets/videos/dynamic/fig4_03_train/base.mp4",
        "alg": "assets/videos/dynamic/fig4_03_train/alg.mp4",
        "ours": "assets/videos/dynamic/fig4_03_train/ours.mp4"
      }
    },
    {
      "figure": "Figure 7",
      "label": "Example 1",
      "model": "Wan 2.2",
      "dataset": "VBench-I2V",
      "vid": "",
      "prompt": "A man riding a mountain bike on top of a rocky hill.",
      "id": "fig7_01_mtb",
      "files": {
        "base": "assets/videos/dynamic/fig7_01_mtb/base.mp4",
        "alg": "assets/videos/dynamic/fig7_01_mtb/alg.mp4",
        "ours": "assets/videos/dynamic/fig7_01_mtb/ours.mp4"
      }
    },
    {
      "figure": "Figure 7",
      "label": "Example 2",
      "model": "HunyuanVideo 1.5",
      "dataset": "VBench-I2V",
      "vid": "",
      "prompt": "A white car is swiftly driving on a dirt road near a bush, kicking up dust.",
      "id": "fig7_02_white_car",
      "files": {
        "base": "assets/videos/dynamic/fig7_02_white_car/base.mp4",
        "alg": "assets/videos/dynamic/fig7_02_white_car/alg.mp4",
        "ours": "assets/videos/dynamic/fig7_02_white_car/ours.mp4"
      }
    },
    {
      "figure": "Figure 7",
      "label": "Example 3",
      "model": "Wan 2.2",
      "dataset": "VBench-I2V",
      "vid": "",
      "prompt": "A red sports car driving through sand, kicking up a large amount of dust.",
      "id": "fig7_03_red_car",
      "files": {
        "base": "assets/videos/dynamic/fig7_03_red_car/base.mp4",
        "alg": "assets/videos/dynamic/fig7_03_red_car/alg.mp4",
        "ours": "assets/videos/dynamic/fig7_03_red_car/ours.mp4"
      }
    },
    {
      "figure": "Figure 8",
      "label": "Example 1",
      "model": "Wan 2.2",
      "dataset": "VBench-I2V",
      "vid": "",
      "prompt": "A little crab scurried on the sandy beach.",
      "id": "fig8_01_crab",
      "files": {
        "base": "assets/videos/dynamic/fig8_01_crab/base.mp4",
        "alg": "assets/videos/dynamic/fig8_01_crab/alg.mp4",
        "ours": "assets/videos/dynamic/fig8_01_crab/ours.mp4"
      }
    },
    {
      "figure": "Figure 8",
      "label": "Example 2",
      "model": "Wan 2.2",
      "dataset": "VidProM",
      "vid": "",
      "prompt": "A rally car racing at Sahara.",
      "id": "fig8_02_rally",
      "files": {
        "base": "assets/videos/dynamic/fig8_02_rally/base.mp4",
        "alg": "assets/videos/dynamic/fig8_02_rally/alg.mp4",
        "ours": "assets/videos/dynamic/fig8_02_rally/ours.mp4"
      }
    },
    {
      "figure": "Figure 8",
      "label": "Example 3",
      "model": "HunyuanVideo 1.5",
      "dataset": "VBench-I2V",
      "vid": "",
      "prompt": "A bird with a fish in its beak flying over a field.",
      "id": "fig8_03_bird_fish",
      "files": {
        "base": "assets/videos/dynamic/fig8_03_bird_fish/base.mp4",
        "alg": "assets/videos/dynamic/fig8_03_bird_fish/alg.mp4",
        "ours": "assets/videos/dynamic/fig8_03_bird_fish/ours.mp4"
      }
    },
    {
      "figure": "Figure 9",
      "label": "Example 1",
      "model": "Wan 2.2",
      "dataset": "VBench-I2V",
      "vid": "",
      "prompt": "A man riding a horse with a spear in his hand.",
      "id": "fig9_01_horse_spear",
      "files": {
        "base": "assets/videos/dynamic/fig9_01_horse_spear/base.mp4",
        "alg": "assets/videos/dynamic/fig9_01_horse_spear/alg.mp4",
        "ours": "assets/videos/dynamic/fig9_01_horse_spear/ours.mp4"
      }
    },
    {
      "figure": "Figure 9",
      "label": "Example 2",
      "model": "Wan 2.2",
      "dataset": "PVD",
      "vid": "",
      "prompt": "A person jumps twice and turns to face the camera while keeping the phone in the air.",
      "id": "fig9_02_phone_field",
      "files": {
        "base": "assets/videos/dynamic/fig9_02_phone_field/base.mp4",
        "alg": "assets/videos/dynamic/fig9_02_phone_field/alg.mp4",
        "ours": "assets/videos/dynamic/fig9_02_phone_field/ours.mp4"
      }
    },
    {
      "figure": "Figure 9",
      "label": "Example 3",
      "model": "Wan 2.2",
      "dataset": "PVD",
      "vid": "",
      "prompt": "A person uses a polishing machine on a wet marble countertop, moving it back and forth.",
      "id": "fig9_03_marble",
      "files": {
        "base": "assets/videos/dynamic/fig9_03_marble/base.mp4",
        "alg": "assets/videos/dynamic/fig9_03_marble/alg.mp4",
        "ours": "assets/videos/dynamic/fig9_03_marble/ours.mp4"
      }
    }
  ],
  "continuous": [
    {
      "id": "fig6_01_blue_car",
      "figure": "Figure 6",
      "prompt": "A blue car driving down a dirt road near train tracks.",
      "model": "Wan 2.2",
      "dataset": "VBench-I2V",
      "steps": [
        {
          "label": "g = -2.0",
          "file": "assets/videos/continuous/fig6_01_blue_car/g-2.0.mp4"
        },
        {
          "label": "g = -1.0",
          "file": "assets/videos/continuous/fig6_01_blue_car/g-1.0.mp4"
        },
        {
          "label": "g = 0.0",
          "file": "assets/videos/continuous/fig6_01_blue_car/g0.0.mp4"
        },
        {
          "label": "g = 0.6",
          "file": "assets/videos/continuous/fig6_01_blue_car/g0.6.mp4"
        },
        {
          "label": "g = 1.0",
          "file": "assets/videos/continuous/fig6_01_blue_car/g1.0.mp4"
        }
      ]
    },
    {
      "id": "fig6_02_horses",
      "figure": "Figure 6",
      "prompt": "A couple of horses are running in the dirt.",
      "model": "Wan 2.2",
      "dataset": "VBench-I2V",
      "steps": [
        {
          "label": "g = -2.0",
          "file": "assets/videos/continuous/fig6_02_horses/g-2.0.mp4"
        },
        {
          "label": "g = -1.0",
          "file": "assets/videos/continuous/fig6_02_horses/g-1.0.mp4"
        },
        {
          "label": "g = 0.0",
          "file": "assets/videos/continuous/fig6_02_horses/g0.0.mp4"
        },
        {
          "label": "g = 0.6",
          "file": "assets/videos/continuous/fig6_02_horses/g0.6.mp4"
        },
        {
          "label": "g = 1.0",
          "file": "assets/videos/continuous/fig6_02_horses/g1.0.mp4"
        }
      ]
    },
    {
      "id": "fig10_01_polo",
      "figure": "Figure 10",
      "prompt": "A person riding a horse in a polo match.",
      "model": "Wan 2.2",
      "dataset": "VBench-I2V",
      "steps": [
        {
          "label": "g = -2.0",
          "file": "assets/videos/continuous/fig10_01_polo/g-2.0.mp4"
        },
        {
          "label": "g = -1.0",
          "file": "assets/videos/continuous/fig10_01_polo/g-1.0.mp4"
        },
        {
          "label": "g = 0.0",
          "file": "assets/videos/continuous/fig10_01_polo/g0.0.mp4"
        },
        {
          "label": "g = 0.6",
          "file": "assets/videos/continuous/fig10_01_polo/g0.6.mp4"
        },
        {
          "label": "g = 1.0",
          "file": "assets/videos/continuous/fig10_01_polo/g1.0.mp4"
        }
      ]
    },
    {
      "id": "fig10_02_tiger",
      "figure": "Figure 10",
      "prompt": "A tiger walking through a wooded area.",
      "model": "Wan 2.2",
      "dataset": "VBench-I2V",
      "steps": [
        {
          "label": "g = -2.0",
          "file": "assets/videos/continuous/fig10_02_tiger/g-2.0.mp4"
        },
        {
          "label": "g = -1.0",
          "file": "assets/videos/continuous/fig10_02_tiger/g-1.0.mp4"
        },
        {
          "label": "g = 0.0",
          "file": "assets/videos/continuous/fig10_02_tiger/g0.0.mp4"
        },
        {
          "label": "g = 0.6",
          "file": "assets/videos/continuous/fig10_02_tiger/g0.6.mp4"
        },
        {
          "label": "g = 1.0",
          "file": "assets/videos/continuous/fig10_02_tiger/g1.0.mp4"
        }
      ]
    },
    {
      "id": "fig10_03_airplane",
      "figure": "Figure 10",
      "prompt": "An airplane is flying through the sky at sunset.",
      "model": "Wan 2.2",
      "dataset": "VBench-I2V",
      "steps": [
        {
          "label": "g = -2.0",
          "file": "assets/videos/continuous/fig10_03_airplane/g-2.0.mp4"
        },
        {
          "label": "g = -1.0",
          "file": "assets/videos/continuous/fig10_03_airplane/g-1.0.mp4"
        },
        {
          "label": "g = 0.0",
          "file": "assets/videos/continuous/fig10_03_airplane/g0.0.mp4"
        },
        {
          "label": "g = 0.6",
          "file": "assets/videos/continuous/fig10_03_airplane/g0.6.mp4"
        },
        {
          "label": "g = 1.0",
          "file": "assets/videos/continuous/fig10_03_airplane/g1.0.mp4"
        }
      ]
    },
    {
      "id": "fig10_04_eagle",
      "figure": "Figure 10",
      "prompt": "An eagle is flying over a mountain with trees in the background.",
      "model": "Wan 2.2",
      "dataset": "VBench-I2V",
      "steps": [
        {
          "label": "g = -2.0",
          "file": "assets/videos/continuous/fig10_04_eagle/g-2.0.mp4"
        },
        {
          "label": "g = -1.0",
          "file": "assets/videos/continuous/fig10_04_eagle/g-1.0.mp4"
        },
        {
          "label": "g = 0.0",
          "file": "assets/videos/continuous/fig10_04_eagle/g0.0.mp4"
        },
        {
          "label": "g = 0.6",
          "file": "assets/videos/continuous/fig10_04_eagle/g0.6.mp4"
        },
        {
          "label": "g = 1.0",
          "file": "assets/videos/continuous/fig10_04_eagle/g1.0.mp4"
        }
      ]
    }
  ]
};
