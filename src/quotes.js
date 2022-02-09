const quotes = [
    {text:"언제나 현재에 집중할수 있다면 행복할것이다.",
    author:"파울로 코엘료"},
    {text:"신은 용기있는자를 결코 버리지 않는다",
    author:"켄러"},
    {text:"행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다",
    author:"헬렌켈러"},
    {text:"피할수 없으면 즐겨라",
    author:"로버트 엘리엇"},
    {text:"행복한 삶을 살기위해 필요한 것은 거의 없다.",
    author:"마르쿠스 아우렐리우스 안토니우스"},
    {text:"절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author:"L.론허바드 "},
    {text:"어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
    author:"제임스 오펜하임"},
    {text:"한번의 실패와 영원한 실패를 혼동하지 마라",
    author:"F.스콧 핏제랄드"},
    {text:"오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
    author:"앙드레 말로"},
    {text:"행복은 습관이다,그것을 몸에 지니라",
    author:"허버드"},
    {text:"성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
    author:"톰 모나건"},
    {text:"네 믿음은 네 생각이 된다 . 네 생각은  네 말이 된다. 네말은 네 행동이 된다. 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다",
    author:"간디"},
    {text:"꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author:"괴테"},
    {text:"마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
    author:"이소룡"},
];
const quotesArraySize = quotes.length;
const RandomNumber = Math.floor(Math.random() * quotesArraySize);
const RandomText = quotes[RandomNumber].text;
const RandomAuthor = quotes[RandomNumber].author;
const quotesText = document.querySelector("#quotes span:first-child");
const quotesAuthor = document.querySelector("#quotes span:last-child");

quotesText.innerText = RandomText;
quotesAuthor.innerText = ` - ${RandomAuthor}`;
