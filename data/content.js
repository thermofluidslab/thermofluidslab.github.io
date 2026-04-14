/**
 * content.js — サイトの全テキストコンテンツ（日本語・英語）
 *
 * このファイルだけ編集すればサイトの内容を更新できます。
 * 各セクションに ja (日本語) と en (英語) のキーがあります。
 */

const SITE_CONTENT = {
  ja: {
    lang: "ja",
    siteName: "熱流体力学研究室",
    pageTitle: "熱流体力学研究室 | 工学院大学",

    nav: {
      home: "ホーム",
      research: "研究",
      members: "メンバー",
      publications: "業績",
      access: "アクセス",
    },

    home: {
      intro: "当研究室では、分子スケールからマクロスケールまでマルチスケールな熱流体現象の工学的研究を行っています。分子動力学シミュレーション・風洞実験・PIV計測など多様な手法を活用し、エネルギー技術やスポーツ工学の発展に貢献しています。",
    },

    hero: {
      title: "熱流体力学研究室",
      affiliation: "工学院大学 工学部 機械工学科",
      tagline: "「ミクロスケールとマクロスケールの熱流体現象をつなぐ」",
    },

    about: {
      title: "研究室について",
      heading: "ご挨拶",
      body: `熱流体力学研究室へようこそ。当研究室では、分子スケールからマクロスケールまで、マルチスケールな熱流体現象の工学的研究を行っています。

分子動力学シミュレーションによるナノスケール現象の解明から、風洞実験を用いたスポーツ球体の空気力学研究、相変化を利用したエネルギー貯蔵・輸送技術の開発まで、幅広いアプローチで研究に取り組んでいます。

学生が自主性を持って研究に取り組める環境を整えており、国内外の学会への積極的な参加や企業・他大学との共同研究も推進しています。研究室への参加に興味のある方は、お気軽にお問い合わせください。`,
      profName: "平塚 将起（准教授）",
      profTitle: "工学院大学 工学部 機械工学科",
    },

    news: {
      title: "お知らせ",
      items: [
        { date: "2026-01-01", text: "研究室ホームページを公開しました。" },
        { date: "2025-10-13", text: "Scientific Reports にブロック共重合体の局所秩序変数に関する論文が掲載されました。" },
        { date: "2024-04-01", text: "科研費（基盤研究C）「機械学習力場を用いたセミクラスレートハイドレートのガス包蔵特性の分子論的解明」が採択されました（2024〜2027年度）。" },
        { date: "2023-05-01", text: "可視化情報学会より功労賞を受賞しました。" },
        { date: "2023-04-01", text: "Molecular Simulation 誌の Editorial Board Member に就任しました。" },
        { date: "2023-01-26", text: "AIAA Scitech 2023 にて磁気浮上式天秤を用いた回転球体の空気力研究を発表しました。" },
      ],
    },

    research: {
      title: "研究内容",
      topicsHeading: "研究テーマ",
      intro: "当研究室では、マルチスケール熱流体力学を軸に4つの研究テーマに取り組んでいます。各テーマをクリックすると詳細をご覧いただけます。",
      readMore: "詳細を見る →",
      image: "images/research1.webp",
      imageAlt: "研究室の研究テーマ概要（分子シミュレーション・流体可視化）",
      topics: [
        {
          id: "nano",
          title: "マイクロ・ナノスケールの熱流体",
          icon: "🔬",
          body: "分子動力学シミュレーションを駆使し、ナノ構造面のぬれや凝縮特性をナノスケールから解明。高効率エネルギー技術の実現を目指します。",
        },
        {
          id: "sports",
          title: "スポーツ熱流体力学",
          icon: "⚽",
          body: "風洞試験とPIVによりサッカーボール・バレーボール等の空気抵抗・後流を計測。パネル形状や回転が飛翔特性に与える影響を解明します。",
        },
        {
          id: "hydrate",
          title: "相変化を用いたエネルギー輸送・貯蔵",
          icon: "💧",
          body: "クラスレートハイドレートのガス包蔵特性と熱力学的安定性を分子レベルで解明し、次世代エネルギー貯蔵技術へ貢献します。",
        },
        {
          id: "ml",
          title: "機械学習・計算科学との融合",
          icon: "🤖",
          body: "機械学習力場・局所秩序変数・反応分子動力学を組み合わせ、複雑な熱流体・材料現象を大規模シミュレーションで解析します。",
        },
      ],

      // ── プロジェクト詳細ページ用コンテンツ ──────────────────
      projects: {
        nano: {
          title: "マイクロ・ナノスケールの熱流体",
          icon: "🔬",
          image: "images/research_nano_g004.png",
          imageAlt: "ナノ構造面上の水分子の分子動力学シミュレーション",
          lead: "分子動力学シミュレーションにより、ナノスケール構造が熱流体特性に与える影響を原子・分子レベルで解明します。",
          body: `熱伝達や流体抵抗などの熱流体特性は、マイクロ・ナノスケールの構造や材料の影響を大きく受けます。当研究室では、分子動力学（MD）シミュレーションを中心的な手法として用い、これらの現象を原子レベルで解明することを目指しています。

主要な研究課題のひとつが、**ナノスケール構造面上の濡れ性と凝縮**です。表面のナノ構造（粗さ、化学組成、形状）は水の接触角や凝縮核生成の挙動を大きく変化させます。MD シミュレーションにより、ナノスケールでの濡れ現象や熱流体特性の機序を明らかにし、高効率熱交換器や撥水・親水表面の設計指針を提供します。

また、**ナノ流体**（ナノ粒子を分散させた流体）の粘性・相変化温度変化についても研究しています。ナノ粒子の種類・濃度・分散状態が流体の熱物性に与える影響をシミュレーションで予測し、より高効率な熱媒体の開発を支援しています。`,
          keywords: ["分子動力学シミュレーション", "ナノスケール", "濡れ性", "凝縮", "熱伝達", "ナノ流体"],
          relatedPublications: [
            "Hiratsuka M., Emoto M., Konno A., Ito S., \"Molecular Dynamics Simulation of the Influence of Nanoscale Structure on Water Wetting and Condensation,\" Micromachines, Vol. 10(9), 587, 2019.",
          ],
          funding: [],
        },
        sports: {
          title: "スポーツ熱流体力学",
          icon: "⚽",
          image: "images/research_sports_g004.png",
          imageAlt: "風洞試験装置でのサッカーボール空気力学実験",
          lead: "風洞実験とPIV計測でスポーツ球体の空気力学を解明し、不規則飛翔・抵抗危機のメカニズムに迫ります。",
          body: `スポーツにおける球体の飛翔特性は、その表面形状・パネル構造・回転状態に依存した複雑な空気力学現象によって決まります。当研究室では、風洞試験とPIV（粒子画像流速計測）を組み合わせた実験的アプローチにより、スポーツ球体の空気力学を系統的に研究しています。

**サッカーボール**については、パネルの形状・枚数・表面デザインが空気抵抗係数（CD）の遷移特性（抵抗危機 / Drag Crisis）や後流構造に与える影響を詳細に計測しています。また、無回転ボール（無旋転ボール）の不規則な飛翔経路についても、ステレオ3次元PIV計測により後流の非対称性から定量的に解析しています。

**バレーボール**については、サーブ時の初期速度・回転数の違いによる弾道特性の差異を実験で明らかにし、選手のプレイに影響を与える要因を特定しています。

**ソフトテニスボール**のような柔らかいボールの不規則飛翔（ナックルボール）についても研究を進めており、表面の変形と後流の関係を調べています。さらに、磁気浮上式天秤（MSBS）を用いた支持干渉のない空気力計測手法の開発にも取り組んでいます。`,
          keywords: ["空気力学", "風洞実験", "PIV", "サッカーボール", "バレーボール", "抵抗危機", "無回転ボール"],
          relatedPublications: [
            "Hiratsuka M., Ito S., Miyasaka K., Konno A., \"Stereo 3D PIV measurement and aerodynamic force analysis of non-spinning soccer balls,\" Proc. IMechE Part P: J Sports Engineering and Technology, Vol. 234(2), pp. 146–153, 2020.",
            "Sakamoto Y., Hiratsuka M., Ito S., \"Effect of Soccer Ball Panels on Aerodynamic Characteristics and Flow in Drag Crisis,\" Applied Sciences, Vol. 11(1), 2021.",
            "Tamaru T., Ito S., Hiratsuka M., \"Serve Ball Trajectory Characteristics of Different Volleyballs and Their Causes,\" Applied Sciences, Vol. 11(19), 2021.",
            "Tada K., Hiratsuka M., Ito S., Seo K., \"サッカーボールの抗力特性に及ぼす表面デザインの影響,\" 日本機械学会論文集, Vol. 89, No. 924, 2023.",
            "Usui K., Seo K., Ito S., Hiratsuka M., \"Measurement of the Aerodynamic Forces Acting on a Rotating Sphere Using a Magnetic Suspension and Balance System,\" AIAA Scitech 2023, January 2023.",
          ],
          funding: [],
        },
        hydrate: {
          title: "相変化を用いたエネルギー輸送・貯蔵",
          icon: "💧",
          image: "images/research_hydrate.jpg",
          imageAlt: "クラスレートハイドレートのかご型構造（512, 51262, 51264, 435663, 51268）",
          lead: "クラスレートハイドレートのガス包蔵特性と熱力学的安定性を分子レベルで解明し、次世代エネルギー貯蔵技術の実現に貢献します。",
          body: `クラスレートハイドレート（ガスハイドレート）は、水分子が形成するかご状構造（クラスレート）にゲスト分子（メタン・CO2・水素など）が取り込まれた固体包接化合物です。天然ガス海底資源としての重要性のほか、高密度ガス貯蔵・輸送やCO2隔離技術への応用が期待されています。

当研究室では、**第一原理分子動力学（ab initio MD）** および **古典分子動力学シミュレーション** を用いて、ハイドレートのナノスケール物性を研究しています。具体的には、ゲスト分子の振動スペクトル・ゲスト—ホスト間の水素結合・プロトン配置・格子動力学などを第一原理レベルで解析することで、実験では直接観測が難しいミクロな機序を明らかにしています。

**セミクラスレートハイドレート**（テトラブチルアンモニウム塩などを含む半包接化合物）に関しては、ガス包蔵特性の向上機序や熱力学的安定性の分子論的解明を進めており、科研費基盤研究(C)として継続的に支援を受けています。最近では**機械学習力場（ML-FF）** を組み合わせることで、計算コストを大幅に削減しながら第一原理精度に近い大規模シミュレーションも実現しています。`,
          keywords: ["クラスレートハイドレート", "セミクラスレートハイドレート", "分子動力学", "第一原理計算", "ガス貯蔵", "エネルギー"],
          relatedPublications: [
            "Hiratsuka M., Ohmura R., Sum A.K., Yasuoka K., \"Molecular vibrations of methane molecules in the structure I clathrate hydrate from ab initio MD simulation,\" Journal of Chemical Physics, Vol. 136(4), 2012.",
            "Hiratsuka M., Ohmura R., Sum A.K., Yasuoka K., \"Vibrational modes of methane in the structure H clathrate hydrate from ab initio MD simulation,\" Journal of Chemical Physics, Vol. 137(14), 2012.",
            "Takeuchi F., Hiratsuka M., Ohmura R., Alavi S., Sum A.K., Yasuoka K., \"Water proton configurations in structures I, II, and H clathrate hydrate unit cells,\" Journal of Chemical Physics, Vol. 138(12), 2013.",
            "Grim R.G. et al. (incl. Hiratsuka M., Yasuoka K.), \"Observation of Interstitial Molecular Hydrogen in Clathrate Hydrates,\" Angewandte Chemie International Edition, Vol. 53(40), pp. 10710–10713, 2014.",
            "Hiratsuka M., Ohmura R., Sum A.K., Alavi S., Yasuoka K., \"A molecular dynamics study of guest–host hydrogen bonding in alcohol clathrate hydrates,\" Physical Chemistry Chemical Physics, Vol. 17(19), pp. 12639–12647, 2015.",
            "Hiratsuka M., Ohmura R., Sum A.K., Yasuoka K., \"Vibrational spectra of deuterated methane and water molecules in structure I clathrate hydrate from ab initio MD simulation,\" Molecular Simulation, Vol. 41(10–12), pp. 813–817, 2015.",
            "Takahashi K.Z., Hiratsuka M., \"Local Order Parameters Classifying Water Networks of Ice and Cyclopropane Clathrate Hydrates,\" Crystal Growth & Design, Vol. 23(7), pp. 4815–4824, 2023.",
          ],
          funding: [
            "2024〜2027年度：JSPS 科研費 基盤研究(C)「機械学習力場を用いたセミクラスレートハイドレートのガス包蔵特性の分子論的解明」",
            "2017〜2020年度：JSPS 科研費 若手研究(B)「分子シミュレーションを用いたセミクラスレートハイドレートの熱力学的安定性の解明」",
          ],
        },
        ml: {
          title: "機械学習・計算科学との融合",
          icon: "🤖",
          image: "images/research_ml_fig7.png",
          imageAlt: "機械学習を用いたブロック共重合体のミクロ相分離構造の識別ワークフロー",
          lead: "機械学習力場・局所秩序変数・反応分子動力学を駆使し、従来困難だった大規模・複雑系の熱流体・材料シミュレーションを実現します。",
          body: `近年の機械学習（ML）技術の進歩は、分子シミュレーションの可能性を大きく拡げています。当研究室では、機械学習と計算科学を融合した研究を積極的に推進しています。

**機械学習力場（ML-FF）** は、第一原理計算データをもとに訓練したニューラルネットワークポテンシャルで、DFT相当の精度を保ちながら古典MDの計算コストで大規模シミュレーションを可能にします。当研究室では特に、セミクラスレートハイドレートの大規模MD計算への応用を進めています。

**局所秩序変数**は、分子・原子の局所的な配置を定量化するオーダーパラメータで、シミュレーション中の相（結晶・アモルファス・液体など）を自動的に識別する強力なツールです。高分子結晶ラメラ構造の識別（ブロック共重合体・結晶性高分子）や、氷・クラスレートハイドレートの水ネットワーク分類への応用研究を行っています。

**反応分子動力学（ReaxFF）** は、化学結合の生成・切断を扱える反応性力場で、燃焼・熱分解反応のシミュレーションに使用されます。リグニンやセルロースなどバイオマス成分の初期熱分解挙動の解析に適用し、廃棄物の有効利用や持続可能なエネルギー技術の研究にも貢献しています。`,
          keywords: ["機械学習力場", "局所秩序変数", "反応分子動力学", "ReaxFF", "高分子シミュレーション", "バイオマス"],
          relatedPublications: [
            "Takano F., Hiratsuka M., Aoyagi T., Takahashi K.Z., \"Local order parameter that distinguishes crystalline and amorphous portions in polymer crystal lamellae,\" Journal of Chemical Physics, Vol. 157(17), 2022.",
            "Takano F., Hiratsuka M., Takahashi K.Z., \"Distinguish microphase-separated structures of diblock copolymers using local order parameters,\" Scientific Reports, Vol. 14(1), 2024.",
            "Sakurai Y., Kameda R., Hiratsuka M., Kobayashi J., \"Initial pyrolysis behavior and char formation characteristics of lignin based on reactive molecular dynamics simulation,\" Chemical Engineering Science, Vol. 310, 2025.",
          ],
          funding: [
            "2024〜2027年度：JSPS 科研費 基盤研究(C)「機械学習力場を用いたセミクラスレートハイドレートのガス包蔵特性の分子論的解明」",
          ],
        },
      },
    },

    members: {
      title: "メンバー",
      groups: [
        {
          label: "教員",
          members: [
            {
              name: "平塚 将起",
              title: "准教授",
              email: "hiratsuka@cc.kogakuin.ac.jp",
              desc: "熱流体力学、分子シミュレーション、スポーツ工学",
            },
          ],
        },
        {
          label: "博士課程",
          members: [
            { name: "氏名", title: "Dxx", email: "", desc: "研究テーマ：○○" },
          ],
        },
        {
          label: "修士課程",
          members: [
            { name: "氏名", title: "M2", email: "", desc: "研究テーマ：○○" },
            { name: "氏名", title: "M2", email: "", desc: "研究テーマ：○○" },
            { name: "氏名", title: "M1", email: "", desc: "研究テーマ：○○" },
          ],
        },
        {
          label: "学部生",
          members: [
            { name: "氏名", title: "B4", email: "", desc: "" },
            { name: "氏名", title: "B4", email: "", desc: "" },
          ],
        },
      ],
    },

    publications: {
      title: "論文・業績",
      sections: [
        {
          label: "査読付き論文",
          items: [
            "Taguchi T., Yanaseko T., Hiratsuka M., Hasegawa K., \"Interaction between viscous fluids and media balls in wet ball milling,\" Powder Technology, Vol. 468, 2026.",
            "Sakurai Y., Kameda R., Hiratsuka M., Kobayashi J., \"Initial pyrolysis behavior and char formation characteristics of lignin based on reactive molecular dynamics simulation,\" Chemical Engineering Science, Vol. 310, 2025.",
            "Yanaseko T., Agata T., Hiratsuka M., Hasegawa K., \"Method for evaluating healing state of self-healing ceramics using acoustic emission,\" Materials Chemistry and Physics, Vol. 328, 2024.",
            "Takano F., Hiratsuka M., Takahashi K.Z., \"Distinguish microphase-separated structures of diblock copolymers using local order parameters,\" Scientific Reports, Vol. 14(1), 2024.",
            "Tada K., Hiratsuka M., Ito S., Seo K., \"サッカーボールの抗力特性に及ぼす表面デザインの影響,\" 日本機械学会論文集, Vol. 89, No. 924, 2023.",
            "Takahashi K.Z., Hiratsuka M., \"Local Order Parameters Classifying Water Networks of Ice and Cyclopropane Clathrate Hydrates,\" Crystal Growth & Design, Vol. 23(7), pp. 4815–4824, 2023.",
            "Takano F., Hiratsuka M., Aoyagi T., Takahashi K.Z., \"Local order parameter that distinguishes crystalline and amorphous portions in polymer crystal lamellae,\" Journal of Chemical Physics, Vol. 157(17), 2022.",
            "Tamaru T., Ito S., Hiratsuka M., \"Serve Ball Trajectory Characteristics of Different Volleyballs and Their Causes,\" Applied Sciences, Vol. 11(19), 2021.",
            "Sakamoto Y., Hiratsuka M., Ito S., \"Effect of Soccer Ball Panels on Aerodynamic Characteristics and Flow in Drag Crisis,\" Applied Sciences, Vol. 11(1), 2021.",
            "Hiratsuka M., Ito S., Miyasaka K., Konno A., \"Stereo 3D PIV measurement and aerodynamic force analysis of non-spinning soccer balls,\" Proc. IMechE Part P: J Sports Engineering and Technology, Vol. 234(2), pp. 146–153, 2020.",
            "Hiratsuka M., Emoto M., Konno A., Ito S., \"Molecular Dynamics Simulation of the Influence of Nanoscale Structure on Water Wetting and Condensation,\" Micromachines, Vol. 10(9), 587, 2019.",
            "Hiratsuka M., Ohmura R., Sum A.K., Alavi S., Yasuoka K., \"A molecular dynamics study of guest–host hydrogen bonding in alcohol clathrate hydrates,\" Physical Chemistry Chemical Physics, Vol. 17(19), pp. 12639–12647, 2015.",
            "Grim R.G. et al. (incl. Hiratsuka M., Yasuoka K.), \"Observation of Interstitial Molecular Hydrogen in Clathrate Hydrates,\" Angewandte Chemie International Edition, Vol. 53(40), pp. 10710–10713, 2014.",
            "Takeuchi F., Hiratsuka M., Ohmura R., Alavi S., Sum A.K., Yasuoka K., \"Water proton configurations in structures I, II, and H clathrate hydrate unit cells,\" Journal of Chemical Physics, Vol. 138(12), 2013.",
            "Hiratsuka M., Ohmura R., Sum A.K., Yasuoka K., \"Vibrational modes of methane in the structure H clathrate hydrate from ab initio MD simulation,\" Journal of Chemical Physics, Vol. 137(14), 2012.",
            "Hiratsuka M., Ohmura R., Sum A.K., Yasuoka K., \"Molecular vibrations of methane molecules in the structure I clathrate hydrate from ab initio MD simulation,\" Journal of Chemical Physics, Vol. 136(4), 2012.",
          ],
        },
        {
          label: "国際会議",
          items: [
            "Usui K., Seo K., Ito S., Hiratsuka M., \"Measurement of the Aerodynamic Forces Acting on a Rotating Sphere Using a Magnetic Suspension and Balance System,\" AIAA Scitech 2023, January 2023.",
            "Sakurai Y. et al., \"Numerical Simulation of Initial Pyrolysis of Municipal Solid Waste Components Using Reactive Molecular Dynamics,\" 20th APCChE Congress, September 2023.",
            "Kameda R. et al., \"Production characteristics in initial pyrolysis of lignin based on reactive molecular dynamics simulations,\" 20th APCChE Congress, September 2023.",
            "Tamaru T., Ito S., Hiratsuka M., \"Serve Ball Trajectory Characteristics of Different Volleyballs and Their Causes,\" 13th Conf. Engineering of Sport, June 2020.",
            "Sakamoto Y., Ito S., Hiratsuka M., \"Difference of Reynolds Crisis Aspects on Soccer Balls and Their Panels,\" 13th Conf. Engineering of Sport, June 2020.",
            "Miyagawa N., Ito S., Hiratsuka M., \"Aerodynamics on the peculiar flight path of soft tennis balls,\" 15th FLOMEKO, 2019.",
            "Imamura S., Ito S., Hiratsuka M., \"Analysis for the fastest streamlined posture of swimmers,\" 15th FLOMEKO, 2019.",
            "Nakajima T., Hiratsuka M., Ito S., Konno A., \"Aerodynamic characteristics and PIV analyses concerning tennis balls,\" IOP Conf. Ser.: Materials Science and Engineering, Vol. 249, 2017.",
            "Koga H., Hiratsuka M., Ito S., Konno A., \"Aerodynamic characteristics and heat radiation performance of sportswear fabrics,\" IOP Conf. Ser.: Materials Science and Engineering, Vol. 249, 2017.",
          ],
        },
        {
          label: "国内学会発表（抜粋）",
          items: [
            "宮尾渓吾，柳迫徹郎，長谷川浩司，平塚将起，「自己治癒セラミックスにおける酸化生成物の接合性評価」，第37回分子シミュレーション討論会，2023年12月．",
            "高野芙巳生，平塚将起，高橋和義，「ジブロックコポリマーのミクロ相分離構造を区別する局所秩序変数の探索」，第37回分子シミュレーション討論会，2023年12月．",
            "池谷虹砂，瀬尾和哉，平塚将起，伊藤慎一郎，「ソフトテニスボールの大変形を模擬した楕円球及び円柱のマグヌス力に関する研究」，スポーツ工学・ヒューマンダイナミクス2023，2023年11月．",
            "伊藤新，瀬尾和哉，平塚将起，伊藤慎一郎，「バレーボールのジャンプサーブにおける3次元の空力特性」，スポーツ工学・ヒューマンダイナミクス2023，2023年11月．",
            "多田海斗，伊藤慎一郎，平塚将起，瀬尾和哉，「サッカーボールの抗力特性に及ぼす表面デザインの影響」，日本機械学会年次大会，2022年9月．",
            "高野芙巳生，平塚将起，青柳富誌生，高橋和義，「結晶性高分子のラメラ構造とメルト構造を区別する局所秩序変数」，第36回分子シミュレーション討論会，2022年11月．",
            "平塚将起，「分子動力学法を用いたクラスレートハイドレートの振動スペクトルの研究（招待講演）」，分子シミュレーション研究会，アンサンブル，2015年10月．",
            "平塚将起，大村拓朗，金子敬一，伊藤慎一郎，「ナノ流体の粘度に及ぼすナノ粒子の影響の分子動力学的考察」，第33回日本熱物性シンポジウム，2012年10月．",
          ],
        },
        {
          label: "教員受賞",
          items: [
            "2023年5月：可視化情報学会 功労賞（平塚将起）",
            "2019年11月：日本エネルギー学会 奨励賞（平塚将起）",
            "2015年3月：慶應義塾大学 藤原賞（平塚将起）",
            "2013年11月：第34回日本熱物性シンポジウム ベストプレゼンテーション賞（平塚将起）",
            "2013年9月：BIAPWS Student Award（平塚将起）",
            "2013年5月：第50回日本伝熱シンポジウム 優秀プレゼンテーション賞（平塚将起）",
            "2011年12月：第25回分子シミュレーション討論会 学生優秀発表賞（平塚将起）",
            "2011年9月：可視化情報学会 全国大会 ベストプレゼンテーション賞（平塚将起）",
          ],
        },
        {
          label: "学生受賞",
          items: [
            "※学生の受賞情報をここに追加してください（例：2026年○月：○○学会 優秀発表賞 — 氏名（修士○年））",
          ],
        },
        {
          label: "科研費（代表）",
          items: [
            "2024〜2027年度：基盤研究(C)「機械学習力場を用いたセミクラスレートハイドレートのガス包蔵特性の分子論的解明」",
            "2017〜2020年度：若手研究(B)「分子シミュレーションを用いたセミクラスレートハイドレートの熱力学的安定性の解明」",
          ],
        },
      ],
    },

    access: {
      title: "アクセス・連絡先",
      address: {
        label: "所在地",
        value: "〒163-8677 東京都新宿区西新宿1-24-2\n工学院大学 新宿キャンパス 工学部 機械工学科",
      },
      email: { label: "Email", value: "hiratsuka@cc.kogakuin.ac.jp" },
      tel: { label: "Tel（代表）", value: "03-3340-0131" },
      directions: {
        label: "アクセス方法",
        value: "JR新宿駅 西口より徒歩5分。\n都営大江戸線・東京メトロ丸ノ内線 西新宿駅より徒歩3分。\n都営新宿線・東京メトロ新宿線 新宿西口駅より徒歩4分。",
      },
      mapEmbed: "https://maps.google.com/maps?q=工学院大学+新宿キャンパス&t=&z=16&ie=UTF8&iwloc=&output=embed",
    },

    footer: {
      copy: "© 2026 熱流体力学研究室, 工学院大学 工学部 機械工学科",
    },

    project: {
      backLabel: "← 研究一覧に戻る",
      keywordsLabel: "キーワード",
      pubsLabel: "関連論文",
      fundingLabel: "研究費",
    },
  },

  // ════════════════════════════════════════════════════════════
  en: {
    lang: "en",
    siteName: "Thermo-Fluid Dynamics Lab",
    pageTitle: "Thermo-Fluid Dynamics Laboratory | Kogakuin University",

    nav: {
      home: "Home",
      research: "Research",
      members: "Members",
      publications: "Publications",
      access: "Access",
    },

    home: {
      intro: "We conduct engineering research on multiscale thermal-fluid phenomena spanning molecular to macro scales. Using diverse methods including molecular dynamics simulation, wind tunnel testing, and PIV measurements, we contribute to advances in energy technology and sports engineering.",
    },

    hero: {
      title: "Thermo-Fluid Dynamics Laboratory",
      affiliation: "Dept. of Mechanical Engineering, Faculty of Engineering, Kogakuin University",
      tagline: "\"Connecting macro and microscale thermal-fluid phenomena\"",
    },

    about: {
      title: "About",
      heading: "Welcome",
      body: `Welcome to the Thermo-Fluid Dynamics Laboratory at Kogakuin University. Our group conducts engineering research on multiscale thermal-fluid phenomena spanning molecular to macro scales.

Our work ranges from elucidating nanoscale phenomena via molecular dynamics simulation, to experimental aerodynamics of sports balls using wind tunnel testing, and the development of energy storage and transport technologies exploiting phase change.

Students are encouraged to work independently, and we actively participate in domestic and international conferences as well as collaborative projects with industry and other universities. If you are interested in joining our laboratory, please feel free to contact us.`,
      profName: "Masaki Hiratsuka (Associate Professor)",
      profTitle: "Dept. of Mechanical Engineering, Kogakuin University",
    },

    news: {
      title: "News",
      items: [
        { date: "2026-01-01", text: "Our laboratory website has been launched." },
        { date: "2025-10-13", text: "A paper on local order parameters for block copolymers has been published in Scientific Reports." },
        { date: "2024-04-01", text: "JSPS Grant-in-Aid for Scientific Research (C) adopted: \"Molecular elucidation of gas encapsulation in semi-clathrate hydrates using machine learning force fields\" (2024–2027)." },
        { date: "2023-05-01", text: "Received the Commendation Award from the Visualization Society of Japan." },
        { date: "2023-04-01", text: "Joined the Editorial Board of the journal Molecular Simulation." },
        { date: "2023-01-26", text: "Presented aerodynamic force measurements on rotating spheres at AIAA Scitech 2023." },
      ],
    },

    research: {
      title: "Research",
      topicsHeading: "Research Themes",
      intro: "Our laboratory focuses on multiscale thermal-fluid dynamics across four core research themes. Click each theme to learn more.",
      readMore: "Read more →",
      image: "images/research1.webp",
      imageAlt: "Research overview: molecular simulation and fluid visualization",
      topics: [
        {
          id: "nano",
          title: "Micro/Nanoscale Thermal Fluid Dynamics",
          icon: "🔬",
          body: "Using molecular dynamics simulation, we elucidate wetting, condensation, and heat transfer at the nanoscale, targeting high-efficiency energy technology applications.",
        },
        {
          id: "sports",
          title: "Sports Thermal-Fluid Dynamics",
          icon: "⚽",
          body: "Wind tunnel testing and PIV measurements of sports balls reveal how panel shape, surface design, and spin influence drag crisis and irregular flight trajectories.",
        },
        {
          id: "hydrate",
          title: "Energy Storage via Phase Change",
          icon: "💧",
          body: "Ab initio and classical MD simulations elucidate gas encapsulation and thermodynamic stability in clathrate hydrates toward next-generation energy storage.",
        },
        {
          id: "ml",
          title: "Machine Learning & Computational Science",
          icon: "🤖",
          body: "ML force fields, local order parameters, and reactive MD enable large-scale simulations of complex thermal-fluid and material systems.",
        },
      ],

      projects: {
        nano: {
          title: "Micro/Nanoscale Thermal Fluid Dynamics",
          icon: "🔬",
          image: "images/research_nano_g004.png",
          imageAlt: "MD simulation of water molecules on a nanostructured surface",
          lead: "Using molecular dynamics simulation, we elucidate how nanoscale structure governs thermal-fluid properties at the atomic and molecular level.",
          body: `Thermal-fluid properties such as heat transfer and flow resistance are strongly governed by micro- and nanoscale structure and material composition. Our laboratory uses molecular dynamics (MD) simulation as the primary tool to reveal these phenomena at the atomic scale.

A central research focus is **wetting and condensation on nanostructured surfaces**. Surface nanostructures — roughness, chemical composition, and geometry — dramatically alter the water contact angle and condensation nucleation behavior. By performing MD simulations of nanoscale wetting and thermal-fluid properties, we provide design guidelines for high-efficiency heat exchangers and functional surfaces.

We also study how **nanofluids** (fluids with dispersed nanoparticles) exhibit changed viscosity and phase-change temperatures. Simulations of nanoparticle type, concentration, and dispersion state help predict thermal properties and support the development of advanced heat transfer fluids.`,
          keywords: ["Molecular Dynamics", "Nanoscale", "Wetting", "Condensation", "Heat Transfer", "Nanofluid"],
          relatedPublications: [
            "Hiratsuka M., Emoto M., Konno A., Ito S., \"Molecular Dynamics Simulation of the Influence of Nanoscale Structure on Water Wetting and Condensation,\" Micromachines, Vol. 10(9), 587, 2019.",
          ],
          funding: [],
        },
        sports: {
          title: "Sports Thermal-Fluid Dynamics",
          icon: "⚽",
          image: "images/research_sports_g004.png",
          imageAlt: "Soccer ball aerodynamics experiment in wind tunnel",
          lead: "Wind tunnel experiments and PIV measurements uncover the aerodynamics of sports balls — explaining the drag crisis, irregular flight, and wake structure.",
          body: `The flight characteristics of sports balls are governed by complex aerodynamic phenomena depending on their surface geometry, panel structure, and rotational state. Our laboratory systematically studies sports ball aerodynamics through a combination of wind tunnel testing and PIV (Particle Image Velocimetry).

For **soccer balls**, we precisely measure how panel shape, number, and surface design affect the drag coefficient (C_D) transition (drag crisis) and wake structure. For non-spinning balls, stereo three-dimensional PIV enables quantitative analysis linking wake asymmetry to irregular flight paths (knuckling behavior).

For **volleyballs**, we experimentally characterize how initial serve speed and spin rate drive differences in ball trajectory, identifying factors that affect play.

We also investigate the irregular flight of **soft tennis balls** (knuckling), examining the interaction between surface deformation and the downstream wake. Additionally, we develop methods for interference-free aerodynamic force measurement using a **magnetic suspension and balance system (MSBS)**.`,
          keywords: ["Aerodynamics", "Wind Tunnel", "PIV", "Soccer Ball", "Volleyball", "Drag Crisis", "Knuckling"],
          relatedPublications: [
            "Hiratsuka M., Ito S., Miyasaka K., Konno A., \"Stereo 3D PIV measurement and aerodynamic force analysis of non-spinning soccer balls,\" Proc. IMechE Part P: J Sports Engineering and Technology, Vol. 234(2), pp. 146–153, 2020.",
            "Sakamoto Y., Hiratsuka M., Ito S., \"Effect of Soccer Ball Panels on Aerodynamic Characteristics and Flow in Drag Crisis,\" Applied Sciences, Vol. 11(1), 2021.",
            "Tamaru T., Ito S., Hiratsuka M., \"Serve Ball Trajectory Characteristics of Different Volleyballs and Their Causes,\" Applied Sciences, Vol. 11(19), 2021.",
            "Tada K., Hiratsuka M., Ito S., Seo K., \"Effect of surface design on drag characteristics of soccer balls,\" Trans. JSME, Vol. 89, No. 924, 2023.",
            "Usui K., Seo K., Ito S., Hiratsuka M., \"Measurement of the Aerodynamic Forces Acting on a Rotating Sphere Using a Magnetic Suspension and Balance System,\" AIAA Scitech 2023, January 2023.",
          ],
          funding: [],
        },
        hydrate: {
          title: "Energy Storage via Phase Change",
          icon: "💧",
          image: "images/research_hydrate.jpg",
          imageAlt: "Clathrate hydrate cage structures (512, 51262, 51264, 435663, 51268)",
          lead: "Ab initio and classical MD simulations elucidate gas encapsulation and thermodynamic stability in clathrate hydrates — toward next-generation energy storage.",
          body: `Clathrate hydrates are solid inclusion compounds in which guest molecules (methane, CO2, hydrogen, etc.) are trapped inside cage structures formed by water molecules. Beyond their significance as deep-sea natural gas resources, they hold promise for high-density gas storage and transport and CO2 sequestration.

Our laboratory uses **ab initio molecular dynamics (ab initio MD)** and **classical molecular dynamics simulation** to study the nanoscale properties of hydrates. Specifically, we analyze the vibrational spectra of guest molecules, guest–host hydrogen bonding, proton ordering, and lattice dynamics at the first-principles level — revealing microscopic mechanisms that are difficult to observe experimentally.

For **semi-clathrate hydrates** (tetrabutylammonium salt–containing compounds), we are investigating the mechanisms governing gas encapsulation improvement and thermodynamic stability, supported by continuous JSPS funding. Recently, combining **machine learning force fields (ML-FF)** with classical MD has enabled large-scale simulations approaching first-principles accuracy at a fraction of the computational cost.`,
          keywords: ["Clathrate Hydrate", "Semi-clathrate", "Molecular Dynamics", "Ab Initio", "Gas Storage", "Energy"],
          relatedPublications: [
            "Hiratsuka M., Ohmura R., Sum A.K., Yasuoka K., \"Molecular vibrations of methane molecules in the structure I clathrate hydrate from ab initio MD simulation,\" Journal of Chemical Physics, Vol. 136(4), 2012.",
            "Takeuchi F., Hiratsuka M., Ohmura R., Alavi S., Sum A.K., Yasuoka K., \"Water proton configurations in structures I, II, and H clathrate hydrate unit cells,\" Journal of Chemical Physics, Vol. 138(12), 2013.",
            "Grim R.G. et al. (incl. Hiratsuka M., Yasuoka K.), \"Observation of Interstitial Molecular Hydrogen in Clathrate Hydrates,\" Angewandte Chemie Int. Ed., Vol. 53(40), pp. 10710–10713, 2014.",
            "Hiratsuka M., Ohmura R., Sum A.K., Alavi S., Yasuoka K., \"A molecular dynamics study of guest–host hydrogen bonding in alcohol clathrate hydrates,\" PCCP, Vol. 17(19), pp. 12639–12647, 2015.",
            "Takahashi K.Z., Hiratsuka M., \"Local Order Parameters Classifying Water Networks of Ice and Cyclopropane Clathrate Hydrates,\" Crystal Growth & Design, Vol. 23(7), pp. 4815–4824, 2023.",
          ],
          funding: [
            "2024–2027: JSPS Grant-in-Aid for Scientific Research (C) — \"Molecular elucidation of gas encapsulation in semi-clathrate hydrates using machine learning force fields\"",
            "2017–2020: JSPS Grant-in-Aid for Young Researchers (B) — \"Clarification of thermodynamic stability in semi-clathrate hydrates via molecular simulation\"",
          ],
        },
        ml: {
          title: "Machine Learning & Computational Science",
          icon: "🤖",
          image: "images/research_ml_fig7.png",
          imageAlt: "Workflow for classifying microphase-separated structures of block copolymers using machine learning",
          lead: "ML force fields, local order parameters, and reactive MD enable large-scale, accurate simulations of complex thermal-fluid and material systems previously out of reach.",
          body: `Recent advances in machine learning are dramatically expanding the scope of molecular simulation. Our laboratory actively pursues research integrating machine learning with computational science.

**Machine learning force fields (ML-FF)** are neural network potentials trained on ab initio data that enable large-scale MD simulation at near-DFT accuracy but at classical MD computational cost. We are particularly developing their application to large-scale MD simulations of semi-clathrate hydrates.

**Local order parameters** are metrics that quantify the local arrangement of molecules and atoms, serving as powerful tools to automatically classify phases (crystalline, amorphous, liquid, etc.) during simulation. We have applied these to identifying polymer crystal lamellar structures in block copolymers and crystalline polymers, and to classifying water networks in ice and clathrate hydrates.

**Reactive molecular dynamics (ReaxFF)** uses reactive force fields capable of handling bond formation and breaking, making it suitable for simulating combustion and pyrolysis reactions. We have applied this to analyzing the initial thermal decomposition of biomass components such as lignin and cellulose, contributing to sustainable energy and waste-to-energy research.`,
          keywords: ["Machine Learning Force Field", "Local Order Parameter", "ReaxFF", "Polymer Simulation", "Biomass"],
          relatedPublications: [
            "Takano F., Hiratsuka M., Aoyagi T., Takahashi K.Z., \"Local order parameter that distinguishes crystalline and amorphous portions in polymer crystal lamellae,\" Journal of Chemical Physics, Vol. 157(17), 2022.",
            "Takano F., Hiratsuka M., Takahashi K.Z., \"Distinguish microphase-separated structures of diblock copolymers using local order parameters,\" Scientific Reports, Vol. 14(1), 2024.",
            "Sakurai Y., Kameda R., Hiratsuka M., Kobayashi J., \"Initial pyrolysis behavior and char formation characteristics of lignin based on reactive molecular dynamics simulation,\" Chemical Engineering Science, Vol. 310, 2025.",
          ],
          funding: [
            "2024–2027: JSPS Grant-in-Aid for Scientific Research (C) — \"Molecular elucidation of gas encapsulation in semi-clathrate hydrates using machine learning force fields\"",
          ],
        },
      },
    },

    members: {
      title: "Members",
      groups: [
        {
          label: "Faculty",
          members: [
            {
              name: "Masaki Hiratsuka",
              title: "Associate Professor",
              email: "hiratsuka@cc.kogakuin.ac.jp",
              desc: "Thermal-fluid dynamics, molecular simulation, sports engineering",
            },
          ],
        },
        {
          label: "Ph.D. Students",
          members: [
            { name: "Name", title: "Dxx", email: "", desc: "Research: ○○" },
          ],
        },
        {
          label: "Master's Students",
          members: [
            { name: "Name", title: "M2", email: "", desc: "Research: ○○" },
            { name: "Name", title: "M2", email: "", desc: "Research: ○○" },
            { name: "Name", title: "M1", email: "", desc: "Research: ○○" },
          ],
        },
        {
          label: "Undergraduate Students",
          members: [
            { name: "Name", title: "B4", email: "", desc: "" },
            { name: "Name", title: "B4", email: "", desc: "" },
          ],
        },
      ],
    },

    publications: {
      title: "Publications",
      sections: [
        {
          label: "Journal Articles",
          items: [
            "Taguchi T., Yanaseko T., Hiratsuka M., Hasegawa K., \"Interaction between viscous fluids and media balls in wet ball milling,\" Powder Technology, Vol. 468, 2026.",
            "Sakurai Y., Kameda R., Hiratsuka M., Kobayashi J., \"Initial pyrolysis behavior and char formation characteristics of lignin based on reactive molecular dynamics simulation,\" Chemical Engineering Science, Vol. 310, 2025.",
            "Yanaseko T., Agata T., Hiratsuka M., Hasegawa K., \"Method for evaluating healing state of self-healing ceramics using acoustic emission,\" Materials Chemistry and Physics, Vol. 328, 2024.",
            "Takano F., Hiratsuka M., Takahashi K.Z., \"Distinguish microphase-separated structures of diblock copolymers using local order parameters,\" Scientific Reports, Vol. 14(1), 2024.",
            "Tada K., Hiratsuka M., Ito S., Seo K., \"Effect of surface design on drag characteristics of soccer balls,\" Trans. JSME, Vol. 89, No. 924, 2023.",
            "Takahashi K.Z., Hiratsuka M., \"Local Order Parameters Classifying Water Networks of Ice and Cyclopropane Clathrate Hydrates,\" Crystal Growth & Design, Vol. 23(7), pp. 4815–4824, 2023.",
            "Takano F., Hiratsuka M., Aoyagi T., Takahashi K.Z., \"Local order parameter that distinguishes crystalline and amorphous portions in polymer crystal lamellae,\" Journal of Chemical Physics, Vol. 157(17), 2022.",
            "Tamaru T., Ito S., Hiratsuka M., \"Serve Ball Trajectory Characteristics of Different Volleyballs and Their Causes,\" Applied Sciences, Vol. 11(19), 2021.",
            "Sakamoto Y., Hiratsuka M., Ito S., \"Effect of Soccer Ball Panels on Aerodynamic Characteristics and Flow in Drag Crisis,\" Applied Sciences, Vol. 11(1), 2021.",
            "Hiratsuka M., Ito S., Miyasaka K., Konno A., \"Stereo 3D PIV measurement and aerodynamic force analysis of non-spinning soccer balls,\" Proc. IMechE Part P: J Sports Engineering and Technology, Vol. 234(2), pp. 146–153, 2020.",
            "Hiratsuka M., Emoto M., Konno A., Ito S., \"Molecular Dynamics Simulation of the Influence of Nanoscale Structure on Water Wetting and Condensation,\" Micromachines, Vol. 10(9), 587, 2019.",
            "Hiratsuka M., Ohmura R., Sum A.K., Alavi S., Yasuoka K., \"A molecular dynamics study of guest–host hydrogen bonding in alcohol clathrate hydrates,\" Physical Chemistry Chemical Physics, Vol. 17(19), pp. 12639–12647, 2015.",
            "Grim R.G. et al. (incl. Hiratsuka M., Yasuoka K.), \"Observation of Interstitial Molecular Hydrogen in Clathrate Hydrates,\" Angewandte Chemie International Edition, Vol. 53(40), pp. 10710–10713, 2014.",
            "Takeuchi F., Hiratsuka M., Ohmura R., Alavi S., Sum A.K., Yasuoka K., \"Water proton configurations in structures I, II, and H clathrate hydrate unit cells,\" Journal of Chemical Physics, Vol. 138(12), 2013.",
            "Hiratsuka M., Ohmura R., Sum A.K., Yasuoka K., \"Vibrational modes of methane in the structure H clathrate hydrate from ab initio MD simulation,\" Journal of Chemical Physics, Vol. 137(14), 2012.",
            "Hiratsuka M., Ohmura R., Sum A.K., Yasuoka K., \"Molecular vibrations of methane molecules in the structure I clathrate hydrate from ab initio MD simulation,\" Journal of Chemical Physics, Vol. 136(4), 2012.",
          ],
        },
        {
          label: "International Conferences",
          items: [
            "Usui K., Seo K., Ito S., Hiratsuka M., \"Measurement of the Aerodynamic Forces Acting on a Rotating Sphere Using a Magnetic Suspension and Balance System,\" AIAA Scitech 2023, January 2023.",
            "Sakurai Y. et al., \"Numerical Simulation of Initial Pyrolysis of Municipal Solid Waste Components Using Reactive Molecular Dynamics,\" 20th APCChE Congress, September 2023.",
            "Kameda R. et al., \"Production characteristics in initial pyrolysis of lignin based on reactive molecular dynamics simulations,\" 20th APCChE Congress, September 2023.",
            "Tamaru T., Ito S., Hiratsuka M., \"Serve Ball Trajectory Characteristics of Different Volleyballs and Their Causes,\" 13th Conf. Engineering of Sport, June 2020.",
            "Sakamoto Y., Ito S., Hiratsuka M., \"Difference of Reynolds Crisis Aspects on Soccer Balls and Their Panels,\" 13th Conf. Engineering of Sport, June 2020.",
            "Miyagawa N., Ito S., Hiratsuka M., \"Aerodynamics on the peculiar flight path of soft tennis balls,\" 15th FLOMEKO, 2019.",
            "Imamura S., Ito S., Hiratsuka M., \"Analysis for the fastest streamlined posture of swimmers,\" 15th FLOMEKO, 2019.",
            "Nakajima T., Hiratsuka M., Ito S., Konno A., \"Aerodynamic characteristics and PIV analyses concerning tennis balls,\" IOP Conf. Ser.: Materials Science and Engineering, Vol. 249, 2017.",
            "Koga H., Hiratsuka M., Ito S., Konno A., \"Aerodynamic characteristics and heat radiation performance of sportswear fabrics,\" IOP Conf. Ser.: Materials Science and Engineering, Vol. 249, 2017.",
          ],
        },
        {
          label: "Domestic Conferences (Selected)",
          items: [
            "Miyao K., Yanaseko T., Hasegawa K., Hiratsuka M., \"Evaluation of bonding of oxidation products in self-healing ceramics,\" 37th Molecular Simulation Discussion Meeting, December 2023.",
            "Takano F., Hiratsuka M., Takahashi K.Z., \"Search for local order parameters distinguishing microphase-separated structures of diblock copolymers,\" 37th Molecular Simulation Discussion Meeting, December 2023.",
            "Iketani K., Seo K., Hiratsuka M., Ito S., \"Magnus force on spheroids and cylinders simulating large deformation of soft tennis balls,\" Sports Engineering & Human Dynamics 2023, November 2023.",
            "Ito A., Seo K., Hiratsuka M., Ito S., \"Three-dimensional aerodynamic characteristics of volleyball jump serve,\" Sports Engineering & Human Dynamics 2023, November 2023.",
            "Tada K., Ito S., Hiratsuka M., Seo K., \"Effect of surface design on drag characteristics of soccer balls,\" JSME Annual Meeting, September 2022.",
            "Takano F., Hiratsuka M., Aoyagi T., Takahashi K.Z., \"Local order parameters distinguishing lamellar and melt structures of crystalline polymers,\" 36th Molecular Simulation Discussion Meeting, November 2022.",
          ],
        },
        {
          label: "Faculty Awards",
          items: [
            "May 2023: Commendation Award, Visualization Society of Japan (Masaki Hiratsuka)",
            "Nov. 2019: Encouragement Award, Japan Energy Society (Masaki Hiratsuka)",
            "Mar. 2015: Fujiwara Prize, Keio University (Masaki Hiratsuka)",
            "Nov. 2013: Best Presentation Award, 34th Japan Thermophysical Properties Symposium (Masaki Hiratsuka)",
            "Sep. 2013: BIAPWS Student Award (Masaki Hiratsuka)",
            "May 2013: Excellent Presentation Award, 50th Japan Heat Transfer Symposium (Masaki Hiratsuka)",
            "Dec. 2011: Outstanding Student Presentation Award, 25th Molecular Simulation Workshop (Masaki Hiratsuka)",
            "Sep. 2011: Best Presentation Award, Visualization Society of Japan National Conference (Masaki Hiratsuka)",
          ],
        },
        {
          label: "Student Awards",
          items: [
            "Please add student award information here (e.g., Year Month: Award Name, Society — Student Name (M2))",
          ],
        },
        {
          label: "Research Grants (PI)",
          items: [
            "2024–2027: JSPS Grant-in-Aid for Scientific Research (C) — \"Molecular elucidation of gas encapsulation in semi-clathrate hydrates using machine learning force fields\"",
            "2017–2020: JSPS Grant-in-Aid for Young Researchers (B) — \"Clarification of thermodynamic stability in semi-clathrate hydrates via molecular simulation\"",
          ],
        },
      ],
    },

    access: {
      title: "Access & Contact",
      address: {
        label: "Address",
        value: "1-24-2 Nishi-shinjuku, Shinjuku-ku, Tokyo 163-8677, Japan\nKogakuin University Shinjuku Campus\nDept. of Mechanical Engineering, Faculty of Engineering",
      },
      email: { label: "Email", value: "hiratsuka@cc.kogakuin.ac.jp" },
      tel: { label: "Tel (Main)", value: "+81-3-3340-0131" },
      directions: {
        label: "Directions",
        value: "5-minute walk from JR Shinjuku Station West Exit.\n3-minute walk from Nishi-shinjuku Station (Toei Oedo / Tokyo Metro Marunouchi Line).\n4-minute walk from Shinjuku-nishiguchi Station (Toei Shinjuku Line / Tokyo Metro Shinjuku Line).",
      },
      mapEmbed: "https://maps.google.com/maps?q=Kogakuin+University+Shinjuku+Campus&t=&z=16&ie=UTF8&iwloc=&output=embed",
    },

    footer: {
      copy: "© 2026 Thermo-Fluid Dynamics Laboratory, Dept. of Mechanical Engineering, Kogakuin University",
    },

    project: {
      backLabel: "← Back to Research",
      keywordsLabel: "Keywords",
      pubsLabel: "Related Publications",
      fundingLabel: "Funding",
    },
  },
};
