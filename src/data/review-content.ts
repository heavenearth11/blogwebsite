// 원문 출처: https://blog.naver.com/make_it_good/224269250868
// 제목과 본문 텍스트는 원문을 그대로 사용한다 (대표 확정, 2026-09-13).
// 줄바꿈·볼드·빨간색 강조는 원문의 실제 computed style을 Playwright로 추출해 반영함 (2026-09-13).
// docs/홈페이지-기획.md, docs/홈페이지-인터뷰.md 참고.

export const meta = {
  sourceUrl: "https://blog.naver.com/make_it_good/224269250868",
  title: "자궁근종으로 일상이 무너졌던 40대 워킹맘이 3년만에 인생 구원한 방법",
};

export type Run =
  | string
  | { text: string; bold?: boolean; red?: boolean; href?: string };
export type RichText = Run[];

const b = (text: string): Run => ({ text, bold: true });
const r = (text: string): Run => ({ text, red: true });
const br = (text: string): Run => ({ text, bold: true, red: true });
const link = (text: string, href: string): Run => ({ text, href, bold: true });

export type Block =
  | {
      type: "lines";
      lines: RichText[];
      gapBeforePx?: number;
      emphasis?: boolean;
      highlight?: boolean;
      noMarginAfter?: boolean;
    }
  | { type: "lead"; lines: RichText[] }
  | { type: "quote"; lines: RichText[] }
  | { type: "h2"; text: RichText }
  | { type: "h3"; text: RichText; noMarginAfter?: boolean }
  | { type: "list"; items: RichText[] }
  | {
      type: "image";
      src: string;
      width: number;
      height: number;
      caption?: string;
    }
  | {
      type: "imagePair";
      left: { src: string; width: number; height: number };
      right: { src: string; width: number; height: number };
      caption: string;
    }
  | { type: "divider" }
  | { type: "source"; text: string };

export const introBlocks: Block[] = [
  { type: "h2", text: [r("(시작하기에 앞서…)")] },
  {
    type: "lines",
    lines: [
      ["매번 실패하고 좌절하며"],
      ["울음으로 하루하루를 보냈던"],
      ["과거의 저와 같은 분들을 위해"],
    ],
  },
  {
    type: "lines",
    lines: [
      ["제가 겪었던 고통을"],
      ["하루라도 덜 겪게 해드리고 싶어서"],
      ["쓴 글입니다."],
    ],
  },
  {
    type: "lines",
    lines: [
      [b("부탁 좀 드릴게요..")],
      ["전에 카페 인기글로 올라갔다가"],
      ["본업에 방해가 될정도로"],
      ["메일과 쪽지 질문이"],
      ["많이 들어와서 글을 삭제했는데,,,"],
    ],
  },
  {
    type: "lines",
    emphasis: true,
    lines: [
      [r("다시 한번 말씀드립니다.")],
      [r("광고 문의는 안받습니다.")],
    ],
  },
  {
    type: "image",
    src: "/images/review/쪽지.png",
    width: 931,
    height: 232,
  },
];

