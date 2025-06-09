function toggleMenu() {
  console.log('Menu toggle button clicked');
  const nav = document.getElementById('nav');
  if (!nav) {
    console.error('Navigation element not found');
    return;
  }
  console.log('Toggling navigation class "open"');
  nav.classList.toggle('open');
  
  console.log(`Navigation class "open" is now ${nav.classList.contains('open') ? 'enabled' : 'disabled'}`);
  // Toggle the open class on the nav element
  console.log('Menu toggled');
  console.log('Toggling menu visibility');
  console.log('Menu visibility toggled');
  console.log('Menu toggle function executed');
  console.log('Menu toggle function completed');
  // Toggle the open class on the nav element
//cument.getElementById('nav').classList.toggle('open');
}

function loadContent(key) {
  const contentData = {
    intro: '<h2>ようこそ！</h2><p>けやきが丘から始まるワクワクの物語。</p>',
    mtg1: `
<div style="border-left: 5px solid #2b6cb0; padding-left: 1rem; margin-bottom: 1.5rem;">
  <h2 style="margin-top: 0;">第1回打合せ（2025/6/6）</h2>
</div>
<div style="border: 1px solid #ccc; padding: 1rem; margin-bottom: 1.5rem; background: #fdfdfd;">
  <p><strong>日時：</strong>2025年6月6日（金） 19:00-22:00</p>
  <p><strong>場所：</strong>集会所1F 和室</p>
  <p><strong>参加者：</strong>渡辺さん、濱田農さん、石川さん、近内</p>
</div>

<h3>■前回の旅行について</h3>
<p>行先は東伊豆。23名参加、28人乗りのバスをチャーター。１泊２日で、運転手もろもろ込みで30万円くらい。</p>

<h3>■今回の旅行</h3>
<ul>
  <li>行先：秩父（決定）</li>
  <li>宿泊：濱田家（1部屋に20〜30名ほど入れる、仕切り・エアコンあり）
    <ul>
      <li>季節によって収穫体験・飯盒炊爨も可</li>
      <li>狭い場合は石川・近内所有テントで泊も検討</li>
    </ul>
  </li>
  <li>日程：9/13（土）〜14（日）で決定（9月三連休）
    <ul>
      <li>8時にけやき出発</li>
      <li>濱田氏は前のり・現地集合／解散</li>
    </ul>
  </li>
</ul>

<h3>■交通手段</h3>
<ul>
  <li>バス案：渡辺さんのコネクション（20～32人乗り）</li>
  <li>レンタカー案：ニコニコレンタカーでハイエース（10人乗り／1泊2日：22,660円）</li>
  <li>石川さんのアルファード（7～8人乗り）</li>
  <li>ハイエース2台なら石川・近内が運転（普通免許可）</li>
  <li>ルート：外環→八王子経由→秩父（関越より早い）</li>
  <li>バス案の場合はGoogleマップでのルートを提出</li>
</ul>

<h3>■ペット</h3>
<p>丸本家のネム（犬）可</p>

<h3>■内容（案）</h3>
<ul>
  <li>秩父神社に寄る</li>
  <li>せいねんの湯、薬師の湯</li>
  <li>「でんろく」で飲む、もしくは酒持参で宴</li>
  <li>ジビエ料理（イノシシなど）を出す店あり</li>
  <li>長瀞でかき氷・川下り・観光・ようざん公園・果物狩りなど</li>
  <li>キャンプ体験、農場体験なども選択肢</li>
</ul>

<h3>■下見について</h3>
<p>8/13〜14に石川アルファードで近内家（4名）＋濱田家（3名）で1泊2日の下見を予定。</p>
<ul>
  <li>お盆中で農作業繁忙期のため柔軟に調整</li>
  <li>三峰神社・三峰山・武甲山登山など候補</li>
</ul>

<h3>■コンセプト</h3>
<ul>
  <li>愛護会や下平さん引退記念の冠は付けない</li>
  <li>誰でも参加OKの仲良し旅行</li>
  <li>知らない人・関係が薄い人は一応相談制</li>
</ul>

<h3>■募集について</h3>
<ul>
  <li>口コミ中心</li>
  <li>メンバーリストは近内が管理</li>
  <li>参加希望者は石川・濱田・近内まで</li>
</ul> `,
    mtg2: '<h2>第2回打合せ</h2><p>予定です</p>',
    preview: '<h2>下見</h2><p>2025年8月13〜14日予定</p>',
    maintrip: '<h2>本番</h2><p>2025年9月13〜14日開催予定</p>'
  };

  document.getElementById('content').innerHTML = contentData[key] || '<h2>準備中です</h2>';
  console.log(`Content loaded for key: ${key}`);


  document.getElementById('nav').classList.toggle('open');
  console.log(`Menu toggled for key: ${key}`);
}