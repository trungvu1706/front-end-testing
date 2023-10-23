import {
  column1,
  column2,
  column3,
  column4,
  column5,
  column6,
  column7,
  column8,
  iconDinner,
  iconDocument,
  iconInfo,
  iconLunch,
  iconMental,
  iconMorning,
  iconSnack,
  myBodyImg,
  myDairyImg,
  myExercise,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
} from '@/assets/images'
import { randomId } from '@/utils/helper.ts'
import { PATH_COLUMN, PATH_RECORD } from '@/routes'
import { MenuList } from '@/Model'

export const MENU_LIST: MenuList[] = [
  {
    icon: iconDocument,
    title: '自分の記録',
    path: PATH_RECORD,
  },
  {
    icon: iconMental,
    title: 'チャレンジ',
  },
  {
    icon: iconInfo,
    title: 'お知らせ',
    notification: 1,
  },
]

export const MEDALS = [iconMorning, iconLunch, iconDinner, iconSnack]

export const PICTURE_LIST = [
  {
    id: randomId(10),
    img: pic1,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic2,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic3,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic4,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic5,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic6,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic7,
    date: '05.21.Morning',
  },
  {
    id: randomId(10),
    img: pic8,
    date: '05.21.Morning',
  },
]

export const FOOTER_LIST = [
  '会員登録',
  '運営会社',
  '利用規約',
  '個人情報の取扱について',
  '特定商取引法に基づく表記',
  'お問い合わせ',
]

export const CARD_LIST = [
  {
    id: randomId(10),
    title: 'BODY RECORD',
    desc: '自分のカラダの記録',
    bgImg: myBodyImg,
  },
  {
    id: randomId(10),
    title: 'MY EXERCISE',
    desc: '自分の運動の記録',
    bgImg: myExercise,
  },
  {
    id: randomId(10),
    title: 'MY DIARY',
    desc: '自分の日記',
    bgImg: myDairyImg,
  },
]

export const CHART_DATA = [
  {
    name: '6月',
    uv: 4000,
    pv: 2400,
  },
  {
    name: '7月',
    uv: 3000,
    pv: 1398,
  },
  {
    name: '8月',
    uv: 2000,
    pv: 9800,
  },
  {
    name: '9月',
    uv: 2780,
    pv: 3908,
  },
  {
    name: '10月',
    uv: 1890,
    pv: 4800,
  },
  {
    name: '11月',
    uv: 2390,
    pv: 3800,
  },
  {
    name: '12月',
    uv: 3490,
    pv: 4300,
  },
  {
    name: '1月',
    uv: 1290,
    pv: 4800,
  },
  {
    name: '2月',
    uv: 1890,
    pv: 4800,
  },
  {
    name: '3月',
    uv: 1890,
    pv: 4800,
  },
  {
    name: '4月',
    uv: 1890,
    pv: 4800,
  },
  {
    name: '5月',
    uv: 1890,
    pv: 4800,
  },
]

export const CHART_TIMES = [
  {
    id: randomId(10),
    title: '日',
  },
  {
    id: randomId(10),
    title: '週',
  },
  {
    id: randomId(10),
    title: '月',
  },
  {
    id: randomId(10),
    title: '年',
  },
]

export const DATA_EXERCISES = [
  {
    id: randomId(10),
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    id: randomId(10),
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    id: randomId(10),
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    id: randomId(10),
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    id: randomId(10),
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    id: randomId(10),
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    id: randomId(10),
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    id: randomId(10),
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    id: randomId(10),
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
  {
    id: randomId(10),
    title: '家事全般（立位・軽い）',
    cal: 26,
    time: 10,
  },
]

export const DATA_DIARIES = [
  {
    id: randomId(10),
    day: '2021.05.21 ',
    time: '23:25',
    content:
      '私の日記の記録が一部表示されます。\n' +
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: randomId(10),
    day: '2021.05.21 ',
    time: '23:25',
    content:
      '私の日記の記録が一部表示されます。\n' +
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: randomId(10),
    day: '2021.05.21 ',
    time: '23:25',
    content:
      '私の日記の記録が一部表示されます。\n' +
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: randomId(10),
    day: '2021.05.21 ',
    time: '23:25',
    content:
      '私の日記の記録が一部表示されます。\n' +
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: randomId(10),
    day: '2021.05.21 ',
    time: '23:25',
    content:
      '私の日記の記録が一部表示されます。\n' +
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: randomId(10),
    day: '2021.05.21 ',
    time: '23:25',
    content:
      '私の日記の記録が一部表示されます。\n' +
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: randomId(10),
    day: '2021.05.21 ',
    time: '23:25',
    content:
      '私の日記の記録が一部表示されます。\n' +
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    id: randomId(10),
    day: '2021.05.21 ',
    time: '23:25',
    content:
      '私の日記の記録が一部表示されます。\n' +
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
]

export const COLUMN_CARD = [
  {
    id: randomId(10),
    title: 'recommended column',
    desc: 'オススメ',
  },
  {
    id: randomId(10),
    title: 'recommended diet',
    desc: 'ダイエット',
  },
  {
    id: randomId(10),
    title: 'recommended beauty',
    desc: '美容',
  },
  {
    id: randomId(10),
    title: 'recommended health',
    desc: '健康',
  },
]

export const DATA_COLUMNS = [
  {
    id: randomId(10),
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理 #和食  #DHA',
    day: '2021.05.17',
    time: '23:25',
    img: column1,
  },
  {
    id: randomId(10),
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理 #和食  #DHA',
    day: '2021.05.17',
    time: '23:25',
    img: column2,
  },
  {
    id: randomId(10),
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理 #和食  #DHA',
    day: '2021.05.17',
    time: '23:25',
    img: column3,
  },
  {
    id: randomId(10),
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理 #和食  #DHA',
    day: '2021.05.17',
    time: '23:25',
    img: column4,
  },
  {
    id: randomId(10),
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理 #和食  #DHA',
    day: '2021.05.17',
    time: '23:25',
    img: column5,
  },
  {
    id: randomId(10),
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理 #和食  #DHA',
    day: '2021.05.17',
    time: '23:25',
    img: column6,
  },
  {
    id: randomId(10),
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理 #和食  #DHA',
    day: '2021.05.17',
    time: '23:25',
    img: column7,
  },
  {
    id: randomId(10),
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理 #和食  #DHA',
    day: '2021.05.17',
    time: '23:25',
    img: column8,
  },
]

export const DRAW_MENUS = [
  {
    id: randomId(10),
    title: '自分の記録',
    path: PATH_RECORD,
  },
  {
    id: randomId(10),
    title: '体重グラフ',
    path: '',
  },
  {
    id: randomId(10),
    title: '目標',
    path: '',
  },
  {
    id: randomId(10),
    title: '選択中のコース',
    path: '',
  },
  {
    id: randomId(10),
    title: 'コラム一覧',
    path: PATH_COLUMN,
  },
  {
    id: randomId(10),
    title: '設定',
    path: '',
  },
]