export const bodyBlocks: Block[] = [
  {
    type: "lead",
    lines: [
      ["이 글은 내막증 치료 후에"],
      ["또 발견한 자궁근종을 극복하고,"],
      ["마침내 소중한 아이까지 갖게 된"],
      ["저의 처절한 기록입니다."],
    ],
  },
  {
    type: "quote",
    lines: [[b("“이번엔 자궁근종이 생겼네요.")], [b("크기도 5cm입니다.”")]],
  },
  {
    type: "lines",
    lines: [
      ["4년 전 자궁내막증 진단을 받았었어요.."],
      ["생리가 불규칙해지고,"],
      ["생리양도 감당할수 없는 수준이라서"],
      ["산부인과가서 진료를 받았어요."],
    ],
  },
  {
    type: "lines",
    lines: [
      ["전혀 생각지도 못했는데"],
      ["자궁내막증이라는"],
      ["이름도 어려운 병이더라고요."],
      ["임신을 계획하던 중이기에"],
      ["더 마음이 복잡했어요."],
    ],
  },
  {
    type: "image",
    src: "/images/review/review-01.jpeg",
    width: 640,
    height: 411,
    caption: "자궁 내막증 진단을 받은 초음파 이미지",
  },
  {
    type: "lines",
    lines: [
      ["의사 선생님한테 물어보니"],
      ["자궁내막이 점점 두꺼워지면"],
      ["착상이 잘 되는 환경을 만들지 못해서"],
      [b("결국 불임으로 이어질 수 있다는 병이래요.")],
      ["이미 지금 상태에서"],
      ["임신도 어렵다는 말도 들었어요."],
    ],
  },
  {
    type: "lines",
    lines: [
      [b("매달 감당할 수 없는 생리량")],
      [b("일상생활조차 무너뜨리는")],
      [b("생리통과 골반통")],
      [b("시도때도없이 생기는 부정출혈")],
    ],
  },
  {
    type: "lines",
    lines: [
      ["이 증상들을 유발하는"],
      ["두꺼워진 자궁내막을 줄이기 위해"],
      ["미레나 시술도 받고"],
      ["호르몬약도 먹고"],
      ["그로 인한 부작용들도"],
      ["견뎌야했어요."],
    ],
  },
  {
    type: "lines",
    lines: [
      ["그 과정들이 쉽지만은 않았지만"],
      ["다행히 치료에 효과를 봐서"],
      ["증상들이 점점 좋아졌어요."],
    ],
  },
  {
    type: "lines",
    lines: [
      ["호르몬이 문제일 수 있다는 말에,"],
      ["치료 후에 여성 호르몬에 좋다는"],
      ["수십가지 영양제에 쏟은 돈만 수 백만원…"],
      ["한의원을 비롯해,"],
      ["여성에게 좋다는 테라피에도 수 백 만원…"],
    ],
  },
  {
    type: "lines",
    lines: [
      ["나름 관리하며 지내와서,"],
      ["완전히 끝난 줄 알았던 병이었어요."],
      ["어느 날부터 다시 시작된"],
      ["생리통, 허리통증, 부정출혈…"],
      [r("혹시나 했던 불안은")],
      [r("초음파실 검사실에서 절망으로 바뀌었어요.")],
    ],
  },
  {
    type: "image",
    src: "/images/review/review-02.jpeg",
    width: 966,
    height: 990,
    caption: "검사결과 기다리던 사진",
  },
  {
    type: "quote",
    lines: [[b("“이번엔 자궁근종이네요")], [b("크기도 5cm입니다.”")]],
  },
  {
    type: "quote",
    lines: [[b("\"수술을 하기엔 부담스러우니")], [b("일단 경과를 지켜봅시다.\"")]],
  },
  {
    type: "quote",
    lines: [
      [br("“계속 상황이 악화되면")],
      [br("자궁을 적출하는것도 고려해 보아야 합니다.”")],
    ],
  },
  {
    type: "image",
    src: "/images/review/review-03.jpeg",
    width: 966,
    height: 724,
    caption: "자궁근종 초음파 사진",
  },
  {
    type: "lines",
    lines: [
      ["'지켜보자'는 말이 얼마나 무서운지"],
      ["경험해 본 분들은 아실 거예요."],
      ["아무것도 하지 않고"],
      ["혹이 더 커지기를 기다리는 것만 같아"],
      ["매일 밤 잠을 이룰 수 없었어요."],
    ],
  },
  {
    type: "lines",
    lines: [
      ["이제사 임신에 대한 희망을 다시 품을 수 있었는데"],
      ["적출이라니…"],
      ["이대로 손 놓고 있을 수는 없다는 생각에,"],
      ["좋다는 건 전부 시도해 봤어요."],
    ],
  },
  {
    type: "lines",
    lines: [
      [b("좌욕, 쑥뜸, 고가의 근적외선 온열복대")],
      [b("이노시톨, 엽산, 오메가3, 한약, 침 치료")],
    ],
  },
  {
    type: "lines",
    lines: [
      ["하지만 결과는 참담했어요."],
      ["오히려 온열 자극 때문에"],
      ["골반 쪽 혈류가 과하게 쏠리면서"],
      ["부정출혈이 더 심해졌고,"],
      ["생리 주기도 완전히 뒤엉켜 버렸어요."],
    ],
  },
  { type: "divider" },
  { type: "h2", text: ["1. 자궁 질환, 도대체 왜 반복해서 재발하는가?"] },
  {
    type: "lines",
    lines: [
      ["좌절 속에서 논문과 해외 연구 자료를"],
      ["샅샅이 뒤지기 시작했어요."],
      ["왜 치료를 하고 좋다는 걸 다 해봐도"],
      [r("다시 혹이 생기는 걸까?")],
    ],
  },
  {
    type: "image",
    src: "/images/review/review-04.jpeg",
    width: 811,
    height: 865,
    caption: "친정에서 쉬는 기간에 해외 논문들을 전부 찾아봤던 날들",
  },
  {
    type: "lines",
    lines: [
      ["그러다 발견한 자궁 질환의 근본적인 원인은"],
      ["바로 '과잉 에스트로겐 축적'"],
      ["(에스트로겐 우세증)이었어요."],
    ],
  },
  {
    type: "lines",
    lines: [
      ["우리가 일상에서 접하는 ", b("스트레스, 환경호르몬,")],
      [b("간 해독 기능 약화"), " 등으로 인해"],
      ["체내에 불필요한 에스트로겐이"],
      [r("배출되지 못하고 쌓이게 되는거죠.")],
    ],
  },
  {
    type: "lines",
    lines: [
      ["이렇게 쌓인 과잉 에스트로겐은"],
      [b("자궁에 강력한 독소로 작용"), "하며,"],
      [r("호르몬 균형을 완전히 무너뜨려요.")],
    ],
  },
  {
    type: "list",
    items: [
      [b("정상 자궁 환경:"), " 에스트로겐과 프로게스테론의 균형 원활 ➔ 독소 배출 및 자궁 면역 유지"],
      [b("자궁 질환 상태:"), " 과잉 에스트로겐 축적 ➔ 자궁 독소 작용 ➔ 호르몬 균형 파괴 ➔ 자궁근종·내막증 형성 및 재발"],
    ],
  },
  {
    type: "lines",
    lines: [
      ["당연하게도, 겉으로 보이는 혹만 떼어내거나"],
      ["배를 따뜻하게 하는 것만으로는"],
      ["자궁 속 깊이 쌓인 '에스트로겐 독소'를"],
      ["없앨 수 없었던 거예요."],
    ],
  },
  { type: "h2", text: ["2. ", r("자궁 독소"), "를 비워내는 가장 현실적인 3가지 루틴"] },
  {
    type: "lines",
    lines: [
      ["근본 원인을 깨닫고 난 후, 자궁 환경 개선에 성공한"],
      ["수많은 사례를 바탕으로"],
      ["저만의 루틴을 확립했어요."],
    ],
  },
  {
    type: "image",
    src: "/images/review/review-05.png",
    width: 966,
    height: 555,
    caption: "외국 커뮤니티 사이트를 살펴보니 유용한 정보들이 많았다.",
  },
  { type: "h3", text: ["① 규칙적인 골반 순환 운동"], noMarginAfter: true },
  {
    type: "lines",
    gapBeforePx: 29,
    lines: [
      ["하루 20~30분 가볍게 걷기,"],
      ["고관절 스트레칭을 통해"],
      ["골반 내부의 혈액순환을 돕고"],
      ["면역력을 끌어올리려 노력했어요."],
      ["활발한 혈액 순환으로,"],
      ["독소를 조금이라도 빼기 위해서요."],
    ],
  },
  { type: "h3", text: ["② 코르티솔(스트레스) 차단"], noMarginAfter: true },
  {
    type: "lines",
    gapBeforePx: 29,
    lines: [
      ["스트레스는 에스트로겐 분해를 방해하고"],
      ["자궁 독소를 축적시키는 주범이라"],
      ["취침 전 심호흡과 명상으로"],
      ["호르몬 불균형을 자극하는 스트레스를 줄였어요."],
    ],
  },
  {
    type: "lines",
    lines: [
      ["이 때, 디퓨저같은걸 활용해볼까? 했는데,"],
      ["아무래도 외부 화학물질이"],
      ["독소를 더 자극할 것 같아서"],
      ["따로 캔들이나 디퓨저는 사용하지 않았어요."],
    ],
  },
  { type: "h3", text: ["③ 과잉 에스트로겐 분해 및 ", r("자궁 디톡스"), " (가장 핵심)"], noMarginAfter: true },
  {
    type: "lines",
    gapBeforePx: 29,
    lines: [
      ["아무래도 운동과 스트레스 관리만으로는"],
      ["이미 자궁에 쌓인 과잉 에스트로겐을"],
      [r("직접 분해하는 데 한계"), "가 있었어요."],
    ],
  },
  {
    type: "lines",
    lines: [
      ["해외 수십 편의 논문을 조사한 결과,"],
      [b("브로콜리, 양배추, 케일 같은")],
      [b("십자화과 채소와")],
      [b("강황 유래 항산화 복합물"), "이"],
      ["간의 에스트로겐 대사를 도와"],
      [r("과잉 에스트로겐을 분해"), "하고"],
      [r("자궁 독소를 배출"), "하는 데"],
      ["결정적인 역할을 한다는 것을 알게 되었어요."],
    ],
  },
  {
    type: "image",
    src: "/images/review/review-06.png",
    width: 637,
    height: 516,
    caption: "강황이 자궁질환 개선에 실제 효과를 준다는 것을 정리한 논문",
  },
  {
    type: "source",
    text: "출처: Vallée A, Lecarpentier Y. Curcumin and Endometriosis. Int J Mol Sci. 2020 Mar 31;21(7):2440.",
  },
  {
    type: "lines",
    lines: [
      ["그 중 눈길을 끈 것은 프랑스 연구 결과였어요."],
      [r("강황의 유효 성분"), "인 커큐민이"],
      ["자궁 질환에서"],
      ["염증과 산화스트레스를 확실히 잡고,"],
      ["혈관을 새로 만들어 ", r("자궁 환경을 재생"), "하는데도"],
      ["큰 도움이 된다는 내용이었어요."],
    ],
  },
  { type: "lines", lines: [["스페인에서도 관련 연구가 있더라고요?"]] },
  {
    type: "image",
    src: "/images/review/review-07.png",
    width: 775,
    height: 397,
    caption: "브로콜리, 케일이 자궁질환 환자의 삶의 질을 높인다는 내용",
  },
  {
    type: "source",
    text: "출처: García-Ibañez P, et al., Brassica Bioactives Could Ameliorate the Chronic Inflammatory Condition of Endometriosis. Int J Mol Sci. 2020 Dec 10;21(24):9397.",
  },
  {
    type: "lines",
    lines: [
      ["브로콜리 새싹, 양배추, 케일과 같은"],
      ["십자화과 채소들이"],
      [r("만성적인 자궁내막증, 자궁 염증 등을 개선"), "시켜"],
      ["환자들의 삶의 질을 크게 높인다는 내용이었어요."],
    ],
  },
  {
    type: "lines",
    lines: [
      ["자료를 서치하고"],
      ["결론을 도출하는데 수 개월이 걸렸지만,"],
      ["자궁 내막증을 어떻게 예방하고"],
      ["관리하는지 찾아냈다는게"],
      ["정말 뿌듯하고, 또 안심이 되었어요."],
    ],
  },
  { type: "h2", text: ["3. 마침내 찾아낸 자궁 디톡스 솔루션"] },
  {
    type: "lines",
    lines: [
      ["처음에는 강황, 브로콜리 새싹, 양배추,"],
      ["케일, 강황, 녹차 등을"],
      ["직접 챙겨 먹으려 했으나,"],
      ["매일 유효한 성분 함량을 맞춰 복용하는 것은"],
      ["현실적으로 불가능에 가까웠어요."],
    ],
  },
  {
    type: "image",
    src: "/images/review/review-08.jpeg",
    width: 780,
    height: 1024,
    caption: "논문에 나온대로 먹어보려 했지만, 매일 유효한 양을 챙겨먹기에는 불가능",
  },
  {
    type: "lines",
    lines: [
      ["그리고 골고루 챙겨먹으려고"],
      ["다양한 종류의 야채를 샀는데"],
      ["야근하거나 약속이 있는 날에는"],
      ["밖에서 밥을 먹게되니"],
      ["집밥을 꾸준히 챙겨먹기 힘들더라구요."],
    ],
  },
  {
    type: "lines",
    lines: [
      ["결국 요리로 해먹은 야채보다"],
      ["버리는게 더 많게되니"],
      ["이렇게 관리하는거는"],
      ["오래 못하겠다는것을"],
      ["깨달았어요."],
    ],
  },
  {
    type: "imagePair",
    left: { src: "/images/review/브로콜리.jpg", width: 891, height: 587 },
    right: { src: "/images/review/양배추.jpg", width: 1165, height: 1112 },
    caption: "결국 상해버린 브로콜리와 양배추",
  },
  {
    type: "lines",
    lines: [
      ["자궁 독소 배출과 에스트로겐 분해에 최적화된"],
      [r("여성 전용 포뮬러 배합"), "을 알게 되었어요."],
    ],
  },
  {
    type: "list",
    items: [
      [b("강황추출물 + 녹차추출물")],
      [b("양배추 + 케일 + 시금치 + 브로콜리새싹분말")],
      [b("22종 혼합유산균 및 비타민 D3, E, B6")],
    ],
  },
  {
    type: "lines",
    lines: [
      ["자궁 독소를 유발하는"],
      ["과잉 에스트로겐 분해에 필요한 핵심 성분들이"],
      [b("완벽한 황금 비율"), "로 들어가 있었고,"],
      ["HACCP 인증을 받은 안전한 시설에서 제조되어"],
      ["믿고 복용을 시작했어요."],
    ],
  },
  { type: "h2", text: ["4. 나에게 찾아온 기적 같은 변화"] },
  { type: "lines", lines: [["복용 후 변화는 생각보다 빠르게 찾아왔어요."]] },
  { type: "h3", text: [r("1개월 차")], noMarginAfter: true },
  {
    type: "lines",
    gapBeforePx: 18,
    lines: [
      ["매달 삶을 흔들던 극심한 생리통과"],
      ["생리 전 부정출혈이 눈에 띄게 줄어들었어요."],
    ],
  },
  { type: "h3", text: [r("2개월 차")], noMarginAfter: true },
  {
    type: "lines",
    gapBeforePx: 18,
    lines: [
      ["묵직하고 찌르는 듯했던 골반 통증이 사라지고"],
      ["몸 전체가 가벼워졌어요."],
    ],
  },
  { type: "h3", text: [r("3개월 차")], noMarginAfter: true },
  {
    type: "lines",
    gapBeforePx: 18,
    lines: [
      ["병원 정기검진 날, 초음파 화면을 보고"],
      ["의사 선생님도 무슨 관리했냐고 물어보셨어요."],
    ],
  },
  {
    type: "lines",
    lines: [
      [b("5cm나 됐던 자궁근종이")],
      [b("1cm로 줄어들었고,")],
      [b("흩어져 있던 내막증 병변들이")],
      [b("거의 깨끗하게 정리되었어요.")],
    ],
  },
  {
    type: "lines",
    lines: [
      ["그리고 자궁 디톡스를 통해"],
      ["자궁 환경이 건강하게 개선되자"],
      ["그토록 바랐지만 재발 때문에 포기하고 있었던"],
      [b("소중한 아이가")],
      [b("자연임신으로 찾아왔어요.")],
    ],
  },
  {
    type: "image",
    src: "/images/review/review-10.png",
    width: 701,
    height: 371,
    caption: "임신.. 6주차",
  },
  {
    type: "lines",
    lines: [
      ["생리를 한 번 건너뛰고"],
      ["느낌이 평상시와는 달라 검사를 갔는데,"],
      ["의사선생님이 “어?” 하시길래 또 재발했나 싶어"],
      ["마음이 내려앉았거든요?"],
    ],
  },
  {
    type: "lines",
    lines: [
      ["그런데, 너무나 놀랍게도"],
      ["우리 베베 (태명)을 처음 만난 날이 되었네요 ㅠㅠ"],
    ],
  },
  { type: "divider" },
  { type: "h2", text: ["마무리하며"] },
  {
    type: "lines",
    lines: [
      ["자궁 질환으로 고통받고 계신 분들의 심정을"],
      ["누구보다 잘 알고 있어요."],
    ],
  },
  {
    type: "lines",
    lines: [
      ["수술에 대한 두려움,"],
      ["계속되는 재발,"],
      ["멈추지 않는 통증…"],
      ["하지만 포기하지 마세요."],
    ],
  },
  {
    type: "lines",
    lines: [
      [b("그리고 그 방법은")],
      [b("생각만큼 복잡하지 않아요.")],
    ],
  },
  {
    type: "lines",
    lines: [
      ["너무 많은것을 하려고 하다 보면"],
      ["오히려 쉽게 지치고 더 망가질 수 있다는걸"],
      ["직접 공부하고 경험하면서"],
      ["깨닫게 됐어요."],
    ],
  },
  {
    type: "lines",
    lines: [
      [br("그래서")],
      [br("진짜로 효과가 있던 것에만 집중했고")],
      [br("그것이 제 몸을 바꾸고")],
      [br("제 일상을 제자리로")],
      [br("돌려놓았어요")],
    ],
  },
  {
    type: "lines",
    lines: [
      ["이 글이"],
      ["예전의 저처럼"],
      ["불안하고 지쳐있는 누군가에게"],
      ["희망이 되어드릴 수 있기를"],
      ["진심으로 바랍니다."],
    ],
  },
  { type: "h2", text: [r("(+추가+)")] },
  {
    type: "lines",
    lines: [
      ["쪽지랑 메일로"],
      ["제품 물어보시는 분이 많더라구요."],
    ],
  },
  {
    type: "lines",
    lines: [
      ["제가 적어놓은 성분들이 들어간거를 고르시면"],
      ["동일한 효과를 보실 수 있을거에요."],
    ],
  },
  {
    type: "lines",
    lines: [
      [b("그래도")],
      [b("제품을 잘 못찾겠다고 연락주시는 분들이 있어")],
      [b("제가 복용했던 자궁디톡스 유산균 남겨드려요.")],
    ],
  },
  {
    type: "lines",
    lines: [
      ["자칫 광고로 보일수도 있어서"],
      ["딱 일주일만 공개하고 삭제할 예정입니다."],
    ],
  },
  {
    type: "lines",
    emphasis: true,
    highlight: true,
    noMarginAfter: true,
    lines: [["자궁디톡스 유산균 링크"]],
  },
  {
    type: "lines",
    highlight: true,
    gapBeforePx: 18,
    lines: [
      ["→ ", link("https://m.site.naver.com/2gFOf", "https://m.site.naver.com/2gFOf")],
    ],
  },
];
