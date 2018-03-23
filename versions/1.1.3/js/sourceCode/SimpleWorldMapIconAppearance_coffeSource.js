// Generated by CoffeeScript 1.12.7
window.SimpleWorldMapIconAppearance_coffeSource = 'class SimpleWorldMapIconAppearance extends IconAppearance\n\n  constructor: (@morph) ->\n    super\n    @preferredSize = new Point 500, 265\n    @specificationSize = new Point 1000, 530\n\n  paintFunction: (context) ->\n    fillColor = @morph.color\n    fillColorString = fillColor.toString()\n\n    #// October revol + Bolshevik Islands Drawing\n    context.beginPath()\n    context.moveTo 732, 22\n    context.lineTo 738, 20\n    context.lineTo 762, 33\n    context.lineTo 748, 35\n    context.lineTo 728, 29\n    context.lineTo 732, 22\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Svalbard Drawing\n    context.beginPath()\n    context.moveTo 525, 21\n    context.lineTo 542, 23\n    context.lineTo 544, 28\n    context.lineTo 528, 31\n    context.lineTo 537, 42\n    context.lineTo 528, 42\n    context.lineTo 525, 36\n    context.lineTo 520, 42\n    context.lineTo 509, 42\n    context.lineTo 508, 35\n    context.lineTo 503, 30\n    context.lineTo 506, 26\n    context.lineTo 525, 21\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Zemlya Georga + other islands Drawing\n    context.save()\n    context.translate 81, -263\n    context.beginPath()\n    context.moveTo 547, 277\n    context.lineTo 558, 274\n    context.lineTo 557, 284\n    context.lineTo 548, 287\n    context.lineTo 517, 288\n    context.lineTo 515, 284\n    context.lineTo 535, 278\n    context.lineTo 547, 277\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    context.restore()\n    #// Novaya Zemlya Drawing\n    context.beginPath()\n    context.moveTo 639, 46\n    context.lineTo 659, 41\n    context.lineTo 658, 46\n    context.lineTo 643, 49\n    context.lineTo 635, 53\n    context.lineTo 625, 60\n    context.lineTo 627, 73\n    context.lineTo 616, 71\n    context.lineTo 614, 67\n    context.lineTo 621, 50\n    context.lineTo 639, 46\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Siberian Island 3 Drawing\n    context.beginPath()\n    context.moveTo 854, 46\n    context.lineTo 859, 46\n    context.lineTo 859, 50\n    context.lineTo 856, 53\n    context.lineTo 854, 52\n    context.lineTo 854, 46\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Siberian Island 2 Drawing\n    context.beginPath()\n    context.moveTo 862, 48\n    context.lineTo 868, 51\n    context.lineTo 863, 52\n    context.lineTo 862, 48\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Siberian Island 1 Drawing\n    context.beginPath()\n    context.moveTo 859, 55\n    context.lineTo 868, 60\n    context.lineTo 859, 60\n    context.lineTo 859, 55\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Iceland Drawing\n    context.beginPath()\n    context.moveTo 405, 98\n    context.lineTo 411, 91\n    context.lineTo 416, 96\n    context.lineTo 427, 94\n    context.lineTo 429, 103\n    context.lineTo 412, 110\n    context.lineTo 405, 98\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// GB Drawing\n    context.beginPath()\n    context.moveTo 454, 128\n    context.lineTo 460, 126\n    context.lineTo 459, 131\n    context.lineTo 463, 132\n    context.lineTo 468, 146\n    context.lineTo 472, 149\n    context.lineTo 471, 155\n    context.lineTo 457, 159\n    context.lineTo 460, 154\n    context.lineTo 454, 152\n    context.lineTo 460, 146\n    context.lineTo 454, 128\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Ireland Drawing\n    context.beginPath()\n    context.moveTo 443, 147\n    context.lineTo 452, 143\n    context.lineTo 451, 152\n    context.lineTo 448, 156\n    context.lineTo 443, 156\n    context.lineTo 443, 147\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Japan Drawing\n    context.beginPath()\n    context.moveTo 864, 158\n    context.lineTo 868, 151\n    context.lineTo 868, 168\n    context.lineTo 866, 181\n    context.lineTo 873, 188\n    context.lineTo 861, 196\n    context.lineTo 862, 205\n    context.lineTo 857, 219\n    context.lineTo 844, 223\n    context.lineTo 831, 229\n    context.lineTo 831, 222\n    context.lineTo 855, 206\n    context.lineTo 858, 194\n    context.lineTo 865, 172\n    context.lineTo 864, 158\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Sardinia Drawing\n    context.beginPath()\n    context.moveTo 493, 203\n    context.lineTo 492, 197\n    context.lineTo 494, 195\n    context.lineTo 495, 203\n    context.lineTo 493, 203\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Cuba Drawing\n    context.beginPath()\n    context.moveTo 236, 257\n    context.lineTo 248, 258\n    context.lineTo 262, 264\n    context.lineTo 255, 266\n    context.lineTo 246, 261\n    context.lineTo 238, 260\n    context.lineTo 236, 257\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Haiti + Dominican Republic Drawing\n    context.beginPath()\n    context.moveTo 270, 267\n    context.lineTo 279, 272\n    context.lineTo 265, 273\n    context.lineTo 270, 267\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Philippines Drawing\n    context.beginPath()\n    context.moveTo 805, 272\n    context.lineTo 808, 274\n    context.lineTo 816, 296\n    context.lineTo 819, 313\n    context.lineTo 811, 311\n    context.lineTo 805, 296\n    context.lineTo 802, 276\n    context.lineTo 805, 272\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// South America Drawing\n    context.beginPath()\n    context.moveTo 266, 296\n    context.lineTo 281, 296\n    context.lineTo 297, 300\n    context.lineTo 313, 311\n    context.lineTo 325, 315\n    context.lineTo 334, 334\n    context.lineTo 369, 346\n    context.lineTo 373, 358\n    context.lineTo 365, 371\n    context.lineTo 358, 393\n    context.lineTo 352, 405\n    context.lineTo 338, 412\n    context.lineTo 326, 436\n    context.lineTo 317, 445\n    context.lineTo 310, 455\n    context.lineTo 296, 462\n    context.lineTo 285, 481\n    context.lineTo 285, 496\n    context.lineTo 279, 509\n    context.lineTo 284, 520\n    context.lineTo 278, 524\n    context.lineTo 269, 523\n    context.lineTo 262, 506\n    context.lineTo 260, 483\n    context.lineTo 262, 468\n    context.lineTo 268, 440\n    context.lineTo 270, 421\n    context.lineTo 271, 389\n    context.lineTo 261, 380\n    context.lineTo 255, 371\n    context.lineTo 246, 354\n    context.lineTo 249, 333\n    context.lineTo 256, 320\n    context.lineTo 255, 309\n    context.lineTo 266, 296\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Sri Lanka Drawing\n    context.beginPath()\n    context.moveTo 691, 303\n    context.lineTo 696, 310\n    context.lineTo 691, 313\n    context.lineTo 691, 303\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Kalimantan Drawing\n    context.beginPath()\n    context.moveTo 773, 325\n    context.lineTo 797, 311\n    context.lineTo 797, 325\n    context.lineTo 792, 344\n    context.lineTo 775, 340\n    context.lineTo 773, 325\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Sulawesi Drawing\n    context.beginPath()\n    context.moveTo 803, 330\n    context.lineTo 810, 330\n    context.lineTo 811, 351\n    context.lineTo 800, 348\n    context.lineTo 803, 330\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Papua Drawing\n    context.beginPath()\n    context.moveTo 833, 335\n    context.lineTo 867, 346\n    context.lineTo 877, 352\n    context.lineTo 884, 367\n    context.lineTo 855, 359\n    context.lineTo 849, 350\n    context.lineTo 839, 345\n    context.lineTo 833, 335\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Java Drawing\n    context.beginPath()\n    context.moveTo 763, 351\n    context.lineTo 789, 355\n    context.lineTo 795, 361\n    context.lineTo 783, 360\n    context.lineTo 763, 354\n    context.lineTo 763, 351\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Madagascar Drawing\n    context.beginPath()\n    context.moveTo 607, 368\n    context.lineTo 602, 395\n    context.lineTo 595, 403\n    context.lineTo 590, 398\n    context.lineTo 594, 387\n    context.lineTo 592, 377\n    context.lineTo 607, 368\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Australia Drawing\n    context.beginPath()\n    context.moveTo 860, 388\n    context.lineTo 864, 370\n    context.lineTo 876, 391\n    context.lineTo 887, 409\n    context.lineTo 892, 421\n    context.lineTo 890, 442\n    context.lineTo 883, 458\n    context.lineTo 871, 462\n    context.lineTo 857, 456\n    context.lineTo 850, 451\n    context.lineTo 843, 441\n    context.lineTo 837, 438\n    context.lineTo 826, 436\n    context.lineTo 812, 441\n    context.lineTo 804, 441\n    context.lineTo 791, 445\n    context.lineTo 791, 435\n    context.lineTo 786, 419\n    context.lineTo 785, 403\n    context.lineTo 804, 395\n    context.lineTo 809, 390\n    context.lineTo 817, 380\n    context.lineTo 827, 380\n    context.lineTo 833, 371\n    context.lineTo 847, 371\n    context.lineTo 847, 383\n    context.lineTo 860, 388\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// New Zealand Drawing\n    context.beginPath()\n    context.moveTo 949, 449\n    context.lineTo 965, 462\n    context.lineTo 943, 489\n    context.lineTo 934, 493\n    context.lineTo 931, 488\n    context.lineTo 946, 472\n    context.lineTo 956, 461\n    context.lineTo 949, 449\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Tasmania Drawing\n    context.beginPath()\n    context.moveTo 870, 469\n    context.lineTo 880, 469\n    context.lineTo 878, 478\n    context.lineTo 872, 476\n    context.lineTo 870, 469\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Corsica Drawing\n    context.beginPath()\n    context.moveTo 493, 195\n    context.lineTo 493, 192\n    context.lineTo 494, 191\n    context.lineTo 494, 195\n    context.lineTo 493, 195\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Africa Drawing\n    context.beginPath()\n    context.moveTo 477, 210\n    context.lineTo 490, 211\n    context.lineTo 499, 211\n    context.lineTo 498, 223\n    context.lineTo 518, 232\n    context.lineTo 531, 225\n    context.lineTo 550, 230\n    context.lineTo 558, 229\n    context.lineTo 574, 269\n    context.lineTo 592, 297\n    context.lineTo 611, 294\n    context.lineTo 609, 307\n    context.lineTo 602, 319\n    context.lineTo 582, 337\n    context.lineTo 578, 349\n    context.lineTo 582, 364\n    context.lineTo 578, 378\n    context.lineTo 566, 387\n    context.lineTo 568, 396\n    context.lineTo 560, 406\n    context.lineTo 553, 417\n    context.lineTo 532, 426\n    context.lineTo 524, 426\n    context.lineTo 521, 423\n    context.lineTo 513, 408\n    context.lineTo 505, 388\n    context.lineTo 503, 374\n    context.lineTo 508, 357\n    context.lineTo 494, 334\n    context.lineTo 494, 322\n    context.lineTo 486, 318\n    context.lineTo 483, 313\n    context.lineTo 444, 318\n    context.lineTo 426, 295\n    context.lineTo 424, 290\n    context.lineTo 423, 262\n    context.lineTo 428, 250\n    context.lineTo 440, 235\n    context.lineTo 443, 227\n    context.lineTo 454, 215\n    context.lineTo 463, 216\n    context.lineTo 471, 212\n    context.lineTo 477, 210\n    context.lineTo 477, 210\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Greenland Drawing\n    context.beginPath()\n    context.moveTo 353, 5\n    context.lineTo 370, 3\n    context.lineTo 407, 6\n    context.lineTo 435, 17\n    context.lineTo 425, 23\n    context.lineTo 415, 34\n    context.lineTo 420, 40\n    context.lineTo 419, 51\n    context.lineTo 410, 59\n    context.lineTo 413, 71\n    context.lineTo 401, 80\n    context.lineTo 360, 97\n    context.lineTo 350, 121\n    context.lineTo 336, 116\n    context.lineTo 328, 83\n    context.lineTo 313, 52\n    context.lineTo 306, 46\n    context.lineTo 300, 44\n    context.lineTo 272, 43\n    context.lineTo 271, 31\n    context.lineTo 287, 28\n    context.lineTo 301, 12\n    context.lineTo 314, 10\n    context.lineTo 326, 12\n    context.lineTo 353, 5\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Noth America Drawing\n    context.beginPath()\n    context.moveTo 287, 23\n    context.lineTo 278, 23\n    context.lineTo 258, 36\n    context.lineTo 253, 37\n    context.lineTo 247, 54\n    context.lineTo 254, 55\n    context.lineTo 257, 61\n    context.lineTo 264, 62\n    context.lineTo 267, 68\n    context.lineTo 276, 70\n    context.lineTo 281, 76\n    context.lineTo 282, 82\n    context.lineTo 300, 88\n    context.lineTo 293, 98\n    context.lineTo 285, 94\n    context.lineTo 289, 100\n    context.lineTo 289, 104\n    context.lineTo 283, 105\n    context.lineTo 286, 111\n    context.lineTo 272, 109\n    context.lineTo 266, 104\n    context.lineTo 253, 104\n    context.lineTo 253, 100\n    context.lineTo 266, 98\n    context.lineTo 268, 86\n    context.lineTo 259, 84\n    context.lineTo 257, 76\n    context.lineTo 241, 76\n    context.lineTo 245, 91\n    context.lineTo 236, 95\n    context.lineTo 241, 103\n    context.lineTo 239, 106\n    context.lineTo 235, 107\n    context.lineTo 221, 103\n    context.lineTo 210, 114\n    context.lineTo 207, 124\n    context.lineTo 212, 126\n    context.lineTo 214, 132\n    context.lineTo 221, 133\n    context.lineTo 230, 139\n    context.lineTo 241, 143\n    context.lineTo 240, 149\n    context.lineTo 249, 155\n    context.lineTo 248, 145\n    context.lineTo 250, 142\n    context.lineTo 256, 138\n    context.lineTo 255, 128\n    context.lineTo 252, 123\n    context.lineTo 254, 112\n    context.lineTo 265, 110\n    context.lineTo 269, 111\n    context.lineTo 275, 116\n    context.lineTo 280, 125\n    context.lineTo 287, 123\n    context.lineTo 291, 120\n    context.lineTo 298, 134\n    context.lineTo 310, 145\n    context.lineTo 313, 160\n    context.lineTo 327, 168\n    context.lineTo 326, 172\n    context.lineTo 306, 169\n    context.lineTo 311, 156\n    context.lineTo 299, 159\n    context.lineTo 294, 160\n    context.lineTo 295, 176\n    context.lineTo 302, 179\n    context.lineTo 286, 186\n    context.lineTo 283, 181\n    context.lineTo 278, 185\n    context.lineTo 273, 193\n    context.lineTo 263, 201\n    context.lineTo 257, 217\n    context.lineTo 252, 222\n    context.lineTo 242, 232\n    context.lineTo 246, 245\n    context.lineTo 244, 249\n    context.lineTo 235, 233\n    context.lineTo 206, 236\n    context.lineTo 201, 240\n    context.lineTo 199, 252\n    context.lineTo 198, 260\n    context.lineTo 203, 270\n    context.lineTo 214, 271\n    context.lineTo 218, 269\n    context.lineTo 226, 262\n    context.lineTo 224, 280\n    context.lineTo 238, 284\n    context.lineTo 239, 300\n    context.lineTo 255, 304\n    context.lineTo 241, 306\n    context.lineTo 234, 302\n    context.lineTo 228, 292\n    context.lineTo 221, 287\n    context.lineTo 205, 280\n    context.lineTo 187, 276\n    context.lineTo 180, 272\n    context.lineTo 175, 267\n    context.lineTo 174, 258\n    context.lineTo 169, 249\n    context.lineTo 163, 240\n    context.lineTo 151, 230\n    context.lineTo 164, 255\n    context.lineTo 153, 245\n    context.lineTo 141, 221\n    context.lineTo 134, 218\n    context.lineTo 130, 207\n    context.lineTo 125, 203\n    context.lineTo 122, 186\n    context.lineTo 122, 163\n    context.lineTo 113, 161\n    context.lineTo 111, 149\n    context.lineTo 83, 124\n    context.lineTo 57, 116\n    context.lineTo 56, 119\n    context.lineTo 47, 122\n    context.lineTo 48, 117\n    context.lineTo 42, 120\n    context.lineTo 39, 126\n    context.lineTo 30, 136\n    context.lineTo 12, 143\n    context.lineTo 21, 135\n    context.lineTo 28, 132\n    context.lineTo 30, 124\n    context.lineTo 12, 118\n    context.lineTo 8, 111\n    context.lineTo 12, 106\n    context.lineTo 19, 105\n    context.lineTo 20, 100\n    context.lineTo 5, 99\n    context.lineTo 3, 94\n    context.lineTo 19, 93\n    context.lineTo 8, 80\n    context.lineTo 23, 70\n    context.lineTo 57, 72\n    context.lineTo 89, 78\n    context.lineTo 113, 71\n    context.lineTo 119, 75\n    context.lineTo 144, 78\n    context.lineTo 144, 69\n    context.lineTo 128, 68\n    context.lineTo 125, 56\n    context.lineTo 131, 52\n    context.lineTo 148, 52\n    context.lineTo 148, 45\n    context.lineTo 130, 45\n    context.lineTo 125, 42\n    context.lineTo 162, 30\n    context.lineTo 207, 31\n    context.lineTo 204, 17\n    context.lineTo 215, 16\n    context.lineTo 227, 10\n    context.lineTo 235, 11\n    context.lineTo 269, 6\n    context.lineTo 291, 7\n    context.lineTo 301, 12\n    context.lineTo 287, 23\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Eurasia Drawing\n    context.beginPath()\n    context.moveTo 762, 38\n    context.lineTo 767, 42\n    context.lineTo 781, 42\n    context.lineTo 787, 52\n    context.lineTo 775, 55\n    context.lineTo 776, 58\n    context.lineTo 788, 56\n    context.lineTo 798, 59\n    context.lineTo 796, 60\n    context.lineTo 810, 62\n    context.lineTo 813, 57\n    context.lineTo 826, 63\n    context.lineTo 831, 71\n    context.lineTo 849, 70\n    context.lineTo 856, 69\n    context.lineTo 861, 62\n    context.lineTo 885, 67\n    context.lineTo 899, 71\n    context.lineTo 912, 71\n    context.lineTo 915, 76\n    context.lineTo 955, 76\n    context.lineTo 996, 97\n    context.lineTo 990, 104\n    context.lineTo 981, 103\n    context.lineTo 973, 100\n    context.lineTo 965, 102\n    context.lineTo 966, 112\n    context.lineTo 941, 122\n    context.lineTo 927, 122\n    context.lineTo 925, 124\n    context.lineTo 922, 137\n    context.lineTo 919, 145\n    context.lineTo 914, 151\n    context.lineTo 905, 159\n    context.lineTo 904, 156\n    context.lineTo 902, 143\n    context.lineTo 907, 131\n    context.lineTo 917, 123\n    context.lineTo 922, 120\n    context.lineTo 921, 116\n    context.lineTo 911, 115\n    context.lineTo 905, 116\n    context.lineTo 900, 124\n    context.lineTo 863, 124\n    context.lineTo 847, 143\n    context.lineTo 859, 149\n    context.lineTo 859, 167\n    context.lineTo 848, 183\n    context.lineTo 842, 191\n    context.lineTo 834, 189\n    context.lineTo 827, 200\n    context.lineTo 829, 216\n    context.lineTo 821, 220\n    context.lineTo 816, 204\n    context.lineTo 814, 201\n    context.lineTo 805, 198\n    context.lineTo 796, 207\n    context.lineTo 808, 210\n    context.lineTo 810, 212\n    context.lineTo 801, 218\n    context.lineTo 806, 228\n    context.lineTo 800, 252\n    context.lineTo 790, 260\n    context.lineTo 768, 266\n    context.lineTo 760, 272\n    context.lineTo 768, 280\n    context.lineTo 774, 294\n    context.lineTo 764, 304\n    context.lineTo 750, 293\n    context.lineTo 748, 305\n    context.lineTo 750, 311\n    context.lineTo 759, 327\n    context.lineTo 753, 326\n    context.lineTo 751, 322\n    context.lineTo 744, 301\n    context.lineTo 739, 278\n    context.lineTo 732, 281\n    context.lineTo 725, 261\n    context.lineTo 715, 263\n    context.lineTo 709, 268\n    context.lineTo 693, 282\n    context.lineTo 689, 302\n    context.lineTo 682, 305\n    context.lineTo 677, 295\n    context.lineTo 674, 285\n    context.lineTo 671, 264\n    context.lineTo 665, 266\n    context.lineTo 655, 249\n    context.lineTo 644, 252\n    context.lineTo 633, 249\n    context.lineTo 616, 243\n    context.lineTo 608, 234\n    context.lineTo 606, 235\n    context.lineTo 605, 241\n    context.lineTo 610, 248\n    context.lineTo 615, 250\n    context.lineTo 635, 258\n    context.lineTo 627, 274\n    context.lineTo 621, 278\n    context.lineTo 594, 291\n    context.lineTo 590, 279\n    context.lineTo 566, 236\n    context.lineTo 562, 236\n    context.lineTo 559, 229\n    context.lineTo 567, 228\n    context.lineTo 569, 213\n    context.lineTo 549, 212\n    context.lineTo 547, 210\n    context.lineTo 543, 199\n    context.lineTo 559, 194\n    context.lineTo 566, 193\n    context.lineTo 585, 196\n    context.lineTo 582, 189\n    context.lineTo 576, 184\n    context.lineTo 570, 183\n    context.lineTo 556, 178\n    context.lineTo 553, 180\n    context.lineTo 549, 187\n    context.lineTo 548, 195\n    context.lineTo 536, 198\n    context.lineTo 534, 211\n    context.lineTo 531, 209\n    context.lineTo 524, 195\n    context.lineTo 505, 181\n    context.lineTo 505, 187\n    context.lineTo 514, 196\n    context.lineTo 521, 201\n    context.lineTo 516, 201\n    context.lineTo 511, 211\n    context.lineTo 505, 208\n    context.lineTo 513, 204\n    context.lineTo 505, 196\n    context.lineTo 495, 185\n    context.lineTo 488, 186\n    context.lineTo 478, 190\n    context.lineTo 470, 201\n    context.lineTo 465, 212\n    context.lineTo 465, 212\n    context.lineTo 465, 212\n    context.lineTo 465, 212\n    context.lineTo 465, 212\n    context.lineTo 465, 212\n    context.lineTo 465, 212\n    context.lineTo 465, 212\n    context.lineTo 456, 212\n    context.lineTo 444, 205\n    context.lineTo 448, 188\n    context.lineTo 458, 187\n    context.lineTo 467, 187\n    context.lineTo 467, 180\n    context.lineTo 459, 168\n    context.lineTo 481, 155\n    context.lineTo 485, 150\n    context.lineTo 493, 148\n    context.lineTo 493, 134\n    context.lineTo 499, 132\n    context.lineTo 499, 139\n    context.lineTo 505, 139\n    context.lineTo 524, 132\n    context.lineTo 536, 115\n    context.lineTo 527, 107\n    context.lineTo 536, 93\n    context.lineTo 531, 91\n    context.lineTo 514, 112\n    context.lineTo 514, 124\n    context.lineTo 506, 132\n    context.lineTo 499, 124\n    context.lineTo 493, 128\n    context.lineTo 489, 115\n    context.lineTo 516, 86\n    context.lineTo 513, 81\n    context.lineTo 534, 69\n    context.lineTo 551, 70\n    context.lineTo 559, 78\n    context.lineTo 568, 80\n    context.lineTo 577, 83\n    context.lineTo 582, 92\n    context.lineTo 575, 94\n    context.lineTo 564, 91\n    context.lineTo 573, 102\n    context.lineTo 576, 104\n    context.lineTo 584, 95\n    context.lineTo 590, 93\n    context.lineTo 592, 83\n    context.lineTo 597, 83\n    context.lineTo 597, 92\n    context.lineTo 610, 85\n    context.lineTo 628, 83\n    context.lineTo 639, 78\n    context.lineTo 642, 79\n    context.lineTo 660, 85\n    context.lineTo 658, 73\n    context.lineTo 659, 68\n    context.lineTo 666, 58\n    context.lineTo 678, 63\n    context.lineTo 694, 63\n    context.lineTo 697, 57\n    context.lineTo 710, 56\n    context.lineTo 715, 47\n    context.lineTo 751, 43\n    context.lineTo 753, 41\n    context.lineTo 754, 39\n    context.lineTo 762, 38\n    context.lineTo 762, 38\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n    #// Sumatra Drawing\n    context.beginPath()\n    context.moveTo 764, 341\n    context.lineTo 762, 350\n    context.lineTo 754, 345\n    context.lineTo 748, 336\n    context.lineTo 736, 315\n    context.lineTo 748, 323\n    context.lineTo 764, 341\n    context.closePath()\n    context.fillStyle = fillColorString\n    context.fill()\n\n';
