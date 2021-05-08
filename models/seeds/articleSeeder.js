const mongoose = require("mongoose");
const Todo = require("../article"); // 載入 article model
mongoose.connect("mongodb://localhost/article-list", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.log("mongodb error!");
});

const mongoObjectId = function () {
  var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return (
    timestamp +
    "xxxxxxxxxxxxxxxx"
      .replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase()
  );
};

db.once("open", () => {
  console.log("mongodb connected!");
  const articleId = mongoObjectId();
  Todo.create({
    id: articleId,
    author: "小楚",
    title: "追星女孩必備好物：應援物尺寸合集",
    time: new Date(),
    category: "share",
    view: 0,
    coverImage: "https://upload.cc/i1/2021/05/01/tje9AS.png",
    introduce:
      "追星女孩看過來,給你們整理出來了一些應援物尺寸合集,精華滿滿建議按line收藏哦,其中整理有: 手幅,45cm,15cm,橫版,15cm,45cm,豎版,15cm,15cm,方形,20cm,20cm,方形,25cm,25cm,方形,小卡,85,6mm,53,96mm,透卡,8,5cm,5,5cm,透扇,18cm,18cm,毛巾,100cm,20cm,票夾,22cm,10cm,封面,22cm,6cm,封條,機票,19cm,9cm,明信片,14,8cm,10cm,易開罐,180cm,80cm,桌歷,21cm,14cm,御守,5cm,6,5cm,書籤,5cm,14cm ,海報,一般為A4,A5",
    subtitle1: "應援重點1",
    paragraph1:
      "45cmX15cm（横版）15cmX45cm（豎版）15cmX5cm（方形）20cmX20cm（方形）25cmX25cm（方形)",
    image1: "https://upload.cc/i1/2021/05/02/lWA27j.png",
    subtitle2: "應援重點2",
    paragraph2:
      "明信片: 14.8cmX10cm易開罐:180cmX80cm桌曆:21cmX14cm御守: 5cmX6.5cm書籤: 5cmX14cm海报: 一般物A4A5",
    image2: "https://upload.cc/i1/2021/05/01/WzBtKg.png",
    label1: "手做",
    label2: "粉絲",
    label3: "追星",
  });
  console.log("mongodb connected! write article1 ");
  Todo.create({
    id: articleId,
    author: "小楚",
    title: "我在哥大的演講經歷與血淚，5招讓你驚艷四座",
    time: new Date(),
    category: "share",
    view: 0,
    coverImage: "https://upload.cc/i1/2021/05/02/14lcdU.png",
    introduce:
      "2019年我很榮幸的受邀擔任哥倫比亞大學,中國與世界論壇,女性領導力嘉賓，與其他幾位優秀的姐姐們一起共同探討,女性她力量,一開始我很受寵若驚，,畢竟我年齡最小資歷最淺，擔心沒法hold住全場,不過很快我就從自我懷疑轉變為,積極面對挑戰,其實短短一生，機遇和挑戰是永遠並存的,就算是台上出醜那又怎樣呢？ ,10年後回看根本不是大事,果然論壇當天很成功,上次和寶寶們分享了,去除私意,的致勝心態,今天和大家總結一些實用的演講技巧，快收藏,起來吧。",
    subtitle1: "心的整理1",
    paragraph1:
      "接收階段,刺激和激勵你的聽眾傾聽,抓住聽眾的注意力,刺激他們,開場時有些觀眾甚至都沒意識到演講開始了。 ,因此可使用強有力的吸引註意力的內容一一,引人注意的陳述,兩三個簡明的案例,自己的經歷,一個問題，或幽默故事,留住聽眾的注意力,激勵他們,你必須對你的聽眾有足夠的了解，以便,勾住,他們。讓他們相信你的演講將給他們帶來某些益處，或是他們所關心的事情。",
    image1: "https://upload.cc/i1/2021/05/02/14lcdU.png",
    subtitle2: "心的整理2",
    paragraph2:
      "領會階段,最大限度加深聽眾的理解,以和聽眾相匹配的方式呈現你的演講,分析你的聽眾，將主題直接與他們聯繫起來，確保你所使用的詞適合你的聽眾。 ,故事使你的演講具有個人色彩,我們都喜歡聽演講者講切實發生過的人生經歷，因為這讓我們覺得自己彷彿了解講者這個人，也增加了可信度。",
    image2: "https://upload.cc/i1/2021/05/02/iWRNDl.png",
    subtitle3: "心的整理3",
    paragraph3:
      "詮釋階段,避免發送自相矛盾的訊息,言語和聲音其實是兩個傳播符號，,當兩種符號發出一致的訊息時，聲音的重要性至少是言語訊息的五倍。",
    image3: "https://upload.cc/i1/2021/05/02/14lcdU.png",
    subtitle4: "心的整理4",
    paragraph4:
      "反饋階段,解讀聽眾的反饋線索,將聽眾的反饋放到相應的背景中去解讀，你應該考慮到具體的場景,環境,一天當中的時段，也要想到聽眾的文化背景和他們的年齡場合。",
    image4: "https://upload.cc/i1/2021/05/02/iWRNDl.png",
    subtitle5: "心的整理5",
    paragraph5:
      "記憶階段,讓你傳遞的訊息更易於被記住,加入幫助記憶的線索關鍵詞,為了幫助聽眾認識重要的事實，請使用一些提示關鍵詞，比如,現在，我要展示有關,的定義,最重要的概念是,演講語速稍快,大部分演講者語速在每分鐘100,175個單詞。但是，聽眾每分鐘能夠消化400,800個單詞。因此,利於理解的最佳演講速度是每分鐘講275,300個單詞,不要在一開始就陳述核心觀點,在演講剛開始的時候，大部分聽眾落座不久，他們還沒有做好傾聽的準備。 通過視覺輔助促進記憶,精心挑選那些簡潔並且與你的核心觀點有相關性的圖片或圖表，這能夠使聽眾記住雙倍的內容。",
    image5: "https://upload.cc/i1/2021/05/02/14lcdU.png",
    label1: "演講",
    label2: "國外留學",
    label3: "技巧",
  });
  Todo.create({
    id: articleId,
    author: "小楚",
    title: "法語學習必備App｜自學法語血淚談快收藏進你的筆記裡",
    time: new Date(),
    category: "share",
    view: 0,
    coverImage: "https://upload.cc/i1/2021/05/02/14lcdU.png",
    introduce:
      "Salut,tous,你們的Am,lie又來分享法語乾貨啦,昨天終於提交了80頁的法語論文,徹底鬆了一口氣,今天推薦的是我法語學習多年來一直在用的我覺得最好用的幾款APP。",
    subtitle1: "1.多鄰國",
    paragraph1:
      "零基礎外語入門學習,多鄰國APP對初學者超級友好,很多大咖都在推薦，不愧是風靡全球的app,裡面全部都是免費的學習資源，可以選擇的語言很多，有日語韓語等39種小語種噢,從最簡單的詞彙開始闖關學習，每天花個十五分鐘玩學法語的闖關遊戲還是很不錯的,記得一定要堅持哦,而且多鄰國很嚴格，每天都會給你發消息督促你學習哈哈哈。",
    image1: "https://upload.cc/i1/2021/05/02/14lcdU.png",
    subtitle2: "2.法語助手",
    paragraph2:
      "法語生詞查詢,最好用的查單詞APP，非常齊全，會提供中文翻譯,英文翻譯,法法翻譯,上面還會顯示該詞彙的級別,四級,八級,TCF等必掌握詞彙。而且還會提供近反義詞,還可以直接用來查所有時態的動詞變位,專門下載一個APP查動詞變位的我表示不大理解。",
    image2: "https://upload.cc/i1/2021/05/02/iWRNDl.png",
    subtitle3: "3.每日法語聽力 法語聽力練習",
    paragraph3:
      "這個APP是我在國內學法語的時候最喜歡用的，在國內時接觸法語的機會比較少，所以就瘋狂聽法語，給自己製造法語環境。 ,每次課後就打開這個軟件，上面有非常多的聽力材料,法語原著有聲書,法語視頻,法語電影等等。練習聽力,這個再好用不錯了。",
    image3: "https://upload.cc/i1/2021/05/02/14lcdU.png",
    subtitle4: "4.LingQ 法語精讀",
    paragraph4:
      "這個軟件我已經推薦了很多次了,最愛的外語精讀軟件,我是被法國人種草的,具體使用方法可以去找我寫過的LingQ使用教程LingQ徹底拯救了我的聽力和詞彙量,LingQ基本上是一個語言閱讀工具。 ,它最大的好處就是會直接連到網上翻譯系統。每當你點擊一個生詞,詞組或句子它立刻提供相應的翻譯,而且它本身包括很多外語閱讀材料，也可以上傳自己想學習的材料,書籍,視頻。",
    image4: "https://upload.cc/i1/2021/05/02/iWRNDl.png",
    subtitle5: "5.TED 法語演講",
    paragraph5:
      "TED也有法語版的哦,我很喜歡聽TED法語版,每期都會邀請嘉賓來真對一個話題做演講,很值得去看,都是純正法語，練習聽力最佳材料,。",
    image5: "https://upload.cc/i1/2021/05/02/14lcdU.png",
    subtitle6: "6.Tandem,法語語言交換",
    paragraph6:
      "這個是我很喜歡的軟件，在上面可以選擇你想學習的語言,很快可以找到語言夥伴一起交流。 ,特別是在國內的朋友，如果平時身邊法國人不多的話,可以推薦tandem,在上面有很多法國人,你可以拿中文作為交換。",
    image6: "https://upload.cc/i1/2021/05/02/14lcdU.png",
    label1: "app",
    label2: "語言",
    label3: "法國",
  });
  console.log("mongodb connected! write article2 ");
  console.log("done");
});
